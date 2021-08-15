<template>
  <div class="dashboard q-pa-4 h-100 flex column">
    <div class="q-mb-4">
      <dashboard-filter v-model="filter" @add="scheduleOnAdd"></dashboard-filter>
    </div>
    <div class="dashboard__main flex-1">
      <dashboard-schedule :filter="filter" class="w-100 h-100"></dashboard-schedule>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DashboardFilter, { ScheduleFilter } from "@/components/dictionary/dashboard/DashboardFilter.vue";
import DashboardSchedule from "@/components/dictionary/dashboard/DashboardSchedule.vue";
import { EnumPeriod } from "@/core/enumeration/enumeration";
export default Vue.extend({
  name: "dashboard",

  components: {
    DashboardFilter,
    DashboardSchedule,
  },

  data() {
    return {
      filter: {
        period: EnumPeriod.Day,
        startDate: new Date
      } as ScheduleFilter
    };
  },

  methods: {
    scheduleOnAdd() {
      console.log('add');
    }
  }
});
</script>

<style lang="scss" scoped>
.dashboard__main {
  background: #fff;
}
</style>