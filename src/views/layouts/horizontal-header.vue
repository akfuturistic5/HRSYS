<template>
  <nav class="greedys sidebar-horizantal">
    <ul class="list-inline-item list-unstyled links">
      <li class="menu-title">
        <span>Main</span>
      </li>
      <li class="submenu">
        <a href="javascript:;" @click="toggleVisibilityDashboard">
          <i class="la la-dashboard"></i> <span> Dashboard</span>
          <span class="menu-arrow"></span
        ></a>
        <ul :style="{ display: isVisibleDashboard ? 'block' : 'none' }">
          <li>
            <router-link to="/admin-dashboard">Admin Dashboard</router-link>
          </li>
          <li>
            <router-link to="/employee-dashboard">Employee Dashboard</router-link>
          </li>
        </ul>
      </li>
      <li class="submenu">
        <a href="javascript:;" @click="toggleVisibilityApps">
          <i class="la la-cube"></i> <span> Apps</span> <span class="menu-arrow"></span
        ></a>
        <ul :style="{ display: isVisibleApps ? 'block' : 'none' }">
          <li><router-link to="/chat">Chat</router-link></li>
          <li class="submenu">
            <a href="javascript:;" @click="toggleVisibilityCalls">
              <span> Calls</span> <span class="menu-arrow"></span
            ></a>
            <ul :style="{ display: isVisibleCalls ? 'block' : 'none' }">
              <li><router-link to="/voice-call">Voice Call</router-link></li>
              <li><router-link to="/video-call">Video Call</router-link></li>
              <li>
                <router-link to="/outgoing-call">Outgoing Call</router-link>
              </li>
              <li>
                <router-link to="/incoming-call">Incoming Call</router-link>
              </li>
            </ul>
          </li>
          <li><router-link to="/events">Calendar</router-link></li>
          <li><router-link to="/contacts">Contacts</router-link></li>
          <li><router-link to="/inbox">Email</router-link></li>
          <li><router-link to="/file-manager">File Manager</router-link></li>
        </ul>
      </li>
      <li class="menu-title">
        <span>Employees</span>
      </li>
      <li class="submenu">
        <a href="javascript:;" class="noti-dot" @click="toggleVisibilityEmployees">
          <i class="la la-user"></i> <span> Employees</span>
          <span class="menu-arrow"></span
        ></a>
        <ul :style="{ display: isVisibleEmployees ? 'block' : 'none' }">
          <li><router-link to="/employees">All Employees</router-link></li>
          <li><router-link to="/holidays">Holidays</router-link></li>
          <li>
            <router-link to="/leaves"
              >Leaves (Admin)
              <span class="badge rounded-pill bg-primary float-end">1</span></router-link
            >
          </li>
          <li>
            <router-link to="/leaves-employee">Leaves (Employee)</router-link>
          </li>
          <li><router-link to="/leave-settings">Leave Settings</router-link></li>
          <li><router-link to="/attendance">Attendance (Admin)</router-link></li>
          <li>
            <router-link to="/attendance-employee">Attendance (Employee)</router-link>
          </li>
          <li><router-link to="/departments">Departments</router-link></li>
          <li><router-link to="/designations">Designations</router-link></li>
          <li><router-link to="/timesheet">Timesheet</router-link></li>
          <li>
            <router-link to="/shift-scheduling">Shift & Schedule</router-link>
          </li>
          <li><router-link to="/overtime">Overtime</router-link></li>
        </ul>
      </li>
      <li>
        <router-link to="/clients"
          ><i class="la la-users"></i> <span>Clients</span></router-link
        >
      </li>
      <li class="submenu">
        <a href="javascript:;" @click="toggleVisibilityProjects">
          <i class="la la-rocket"></i> <span> Projects</span>
          <span class="menu-arrow"></span
        ></a>
        <ul :style="{ display: isVisibleProjects ? 'block' : 'none' }">
          <li><router-link to="/projects">Projects</router-link></li>
          <li><router-link to="/tasks">Tasks</router-link></li>
          <li><router-link to="/task-board">Task Board</router-link></li>
        </ul>
      </li>
      <li>
        <router-link to="/leads"
          ><i class="la la-user-secret"></i> <span>Leads</span></router-link
        >
      </li>
      <li>
        <router-link to="/tickets"
          ><i class="la la-ticket"></i> <span>Tickets</span></router-link
        >
      </li>
      <li class="menu-title">
        <span>HR</span>
      </li>
      <li class="submenu">
        <a href="javascript:;" @click="toggleVisibilitySales">
          <i class="la la-files-o"></i> <span> Sales </span>
          <span class="menu-arrow"></span
        ></a>
        <ul :style="{ display: isVisibleSales ? 'block' : 'none' }">
          <li><router-link to="/estimates">Estimates</router-link></li>
          <li><router-link to="/invoices">Invoices</router-link></li>
          <li><router-link to="/payments">Payments</router-link></li>
          <li><router-link to="/expenses">Expenses</router-link></li>
          <li><router-link to="/provident-fund">Provident Fund</router-link></li>
          <li><router-link to="/taxes">Taxes</router-link></li>
        </ul>
      </li>
      <li class="submenu">
        <a href="javascript:;" @click="toggleVisibilityAccounting">
          <i class="la la-files-o"></i> <span> Accounting </span>
          <span class="menu-arrow"></span
        ></a>
        <ul :style="{ display: isVisibleAccounting ? 'block' : 'none' }">
          <li><router-link to="/categories">Categories</router-link></li>
          <li><router-link to="/budgets">Budgets</router-link></li>
          <li>
            <router-link to="/budget-expenses">Budget Expenses</router-link>
          </li>
          <li>
            <router-link to="/budget-revenues">Budget Revenues</router-link>
          </li>
        </ul>
      </li>
    </ul>
    <button class="viewmoremenu" id="viewMoreButton">More Menu</button>
    <ul class="hidden-links hidden" id="hiddenMenu">
      <li class="submenu">
        <a href="javascript:;" @click="toggleVisibilityPayroll">
          <i class="la la-money"></i> <span> Payroll </span>
          <span class="menu-arrow"></span
        ></a>
        <ul :style="{ display: isVisiblePayroll ? 'block' : 'none' }">
          <li><router-link to="/salary"> Employee Salary </router-link></li>
          <li><router-link to="/salary-view"> Payslip </router-link></li>
          <li><router-link to="/payroll-items"> Payroll Items </router-link></li>
        </ul>
      </li>
      <li>
        <router-link to="/policies"
          ><i class="la la-file-pdf-o"></i> <span>Policies</span></router-link
        >
      </li>
      <li class="submenu">
        <a href="javascript:;" @click="toggleVisibilityReports">
          <i class="la la-pie-chart"></i> <span> Reports </span>
          <span class="menu-arrow"></span
        ></a>
        <ul :style="{ display: isVisibleReports ? 'block' : 'none' }">
          <li>
            <router-link to="/expense-reports"> Expense Report </router-link>
          </li>
          <li>
            <router-link to="/invoice-reports"> Invoice Report </router-link>
          </li>
          <li>
            <router-link to="/payments-reports"> Payments Report </router-link>
          </li>
          <li>
            <router-link to="/project-reports"> Project Report </router-link>
          </li>
          <li><router-link to="/task-reports"> Task Report </router-link></li>
          <li><router-link to="/user-reports"> User Report </router-link></li>
          <li>
            <router-link to="/employee-reports"> Employee Report </router-link>
          </li>
          <li>
            <router-link to="/payslip-reports"> Payslip Report </router-link>
          </li>
          <li>
            <router-link to="/attendance-reports"> Attendance Report </router-link>
          </li>
          <li><router-link to="/leave-reports"> Leave Report </router-link></li>
          <li><router-link to="/daily-reports"> Daily Report </router-link></li>
        </ul>
      </li>
      <li class="menu-title">
        <span>Performance</span>
      </li>
      <li class="submenu">
        <a href="javascript:;" @click="toggleVisibilityPerformance">
          <i class="la la-graduation-cap"></i> <span> Performance </span>
          <span class="menu-arrow"></span
        ></a>
        <ul :style="{ display: isVisiblePerformance ? 'block' : 'none' }">
          <li>
            <router-link to="/performance-indicator"> Performance Indicator </router-link>
          </li>
          <li>
            <router-link to="/performance"> Performance Review </router-link>
          </li>
          <li>
            <router-link to="/performance-appraisal"> Performance Appraisal </router-link>
          </li>
        </ul>
      </li>
      <li class="submenu">
        <a href="javascript:;" @click="toggleVisibilityGoals">
          <i class="la la-crosshairs"></i> <span> Goals </span>
          <span class="menu-arrow"></span
        ></a>
        <ul :style="{ display: isVisibleGoals ? 'block' : 'none' }">
          <li><router-link to="/goal-tracking"> Goal List </router-link></li>
          <li><router-link to="/goal-type"> Goal Type </router-link></li>
        </ul>
      </li>
      <li class="submenu">
        <a href="javascript:;" @click="toggleVisibilityTraining">
          <i class="la la-edit"></i> <span> Training </span>
          <span class="menu-arrow"></span
        ></a>
        <ul :style="{ display: isVisibleTraining ? 'block' : 'none' }">
          <li><router-link to="/training"> Training List </router-link></li>
          <li><router-link to="/trainers"> Trainers</router-link></li>
          <li><router-link to="/training-type"> Training Type </router-link></li>
        </ul>
      </li>
      <li>
        <router-link to="/promotion"
          ><i class="la la-bullhorn"></i> <span>Promotion</span></router-link
        >
      </li>
      <li>
        <router-link to="/resignation"
          ><i class="la la-external-link-square"></i>
          <span>Resignation</span></router-link
        >
      </li>
      <li>
        <router-link to="/termination"
          ><i class="la la-times-circle"></i> <span>Termination</span></router-link
        >
      </li>
      <li class="menu-title">
        <span>Administration</span>
      </li>
      <li>
        <router-link to="/assets"
          ><i class="la la-object-ungroup"></i> <span>Assets</span></router-link
        >
      </li>
      <li class="submenu">
        <a href="javascript:;" @click="toggleVisibilityJobs">
          <i class="la la-briefcase"></i> <span> Jobs </span>
          <span class="menu-arrow"></span
        ></a>
        <ul :style="{ display: isVisibleJobs ? 'block' : 'none' }">
          <li><router-link to="/user-dashboard"> User Dasboard </router-link></li>
          <li><router-link to="/jobs-dashboard"> Jobs Dasboard </router-link></li>
          <li><router-link to="/jobs"> Manage Jobs </router-link></li>
          <li>
            <router-link to="/manage-resumes"> Manage Resumes </router-link>
          </li>
          <li>
            <router-link to="/shortlist-candidates"> Shortlist Candidates </router-link>
          </li>
          <li>
            <router-link to="/interview-questions"> Interview Questions </router-link>
          </li>
          <li>
            <router-link to="/offer-approvals"> Offer Approvals </router-link>
          </li>
          <li>
            <router-link to="/experiance-level"> Experience Level </router-link>
          </li>
          <li><router-link to="/candidates"> Candidates List </router-link></li>
          <li>
            <router-link to="/schedule-timing"> Schedule timing </router-link>
          </li>
          <li>
            <router-link to="/apptitude-result"> Aptitude Results </router-link>
          </li>
        </ul>
      </li>
      <li>
        <router-link to="/knowledgebase"
          ><i class="la la-question"></i> <span>Knowledgebase</span></router-link
        >
      </li>
      <li>
        <router-link to="/activities"
          ><i class="la la-bell"></i> <span>Activities</span></router-link
        >
      </li>
      <li>
        <router-link to="/users"
          ><i class="la la-user-plus"></i> <span>Users</span></router-link
        >
      </li>
      <li>
        <router-link to="/settings"
          ><i class="la la-cog"></i> <span>Settings</span></router-link
        >
      </li>
      <li class="menu-title">
        <span>Pages</span>
      </li>
      <li class="submenu">
        <a href="javascript:;" @click="toggleVisibilityProfile">
          <i class="la la-user"></i> <span> Profile </span>
          <span class="menu-arrow"></span
        ></a>
        <ul :style="{ display: isVisibleProfile ? 'block' : 'none' }">
          <li><router-link to="/profile"> Employee Profile </router-link></li>
          <li>
            <router-link to="/client-profile"> Client Profile </router-link>
          </li>
        </ul>
      </li>
      <li class="submenu">
        <a href="javascript:;" @click="toggleVisibilityAuthentication">
          <i class="la la-key"></i> <span> Authentication </span>
          <span class="menu-arrow"></span
        ></a>
        <ul :style="{ display: isVisibleAuthentication ? 'block' : 'none' }">
          <li><router-link to="/"> Login </router-link></li>
          <li><router-link to="/register"> Register </router-link></li>
          <li>
            <router-link to="/forgot-password"> Forgot Password </router-link>
          </li>
          <li><router-link to="/otp"> OTP </router-link></li>
          <li><router-link to="/lock-screen"> Lock Screen </router-link></li>
        </ul>
      </li>
      <li class="submenu">
        <a href="javascript:;" @click="toggleVisibilityError">
          <i class="la la-exclamation-triangle"></i> <span> Error Pages </span>
          <span class="menu-arrow"></span
        ></a>
        <ul :style="{ display: isVisibleError ? 'block' : 'none' }">
          <li><router-link to="/error-404">404 Error </router-link></li>
          <li><router-link to="/error-500">500 Error </router-link></li>
        </ul>
      </li>
      <li class="submenu">
        <a href="javascript:;" @click="toggleVisibilitySubscriptions">
          <i class="la la-hand-o-up"></i> <span> Subscriptions </span>
          <span class="menu-arrow"></span
        ></a>
        <ul :style="{ display: isVisibleSubscriptions ? 'block' : 'none' }">
          <li>
            <router-link to="/subscriptions"> Subscriptions (Admin) </router-link>
          </li>
          <li>
            <router-link to="/subscriptions-company">
              Subscriptions (Company)
            </router-link>
          </li>
          <li>
            <router-link to="/subscribed-companies"> Subscribed Companies</router-link>
          </li>
        </ul>
      </li>
      <li class="submenu">
        <a href="javascript:;" @click="toggleVisibilityPages">
          <i class="la la-columns"></i> <span> Pages </span>
          <span class="menu-arrow"></span
        ></a>
        <ul :style="{ display: isVisiblePages ? 'block' : 'none' }">
          <li><router-link to="/search"> Search </router-link></li>
          <li><router-link to="/faq"> FAQ </router-link></li>
          <li><router-link to="/terms"> Terms </router-link></li>
          <li>
            <router-link to="/privacy-policy"> Privacy Policy </router-link>
          </li>
          <li><router-link to="/blank-page"> Blank Page </router-link></li>
        </ul>
      </li>
      <li class="menu-title">
        <span>UI Interface</span>
      </li>
      <li class="submenu">
        <a href="javascript:void(0);" @click="toggleVisibilityUI"
          ><i class="feather feather-pocket"></i> <span>Base UI </span>
          <span class="menu-arrow"></span
        ></a>
        <ul :style="{ display: isVisibleUI ? 'block' : 'none' }">
          <li><router-link to="alerts">Alerts</router-link></li>
          <li><router-link to="accordions">Accordions</router-link></li>
          <li><router-link to="avatar">Avatar</router-link></li>
          <li><router-link to="badges">Badges</router-link></li>
          <li><router-link to="buttons">Buttons</router-link></li>
          <li><router-link to="buttongroup">Button Group</router-link></li>
          <li><router-link to="breadcrumbs">Breadcrumb</router-link></li>
          <li><router-link to="cards">Cards</router-link></li>
          <li><router-link to="carousel">Carousel</router-link></li>
          <li><router-link to="dropdowns">Dropdowns</router-link></li>
          <li><router-link to="grid">Grid</router-link></li>
          <li><router-link to="images">Images</router-link></li>
          <li><router-link to="lightbox">Lightbox</router-link></li>
          <li><router-link to="media">Media</router-link></li>
          <li><router-link to="modal">Modals</router-link></li>
          <li><router-link to="offcanvas">Offcanvas</router-link></li>
          <li><router-link to="pagination">Pagination</router-link></li>
          <li><router-link to="popover">Popover</router-link></li>
          <li><router-link to="progress">Progress Bars</router-link></li>
          <li><router-link to="placeholders">Placeholders</router-link></li>
          <li><router-link to="rangeslider">Range Slider</router-link></li>
          <li><router-link to="spinners">Spinner</router-link></li>
          <li><router-link to="sweetalerts">Sweet Alerts</router-link></li>
          <li><router-link to="tab">Tabs</router-link></li>
          <li><router-link to="tooltip">Tooltip</router-link></li>
          <li><router-link to="typography">Typography</router-link></li>
          <li><router-link to="video">Video</router-link></li>
        </ul>
      </li>
      <li class="submenu">
        <a href="javascript:void(0);" @click="toggleVisibilityElements"
          ><i class="feather feather-box"></i> <span>Elements </span>
          <span class="menu-arrow"></span
        ></a>
        <ul :style="{ display: isVisibleElements ? 'block' : 'none' }">
          <li><router-link to="ribbon">Ribbon</router-link></li>
          <li><router-link to="clipboard">Clipboard</router-link></li>
          <li><router-link to="drag-drop">Drag & Drop</router-link></li>
          <li><router-link to="text-editor">Text Editor</router-link></li>
          <li><router-link to="counter">Counter</router-link></li>
          <li><router-link to="scrollbar">Scrollbar</router-link></li>
          <li><router-link to="notification">Notification</router-link></li>
          <li><router-link to="stickynote">Sticky Note</router-link></li>
          <li><router-link to="timeline">Timeline</router-link></li>
          <li><router-link to="horizontal-timeline">Horizontal Timeline</router-link></li>
          <li><router-link to="form-wizard">Form Wizard</router-link></li>
        </ul>
      </li>
      <li class="submenu">
        <a href="javascript:void(0);" @click="toggleVisibilityCharts"
          ><i class="feather feather-bar-chart"></i> <span> Charts </span>
          <span class="menu-arrow"></span
        ></a>
        <ul :style="{ display: isVisibleCharts ? 'block' : 'none' }">
          <li><router-link to="chart-apex">Apex Charts</router-link></li>
          <li><router-link to="chart-js">Chart Js</router-link></li>
          <li><router-link to="chart-morris">Morris Charts</router-link></li>
          <li><router-link to="chart-flot">Flot Charts</router-link></li>
          <li><router-link to="chart-c3">C3 Charts</router-link></li>
        </ul>
      </li>
      <li class="submenu">
        <a href="javascript:void(0);" @click="toggleVisibilityIcons"
          ><i class="feather feather-award"></i> <span> Icons </span>
          <span class="menu-arrow"></span
        ></a>
        <ul :style="{ display: isVisibleIcons ? 'block' : 'none' }">
          <li><router-link to="icon-fontawesome">Fontawesome Icons</router-link></li>
          <li><router-link to="icon-feather">feather Icons</router-link></li>
          <li><router-link to="icon-ionic">Ionic Icons</router-link></li>
          <li><router-link to="icon-material">Material Icons</router-link></li>
          <li><router-link to="icon-pe7">Pe7 Icons</router-link></li>
          <li><router-link to="icon-simpleline">Simpleline Icons</router-link></li>
          <li><router-link to="icon-themify">Themify Icons</router-link></li>
          <li><router-link to="icon-weather">Weather Icons</router-link></li>
          <li><router-link to="icon-typicon">Typicon Icons</router-link></li>
          <li><router-link to="icon-flag">Flag Icons</router-link></li>
        </ul>
      </li>
      <li class="submenu">
        <a href="javascript:void(0);" @click="toggleVisibilityForms"
          ><i class="feather feather-sidebar"></i> <span> Forms </span>
          <span class="menu-arrow"></span
        ></a>
        <ul :style="{ display: isVisibleForms ? 'block' : 'none' }">
          <li><router-link to="form-basic-inputs">Basic Inputs </router-link></li>
          <li><router-link to="form-input-groups">Input Groups </router-link></li>
          <li><router-link to="form-horizontal">Horizontal Form </router-link></li>
          <li><router-link to="form-vertical"> Vertical Form </router-link></li>
          <li><router-link to="form-mask">Form Mask </router-link></li>
          <li><router-link to="form-validation">Form Validation </router-link></li>
          <li><router-link to="form-select2">Form Select2 </router-link></li>
          <li><router-link to="form-fileupload">File Upload </router-link></li>
        </ul>
      </li>
      <li class="submenu">
        <a href="javascript:void(0);" @click="toggleVisibilityTables"
          ><i class="feather feather-layout"></i> <span> Tables </span>
          <span class="menu-arrow"></span
        ></a>
        <ul :style="{ display: isVisibleTables ? 'block' : 'none' }">
          <li><router-link to="tables-basic">Basic Tables </router-link></li>
          <li><router-link to="data-tables">Data Table </router-link></li>
        </ul>
      </li>
      <li class="menu-title">
        <span>Extras</span>
      </li>
      <li>
        <a href="javascript:;"
          ><i class="la la-file-text"></i> <span>Documentation</span></a
        >
      </li>
      <li>
        <a href="javascript:void(0);"
          ><i class="la la-info"></i> <span>Change Log</span>
          <span class="badge badge-primary ms-auto">v3.4</span></a
        >
      </li>
      <li class="submenu">
        <a href="javascript:void(0);"
          ><i class="la la-share-alt"></i> <span>Multi Level</span>
          <span class="menu-arrow"></span
        ></a>
        <ul>
          <li class="submenu">
            <a href="javascript:void(0);">
              <span>Level 1</span> <span class="menu-arrow"></span
            ></a>
            <ul>
              <li>
                <a href="javascript:void(0);"><span>Level 2</span></a>
              </li>
              <li class="submenu">
                <a href="javascript:void(0);">
                  <span> Level 2</span> <span class="menu-arrow"></span
                ></a>
                <ul>
                  <li><a href="javascript:void(0);">Level 3</a></li>
                  <li><a href="javascript:void(0);">Level 3</a></li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0);"> <span>Level 2</span></a>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:void(0);"> <span>Level 1</span></a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isVisibleDashboard: false,
      isVisibleApps: false,
      isVisibleCalls: false,
      isVisibleEmployees: false,
      isVisibleProjects: false,
      isVisibleSales: false,
      isVisibleAccounting: false,
      isVisiblePayroll: false,
      isVisibleReports: false,
      isVisiblePerformance: false,
      isVisibleGoals: false,
      isVisibleTraining: false,
      isVisibleJobs: false,
      isVisibleProfile: false,
      isVisibleAuthentication: false,
      isVisibleError: false,
      isVisibleSubscriptions: false,
      isVisiblePages: false,
      isVisibleUI: false,
      isVisibleElements: false,
      isVisibleCharts: false,
      isVisibleIcons: false,
      isVisibleForms: false,
      isVisibleTables: false,
    };
  },
  mounted() {
    document.addEventListener("DOMContentLoaded", function () {
      const viewMoreButton = document.getElementById("viewMoreButton");
      const hiddenMenu = document.getElementById("hiddenMenu");
      const pageId = document.body.id; // Get the current page's ID

      viewMoreButton.addEventListener("click", function () {
        hiddenMenu.classList.toggle("hidden");
      });

      // Hide the menu by default on pages other than the one specified
      if (pageId !== "currentPageId") {
        hiddenMenu.classList.add("hidden");
      }
    });
  },
  methods: {
    toggleVisibilityDashboard() {
      this.isVisibleDashboard = !this.isVisibleDashboard;
    },
    toggleVisibilityApps() {
      this.isVisibleApps = !this.isVisibleApps;
    },
    toggleVisibilityCalls() {
      this.isVisibleCalls = !this.isVisibleCalls;
    },
    toggleVisibilityEmployees() {
      this.isVisibleEmployees = !this.isVisibleEmployees;
    },
    toggleVisibilityProjects() {
      this.isVisibleProjects = !this.isVisibleProjects;
    },
    toggleVisibilitySales() {
      this.isVisibleSales = !this.isVisibleSales;
    },
    toggleVisibilityAccounting() {
      this.isVisibleAccounting = !this.isVisibleAccounting;
    },
    toggleVisibilityPayroll() {
      this.isVisiblePayroll = !this.isVisiblePayroll;
    },
    toggleVisibilityReports() {
      this.isVisibleReports = !this.isVisibleReports;
    },
    toggleVisibilityPerformance() {
      this.isVisiblePerformance = !this.isVisiblePerformance;
    },
    toggleVisibilityGoals() {
      this.isVisibleGoals = !this.isVisibleGoals;
    },
    toggleVisibilityTraining() {
      this.isVisibleTraining = !this.isVisibleTraining;
    },
    toggleVisibilityJobs() {
      this.isVisibleJobs = !this.isVisibleJobs;
    },
    toggleVisibilityProfile() {
      this.isVisibleProfile = !this.isVisibleProfile;
    },
    toggleVisibilityAuthentication() {
      this.isVisibleAuthentication = !this.isVisibleAuthentication;
    },
    toggleVisibilityError() {
      this.isVisibleError = !this.isVisibleError;
    },
    toggleVisibilitySubscriptions() {
      this.isVisibleSubscriptions = !this.isVisibleSubscriptions;
    },
    toggleVisibilityPages() {
      this.isVisiblePages = !this.isVisiblePages;
    },
    toggleVisibilityUI() {
      this.isVisibleUI = !this.isVisibleUI;
    },
    toggleVisibilityElements() {
      this.isVisibleElements = !this.isVisibleElements;
    },
    toggleVisibilityCharts() {
      this.isVisibleCharts = !this.isVisibleCharts;
    },
    toggleVisibilityIcons() {
      this.isVisibleIcons = !this.isVisibleIcons;
    },
    toggleVisibilityForms() {
      this.isVisibleForms = !this.isVisibleForms;
    },
    toggleVisibilityTables() {
      this.isVisibleTables = !this.isVisibleTables;
    },
  },
};
</script>
