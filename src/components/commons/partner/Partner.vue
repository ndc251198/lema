<template>
    <div>
         <q-dialog v-model="showPartner" v-if="showPartner">
       <q-card style="width:1000px">
        <q-card-section>
           <div class="row">
               <div class="col-5">
                   <label class="text-weight-bolder">Ten doi tac</label>
                    <q-input v-model="name" filled autogrow/>
               </div>
               <div class="col-2"></div>
               <div class="col-5">
                   <label class="text-weight-bolder">Ma doi tac</label>
                    <q-input v-model="id" filled autogrow/>
               </div>
           </div>
        </q-card-section>
        <q-card-section>
           <div class="row">
               <div class="col-5">
                   <label class="text-weight-bolder">Gia</label>
                    <q-input v-model="price" filled autogrow/>
               </div>
               <div class="col-2"></div>
               <div class="col-5">
                   <label class="text-weight-bolder">Hinh thuc</label>
                    <q-select filled v-model="model" :options="options" label="Chon hinh thuc" />
               </div>
           </div>
        </q-card-section>
        <q-card-section>
           <div class="row">
               <div class="col-5">
                   <label class="text-weight-bolder">Email</label>
                    <q-input v-model="email" filled autogrow/>
               </div>
               <div class="col-2"></div>
               <div class="col-5">
                   <label class="text-weight-bolder">Quoc tich</label>
                    <q-select filled v-model="nation" :options="optionsNation" label="Chon quoc tich" />
               </div>
           </div>
        </q-card-section>
        <q-card-actions align="center">
          <q-btn flat label="Huy" color="primary" @click="resetForm" />
          <q-btn push label="Luu" color="primary" @click="changePartner"/>
        </q-card-actions>
      </q-card>
         </q-dialog>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import {mapActions} from 'vuex'
export default Vue.extend({
    props: {
        partner: Object,
        showPartner: Boolean
    },
    data() {
        return {
            name: this.partner.name,
            id: this.partner.id,
            email: this.partner.email,
            nation: this.partner.nation,
            price: '',
            optionsNation: ['VN','EN'],
            model: null,
            options: [
                'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
            ]
        }
    }, 
    watch: { 
        partner (newVal, oldVal){ // watch it
            this.name = newVal.name
            this.id = newVal.id
            this.email = newVal.email
            this.nation = newVal.nation
        },
    },
    methods: {
        ...mapActions(['updatePartners']),
        changePartner () {
            const form = {
                name: this.name,
                id: this.id,
                email: this.email,
                nation: this.nation,
            }
            this.updatePartners(form)
            
            this.$q.notify({
                icon: 'done',
                color: 'positive',
                message: 'Success'
            })
            this.resetForm()
        },

        resetForm () {
            this.$emit('close-popup')
        }
    }
})
</script>