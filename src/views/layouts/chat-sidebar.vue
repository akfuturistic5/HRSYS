<template>
  <!-- Sidebar -->
  <div class="sidebar" id="sidebar">
    <div class="sidebar-inner slimscroll">
      <div id="sidebar-menu" class="sidebar-menu">
        <nav class="greedy">
          <ul class="list-inline-item list-unstyled links">
            <li>
              <router-link to="admin-dashboard"
                ><i class="la la-home"></i> <span>Back to Home</span></router-link
              >
            </li>
            <li class="menu-title">
              <span>Chat Groups</span>
              <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#add_group"
                ><i class="fa-solid fa-plus"></i
              ></a>
            </li>
            <li>
              <router-link to="/chat">
                <span class="chat-avatar-sm user-img">
                  <img
                    class="rounded-circle"
                    src="@/assets/img/user.jpg"
                    alt="User Image"
                  />
                </span>
                <span class="chat-user">#General</span>
              </router-link>
            </li>
            <li>
              <router-link to="/chat">
                <span class="chat-avatar-sm user-img">
                  <img
                    class="rounded-circle"
                    src="@/assets/img/user.jpg"
                    alt="User Image"
                  />
                </span>
                <span class="chat-user">#Video Responsive Survey</span>
              </router-link>
            </li>
            <li>
              <router-link to="/chat">
                <span class="chat-avatar-sm user-img">
                  <img
                    class="rounded-circle"
                    src="@/assets/img/user.jpg"
                    alt="User Image"
                  />
                </span>
                <span class="chat-user">#500rs</span>
              </router-link>
            </li>
            <li>
              <router-link to="/chat">
                <span class="chat-avatar-sm user-img">
                  <img
                    class="rounded-circle"
                    src="@/assets/img/user.jpg"
                    alt="User Image"
                  />
                </span>
                <span class="chat-user">#warehouse</span>
              </router-link>
            </li>
            <li class="menu-title">
              Direct Chats
              <a
                href="javascript:;"
                data-bs-toggle="modal"
                data-bs-target="#add_chat_user"
                ><i class="fa-solid fa-plus"></i
              ></a>
            </li>
            <li>
              <router-link to="/chat">
                <span class="chat-avatar-sm user-img">
                  <img
                    class="rounded-circle"
                    src="@/assets/img/profiles/avatar-02.jpg"
                    alt="User Image"
                  /><span class="status online"></span>
                </span>
                <span class="chat-user">John Doe</span>
                <span class="badge rounded-pill bg-danger">1</span>
              </router-link>
            </li>
            <li>
              <router-link to="/chat">
                <span class="chat-avatar-sm user-img">
                  <img
                    class="rounded-circle"
                    src="@/assets/img/profiles/avatar-09.jpg"
                    alt="User Image"
                  /><span class="status offline"></span>
                </span>
                <span class="chat-user">Richard Miles</span>
                <span class="badge rounded-pill bg-danger">7</span>
              </router-link>
            </li>
            <li>
              <router-link to="/chat">
                <span class="chat-avatar-sm user-img">
                  <img
                    class="rounded-circle"
                    src="@/assets/img/profiles/avatar-10.jpg"
                    alt="User Image"
                  /><span class="status away"></span>
                </span>
                <span class="chat-user">John Smith</span>
              </router-link>
            </li>
            <li class="active">
              <router-link to="/chat">
                <span class="chat-avatar-sm user-img">
                  <img
                    class="rounded-circle"
                    src="@/assets/img/profiles/avatar-05.jpg"
                    alt="User Image"
                  /><span class="status online"></span>
                </span>
                <span class="chat-user">Mike Litorus</span>
                <span class="badge rounded-pill bg-danger">2</span>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  <!-- /Sidebar -->
  <two-col-sidebar></two-col-sidebar>
</template>
