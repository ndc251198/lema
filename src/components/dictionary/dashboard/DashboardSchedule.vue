<template>
  <div class="dashboard-schedule">
    <lema-calender-schedule
      class="w-100 h-100"
      unit="day"
      :axisItems="roomTypes"
      axis-label="name"
      axis-value="id"
      children-key="rooms"
      :start-time="filter.startDate"
    >
      <lema-calender-schedule-item
        v-for="booking in bookingDetails"
        :key="booking.Id"
        :start="booking.StartTime"
        :axis-value="booking.RoomId"
      >
        <div class="booking">
          <div>{{booking.GuestName}}</div>
          <div>{{booking.StartTime | date("HH:mm")}}</div>
        </div>
      </lema-calender-schedule-item>
    </lema-calender-schedule>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import {
  LemaCalenderSchedule,
  LemaCalenderScheduleItem,
} from "@/controls/lema-calender-schedule";
import { ScheduleFilter } from "./DashboardFilter.vue";
import { RoomType } from '@/models/dictionary/roomType.interface';
import { BookingDetail } from '@/models/dictionary/booking-detail.interface';

export default Vue.extend({
  name: "dashboard-schedule",

  components: {
    LemaCalenderSchedule,
    LemaCalenderScheduleItem,
  },

  props: {
    filter: {
      type: Object as PropType<ScheduleFilter>
    },
  },

  data() {
    return {
      roomTypes: [
        {
          id: 1,
          code: 'Vip',
          name: 'Cao cấp',
          rooms: [
            {
              id: 11,
              code: '11',
              name: 'Cao cấp 1'
            },
            {
              id: 12,
              code: '12',
              name: 'Cao cấp 2'
            },
            {
              id: 13,
              code: '13',
              name: 'Cao cấp 3'
            }
          ]
        },
        {
          id: 2,
          code: 'Business',
          name: 'Thương gia',
          rooms: [
            {
              id: 21,
              code: '21',
              name: 'Thương gia 1'
            }
          ]
        },
        {
          id: 3,
          code: 'Normal',
          name: 'Bình dân',
          rooms: [
            {
              id: 31,
              code: '31',
              name: 'Bình dân 1'
            },
            {
              id: 32,
              code: '32',
              name: 'Bình dân 2'
            },
            {
              id: 33,
              code: '33',
              name: 'Bình dân 3'
            },
            {
              id: 34,
              code: '34',
              name: 'Bình dân 4'
            },
            {
              id: 35,
              code: '35',
              name: 'Bình dân 5'
            },
            {
              id: 36,
              code: '36',
              name: 'Bình dân 6'
            },
            {
              id: 37,
              code: '37',
              name: 'Bình dân 7'
            },
            {
              id: 38,
              code: '38',
              name: 'Bình dân 8'
            }
          ]
        }
      ] as Array<RoomType>,

      bookingDetails: [
        {
          Id: 1,
          RoomId: 2, 
          StartTime: new Date(),
          GuestName: 'Nguyễn Xuân Hoàng'
        }
      ] as Array<BookingDetail>
    }
  },

  computed: {
  },
});
</script>


<style lang="scss" scoped>
.booking {
  background: #47C75A;
  padding: 10px 20px;
  border-radius: 10px;
}
</style>
