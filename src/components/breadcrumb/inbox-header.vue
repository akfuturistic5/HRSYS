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
      <div class="col-auto float-end ms-auto" v-if="isInboxRoute">
        <router-link to="compose" class="btn add-btn"
          ><i class="fa-solid fa-plus"></i> {{ text1 }}</router-link
        >
      </div>
      <div class="col-auto float-end ms-auto" v-if="isDesignationRoute">
        <a
          href="javascript:void(0);"
          class="btn add-btn"
          data-bs-toggle="modal"
          data-bs-target="#add_designation"
          ><i class="fa-solid fa-plus"></i> {{ text1 }}</a
        >
      </div>
      <div class="col-auto float-end ms-auto" v-if="isTimesheetRoute">
        <a
          href="javascript:void(0);"
          class="btn add-btn"
          data-bs-toggle="modal"
          data-bs-target="#add_todaywork"
          ><i class="fa-solid fa-plus"></i> {{ text1 }}</a
        >
      </div>
      <div class="col-auto float-end ms-auto" v-if="isOvertimeRoute">
        <a
          href="javascript:void(0);"
          class="btn add-btn"
          data-bs-toggle="modal"
          data-bs-target="#add_overtime"
          ><i class="fa-solid fa-plus"></i> {{ text1 }}</a
        >
      </div>
      <div class="col-auto float-end ms-auto" v-if="isLeaveAdminRoute">
        <a
          href="javascript:void(0);"
          class="btn add-btn"
          data-bs-toggle="modal"
          data-bs-target="#add_termination"
          ><i class="fa-solid fa-plus"></i> {{ text1 }}</a
        >
      </div>
      <div class="col-auto float-end ms-auto" v-if="isAssetsRoute">
        <a
          href="javascript:void(0);"
          class="btn add-btn"
          data-bs-toggle="modal"
          data-bs-target="#add_asset"
          ><i class="fa-solid fa-plus"></i>{{ text1 }}</a
        >
      </div>
      <div class="col-auto float-end ms-auto" v-if="isHolidayRoute">
        <a
          href="javascript:void(0);"
          class="btn add-btn"
          data-bs-toggle="modal"
          data-bs-target="#add_holiday"
          ><i class="fa-solid fa-plus"></i> {{ text1 }}</a
        >
      </div>
      <div class="col-auto float-end ms-auto" v-if="isJobsRoute">
        <a
          href="javascript:void(0);"
          class="btn add-btn"
          data-bs-toggle="modal"
          data-bs-target="#add_job"
          ><i class="fa-solid fa-plus"></i>{{ text1 }}</a
        >
      </div>
      <div class="col-auto float-end ms-auto" v-if="isResignationRoute">
        <a
          href="javascript:void(0);"
          class="btn add-btn"
          data-bs-toggle="modal"
          data-bs-target="#add_resignation"
          ><i class="fa-solid fa-plus"></i> {{ text1 }}</a
        >
      </div>
      <div class="col-auto float-end ms-auto" v-if="isPromotionRoute">
        <a
          href="javascript:void(0);"
          class="btn add-btn"
          data-bs-toggle="modal"
          data-bs-target="#add_promotion"
          ><i class="fa-solid fa-plus"></i> {{ text1 }}</a
        >
      </div>
      <div class="col-auto float-end ms-auto" v-if="isTrainingRoute">
        <a
          href="javascript:void(0);"
          class="btn add-btn"
          data-bs-toggle="modal"
          data-bs-target="#add_training"
          ><i class="fa-solid fa-plus"></i> {{ text1 }}</a
        >
      </div>
      <div class="col-auto float-end ms-auto" v-if="isTrainerRoute">
        <a
          href="javascript:void(0);"
          class="btn add-btn"
          data-bs-toggle="modal"
          data-bs-target="#add_trainer"
          ><i class="fa-solid fa-plus"></i> {{ text1 }}</a
        >
      </div>
      <div class="col-auto float-end ms-auto" v-if="isTrainingTypeRoute">
        <a
          href="javascript:void(0);"
          class="btn add-btn"
          data-bs-toggle="modal"
          data-bs-target="#add_type"
          ><i class="fa-solid fa-plus"></i> {{ text1 }}</a
        >
      </div>
      <div class="col-auto float-end ms-auto" v-if="isGoalRoute">
        <a
          href="javascript:void(0);"
          class="btn add-btn"
          data-bs-toggle="modal"
          data-bs-target="#add_goal"
          ><i class="fa-solid fa-plus"></i> {{ text1 }}</a
        >
      </div>
      <div class="col-auto float-end ms-auto" v-if="isPerformanceRoute">
        <a
          href="javascript:void(0);"
          class="btn add-btn"
          data-bs-toggle="modal"
          data-bs-target="#add_appraisal"
          ><i class="fa-solid fa-plus"></i>{{ text1 }}</a
        >
      </div>
      <div
        class="col-auto float-end ms-auto"
        v-if="isPerformanceindicatorRoute"
      >
        <a
          href="javascript:void(0);"
          class="btn add-btn"
          data-bs-toggle="modal"
          data-bs-target="#add_indicator"
          ><i class="fa-solid fa-plus"></i> {{ text1 }}</a
        >
      </div>
      <div class="col-auto float-end ms-auto" v-if="isGoaltypeRoute">
        <a
          href="javascript:void(0);"
          class="btn add-btn"
          data-bs-toggle="modal"
          data-bs-target="#add_type"
          ><i class="fa-solid fa-plus"></i> {{ text1 }}</a
        >
      </div>
      <div class="col-auto float-end ms-auto" v-if="isUsersRoute">
        <a
          href="javascript:;"
          class="btn add-btn"
          data-bs-toggle="modal"
          data-bs-target="#add_user"
          ><i class="fa-solid fa-plus"></i>{{ text1 }}</a
        >
      </div>
      <div class="col-auto float-end ms-auto" v-if="isDepartmentRoute">
        <a
          href="javascript:;"
          class="btn add-btn"
          data-bs-toggle="modal"
          data-bs-target="#add_department"
          ><i class="fa-solid fa-plus"></i> {{ text1 }}</a
        >
      </div>
      <div class="col-auto float-end ms-auto" v-if="isLeaveRoute">
        <a
          href="javascript:;"
          class="btn add-btn"
          data-bs-toggle="modal"
          data-bs-target="#add_leavetype"
          ><i class="fa-solid fa-plus"></i> {{ text1 }}</a
        >
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
  computed: {
    isInboxRoute() {
      return this.$route.path === "/inbox";
    },
    isDesignationRoute() {
      return this.$route.path === "/designations";
    },
    isTimesheetRoute() {
      return this.$route.path === "/timesheet";
    },
    isOvertimeRoute() {
      return this.$route.path === "/overtime";
    },
    isLeaveAdminRoute() {
      return this.$route.path === "/termination";
    },

    isAssetsRoute() {
      return this.$route.path === "/assets";
    },
    isHolidayRoute() {
      return this.$route.path === "/holidays";
    },
    isJobsRoute() {
      return this.$route.path === "/jobs";
    },
    isResignationRoute() {
      return this.$route.path === "/resignation";
    },
    isPromotionRoute() {
      return this.$route.path === "/promotion";
    },
    isTrainingTypeRoute() {
      return this.$route.path === "/training-type";
    },
    isTrainerRoute() {
      return this.$route.path === "/trainers";
    },
    isTrainingRoute() {
      return this.$route.path === "/training";
    },
    isGoalRoute() {
      return this.$route.path === "/goal-tracking";
    },
    isPerformanceRoute() {
      return this.$route.path === "/performance-appraisal";
    },
    isPerformanceindicatorRoute() {
      return this.$route.path === "/performance-indicator";
    },
    isGoaltypeRoute() {
      return this.$route.path === "/goal-type";
    },
    isUsersRoute() {
      return this.$route.path === "/users";
    },
    isDepartmentRoute() {
      return this.$route.path === "/departments";
    },
    isLeaveRoute() {
      return this.$route.path === "/leave-type";
    },
  },
};
</script>
