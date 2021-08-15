<template>
  <div class="setting row">
    <div v-for='index in 10' :key='index' class="col-4">
      <div class="q-pa-md">
      <div class="row">
        <div class="col-10">
          <q-card class="my-card " @click="demo1(index)">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
            <div class="absolute-bottom text-subtitle2 text-center">
              Hotel {{index}}
            </div>
            </q-img>
          </q-card>
        </div>
      </div>
      </div>
    </div>

    <div class="col-4 q-pa-md">
      <div class= "row">
      <q-card class="my-card col-10" >
          <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div class="absolute-bottom text-subtitle2 text-center">
            Add
          </div>
          </q-img>
        </q-card>
    </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: "setting",
  data () {
    return {
    }
  },
  methods: {
    demo1 (id: string) {
      this.$router.push(`/hotel/${id}`)
    }
  }
})
</script>

<style lang="sass" scoped>

</style>