<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <!-- Page Header -->
        <breadcrumb :title="title" :path="path" :text="text" />
        <!-- /Page Header -->

        <!-- Content Starts -->
        Content Starts Here
        <!-- /Content End -->
      </div>
      <!-- /Page Content -->
    </div>
    <!-- /Page Wrapper -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Blank Page",
      path: "Dashboard",
      text: "Blank Page",
    };
  },
};
</script>