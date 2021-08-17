<template>
  <div class="hotel">
    <div class="row ">
      <div class="col-2">
            <div class="row col q-pa-md">
              <q-btn unelevated rounded color="primary" label="Thong tin khach san" />
            </div>
          <div class="column q-pa-md justify-center" v-for="x in 2" :key="x">
            <div class="col ">
               <q-card class="my-card bg-indigo-13 text-white">
                  <q-card-section>
                    <div class="text-subtitle2">Cao cap<span class="text-positive float-right"><q-icon name="fiber_manual_record" style="font-size: 1em;"/></span></div>
                    <div class="text-caption">10 phong</div>
                    <div class="text-h6 text-right">{{x}} phòng</div>
                  </q-card-section>
                </q-card>
            </div>
          </div>

          <div class="column q-pa-md">
            <div class= "row" style="font-size">
            <q-card class="my-card col-12 text-center" style="color: white; background-color: grey">
                <q-card-section>
                <i class="fas fa-plus fa-6x"></i>
                </q-card-section>
              </q-card>
          </div>
    </div>
      </div>
      <div class="col-10 q-pa-md">
        <div class="row justify-center">
          <div class="col-9">
            <Table></Table>
          </div>
        </div>
         
      </div>
     
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Table from '@/components/commons/hotel/Table.vue'



export default Vue.extend({
  components :  {Table},
  name: "hotel",
  data() {
    return {
      showCreateRoom: false
    }
  }
})
</script>

<style lang="scss" scoped>

.my-card{
  border-radius: 25px 25px 25px 25px
}

</style>