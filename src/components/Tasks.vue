<template>
  <div class="tasks" v-if="chosenProject">
    <h1>Tasks</h1>
    <ul>
      <li v-for="task in tasks">
        <span>{{ task.text }}</span>
        <a href="#" v-on:click.prevent v-on:click="deleteTask(task)">&times;</a>
      </li>
    </ul>
    <input v-model="newTaskText" v-on:keyup.enter="addTask" placeholder="New task" />
  </div>
</template>

<script>
import { getTasks, getChosenProject } from '../vuex/getters';
import { addNewTask, deleteTask } from '../vuex/actions';

export default {
  data() {
    return {
      newTaskText: '',
    };
  },
  vuex: {
    getters: {
      tasks: getTasks,
      chosenProject: getChosenProject,
    },
    actions: {
      deleteTask,
    },
  },
  methods: {
    addTask() {
      addNewTask(this.$store, this.chosenProject, { text: this.newTaskText });
      this.newTaskText = '';
    },
  },
};
</script>
