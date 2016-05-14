<template>
  <div class="tasks" v-if="chosenProject">
    <h1>Tasks</h1>
    {{ chosenProject.id }}
    <ul>
      <li v-for="task in tasks">
        {{ task.name }}
      </li>
    </ul>
    <input v-model="newTaskName" v-on:keyup.enter="addTask" placeholder="New task" />
  </div>
</template>

<script>
import { getTasks, getChosenProject } from '../vuex/getters';

export default {
  data() {
    return {
      newTaskName: '',
    };
  },
  vuex: {
    getters: {
      tasks: getTasks,
      chosenProject: getChosenProject,
    },
  },
  methods: {
    addTask() {
      console.log('addTasks');
    },
  },
};
</script>
