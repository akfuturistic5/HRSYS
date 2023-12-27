<template>
  <div class="table-responsive">
    <table class="table custom-table mb-0">
      <thead>
        <tr>
          <th>Project Name</th>
          <th>Progress</th>
          <th class="text-end">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in AdminRecentProject" :key="item.id">
          <td>
            <h2>
              <router-link to="project-view">{{ item.Name }}</router-link>
            </h2>
            <small class="block text-ellipsis">
              <span>{{ item.Open }}</span> <span class="text-muted">open tasks, </span>
              <span>{{ item.num }}</span>
              <span class="text-muted ms-1">tasks completed</span>
            </small>
          </td>
          <td>
            <div class="progress progress-xs progress-striped">
              <div
                :class="item.Class"
                role="progressbar"
                data-bs-toggle="tooltip"
                :title="item.Title"
              ></div>
            </div>
          </td>
          <td class="text-end">
            <div class="dropdown dropdown-action">
              <a
                href="javascript:;"
                class="action-icon dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                ><i class="material-icons">more_vert</i></a
              >
              <div class="dropdown-menu dropdown-menu-right">
                <a class="dropdown-item" href="javascript:void(0)"
                  ><i class="fa-solid fa-pencil m-r-5"></i> Edit</a
                >
                <a class="dropdown-item" href="javascript:void(0)"
                  ><i class="fa-regular fa-trash-can m-r-5"></i> Delete</a
                >
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminRecentProject from "@/assets/json/admin-recent-project.json";
export default {
  data() {
    return {
      AdminRecentProject: AdminRecentProject,
    };
  },
};
</script>
