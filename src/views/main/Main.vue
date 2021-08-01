<template>
  <lema-layout view="lHh lpR fFf">
    <page-header @toggle="headerOnToggle"></page-header>

    <side-nav :mini="mini"></side-nav>

    <lema-page-container class="lema-page-container">
      <lema-scroll-area class="fit">
        <div class="q-pa-4 h-100">
          <router-view />
        </div>
      </lema-scroll-area>
    </lema-page-container>
  </lema-layout>
</template>

<script lang="ts">
import Vue from "vue";
import LemaLayout from "@/controls/lema-layout/LemaLayout.vue";
import LemaPageContainer from "@/controls/lema-page/LemaPageContainer.vue";
import PageHeader from "@/components/commons/header/PageHeader.vue";
import SideNav from "@/components/commons/sideNav/SideNav.vue";

export default Vue.extend({
  components: {
    LemaLayout,
    LemaPageContainer,
    PageHeader,
    SideNav
  },

  data() {
    return {
      mini: false
    }
  },

  methods: {
    headerOnToggle() {
      this.mini = !this.mini;
    }
  }
});
</script>

<style lang="scss" scoped>
.lema-page-container {
  height: 100vh;
}
</style>