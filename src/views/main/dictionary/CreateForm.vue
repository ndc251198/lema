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
                           <div class="col">
                                  <div class="q-pa-md row">
                                      <div class="col-3 " >
                                          <label class="text-weight-bolder">Checkin</label>
                                          <q-input  filled v-model="date" mask="date" :rules="['date']" style="width:90%">
                                                <template v-slot:append>
                                                    <q-icon name="event" class="cursor-pointer">
                                                    <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                                                        <q-date v-model="date">
                                                        <div class="row items-center justify-end">
                                                            <q-btn v-close-popup label="Close" color="primary" flat />
                                                        </div>
                                                        </q-date>
                                                    </q-popup-proxy>
                                                    </q-icon>
                                                </template>
                                            </q-input>
                                      </div>
                                      <div class="col-3">
                                          <label class="text-weight-bolder">Check out</label>
                                          <q-input filled v-model="date" mask="date" :rules="['date']" style="width:90%">
                                                <template v-slot:append>
                                                    <q-icon name="event" class="cursor-pointer">
                                                    <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                                                        <q-date v-model="date">
                                                        <div class="row items-center justify-end">
                                                            <q-btn v-close-popup label="Close" color="primary" flat />
                                                        </div>
                                                        </q-date>
                                                    </q-popup-proxy>
                                                    </q-icon>
                                                </template>
                                            </q-input>
                                      </div>
                                     
                                      <div class="col-2"></div>
                                      <div class="col-2">
                                          <label class="text-weight-bolder">Check out</label>
                                          <q-input filled v-model="date" mask="date" :rules="['date']" style="width:90%">
                                                <template v-slot:append>
                                                    <q-icon name="event" class="cursor-pointer">
                                                    <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                                                        <q-date v-model="date">
                                                        <div class="row items-center justify-end">
                                                            <q-btn v-close-popup label="Close" color="primary" flat />
                                                        </div>
                                                        </q-date>
                                                    </q-popup-proxy>
                                                    </q-icon>
                                                </template>
                                            </q-input>
                                      </div>
                                      <div class="col-2">
                                          <label class="text-weight-bolder">Check out</label>
                                          <q-input filled v-model="text" label="Filled" style="width:90%"/>
                                      </div>
                                  </div>
                           </div>

                           <div class="col">
                               <div class="row q-pa-md">
                                   <div class="col-5">
                                        <label class="text-weight-bolder">Tinh trang dat phong</label>
                                        <q-select filled v-model="model" :options="options" label="Chon tinh trang dat phong" />
                                   </div>
                                   <div class="col-3"></div>
                                   <div class="col-2">
                                       <label class="text-weight-bolder">So nguoi lon</label>
                                          <q-input filled v-model="text" label="Filled" style="width:90%"/>
                                   </div>
                                   <div class="col-2">
                                       <label class="text-weight-bolder">So tre em</label>
                                          <q-input filled v-model="text" label="Filled" style="width:90%"/>
                                   </div>
                               </div>
                           </div>

                           <div class="col">
                               <div class="row q-pa-md">
                                   <div class="col-5">
                                       <div class="col">
                                           <label class="text-weight-bolder">Khach san</label>
                                        <q-select filled v-model="model" :options="options" label="Chon khach san" />
                                       </div>
                                       <div class="col">
                                           <label class="text-weight-bolder">Loai phong</label>
                                        <q-select filled v-model="model" :options="options" label="Chon loai phong" />
                                       </div>
                                       <div class="col">
                                           <label class="text-weight-bolder">Phong</label>
                                        <q-select filled v-model="model" :options="options" label="Chon phong" />
                                       </div>
                                       <div class="col">
                                           <label class="text-weight-bolder">Ma dat phong</label>
                                        <q-input filled v-model="text"  label="Chon tinh trang dat phong" />
                                       </div>  
                                   </div>
                               

                               <div class="col-3"></div>
                               <div class="col-4">
                                   <label class="text-weight-bolder">Thong tin chung</label>
                                   <q-card class="my-card bg-grey-5 text-bold">
                                        <q-card-section>
                                            <div class="text-h6">Ten khach san: Vu Xuan Quan</div>
                                        </q-card-section>

                                        <q-card-section>
                                            <div class="text-subtitle2">Loai phong: Cao cap</div>
                                            <div class="text-subtitle2">Phong: 305</div>
                                            <div class="text-subtitle2">Dia chi: asdasdasdaasdasd</div>
                                        </q-card-section>
                                        <q-card-section>
                                            <div class="text-subtitle2">So dien thoai: 0123456789</div>
                                            <div class="text-subtitle2">Email: demo@gmail.com</div>
                                            <div class="text-subtitle2">Website: goolge.com</div>
                                        </q-card-section>

                                        <q-separator dark />

                                        </q-card>
                               </div>
                               </div>
                           </div>
      
                          </div>
                    </div>
                    <div class="col">
                        <div class="row q-pa-md">
                            <div class="col-12">
                               <label class="text-weight-bolder">Dich vu <q-avatar color="primary" text-color="white" icon="add" size="md" /></label>
                           </div>
                           <div class="col-12">
                               <Table></Table>
                           </div>
                        </div>
                           
                    </div>       
                    <div class="col">
                        <div> 
                               <label class="text-weight-bolder">Gia tien thue phong: 300$</label>
                           </div>
                    </div>
                    <div class="col q-pa-md">
                        <div class="row q-pa-md">
                              <div class="col-4">
                                  <label class="text-weight-bolder">Phi ca the ngan hang</label>
                                  <q-input filled v-model="text"  label="Chon tinh trang dat phong" />
                              </div>
                              <div class="col-4"></div>
                              <div class="col-4">
                                  <label class="text-weight-bolder">Phi khac</label>
                                  <q-input filled v-model="text"  label="Chon tinh trang dat phong" />
                              </div>
                           </div>
                        <div class="col">
                            <label class="text-weight-bolder">Tong tien: 300$</label>
                        </div>
                    </div>
                    <div class="col">
                        <div class="row q-pa-md">
                            <div class="col"> <label class="text-weight-bolder">Hinh thuc thanh toan</label>
                         <q-select filled v-model="model" :options="options" label="Chon hinh thuc thanh toan" style="width: 33%"/></div>
                        </div>
                       
                    </div>
                    <div class="col">
                        <div class="float-right">
                            <q-btn label="Huy" type="reset" color="primary" flat class="q-ml-md" />
                            <q-btn label="Luu" type="submit" color="primary"/>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-2"></div>
            </div>
    </div>
    
</template>

<script lang="ts">
//import Select from '@/components/commons/input/Select.vue'
import Table from '@/components/commons/form/Table.vue'
import Vue from 'vue'
export default Vue.extend({
    components: {Table},
    data () {
        return {
            model: null,
            options: [1,2,3],
            date: '2019/02/01',
            text: 'quan'
        }
    }
})
</script>

<style lang="sass" scoped>
.my-card
  width: 80%
  max-width: 250px
</style>