<template>
  <lema-header class="lema-header">
    <lema-toolbar class="h-100">
      <div class="w-100 flex justify-between items-center">
        <div></div>
        <div>
          <h5>Time line</h5>  
        </div>
        <div>
          <lema-input class="header__search" placeholder="Tìm kiếm" dark>
            <template v-slot:append>
              <lema-icon name="search" />
            </template>
          </lema-input>
        </div>
      </div>
    </lema-toolbar>
  </lema-header>
</template>
<script lang="ts">
import Vue from "vue";
import LemaHeader from "@/controls/lema-header/LemaHeader.vue";
import LemaToolbar from "@/controls/lema-toolbar/LemaToolbar.vue";
export default Vue.extend({
  name: 'page-header',

  components: {
    LemaHeader,
    LemaToolbar
  },

  methods: {
    btnToggleSideNaveOnClick() {
      this.$emit('toggle');
    }
  }
});
</script>

<style lang="scss" scoped>
.lema-header ::v-deep {
  height: 64px;
  .header__search {
    &.q-field--standard.q-field--focused .q-field__control:after {
      transform: scale3d(0, 1, 1);
    }
  }
}

</style>