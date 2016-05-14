<template>
  <div id="app">
    <projects></projects>
    <tasks></tasks>

    <display></display>
    <increment></increment>
  </div>
</template>

<script>
import Projects from './components/Projects';
import Display from './components/Display';
import Increment from './components/Increment';
import Tasks from './components/Tasks';
import store from './vuex/store';

export default {
  components: {
    Projects, Display, Increment, Tasks,
  },
  store,
};
</script>

<style>

</style>
