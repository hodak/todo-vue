<template>
  <div id="app">
    <projects></projects>
    <tasks></tasks>

    <display></display>
  </div>
</template>

<script>
import Projects from './components/Projects';
import Display from './components/Display';
import Tasks from './components/Tasks';
import store from './vuex/store';

export default {
  components: {
    Projects, Display, Tasks,
  },
  store,
};
</script>

<style>

</style>
