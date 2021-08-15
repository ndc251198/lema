<template>
  <div class="lema-calender-schedule">
    <lema-scroll-area horizontal style="max-width: 100%; height: 100%">
      <lema-calender-schedule-playgroud
        :cell-width="cellWidth"
        :cell-height="cellHeight"
        :header-width="headerWidth"
        :header-height="headerHeight"
        :unit="unit"
        :start-time="startTime"
        :axis-items="axisItems"
        :axis-label="axisLabel"
        :axis-value="axisValue"
        :children-key="childrenKey"
        :interval="interval"
      >
      </lema-calender-schedule-playgroud>
      <slot :cell-width="cellWidth" :cell-height="cellHeight"> </slot>
    </lema-scroll-area>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import LemaCalenderSchedulePlaygroud from "./LemaCalenderSchedulePlaygroud.vue";
export default Vue.extend({
  name: "lema-calender-schedule",

  components: {
    LemaCalenderSchedulePlaygroud,
  },

  props: {
    cellWidth: {
      type: Number,
      default: 100,
    },

    cellHeight: {
      type: Number,
      default: 80,
    },

    headerWidth: {
      type: Number,
      default: 120,
    },

    cellPadding: {
      type: Number,
      default: 10,
    },

    headerHeight: {
      type: Number,
      default: 40,
    },

    startTime: Date,

    unit: {
      type: String as PropType<"day" | "week" | "month">,
      default: "day",
    },

    axisItems: {
      type: Array,
    },

    axisLabel: {
      type: String,
      default: "label",
    },

    axisValue: {
      type: String,
      default: "value",
    },

    childrenKey: {
      type: String,
      default: "children",
    },

    interval: {
      type: String as PropType<"second" | "minute" | "hour" | "day">,
      default: "minute",
    },
  },

  data() {
    return {};
  },
});
</script>