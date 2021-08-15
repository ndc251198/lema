import { LemaFilter } from "../install";
import { date } from 'quasar'
export default {
  name: 'date',
  definition: function(value: Date | number, format = 'DD/MM/YYYY') {
    return date.formatDate(value, format)
  }
} as LemaFilter