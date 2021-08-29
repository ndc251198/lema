<template>
    <div>
        <q-dialog v-model="showCreateService">
       <q-card style="width:500px">
        <q-card-section>
              <label class="text-weight-bolder">Ma dich vu</label>
                    <q-input
                    v-model="serviceId"
                    filled
                    autogrow
                    />
        </q-card-section>
        <q-card-section>
             <label class="text-weight-bolder">Thong tin dich vu</label>
                    <q-input
                    v-model="infor"
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

        <q-card-actions align="center">
          <q-btn flat label="Huy" color="primary" @click="resetForm" />
          <q-btn push label="Luu" color="primary" @click="addService" />
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
        showCreateService: Boolean
    },
    data() {
        return {
            serviceId: '',
            infor: '',
            price: '',
            description: ''
        }
    },
    methods: {
        ...mapActions(['addServices']),
        addService() {
            const form = {
                id: this.serviceId,
                name: this.infor,
                price: this.price,
                unit: this.description
            }
            this.addServices(form)
            this.$q.notify({
                icon: 'done',
                color: 'positive',
                message: 'Success'
            })
            this.resetForm()
        },
        resetForm() {
            this.serviceId = '',
            this.infor = '',
            this.price = '',
            this.description = ''
            this.$emit('close-popup')
        }
    }
})
</script>