<template>
    <div class="column q-pa-md">
        <div><q-btn class="float-left" color="primary" icon-right="add" label="Create" @click="showCreatePartner=true" /></div>
            <div class="q-pa-md row items-start q-gutter-md">
                <div class="col-2" v-for="partner in getPartners" :key="partner.id">
                    <q-card bordered grey class="my-card bg-grey-6 text-white" @click="showPartnerInfor(partner)">
                        <q-card-section>
                            <label class="text-h6">{{partner.name}}</label>
                        </q-card-section>
                        <q-card-section>
                            <label class="text-subtitle2">{{partner.id}}</label>
                        </q-card-section>
                        <q-card-section>
                            <label class="text-subtitle2">{{partner.phone}}</label>
                        </q-card-section>
                    </q-card>            
        </div>
        </div>
        <CreatePartner :showCreatePartner='showCreatePartner' @close-popup='showCreatePartner=false'></CreatePartner> 
        <Partner :partner='partner' :showPartner='showPartner' @close-popup='showPartner=false'></Partner>
    </div>
</template>
<script lang="ts">
import CreatePartner from '@/components/commons/partner/formCreatePartner.vue'
import Partner from '@/components/commons/partner/Partner.vue'
import Vue from 'vue'
import {mapGetters, mapActions} from 'vuex'
export default Vue.extend({
    components: {CreatePartner, Partner},
    data() {
        return {
            partner: {},
            showCreatePartner: false,
            showPartner: false
        }
    },
   created () {
       this.fetchPartners()
   },
   computed: {
       ...mapGetters(['getPartners'])
   },
    methods: {
        ...mapActions(['fetchPartners']),
        showPartnerInfor (partner: object) {
            this.partner = partner
            this.showPartner = true
        }
    }
})
</script>