<template>
  <lema-drawer
    class="lema-drawer"
    show-if-above
    bordered
    side="left"
    :mini="mini"
    :breakpoint="0"
    :width="220"
  >
    <lema-scroll-area class="fit">
      <lema-list>
        <lema-item v-for="(menu, index) in menus" :key="index" :to="menu.path">
          <lema-item-section avatar>
            <lema-icon :name="menu.icon" />
          </lema-item-section>

          <lema-item-section>{{ menu.title }}</lema-item-section>
          <lema-tooltip v-if="mini">{{ menu.title }}</lema-tooltip>
        </lema-item>
      </lema-list>
    </lema-scroll-area>
  </lema-drawer>
</template>

<script lang="ts">
import Vue from "vue";
import LemaDrawer from "@/controls/lema-drawer/LemaDrawer.vue";
import LemaList from "@/controls/lema-item/LemaList.vue";
import LemaItem from "@/controls/lema-item/LemaItem.vue";
import LemaItemSection from "@/controls/lema-item/LemaItemSection.vue";
import Menu from "@/models/menu/menu";
export default Vue.extend({
  name: "side-nav",
  components: {
    LemaDrawer,
    LemaList,
    LemaItem,
    LemaItemSection,
  },

  props: {
    mini: {
      type: Boolean,
    },
  },

  data() {
    return {
      menus: [] as Array<Menu>,
    };
  },

  created() {
    this.initMenus();
  },

  methods: {
    initMenus() {
      const menu: Array<Menu> = [
        {
          title: "Infomation",
          path: "/infomation",
          icon: "recent_actors",
        },
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: "dashboard",
        },
        {
          title: "Statistic",
          path: "/statistic",
          icon: "leaderboard",
        },
        {
          title: "Accountans",
          path: "/accountan",
          icon: "calculate",
        },
        {
          title: "Settings",
          path: "/setting",
          icon: "settings",
        },
      ];

      this.menus = menu;
    },
  },
});
</script>

<style lang="scss" scoped>
.lema-drawer ::v-deep {
  .q-router-link--active {
    .q-focus-helper {
      background: currentColor;
      opacity: 0.15;
    }
  }
}
</style>