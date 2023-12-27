<template>
  <div class="chat-content-wrap">
    <div class="chat-wrap-inner">
      <div class="chat-box">
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
        <div class="notification-popup hide">
          <p>
            <span class="task"></span>
            <span class="notification-text"></span>
          </p>
        </div>
      </div>
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
<style>
.complete-btn.completed {
  background-color: green !important;
  color: white !important;
}
.v-toast__text {
  z-index: 1051;
  max-width: 300px;
  word-break: break-word;
  display: inline-block;
  background: #1f8fef;
  border: 1px solid #1082e4;
  color: #ffffff;
  opacity: 0.8;
  border-radius: 2px;
  padding: 20px;
  box-sizing: border-box;
}
</style>
