import { shallowMount } from '@vue/test-utils';
import { tooltipActionEvents, popoverPlacements } from '../../../utils/constants';
import GlPopover from './popover.vue';

describe('GlPopover', () => {
  let wrapper;

  const createWrapper = (props, stubs = {}) => {
    wrapper = shallowMount(GlPopover, {
      propsData: {
        target: document.body,
        ...props,
      },
      stubs,
    });
  };

  const findBVPopover = () => wrapper.findComponent({ ref: 'bPopover' });
  const findCloseButton = () => findBVPopover().find('[data-testid="close-button"]');

  it.each(tooltipActionEvents)('passes through the %s event to the bvPopover instance', (event) => {
    createWrapper();
    wrapper.vm.$emit(event);

    expect(findBVPopover().emitted(event)).toHaveLength(1);
  });

  it('does not have the `has-close-button` class where there is no close button', () => {
    createWrapper();

    expect(findBVPopover().props('customClass')).not.toContain('has-close-button');
  });

  describe('triggers', () => {
    it('defaults to "hover focus" for triggers', () => {
      createWrapper();

      expect(findBVPopover().exists()).toBe(true);
    });

    it('uses custom triggers if provided', () => {
      const triggers = 'manual';
      createWrapper({ triggers });

      expect(findBVPopover().props('triggers')).toBe(triggers);
    });
  });

  describe('title slot', () => {
    it('renders title slot content', () => {
      const title = 'Popover title';
      createWrapper({ title });

      expect(findBVPopover().props('title')).toBe(title);
    });
  });

  describe('placement', () => {
    it(`uses "${popoverPlacements.top}" placement by default`, () => {
      createWrapper();

      expect(findBVPopover().props('placement')).toBe(popoverPlacements.top);
    });

    it('uses a defined placement', () => {
      createWrapper({ placement: popoverPlacements.right });

      expect(findBVPopover().props('placement')).toBe(popoverPlacements.right);
    });
  });

  describe('close button', () => {
    let doCloseMock;

    const createWrapperWithCloseButton = (title = '') => {
      createWrapper(
        { showCloseButton: true, title },
        {
          BPopover: {
            template: `
            <div>
              <slot name="title" />
            </div>
          `,
            methods: {
              doClose: doCloseMock,
            },
            props: ['customClass'],
          },
        }
      );
    };

    beforeEach(() => {
      doCloseMock = jest.fn();
    });

    describe('when there is no title', () => {
      beforeEach(() => {
        createWrapperWithCloseButton();
      });

      it('renders a close button', () => {
        expect(findCloseButton().exists()).toBe(true);
      });

      it('does not have the `has-title` class, and the button floats to the right', () => {
        expect(findBVPopover().props('customClass')).toBe('gl-popover has-close-button');
        expect(findCloseButton().classes()).toContain('gl-float-right');
      });

      it("calls BPopover's doClose method when clicking on the close button", () => {
        findCloseButton().vm.$emit('click');

        expect(doCloseMock).toHaveBeenCalled();
      });

      it('emits close-button-clicked event when clicking on the close button', () => {
        findCloseButton().vm.$emit('click');

        expect(wrapper.emitted('close-button-clicked')).toHaveLength(1);
      });
    });

    describe('when there is a title', () => {
      beforeEach(() => {
        createWrapperWithCloseButton('Popover title');
      });

      it('has the `has-title` class, and the button does not float to the right', () => {
        expect(findBVPopover().props('customClass')).toBe('gl-popover has-title has-close-button');
        expect(findCloseButton().classes()).not.toContain('gl-float-right');
      });
    });
  });
});
