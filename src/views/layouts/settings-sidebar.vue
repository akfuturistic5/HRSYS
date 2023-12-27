<template>
  <div class="sidebar" id="sidebar">
    <div class="sidebar-inner slimscroll">
      <perfect-scrollbar
        class="scroll-area"
        :settings="settings"
        @ps-scroll-y="scrollHanle"
      >
        <div id="sidebar-menu" class="sidebar-menu">
          <nav class="greedy">
            <ul class="list-inline-item list-unstyled links">
              <li>
                <router-link to="admin-dashboard"
                  ><i class="la la-home"></i> <span>Back to Home</span></router-link
                >
              </li>
              <li class="menu-title">Settings</li>
              <li :class="currentPath == 'settings' ? 'active' : 'notactive'">
                <router-link to="settings"
                  ><i class="la la-building"></i>
                  <span>Company Settings</span></router-link
                >
              </li>
              <li :class="currentPath == 'localization' ? 'active' : 'notactive'">
                <router-link to="localization"
                  ><i class="la la-clock-o"></i> <span>Localization</span></router-link
                >
              </li>
              <li :class="currentPath == 'theme-settings' ? 'active' : 'notactive'">
                <router-link to="theme-settings"
                  ><i class="la la-photo"></i> <span>Theme Settings</span></router-link
                >
              </li>
              <li :class="currentPath == 'roles-permissions' ? 'active' : 'notactive'">
                <router-link to="roles-permissions"
                  ><i class="la la-key"></i> <span>Roles & Permissions</span></router-link
                >
              </li>
              <li :class="currentPath == 'email-settings' ? 'active' : 'notactive'">
                <router-link to="email-settings"
                  ><i class="la la-at"></i> <span>Email Settings</span></router-link
                >
              </li>
              <li :class="currentPath == 'performance-setting' ? 'active' : 'notactive'">
                <router-link to="performance-setting"
                  ><i class="la la-chart-bar"></i>
                  <span>Performance Settings</span></router-link
                >
              </li>
              <li :class="currentPath == 'approval-setting' ? 'active' : 'notactive'">
                <router-link to="approval-setting"
                  ><i class="la la-thumbs-up"></i>
                  <span>Approval Settings</span></router-link
                >
              </li>
              <li :class="currentPath == 'invoice-settings' ? 'active' : 'notactive'">
                <router-link to="invoice-settings"
                  ><i class="la la-pencil-square"></i>
                  <span>Invoice Settings</span></router-link
                >
              </li>
              <li :class="currentPath == 'salary-settings' ? 'active' : 'notactive'">
                <router-link to="salary-settings"
                  ><i class="la la-money"></i> <span>Salary Settings</span></router-link
                >
              </li>
              <li
                :class="currentPath == 'notifications-settings' ? 'active' : 'notactive'"
              >
                <router-link to="notifications-settings"
                  ><i class="la la-globe"></i> <span>Notifications</span></router-link
                >
              </li>
              <li>
                <router-link to="change-password"
                  ><i class="la la-lock"></i> <span>Change Password</span></router-link
                >
              </li>
              <li :class="currentPath == 'leave-type' ? 'active' : 'notactive'">
                <router-link to="leave-type"
                  ><i class="la la-cogs"></i> <span>Leave Type</span></router-link
                >
              </li>
              <li :class="currentPath == 'toxbox-setting' ? 'active' : 'notactive'">
                <router-link to="toxbox-setting"
                  ><i class="la la-comment"></i> <span>ToxBox Settings</span></router-link
                >
              </li>
              <li :class="currentPath == 'cron-setting' ? 'active' : 'notactive'">
                <router-link to="cron-setting"
                  ><i class="la la-rocket"></i> <span>Cron Settings</span></router-link
                >
              </li>
            </ul>
          </nav>
        </div>
      </perfect-scrollbar>
    </div>
  </div>
</template>
<script>
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";
export default {
  components: {
    PerfectScrollbar,
  },
  data() {
    return {
      settings: {
        suppressScrollX: true,
      },
    };
  },
  methods: {
    scrollHanle(evt) {},
  },
  computed: {
    currentPath() {
      return this.$route.name;
    },
  },
};
</script>
