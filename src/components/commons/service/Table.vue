<template>
  <div class="table">
    <div><q-btn class="float-left" color="primary" icon-right="add" label="Create" @click="showCreateService=true" /></div>
     <table style="width: 100%" class="space">
          <tr>
            <th>Ma dich vu</th>
            <th>Ten dich vu</th>
            <th>Gia</th>
            <th>Don vi tinh</th>
            <th></th>
          </tr>
          <tr v-for="service in getServices" :key="service.id">
              <td>{{service.id}}</td>
              <td>{{service.name}}</td>
              <td>{{service.price}}</td>
              <td>{{service.unit}}</td>
              <td><q-icon name="delete_outline" size="md" @click="showDeleteModal(service.id)"></q-icon></td>
          </tr>
      </table>
      <CreateService :showCreateService='showCreateService' @close-popup='showCreateService=false'></CreateService>
    
    <q-dialog persistent v-model="showDeleteNotice">
      <q-card>
        <q-card-section>
          <label class="text-weight-bolder">Ban co dong y xoa dich vu nay khong ?</label>
        </q-card-section>

        <q-card-actions align="center">
          <q-btn flat label="Khong" color="primary" v-close-popup />
          <q-btn push label="Dong y" color="primary" @click="deleteService()" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
  
</template>
<script lang="ts">
import CreateService from '@/components/commons/service/formCreateService.vue'
import services from '@/store/module/services'
import Vue from 'vue'
import {mapGetters, mapActions} from 'vuex'
export default Vue.extend({
  components: {CreateService},
  data () {
    return {
      showCreateService: false,
      showDeleteNotice: false,
      serviceId : ''
    }
  },
  created() {
    this.fetchServices()
  },
  computed: {
    ...mapGetters(['getServices'])
  },
   methods: {
     ...mapActions(['fetchServices', 'removeService']),
     deleteService () {
       this.removeService(this.serviceId) 
       this.showDeleteNotice = false
       this.$q.notify({
                icon: 'done',
                color: 'positive',
                message: 'Success'
            })
     },
     showDeleteModal(serviceId: string) {
       this.serviceId = serviceId
       this.showDeleteNotice = true
     }
   }
})
</script>
<style>
tr {
  background: white;
  line-height: 400%;
  
}
td, th {
  text-align: center;
}

table {
  border-style: none;
  border-collapse: separate;
  border-spacing: 0 30px;
}

/* Set border-radius on the top-left and bottom-left of the first table data on the table row*/
td:first-child, th:first-child {
  border-radius: 25px 0px 0px 25px;
}

/* Set border-radius on the top-right and bottom-right of the last table data on the table row*/
td:last-child, th:last-child {
  border-radius: 0px 25px 25px 0 ;
}

</style>