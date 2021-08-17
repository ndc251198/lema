<template>
    <div>
       <q-card >
        <q-card-section>
            <div class="row q-pa-md">
                <div class="col-5 column q-pa-md">
                    <div class="col">
                        <label class="text-weight-bolder">Ten doi tac</label>
                        <q-input v-model="text" filled autogrow/>
                    </div>
                    <div class="col">
                        <label class="text-weight-bolder">So dien thoia</label>
                        <q-input v-model="text" filled autogrow/>
                    </div>
                    <div class="col">
                        <label class="text-weight-bolder">Email</label>
                        <q-input v-model="text" filled autogrow/>
                    </div>
                    <div class="col">
                        <label class="text-weight-bolder">Website</label>
                        <q-input v-model="text" filled autogrow/>
                    </div>
                </div>
                <div class="col-2"></div>
                <div class="col-5">
                    <div class="column q-pa-md">
                        <div class="col">
                            <label class="text-weight-bolder">Ma khach san</label>
                            <q-input v-model="text" filled autogrow/>
                        </div>
                        <div class="col">
                            <label class="text-weight-bolder">Quoc gia</label>
                            <q-select filled v-model="model" :options="options" label="Chon quoc gia" />
                        </div>
                        <div class="col">
                            <label class="text-weight-bolder">Tinh/ Thanh pho</label>
                            <q-select filled v-model="model" :options="options" label="Chon tinh/ thanh pho" />
                        </div>
                        <div class="col">
                            <label class="text-weight-bolder">Quan/ Huyen</label>
                            <q-select filled v-model="model" :options="options" label="Chon quan/ huyen" />
                        </div>
                        <div class="col">
                            <label class="text-weight-bolder">Phuong/ Xa</label>
                            <q-select filled v-model="model" :options="options" label="Chon phuong/ xa" />
                        </div>
                       
                        <div class="col">
                            <label class="text-weight-bolder">Dia chi</label>
                            <q-input v-model="text" filled autogrow/>
                        </div>
                    </div>
                </div>

            </div>
        </q-card-section>
        <q-card-actions align="center">
          <q-btn flat label="Huy" color="primary" v-close-popup />
          <q-btn push label="Luu" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            text: '',
            model: null,
            options: [
                'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
            ]
        }
    }
})
</script>