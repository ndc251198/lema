<template>
    <div>
        <table id="customers" style="width: 100%">
  <tr>
    <th>Ten dich vu</th>
    <th>Chi tiet</th>
    <th>So luong</th>
    <th>Gia</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Berglunds snabbköp</td>
    <td>Christina Berglund</td>
    <td>Sweden</td>
    <td>Sweden</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
    <td>UK</td>
  </tr>
  
</table>
<div><label class="text-weight-bolder" style="float: right">Tong gia dich vu : 400$</label>
    </div>

    </div>
    
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'table',
    data () {
        return {

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