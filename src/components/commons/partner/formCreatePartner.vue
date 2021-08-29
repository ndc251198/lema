<template>
    <div>
        <q-dialog v-model='showCreatePartner'>
       <q-card style="width:1000px" >
        <q-card-section>
            <div class="row q-pa-md">
                <div class="col-5 column q-pa-md">
                    <div class="col">
                        <label class="text-weight-bolder">Ten doi tac</label>
                        <q-input v-model="namePartner" filled autogrow/>
                    </div>
                    <div class="col">
                        <label class="text-weight-bolder">So dien thoai</label>
                        <q-input v-model="phone" filled autogrow/>
                    </div>
                    <div class="col">
                        <label class="text-weight-bolder">Email</label>
                        <q-input v-model="email" filled autogrow/>
                    </div>
                    <div class="col">
                        <label class="text-weight-bolder">Website</label>
                        <q-input v-model="website" filled autogrow/>
                    </div>
                </div>
                <div class="col-2"></div>
                <div class="col-5">
                    <div class="column q-pa-md">
                        <div class="col">
                            <label class="text-weight-bolder">Ma khach san</label>
                            <q-input v-model="hotelId" filled autogrow/>
                        </div>
                        <div class="col">
                            <label class="text-weight-bolder">Quoc gia</label>
                            <q-select filled v-model="nation" :options="optionsNation" label="Chon quoc gia" />
                        </div>
                        <div class="col">
                            <label class="text-weight-bolder">Tinh/ Thanh pho</label>
                            <q-select filled v-model="city" :options="optionsCity" label="Chon tinh/ thanh pho" />
                        </div>
                        <div class="col">
                            <label class="text-weight-bolder">Quan/ Huyen</label>
                            <q-select filled v-model="district" :options="optionsDistrict" label="Chon quan/ huyen" />
                        </div>
                        <div class="col">
                            <label class="text-weight-bolder">Phuong/ Xa</label>
                            <q-select filled v-model="commune" :options="optionsCommune" label="Chon phuong/ xa" />
                        </div>
                       
                        <div class="col">
                            <label class="text-weight-bolder">Dia chi</label>
                            <q-input v-model="address" filled autogrow/>
                        </div>
                    </div>
                </div>

            </div>
        </q-card-section>
        <q-card-actions align="center">
          <q-btn flat label="Huy" color="primary" @click="resetForm" />
          <q-btn push label="Luu" color="primary" @click="addPartner" />
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
        showCreatePartner: Boolean
    },
    data() {
        return {
            namePartner: '',
            phone:'',
            email: '',
            website: '',
            hotelId: '',
            nation: '',
            optionsNation: ['VN', 'EN'],
            city: '',
            optionsCity: ['HN', 'BN'],
            district: '',
            optionsDistrict: ['CG', 'TX'],
            commune: '',
            optionsCommune: ['XT', 'AS'],
            model: null,
            address: '',
        }
    }, 
    methods: {
        ...mapActions(['addPartners']),
        addPartner () {
            /*const form = {
                namePartner: this.namePartner,
                phone: this.phone,
                email: this.email,
                website: this.website,
                hotelId: this.hotelId,
                nation: this.nation,     
                city: this.city,    
                district: this.district,
                commune: this.commune,
                address: this.address,
            }*/

            const form = {
                name: this.namePartner,
                id: this.hotelId,
                phone: this.phone,
                nation: this.nation,
                email: this.email,
                address: this.address,
            }
            this.addPartners(form)
            this.$q.notify({
                icon: 'done',
                color: 'positive',
                message: 'Success'
            })
            this.resetForm()
        },
        resetForm() {
            this.namePartner = '',
            this.phone = '',
            this.email = '',
            this.website = '',
            this.hotelId = '',
            this.nation = '',
            this.district = '',
            this.commune = '',
            this.address = '',
            this.$emit('close-popup')
        }
    }
})
</script>