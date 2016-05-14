<template>
  <div class="projects">
    <h1>Projects</h1>
    <ul v-on:click.prevent>
      <li v-for="project in projects">
        <a href="#" v-on:click="chooseProject(project)">{{ project.name }}</a>
      </li>
    </ul>
    <input v-model="newProjectName" v-on:keyup.enter="addProject" placeholder="New project" />
  </div>
</template>

<script>
import { getProjects } from '../vuex/getters';
import { addNewProject, chooseProject } from '../vuex/actions';

export default {
  data() {
    return {
      newProjectName: '',
    };
  },
  vuex: {
    getters: {
      projects: getProjects,
    },
    actions: {
      chooseProject,
    },
  },
  methods: {
    addProject() {
      if (this.newProjectName.length === 0) { return; }
      addNewProject(this.$store, this.newProjectName);
      this.newProjectName = '';
    },
  },
};
</script>
