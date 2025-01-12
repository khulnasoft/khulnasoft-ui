import { shallowMount } from '@vue/test-utils';
import { BCollapse } from '../../../vendor/bootstrap-vue/src/components/collapse/collapse';
import Collapse from './collapse.vue';

describe('Collapse component', () => {
  const collapseId = 'collapse-id';
  let wrapper;

  const createWrapper = (propsData) => {
    wrapper = shallowMount(Collapse, { propsData });
  };

  describe('default', () => {
    beforeEach(() => {
      createWrapper({
        id: collapseId,
      });
    });

    it('renders a BCollapse', () => {
      expect(wrapper.findComponent(BCollapse).exists()).toBe(true);
    });
  });
});
