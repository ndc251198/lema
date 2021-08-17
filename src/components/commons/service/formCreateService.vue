<template>
    <div>
       <q-card style="width:500px">
        <q-card-section>
              <label class="text-weight-bolder">Ma dich vu</label>
                    <q-input
                    v-model="text"
                    filled
                    autogrow
                    />
        </q-card-section>
        <q-card-section>
             <label class="text-weight-bolder">Thong tin dich vu</label>
                    <q-input
                    v-model="text"
                    filled
                    autogrow
                    />
            
        </q-card-section>
             
             <q-card-section> <label class="text-weight-bolder">Gia</label>
              
                    <q-input
                    v-model="text"
                    filled
                    autogrow
                    /></q-card-section>
             
               <q-card-section>
                   <label class="text-weight-bolder">Mo ta</label>
                <q-input
                    v-model="text"
                    filled
                    type="textarea"
                    />
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
            text: ''
        }
    }
})
</script>