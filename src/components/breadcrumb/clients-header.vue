<template>
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
          data-bs-target="#add_client"
          ><i class="fa-solid fa-plus"></i> {{ text1 }}</a
        >
        <div class="view-icons">
          <router-link to="clients" class="grid-view btn btn-link"
            ><i class="fa fa-th"></i
          ></router-link>
          <router-link to="clients-list" class="list-view btn btn-link"
            ><i class="fa-solid fa-bars"></i
          ></router-link>
        </div>
      </div>
    </div>
  </div>
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
