<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <!-- Page Header -->
        <clients-header :title="title" :path="path" :text="text" :text1="text1" />
        <!-- /Page Header -->

        <!-- Search Filter -->
        <clients-filter></clients-filter>
        <!-- Search Filter -->

        <div class="row staff-grid-row">
          <div
            class="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3 d-flex"
            v-for="item in Clients"
            :key="item.id"
          >
            <div class="profile-widget w-100">
              <div class="profile-img">
                <router-link to="client-profile" class="avatar"
                  ><img
                    :src="require(`@/assets/img/profiles/${item.Image}`)"
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
                    data-bs-target="#edit_client"
                    ><i class="fa-solid fa-pencil m-r-5"></i> Edit</a
                  >
                  <a
                    class="dropdown-item"
                    href="javascript:;"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_client"
                    ><i class="fa-regular fa-trash-can m-r-5"></i> Delete</a
                  >
                </div>
              </div>
              <h4 class="user-name m-t-10 mb-0 text-ellipsis">
                <router-link to="client-profile">{{ item.CompanyName }}</router-link>
              </h4>
              <h5 class="user-name m-t-10 mb-0 text-ellipsis">
                <router-link to="client-profile">{{ item.Name }}</router-link>
              </h5>
              <div class="small text-muted">CEO</div>
              <router-link to="chat" class="btn btn-white btn-sm m-t-10 me-2"
                >Message</router-link
              >
              <router-link to="client-profile" class="btn btn-white btn-sm m-t-10"
                >View Profile</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <!-- /Page Content -->
      <client-model></client-model>
    </div>
    <!-- /Page Wrapper -->
  </div>
</template>

<script>
import Clients from "@/assets/json/clients.json";
export default {
  data() {
    return {
      title: "Clients",
      path: "Dashboard",
      text: "Clients",
      text1: "Add Client",
      Clients: Clients,
    };
  },
};
</script>
