<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <tasks-sidebar></tasks-sidebar>
    <!-- Page Wrapper -->
    <div class="page-wrapper" ref="pageWrapper">
      <div class="chat-main-row">
        <div class="chat-main-wrapper">
          <tasks-view />
        </div>
      </div>
      <tasks-model />
    </div>
    <!-- /Page Wrapper -->
  </div>
</template>
<script>
export default {
  mounted() {
    const pageWrapper = this.$refs.pageWrapper;
    this.setMinHeight(pageWrapper);
    window.addEventListener("resize", () => {
      this.setMinHeight(pageWrapper);
    });
  },
  methods: {
    setMinHeight(element) {
      const windowHeight = window.innerHeight;
      element.style.minHeight = `${windowHeight}px`;
    },
  },
};
</script>
