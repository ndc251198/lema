<template>
    <div>
    <q-dialog v-model="showCreateHotel">
       <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section>
            <div class="row q-pa-md">
                <div class="col-5">
                    <label class="text-weight-bolder">Ten khach san</label>
                    <q-input v-model="nameHotel" filled autogrow/>
                </div>
               <div class="col-2"></div>
                <div class="col-5">
                    <label class="text-weight-bolder">Ma khach san</label>
                    <q-input v-model="idHotel" filled autogrow/>
                </div>
            </div>
        </q-card-section>

        <q-card-section>
            <div class="row q-pa-md">
                <div class="col-5">
                    <label class="text-weight-bolder">So dien thoai</label>
                    <q-input v-model="phone" filled autogrow/>
                </div>
               <div class="col-2"></div>
                <div class="col-5">
                    <label class="text-weight-bolder">Hinh thuc</label>
                    <q-select filled v-model="model" :options="options" label="Chon hinh thuc" />
                </div>
            </div>
        </q-card-section>

        <q-card-section>
            <div class="row q-pa-md">
                <div class="col-5">
                    <label class="text-weight-bolder">Email</label>
                    <q-input v-model="email" filled autogrow/>
                </div>
               <div class="col-2"></div>
                <div class="col-5">
                    <label class="text-weight-bolder">Quoc tich</label>
                    <q-select filled v-model="nationality" :options="nationalities" label="Chon quoc tich" />
                </div>
            </div>
        </q-card-section>

        <q-card-section>
            <div class="row q-pa-md">
                <div class="col-5">
                    <label class="text-weight-bolder">Doi tac</label>
                    <q-select filled v-model="partner" :options="partners" label="Chon doi tac" />
                </div>
               <div class="col-2"></div>
                <div class="col-5">
                    <label class="text-weight-bolder">Dich vu</label>
                    <q-select filled v-model="service" :options="services" label="Chon dich vu" />
                </div>
            </div>
        </q-card-section>

        <q-card-actions align="center">
          <q-btn flat label="Huy" color="primary" @click="resetForm" v-close-popup />
          <q-btn push label="Luu" color="primary" @click="addHotel" />
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
        showCreateHotel: Boolean,
    },
    data() {
        return {
            text: '',
            model: null,
            options: [
                'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
            ],
            nameHotel: '',
            idHotel: '',
            phone: '',
            email: '',
            nationality: '',
            nationalities: [1,2,3],
            partner: '',
            partners: [1,2,3],
            service: '',
            services: [1,'a']
        }
    },
    
    methods: {
        ...mapActions(['addHotels']),
        async addHotel() {
            console.log('add hotel')
            const form = {
                nameHotel: this.nameHotel,
                idHotel: this.idHotel,
                phone: this.phone,
                email: this.email,
                nationality: this.nationality,
                partner: this.partner,
                service: this.service
            }
            this.addHotels(form)
            this.$q.notify({
                icon: 'done',
                color: 'positive',
                message: 'Success'
            })
            this.resetForm()
        },
        resetForm () {
            this.nameHotel = ''
            this.idHotel = ''
            this.phone = ''
            this.email = ''
            this.nationality = ''
            this.partner = ''
            this.service = ''
            this.$emit('close-popup')
        }
    }
})
</script>