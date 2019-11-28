<template>
  <v-app>
    <v-content>
      <Lightnings/>
      <Dhecatron/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Lightnings from './components/Lightnings.vue';
import Dhecatron from './components/Dhecatron.vue';

export default Vue.extend({
  name: 'App',

  components: {
    Lightnings,
    Dhecatron,
  },

  data: () => ({
  }),
});
</script>
