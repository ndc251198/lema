<template>
    <div class="column q-pa-md">
        <div><q-btn class="float-left" color="primary" icon-right="add" label="Create" @click="showCreatePartner=true" /></div>
        
            <div class="q-pa-md row items-start q-gutter-md">
                <div class="col-2" v-for="x in 11" :key="x">
                    <q-card bordered grey class="my-card bg-grey-6 text-white" @click="showPartner = true">
                        <q-card-section>
                            <label class="text-h6">Ten cong ty</label>
                        </q-card-section>
                        <q-card-section>
                            <label class="text-subtitle2">Ma doi tac</label>
                        </q-card-section>
                        <q-card-section>
                            <label class="text-subtitle2">So dien thoai</label>
                        </q-card-section>
                    </q-card>
               
        </div>
        </div>
        <q-dialog persistent v-model="showCreatePartner">
            <CreatePartner style="width:1000px"></CreatePartner>
        </q-dialog>
        <q-dialog persistent v-model="showPartner">
            <Partner style="width:1000px"></Partner>
        </q-dialog>
        
    </div>
</template>
<script lang="ts">
import CreatePartner from '@/components/commons/partner/formCreatePartner.vue'
import Partner from '@/components/commons/partner/Partner.vue'
import Vue from 'vue'
export default Vue.extend({
    components: {CreatePartner, Partner},
    data() {
        return {
            showCreatePartner: false,
            showPartner: false
        }
    }
})
</script>