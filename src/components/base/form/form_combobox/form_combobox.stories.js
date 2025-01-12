import { userEvent, within, waitFor, expect } from '@storybook/test';
import { makeContainer } from '../../../../utils/story_decorators/container';
import { getA11yParameters } from '../../../../utils/stories_utils';
import { stringTokenList, labelText, objectTokenList, actionsList } from './constants';
import readme from './form_combobox.md';
import GlFormCombobox from './form_combobox.vue';

const template = `
  <gl-form-combobox
    v-model="value"
    ref="combobox"
    :token-list="tokenList"
    :label-text="labelText"
    :match-value-to-attr="matchValueToAttr"
    :action-list="actionList"
  />`;

const generateProps = ({
  tokenList = stringTokenList,
  matchValueToAttr,
  actionList = undefined,
} = {}) => ({
  tokenList,
  labelText,
  matchValueToAttr,
  actionList,
});

const Template = (args) => ({
  components: { GlFormCombobox },
  data: () => {
    return {
      value: '',
    };
  },
  props: Object.keys(args),
  template,
});

export const Default = Template.bind({});
Default.args = generateProps();

export const WithObjectValue = (args, { argTypes }) => ({
  components: { GlFormCombobox },
  props: Object.keys(argTypes),
  data: () => {
    return {
      value: '',
    };
  },
  template: `
    <gl-form-combobox
      v-model="value"
      ref="combobox"
      :token-list="tokenList"
      :label-text="labelText"
      :match-value-to-attr="matchValueToAttr"
    >
      <template #result="{ item }">
        <div class="gl-flex">
          <div class="gl-text-subtle gl-mr-4">{{ item.id }}</div>
          <div>{{ item.title }}</div>
        </div>
      </template>
    </gl-form-combobox>
  `,
});
WithObjectValue.args = generateProps({ tokenList: objectTokenList, matchValueToAttr: 'title' });
WithObjectValue.decorators = [makeContainer({ height: '370px' })];
WithObjectValue.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const searchbox = canvas.getByRole('searchbox');
  userEvent.type(searchbox, 'g');

  await waitFor(() =>
    expect(within(document).getByRole('menuitem', { name: '1 giraffe' })).toBeVisible()
  );
  await waitFor(() => expect(searchbox).toHaveFocus());
};

export const WithActions = (args, { argTypes }) => ({
  components: { GlFormCombobox },
  props: Object.keys(argTypes),
  template,
  data: () => {
    return {
      value: '',
    };
  },
});
WithActions.args = generateProps({
  tokenList: stringTokenList,
  actionList: actionsList,
});
WithActions.decorators = [makeContainer({ height: '180px' })];
WithActions.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const searchbox = canvas.getByRole('searchbox');
  userEvent.type(searchbox, 'dog');

  await waitFor(() =>
    expect(within(document).getByRole('menuitem', { name: 'dog' })).toBeVisible()
  );
  await waitFor(() => expect(searchbox).toHaveFocus());
};

export default {
  title: 'base/form/form-combobox',
  component: GlFormCombobox,
  parameters: {
    a11y: getA11yParameters({
      temporarySkipRules: [
        'aria-required-attr',
        'aria-required-parent',
        'nested-interactive',
        'label',
        'list',
      ],
    }),
    docs: {
      description: {
        component: readme,
      },
    },
  },
};
