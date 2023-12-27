<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <chat-sidebar></chat-sidebar>

    <!-- Page Wrapper -->
    <div ref="pageWrapper" class="page-wrapper">
      <!-- Main Row -->
      <div class="chat-main-row">
        <div class="chat-main-wrapper">
          <div class="col-lg-9 message-view task-view">
            <div class="chat-window">
              <div class="fixed-header">
                <div class="navbar">
                  <div class="user-details me-auto">
                    <div class="float-start user-img">
                      <router-link
                        class="avatar"
                        to="profile"
                        title="Mike Litorus"
                      >
                        <img
                          src="@/assets/img/profiles/avatar-05.jpg"
                          alt="User Image"
                          class="rounded-circle"
                        />
                        <span class="status online"></span>
                      </router-link>
                    </div>
                    <div class="user-info float-start">
                      <router-link to="profile"
                        ><span>Mike Litorus</span></router-link
                      >
                      <span class="last-seen">Online</span>
                    </div>
                  </div>
                  <ul class="nav float-end custom-menu">
                    <li class="nav-item">
                      <a
                        @click="toggleTaskWindow"
                        id="task_chat"
                        class="task-chat profile-rightbar float-end"
                        ><i class="fa fa-comments"></i
                      ></a>
                    </li>
                    <li class="nav-item dropdown dropdown-action">
                      <a
                        href="javascript:;"
                        class="nav-link dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        ><i class="fa-solid fa-gear"></i
                      ></a>
                      <div
                        class="dropdown-menu dropdown-menu-end custom-dropdown-menu"
                      >
                        <a href="javascript:void(0)" class="dropdown-item"
                          >Settings</a
                        >
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="chat-contents" @click="toggleCloseMenu">
                <div class="chat-content-wrap">
                  <div class="voice-call-avatar">
                    <img
                      src="@/assets/img/profiles/avatar-02.jpg"
                      alt="User Image"
                      class="call-avatar"
                    />
                    <span class="username">John Doe</span>
                    <span class="call-timing-count">00:59</span>
                  </div>
                  <div class="call-users">
                    <ul>
                      <li>
                        <a href="javascript:;">
                          <img
                            src="@/assets/img/profiles/avatar-03.jpg"
                            class="img-fluid"
                            alt="User Image"
                          />
                          <span class="call-mute"
                            ><i class="fa-solid fa-microphone-slash"></i
                          ></span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;">
                          <img
                            src="@/assets/img/profiles/avatar-08.jpg"
                            class="img-fluid"
                            alt="User Image"
                          />
                          <span class="call-mute"
                            ><i class="fa-solid fa-microphone-slash"></i
                          ></span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;">
                          <img
                            src="@/assets/img/profiles/avatar-05.jpg"
                            class="img-fluid"
                            alt="User Image"
                          />
                          <span class="call-mute"
                            ><i class="fa-solid fa-microphone-slash"></i
                          ></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="chat-footer">
                <div class="call-icons">
                  <ul class="call-items">
                    <li class="call-item">
                      <a
                        href="javascript:;"
                        title="Enable Video"
                        data-placement="top"
                        data-bs-toggle="tooltip"
                      >
                        <i class="fa-solid fa-video camera"></i>
                      </a>
                    </li>
                    <li class="call-item">
                      <a
                        href="javascript:;"
                        title="Mute"
                        data-placement="top"
                        data-bs-toggle="tooltip"
                      >
                        <i class="fa-solid fa-microphone microphone"></i>
                      </a>
                    </li>
                    <li class="call-item">
                      <a
                        href="javascript:;"
                        title="Add User"
                        data-placement="top"
                        data-bs-toggle="tooltip"
                      >
                        <i class="fa-solid fa-user-plus"></i>
                      </a>
                    </li>
                  </ul>
                  <div class="end-call">
                    <a href="javascript:void(0);">
                      <i class="material-icons">call_end</i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-lg-3 message-view chat-profile-view chat-sidebar"
            id="task_window"
            :class="{ opened: taskWindowOpen }"
          >
            <voice-call-chat></voice-call-chat>
          </div>
        </div>
      </div>
      <!-- Main Row -->

      <chat-model />
    </div>
    <!-- /Page Wrapper -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskWindowOpen: false,
      taskChatOpen: false,
    };
  },
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
    toggleTaskWindow() {
      this.taskWindowOpen = true;
    },
    toggleCloseMenu() {
      this.taskWindowOpen = false;
    },
  },
  name: "voice-call",
};
</script>
