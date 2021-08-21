<template>
  <lema-layout view="lHh lpR fFf">
    <page-header @toggle="headerOnToggle"></page-header>

    <side-nav :mini="mini"></side-nav>

    <lema-page-container class="lema-page-container">
      <router-view />
    </lema-page-container>
  </lema-layout>
</template>

<script lang="ts">
import Vue from "vue";
import LemaLayout from "@/controls/lema-layout/LemaLayout.vue";
import LemaPageContainer from "@/controls/lema-page/LemaPageContainer.vue";
import PageHeader from "@/components/commons/header/PageHeader.vue";
import SideNav from "@/components/commons/sideNav/SideNav.vue";
import axios from 'axios'

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
  beforeCreate () {
      this.$store.commit('initializeStore')

      const token = this.$store.state.token

      if (token) {
        axios.defaults.headers.common['Authorization'] = 'Token ' + token
      } else {
        axios.defaults.headers.common['Authorization'] = ''
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