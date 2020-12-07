<template>
  <div>
    <ServiceTitle title="Firebase Realtime Database" />
    <div class="links">
      ={{msg}}=
      <Btn @click="readMsg()">Read Msg From Input</Btn>
      <Btn @click="writeToRealtimeDb()">Write to Realtime DB</Btn>
      <Btn @click="readFromRealtimeDb()">Read from Realtime DB</Btn>
      
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    async writeToRealtimeDb() {
      const messageRef = this.$fire.database.ref('message')
      try {
        await messageRef.set({
          message: this.msg,
        })
      } catch (e) {
        alert(e)
        return
      }
      alert('Success.')
    },
    async readFromRealtimeDb() {
      const messageRef = this.$fire.database.ref('message')
      try {
        const snapshot = await messageRef.once('value')
        alert(snapshot.val().message)
      } catch (e) {
        alert(e)
      }
    },
    async readMsg() {
      alert(this.msg)
    },
  },
  props: ['msg']
})
</script>