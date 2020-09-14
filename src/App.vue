<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RankForm from "./components/RankForm.vue";

@Component({
  components: {
    RankForm
  },
})
export default class App extends Vue {}
</script>

<style>
body {
  height: 100%;
  margin: 0 !important;
  background-color: #f6e9f0;
  background-image: url(https://static.playoverwatch.com/img/crystal-candy-bg-top-e64823cff8.jpg);
  background-repeat: no-repeat;
}
.el-row {
  margin-bottom: 20px;
}
.el-checkbox__inner {
  width: 30px !important;
  height: 30px !important;
}
.el-checkbox__inner::after {
  height: 9px !important;
  left: 11px !important;
  top: 8px !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  opacity: 0.9;
  margin-top: 5%;
}
</style>
