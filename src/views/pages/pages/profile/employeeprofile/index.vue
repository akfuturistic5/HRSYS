<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid pb-0">
        <breadcrumb :title="title" :path="path" :text="text" />
        <profilehead />
        <div class="card tab-box">
          <div class="row user-tabs">
            <div class="col-lg-12 col-md-12 col-sm-12 line-tabs">
              <ul class="nav nav-tabs nav-tabs-bottom pt-3 pb-2">
                <li class="nav-item">
                  <a href="#emp_profile" data-bs-toggle="tab" class="nav-link active"
                    >Profile</a
                  >
                </li>
                <li class="nav-item">
                  <a href="#emp_projects" data-bs-toggle="tab" class="nav-link"
                    >Projects</a
                  >
                </li>
                <li class="nav-item">
                  <a href="#bank_statutory" data-bs-toggle="tab" class="nav-link"
                    >Bank & Statutory <small class="text-danger">(Admin Only)</small></a
                  >
                </li>
                <li class="nav-item">
                  <a href="#emp_assets" data-bs-toggle="tab" class="nav-link">Assets</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="tab-content">
          <profiletab />
          <projectstab />
          <banktab />
          <profileassets />
        </div>
      </div>
      <profilemodal />
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

  name: "profile",
};
</script>
