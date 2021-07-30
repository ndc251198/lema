<template>
  <lema-header class="lema-header">
    <lema-toolbar class="h-100">
      <lema-btn dense flat round icon="menu" @click="btnToggleSideNaveOnClick" />

      <lema-toolbar-title>
        
      </lema-toolbar-title>
      <lema-btn dense flat round icon="home" @click="btnToggleSideNaveOnClick" />
    </lema-toolbar>
  </lema-header>
</template>
<script lang="ts">
import Vue from "vue";
import LemaHeader from "@/controls/lema-header/LemaHeader.vue";
import LemaToolbar from "@/controls/lema-toolbar/LemaToolbar.vue";
import LemaToolbarTitle from "@/controls/lema-toolbar/LemaToolbarTitle.vue";
export default Vue.extend({
  name: 'page-header',

  components: {
    LemaHeader,
    LemaToolbar,
    LemaToolbarTitle
  },

  methods: {
    btnToggleSideNaveOnClick() {
      this.$emit('toggle');
    }
  }
});
</script>

<style lang="scss" scoped>
.lema-header {
  height: 56px;
}
</style>