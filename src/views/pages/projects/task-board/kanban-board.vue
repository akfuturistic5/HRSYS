<template>
  <div class="kanban-board card mb-0">
    <div class="card-body">
      <div class="kanban-cont">
        <div class="d-flex flex-row">
          <div
            v-for="(module, color) in modules"
            :key="color"
            class="kanban-column"
          >
            <div :class="['kanban-list', color]">
              <div class="kanban-header">
                <span class="status-title">{{ module.title }}</span>
                <div class="dropdown kanban-action">
                  <a href="javascript:;" data-bs-toggle="dropdown">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right">
                    <a
                      class="dropdown-item"
                      href="javascript:;"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_task_board"
                    >
                      Edit
                    </a>
                    <a class="dropdown-item" href="javascript:;">Delete</a>
                  </div>
                </div>
              </div>
              <div class="kanban-wrap">
                <draggable
                  :list="module.cards"
                  :group="{ name: 'kanban', pull: true, put: true }"
                  @end="onDragEnd(color)"
                >
                  <div
                    v-for="card in module.cards"
                    :key="card.id"
                    class="card panel"
                  >
                    <div class="kanban-box">
                      <!-- Card content -->
                      <div class="task-board-header">
                        <span class="status-title"
                          ><a href="javascript:void(0);">{{
                            card.name
                          }}</a></span
                        >
                        <div class="dropdown kanban-task-action">
                          <a href="javascript:;" data-bs-toggle="dropdown">
                            <i class="fa-solid fa-angle-down"></i>
                          </a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a
                              class="dropdown-item"
                              href="javascript:;"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_task_modal"
                              >Edit</a
                            >
                            <a class="dropdown-item" href="javascript:;">Delete</a>
                          </div>
                        </div>
                      </div>
                      <div class="task-board-body">
                        <div>
                          <div class="progress progress-xs">
                            <div
                              class="progress-bar w-20"
                              role="progressbar"
                              aria-valuenow="20"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                          <span>{{ card.progress }}</span>
                        </div>
                        <div class="kanban-footer">
                          <span class="task-info-cont">
                            <span class="task-date"
                              ><i class="fa-regular fa-clock"></i>
                              {{ card.date }}</span
                            >
                            <span
                              class="task-priority badge bg-inverse-danger"
                              >{{ card.priority }}</span
                            >
                          </span>
                          <span class="task-users">
                            <img
                              src="@/assets/img/profiles/avatar-12.jpg"
                              class="task-avatar"
                              width="24"
                              height="24"
                              alt="User Image"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </draggable>
              </div>
              <div class="add-new-task">
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="modal"
                  data-bs-target="#add_task_modal"
                >
                  Add New Task
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { VueDraggableNext } from "vue-draggable-next";
export default {
  components: {
    draggable: VueDraggableNext,
  },
  data() {
    return {
      modules: {
        "kanban-danger": {
          title: "Pending",
          cards: [
            {
              name: "Website redesign",
              progress: "70%",
              date: "Sep 26",
              priority: "High",
              id: "1",
            },

            {
              name: "Make a wireframe",
              progress: "70%",
              date: "Sep 26",
              priority: "Low",
              id: "2",
            },
            {
              name: "Website redesign",
              progress: "70%",
              date: "Sep 26",
              priority: "Normal",
              id: "3",
            },
          ],
        },
        "kanban-info": {
          title: "Progress",
          cards: [
            {
              name: "Website redesign",
              progress: "70%",
              date: "Sep 26",
              priority: "Normal",
              id: "1",
            },
            {
              name: "Website redesign",
              progress: "70%",
              date: "Sep 26",
              priority: "High",
              id: "2",
            },
          ],
        },
        "kanban-success": {
          title: "Completed",
          cards: [],
        },
        "kanban-warning": {
          title: "Inprogress",
          cards: [
            {
              name: "Website redesign",
              progress: "70%",
              date: "Sep 26",
              priority: "Low",
              id: "1",
            },
          ],
        },
        "kanban-purple": {
          title: "Onhold",
          cards: [
            {
              name: "Website redesign",
              progress: "70%",
              date: "Sep 26",
              priority: "High",
              id: "1",
            },
          ],
        },
        "kanban-primary": {
          title: "Review",
          cards: [
            {
              name: "Website redesign",
              progress: "70%",
              date: "Sep 26",
              priority: "High",
              id: "1",
            },
          ],
        },
      },
      moduleOrder: [
        "kanban-danger",
        "kanban-info",
        "kanban-success",
        "kanban-warning",
        "kanban-purple",
        "kanban-primary",
      ],
    };
  },
  methods: {
    onDragEnd(moduleColor) {
      // Handle module drops here
      const fromIndex = event.oldIndex;
      const toIndex = event.newIndex;
      const movedModule = this.moduleOrder.splice(fromIndex, 1)[0];
      this.moduleOrder.splice(toIndex, 0, movedModule);
    },
    onModuleDragEnd(event) {
      console.log(onModuleDragEnd);
    },
  },
};
</script>
<style scoped>
.kanban-list {
  margin-bottom: 20px;
}

.kanban-danger {
  background-color: #ef5350;
}

.kanban-info {
  background-color: #42a5f5;
}

.kanban-success {
  background-color: #4caf50;
}

.kanban-warning {
  background-color: #ffb300;
}

.kanban-purple {
  background-color: #7460ee;
}

.kanban-primary {
  background-color: #ff9b44;
}

.kanban-box .progress-bar {
  outline: none !important;
}
</style>
