<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid pb-0">
        <breadcrumb :title="title" :path="path" :text="text" />
        <clientprofilehead />
        <div class="card tab-box">
          <div class="row user-tabs">
            <div class="col-lg-12 col-md-12 col-sm-12 line-tabs pt-3 pb-2">
              <ul class="nav nav-tabs nav-tabs-bottom">
                <li class="nav-item col-sm-3">
                  <a class="nav-link active" data-bs-toggle="tab" href="#myprojects"
                    >Projects</a
                  >
                </li>
                <li class="nav-item col-sm-3">
                  <a class="nav-link" data-bs-toggle="tab" href="#tasks">Tasks</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-12">
            <div class="tab-content profile-tab-content">
              <clientprofiletab />

              <clienttaskstab />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Profile",
      path: "Dashboard",
      text: "Profile",
    };
  },

  name: "client-profile",
};
</script>
