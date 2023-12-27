<template>
  <!-- Sidebar -->
  <div class="sidebar" id="sidebar">
    <div class="sidebar-inner slimscroll">
      <div id="sidebar-menu" class="sidebar-menu">
        <ul>
          <li>
            <router-link to="admin-dashboard"
              ><i class="la la-home"></i> <span>Back to Home</span></router-link
            >
          </li>
          <li class="menu-title">
            Projects
            <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#create_project"
              ><i class="fa-solid fa-plus"></i
            ></a>
          </li>
          <li>
            <router-link to="tasks">Project Management</router-link>
          </li>
          <li class="active">
            <router-link to="tasks">Hospital Administration</router-link>
          </li>
          <li>
            <router-link to="tasks">Video Calling App</router-link>
          </li>
          <li>
            <router-link to="tasks">Office Management</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- /Sidebar -->
</template>
