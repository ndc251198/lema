<template>
  <lema-header class="lema-header">
    <lema-toolbar class="h-100">

      <lema-btn dense flat round icon="menu" @click="btnToggleSideNaveOnClick" />

      <lema-toolbar-title>
        
      </lema-toolbar-title>

      <q-space></q-space>
      <q-input dark dense standout v-model="text" input-class="text-left" class="q-ml-md" style="width: 600px; max-width: 100%" label="Search">
        <template v-slot:append>
          <q-icon v-if="text === ''" name="search"></q-icon>
          <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''"></q-icon>
        </template>
      </q-input>
       <q-space></q-space>
      <AccountSetting ></AccountSetting>


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

import LemaToolbarTitle from "@/controls/lema-toolbar/LemaToolbarTitle.vue";
import AccountSetting from "./AccountSetting.vue"

export default Vue.extend({
  name: 'page-header',

  components: {
    LemaHeader,

    LemaToolbar,
    LemaToolbarTitle,
    AccountSetting
  },
  data () {
    return {
      text: ''
    }
  },
  methods: {
    btnToggleSideNaveOnClick() {
      this.$emit('toggle');
    },
    func1 () {
      console.log(this.text)
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