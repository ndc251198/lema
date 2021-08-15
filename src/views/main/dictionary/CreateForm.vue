<template>
    <div class="form">
        <div class="row q-pa-md">
            <div class="col-2"></div>
            <div class="col-8">
                <div class="column">
                    <div class="col">
                        <div class="row q-pa-md">
                            <div class="col-5">
                                <label class="text-weight-bolder">Nguon booking</label>
                                <q-select filled v-model="model" :options="options" label="Chon nguon booking" />
                            </div>
                            <div class="col-2"></div>
                            <div class="col-5"> 
                                <label class="text-weight-bolder">Chuyen vien phu trach</label>
                                <q-select filled v-model="model" :options="options" label="Chon chuyen vien phu trach" />
                            </div>
                    </div> 
                </div>
                    <div class="col">
                       <div class="q-pa-md">
                           <div>
                               <label class="text-weight-bolder">Thong tin khach hang <q-avatar color="primary" text-color="white" icon="add" size="md" /></label>
                           </div>
                           <div>
                                <div class="q-pa-md row items-start q-gutter-md">
                                    <q-card v-for="x in 10" :key="x" class="my-card bg-grey-5 text-bold">
                                        <q-card-section>
                                            <div class="text-h6">Ho va ten: Vu Xuan Quan</div>
                                            
                                        </q-card-section>

                                        <q-card-section>
                                            <div class="text-subtitle2">SDT: 023456789</div>
                                            <div class="text-subtitle2">Quoc tich: Viet Nam</div>
                                        </q-card-section>

                                        <q-separator dark />

                                        <q-card-actions>
                                            <q-btn flat>Edit</q-btn>
                                            <q-btn flat>Delete</q-btn>
                                        </q-card-actions>
                                        </q-card>
                            </div>
                           </div>
                           
                          
                       </div>
                        
                    </div>
                    
                </div>
            </div>
            <div class="col-2"></div>
            </div>
    </div>
    
</template>
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-dragscroll"></script>
<script lang="ts">
//import Select from '@/components/commons/input/Select.vue'
import Vue from 'vue'
export default Vue.extend({
    components: {},
    data () {
        return {
            model: null,
            options: [1,2,3]
        }
    }
})
</script>

<style lang="sass" scoped>
.my-card
  width: 80%
  max-width: 250px
</style>