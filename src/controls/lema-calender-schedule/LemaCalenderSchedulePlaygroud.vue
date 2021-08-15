<template>
  <div
    class="lema-calender-schedule-playgroud relative-position"
    :style="playgroudStyle"
  >
    <div class="lema-playgroud">
      <div class="lema-playgroud__header flex">
        <div
          class="lema-playgroud__cell lema-playgroud__header--axis"
          :style="headerAxisStyle"
        >
        </div>
        <div
          v-for="axis in axisX"
          class="lema-playgroud__cell lema-playgroud__header--item"
          :key="axis"
          :style="headerItemStyle"
        >
          {{ axis }}
        </div>
      </div>
      <div
        class="lema-playgroud__body flex"
        v-for="axis in axisTrees"
        :key="axis[axisValue]"
      >
        <div
          class="lema-playgroud__cell lema-playgroud__body--axis"
          :style="bodyAxisStyle"
        >
          {{axis[axisLabel]}}
        </div>
        <div
          v-for="axisitemX in axisX"
          :key="axisitemX"
          class="lema-playgroud__cell lema-playgroud__body--item"
          :style="bodyItemStyle"
        ></div>
      </div>
      <div
        v-if="unit === 'day'"
        :style="timeLineStyle"
        class="lema-playgroud__time-line absolute"
      >
        <div class="lema-playgroud__time-line__tooltip text--caption">{{now | date('HH:mm')}}</div> 
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { numberToPixel } from "./utils";
export default Vue.extend({
  name: "lema-calender-schedule-playgroud",

  props: {
    cellWidth: {
      type: Number
    },

    cellHeight: {
      type: Number
    },

    headerWidth: {
      type: Number,
    },

    headerHeight: {
      type: Number,
    },

    unit: {
      type: String as PropType<"day" | "week" | "month">,
    },

    axisItems: {
      type: Array,
    },

    axisLabel: {
      type: String,
    },

    axisValue: {
      type: String,
    },

    childrenKey: {
      type: String,
    },

    interval: {
      type: String as PropType<'second' | 'minute' | 'hour' | 'day'>
    }
  },

  data() {
    return {
      timeLineLeft: -999,
      intervalTime: null as number | null,
      now: new Date
    };
  },

  computed: {
    playgroudStyle(): { [key: string]: any } {
      const playgroudWidth: number = this.headerWidth + this.cellWidth * this.axisX.length;
      return {
        width: numberToPixel(playgroudWidth)
      }
    },

    timeLineStyle(): { [key: string]: any }{
      return {
        top: numberToPixel(this.headerHeight),
        left: numberToPixel(this.timeLineLeft)
      }
    },
    headerAxisStyle(): { [key: string]: any } {
      return {
        width: numberToPixel(this.headerWidth),
        height: numberToPixel(this.headerHeight)
      };
    },

    headerItemStyle(): { [key: string]: any } {
      return {
        width: numberToPixel(this.cellWidth),
        height: numberToPixel(this.headerHeight)
      };
    },

    bodyAxisStyle(): { [key: string]: any } {
      return {
        width: numberToPixel(this.headerWidth),
        height: numberToPixel(this.cellHeight)
      };
    },

    bodyItemStyle(): { [key: string]: any } {
      return {
        width: numberToPixel(this.cellWidth),
        height: numberToPixel(this.cellHeight)
      };
    },

    axisTrees(): Array<unknown> {
      return this.axisItems;
    },

    axisX(): Array<string> {
      let axisX = [];
      switch (this.unit) {
        case "day":
          axisX = this.getAxisXOfDay();
          break;
        case "week":
          axisX = this.getAxisXOfDay();
          break;
        case "month":
          axisX = this.getAxisXOfDay();
          break;
      }

      return axisX;
    },
  },

  created() {
    this.setIntervalTimeLine();
  },

  beforeDestroy() {
    if(this.intervalTime) {
      clearInterval(this.intervalTime);
    }
  },

  methods: {
    getAxisXOfDay(): Array<string> {
      return new Array(24).fill(0).map((_, i) => i.toString().padStart(2, "0"));
    },

    setIntervalTimeLine() {
      const now = new Date();
      const firstInterval = (60 - now.getSeconds()) * 1000;
      const interval = 60 * 1000;
      this.updateTimeLine();
      setTimeout(() => {
        this.updateTimeLine();
        this.intervalTime = setInterval(() => {
          this.updateTimeLine()
        }, interval)
      }, firstInterval)
    },

    updateTimeLine() {
      const now = new Date();
      const hour = now.getHours();
      const minute = now.getMinutes();
      const time = hour + minute/60;
      this.now = now;
      this.timeLineLeft = this.headerWidth + time * this.cellWidth;
    }
  },
});
</script>