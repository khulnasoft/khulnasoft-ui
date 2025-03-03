<script>
import isObject from 'lodash/isObject';
import { BFormInput } from '../../../../vendor/bootstrap-vue/src/components/form-input/form-input';

import { formInputWidths } from '../../../../utils/constants';

const MODEL_PROP = 'value';
const MODEL_EVENT = 'input';

export default {
  name: 'GlFormInput',
  components: {
    BFormInput,
  },
  inheritAttrs: false,
  model: {
    prop: MODEL_PROP,
    event: MODEL_EVENT,
  },
  props: {
    /**
     * Maximum width of the input
     */
    width: {
      type: [String, Object],
      required: false,
      default: null,
      validator: (value) => {
        const widths = isObject(value) ? Object.values(value) : [value];

        return widths.every((width) => Object.values(formInputWidths).includes(width));
      },
    },
  },
  computed: {
    cssClasses() {
      if (this.width === null) {
        return [];
      }

      if (isObject(this.width)) {
        const { default: defaultWidth, ...nonDefaultWidths } = this.width;

        return [
          // eslint-disable-next-line @gitlab/tailwind-no-interpolation -- Not a CSS utility
          ...(defaultWidth ? [`gl-form-input-${defaultWidth}`] : []),
          ...Object.entries(nonDefaultWidths).map(
            // eslint-disable-next-line @gitlab/tailwind-no-interpolation -- Not a CSS utility
            ([breakpoint, width]) => `gl-${breakpoint}-form-input-${width}`
          ),
        ];
      }

      // eslint-disable-next-line @gitlab/tailwind-no-interpolation -- Not a CSS utility
      return [`gl-form-input-${this.width}`];
    },
    listeners() {
      return {
        ...this.$listeners,
        // Swap purpose of input and update events from underlying BFormInput.
        // See https://github.com/khulnasoft/khulnasoft-ui/-/issues/631.
        input: (...args) => {
          /**
           * Emitted to update the v-model
           *
           * @event update
           * @property {string} value new value
           */
          this.$emit('update', ...args);
        },
        update: (...args) => {
          /**
           * Triggered by user interaction. Emitted after any formatting (not including 'trim' or 'number' props).
           * Useful for getting the currently entered value when the 'debounce' or 'lazy' props are set.
           *
           * @event input
           * @property {string} value new value
           */
          this.$emit(MODEL_EVENT, ...args);
        },
      };
    },
    noWheel() {
      return this.$attrs.type === 'number';
    },
  },
};
</script>

<template>
  <b-form-input
    class="gl-form-input"
    :class="cssClasses"
    :no-wheel="noWheel"
    v-bind="$attrs"
    v-on="listeners"
  />
</template>
