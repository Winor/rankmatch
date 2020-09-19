<template>
  <div class="login">
      <section id="firebaseui-auth-container"></section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {authUI}  from "../firebase";
import "firebaseui/dist/firebaseui.css";

@Component
export default class PlayerName extends Vue {
  mounted() {
        authUI();
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  padding-top: 10%;
}
</style>
