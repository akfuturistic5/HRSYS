<template>
  <div class="page-header">
    <div class="row align-items-center">
      <div class="col">
        <h3 class="page-title">{{ title }}</h3>
        <ul class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="admin-dashboard">{{ path }}</router-link>
          </li>
          <li class="breadcrumb-item">{{ text }}</li>
          <li class="breadcrumb-item active">{{ text1 }}</li>
        </ul>
      </div>
      <div class="col-auto float-end ms-auto" v-if="isQuestionsRoute">
        <a
          href="javascript:void(0);"
          class="btn add-btn mb-1"
          data-bs-toggle="modal"
          data-bs-target="#add_question"
          ><i class="fa-solid fa-plus"></i> {{ text2 }}</a
        >
        <a
          href="javascript:void(0);"
          class="btn add-btn me-1 mb-1"
          data-bs-toggle="modal"
          data-bs-target="#add_category"
          ><i class="fa-solid fa-plus"></i> {{ text3 }}</a
        >
      </div>
      <div class="col-auto float-end ms-auto" v-if="isCandidatesRoute">
        <a
          href="javascript:void(0);"
          data-bs-toggle="modal"
          data-bs-target="#add_candidates"
          class="btn add-btn"
          >{{ text2 }}</a
        >
      </div>
      <div class="col-auto float-end ms-auto" v-if="isExpLevelRoute">
        <a
          href="javascript:void(0);"
          data-bs-toggle="modal"
          data-bs-target="#add_employee"
          class="btn add-btn"
        >
          {{ text2 }}</a
        >
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
    text2: {
      type: String,
      default: "",
    },
    text3: {
      type: String,
      default: "",
    },
  },
  computed: {
    isQuestionsRoute() {
      return this.$route.path === "/interview-questions";
    },
    isCandidatesRoute() {
      return this.$route.path === "/candidates";
    },
    isExpLevelRoute() {
      return this.$route.path === "/experiance-level";
    },
  },
};
</script>
