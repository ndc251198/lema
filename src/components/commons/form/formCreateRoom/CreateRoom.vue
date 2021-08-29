<template>
    <div>
        <q-dialog v-model="showCreateRoom">
       <q-card style="width:500px">
        <q-card-section>
              <label class="text-weight-bolder">Ten phong</label>
                    <q-input
                    v-model="nameRoom"
                    filled
                    autogrow
                    />
        </q-card-section>
        <q-card-section>
             <label class="text-weight-bolder">Tang</label>
                    <q-input
                    v-model="floor"
                    filled
                    autogrow
                    />
            
        </q-card-section>
             
             <q-card-section> <label class="text-weight-bolder">Gia</label>
              
                    <q-input
                    v-model="price"
                    filled
                    autogrow
                    /></q-card-section>
             
               <q-card-section>
                   <label class="text-weight-bolder">Mo ta</label>
                <q-input
                    v-model="description"
                    filled
                    type="textarea"
                    />
               </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Huy" color="primary" @click="resetForm" />
          <q-btn flat label="Luu" color="primary" @click="addRoom" />
        </q-card-actions>
      </q-card>
      </q-dialog>
    </div>
</template>
<script lang="ts">
import axios from 'axios'
import Vue from 'vue'
import {mapActions} from 'vuex'
export default Vue.extend({
    props: {
        showCreateRoom: Boolean,
    },
    data() {
        return {
            nameRoom: '',
            floor: '',
            price: '',
            description: ''
        }
    },
    methods: {
        ...mapActions(['addRoomInfor']),
        addRoom () {
            const form = {
                roomId: this.nameRoom,
                floor: this.floor,
                dayFee: 12,
                dayAvailable: [true,false,true]
            }

            this.addRoomInfor(form)
           this.$q.notify({
                icon: 'done',
                color: 'positive',
                message: 'Success'
            })
            this.resetForm()
        },
        resetForm () {
            this.nameRoom = '',
            this.floor = '',
            this.price = '',
            this.description = ''
            this.$emit('close-popup')
        }
    }

})
</script>