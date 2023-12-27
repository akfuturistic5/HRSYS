<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <!-- Page Header -->
        <breadcrumb :title="title" :path="path" :text="text" />
        <!-- /Page Header -->

        <div class="row">
          <div class="col-md-12">
            <!-- Annual Leave -->
            <annual></annual>
            <!-- /Annual Leave -->

            <!-- Sick Leave -->
            <sick></sick>
            <!-- /Sick Leave -->

            <!-- Maternity Leave -->
            <maternity></maternity>
            <!-- /Maternity Leave -->

            <!-- Custom Create Leave -->
            <custom-leave></custom-leave>
            <!-- /Custom Create Leave -->
          </div>
        </div>
      </div>
      <!-- /Page Content -->
    </div>
    <!-- /Page Wrapper -->
    <leave-settings-model />
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Leave Settings",
      path: "Dashboard",
      text: "Leave Settings",
    };
  },
};
</script>
