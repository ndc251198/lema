<script lang="ts">
import { QScrollArea } from "quasar";
export default QScrollArea.extend({
  name: "lema-scroll-area",

  props: {
    thumbStyle: {
      type: Object,
      default: () => ({
        right: '2px',
        borderRadius: '5px',
        backgroundColor: 'rgba(0,0,0,0.4)',
        width: '6px',
        opacity: 0.75
      })
    }
  }
});
</script>