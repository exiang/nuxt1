<template>
  <div class="max-w-full">
    <h1 class="text-5xl text-opacity-75 text-gray-900 font-bold">
      @nuxtjs/firebase
    </h1>
    <h2 class="text-3xl uppercase text-opacity-75 text-gray-900 font-semibold">
      demo
    </h2>

    <form id="demo">
        Insert: <input type="text" v-model="msg">
    </form>
    
    <div v-for="component in exampleComponents" :key="component.__file">
      <component :is="component" :msg="msg"></component>
    </div>

    <p>by yee siang</p>

  </div>

</template>

<script lang="ts">

import Vue from 'vue'
import Firestore from '~/components/Firestore.vue'
import RealTimeDatabase from '~/components/RealTimeDatabase.vue'


export default Vue.extend({
  components: {
    RealTimeDatabase,
  },
  asyncData({ app }) {
    // INFO -> app.$fire.firestore etc. are accessible
  },
  data: () => ({
    exampleComponents: [
        RealTimeDatabase,
    ],
  }),
  props: ['msg']
   
})


</script>