<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <chat-sidebar></chat-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <!-- Incoming Call -->
      <div class="call-box incoming-box">
        <div class="call-wrapper">
          <div class="call-inner">
            <div class="call-user">
              <img
                class="call-avatar"
                src="@/assets/img/profiles/avatar-11.jpg"
                alt="User Image"
              />
              <h4>Wilmer Deluna</h4>
              <span>Calling ...</span>
            </div>
            <div class="call-items">
              <router-link to="chat" class="btn call-item call-end"
                ><i class="material-icons">call_end</i></router-link
              >
              <router-link to="video-call" class="btn call-item call-start"
                ><i class="material-icons">call</i></router-link
              >
            </div>
          </div>
        </div>
      </div>
      <!-- /Incoming Call -->
    </div>
    <!-- /Page Wrapper -->
    <chat-model />
  </div>
</template>
