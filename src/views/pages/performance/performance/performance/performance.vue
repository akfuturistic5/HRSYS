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

        <basicinformation></basicinformation>

        <personalexcellence></personalexcellence>

        <commentsrole></commentsrole>

        <appraisee></appraisee>

        <goals></goals>

        <professional></professional>

        <professionalgoals></professionalgoals>

        <performancetraining></performancetraining>

        <generalcomment></generalcomment>

        <ro></ro>

        <performancetable></performancetable>
      </div>
      <!-- /Page Content -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Performance",
      path: "Dashboard",
      text: "Performance",
    };
  },
};
</script>
