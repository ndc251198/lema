<template>
  <div class="hotel">
    <div class="row ">
      <div class="col-2">
            <div class="row col q-pa-md">
              <q-btn unelevated rounded color="primary" label="Thong tin khach san" @click="demo" />
            </div>
          <div class="column q-pa-md justify-center" v-for="(room, index) in getRooms" :key="room">
            <div class="col ">
               <q-card class="my-card " @click="setCardSelected(index)" :class="getCardSelected === index? 'bg-indigo-13 text-white' : 'bg-grey-2'">
                  <q-card-section>
                    <div class="text-subtitle2">{{room.type}}
                      <span v-if="room.status" class="text-positive float-right" ><q-icon name="fiber_manual_record" style="font-size: 1em;"/></span>
                      <span v-else class="text-negative float-right" ><q-icon name="fiber_manual_record" style="font-size: 1em;"/></span>
                      </div>
                    <div class="text-caption">{{room.total}} phong</div>
                    <div class="text-h6 text-right">{{room.empty}} phòng</div>
                  </q-card-section>
                </q-card>
            </div>
          </div>

          <div class="column q-pa-md">
            <div class= "row" style="font-size">
            <q-card class="my-card col-12 text-center text-white bg-grey">
                <q-card-section>
                <i class="fas fa-plus fa-6x" ></i>
                </q-card-section>
              </q-card>
          </div>
    </div>
      </div>
      <div class="col-10 q-pa-md">
        <div class="row">
          <div class="col-9 full-width">
           <Table :rooms="getRoomInfor"></Table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Table from '@/components/commons/hotel/Table.vue'
import {mapGetters, mapActions} from 'vuex'

export default Vue.extend({
  components :  {Table},
  name: "hotel",
  data() {
    return {
      showCreateRoom: false,
      cardSelected: 0,
    }
  },
  created() {
    this.fetchRooms()
  },
  computed: {
    ...mapGetters(['getRooms', 'getRoomInfor', 'getCardSelected'])
  },
  methods: {
    ...mapActions(['fetchRooms', 'setCardSelected'])
  }
})
</script>

<style lang="scss" scoped>

.my-card{
  border-radius: 25px 25px 25px 25px
}

</style>