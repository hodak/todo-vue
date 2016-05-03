<template>
  <div id="app">
    <projects></projects>

    <display></display>
    <increment></increment>
  </div>
</template>

<script>
import Projects from './components/Projects';
import Display from './components/Display';
import Increment from './components/Increment';
import store from './vuex/store';

export default {
  components: {
    Projects, Display, Increment,
  },
  store,
};
</script>

<style>

</style>
