<template>
  <md-toolbar>
    <md-button class="md-icon-button" v-show="!hideMenu" @click="toggleSideNav">
      <md-icon>menu</md-icon>
    </md-button>

    <h2 class="md-title" style="flex: 1">{{ title }}</h2>
  </md-toolbar>
</template>

<script type="text/javascript">
  export default {
    props: {
      hideMenu: {
        type: Boolean,
        default() { return false; }
      },
      title: {
        type: String,
        default() { return ''; }
      }
    },
    methods: {
      toggleSideNav() {
        this.$emit('toggle-side-nav');
      }
    }
  };
</script>
