<template>
  <!-- Sidebar -->
  <div class="sidebar" id="sidebar">
    <div class="sidebar-inner slimscroll">
      <perfect-scrollbar
        class="scroll-area"
        :settings="settings"
        @ps-scroll-y="scrollHanle"
      >
        <div id="sidebar-menu" class="sidebar-menu">
          <horizontal-header></horizontal-header>
          <ul class="sidebar-vertical">
            <li class="menu-title">
              <span>Main</span>
            </li>
            <li class="submenu">
              <a
                href="#sidebarDashboard"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarDashboard"
                :class="{ active: DashboardMenu, subdrop: DashboardMenu }"
              >
                <i class="la la-dashboard"></i> <span> Dashboard</span>
                <span class="menu-arrow"></span
              ></a>
              <ul class="collapse" id="sidebarDashboard" :class="{ show: DashboardMenu }">
                <li>
                  <router-link
                    v-bind:class="{ active: currentPath == 'admin-dashboard' }"
                    to="/admin-dashboard"
                    >Admin Dashboard</router-link
                  >
                </li>
                <li>
                  <router-link
                    v-bind:class="{
                      active: currentPath == 'employee-dashboard',
                    }"
                    to="/employee-dashboard"
                    >Employee Dashboard</router-link
                  >
                </li>
              </ul>
            </li>
            <li class="submenu">
              <a
                href="#sidebarApps"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarApps"
                :class="{ active: AppsMenu, subdrop: AppsMenu }"
              >
                <i class="la la-cube"></i> <span> Apps</span>
                <span class="menu-arrow"></span
              ></a>
              <ul class="collapse" id="sidebarApps" :class="{ show: AppsMenu }">
                <li>
                  <router-link v-bind:class="{ active: currentPath == 'chat' }" to="/chat"
                    >Chat</router-link
                  >
                </li>
                <li class="submenu">
                  <a
                    href="#sidebarCall"
                    data-bs-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="sidebarCall"
                    :class="{ active: CallMenu, subdrop: CallMenu }"
                  >
                    <span> Calls</span> <span class="menu-arrow"></span>
                  </a>
                  <ul class="collapse" id="sidebarCall" :class="{ show: CallMenu }">
                    <li>
                      <router-link
                        v-bind:class="{ active: currentPath == 'voice-call' }"
                        to="/voice-call"
                        >Voice Call</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        v-bind:class="{ active: currentPath == 'video-call' }"
                        to="/video-call"
                        >Video Call</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        v-bind:class="{
                          active: currentPath == 'outgoing-call',
                        }"
                        to="/outgoing-call"
                        >Outgoing Call</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        v-bind:class="{
                          active: currentPath == 'incoming-call',
                        }"
                        to="/incoming-call"
                        >Incoming Call</router-link
                      >
                    </li>
                  </ul>
                </li>
                <li>
                  <router-link
                    v-bind:class="{ active: currentPath == 'events' }"
                    to="/events"
                    >Calendar</router-link
                  >
                </li>
                <li>
                  <router-link
                    v-bind:class="{ active: currentPath == 'contacts' }"
                    to="/contacts"
                    >Contacts</router-link
                  >
                </li>
                <li>
                  <router-link
                    v-bind:class="{ active: currentPath == 'inbox' }"
                    to="/inbox"
                    >Email</router-link
                  >
                </li>
                <li>
                  <router-link
                    v-bind:class="{ active: currentPath == 'file-manager' }"
                    to="/file-manager"
                    >File Manager</router-link
                  >
                </li>
              </ul>
            </li>
            <li class="menu-title">
              <span>Employees</span>
            </li>
            <li class="submenu">
              <a
                class="noti-dot"
                href="#sidebarEmployees"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarEmployees"
                :class="{ active: EmployeesMenu, subdrop: EmployeesMenu }"
              >
                <i class="la la-user"></i> <span> Employees</span>
                <span class="menu-arrow"></span
              ></a>
              <ul class="collapse" id="sidebarEmployees" :class="{ show: EmployeesMenu }">
                <li>
                  <router-link
                    v-bind:class="{
                      active:
                        currentPath == 'employees' || currentPath == 'employees-list',
                    }"
                    to="/employees"
                    >All Employees</router-link
                  >
                </li>
                <li>
                  <router-link
                    v-bind:class="{ active: currentPath == 'holidays' }"
                    to="/holidays"
                    >Holidays</router-link
                  >
                </li>
                <li v-bind:class="{ active: currentPath == 'leaves' }">
                  <router-link to="/leaves"
                    >Leaves (Admin)
                    <span class="badge rounded-pill bg-primary float-end"
                      >1</span
                    ></router-link
                  >
                </li>
                <li>
                  <router-link
                    v-bind:class="{ active: currentPath == 'leaves-employee' }"
                    to="/leaves-employee"
                    >Leaves (Employee)</router-link
                  >
                </li>
                <li>
                  <router-link
                    v-bind:class="{ active: currentPath == 'leave-settings' }"
                    to="/leave-settings"
                    >Leave Settings</router-link
                  >
                </li>
                <li>
                  <router-link
                    v-bind:class="{ active: currentPath == 'attendance' }"
                    to="/attendance"
                    >Attendance (Admin)</router-link
                  >
                </li>
                <li>
                  <router-link
                    v-bind:class="{
                      active: currentPath == 'attendance-employee',
                    }"
                    to="/attendance-employee"
                    >Attendance (Employee)</router-link
                  >
                </li>
                <li>
                  <router-link
                    v-bind:class="{ active: currentPath == 'departments' }"
                    to="/departments"
                    >Departments</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/designations"
                    v-bind:class="{ active: currentPath == 'designations' }"
                    >Designations</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/timesheet"
                    v-bind:class="{ active: currentPath == 'timesheet' }"
                    >Timesheet</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/shift-scheduling"
                    v-bind:class="{
                      active:
                        currentPath == 'shift-scheduling' || currentPath == 'shift-list',
                    }"
                    >Shift & Schedule</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/overtime"
                    v-bind:class="{ active: currentPath == 'overtime' }"
                    >Overtime</router-link
                  >
                </li>
              </ul>
            </li>
            <li
              v-bind:class="{
                active: currentPath == 'clients' || currentPath == 'clients-list',
              }"
            >
              <router-link to="/clients"
                ><i class="la la-users"></i> <span>Clients</span></router-link
              >
            </li>
            <li class="submenu">
              <a
                href="#sidebarProjects"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarProjects"
                :class="{ active: ProjectsMenu, subdrop: ProjectsMenu }"
              >
                <i class="la la-rocket"></i> <span> Projects</span>
                <span class="menu-arrow"></span
              ></a>
              <ul class="collapse" id="sidebarProjects" :class="{ show: ProjectsMenu }">
                <li>
                  <router-link
                    to="/projects"
                    v-bind:class="{
                      active:
                        currentPath == 'projects' ||
                        currentPath == 'project-list' ||
                        currentPath == 'project-view',
                    }"
                    >Projects</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/tasks"
                    v-bind:class="{ active: currentPath == 'tasks' }"
                    >Tasks</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/task-board"
                    v-bind:class="{ active: currentPath == 'task-board' }"
                    >Task Board</router-link
                  >
                </li>
              </ul>
            </li>
            <li v-bind:class="{ active: currentPath == 'leads' }">
              <router-link to="/leads"
                ><i class="la la-user-secret"></i> <span>Leads</span></router-link
              >
            </li>
            <li v-bind:class="{ active: currentPath == 'tickets' }">
              <router-link to="/tickets"
                ><i class="la la-ticket"></i> <span>Tickets</span></router-link
              >
            </li>
            <li class="menu-title">
              <span>HR</span>
            </li>
            <li class="submenu">
              <a
                href="#sidebarSales"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarSales"
                :class="{ active: SalesMenu, subdrop: SalesMenu }"
              >
                <i class="la la-files-o"></i> <span> Sales </span>
                <span class="menu-arrow"></span>
              </a>
              <ul class="collapse" id="sidebarSales" :class="{ show: SalesMenu }">
                <li>
                  <router-link
                    to="/estimates"
                    v-bind:class="{
                      active:
                        currentPath == 'estimates' ||
                        currentPath == 'create-estimate' ||
                        currentPath == 'edit-estimate' ||
                        currentPath == 'estimate-view',
                    }"
                    >Estimates</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/invoices"
                    v-bind:class="{
                      active:
                        currentPath == 'invoices' ||
                        currentPath == 'create-invoice' ||
                        currentPath == 'edit-invoice' ||
                        currentPath == 'invoice-view',
                    }"
                    >Invoices</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/payments"
                    v-bind:class="{ active: currentPath == 'payments' }"
                    >Payments</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/expenses"
                    v-bind:class="{ active: currentPath == 'expenses' }"
                    >Expenses</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/provident-fund"
                    v-bind:class="{ active: currentPath == 'provident-fund' }"
                    >Provident Fund</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/taxes"
                    v-bind:class="{ active: currentPath == 'taxes' }"
                    >Taxes</router-link
                  >
                </li>
              </ul>
            </li>
            <li class="submenu">
              <a
                href="#sidebarAccounting"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarAccounting"
                :class="{ active: AccountingMenu, subdrop: AccountingMenu }"
              >
                <i class="la la-files-o"></i> <span> Accounting </span>
                <span class="menu-arrow"></span>
              </a>
              <ul
                class="collapse"
                id="sidebarAccounting"
                :class="{ show: AccountingMenu }"
              >
                <li>
                  <router-link
                    to="/categories"
                    v-bind:class="{
                      active:
                        currentPath == 'categories' || currentPath == 'sub-category',
                    }"
                    >Categories</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/budgets"
                    v-bind:class="{ active: currentPath == 'budgets' }"
                    >Budgets</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/budget-expenses"
                    v-bind:class="{ active: currentPath == 'budget-expenses' }"
                    >Budget Expenses</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/budget-revenues"
                    v-bind:class="{ active: currentPath == 'budget-revenues' }"
                    >Budget Revenues</router-link
                  >
                </li>
              </ul>
            </li>
            <li class="submenu">
              <a
                href="#sidebarPayroll"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarPayroll"
                :class="{ active: PayrollMenu, subdrop: PayrollMenu }"
              >
                <i class="la la-money"></i> <span> Payroll </span>
                <span class="menu-arrow"></span>
              </a>
              <ul class="collapse" id="sidebarPayroll" :class="{ show: PayrollMenu }">
                <li>
                  <router-link
                    to="/salary"
                    v-bind:class="{ active: currentPath == 'salary' }"
                  >
                    Employee Salary
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/salary-view"
                    v-bind:class="{ active: currentPath == 'salary-view' }"
                  >
                    Payslip
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/payroll-items"
                    v-bind:class="{ active: currentPath == 'payroll-items' }"
                  >
                    Payroll Items
                  </router-link>
                </li>
              </ul>
            </li>
            <li v-bind:class="{ active: currentPath == 'policies' }">
              <router-link to="/policies"
                ><i class="la la-file-pdf-o"></i> <span>Policies</span></router-link
              >
            </li>
            <li class="submenu">
              <a
                href="#sidebarReports"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarReports"
                :class="{ active: ReportsMenu, subdrop: ReportsMenu }"
              >
                <i class="la la-pie-chart"></i> <span> Reports </span>
                <span class="menu-arrow"></span>
              </a>
              <ul class="collapse" id="sidebarReports" :class="{ show: ReportsMenu }">
                <li>
                  <router-link
                    to="/expense-reports"
                    v-bind:class="{ active: currentPath == 'expense-reports' }"
                  >
                    Expense Report
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/invoice-reports"
                    v-bind:class="{ active: currentPath == 'invoice-reports' }"
                  >
                    Invoice Report
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/payments-reports"
                    v-bind:class="{ active: currentPath == 'payments-reports' }"
                  >
                    Payments Report
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/project-reports"
                    v-bind:class="{ active: currentPath == 'project-reports' }"
                  >
                    Project Report
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/task-reports"
                    v-bind:class="{ active: currentPath == 'task-reports' }"
                  >
                    Task Report
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/user-reports"
                    v-bind:class="{ active: currentPath == 'user-reports' }"
                  >
                    User Report
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/employee-reports"
                    v-bind:class="{ active: currentPath == 'employee-reports' }"
                  >
                    Employee Report
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/payslip-reports"
                    v-bind:class="{ active: currentPath == 'payslip-reports' }"
                  >
                    Payslip Report
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/attendance-reports"
                    v-bind:class="{
                      active: currentPath == 'attendance-reports',
                    }"
                  >
                    Attendance Report
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/leave-reports"
                    v-bind:class="{ active: currentPath == 'leave-reports' }"
                  >
                    Leave Report
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/daily-reports"
                    v-bind:class="{ active: currentPath == 'daily-reports' }"
                  >
                    Daily Report
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="menu-title">
              <span>Performance</span>
            </li>
            <li class="submenu">
              <a
                href="#sidebarPerformance"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarPerformance"
                :class="{ active: PerformanceMenu, subdrop: PerformanceMenu }"
              >
                <i class="la la-graduation-cap"></i> <span> Performance </span>
                <span class="menu-arrow"></span>
              </a>
              <ul
                class="collapse"
                id="sidebarPerformance"
                :class="{ show: PerformanceMenu }"
              >
                <li>
                  <router-link
                    to="/performance-indicator"
                    v-bind:class="{
                      active: currentPath == 'performance-indicator',
                    }"
                  >
                    Performance Indicator
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/performance"
                    v-bind:class="{ active: currentPath == 'performance' }"
                  >
                    Performance Review
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/performance-appraisal"
                    v-bind:class="{
                      active: currentPath == 'performance-appraisal',
                    }"
                  >
                    Performance Appraisal
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="submenu">
              <a
                href="#sidebarGoals"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarGoals"
                :class="{ active: GoalsMenu, subdrop: GoalsMenu }"
              >
                <i class="la la-crosshairs"></i> <span> Goals </span>
                <span class="menu-arrow"></span
              ></a>
              <ul class="collapse" id="sidebarGoals" :class="{ show: GoalsMenu }">
                <li>
                  <router-link
                    to="/goal-tracking"
                    v-bind:class="{ active: currentPath == 'goal-tracking' }"
                  >
                    Goal List
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/goal-type"
                    v-bind:class="{ active: currentPath == 'goal-type' }"
                  >
                    Goal Type
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="submenu">
              <a
                href="#sidebarTraining"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarTraining"
                :class="{ active: TrainingMenu, subdrop: TrainingMenu }"
              >
                <i class="la la-edit"></i> <span> Training </span>
                <span class="menu-arrow"></span>
              </a>
              <ul class="collapse" id="sidebarTraining" :class="{ show: TrainingMenu }">
                <li>
                  <router-link
                    to="/training"
                    v-bind:class="{ active: currentPath == 'training' }"
                  >
                    Training List
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/trainers"
                    v-bind:class="{ active: currentPath == 'trainers' }"
                  >
                    Trainers</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/training-type"
                    v-bind:class="{ active: currentPath == 'training-type' }"
                  >
                    Training Type
                  </router-link>
                </li>
              </ul>
            </li>
            <li v-bind:class="{ active: currentPath == 'promotion' }">
              <router-link to="/promotion"
                ><i class="la la-bullhorn"></i> <span>Promotion</span></router-link
              >
            </li>
            <li v-bind:class="{ active: currentPath == 'resignation' }">
              <router-link to="/resignation"
                ><i class="la la-external-link-square"></i>
                <span>Resignation</span></router-link
              >
            </li>
            <li v-bind:class="{ active: currentPath == 'termination' }">
              <router-link to="/termination"
                ><i class="la la-times-circle"></i> <span>Termination</span></router-link
              >
            </li>
            <li class="menu-title">
              <span>Administration</span>
            </li>
            <li
              v-bind:class="{
                active: currentPath == 'assets' || currentPath == 'assets-details',
              }"
            >
              <router-link to="/assets"
                ><i class="la la-object-ungroup"></i> <span>Assets</span></router-link
              >
            </li>
            <li class="submenu">
              <a
                href="#sidebarJobs"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarJobs"
                :class="{ active: JobsMenu, subdrop: JobsMenu }"
              >
                <i class="la la-briefcase"></i> <span> Jobs </span>
                <span class="menu-arrow"></span>
              </a>
              <ul class="collapse" id="sidebarJobs" :class="{ show: JobsMenu }">
                <li>
                  <router-link
                    to="/user-dashboard"
                    v-bind:class="{
                      active:
                        currentPath == 'user-dashboard' ||
                        currentPath == 'user-all-jobs' ||
                        currentPath == 'saved-jobs' ||
                        currentPath == 'applied-jobs' ||
                        currentPath == 'interviewing' ||
                        currentPath == 'job-aptitude' ||
                        currentPath == 'questions' ||
                        currentPath == 'offered-jobs' ||
                        currentPath == 'visited-jobs' ||
                        currentPath == 'archived-jobs',
                    }"
                  >
                    User Dasboard
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/jobs-dashboard"
                    v-bind:class="{ active: currentPath == 'jobs-dashboard' }"
                  >
                    Jobs Dasboard
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/jobs"
                    v-bind:class="{ active: currentPath == 'jobs' }"
                  >
                    Manage Jobs
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/manage-resumes"
                    v-bind:class="{ active: currentPath == 'manage-resumes' }"
                  >
                    Manage Resumes
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/shortlist-candidates"
                    v-bind:class="{
                      active: currentPath == 'shortlist-candidates',
                    }"
                  >
                    Shortlist Candidates
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/interview-questions"
                    v-bind:class="{
                      active: currentPath == 'interview-questions',
                    }"
                  >
                    Interview Questions
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/offer-approvals"
                    v-bind:class="{ active: currentPath == 'offer-approvals' }"
                  >
                    Offer Approvals
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/experiance-level"
                    v-bind:class="{ active: currentPath == 'experiance-level' }"
                  >
                    Experience Level
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/candidates"
                    v-bind:class="{ active: currentPath == 'candidates' }"
                  >
                    Candidates List
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/schedule-timing"
                    v-bind:class="{ active: currentPath == 'schedule-timing' }"
                  >
                    Schedule timing
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/apptitude-result"
                    v-bind:class="{ active: currentPath == 'apptitude-result' }"
                  >
                    Aptitude Results
                  </router-link>
                </li>
              </ul>
            </li>
            <li
              v-bind:class="{
                active:
                  currentPath == 'knowledgebase' || currentPath == 'knowledgebase-view',
              }"
            >
              <router-link to="/knowledgebase"
                ><i class="la la-question"></i> <span>Knowledgebase</span></router-link
              >
            </li>
            <li v-bind:class="{ active: currentPath == 'activities' }">
              <router-link to="/activities"
                ><i class="la la-bell"></i> <span>Activities</span></router-link
              >
            </li>
            <li v-bind:class="{ active: currentPath == 'users' }">
              <router-link to="/users"
                ><i class="la la-user-plus"></i> <span>Users</span></router-link
              >
            </li>
            <li v-bind:class="{ active: currentPath == 'settings' }">
              <router-link to="/settings"
                ><i class="la la-cog"></i> <span>Settings</span></router-link
              >
            </li>
            <li class="menu-title">
              <span>Pages</span>
            </li>
            <li class="submenu">
              <a
                href="#sidebarProfile"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarProfile"
                :class="{ active: ProfileMenu, subdrop: ProfileMenu }"
              >
                <i class="la la-user"></i> <span> Profile </span>
                <span class="menu-arrow"></span>
              </a>
              <ul class="collapse" id="sidebarProfile" :class="{ show: ProfileMenu }">
                <li>
                  <router-link
                    to="/profile"
                    v-bind:class="{
                      active:
                        currentPath == 'profile' || currentPath == 'user-asset-details',
                    }"
                  >
                    Employee Profile
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/client-profile"
                    v-bind:class="{ active: currentPath == 'client-profile' }"
                  >
                    Client Profile
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="submenu">
              <a
                href="#sidebarAuthentication"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarAuthentication"
                :class="{
                  active: AuthenticationMenu,
                  subdrop: AuthenticationMenu,
                }"
              >
                <i class="la la-key"></i> <span> Authentication </span>
                <span class="menu-arrow"></span>
              </a>
              <ul
                class="collapse"
                id="sidebarAuthentication"
                :class="{ show: AuthenticationMenu }"
              >
                <li>
                  <router-link to="/" v-bind:class="{ active: currentPath == '/' }">
                    Login
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/register"
                    v-bind:class="{ active: currentPath == 'register' }"
                  >
                    Register
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/forgot-password"
                    v-bind:class="{ active: currentPath == 'forgot-password' }"
                  >
                    Forgot Password
                  </router-link>
                </li>
                <li>
                  <router-link to="/otp" v-bind:class="{ active: currentPath == 'otp' }">
                    OTP
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/lock-screen"
                    v-bind:class="{ active: currentPath == 'lock-screen' }"
                  >
                    Lock Screen
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="submenu">
              <a
                href="#sidebarError"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarError"
                :class="{ active: ErrorMenu, subdrop: ErrorMenu }"
              >
                <i class="la la-exclamation-triangle"></i>
                <span> Error Pages </span> <span class="menu-arrow"></span
              ></a>
              <ul class="collapse" id="sidebarError" :class="{ show: ErrorMenu }">
                <li>
                  <router-link
                    to="error-404"
                    v-bind:class="{ active: currentPath == 'error-404' }"
                    >404 Error
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/error-500"
                    v-bind:class="{ active: currentPath == 'error-500' }"
                    >500 Error
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="submenu">
              <a
                href="#sidebarSubscriptions"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarSubscriptions"
                :class="{
                  active: SubscriptionsMenu,
                  subdrop: SubscriptionsMenu,
                }"
              >
                <i class="la la-hand-o-up"></i> <span> Subscriptions </span>
                <span class="menu-arrow"></span>
              </a>
              <ul
                class="collapse"
                id="sidebarSubscriptions"
                :class="{ show: SubscriptionsMenu }"
              >
                <li>
                  <router-link
                    to="/subscriptions"
                    v-bind:class="{ active: currentPath == 'subscriptions' }"
                  >
                    Subscriptions (Admin)
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/subscriptions-company"
                    v-bind:class="{
                      active: currentPath == 'subscriptions-company',
                    }"
                  >
                    Subscriptions (Company)
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/subscribed-companies"
                    v-bind:class="{
                      active: currentPath == 'subscribed-companies',
                    }"
                  >
                    Subscribed Companies</router-link
                  >
                </li>
              </ul>
            </li>
            <li class="submenu">
              <a
                href="#sidebarPages"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarPages"
                :class="{ active: PagesMenu, subdrop: PagesMenu }"
              >
                <i class="la la-columns"></i> <span> Pages </span>
                <span class="menu-arrow"></span>
              </a>
              <ul class="collapse" id="sidebarPages" :class="{ show: PagesMenu }">
                <li>
                  <router-link
                    to="/search"
                    v-bind:class="{ active: currentPath == 'search' }"
                  >
                    Search
                  </router-link>
                </li>
                <li>
                  <router-link to="/faq" v-bind:class="{ active: currentPath == 'faq' }">
                    FAQ
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/terms"
                    v-bind:class="{ active: currentPath == 'terms' }"
                  >
                    Terms
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/privacy-policy"
                    v-bind:class="{ active: currentPath == 'privacy-policy' }"
                  >
                    Privacy Policy
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/blank-page"
                    v-bind:class="{ active: currentPath == 'blank-page' }"
                  >
                    Blank Page
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="menu-title">
              <span>UI Interface</span>
            </li>
            <li class="submenu">
              <a
                href="#sidebarBaseUI"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarBaseUI"
                :class="{ active: BaseUIMenu, subdrop: BaseUIMenu }"
              >
                <i class="la la-get-pocket"></i> <span> Base UI </span>
                <span class="menu-arrow"></span>
              </a>
              <ul class="collapse" id="sidebarBaseUI" :class="{ show: BaseUIMenu }">
                <li>
                  <router-link
                    :class="currentPath == 'alerts' ? 'active' : 'notactive'"
                    to="alerts"
                    >Alerts</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'accordions' ? 'active' : 'notactive'"
                    to="accordions"
                    >Accordions</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'avatar' ? 'active' : 'notactive'"
                    to="avatar"
                    >Avatar</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'badges' ? 'active' : 'notactive'"
                    to="badges"
                    >Badges</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'buttons' ? 'active' : 'notactive'"
                    to="buttons"
                    >Buttons</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'buttongroup' ? 'active' : 'notactive'"
                    to="buttongroup"
                    >Button Group</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'breadcrumbs' ? 'active' : 'notactive'"
                    to="breadcrumbs"
                    >Breadcrumb</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'cards' ? 'active' : 'notactive'"
                    to="cards"
                    >Cards</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'carousel' ? 'active' : 'notactive'"
                    to="carousel"
                    >Carousel</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'dropdowns' ? 'active' : 'notactive'"
                    to="dropdowns"
                    >Dropdowns</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'grid' ? 'active' : 'notactive'"
                    to="grid"
                    >Grid</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'images' ? 'active' : 'notactive'"
                    to="images"
                    >Images</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'lightbox' ? 'active' : 'notactive'"
                    to="lightbox"
                    >Lightbox</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'media' ? 'active' : 'notactive'"
                    to="media"
                    >Media</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'modal' ? 'active' : 'notactive'"
                    to="modal"
                    >Modals</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'offcanvas' ? 'active' : 'notactive'"
                    to="offcanvas"
                    >Offcanvas</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'pagination' ? 'active' : 'notactive'"
                    to="pagination"
                    >Pagination</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'popover' ? 'active' : 'notactive'"
                    to="popover"
                    >Popover</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'progress' ? 'active' : 'notactive'"
                    to="progress"
                    >Progress Bars</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'placeholders' ? 'active' : 'notactive'"
                    to="placeholders"
                    >Placeholders</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'rangeslider' ? 'active' : 'notactive'"
                    to="rangeslider"
                    >Range Slider</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'spinners' ? 'active' : 'notactive'"
                    to="spinners"
                    >Spinner</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'sweetalerts' ? 'active' : 'notactive'"
                    to="sweetalerts"
                    >Sweet Alerts</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'tab' ? 'active' : 'notactive'"
                    to="tab"
                    >Tabs</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'tooltip' ? 'active' : 'notactive'"
                    to="tooltip"
                    >Tooltip</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'typography' ? 'active' : 'notactive'"
                    to="typography"
                    >Typography</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'video' ? 'active' : 'notactive'"
                    to="video"
                    >Video</router-link
                  >
                </li>
              </ul>
            </li>
            <li class="submenu">
              <a
                href="#sidebarElements"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarElements"
                :class="{ active: ElementsMenu, subdrop: ElementsMenu }"
              >
                <i class="la la-dropbox"></i> <span> Elements</span>
                <span class="menu-arrow"></span>
              </a>
              <ul class="collapse" id="sidebarElements" :class="{ show: ElementsMenu }">
                <li>
                  <router-link
                    :class="currentPath == 'ribbon' ? 'active' : 'notactive'"
                    to="ribbon"
                    >Ribbon</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'clipboard' ? 'active' : 'notactive'"
                    to="clipboard"
                    >Clipboard</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'drag-drop' ? 'active' : 'notactive'"
                    to="drag-drop"
                    >Drag & Drop</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'text-editor' ? 'active' : 'notactive'"
                    to="text-editor"
                    >Text Editor</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'counter' ? 'active' : 'notactive'"
                    to="counter"
                    >Counter</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'scrollbar' ? 'active' : 'notactive'"
                    to="scrollbar"
                    >Scrollbar</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'notification' ? 'active' : 'notactive'"
                    to="notification"
                    >Notification</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'stickynote' ? 'active' : 'notactive'"
                    to="stickynote"
                    >Sticky Note</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'timeline' ? 'active' : 'notactive'"
                    to="timeline"
                    >Timeline</router-link
                  >
                </li>
                <li>
                  <router-link
                    @click="redirectReload"
                    :class="currentPath == 'horizontal-timeline' ? 'active' : 'notactive'"
                    to="horizontal-timeline"
                    >Horizontal Timeline</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'form-wizard' ? 'active' : 'notactive'"
                    to="form-wizard"
                    >Form Wizard</router-link
                  >
                </li>
              </ul>
            </li>
            <li class="submenu">
              <a
                href="#sidebarCharts"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarCharts"
                :class="{ active: ChartsMenu, subdrop: ChartsMenu }"
              >
                <i class="la la-chart-bar"></i> <span> Charts </span>
                <span class="menu-arrow"></span>
              </a>
              <ul class="collapse" id="sidebarCharts" :class="{ show: ChartsMenu }">
                <li>
                  <router-link
                    :class="currentPath == 'chart-apex' ? 'active' : 'notactive'"
                    to="chart-apex"
                    >Apex Charts</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'chart-js' ? 'active' : 'notactive'"
                    to="chart-js"
                    >Chart Js</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'chart-morris' ? 'active' : 'notactive'"
                    to="chart-morris"
                    >Morris Charts</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'chart-flot' ? 'active' : 'notactive'"
                    to="chart-flot"
                    >Flot Charts</router-link
                  >
                </li>

                <li>
                  <router-link
                    :class="currentPath == 'chart-c3' ? 'active' : 'notactive'"
                    to="chart-c3"
                    >C3 Charts</router-link
                  >
                </li>
              </ul>
            </li>
            <li class="submenu">
              <a
                href="#sidebarIcons"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarIcons"
                :class="{ active: IconsMenu, subdrop: IconsMenu }"
              >
                <i class="la la-icons"></i> <span> Icons </span>
                <span class="menu-arrow"></span>
              </a>
              <ul class="collapse" id="sidebarIcons" :class="{ show: IconsMenu }">
                <li>
                  <router-link
                    :class="currentPath == 'icon-fontawesome' ? 'active' : 'notactive'"
                    to="icon-fontawesome"
                    >Fontawesome Icons</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'icon-feather' ? 'active' : 'notactive'"
                    to="icon-feather"
                    >Feather Icons</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'icon-ionic' ? 'active' : 'notactive'"
                    to="icon-ionic"
                    >Ionic Icons</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'icon-material' ? 'active' : 'notactive'"
                    to="icon-material"
                    >Material Icons</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'icon-pe7' ? 'active' : 'notactive'"
                    to="icon-pe7"
                    >Pe7 Icons</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'icon-simpleline' ? 'active' : 'notactive'"
                    to="icon-simpleline"
                    >Simpleline Icons</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'icon-themify' ? 'active' : 'notactive'"
                    to="icon-themify"
                    >Themify Icons</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'icon-weather' ? 'active' : 'notactive'"
                    to="icon-weather"
                    >Weather Icons</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'icon-typicon' ? 'active' : 'notactive'"
                    to="icon-typicon"
                    >Typicon Icons</router-link
                  >
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'icon-flag' ? 'active' : 'notactive'"
                    to="icon-flag"
                    >Flag Icons</router-link
                  >
                </li>
              </ul>
            </li>
            <li class="submenu">
              <a
                href="#sidebarForms"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarForms"
                :class="{ active: FormsMenu, subdrop: FormsMenu }"
              >
                <i class="la la-object-group"></i> <span> Forms </span>
                <span class="menu-arrow"></span>
              </a>
              <ul class="collapse" id="sidebarForms" :class="{ show: FormsMenu }">
                <li>
                  <router-link
                    :class="currentPath == 'form-basic-inputs' ? 'active' : 'notactive'"
                    to="form-basic-inputs"
                    >Basic Inputs
                  </router-link>
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'form-input-groups' ? 'active' : 'notactive'"
                    to="form-input-groups"
                    >Input Groups
                  </router-link>
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'form-horizontal' ? 'active' : 'notactive'"
                    to="form-horizontal"
                    >Horizontal Form
                  </router-link>
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'form-vertical' ? 'active' : 'notactive'"
                    to="form-vertical"
                  >
                    Vertical Form
                  </router-link>
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'form-mask' ? 'active' : 'notactive'"
                    to="form-mask"
                    >Form Mask
                  </router-link>
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'form-validation' ? 'active' : 'notactive'"
                    to="form-validation"
                    >Form Validation
                  </router-link>
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'form-select2' ? 'active' : 'notactive'"
                    to="form-select2"
                    >Form Select2
                  </router-link>
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'form-fileupload' ? 'active' : 'notactive'"
                    to="form-fileupload"
                    >File Upload
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="submenu">
              <a
                href="#sidebarTables"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarTables"
                :class="{ active: TablesMenu, subdrop: TablesMenu }"
              >
                <i class="la la-table"></i> <span> Tables </span>
                <span class="menu-arrow"></span>
              </a>
              <ul class="collapse" id="sidebarTables" :class="{ show: TablesMenu }">
                <li>
                  <router-link
                    :class="currentPath == 'tables-basic' ? 'active' : 'notactive'"
                    to="tables-basic"
                    >Basic Tables
                  </router-link>
                </li>
                <li>
                  <router-link
                    :class="currentPath == 'data-tables' ? 'active' : 'notactive'"
                    to="data-tables"
                    >Data Table
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="menu-title">
              <span>Extras</span>
            </li>
            <li>
              <a> <i class="la la-file-text"></i> <span>Documentation</span> </a>
            </li>
            <li>
              <a href="javascript:void(0);"
                ><i class="la la-info"></i> <span>Change Log</span>
                <span class="badge badge-primary ms-auto">v3.4</span></a
              >
            </li>
            <li class="submenu">
              <a
                href="#sidebarMulti"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="sidebarMulti"
              >
                <i class="la la-share-alt"></i> <span>Multi Level</span>
                <span class="menu-arrow"></span>
              </a>
              <ul class="collapse" id="sidebarMulti">
                <li class="submenu">
                  <a
                    href="#sidebarLevelone"
                    data-bs-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="sidebarLevelone"
                  >
                    <span>Level 1</span> <span class="menu-arrow"></span
                  ></a>
                  <ul class="collapse" id="sidebarLevelone">
                    <li>
                      <a href="javascript:void(0);"><span>Level 2</span></a>
                    </li>
                    <li class="submenu">
                      <a
                        href="#sidebarLeveltwo"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="sidebarLeveltwo"
                      >
                        <span> Level 2</span> <span class="menu-arrow"></span
                      ></a>
                      <ul class="collapse" id="sidebarLeveltwo">
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
        </div>
      </perfect-scrollbar>
    </div>
  </div>
  <!-- /Sidebar -->

  <two-col-sidebar></two-col-sidebar>
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
      DashboardMenus: false,
      AppsMenus: false,
      CallMenus: false,
      EmployeesMenus: false,
      ProjectsMenus: false,
      SalesMenus: false,
      AccountingMenus: false,
      PayrollMenus: false,
      ReportsMenus: false,
      PerformanceMenus: false,
      GoalsMenus: false,
      TrainingMenus: false,
      JobsMenus: false,
      ProfileMenus: false,
      AuthenticationMenus: false,
      ErrorMenus: false,
      SubscriptionsMenus: false,
      FormsMenus: false,
      TablesMenus: false,
      PagesMenus: false,
      ElementsMenus: false,
      BaseUIMenus: false,
      ChartsMenus: false,
      IconsMenus: false,
      FormsMenus: false,
      TablesMenus: false,
      MultiMenus: false,
      LeveloneMenus: false,
      LeveltwoMenus: false,
      settings: {
        suppressScrollX: true,
      },
      activeClass: "active",
    };
  },
  methods: {
    scrollHanle(evt) {},
    redirectReload() {
      this.$router.push({ path: "/horizontal-timeline" }).then(() => {
        this.$router.go();
      });
    },
  },
  computed: {
    currentPath() {
      return this.$route.name;
    },
    DashboardMenu() {
      return (
        this.$route.name == "admin-dashboard" || this.$route.name == "employee-dashboard"
      );
    },
    AppsMenu() {
      return (
        this.$route.name == "chat" ||
        this.$route.name == "events" ||
        this.$route.name == "contacts" ||
        this.$route.name == "inbox" ||
        this.$route.name == "file-manager"
      );
    },
    CallMenu() {
      return (
        this.$route.name == "voice-call" ||
        this.$route.name == "video-call" ||
        this.$route.name == "outgoing-call" ||
        this.$route.name == "incoming-call"
      );
    },
    EmployeesMenu() {
      return (
        this.$route.name == "employees" ||
        this.$route.name == "employees-list" ||
        this.$route.name == "holidays" ||
        this.$route.name == "leaves" ||
        this.$route.name == "leaves-employee" ||
        this.$route.name == "leave-settings" ||
        this.$route.name == "attendance" ||
        this.$route.name == "attendance-employee" ||
        this.$route.name == "departments" ||
        this.$route.name == "designations" ||
        this.$route.name == "timesheet" ||
        this.$route.name == "shift-scheduling" ||
        this.$route.name == "shift-list" ||
        this.$route.name == "overtime"
      );
    },
    ProjectsMenu() {
      return (
        this.$route.name == "projects" ||
        this.$route.name == "tasks" ||
        this.$route.name == "task-board" ||
        this.$route.name == "project-list" ||
        this.$route.name == "project-view"
      );
    },
    SalesMenu() {
      return (
        this.$route.name == "estimates" ||
        this.$route.name == "create-estimate" ||
        this.$route.name == "edit-estimate" ||
        this.$route.name == "estimate-view" ||
        this.$route.name == "invoices" ||
        this.$route.name == "create-invoice" ||
        this.$route.name == "edit-invoice" ||
        this.$route.name == "invoice-view" ||
        this.$route.name == "payments" ||
        this.$route.name == "expenses" ||
        this.$route.name == "provident-fund" ||
        this.$route.name == "taxes"
      );
    },
    AccountingMenu() {
      return (
        this.$route.name == "categories" ||
        this.$route.name == "budgets" ||
        this.$route.name == "budget-expenses" ||
        this.$route.name == "budget-revenues" ||
        this.$route.name == "sub-category"
      );
    },
    PayrollMenu() {
      return (
        this.$route.name == "salary" ||
        this.$route.name == "salary-view" ||
        this.$route.name == "payroll-items"
      );
    },
    ReportsMenu() {
      return (
        this.$route.name == "expense-reports" ||
        this.$route.name == "invoice-reports" ||
        this.$route.name == "payments-reports" ||
        this.$route.name == "project-reports" ||
        this.$route.name == "task-reports" ||
        this.$route.name == "user-reports" ||
        this.$route.name == "employee-reports" ||
        this.$route.name == "payslip-reports" ||
        this.$route.name == "attendance-reports" ||
        this.$route.name == "leave-reports" ||
        this.$route.name == "daily-reports"
      );
    },
    PerformanceMenu() {
      return (
        this.$route.name == "performance-indicator" ||
        this.$route.name == "performance" ||
        this.$route.name == "performance-appraisal"
      );
    },
    GoalsMenu() {
      return this.$route.name == "goal-tracking" || this.$route.name == "goal-type";
    },
    TrainingMenu() {
      return (
        this.$route.name == "training" ||
        this.$route.name == "trainers" ||
        this.$route.name == "training-type"
      );
    },
    JobsMenu() {
      return (
        this.$route.name == "user-dashboard" ||
        this.$route.name == "user-all-jobs" ||
        this.$route.name == "saved-jobs" ||
        this.$route.name == "applied-jobs" ||
        this.$route.name == "interviewing" ||
        this.$route.name == "job-aptitude" ||
        this.$route.name == "questions" ||
        this.$route.name == "offered-jobs" ||
        this.$route.name == "visited-jobs" ||
        this.$route.name == "archived-jobs" ||
        this.$route.name == "jobs-dashboard" ||
        this.$route.name == "jobs" ||
        this.$route.name == "manage-resumes" ||
        this.$route.name == "shortlist-candidates" ||
        this.$route.name == "interview-questions" ||
        this.$route.name == "offer-approvals" ||
        this.$route.name == "experiance-level" ||
        this.$route.name == "candidates" ||
        this.$route.name == "schedule-timing" ||
        this.$route.name == "apptitude-result"
      );
    },
    ProfileMenu() {
      return (
        this.$route.name == "profile" ||
        this.$route.name == "client-profile" ||
        this.$route.name == "user-asset-details"
      );
    },
    AuthenticationMenu() {
      return (
        this.$route.name == "/" ||
        this.$route.name == "register" ||
        this.$route.name == "forgot-password" ||
        this.$route.name == "otp" ||
        this.$route.name == "lock-screen"
      );
    },
    ErrorMenu() {
      return this.$route.name == "error-404" || this.$route.name == "error-500";
    },
    SubscriptionsMenu() {
      return (
        this.$route.name == "subscriptions" ||
        this.$route.name == "subscriptions-company" ||
        this.$route.name == "subscribed-companies"
      );
    },
    FormsMenu() {
      return (
        this.$route.name == "form-basic-inputs" ||
        this.$route.name == "form-input-groups" ||
        this.$route.name == "form-horizontal" ||
        this.$route.name == "form-vertical" ||
        this.$route.name == "form-mask" ||
        this.$route.name == "form-validation"
      );
    },
    TablesMenu() {
      return this.$route.name == "tables-basic" || this.$route.name == "data-tables";
    },
    PagesMenu() {
      return (
        this.$route.name == "search" ||
        this.$route.name == "faq" ||
        this.$route.name == "terms" ||
        this.$route.name == "privacy-policy" ||
        this.$route.name == "blank-page"
      );
    },
    ElementsMenu() {
      return (
        this.$route.name == "ribbon" ||
        this.$route.name == "clipboard" ||
        this.$route.name == "drag-drop" ||
        this.$route.name == "rating" ||
        this.$route.name == "text-editor" ||
        this.$route.name == "counter" ||
        this.$route.name == "scrollbar" ||
        this.$route.name == "notification" ||
        this.$route.name == "stickynote" ||
        this.$route.name == "timeline" ||
        this.$route.name == "horizontal-timeline" ||
        this.$route.name == "form-wizard"
      );
    },
    BaseUIMenu() {
      return (
        this.$route.name == "alerts" ||
        this.$route.name == "accordions" ||
        this.$route.name == "avatar" ||
        this.$route.name == "badges" ||
        this.$route.name == "buttons" ||
        this.$route.name == "buttongroup" ||
        this.$route.name == "breadcrumbs" ||
        this.$route.name == "cards" ||
        this.$route.name == "carousel" ||
        this.$route.name == "dropdowns" ||
        this.$route.name == "grid" ||
        this.$route.name == "images" ||
        this.$route.name == "lightbox" ||
        this.$route.name == "media" ||
        this.$route.name == "modal" ||
        this.$route.name == "offcanvas" ||
        this.$route.name == "pagination" ||
        this.$route.name == "popover" ||
        this.$route.name == "progress" ||
        this.$route.name == "placeholders" ||
        this.$route.name == "rangeslider" ||
        this.$route.name == "spinners" ||
        this.$route.name == "sweetalerts" ||
        this.$route.name == "tab" ||
        this.$route.name == "tooltip" ||
        this.$route.name == "typography" ||
        this.$route.name == "video"
      );
    },
    ChartsMenu() {
      return (
        this.$route.name == "chart-apex" ||
        this.$route.name == "chart-js" ||
        this.$route.name == "chart-morris" ||
        this.$route.name == "chart-flot" ||
        this.$route.name == "chart-c3"
      );
    },
    IconsMenu() {
      return (
        this.$route.name == "icon-fontawesome" ||
        this.$route.name == "icon-feather" ||
        this.$route.name == "icon-ionic" ||
        this.$route.name == "icon-material" ||
        this.$route.name == "icon-pe7" ||
        this.$route.name == "icon-simpleline" ||
        this.$route.name == "icon-themify" ||
        this.$route.name == "icon-weather" ||
        this.$route.name == "icon-typicon" ||
        this.$route.name == "icon-flag"
      );
    },
    FormsMenu() {
      return (
        this.$route.name == "form-basic-inputs" ||
        this.$route.name == "form-input-groups" ||
        this.$route.name == "form-horizontal" ||
        this.$route.name == "form-vertical" ||
        this.$route.name == "form-mask" ||
        this.$route.name == "form-validation" ||
        this.$route.name == "form-select2" ||
        this.$route.name == "form-fileupload"
      );
    },
    TablesMenu() {
      return this.$route.name == "tables-basic" || this.$route.name == "data-tables";
    },
  },
};
</script>
