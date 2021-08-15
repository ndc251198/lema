<template>
  <div class="table">
     <table style="width: 100%" class="space">
          <tr>
            <th>Room id</th>
            <th>Floor</th>
            <th colspan="7">Day availeble</th>
            <th>Day fee</th>
            <th></th>
          </tr>
          <tr >
              <td>Jill</td>
              <td>Smith</td>
              <td>Mon</td>
              <td>Tue</td>
              <td>Wed</td>
              <td>Thur</td>
              <td>Fri</td>
              <td>Sat</td>
              <td>Sun</td>
              <td>50$</td>
              <td>...</td>
            
          </tr>
          <tr class="demo">
              <td>Jill</td>
              <td>Smith</td>
              <td>Mon</td>
              <td>Tue</td>
              <td>Wed</td>
              <td>Thur</td>
              <td>Fri</td>
              <td>Sat</td>
              <td>Sun</td>
              <td>50$</td>
              <td>...</td>
            
          </tr>
          
      </table>
  </div>
  
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      data: [{
       'SalesQty': 'demo',
      }  
      ]
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