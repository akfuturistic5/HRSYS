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
      <div class="col-auto float-end ms-auto" v-if="isLeavesRoute">
        <a
          href="javascript:void(0);"
          class="btn add-btn"
          data-bs-toggle="modal"
          data-bs-target="#add_leave"
          ><i class="fa-solid fa-plus"></i> {{ text1 }}</a
        >
      </div>
      <div class="col-auto float-end ms-auto" v-if="isLeavesEmployeeRoute">
        <a
          href="javascript:void(0);"
          class="btn add-btn"
          data-bs-toggle="modal"
          data-bs-target="#add_leave"
          ><i class="fa-solid fa-plus"></i> {{ text1 }}</a
        >
      </div>
      <div class="col-auto float-end ms-auto" v-if="isEstimateRoute">
        <router-link to="create-estimate" class="btn add-btn"
          ><i class="fa-solid fa-plus"></i> {{ text1 }}</router-link
        >
      </div>
      <div class="col-auto float-end ms-auto" v-if="isInvoicesRoute">
        <router-link to="create-invoice" class="btn add-btn"
          ><i class="fa-solid fa-plus"></i> {{ text1 }}</router-link
        >
      </div>
      <div class="col-auto float-end ms-auto" v-if="isExpensesRoute">
        <a
          href="javascript:void(0);"
          class="btn add-btn"
          data-bs-toggle="modal"
          data-bs-target="#add_expense"
          ><i class="fa-solid fa-plus"></i> {{ text1 }}</a
        >
      </div>
      <div class="col-auto float-end ms-auto" v-if="isProvidentFundRoute">
        <a
          href="javascript:void(0);"
          class="btn add-btn"
          data-bs-toggle="modal"
          data-bs-target="#add_pf"
          ><i class="fa-solid fa-plus"></i> {{ text1 }}</a
        >
      </div>
      <div class="col-auto float-end ms-auto" v-if="isTaxesRoute">
        <a
          href="javascript:void(0);"
          class="btn add-btn"
          data-bs-toggle="modal"
          data-bs-target="#add_tax"
          ><i class="fa-solid fa-plus"></i> {{ text1 }}</a
        >
      </div>
      <div class="col-auto float-end ms-auto" v-if="isCategoriesRoute">
        <a
          href="javascript:void(0);"
          class="btn add-btn"
          data-bs-toggle="modal"
          data-bs-target="#add_categories"
          ><i class="fa-solid fa-plus"></i> {{ text1 }}</a
        >
      </div>
      <div class="col-auto float-end ms-auto" v-if="isSubCategoryRoute">
        <a
          href="javascript:void(0);"
          class="btn add-btn"
          data-bs-toggle="modal"
          data-bs-target="#add_categories"
          ><i class="fa-solid fa-plus"></i> {{ text1 }}</a
        >
      </div>
      <div class="col-auto float-end ms-auto" v-if="isBudgetsRoute">
        <a
          href="javascript:void(0);"
          class="btn add-btn"
          data-bs-toggle="modal"
          data-bs-target="#add_categories"
          ><i class="fa-solid fa-plus"></i> {{ text1 }}</a
        >
      </div>
      <div class="col-auto float-end ms-auto" v-if="isBudgetExpensesRoute">
        <a
          href="javascript:void(0);"
          class="btn add-btn"
          data-bs-toggle="modal"
          data-bs-target="#add_categories"
          ><i class="fa-solid fa-plus"></i> {{ text1 }}</a
        >
      </div>
      <div class="col-auto float-end ms-auto" v-if="isBudgetRevenuesRoute">
        <a
          href="javascript:void(0);"
          class="btn add-btn"
          data-bs-toggle="modal"
          data-bs-target="#add_categories"
          ><i class="fa-solid fa-plus"></i> {{ text1 }}</a
        >
      </div>
      <div class="col-auto float-end ms-auto" v-if="isSalaryRoute">
        <a
          href="javascript:void(0);"
          class="btn add-btn"
          data-bs-toggle="modal"
          data-bs-target="#add_salary"
          ><i class="fa-solid fa-plus"></i>{{ text1 }}</a
        >
      </div>
      <div class="col-auto float-end ms-auto" v-if="isPolicyRoute">
        <a
          href="javascript:void(0);"
          class="btn add-btn"
          data-bs-toggle="modal"
          data-bs-target="#add_policy"
          ><i class="fa-solid fa-plus"></i> {{ text1 }}</a
        >
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
      <div class="col-auto float-end ms-auto" v-if="isTicketsRoute">
        <a
          href="javascript:void(0);"
          class="btn add-btn"
          data-bs-toggle="modal"
          data-bs-target="#add_ticket"
          ><i class="fa-solid fa-plus"></i>{{ text1 }}</a
        >
      </div>
      <div class="col-auto float-end ms-auto" v-if="isSubscriptionsRoute">
        <a
          href="javascript:void(0);"
          class="btn add-btn"
          data-bs-toggle="modal"
          data-bs-target="#add_plan"
          ><i class="fa-solid fa-plus"></i> {{ text1 }}</a
        >
      </div>
      <div class="col-auto float-end ms-auto" v-if="isDepartmentsRoute">
        <a
          href="javascript:;"
          class="btn add-btn"
          data-bs-toggle="modal"
          data-bs-target="#add_department"
          ><i class="fa-solid fa-plus"></i> {{ text1 }}</a
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
  },
  computed: {
    isLeavesRoute() {
      return this.$route.path === "/leaves";
    },
    isEstimateRoute() {
      return this.$route.path === "/estimates";
    },
    isInvoicesRoute() {
      return this.$route.path === "/invoices";
    },
    isLeavesEmployeeRoute() {
      return this.$route.path === "/leaves-employee";
    },
    isExpensesRoute() {
      return this.$route.path === "/expenses";
    },
    isProvidentFundRoute() {
      return this.$route.path === "/provident-fund";
    },
    isTaxesRoute() {
      return this.$route.path === "/taxes";
    },
    isCategoriesRoute() {
      return this.$route.path === "/categories";
    },
    isSubCategoryRoute() {
      return this.$route.path === "/sub-category";
    },
    isBudgetsRoute() {
      return this.$route.path === "/budgets";
    },
    isBudgetExpensesRoute() {
      return this.$route.path === "/budget-expenses";
    },
    isBudgetRevenuesRoute() {
      return this.$route.path === "/budget-revenues";
    },
    isSalaryRoute() {
      return this.$route.path === "/salary";
    },
    isPolicyRoute() {
      return this.$route.path === "/policies";
    },
    isEmployeeReportsRoute() {
      return this.$route.path === "/employee-reports";
    },
    isLeaveReportsRoute() {
      return this.$route.path === "/leave-reports";
    },
    isDailyReportsRoute() {
      return this.$route.path === "/daily-reports";
    },
    isTicketsRoute() {
      return this.$route.path === "/tickets";
    },
    isSubscriptionsRoute() {
      return this.$route.path === "/subscriptions";
    },
    isDepartmentsRoute() {
      return this.$route.path === "/departments";
    },
  },
};
</script>
