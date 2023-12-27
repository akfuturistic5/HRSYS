<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>
    <div class="page-wrapper" ref="pageWrapper">
      <div class="chat-main-row">
        <div class="chat-main-wrapper">
          <div class="col-lg-8 message-view task-view">
            <div class="chat-window">
              <div class="fixed-header">
                <div class="navbar">
                  <div class="float-start ticket-view-details">
                    <div class="ticket-header">
                      <span>Status: </span> <span class="badge badge-warning">New</span>
                      <span class="m-l-15 text-muted">Client: </span>
                      <a href="javascript:;">Delta Infotech</a>
                      <span class="m-l-15 text-muted">Created: </span>
                      <span>5 Jan 2023 07:21 AM </span>
                      <span class="m-l-15 text-muted">Created by:</span>
                      <span><router-link to="profile">John Doe</router-link></span>
                    </div>
                  </div>
                  <a
                    class="task-chat profile-rightbar float-end"
                    id="task_chat"
                    href="#task_window"
                    ><i class="fa fa fa-comment"></i
                  ></a>
                </div>
              </div>
              <laptop-issue></laptop-issue>
            </div>
          </div>
          <rightchat></rightchat>
        </div>
      </div>
    </div>
  </div>
  <ticket-view-model></ticket-view-model>
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
