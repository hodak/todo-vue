<template>
  <div class="projects">
    <h1>Projects</h1>
    <ul>
      <li v-for="project in projects">
        {{ project.name }}
      </li>
    </ul>
    <input v-model="newProjectName" v-on:keyup.enter="addNewProject" placeholder="New project" />
  </div>
</template>

<script>
const uuid = require('node-uuid');

export default {
  data() {
    return {
      projects: [
        { id: uuid.v4(), name: 'Write a TODO app' },
        { id: uuid.v4(), name: 'Record a Snapchat on Vue.js' },
      ],
      newProjectName: '',
    };
  },
  methods: {
    addNewProject() {
      if (this.newProjectName.length === 0) { return; }
      this.projects.push({ id: uuid.v4(), name: this.newProjectName });
      this.newProjectName = '';
    },
  },
};
</script>
