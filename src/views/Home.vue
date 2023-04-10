<template>

<AddTask @add-task="addTask" v-if="showAddTask" />
  <Tasks
    :tasks="tasks"
    @delete-task="deleteTask"
    @toggle-reminder="toggleReminder"
  />
    
</template>

<script>
import Tasks from "../components/Tasks.vue";
import AddTask from "../components/AddTask.vue";

export default {
  components: {
    Tasks,
    AddTask
  },
  props:{
    showAddTask:Boolean
  },
  data() {
    return {
      tasks: []
    };
  },
  methods: {
    async deleteTask(id) {
      const res = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: "DELETE",
      });
      res.status === 200
        ? (this.tasks = this.tasks.filter((t) => t.id != id))
        : alert("Error deleting task");
    },
    async toggleReminder(id) {
      const res = await fetch(`http://localhost:5000/tasks/${id}`);
      const taskToToggle = await res.json();
      const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
      const response = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updTask),
      });

      this.tasks = this.tasks.map((t) =>
        t.id === id ? { ...t, reminder: !t.reminder } : t
      );
    },
    async addTask(task) {
      const res = await fetch("http://localhost:5000/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      });
      const data = await res.json();
      this.tasks = [...this.tasks, data];
    },
    async fetchTask() {
      const res = await fetch("http://localhost:5000/tasks");
      const data = await res.json();
      return data;
    },
  },
  emits: ["delete-task"],
  async created() {
    this.tasks = await this.fetchTask();
  }
}

</script>

