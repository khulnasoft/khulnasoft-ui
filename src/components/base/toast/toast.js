/* eslint-disable import/no-default-export */
import isFunction from 'lodash/isFunction';
// eslint-disable-next-line no-restricted-imports
import { ToastPlugin } from '../../../vendor/bootstrap-vue/src/components/toast/index';
import CloseButton from '../../shared_components/close_button/close_button.vue';

const DEFAULT_OPTIONS = {
  autoHideDelay: 5000,
  toastClass: 'gl-toast',
  isStatus: true,
  toaster: 'b-toaster-bottom-left',
};

let toastsCount = 0;

function renderTitle(h, toast, options) {
  const nodes = [
    h(CloseButton, {
      class: ['gl-toast-close-button'],
      on: {
        click: toast.hide,
      },
    }),
  ];
  if (options.action) {
    nodes.splice(
      0,
      0,
      h(
        'a',
        {
          role: 'button',
          class: ['gl-toast-action'],
          on: {
            click: (e) => options.action.onClick(e, toast),
          },
        },
        options.action.text
      )
    );
  }
  return nodes;
}

function showToast(message, options = {}) {
  // eslint-disable-next-line @gitlab/tailwind-no-interpolation -- Not a CSS utility
  const id = `gl-toast-${toastsCount}`;
  toastsCount += 1;
  const hide = () => {
    this.$bvToast.hide(id);
  };
  const toast = { id, hide };

  if (isFunction(options.onComplete)) {
    const toastHiddenCallback = (e) => {
      if (e.componentId === id) {
        this.$root.$off('bv::toast:hidden', toastHiddenCallback);
        options.onComplete(e);
      }
    };

    this.$root.$on('bv::toast:hidden', toastHiddenCallback);
  }

  const updatedAutoHideDelay = !Number.isNaN(options?.autoHideDelay)
    ? { autoHideDelay: options.autoHideDelay }
    : null;

  this.$bvToast.toast(message, {
    ...DEFAULT_OPTIONS,
    ...updatedAutoHideDelay,
    id,
    title: renderTitle(this.$createElement, toast, options),
  });
  return toast;
}

/**
 * Note: This is not a typical Vue component and needs to be registered before instantiating a Vue app.
 * Once registered, the toast will be globally available throughout your app.
 *
 * See https://khulnasoft.github.io/khulnasoft-ui/ for detailed documentation.
 */
export default {
  install(Vue) {
    Vue.use(ToastPlugin);

    Vue.mixin({
      beforeCreate() {
        if (this.$toast) {
          return;
        }
        this.$toast = { show: showToast.bind(this) };
      },
    });
  },
};
