<template>
  <!-- Page Header -->
  <div class="page-header">
    <div class="row align-items-center">
      <div class="col">
        <h3 class="page-title">{{ title }}</h3>
        <ul class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="admin-dashboard">{{ path }}</router-link>
          </li>
          <li class="breadcrumb-item active">{{ text }}</li>
        </ul>
      </div>
      <div class="col-auto float-end ms-auto">
        <a
          href="javascript:void(0);"
          class="btn add-btn"
          data-bs-toggle="modal"
          data-bs-target="#edit_project"
          ><i class="fa-solid fa-plus"></i> {{ text1 }}</a
        >
        <router-link
          to="task-board"
          class="btn btn-white float-end me-3"
          data-bs-toggle="tooltip"
          title="Task Board"
          ><i class="fa-solid fa-bars"></i
        ></router-link>
      </div>
    </div>
  </div>
  <!-- /Page Header -->
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    path: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    text1: {
      type: String,
      default: "",
    },
  },
};
</script>
