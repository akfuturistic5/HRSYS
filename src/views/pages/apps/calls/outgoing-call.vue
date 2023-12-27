<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <chat-sidebar></chat-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <!-- Outgoing Call -->
      <div class="call-box outgoing-box">
        <div class="call-wrapper">
          <div class="call-inner">
            <div class="call-user">
              <img
                src="@/assets/img/profiles/avatar-02.jpg"
                alt="User Image"
                class="call-avatar"
              />
              <h4>John Doe</h4>
              <span>Connecting...</span>
            </div>
            <div class="call-items">
              <a href="javascript:void(0);" class="btn call-item"
                ><i class="material-icons">mic</i></a
              >
              <a href="javascript:void(0);" class="btn call-item"
                ><i class="material-icons">videocam</i></a
              >
              <router-link to="chat" class="btn call-item call-end"
                ><i class="material-icons vcend">call_end</i></router-link
              >
              <a href="javascript:void(0);" class="btn call-item"
                ><i class="material-icons">person_add</i></a
              >
              <a href="javascript:void(0);" class="btn call-item"
                ><i class="material-icons">volume_up</i></a
              >
            </div>
          </div>
        </div>
      </div>
      <!-- Outgoing Call -->
      <chat-model />
    </div>
    <!-- /Page Wrapper -->
  </div>
</template>
