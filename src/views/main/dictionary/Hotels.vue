<template>
      <div class="q-pa-md q-mg-md">
      <div class="row justify-start q-gutter-lg">
        <div class="col-1" v-for='hotel in getHotels' :key='hotel'>
          <q-card class="my-card text-center" @click="goToHotel(hotel.idHotel)">
            <q-card-section>
            <i class="fas fa-hotel fa-5x"></i>
            </q-card-section>
            <q-card-section>
              <div class="absolute-bottom text-subtitle2 text-center">
               {{hotel.nameHotel}}
            </div>
            </q-card-section>
          </q-card>
        </div>

        <div class="col-1">
      <q-card class="my-card col-10 text-center bg-primary text-white" @click="showCreateHotel=true">
          <q-card-section>
           <i class="fas fa-plus fa-5x"></i>
          </q-card-section>
          <q-card-section>
              <div class="absolute-bottom text-subtitle2 text-center">
              Add new hotel
            </div>
          </q-card-section>
        </q-card>
    </div>
      </div>
    <CreateHotel :showCreateHotel="showCreateHotel"  @close-popup="showCreateHotel=false"></CreateHotel>
  </div>
  
</template>

<script lang="ts">
import Vue from 'vue'
import CreateHotel from '@/components/commons/form/formCreateHotel/CreateHotel.vue'
import axios from 'axios'
import {
    mapGetters,
    mapActions
  } from "vuex";

export default Vue.extend({
  name: "hotels",
  components: {CreateHotel},
  data () {
    return {
        showCreateHotel: false,
    }
  },
  created() {
    this.fetchHotels()
  },
  computed: mapGetters(["getHotels"]),
  methods: {
    ...mapActions(['fetchHotels']),
    goToHotel (id: string) {
      this.$router.push(`/hotel/${id}`)
    },
  }
})
</script>

<style lang="sass" scoped>

</style>