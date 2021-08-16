<template>
  <div class="lema-calender-schedule-item" :style="styles">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { numberToPixel } from "./utils";
export default Vue.extend({
  name: "lema-calender-schedule-item",

  props: {
    /** thời gian bắt đầu */
    start: {
      type: Date as PropType<Date>
    },

    /** thời gian kết thúc */
    end: {
      type: Date as PropType<Date>
    },

    /** thuộc item nào */
    axisValue: {
      type: [Number, String, Array],
    },

    /** có thể thay đổi được hay không */
    resizeable: Boolean,

    /** có cho phép kéo thả hay không */
    dragable: Boolean,
  },

  data() {
    return {
      parent: null as Vue | null,
    };
  },

  computed: {
    styles(): Record<string, any> {
      const cellHeight = this.getPropValueParentSchedule("cellHeight");
      const cellWidth = this.getPropValueParentSchedule("cellWidth");
      const cellPadding = this.getPropValueParentSchedule("cellPadding");
      const headerHeight = this.getPropValueParentSchedule("headerHeight");
      const headerWidth = this.getPropValueParentSchedule("headerWidth");
      const axisItems = this.getPropValueParentSchedule("axisItems") as Array<any>;
      const axisValue = this.getPropValueParentSchedule("axisValue");
      const axisIndex = axisItems.findIndex(a => a[axisValue] === this.axisValue);

      const height = cellHeight - cellPadding * 2;
      const top = headerHeight + cellPadding + axisIndex * cellHeight;
      const left = headerWidth + this.getTimeIndex(this.start) * cellWidth;
      return {
        top: numberToPixel(top),
        left: numberToPixel(left),
        height: numberToPixel(height)
      };
    },
  },

  created() {
    this.getParentSchedule();
  },

  methods: {
    getParentSchedule() {
      let parent = this.$parent;
      while (parent != null) {
        if (parent.$options.name === "lema-calender-schedule") {
          break;
        }
        parent = parent.$parent;
      }
      this.parent = parent;
    },

    getPropValueParentSchedule(prop: string): any {
      if (this.parent && this.parent.$props) {
        return this.parent.$props[prop];
      } else {
        return null;
      }
    },

    getTimeIndex(time: Date) {
      const hour = time.getHours();
      const minute = time.getMinutes();
      return hour + minute/60;
    }
  },
});
</script>