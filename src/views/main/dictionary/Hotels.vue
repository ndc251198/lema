<template>
  <div class="row">
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
      <div class= "row" style="font-size: 23px;">
      <q-card class="my-card col-10 text-center" style="height: 100%; color: white; background-color: grey" @click="showCreateHotel=true">
          <q-card-section>
           <i class="fas fa-plus fa-10x"></i>
          </q-card-section>
          <q-card-section>
              <div class="absolute-bottom text-subtitle2 text-center">
              Add new hotel
            </div>
          </q-card-section>
        </q-card>

        <q-dialog v-model="showCreateHotel">
        <CreateHotel style="width: 700px; max-width: 80vw;"></CreateHotel>
        
        </q-dialog>
    </div>
    </div>
  </div>
  
</template>

<script lang="ts">
import Vue from 'vue'
import CreateHotel from '@/components/commons/form/formCreateHotel/CreateHotel.vue'
export default Vue.extend({
  name: "setting",
  components: {CreateHotel},
  data () {
    return {
        showCreateHotel: false
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