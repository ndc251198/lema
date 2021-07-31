<template>
  <div class="q-pa-md">
    <q-btn-dropdown dense flat round icon="account_circle" label="Quan">
      <div class="row no-wrap q-pa-md">

          <q-list>
        <q-item clickable v-close-popup>
          <q-item-section>
            <q-item-label>Photos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup>
          <q-item-section>
            <q-item-label>Videos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup>
          <q-item-section>
            <q-item-label>Articles</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>

        <q-separator vertical inset class="q-mx-lg" />

        <div class="column items-center">
          <q-avatar size="72px">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>

          <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

          <q-btn
            color="primary"
            label="Logout"
            push
            size="sm"
            v-close-popup
          />
        </div>
      </div>
    </q-btn-dropdown>
  </div>
</template>
<script>


export default {
    name: 'AccountSetting',
  data () {
    return {
    }
  }
}
</script>