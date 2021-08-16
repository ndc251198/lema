<script lang="ts">
import { QBtn } from "quasar";
export default QBtn.extend({
  name: 'lema-btn',

  props: {
    unelevated: {
      default: true
    }
  }
});
</script>