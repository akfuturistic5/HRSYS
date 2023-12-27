<template>
  <!-- Chats View -->
  <div class="col-lg-9 message-view task-view">
    <div class="chat-window">
      <div class="fixed-header">
        <div class="navbar">
          <div class="user-details me-auto">
            <div class="float-start user-img">
              <router-link class="avatar" to="profile" title="Mike Litorus">
                <img
                  src="@/assets/img/profiles/avatar-05.jpg"
                  alt="User Image"
                  class="rounded-circle"
                />
                <span class="status online"></span>
              </router-link>
            </div>
            <div class="user-info float-start">
              <router-link to="profile" title="Mike Litorus"
                ><span>Mike Litorus</span>
                <i class="typing-text ms-1">Typing...</i></router-link
              >
              <span class="last-seen">Last seen today at 7:50 AM</span>
            </div>
          </div>
          <div class="search-box">
            <div class="input-group input-group-sm">
              <input type="text" placeholder="Search" class="form-control" />
              <button type="button" class="btn">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
          <ul class="nav custom-menu">
            <li class="nav-item">
              <a
                class="nav-link task-chat profile-rightbar float-end"
                id="task_chat"
                @click="toggleTaskWindow"
                ><i class="fa-solid fa-user"></i
              ></a>
            </li>
            <li class="nav-item">
              <router-link to="voice-call" class="nav-link"
                ><i class="fa-solid fa-phone"></i
              ></router-link>
            </li>
            <li class="nav-item">
              <router-link to="video-call" class="nav-link"
                ><i class="fa-solid fa-video"></i
              ></router-link>
            </li>
            <li class="nav-item dropdown dropdown-action">
              <a
                aria-expanded="false"
                data-bs-toggle="dropdown"
                class="nav-link dropdown-toggle"
                href="javascript:;"
                ><i class="fa-solid fa-gear"></i
              ></a>
              <div class="dropdown-menu dropdown-menu-right">
                <a href="javascript:void(0)" class="dropdown-item"
                  >Delete Conversations</a
                >
                <a href="javascript:void(0)" class="dropdown-item">Settings</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="chat-contents" @click="toggleCloseMenu">
        <chat-left></chat-left>
      </div>
      <div class="chat-footer">
        <div class="message-bar">
          <div class="message-inner">
            <a
              class="link attach-icon"
              href="javascript:;"
              data-bs-toggle="modal"
              data-bs-target="#drag_files"
              ><img src="@/assets/img/attachment.png" alt="Attachment Icon"
            /></a>
            <div class="message-area">
              <div class="input-group">
                <textarea class="form-control" placeholder="Type message..."></textarea>
                <button class="btn btn-custom" type="button">
                  <i class="fa-solid fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Chats View -->
  <div
    class="col-lg-3 message-view chat-profile-view chat-sidebar"
    id="task_window"
    :class="{ opened: taskWindowOpen }"
  >
    <chat-right></chat-right>
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
  methods: {
    toggleTaskWindow() {
      this.taskWindowOpen = true;
    },
    toggleCloseMenu() {
      this.taskWindowOpen = false;
    },
  },
};
</script>
