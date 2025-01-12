import { shallowMount } from '@vue/test-utils';

import Avatar from '../avatar/avatar.vue';
import GlLink from '../link/link.vue';
import AvatarLabeled from './avatar_labeled.vue';

describe('avatar labeled', () => {
  let wrapper;

  const label = 'avatar label';
  const subLabel = 'avatar label';

  const buildWrapper = (propsData, slots) => {
    wrapper = shallowMount(AvatarLabeled, {
      propsData: {
        label: '',
        ...propsData,
      },
      slots,
    });
  };

  it('sets avatar alt attribute to an empty string', () => {
    const altText = 'alt text';

    buildWrapper({ alt: altText });

    expect(wrapper.findComponent(Avatar).props('alt')).not.toEqual(altText);
  });

  it('displays the avatar label', () => {
    buildWrapper({ label });

    expect(wrapper.find('.gl-avatar-labeled-label').text()).toEqual(label);
  });

  it('displays the avatar sub label', () => {
    buildWrapper({ subLabel });

    expect(wrapper.find('.gl-avatar-labeled-sublabel').text()).toEqual(subLabel);
  });

  it('displays `meta` slot', () => {
    buildWrapper(
      { label, subLabel },
      { meta: '<span data-testid="user-meta" class="gl-p-1">Foo Bar</span>' }
    );

    expect(wrapper.find('[data-testid="user-meta"]').exists()).toBe(true);
  });

  it('displays `default` slot', () => {
    buildWrapper(
      { label, subLabel },
      { default: '<span data-testid="default-slot">Foo Bar</span>' }
    );

    expect(wrapper.find('[data-testid="default-slot"]').exists()).toBe(true);
  });

  describe('with labels as rows', () => {
    it('adds the correct css classes', () => {
      buildWrapper({ label, subLabel, inlineLabels: true });

      expect(wrapper.find('.gl-avatar-labeled-labels').classes('inline-labels')).toBe(true);
    });
  });

  describe('with label links', () => {
    beforeEach(() => {
      buildWrapper({ label, subLabel, labelLink: 'http://label', subLabelLink: 'http://subLabel' });
    });

    describe('with label link', () => {
      const findLabelLink = () => wrapper.findAllComponents(GlLink).at(0);

      it('displays the label link', () => {
        const labelLink = findLabelLink();
        expect(labelLink.text()).toBe(label);
        expect(labelLink.attributes('href')).toBe('http://label');
      });

      it('navigates to label link when avatar is clicked', () => {
        const labelLink = findLabelLink();
        const labelLinkClickSpy = jest.spyOn(labelLink.element, 'click');

        wrapper.findComponent(Avatar).vm.$emit('click');

        expect(labelLinkClickSpy).toHaveBeenCalled();
      });
    });

    it('displays the sub-label link', () => {
      const subLabelLink = wrapper.findAllComponents(GlLink).at(1);
      expect(subLabelLink.text()).toBe(subLabel);
      expect(subLabelLink.attributes('href')).toBe('http://subLabel');
    });
  });

  describe('without label links', () => {
    beforeEach(() => {
      buildWrapper({ label, subLabel });
    });

    it('does not display any link', () => {
      expect(wrapper.findAllComponents(GlLink).exists()).toBe(false);
    });
  });
});
