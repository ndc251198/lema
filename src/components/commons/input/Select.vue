<template>
  <div class="q-pa-md" style="max-width: 300px">
    <div class="q-gutter-md">
    <label>{{label}}</label>
      <q-select rounded outlined v-model="model" v-bind:options="options" :name="as" />
    </div>
  </div>
</template>
<script>    

export default {
    props: {
        label: String,
        as: String,
        options: Array
    },
  data () {
    return {
      model: null,
    }
  }
}
</script>