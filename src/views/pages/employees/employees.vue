<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <!-- Page Header -->
        <employees-header :title="title" :path="path" :text="text" :text1="text1" />
        <!-- /Page Header -->

        <!-- Search Filter -->
        <search-filter></search-filter>
        <!-- /Search Filter -->

        <div class="row staff-grid-row">
          <div
            class="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3"
            v-for="item in Employees"
            :key="item.id"
          >
            <div class="profile-widget">
              <div class="profile-img">
                <router-link to="profile" class="avatar"
                  ><img
                    :src="require(`@/assets/img/profiles/${item.image}`)"
                    alt="User Image"
                /></router-link>
              </div>
              <div class="dropdown profile-action">
                <a
                  href="javascript:;"
                  class="action-icon dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  ><i class="material-icons">more_vert</i></a
                >
                <div class="dropdown-menu dropdown-menu-right">
                  <a
                    class="dropdown-item"
                    href="javascript:;"
                    data-bs-toggle="modal"
                    data-bs-target="#edit_employee"
                    ><i class="fa-solid fa-pencil m-r-5"></i> Edit</a
                  >
                  <a
                    class="dropdown-item"
                    href="javascript:;"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_employee"
                    ><i class="fa-regular fa-trash-can m-r-5"></i> Delete</a
                  >
                </div>
              </div>
              <h4 class="user-name m-t-10 mb-0 text-ellipsis">
                <router-link to="profile">{{ item.name }}</router-link>
              </h4>
              <div class="small text-muted">{{ item.designation }}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Page Content -->

      <employee-model></employee-model>
    </div>
    <!-- /Page Wrapper -->
  </div>
</template>

<script>
import Employees from "@/assets/json/employees.json";
export default {
  data() {
    return {
      title: "Employee",
      path: "Dashboard",
      text: "Employee",
      text1: "Add Employee",
      Employees: Employees,
    };
  },
};
</script>
