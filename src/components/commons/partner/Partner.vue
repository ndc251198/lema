<template>
    <div>
       <q-card >
        <q-card-section>
           <div class="row">
               <div class="col-5">
                   <label class="text-weight-bolder">Ten doi tac</label>
                    <q-input v-model="text" filled autogrow/>
               </div>
               <div class="col-2"></div>
               <div class="col-5">
                   <label class="text-weight-bolder">Ma doi tac</label>
                    <q-input v-model="text" filled autogrow/>
               </div>
           </div>
        </q-card-section>
        <q-card-section>
           <div class="row">
               <div class="col-5">
                   <label class="text-weight-bolder">Gia</label>
                    <q-input v-model="text" filled autogrow/>
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
                    <q-input v-model="text" filled autogrow/>
               </div>
               <div class="col-2"></div>
               <div class="col-5">
                   <label class="text-weight-bolder">Quoc tich</label>
                    <q-select filled v-model="model" :options="options" label="Chon quoc tich" />
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