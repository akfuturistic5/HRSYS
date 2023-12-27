<template>
  <div class="page-header">
    <div class="row">
      <div class="col">
        <h3 class="page-title">{{ title }}</h3>
        <ul class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="admin-dashboard">{{ path }}</router-link>
          </li>
          <li class="breadcrumb-item active">{{ text }}</li>
        </ul>
      </div>
      <div class="col-auto" v-if="isEmployeeReportsRoute">
        <a href="javascript:void(0);" class="btn btn-primary">{{ text1 }}</a>
      </div>
      <div class="col-auto" v-if="isLeaveReportsRoute">
        <a href="javascript:void(0);" class="btn btn-primary">{{ text1 }}</a>
      </div>
      <div class="col-auto" v-if="isDailyReportsRoute">
        <a href="javascript:void(0);" class="btn btn-primary">{{ text1 }}</a>
      </div>
      <div class="col-auto float-end ms-auto" v-if="isSubscriptionRoute">
        <a
          href="javascript:void(0);"
          class="btn add-btn"
          data-bs-toggle="modal"
          data-bs-target="#add_plan"
          ><i class="fa-solid fa-plus"></i>{{ text1 }}</a
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: { type: String, default: "" },
    path: { type: String, default: "" },
    text: { type: String, default: "" },
    text1: { type: String, default: "" },
  },
  computed: {
    isEmployeeReportsRoute() {
      return this.$route.path === "/employee-reports";
    },
    isLeaveReportsRoute() {
      return this.$route.path === "/leave-reports";
    },
    isDailyReportsRoute() {
      return this.$route.path === "/daily-reports";
    },
    isSubscriptionRoute() {
      return this.$route.path === "/subscriptions";
    },
  },
};
</script>
