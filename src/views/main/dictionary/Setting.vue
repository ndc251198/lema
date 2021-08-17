<template>
  
    <div class="q-pa-lg row items-start q-gutter-lg">
      <div class="col-1">
        <q-card class="my-card text-center" @click="goToHotels">
          <q-card-section >
            <i class="fas fa-bed fa-5x"></i>
          </q-card-section>
          <q-card-section>
            <label class="">Cau hinh phong</label>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-1">
        <q-card class="my-card text-center" @click="goToService">
          <q-card-section>
            <i class="fas fa-hand-holding-medical fa-5x"></i>
          </q-card-section>
          <q-card-section>
            <label class="">Dich vu</label>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-1">
        <q-card class="my-card text-center" @click="goToPartner">
          <q-card-section>
           <i class="far fa-handshake fa-5x"></i>
          </q-card-section>
          <q-card-section>
            <label class="">Doi tac</label>
          </q-card-section>
        </q-card>
      </div>
        
        
        
    </div>
  
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {

    }
  },
  methods: {
    goToHotels() {
      this.$router.push('/hotels')
    },
    goToService() {
      this.$router.push('/services')
    },
    goToPartner() {
      this.$router.push('/partners')
    },
    
  }
})
</script>
<style>
.my-card {
  width: 100%;
}
</style>