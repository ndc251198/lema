<script lang="ts">
import { QSelect } from "quasar";
export default QSelect.extend({
  name: "lema-select",

  props: {
    outlined: {
      default: true
    }
  }
});
</script>