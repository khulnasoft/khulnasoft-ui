import { extend } from '../vue'
import { PROP_TYPE_ANY, PROP_TYPE_BOOLEAN, PROP_TYPE_STRING } from '../constants/props'
import { EVENT_NAME_CHANGE } from '../constants/events'
import { attemptBlur, attemptFocus } from '../utils/dom'
import { isBoolean } from '../utils/inspect'
import { looseEqual } from '../utils/loose-equal'
import { makeModelMixin } from '../utils/model'
import { sortKeys } from '../utils/object'
import { makeProp, makePropsConfigurable } from '../utils/props'
import { attrsMixin } from './attrs'
import { formControlMixin, props as formControlProps } from './form-control'
import { formCustomMixin, props as formCustomProps } from './form-custom'
import { formSizeMixin, props as formSizeProps } from './form-size'
import { formStateMixin, props as formStateProps } from './form-state'
import { idMixin, props as idProps } from './id'
import { normalizeSlotMixin } from './normalize-slot'

// --- Constants ---

const {
  mixin: modelMixin,
  props: modelProps,
  prop: MODEL_PROP_NAME,
  event: MODEL_EVENT_NAME
} = makeModelMixin('checked', { defaultValue: null })

export { MODEL_PROP_NAME, MODEL_EVENT_NAME }

// --- Props ---

export const props = makePropsConfigurable(
  sortKeys({
    ...idProps,
    ...modelProps,
    ...formControlProps,
    ...formSizeProps,
    ...formStateProps,
    ...formCustomProps,
    ariaLabel: makeProp(PROP_TYPE_STRING),
    ariaLabelledby: makeProp(PROP_TYPE_STRING),
    inline: makeProp(PROP_TYPE_BOOLEAN, false),
    value: makeProp(PROP_TYPE_ANY)
  }),
  'formRadioCheckControls'
)

// --- Mixin ---

// @vue/component
export const formRadioCheckMixin = extend({
  mixins: [
    attrsMixin,
    idMixin,
    modelMixin,
    normalizeSlotMixin,
    formControlMixin,
    formSizeMixin,
    formStateMixin,
    formCustomMixin
  ],
  inheritAttrs: false,
  props,
  data() {
    return {
      localChecked: this.isGroup ? this.bvGroup[MODEL_PROP_NAME] : this[MODEL_PROP_NAME]
    }
  },
  computed: {
    computedLocalChecked: {
      get() {
        return this.isGroup ? this.bvGroup.localChecked : this.localChecked
      },
      set(value) {
        if (this.isGroup) {
          this.bvGroup.localChecked = value
        } else {
          this.localChecked = value
        }
      }
    },
    isChecked() {
      return looseEqual(this.value, this.computedLocalChecked)
    },
    isRadio() {
      return true
    },
    isGroup() {
      // Is this check/radio a child of check-group or radio-group?
      return !!this.bvGroup
    },
    isSwitch() {
      // Custom switch styling (checkboxes only)
      return this.isRadio ? false : this.isGroup ? this.bvGroup.switches : this.switch
    },
    isInline() {
      return this.isGroup ? this.bvGroup.inline : this.inline
    },
    isDisabled() {
      // Child can be disabled while parent isn't, but is always disabled if group is
      return this.isGroup ? this.bvGroup.disabled || this.disabled : this.disabled
    },
    isRequired() {
      // Required only works when a name is provided for the input(s)
      // Child can only be required when parent is
      // Groups will always have a name (either user supplied or auto generated)
      return this.computedName && (this.isGroup ? this.bvGroup.required : this.required)
    },
    computedName() {
      // Group name preferred over local name
      return (this.isGroup ? this.bvGroup.groupName : this.name) || null
    },
    computedForm() {
      return (this.isGroup ? this.bvGroup.form : this.form) || null
    },
    computedSize() {
      return (this.isGroup ? this.bvGroup.size : this.size) || ''
    },
    computedState() {
      return this.isGroup ? this.bvGroup.computedState : isBoolean(this.state) ? this.state : null
    },
    computedAttrs() {
      const { isDisabled: disabled, isRequired: required } = this

      return {
        ...this.bvAttrs,
        id: this.safeId(),
        type: this.isRadio ? 'radio' : 'checkbox',
        name: this.computedName,
        form: this.computedForm,
        disabled,
        required,
        'aria-required': required || null,
        'aria-label': this.ariaLabel || null,
        'aria-labelledby': this.ariaLabelledby || null
      }
    }
  },
  watch: {
    [MODEL_PROP_NAME](...args) {
      this[`${MODEL_PROP_NAME}Watcher`](...args)
    },
    computedLocalChecked(...args) {
      this.computedLocalCheckedWatcher(...args)
    }
  },
  methods: {
    [`${MODEL_PROP_NAME}Watcher`](newValue) {
      if (!looseEqual(newValue, this.computedLocalChecked)) {
        this.computedLocalChecked = newValue
      }
    },
    computedLocalCheckedWatcher(newValue, oldValue) {
      if (!looseEqual(newValue, oldValue)) {
        this.$emit(MODEL_EVENT_NAME, newValue)
      }
    },

    handleChange({ target: { checked } }) {
      const { value } = this
      const localChecked = checked ? value : null

      this.computedLocalChecked = value

      // Fire events in a `$nextTick()` to ensure the `v-model` is updated
      this.$nextTick(() => {
        // Change is only emitted on user interaction
        this.$emit(EVENT_NAME_CHANGE, localChecked)

        // If this is a child of a group, we emit a change event on it as well
        if (this.isGroup) {
          this.bvGroup.$emit(EVENT_NAME_CHANGE, localChecked)
        }
      })
    },

    // Convenience methods for focusing the input
    focus() {
      if (!this.isDisabled) {
        attemptFocus(this.$refs.input)
      }
    },

    blur() {
      if (!this.isDisabled) {
        attemptBlur(this.$refs.input)
      }
    }
  },
  render(h) {
    const { isRadio, isInline, isSwitch, computedSize, bvAttrs } = this
    const $content = this.normalizeSlot()

    const $input = h('input', {
      class: ['custom-control-input', this.stateClass],
      attrs: this.computedAttrs,
      domProps: {
        value: this.value,
        checked: this.isChecked
      },
      on: {
        change: this.handleChange
      },
      key: 'input',
      ref: 'input'
    })

    const $label = h(
      'label',
      {
        class: 'custom-control-label',
        attrs: { for: this.safeId() }
      },
      $content
    )

    return h(
      'div',
      {
        class: [
          {
            'custom-control-inline': isInline,
            'custom-checkbox': !isRadio && !isSwitch,
            'custom-switch': isSwitch,
            'custom-radio': isRadio,
            // Temporary until Bootstrap v4 supports sizing (most likely in V5)
            [`b-custom-control-${computedSize}`]: computedSize
          },
          'custom-control',
          bvAttrs.class
        ],
        style: bvAttrs.style
      },
      [$input, $label]
    )
  }
})
