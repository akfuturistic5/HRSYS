<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <div class="content container-fluid">
        <div class="page-header">
          <div class="content-page-header">
            <h5>Carousel</h5>
          </div>
        </div>
        <carouselone></carouselone>
        <!-- end row -->

        <carouseltwo></carouseltwo>
        <!-- end row -->

        <carouselthree></carouselthree>
        <!-- end row -->
      </div>
    </div>
    <!-- /Page Wrapper -->
  </div>
  <!-- /Main Wrapper -->
</template>
<script>
export default {
  data() {
    return {
      title: "Carousel",
    };
  },
};
</script>
