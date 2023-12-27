<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <breadcrumb :title="title" :path="path" :text="text" />
        <div class="row mb-4">
          <div class="col-md-3">
            <div class="stats-info">
              <h6>Joining</h6>
              <h4>12 <span>This Month</span></h4>
            </div>
          </div>
          <div class="col-md-3">
            <div class="stats-info">
              <h6>Renewal</h6>
              <h4>3 <span>This Month</span></h4>
            </div>
          </div>
          <div class="col-md-3">
            <div class="stats-info">
              <h6>Renewal</h6>
              <h4>0 <span>Next Month</span></h4>
            </div>
          </div>
          <div class="col-md-3">
            <div class="stats-info">
              <h6>Total Companies</h6>
              <h4>312</h4>
            </div>
          </div>
        </div>
        <companylist />
        <subscribedcompaniesmodal />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Subscribed Companies",
      path: "Dashboard",
      text: "Subscriptions",
    };
  },
  name: "index",
};
</script>
