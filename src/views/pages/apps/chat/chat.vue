<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <chat-sidebar></chat-sidebar>

    <div class="page-wrapper" ref="pageWrapper">
      <!-- Chat Main Row -->
      <div class="chat-main-row">
        <!-- Chat Main Wrapper -->
        <div class="chat-main-wrapper">
          <!-- Chats View -->
          <chat-view></chat-view>
          <!-- /Chats View -->
        </div>
        <!-- /Chat Main Wrapper -->
      </div>
      <!-- /Chat Main Row -->
      <chat-model />
    </div>
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
