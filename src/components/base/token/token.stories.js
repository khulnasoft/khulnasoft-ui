import GlAvatar from '../avatar/avatar.vue';
import { tokenVariants } from '../../../utils/constants';
import GlToken from './token.vue';

import readme from './token.md';

const defaultValue = (prop) => GlToken.props[prop].default;

const generateProps = ({
  viewOnly = defaultValue('viewOnly'),
  variant = defaultValue('variant'),
} = {}) => ({
  viewOnly,
  variant,
});

const Template = (args, { argTypes }) => ({
  components: { GlToken },
  props: Object.keys(argTypes),
  template: `
    <div class="gl-flex">
      <gl-token :variant="variant" :view-only="viewOnly">Token</gl-token>
    </div>`,
});

export const Default = Template.bind({});
Default.args = generateProps();

export const ViewOnly = Template.bind({});
ViewOnly.args = generateProps({
  viewOnly: true,
});

export const WithAvatar = () => ({
  components: { GlToken, GlAvatar },
  template: `
    <div class="gl-flex">
    <gl-token><gl-avatar src="./img/avatar.png" :size="16" />Token</gl-token>
    </div>`,
});

export default {
  title: 'base/token',
  component: GlToken,
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
  argTypes: {
    variant: {
      options: tokenVariants,
      control: 'select',
    },
  },
};
