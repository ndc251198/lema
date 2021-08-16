<template>
  <div class="dashboard-filter flex justify-between">
    <div class="dashboard-filter__left flex">
      <lema-btn color="primary" class="q-mr-4" @click="btnTodayOnClick" :disabled="isToday">
        Today
      </lema-btn>

      <div class="flex items-center q-mr-4">
        <lema-btn
          flat
          round
          icon="navigate_before"
          @click="btnPrevDateOnClick"
        ></lema-btn>
        <lema-btn flat>
          <span>{{ filter.startDate | date("MMM DD") }}</span>

        </lema-btn>
        <lema-btn
          flat
          round
          icon="navigate_next"
          @click="btnNextDateOnClick"
        ></lema-btn>
      </div>

      <lema-select
        class="slt-period q-mr-4"
        :value="filter.period"
        :options="periods"
        map-options
        emit-value
        @input="sltPeriodOnInput($event)"
      ></lema-select>

      <lema-btn color="primary" @click="btnAddOnClick($event)">
        <span>Create</span>
        <lema-icon name="add"></lema-icon>
      </lema-btn>
    </div>
    <div class="dashboard-filter__right">
      <lema-btn color="primary">Filter</lema-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { EnumPeriod } from "@/core/enumeration/enumeration";
import { date } from 'quasar';
import LemaBtn from "@/controls/lema-btn/LemaBtn.vue";

export interface ScheduleFilter {
  period: EnumPeriod;

  startDate: Date;
}

export default Vue.extend({
  components: { LemaBtn },
  name: "dashboard-filter",

  model: {
    event: "filter",
    prop: "filter",
  },

  props: {
    filter: {
      type: Object as PropType<ScheduleFilter>,
    },
  },

  computed: {
    isToday(): boolean {
      const today = new Date()
      return date.isSameDate(today, this.filter.startDate, 'day');
    }
  },

  data() {
    return {
      periods: [
        {
          value: EnumPeriod.Day,
          label: "Day",
        },
        {
          value: EnumPeriod.Week,
          label: "Week",
        },
        {
          value: EnumPeriod.Month,
          label: "Month",
        },
        {
          value: EnumPeriod.Year,
          label: "Year",
        },
      ],
    };
  },

  methods: {
    sltPeriodOnInput(period: EnumPeriod) {
      const filter = Object.clone(this.filter);
      filter.period = period;
      this.$emit("filter", filter);
    },

    btnTodayOnClick() {
      const filter = this.filter;
      filter.startDate = new Date();
      this.$emit("filter", filter);
    },

    btnNextDateOnClick() {
      const filter = this.filter;
      filter.startDate = filter.startDate.addDay(1);
      this.$emit("filter", filter);
    },

    btnPrevDateOnClick() {
      const filter = this.filter;
      filter.startDate = filter.startDate.addDay(-1);
      this.$emit("filter", filter);
    },

    btnAddOnClick(event: MouseEvent) {
      this.$emit("add", event);
    },
  },
});
</script>

<style lang="scss" scoped>
.slt-period {
  width: 100px;
}
</style>