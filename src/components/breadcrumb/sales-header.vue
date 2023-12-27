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
        <div class="btn-group btn-group-sm">
          <button class="btn btn-white">CSV</button>
          <button class="btn btn-white">PDF</button>
          <button class="btn btn-white">
            <i class="fa-solid fa-print fa-lg"></i> Print
          </button>
        </div>
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
  },
};
</script>
