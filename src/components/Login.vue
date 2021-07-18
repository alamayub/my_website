<template>
  <v-dialog v-model="loginDialog" persistent :overlay="false" max-width="750px" transition="dialog-transition">
    <v-card>
      <v-card-title class="d-flex justify-space-between">
        <div class="title">Login</div>
        <v-btn icon color="error" @click="() => $store.commit('SET_LOGIN_DIALOG', false)">
          <v-icon size="18">mdi-close</v-icon>
        </v-btn>
      </v-card-title>  
    </v-card>  
  </v-dialog>  
</template>

<script>
export default {
  computed: {
    loginDialog() {
      return this.$store.state.loginDialog  
    }  
  }
}
</script>