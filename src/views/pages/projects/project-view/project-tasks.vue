<template>
  <div class="project-task">
    <ul class="nav nav-tabs nav-tabs-top nav-justified mb-0">
      <li class="nav-item">
        <a
          class="nav-link active"
          href="#all_tasks"
          data-bs-toggle="tab"
          aria-expanded="true"
          >All Tasks</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          href="#pending_tasks"
          data-bs-toggle="tab"
          aria-expanded="false"
          >Pending Tasks</a
        >
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          href="#completed_tasks"
          data-bs-toggle="tab"
          aria-expanded="false"
          >Completed Tasks</a
        >
      </li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane show active" id="all_tasks">
        <div class="task-wrapper">
          <div class="task-list-container">
            <div class="task-list-body">
              <ul id="task-list">
                <li
                  class="task"
                  :class="{ completed: task.completed }"
                  v-for="(task, index) in tasks"
                  :key="index"
                >
                  <div class="task-container">
                    <span class="task-action-btn task-check">
                      <span
                        :class="[
                          'action-circle',
                          'large',
                          'complete-btn',
                          { completed: task.completed },
                        ]"
                        title="Mark Complete"
                        @click="markComplete(index)"
                      >
                        <i class="material-icons">check</i>
                      </span>
                    </span>
                    <span class="task-label">{{ task.text }}</span>
                    <span class="task-action-btn task-btn-right">
                      <span class="action-circle large me-1" title="Assign">
                        <i class="material-icons">person_add</i>
                      </span>
                      <span
                        class="action-circle large delete-btn"
                        title="Delete Task"
                        @click="deleteTask(index)"
                      >
                        <i class="material-icons">delete</i>
                      </span>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div class="task-list-footer">
              <div v-if="showInput" class="new-task">
                <textarea
                  v-model="newTask"
                  id="new-task"
                  placeholder="Enter new task here..."
                ></textarea>
                <span class="error-message" v-if="newTask.trim() === ''">
                  You need to enter a task first
                </span>
                <button @click="addTask" class="add-new-task-btn btn">Add Task</button>
                <button @click="closeTaskPanel" class="btn">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane" id="pending_tasks"></div>
      <div class="tab-pane" id="completed_tasks"></div>
    </div>
  </div>
</template>
<script>
import "vue-toast-notification/dist/theme-default.css";
export default {
  data() {
    return {
      newTask: "",
      tasks: [
        { text: "Patient appointment booking", completed: false },
        { text: "Appointment booking with payment gateway", completed: false },
        { text: "Doctor available module", completed: true },
        { text: "Patient and Doctor video conferencing", completed: false },
        { text: "Private chat module", completed: false },
        { text: "Patient Profile add", completed: false },
      ],
      showInput: false,
    };
  },
  methods: {
    toggleTaskInput() {
      this.showInput = !this.showInput;
      if (!this.showInput) {
        this.newTask = "";
      }
    },
    addTask() {
      if (this.newTask.trim() === "") {
        // Show an error message or handle it as needed
        return;
      }

      this.tasks.push({ text: this.newTask, completed: false });
      this.newTask = "";
      this.showInput = false;
    },
    closeTaskPanel() {
      this.showInput = false;
      this.newTask = "";
    },
    markComplete(index) {
      const task = this.tasks[index];
      task.completed = !task.completed;

      const message = task.completed
        ? `${task.text} marked as complete.`
        : `${task.text} marked as incomplete.`;

      this.$toast.open({
        message,
        type: "default",
      });
    },
    deleteTask(index) {
      const task = this.tasks[index];
      this.tasks.splice(index, 1);

      this.$toast.open({
        message: `${task.text} has been deleted.`,
        type: "default",
      });
    },
  },
};
</script>
