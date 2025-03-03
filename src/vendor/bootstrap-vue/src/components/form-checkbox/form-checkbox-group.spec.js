import { mount } from '@vue/test-utils'
import { waitNT } from '../../../tests/utils'
import { BFormCheckboxGroup } from './form-checkbox-group'

describe('form-checkbox-group', () => {
  // --- Structure, class and attributes tests ---

  it('default has structure <div></div>', async () => {
    const wrapper = mount(BFormCheckboxGroup)

    expect(wrapper).toBeDefined()
    expect(wrapper.element.tagName).toBe('DIV')

    const $children = wrapper.element.children
    expect($children.length).toEqual(0)

    wrapper.destroy()
  })

  it('default has no classes on wrapper other than focus ring', async () => {
    const wrapper = mount(BFormCheckboxGroup)

    expect(wrapper.classes()).toContain('bv-no-focus-ring')
    expect(wrapper.classes().length).toEqual(1)

    wrapper.destroy()
  })

  it('default has auto ID set', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: document.body
    })

    await waitNT(wrapper.vm)

    // Auto ID not generated until after mount
    expect(wrapper.attributes('id')).toBeDefined()

    wrapper.destroy()
  })

  it('default has tabindex set to -1', async () => {
    const wrapper = mount(BFormCheckboxGroup)

    expect(wrapper.attributes('tabindex')).toBeDefined()
    expect(wrapper.attributes('tabindex')).toBe('-1')

    wrapper.destroy()
  })

  it('default does not have aria-required set', async () => {
    const wrapper = mount(BFormCheckboxGroup)

    expect(wrapper.attributes('aria-required')).toBeUndefined()

    wrapper.destroy()
  })

  it('default does not have aria-invalid set', async () => {
    const wrapper = mount(BFormCheckboxGroup)

    expect(wrapper.attributes('aria-invalid')).toBeUndefined()

    wrapper.destroy()
  })

  it('default has attribute role=group', async () => {
    const wrapper = mount(BFormCheckboxGroup)

    expect(wrapper.attributes('role')).toBeDefined()
    expect(wrapper.attributes('role')).toBe('group')

    wrapper.destroy()
  })

  it('default has user provided ID', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: document.body,
      propsData: {
        id: 'test'
      }
    })

    expect(wrapper.attributes('id')).toBeDefined()
    expect(wrapper.attributes('id')).toBe('test')

    wrapper.destroy()
  })

  it('default has class was-validated when validated=true', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: document.body,
      propsData: {
        validated: true
      }
    })

    expect(wrapper.classes()).toBeDefined()
    expect(wrapper.classes()).toContain('was-validated')

    wrapper.destroy()
  })

  it('default has attribute aria-invalid=true when state=false', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: document.body,
      propsData: {
        state: false
      }
    })

    expect(wrapper.attributes('aria-invalid')).toBeDefined()
    expect(wrapper.attributes('aria-invalid')).toBe('true')

    wrapper.destroy()
  })

  it('default does not have attribute aria-invalid when state=true', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: document.body,
      propsData: {
        state: true
      }
    })

    expect(wrapper.attributes('aria-invalid')).toBeUndefined()

    wrapper.destroy()
  })

  it('default does not have attribute aria-invalid when state=null', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: document.body,
      propsData: {
        state: null
      }
    })

    expect(wrapper.attributes('aria-invalid')).toBeUndefined()

    wrapper.destroy()
  })

  it('default has attribute aria-invalid=true when aria-invalid=true', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: document.body,
      propsData: {
        ariaInvalid: true
      }
    })

    expect(wrapper.attributes('aria-invalid')).toBeDefined()
    expect(wrapper.attributes('aria-invalid')).toBe('true')

    wrapper.destroy()
  })

  it('default has attribute aria-invalid=true when aria-invalid="true"', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: document.body,
      propsData: {
        ariaInvalid: 'true'
      }
    })

    expect(wrapper.attributes('aria-invalid')).toBeDefined()
    expect(wrapper.attributes('aria-invalid')).toBe('true')

    wrapper.destroy()
  })

  it('default has attribute aria-invalid=true when aria-invalid=""', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: document.body,
      propsData: {
        ariaInvalid: ''
      }
    })

    expect(wrapper.attributes('aria-invalid')).toBeDefined()
    expect(wrapper.attributes('aria-invalid')).toBe('true')

    wrapper.destroy()
  })

  it('has checkboxes with input validation class "is-valid" when `state` is `true`', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: document.body,
      propsData: {
        options: ['one', 'two', 'three'],
        checked: [],
        state: true
      }
    })

    const $checkboxes = wrapper.findAll('input[type=checkbox]')
    expect($checkboxes.length).toBe(3)
    expect($checkboxes.wrappers.every(c => c.classes().includes('is-valid'))).toBe(true)
    expect($checkboxes.wrappers.every(c => c.classes().includes('is-invalid'))).toBe(false)

    wrapper.destroy()
  })

  it('has checkboxes with input validation class "is-invalid" when `state` is `false`', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: document.body,
      propsData: {
        options: ['one', 'two', 'three'],
        checked: [],
        state: false
      }
    })

    const $checkboxes = wrapper.findAll('input[type=checkbox]')
    expect($checkboxes.length).toBe(3)
    expect($checkboxes.wrappers.every(c => c.classes().includes('is-valid'))).toBe(false)
    expect($checkboxes.wrappers.every(c => c.classes().includes('is-invalid'))).toBe(true)

    wrapper.destroy()
  })

  it('has checkboxes with no input validation class when `state` is `null`', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: document.body,
      propsData: {
        options: ['one', 'two', 'three'],
        checked: [],
        state: null
      }
    })

    const $checkboxes = wrapper.findAll('input[type=checkbox]')
    expect($checkboxes.length).toBe(3)
    expect($checkboxes.wrappers.every(c => c.classes().includes('is-valid'))).toBe(false)
    expect($checkboxes.wrappers.every(c => c.classes().includes('is-invalid'))).toBe(false)

    wrapper.destroy()
  })

  // --- Functionality testing ---

  it('has checkboxes via options array', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: document.body,
      propsData: {
        options: ['one', 'two', 'three'],
        checked: []
      }
    })

    expect(wrapper.vm.isRadioGroup).toEqual(false)
    expect(wrapper.vm.localChecked).toEqual([])

    const $inputs = wrapper.findAll('input')
    expect($inputs.length).toBe(3)
    expect($inputs.wrappers.every(c => c.element.matches('input[type=checkbox]'))).toBe(true)

    wrapper.destroy()
  })

  it('has checkboxes via options array which respect disabled', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: document.body,
      propsData: {
        options: [{ text: 'one' }, { text: 'two' }, { text: 'three', disabled: true }],
        checked: []
      }
    })

    expect(wrapper.classes()).toBeDefined()

    const $inputs = wrapper.findAll('input')
    expect($inputs.length).toBe(3)
    expect(wrapper.vm.localChecked).toEqual([])
    expect($inputs.wrappers.every(c => c.element.matches('input[type=checkbox]'))).toBe(true)
    expect($inputs.at(0).attributes('disabled')).toBeUndefined()
    expect($inputs.at(1).attributes('disabled')).toBeUndefined()
    expect($inputs.at(2).attributes('disabled')).toBeDefined()

    wrapper.destroy()
  })

  it('emits change event when checkbox clicked', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: document.body,
      propsData: {
        options: ['one', 'two', 'three'],
        checked: []
      }
    })

    expect(wrapper.classes()).toBeDefined()

    const $inputs = wrapper.findAll('input')
    expect($inputs.length).toBe(3)
    expect(wrapper.vm.localChecked).toEqual([])

    await $inputs.at(0).trigger('click')
    expect(wrapper.vm.localChecked).toEqual(['one'])
    expect(wrapper.emitted('change')).toBeDefined()
    expect(wrapper.emitted('change').length).toBe(1)
    expect(wrapper.emitted('change')[0][0]).toEqual(['one'])
    expect(wrapper.emitted('input')).toBeDefined()
    expect(wrapper.emitted('input').length).toBe(1)
    expect(wrapper.emitted('input')[0][0]).toEqual(['one'])

    await $inputs.at(2).trigger('click')
    expect(wrapper.vm.localChecked).toEqual(['one', 'three'])
    expect(wrapper.emitted('change').length).toBe(2)
    expect(wrapper.emitted('change')[1][0]).toEqual(['one', 'three'])
    expect(wrapper.emitted('input').length).toBe(2)
    expect(wrapper.emitted('input')[1][0]).toEqual(['one', 'three'])

    await $inputs.at(0).trigger('click')
    expect(wrapper.vm.localChecked).toEqual(['three'])
    expect(wrapper.emitted('change').length).toBe(3)
    expect(wrapper.emitted('change')[2][0]).toEqual(['three'])
    expect(wrapper.emitted('input').length).toBe(3)
    expect(wrapper.emitted('input')[2][0]).toEqual(['three'])

    await $inputs.at(1).trigger('click')
    expect(wrapper.vm.localChecked).toEqual(['three', 'two'])
    expect(wrapper.emitted('change').length).toBe(4)
    expect(wrapper.emitted('change')[3][0]).toEqual(['three', 'two'])
    expect(wrapper.emitted('input').length).toBe(4)
    expect(wrapper.emitted('input')[3][0]).toEqual(['three', 'two'])

    wrapper.destroy()
  })

  it('does not emit "input" event when value loosely changes', async () => {
    const value = ['one', 'two', 'three']
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: document.body,
      propsData: {
        options: value.slice(),
        checked: value.slice()
      }
    })

    expect(wrapper.classes()).toBeDefined()

    const $inputs = wrapper.findAll('input')
    expect($inputs.length).toBe(3)
    expect(wrapper.vm.localChecked).toEqual(value)
    expect($inputs.wrappers.every(c => c.element.matches('input[type=checkbox]'))).toBe(true)
    expect($inputs.at(0).element.checked).toBe(true)
    expect($inputs.at(1).element.checked).toBe(true)
    expect($inputs.at(2).element.checked).toBe(true)

    expect(wrapper.emitted('input')).toBeUndefined()

    // Set internal value to new array reference
    wrapper.vm.localChecked = value.slice()
    await waitNT(wrapper.vm)

    expect(wrapper.vm.localChecked).toEqual(value)
    expect($inputs.wrappers.every(c => c.element.matches('input[type=checkbox]'))).toBe(true)
    expect($inputs.at(0).element.checked).toBe(true)
    expect($inputs.at(1).element.checked).toBe(true)
    expect($inputs.at(2).element.checked).toBe(true)

    expect(wrapper.emitted('input')).toBeUndefined()

    // Set internal value to new array (reversed order)
    wrapper.vm.localChecked = value.slice().reverse()
    await waitNT(wrapper.vm)

    expect(wrapper.vm.localChecked).toEqual(value.slice().reverse())
    expect($inputs.wrappers.every(c => c.element.matches('input[type=checkbox]'))).toBe(true)
    expect($inputs.at(0).element.checked).toBe(true)
    expect($inputs.at(1).element.checked).toBe(true)
    expect($inputs.at(2).element.checked).toBe(true)
    expect(wrapper.emitted('input')).toBeDefined()
    expect(wrapper.emitted('input').length).toBe(1)
    expect(wrapper.emitted('input')[0][0]).toEqual(value.slice().reverse())

    wrapper.destroy()
  })

  it('checkboxes reflect group checked v-model', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: document.body,
      propsData: {
        options: ['one', 'two', 'three'],
        checked: ['two']
      }
    })

    expect(wrapper.classes()).toBeDefined()

    const $inputs = wrapper.findAll('input')
    expect($inputs.length).toBe(3)
    expect(wrapper.vm.localChecked).toEqual(['two'])
    expect($inputs.wrappers.every(c => c.element.matches('input[type=checkbox]'))).toBe(true)
    expect($inputs.at(0).element.checked).toBe(false)
    expect($inputs.at(1).element.checked).toBe(true)
    expect($inputs.at(2).element.checked).toBe(false)

    await wrapper.setProps({ checked: ['three', 'one'] })
    expect(wrapper.vm.localChecked).toEqual(['three', 'one'])
    expect($inputs.wrappers.every(c => c.element.matches('input[type=checkbox]'))).toBe(true)
    expect($inputs.at(0).element.checked).toBe(true)
    expect($inputs.at(1).element.checked).toBe(false)
    expect($inputs.at(2).element.checked).toBe(true)

    wrapper.destroy()
  })

  it('child checkboxes have is-valid classes when group state set to valid', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: document.body,
      propsData: {
        options: ['one', 'two', 'three'],
        checked: [],
        state: true
      }
    })

    expect(wrapper.classes()).toBeDefined()

    const $inputs = wrapper.findAll('input')
    expect($inputs.length).toBe(3)
    expect(wrapper.vm.localChecked).toEqual([])
    expect($inputs.wrappers.every(c => c.element.matches('input[type=checkbox]'))).toBe(true)
    expect($inputs.wrappers.every(c => c.element.matches('input.is-valid'))).toBe(true)

    wrapper.destroy()
  })

  it('child checkboxes have is-invalid classes when group state set to invalid', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: document.body,
      propsData: {
        options: ['one', 'two', 'three'],
        checked: [],
        state: false
      }
    })

    const $inputs = wrapper.findAll('input')
    expect($inputs.length).toBe(3)
    expect(wrapper.vm.localChecked).toEqual([])
    expect($inputs.wrappers.every(c => c.element.matches('input[type=checkbox]'))).toBe(true)
    expect($inputs.wrappers.every(c => c.element.matches('input.is-invalid'))).toBe(true)

    wrapper.destroy()
  })

  it('child checkboxes have disabled attribute when group disabled', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: document.body,
      propsData: {
        options: ['one', 'two', 'three'],
        checked: [],
        disabled: true
      }
    })

    const $inputs = wrapper.findAll('input')
    expect($inputs.length).toBe(3)
    expect(wrapper.vm.localChecked).toEqual([])
    expect($inputs.wrappers.every(c => c.element.matches('input[type=checkbox]'))).toBe(true)
    expect($inputs.wrappers.every(c => c.element.matches('input[disabled]'))).toBe(true)

    wrapper.destroy()
  })

  it('child checkboxes have required attribute when group required', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: document.body,
      propsData: {
        name: 'group',
        options: ['one', 'two', 'three'],
        checked: [],
        required: true
      }
    })

    const $inputs = wrapper.findAll('input')
    expect($inputs.length).toBe(3)
    expect(wrapper.vm.localChecked).toEqual([])
    expect($inputs.wrappers.every(c => c.element.matches('input[type=checkbox]'))).toBe(true)
    expect($inputs.wrappers.every(c => c.element.matches('input[required]'))).toBe(true)
    expect($inputs.wrappers.every(c => c.element.matches('input[aria-required="true"]'))).toBe(true)

    wrapper.destroy()
  })

  it('child checkboxes have class custom-control-inline when stacked=false', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: document.body,
      propsData: {
        name: 'group',
        options: ['one', 'two', 'three'],
        checked: [],
        stacked: false
      }
    })

    const $inputs = wrapper.findAll('.custom-control')
    expect($inputs.length).toBe(3)
    expect($inputs.wrappers.every(c => c.find('div.custom-control-inline').exists())).toBe(true)

    wrapper.destroy()
  })

  it('child checkboxes do not have class custom-control-inline when stacked=true', async () => {
    const wrapper = mount(BFormCheckboxGroup, {
      attachTo: document.body,
      propsData: {
        name: 'group',
        options: ['one', 'two', 'three'],
        checked: [],
        stacked: true
      }
    })

    const $inputs = wrapper.findAll('.custom-control')
    expect($inputs.length).toBe(3)
    expect($inputs.wrappers.every(c => c.find('div.custom-control-inline').exists())).toBe(false)

    wrapper.destroy()
  })
})
