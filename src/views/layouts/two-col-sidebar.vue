<template>
  <!-- Two Col Sidebar -->
  <div class="two-col-bar" id="two-col-bar">
    <div class="sidebar sidebar-twocol">
      <div class="sidebar-left slimscroll">
        <div
          class="nav flex-column nav-pills"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <a
            class="nav-link"
            id="v-pills-dashboard-tab"
            title="Dashboard"
            data-bs-toggle="pill"
            href="#v-pills-dashboard"
            role="tab"
            aria-controls="v-pills-dashboard"
            aria-selected="true"
          >
            <span class="material-icons-outlined"> home </span>
          </a>
          <a
            class="nav-link"
            id="v-pills-apps-tab"
            title="Apps"
            data-bs-toggle="pill"
            href="#v-pills-apps"
            role="tab"
            aria-controls="v-pills-apps"
            aria-selected="false"
          >
            <span class="material-icons-outlined"> dashboard </span>
          </a>
          <a
            class="nav-link"
            id="v-pills-employees-tab"
            title="Employees"
            data-bs-toggle="pill"
            href="#v-pills-employees"
            role="tab"
            aria-controls="v-pills-employees"
            aria-selected="false"
          >
            <span class="material-icons-outlined"> people </span>
          </a>
          <a
            class="nav-link"
            id="v-pills-clients-tab"
            title="Clients"
            data-bs-toggle="pill"
            href="#v-pills-clients"
            role="tab"
            aria-controls="v-pills-clients"
            aria-selected="false"
          >
            <span class="material-icons-outlined"> person </span>
          </a>
          <a
            class="nav-link"
            id="v-pills-projects-tab"
            title="Projects"
            data-bs-toggle="pill"
            href="#v-pills-projects"
            role="tab"
            aria-controls="v-pills-projects"
            aria-selected="false"
          >
            <span class="material-icons-outlined"> topic </span>
          </a>
          <a
            class="nav-link"
            id="v-pills-leads-tab"
            title="Leads"
            data-bs-toggle="pill"
            href="#v-pills-leads"
            role="tab"
            aria-controls="v-pills-leads"
            aria-selected="false"
          >
            <span class="material-icons-outlined"> leaderboard </span>
          </a>
          <a
            class="nav-link"
            id="v-pills-tickets-tab"
            title="Tickets"
            data-bs-toggle="pill"
            href="#v-pills-tickets"
            role="tab"
            aria-controls="v-pills-tickets"
            aria-selected="false"
          >
            <span class="material-icons-outlined"> confirmation_number </span>
          </a>
          <a
            class="nav-link"
            id="v-pills-sales-tab"
            title="Sales"
            data-bs-toggle="pill"
            href="#v-pills-sales"
            role="tab"
            aria-controls="v-pills-sales"
            aria-selected="false"
          >
            <span class="material-icons-outlined"> shopping_bag </span>
          </a>
          <a
            class="nav-link"
            id="v-pills-accounting-tab"
            title="Accounting"
            data-bs-toggle="pill"
            href="#v-pills-accounting"
            role="tab"
            aria-controls="v-pills-accounting"
            aria-selected="false"
          >
            <span class="material-icons-outlined"> account_balance_wallet </span>
          </a>
          <a
            class="nav-link"
            id="v-pills-payroll-tab"
            title="Payroll"
            data-bs-toggle="pill"
            href="#v-pills-payroll"
            role="tab"
            aria-controls="v-pills-payroll"
            aria-selected="false"
          >
            <span class="material-icons-outlined"> request_quote </span>
          </a>
          <a
            class="nav-link"
            id="v-pills-policies-tab"
            title="Policies"
            data-bs-toggle="pill"
            href="#v-pills-policies"
            role="tab"
            aria-controls="v-pills-policies"
            aria-selected="false"
          >
            <span class="material-icons-outlined"> verified_user </span>
          </a>
          <a
            class="nav-link"
            id="v-pills-reports-tab"
            title="Reports"
            data-bs-toggle="pill"
            href="#v-pills-reports"
            role="tab"
            aria-controls="v-pills-reports"
            aria-selected="false"
          >
            <span class="material-icons-outlined"> report_gmailerrorred </span>
          </a>
          <a
            class="nav-link"
            id="v-pills-performance-tab"
            title="Performance"
            data-bs-toggle="pill"
            href="#v-pills-performance"
            role="tab"
            aria-controls="v-pills-performance"
            aria-selected="false"
          >
            <span class="material-icons-outlined"> shutter_speed </span>
          </a>
          <a
            class="nav-link"
            id="v-pills-goals-tab"
            title="Goals"
            data-bs-toggle="pill"
            href="#v-pills-goals"
            role="tab"
            aria-controls="v-pills-goals"
            aria-selected="false"
          >
            <span class="material-icons-outlined"> track_changes </span>
          </a>
          <a
            class="nav-link"
            id="v-pills-training-tab"
            title="Training"
            data-bs-toggle="pill"
            href="#v-pills-training"
            role="tab"
            aria-controls="v-pills-training"
            aria-selected="false"
          >
            <span class="material-icons-outlined"> checklist_rtl </span>
          </a>
          <a
            class="nav-link"
            id="v-pills-promotion-tab"
            title="Promotions"
            data-bs-toggle="pill"
            href="#v-pills-promotion"
            role="tab"
            aria-controls="v-pills-promotion"
            aria-selected="false"
          >
            <span class="material-icons-outlined"> auto_graph </span>
          </a>
          <a
            class="nav-link"
            id="v-pills-resignation-tab"
            title="Resignation"
            data-bs-toggle="pill"
            href="#v-pills-resignation"
            role="tab"
            aria-controls="v-pills-resignation"
            aria-selected="false"
          >
            <span class="material-icons-outlined"> do_not_disturb_alt </span>
          </a>
          <a
            class="nav-link"
            id="v-pills-termination-tab"
            title="Termination"
            data-bs-toggle="pill"
            href="#v-pills-termination"
            role="tab"
            aria-controls="v-pills-termination"
            aria-selected="false"
          >
            <span class="material-icons-outlined"> indeterminate_check_box </span>
          </a>
          <a
            class="nav-link"
            id="v-pills-assets-tab"
            title="Assets"
            data-bs-toggle="pill"
            href="#v-pills-assets"
            role="tab"
            aria-controls="v-pills-assets"
            aria-selected="false"
          >
            <span class="material-icons-outlined"> web_asset </span>
          </a>
          <a
            class="nav-link"
            id="v-pills-jobs-tab"
            title="Jobs"
            data-bs-toggle="pill"
            href="#v-pills-jobs"
            role="tab"
            aria-controls="v-pills-jobs"
            aria-selected="false"
          >
            <span class="material-icons-outlined"> work_outline </span>
          </a>
          <a
            class="nav-link"
            id="v-pills-knowledgebase-tab"
            title="Knowledgebase"
            data-bs-toggle="pill"
            href="#v-pills-knowledgebase"
            role="tab"
            aria-controls="v-pills-knowledgebase"
            aria-selected="false"
          >
            <span class="material-icons-outlined"> school </span>
          </a>
          <a
            class="nav-link active"
            id="v-pills-activities-tab"
            title="Activities"
            data-bs-toggle="pill"
            href="#v-pills-activities"
            role="tab"
            aria-controls="v-pills-activities"
            aria-selected="false"
          >
            <span class="material-icons-outlined"> toggle_off </span>
          </a>
          <a
            class="nav-link"
            id="v-pills-users-tab"
            title="Users"
            data-bs-toggle="pill"
            href="#v-pills-users"
            role="tab"
            aria-controls="v-pills-users"
            aria-selected="false"
          >
            <span class="material-icons-outlined"> group_add </span>
          </a>
          <a
            class="nav-link"
            id="v-pills-settings-tab"
            title="Settings"
            data-bs-toggle="pill"
            href="#v-pills-settings"
            role="tab"
            aria-controls="v-pills-settings"
            aria-selected="false"
          >
            <span class="material-icons-outlined"> settings </span>
          </a>
          <a
            class="nav-link"
            id="v-pills-profile-tab"
            title="Profile"
            data-bs-toggle="pill"
            href="#v-pills-profile"
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="false"
          >
            <span class="material-icons-outlined"> manage_accounts </span>
          </a>
          <a
            class="nav-link"
            id="v-pills-authentication-tab"
            title="Authentication"
            data-bs-toggle="pill"
            href="#v-pills-authentication"
            role="tab"
            aria-controls="v-pills-authentication"
            aria-selected="false"
          >
            <span class="material-icons-outlined"> perm_contact_calendar </span>
          </a>
          <a
            class="nav-link"
            id="v-pills-errorpages-tab"
            title="Error Pages"
            data-bs-toggle="pill"
            href="#v-pills-errorpages"
            role="tab"
            aria-controls="v-pills-errorpages"
            aria-selected="false"
          >
            <span class="material-icons-outlined"> announcement </span>
          </a>
          <a
            class="nav-link"
            id="v-pills-subscriptions-tab"
            title="Subscriptions"
            data-bs-toggle="pill"
            href="#v-pills-subscriptions"
            role="tab"
            aria-controls="v-pills-subscriptions"
            aria-selected="false"
          >
            <span class="material-icons-outlined"> loyalty </span>
          </a>
          <a
            class="nav-link"
            id="v-pills-pages-tab"
            title="Pages"
            data-bs-toggle="pill"
            href="#v-pills-pages"
            role="tab"
            aria-controls="v-pills-pages"
            aria-selected="false"
          >
            <span class="material-icons-outlined"> layers </span>
          </a>
          <a
            class="nav-link"
            id="v-pills-forms-tab"
            title="Forms"
            data-bs-toggle="pill"
            href="#v-pills-forms"
            role="tab"
            aria-controls="v-pills-forms"
            aria-selected="false"
          >
            <span class="material-icons-outlined"> view_day </span>
          </a>
          <a
            class="nav-link"
            id="v-pills-tables-tab"
            title="Tables"
            data-bs-toggle="pill"
            href="#v-pills-tables"
            role="tab"
            aria-controls="v-pills-tables"
            aria-selected="false"
          >
            <span class="material-icons-outlined"> table_rows </span>
          </a>
          <a
            class="nav-link"
            id="v-pills-documentation-tab"
            title="Documentation"
            data-bs-toggle="pill"
            href="#v-pills-documentation"
            role="tab"
            aria-controls="v-pills-documentation"
            aria-selected="false"
          >
            <span class="material-icons-outlined"> description </span>
          </a>
          <a
            class="nav-link"
            id="v-pills-changelog-tab"
            title="Changelog"
            data-bs-toggle="pill"
            href="#v-pills-changelog"
            role="tab"
            aria-controls="v-pills-changelog"
            aria-selected="false"
          >
            <span class="material-icons-outlined"> sync_alt </span>
          </a>
          <a
            class="nav-link"
            id="v-pills-multilevel-tab"
            title="Multilevel"
            data-bs-toggle="pill"
            href="#v-pills-multilevel"
            role="tab"
            aria-controls="v-pills-multilevel"
            aria-selected="false"
          >
            <span class="material-icons-outlined"> library_add_check </span>
          </a>
        </div>
      </div>

      <div class="sidebar-right">
        <div class="tab-content" id="v-pills-tabContent">
          <div
            class="tab-pane fade"
            id="v-pills-dashboard"
            role="tabpanel"
            aria-labelledby="v-pills-dashboard-tab"
          >
            <p>Dashboard</p>
            <ul>
              <li>
                <router-link to="admin-dashboard">Admin Dashboard</router-link>
              </li>
              <li>
                <router-link to="employee-dashboard">Employee Dashboard</router-link>
              </li>
            </ul>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-apps"
            role="tabpanel"
            aria-labelledby="v-pills-apps-tab"
          >
            <p>App</p>
            <ul>
              <li>
                <router-link to="chat">Chat</router-link>
              </li>
              <li class="sub-menu">
                <a href="javascript:;">Calls <span class="menu-arrow"></span></a>
                <ul>
                  <li><router-link to="voice-call">Voice Call</router-link></li>
                  <li><router-link to="video-call">Video Call</router-link></li>
                  <li><router-link to="outgoing-call">Outgoing Call</router-link></li>
                  <li><router-link to="incoming-call">Incoming Call</router-link></li>
                </ul>
              </li>
              <li>
                <router-link to="/events">Calendar</router-link>
              </li>
              <li>
                <router-link to="contacts">Contacts</router-link>
              </li>
              <li>
                <router-link to="inbox">Email</router-link>
              </li>
              <li>
                <router-link to="file-manager">File Manager</router-link>
              </li>
            </ul>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-employees"
            role="tabpanel"
            aria-labelledby="v-pills-employees-tab"
          >
            <p>Employees</p>
            <ul>
              <li><router-link to="employees">All Employees</router-link></li>
              <li><router-link to="holidays">Holidays</router-link></li>
              <li>
                <router-link to="leaves"
                  >Leaves (Admin)
                  <span class="badge rounded-pill bg-primary float-end">1</span>
                </router-link>
              </li>
              <li><router-link to="leaves-employee">Leaves (Employee)</router-link></li>
              <li><router-link to="leave-settings">Leave Settings</router-link></li>
              <li><router-link to="attendance">Attendance (Admin)</router-link></li>
              <li>
                <router-link to="attendance-employee">Attendance (Employee)</router-link>
              </li>
              <li><router-link to="departments">Departments</router-link></li>
              <li><router-link to="designations">Designations</router-link></li>
              <li><router-link to="timesheet">Timesheet</router-link></li>
              <li><router-link to="shift-scheduling">Shift & Schedule</router-link></li>
              <li><router-link to="overtime">Overtime</router-link></li>
            </ul>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-clients"
            role="tabpanel"
            aria-labelledby="v-pills-clients-tab"
          >
            <p>Clients</p>
            <ul>
              <li><router-link to="clients">Clients</router-link></li>
            </ul>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-projects"
            role="tabpanel"
            aria-labelledby="v-pills-projects-tab"
          >
            <p>Projects</p>
            <ul>
              <li><router-link to="projects">Projects</router-link></li>
              <li><router-link to="tasks">Tasks</router-link></li>
              <li><router-link to="task-board">Task Board</router-link></li>
            </ul>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-leads"
            role="tabpanel"
            aria-labelledby="v-pills-leads-tab"
          >
            <p>Leads</p>
            <ul>
              <li><router-link to="leads">Leads</router-link></li>
            </ul>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-tickets"
            role="tabpanel"
            aria-labelledby="v-pills-tickets-tab"
          >
            <p>Tickets</p>
            <ul>
              <li><router-link to="tickets">Tickets</router-link></li>
            </ul>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-sales"
            role="tabpanel"
            aria-labelledby="v-pills-sales-tab"
          >
            <p>Sales</p>
            <ul>
              <li><router-link to="estimates">Estimates</router-link></li>
              <li><router-link to="invoices">Invoices</router-link></li>
              <li><router-link to="payments">Payments</router-link></li>
              <li><router-link to="expenses">Expenses</router-link></li>
              <li><router-link to="provident-fund">Provident Fund</router-link></li>
              <li><router-link to="taxes">Taxes</router-link></li>
            </ul>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-accounting"
            role="tabpanel"
            aria-labelledby="v-pills-accounting-tab"
          >
            <p>Accounting</p>
            <ul>
              <li><router-link to="categories">Categories</router-link></li>
              <li><router-link to="budgets">Budgets</router-link></li>
              <li><router-link to="budget-expenses">Budget Expenses</router-link></li>
              <li><router-link to="budget-revenues">Budget Revenues</router-link></li>
            </ul>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-payroll"
            role="tabpanel"
            aria-labelledby="v-pills-payroll-tab"
          >
            <p>Payroll</p>
            <ul>
              <li><router-link to="salary"> Employee Salary </router-link></li>
              <li><router-link to="salary-view"> Payslip </router-link></li>
              <li><router-link to="payroll-items"> Payroll Items </router-link></li>
            </ul>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-policies"
            role="tabpanel"
            aria-labelledby="v-pills-policies-tab"
          >
            <p>Policies</p>
            <ul>
              <li><router-link to="policies"> Policies </router-link></li>
            </ul>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-reports"
            role="tabpanel"
            aria-labelledby="v-pills-reports-tab"
          >
            <p>Reports</p>
            <ul>
              <li><router-link to="expense-reports"> Expense Report </router-link></li>
              <li><router-link to="invoice-reports"> Invoice Report </router-link></li>
              <li><router-link to="payments-reports"> Payments Report </router-link></li>
              <li><router-link to="project-reports"> Project Report </router-link></li>
              <li><router-link to="task-reports"> Task Report </router-link></li>
              <li><router-link to="user-reports"> User Report </router-link></li>
              <li><router-link to="employee-reports"> Employee Report </router-link></li>
              <li><router-link to="payslip-reports"> Payslip Report </router-link></li>
              <li>
                <router-link to="attendance-reports"> Attendance Report </router-link>
              </li>
              <li><router-link to="leave-reports"> Leave Report </router-link></li>
              <li><router-link to="daily-reports"> Daily Report </router-link></li>
            </ul>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-performance"
            role="tabpanel"
            aria-labelledby="v-pills-performance-tab"
          >
            <p>Performance</p>
            <ul>
              <li>
                <router-link to="performance-indicator">
                  Performance Indicator
                </router-link>
              </li>
              <li><router-link to="performance"> Performance Review </router-link></li>
              <li>
                <router-link to="performance-appraisal">
                  Performance Appraisal
                </router-link>
              </li>
            </ul>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-goals"
            role="tabpanel"
            aria-labelledby="v-pills-goals-tab"
          >
            <p>Goals</p>
            <ul>
              <li><router-link to="goal-tracking"> Goal List </router-link></li>
              <li><router-link to="goal-type"> Goal Type </router-link></li>
            </ul>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-training"
            role="tabpanel"
            aria-labelledby="v-pills-training-tab"
          >
            <p>Training</p>
            <ul>
              <li><router-link to="training"> Training List </router-link></li>
              <li><router-link to="trainers"> Trainers</router-link></li>
              <li><router-link to="training-type"> Training Type </router-link></li>
            </ul>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-promotion"
            role="tabpanel"
            aria-labelledby="v-pills-promotion-tab"
          >
            <p>Promotion</p>
            <ul>
              <li><router-link to="promotion"> Promotion </router-link></li>
            </ul>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-resignation"
            role="tabpanel"
            aria-labelledby="v-pills-resignation-tab"
          >
            <p>Resignation</p>
            <ul>
              <li><router-link to="resignation"> Resignation </router-link></li>
            </ul>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-termination"
            role="tabpanel"
            aria-labelledby="v-pills-termination-tab"
          >
            <p>Termination</p>
            <ul>
              <li><router-link to="termination"> Termination </router-link></li>
            </ul>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-assets"
            role="tabpanel"
            aria-labelledby="v-pills-assets-tab"
          >
            <p>Assets</p>
            <ul>
              <li><router-link to="assets"> Assets </router-link></li>
            </ul>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-jobs"
            role="tabpanel"
            aria-labelledby="v-pills-jobs-tab"
          >
            <p>Jobs</p>
            <ul>
              <li><router-link to="user-dashboard"> User Dasboard </router-link></li>
              <li><router-link to="jobs-dashboard"> Jobs Dasboard </router-link></li>
              <li><router-link to="jobs"> Manage Jobs </router-link></li>
              <li><router-link to="job-applicants"> Applied Jobs </router-link></li>
              <li><router-link to="manage-resumes"> Manage Resumes </router-link></li>
              <li>
                <router-link to="shortlist-candidates">
                  Shortlist Candidates
                </router-link>
              </li>
              <li>
                <router-link to="interview-questions"> Interview Questions </router-link>
              </li>
              <li><router-link to="offer-approvals"> Offer Approvals </router-link></li>
              <li><router-link to="experiance-level"> Experience Level </router-link></li>
              <li><router-link to="candidates"> Candidates List </router-link></li>
              <li><router-link to="schedule-timing"> Schedule timing </router-link></li>
              <li><router-link to="apptitude-result"> Aptitude Results </router-link></li>
            </ul>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-knowledgebase"
            role="tabpanel"
            aria-labelledby="v-pills-knowledgebase-tab"
          >
            <p>Knowledgebase</p>
            <ul>
              <li><router-link to="knowledgebase"> Knowledgebase </router-link></li>
            </ul>
          </div>
          <div
            class="tab-pane fade show active"
            id="v-pills-activities"
            role="tabpanel"
            aria-labelledby="v-pills-activities-tab"
          >
            <p>Activities</p>
            <ul>
              <li>
                <router-link to="activities" class="active"> Activities </router-link>
              </li>
            </ul>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-users"
            role="tabpanel"
            aria-labelledby="v-pills-activities-tab"
          >
            <p>Users</p>
            <ul>
              <li><router-link to="users"> Users </router-link></li>
            </ul>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-settings"
            role="tabpanel"
            aria-labelledby="v-pills-settings-tab"
          >
            <p>Settings</p>
            <ul>
              <li><router-link to="settings"> Settings </router-link></li>
            </ul>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
          >
            <p>Profile</p>
            <ul>
              <li><router-link to="profile"> Employee Profile </router-link></li>
              <li><router-link to="client-profile"> Client Profile </router-link></li>
            </ul>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-authentication"
            role="tabpanel"
            aria-labelledby="v-pills-authentication-tab"
          >
            <p>Authentication</p>
            <ul>
              <li><router-link to="/"> Login </router-link></li>
              <li><router-link to="register"> Register </router-link></li>
              <li><router-link to="forgot-password"> Forgot Password </router-link></li>
              <li><router-link to="otp"> OTP </router-link></li>
              <li><router-link to="lock-screen"> Lock Screen </router-link></li>
            </ul>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-errorpages"
            role="tabpanel"
            aria-labelledby="v-pills-errorpages-tab"
          >
            <p>Error Pages</p>
            <ul>
              <li><router-link to="error-404">404 Error </router-link></li>
              <li><router-link to="error-500">500 Error </router-link></li>
            </ul>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-subscriptions"
            role="tabpanel"
            aria-labelledby="v-pills-subscriptions-tab"
          >
            <p>Subscriptions</p>
            <ul>
              <li>
                <router-link to="subscriptions"> Subscriptions (Admin) </router-link>
              </li>
              <li>
                <router-link to="subscriptions-company">
                  Subscriptions (Company)
                </router-link>
              </li>
              <li>
                <router-link to="subscribed-companies"> Subscribed Companies</router-link>
              </li>
            </ul>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-pages"
            role="tabpanel"
            aria-labelledby="v-pills-pages-tab"
          >
            <p>Pages</p>
            <ul>
              <li><router-link to="search"> Search </router-link></li>
              <li><router-link to="faq"> FAQ </router-link></li>
              <li><router-link to="terms"> Terms </router-link></li>
              <li><router-link to="privacy-policy"> Privacy Policy </router-link></li>
              <li><router-link to="blank-page"> Blank Page </router-link></li>
            </ul>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-forms"
            role="tabpanel"
            aria-labelledby="v-pills-forms-tab"
          >
            <p>Forms</p>
            <ul>
              <li><router-link to="form-basic-inputs">Basic Inputs </router-link></li>
              <li><router-link to="form-input-groups">Input Groups </router-link></li>
              <li><router-link to="form-horizontal">Horizontal Form </router-link></li>
              <li><router-link to="form-vertical"> Vertical Form </router-link></li>
              <li><router-link to="form-mask"> Form Mask </router-link></li>
              <li><router-link to="form-validation"> Form Validation </router-link></li>
            </ul>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-tables"
            role="tabpanel"
            aria-labelledby="v-pills-tables-tab"
          >
            <p>Tables</p>
            <ul>
              <li><router-link to="tables-basic">Basic Tables </router-link></li>
              <li><router-link to="data-tables">Data Table </router-link></li>
            </ul>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-documentation"
            role="tabpanel"
            aria-labelledby="v-pills-documentation-tab"
          >
            <p>Documentation</p>
            <ul>
              <li><a href="javascript:;">Documentation </a></li>
            </ul>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-changelog"
            role="tabpanel"
            aria-labelledby="v-pills-changelog-tab"
          >
            <p>Change Log</p>
            <ul>
              <li>
                <a href="javascript:;"
                  ><span>Change Log</span>
                  <span class="badge badge-primary ms-auto">v3.4</span>
                </a>
              </li>
            </ul>
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-multilevel"
            role="tabpanel"
            aria-labelledby="v-pills-multilevel-tab"
          >
            <p>Multi Level</p>
            <ul>
              <li class="sub-menu">
                <a href="javascript:void(0);">Level 1 <span class="menu-arrow"></span></a>
                <ul class="ms-3">
                  <li class="sub-menu">
                    <a href="javascript:void(0);"
                      >Level 1 <span class="menu-arrow"></span
                    ></a>
                    <ul>
                      <li><a href="javascript:void(0);">Level 2</a></li>
                      <li><a href="javascript:void(0);">Level 3</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="javascript:void(0);">Level 2</a></li>
              <li><a href="javascript:void(0);">Level 3</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Two Col Sidebar -->
</template>
