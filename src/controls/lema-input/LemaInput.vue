<script lang="ts">
import { QInput } from "quasar";
export default QInput.extend({
  name: "lema-input",

  props: {
    dense: {
      type: Boolean,
      default: true
    },

    outlined: {
      default: true
    }
  }
});
</script>