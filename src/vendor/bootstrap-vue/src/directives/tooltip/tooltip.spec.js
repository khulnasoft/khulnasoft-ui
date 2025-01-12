import { mount } from '@vue/test-utils'
import { waitNT, waitRAF } from '../../../tests/utils'
import { VBTooltip } from './tooltip'

// Key which we use to store tooltip object on element
const BV_TOOLTIP = '__BV_Tooltip__'

/**
 * @khulnasoft/ui Note: These specs have been rewritten to be working with jest >= 29
 */
describe('v-b-tooltip directive', () => {
  const originalCreateRange = document.createRange
  const origGetBCR = Element.prototype.getBoundingClientRect

  beforeEach(() => {
    // Hack to make Popper not bork out during tests
    // Note: Popper still does not do any positioning calculation in JSDOM though
    // So we cannot test actual positioning - just detect when it is open
    // https://github.com/FezVrasta/popper.js/issues/478#issuecomment-407422016
    document.createRange = () => ({
      setStart: () => {},
      setEnd: () => {},
      commonAncestorContainer: {
        nodeName: 'BODY',
        ownerDocument: document
      }
    })
    // Mock `getBoundingClientRect()` so that the `isVisible(el)` test returns `true`
    // Needed for visibility checks of trigger element, etc.
    Element.prototype.getBoundingClientRect = jest.fn(() => ({
      width: 24,
      height: 24,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    }))
  })

  afterEach(() => {
    // Reset overrides
    document.createRange = originalCreateRange
    Element.prototype.getBoundingClientRect = origGetBCR
  })

  /**
   * Little helper to wait until a tooltip is shown after a click
   *
   * @param $button {VueTestUtils.VueWrapper}
   * @returns {Promise<void>}
   */
  function waitForTooltipAfterClickOn($button) {
    return new Promise(resolve => {
      const resolver = () => {
        $button.vm.$root.$off('bv::tooltip::shown', resolver)
        resolve()
      }

      $button.vm.$root.$on('bv::tooltip::shown', resolver)

      // Trigger click
      $button.trigger('click')
    })
  }

  it('should have BVTooltip Vue class instance', async () => {
    const App = {
      directives: {
        bTooltip: VBTooltip
      },
      template: '<button v-b-tooltip title="foobar">button</button>'
    }

    const $button = mount(App, {
      attachTo: document.body
    })

    expect($button.vm).toBeDefined()
    await waitNT($button.vm)
    await waitRAF()

    expect($button.element.tagName).toBe('BUTTON')

    // Should have instance of popover class on it
    expect($button.element[BV_TOOLTIP]).toBeDefined()
    expect($button.element[BV_TOOLTIP].$options.name).toBe('BVTooltip')

    $button.destroy()
  })

  it('should work', async () => {
    const App = {
      directives: {
        bTooltip: VBTooltip
      },
      template: '<button v-b-tooltip.click.html title="<b>foobar</b>">button</button>'
    }

    const $button = mount(App, {
      attachTo: document.body
    })

    expect($button.vm).toBeDefined()
    await waitNT($button.vm)
    await waitRAF()

    expect($button.element.tagName).toBe('BUTTON')

    // Should have instance of popover class on it
    expect($button.element[BV_TOOLTIP]).toBeDefined()
    expect($button.element[BV_TOOLTIP].$options.name).toBe('BVTooltip')

    expect($button.attributes('aria-describedby')).toBeUndefined()

    await waitForTooltipAfterClickOn($button)

    expect($button.attributes('aria-describedby')).toBeDefined()
    const adb = $button.attributes('aria-describedby')

    const tip = document.querySelector(`#${adb}`)
    expect(tip).not.toBe(null)
    expect(tip.classList.contains('tooltip')).toBe(true)

    $button.destroy()
  })

  it('should not show tooltip when title is empty', async () => {
    const App = {
      directives: {
        bTooltip: VBTooltip
      },
      template: '<button v-b-tooltip.click title="">button</button>'
    }

    const $button = mount(App, {
      attachTo: document.body
    })

    expect($button.vm).toBeDefined()
    await waitNT($button.vm)
    await waitRAF()

    expect($button.element.tagName).toBe('BUTTON')

    // Should have instance of popover class on it
    expect($button.element[BV_TOOLTIP]).toBeDefined()
    expect($button.element[BV_TOOLTIP].$options.name).toBe('BVTooltip')

    expect($button.attributes('aria-describedby')).toBeUndefined()

    // Trigger click
    await $button.trigger('click')

    expect($button.attributes('aria-describedby')).toBeUndefined()

    $button.destroy()
  })

  it('variant and customClass should work', async () => {
    const App = {
      directives: {
        bTooltip: VBTooltip
      },
      template: `<button v-b-tooltip.click.html.v-info="{ customClass: 'foobar'}" title="<b>foobar</b>">button</button>`
    }

    const $button = mount(App, {
      attachTo: document.body
    })

    expect($button.vm).toBeDefined()
    await waitNT($button.vm)
    await waitRAF()

    expect($button.element.tagName).toBe('BUTTON')

    await waitForTooltipAfterClickOn($button)

    expect($button.attributes('aria-describedby')).toBeDefined()
    const adb = $button.attributes('aria-describedby')

    const tip = document.querySelector(`#${adb}`)
    expect(tip).not.toBe(null)
    expect(tip.classList.contains('tooltip')).toBe(true)
    expect(tip.classList.contains('b-tooltip-info')).toBe(true)
    expect(tip.classList.contains('foobar')).toBe(true)

    $button.destroy()
  })
})
