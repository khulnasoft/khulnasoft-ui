<script>
import GlLink from '../link/link.vue';

export default {
  name: 'AvatarLink',
  components: {
    GlLink,
  },
};
</script>
<template>
  <gl-link class="gl-avatar-link" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </gl-link>
</template>
