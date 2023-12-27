import {createRouter, createWebHistory} from 'vue-router';
import AdminDashboard from '@/views/pages/admin-dashboard/admin-dashboard'
import EmployeeDashboard from '@/views/pages/employee-dashboard/employee-dashboard'
import Chat from '@/views/pages/apps/chat/chat'
import VoiceCall from '@/views/pages/apps/calls/voice-call'
import VideoCall from '@/views/pages/apps/calls/video-call'
import OutgoingCall from '@/views/pages/apps/calls/outgoing-call'
import IncomingCall from '@/views/pages/apps/calls/incoming-call'
import Events from '@/views/pages/apps/events/events'
import Contacts from '@/views/pages/apps/contacts/contacts'
import Inbox from '@/views/pages/apps/inbox'
import Compose from '@/views/pages/apps/compose'
import FileManager from '@/views/pages/apps/file-manager'
import Employees from '@/views/pages/employees/employees'
import EmployeesList from '@/views/pages/employees/employees-list'
import Holidays from '@/views/pages/employees/holidays'
import Leaves  from '@/views/pages/employees/admin-leaves/leaves'
import LeavesEmployee from '@/views/pages/employees/employee-leaves/leaves-employee'
import LeaveSettings from '@/views/pages/employees/leave-settings/leave-settings'
import Attendance from '@/views/pages/employees/attendance'
import AttendanceEmployee from '@/views/pages/employees/attendance-employee'
import Departments from '@/views/pages/employees/departments'
import Designations from '@/views/pages/employees/designations'
import Timesheet from '@/views/pages/employees/timesheet'
import ShiftList from '@/views/pages/employees/shift-list'
import Overtime from '@/views/pages/employees/overtime'
import Clients from '@/views/pages/clients/clients'
import ShiftScheduling from '@/views/pages/employees/shift-scheduling'
import Login from '@/views/pages/pages/authentications/login'
import Register from '@/views/pages/pages/authentications/register'
import Forgot_Password from '@/views/pages/pages/authentications/forgot-password'
import OTP from '@/views/pages/pages/authentications/otp.vue'
import Lock_Screen from '@/views/pages/pages/authentications/lock-screen.vue'
import Error_500 from '@/views/pages/pages/errors/error-500.vue'
import Error_404 from '@/views/pages/pages/errors/error-404.vue'
import Privacy_Policy from '@/views/pages/pages/pages/privacy-policy.vue'
import Faq from '@/views/pages/pages/pages/faq.vue'
import Blank_Page from '@/views/pages/pages/pages/blank-page.vue'
import Terms from '@/views/pages/pages/pages/terms.vue'
import Subscriptions_Company from '@/views/pages/pages/subscriptions/subscriptions-company/subscriptions-company.vue'
import Subscriptions from '@/views/pages/pages/subscriptions/sub/subscriptions.vue'
import Subscribedcompanies from '@/views/pages/pages/subscriptions/subscribedcompanies/subindex'
import Settings from '@/views/pages/administration/settings/settings.vue'
import Localization from '@/views/pages/administration/settings/localization.vue'
import Theme_Settings from '@/views/pages/administration/settings/theme-settings.vue'
import Email_Settings from '@/views/pages/administration/settings/email-settings.vue'
import Approval_Setting from '@/views/pages/administration/settings/approval-setting/approval-setting.vue'
import Roles_Permissions from '@/views/pages/administration/settings/roles-permissions/roles-permissions.vue'
import Invoice_Settings from '@/views/pages/administration/settings/invoice-settings.vue'
import Salary_Settings from '@/views/pages/administration/settings/salary-settings.vue'
import Notifications_Settings from '@/views/pages/administration/settings/notifications-settings.vue'
import Change_Password from '@/views/pages/administration/settings/change-password.vue'
import LeaveType from "@/views/pages/administration/settings/leave-type.vue"
import Toxbox_Setting from "@/views/pages/administration/settings/toxbox-setting.vue"
import Cron_Setting from "@/views/pages/administration/settings/cron-setting.vue"
import Activities from "@/views/pages/administration/activities.vue"
import Knowledgebase from "@/views/pages/administration/knowledgebase.vue"
import Jobs from "@/views/pages/administration/jobs/jobs.vue"
import Manage_Resumes from "@/views/pages/administration/jobs/manage-resumes.vue"
import Shortlist_Candidates from "@/views/pages/administration/jobs/shortlist-candidates.vue"
import Interview_Questions from "@/views/pages/administration/jobs/interview-questions.vue"
import Experiance_Level from "@/views/pages/administration/jobs/experiance-level.vue"
import Candidates from "@/views/pages/administration/jobs/candidates.vue"
import Schedule_Timing from "@/views/pages/administration/jobs/schedule-timing.vue"
import Apptitude_Result from "@/views/pages/administration/jobs/apptitude-result.vue"
import Users from "@/views/pages/administration/users/users.vue"
import Profile from '@/views/pages/pages/profile/employeeprofile/index'
import Clientprofile from '@/views/pages/pages/profile/clientprofile/index'
import Assets from '@/views/pages/administration/assets/assets'
import Estimates from '@/views/pages/sales/estimates/estimates'
import CreateEstimate from '@/views/pages/sales/estimates/create-estimate'
import EditEstimate from '@/views/pages/sales/estimates/edit-estimate'
import EstimateView from '@/views/pages/sales/estimates/estimate-view'
import Invoices from '@/views/pages/sales/invoices/invoices'
import CreateInvoice from '@/views/pages/sales/invoices/create-invoice'
import EditInvoice from '@/views/pages/sales/invoices/edit-invoice'
import InvoiceView from '@/views/pages/sales/invoices/invoice-view'
import Payments from '@/views/pages/sales/payments'
import Expenses from '@/views/pages/sales/expenses'
import ProvidentFund from '@/views/pages/sales/provident-fund'
import Taxes from '@/views/pages/sales/taxes'
import Categories from '@/views/pages/accounting/categories'
import SubCategory from '@/views/pages/accounting/sub-category'
import Budgets from '@/views/pages/accounting/budgets'
import BudgetExpenses from '@/views/pages/accounting/budget-expenses'
import Budgetrevenues from '@/views/pages/accounting/budget-revenues'
import Salary from '@/views/pages/payroll/salary'
import Salaryview from '@/views/pages/payroll/salary-view'
import Payrollitems from '@/views/pages/payroll/payroll-items/payroll-items'
import Policies from '@/views/pages/policies/policies'
import Expensereports from '@/views/pages/reports/expense-reports'
import Invoicereports from '@/views/pages/reports/invoice-reports'
import Paymentsreports from '@/views/pages/reports/payments-reports'
import Projectreports from '@/views/pages/reports/project-reports'
import Taskreports from '@/views/pages/reports/task-reports'
import Userreports from '@/views/pages/reports/user-reports'
import Employeereports from '@/views/pages/reports/employee-reports'
import Payslipreports from '@/views/pages/reports/payslip-reports'
import Attendancereports from '@/views/pages/reports/attendance-reports'
import Leavereports from '@/views/pages/reports/leave-reports'
import Dailyreports from '@/views/pages/reports/daily-reports'
import Clientslist from '@/views/pages/clients/clients-list'
import Projects from '@/views/pages/projects/projects'
import ProjectList from '@/views/pages/projects/project-list'
import Tasks from '@/views/pages/projects/tasks/tasks'
import TaskBoard from '@/views/pages/projects/task-board/task-board'
import Leads from '@/views/pages/employees/leads/leads'
import Tickets from '@/views/pages/employees/tickets/tickets'
import ProjectView from '@/views/pages/projects/project-view/project-view'
import Termination from '@/views/pages/performance/termination'
import Search from '@/views/pages/pages/pages/search/search'
import Resignation from '@/views/pages/performance/resignation'
import Promotion from '@/views/pages/performance/promotion'
import Training_Type from '@/views/pages/performance/training/training-type'
import Trainers from '@/views/pages/performance/training/trainers'
import Training from '@/views/pages/performance/training/training'
import Goal_Type from '@/views/pages/performance/goals/goal-type'
import Goal_Tracking from '@/views/pages/performance/goals/goal-tracking'
import Performance_Appraisal from '@/views/pages/performance/performance/performance-appraisal'
import Performance_Indicator from '@/views/pages/performance/performance/performance-indicator'
import Performance from '@/views/pages/performance/performance/performance/performance'
import Job_Details from '@/views/pages/administration/jobs/job-details'
import Job_Applicants from '@/views/pages/administration/jobs/job-applicants'
import Job_List from '@/views/pages/administration/jobs/job-list'
import Job_View from '@/views/pages/administration/jobs/job-view'
import Assets_Details from '@/views/pages/pages/profile/employeeprofile/assets-details'
import User_Asset_Details from '@/views/pages/pages/profile/employeeprofile/user-asset-details'
import Performance_Setting from "@/views/pages/administration/settings/performance-setting/performance-setting.vue"
import Knowledgebase_View from "@/views/pages/administration/knowledgebase-view.vue"
import UserDashboard from '@/views/pages/administration/jobs/user-dashboard/user-dashboard'
import UserAllJobs from '@/views/pages/administration/jobs/user-dashboard/user-all-jobs'
import AppliedJobs from '@/views/pages/administration/jobs/user-dashboard/applied-jobs'
import SavedJobs from '@/views/pages/administration/jobs/user-dashboard/saved-jobs'
import VisitedJobs from '@/views/pages/administration/jobs/user-dashboard/visited-jobs'
import ArchivedJobs from '@/views/pages/administration/jobs/user-dashboard/archived-jobs'
import OfferedJobs from '@/views/pages/administration/jobs/user-dashboard/offered-jobs'
import Offer_Approvals from "@/views/pages/administration/jobs/offer-approvals.vue"
import Interviewing from '@/views/pages/administration/jobs/user-dashboard/interviewing/interviewing'
import JobAptitude from '@/views/pages/administration/jobs/user-dashboard/interviewing/job-aptitude'
import Questions from  '@/views/pages/administration/jobs/user-dashboard/interviewing/questions'
import JobsDashboard from '@/views/pages/administration/jobs/user-dashboard/jobs-dashboard'
import Ticket_view from '@/views/pages/employees/tickets/ticket-view/ticket-view'

import accordions from '@/views/pages/uiinterface/baseui/accordions/accordions'
import alerts from '@/views/pages/uiinterface/baseui/alerts'
import avatar from '@/views/pages/uiinterface/baseui/avatar'
import badges from '@/views/pages/uiinterface/baseui/badges/badges'
import buttongroup from '@/views/pages/uiinterface/baseui/buttongroup'
import buttons from '@/views/pages/uiinterface/baseui/buttons'
import breadcrumbs from '@/views/pages/uiinterface/baseui/breadcrumbs'
import cards from '@/views/pages/uiinterface/baseui/cards'
import carousel from '@/views/pages/uiinterface/baseui/carousel/carousel'
import dropdowns from '@/views/pages/uiinterface/baseui/dropdowns'
import grid from '@/views/pages/uiinterface/baseui/grid'
import images from '@/views/pages/uiinterface/baseui/images'
import lightbox from '@/views/pages/uiinterface/baseui/lightbox/lightbox'
import media from '@/views/pages/uiinterface/baseui/media'
import modal from '@/views/pages/uiinterface/baseui/modal/modal'
import offcanvas from '@/views/pages/uiinterface/baseui/offcanvas/offcanvas'
import pagination from '@/views/pages/uiinterface/baseui/pagination'
import progress from '@/views/pages/uiinterface/baseui/progress/progress'
import placeholders from '@/views/pages/uiinterface/baseui/placeholders'
import popover from '@/views/pages/uiinterface/baseui/popover'
import rangeslider from '@/views/pages/uiinterface/baseui/rangeslider'
import spinners from '@/views/pages/uiinterface/baseui/spinners'
import sweetalerts from '@/views/pages/uiinterface/baseui/sweetalerts'
import tab from '@/views/pages/uiinterface/baseui/tab/tab'
import toastr from '@/views/pages/uiinterface/baseui/toastr'
import tooltip from '@/views/pages/uiinterface/baseui/tooltip'
import typography from '@/views/pages/uiinterface/baseui/typography'
import video from '@/views/pages/uiinterface/baseui/video'
import chartapex from '@/views/pages/uiinterface/chart/apex/chart-apex'
import chartc3 from '@/views/pages/uiinterface/chart/c3/chart-c3'
import chartflot from '@/views/pages/uiinterface/chart/flot/chart-flot'
import chartjs from '@/views/pages/uiinterface/chart/js/chart-js'
import chartmorris from '@/views/pages/uiinterface/chart/morris/chart-morris'
import iconfontawesome from '@/views/pages/uiinterface/icons/icon-fontawesome'
import iconfeather from '@/views/pages/uiinterface/icons/icon-feather'
import iconionic from '@/views/pages/uiinterface/icons/icon-ionic'
import iconmaterial from '@/views/pages/uiinterface/icons/icon-material'
import iconpe7 from '@/views/pages/uiinterface/icons/icon-pe7'
import iconsimpleline from '@/views/pages/uiinterface/icons/icon-simpleline'
import iconthemify from '@/views/pages/uiinterface/icons/icon-themify'
import iconweather from '@/views/pages/uiinterface/icons/icon-weather'
import icontypicon from '@/views/pages/uiinterface/icons/icon-typicon'
import iconflag from '@/views/pages/uiinterface/icons/icon-flag'
import ribbon from '@/views/pages/uiinterface/elements/ribbon'
import clipboard from '@/views/pages/uiinterface/elements/clipboard'
import dragdrop from '@/views/pages/uiinterface/elements/drag-drop'
import texteditor from '@/views/pages/uiinterface/elements/text-editor'
import counter from '@/views/pages/uiinterface/elements/counter'
import scrollbar from '@/views/pages/uiinterface/elements/scrollbar'
import notificationelement from '@/views/pages/uiinterface/elements/notificationelement'
import stickynote from '@/views/pages/uiinterface/elements/stickynote'
import timeline from '@/views/pages/uiinterface/elements/timeline'
import horizontaltimeline from '@/views/pages/uiinterface/elements/horizontal-timeline'
import formwizard from '@/views/pages/uiinterface/elements/form-wizard'
import Formbasicinput from '@/views/pages/uiinterface/form/formbasic/Formbasicinput'
import Forminput from '@/views/pages/uiinterface/form/forminput/Forminput'
import Horizontal from '@/views/pages/uiinterface/form/formhorizontal/Horizontal'
import Formmask from '@/views/pages/uiinterface/form/formmask/formmask'
import Formselect2 from '@/views/pages/uiinterface/form/Formselect2'
import Formfileupload from '@/views/pages/uiinterface/form/Formfileupload'
import Formvalidation from '@/views/pages/uiinterface/form/Formvalidation'
import Formvertical from '@/views/pages/uiinterface/form/Formvertical'
import Basictable from '@/views/pages/uiinterface/table/Basictable'
import Datatable from '@/views/pages/uiinterface/table/Datatable'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/activities',
    name: 'activities',
    component: Activities,
	meta: { requiresAuth: true }
  },
  {
    path: '/admin-dashboard',
    name: 'admin-dashboard',
    component: AdminDashboard,
	meta: { requiresAuth: true }
  },
  {
    path: '/applied-jobs',
    name: 'applied-jobs',
    component: AppliedJobs,
	meta: { requiresAuth: true }
  },
  {
    path: '/employee-dashboard',
    name: 'employee-dashboard',
    component: EmployeeDashboard,
	meta: { requiresAuth: true }
  },
  {
    path: '/chat',
    name: 'chat',
    component: Chat,
	meta: { requiresAuth: true }
  },
  {
    path: '/voice-call',
    name: 'voice-call',
    component: VoiceCall,
	meta: { requiresAuth: true }
  },
  {
    path: '/video-call',
    name: 'video-call',
    component: VideoCall,
	meta: { requiresAuth: true }
  },
  {
    path: '/outgoing-call',
    name: 'outgoing-call',
    component: OutgoingCall,
	meta: { requiresAuth: true }
  },
  {
    path: '/incoming-call',
    name: 'incoming-call',
    component: IncomingCall,
	meta: { requiresAuth: true }
  },
  {
    path: '/events',
    name: 'events',
    component: Events,
	meta: { requiresAuth: true }
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts,
	meta: { requiresAuth: true }
  },
  {
    path: '/inbox',
    name: 'inbox',
    component: Inbox,
	meta: { requiresAuth: true }
  },
  {
    path: '/compose',
    name: 'compose',
    component: Compose,
	meta: { requiresAuth: true }
  },
  {
    path: '/file-manager',
    name: 'file-manager',
    component: FileManager,
	meta: { requiresAuth: true }
  },
  {
    path: '/employees',
    name: 'employees',
    component: Employees,
	meta: { requiresAuth: true }
  },
  {
    path: '/employees-list',
    name: 'employees-list',
    component: EmployeesList,
	meta: { requiresAuth: true }
  },
  {
    path: '/holidays',
    name: 'holidays',
    component: Holidays,
	meta: { requiresAuth: true }
  },
  {
    path: '/leaves',
    name: 'leaves',
    component: Leaves,
	meta: { requiresAuth: true }
  },
  {
    path: '/leaves-employee',
    name: 'leaves-employee',
    component: LeavesEmployee,
	meta: { requiresAuth: true }
  },
  {
    path: '/leave-settings',
    name: 'leave-settings',
    component: LeaveSettings,
	meta: { requiresAuth: true }
  },
  {
    path: '/attendance',
    name: 'attendance',
    component: Attendance,
	meta: { requiresAuth: true }
  },
  {
    path: '/attendance-employee',
    name: 'attendance-employee',
    component: AttendanceEmployee,
	meta: { requiresAuth: true }
  },
  {
    path: '/departments',
    name: 'departments',
    component: Departments,
	meta: { requiresAuth: true }
  },
  {
    path: '/designations',
    name: 'designations',
    component: Designations,
	meta: { requiresAuth: true }
  },
  {
    path: '/timesheet',
    name: 'timesheet',
    component: Timesheet,
	meta: { requiresAuth: true }
  },
  {
    path: '/shift-list',
    name: 'shift-list',
    component: ShiftList,
	meta: { requiresAuth: true }
  },
  {
    path: '/overtime',
    name: 'overtime',
    component: Overtime,
	meta: { requiresAuth: true }
  },
  {
    path: '/clients',
    name: 'clients',
    component: Clients,
	meta: { requiresAuth: true }
  },
  {
    path: '/shift-scheduling',
    name: 'shift-scheduling',
    component: ShiftScheduling,
	meta: { requiresAuth: true }
  },
  {
    path: '/otp',
    name: 'otp',
    component: OTP
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: Forgot_Password
  },
  {
    path: '/lock-screen',
    name: 'lock-screen',
    component: Lock_Screen
  },
  {
    path: '/error-500',
    name: 'error-500',
    component: Error_500
  },
  {
    path: '/error-404',
    name: 'error-404',
    component: Error_404
  },
  {
    path: '/blank-page',
    name: 'blank-page',
    component: Blank_Page
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: Privacy_Policy
  },
  {
    path: '/terms',
    name: 'terms',
    component: Terms
  },
  {
    path: '/faq',
    name: 'faq',
    component: Faq
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings,
	meta: { requiresAuth: true }
  },
  {
    path: '/localization',
    name: 'localization',
    component: Localization,
	meta: { requiresAuth: true }
  },
  {
    path: '/theme-settings',
    name: 'theme-settings',
    component: Theme_Settings,
	meta: { requiresAuth: true }
  },
  {
    path: '/email-settings',
    name: 'email-settings',
    component: Email_Settings,
	meta: { requiresAuth: true }
  },
  {
    path: '/approval-setting',
    name: 'approval-setting',
    component: Approval_Setting,
	meta: { requiresAuth: true }
  },
  {
    path: '/subscriptions',
    name: 'subscriptions',
    component: Subscriptions,
	meta: { requiresAuth: true }
  },
  {
    path: '/subscriptions-company',
    name: 'subscriptions-company',
    component: Subscriptions_Company,
	meta: { requiresAuth: true }
  },
  {
    path: '/subscribed-companies',
    name: 'subscribed-companies',
    component: Subscribedcompanies,
	meta: { requiresAuth: true }
  },
  {
    path: '/roles-permissions',
    name: 'roles-permissions',
    component: Roles_Permissions,
	meta: { requiresAuth: true }
  },
  {
    path: '/invoice-settings',
    name: 'invoice-settings',
    component: Invoice_Settings,
	meta: { requiresAuth: true }
  },
  {
    path: '/salary-settings',
    name: 'salary-settings',
    component: Salary_Settings,
	meta: { requiresAuth: true }
  },
  {
    path: '/notifications-settings',
    name: 'notifications-settings',
    component: Notifications_Settings,
	meta: { requiresAuth: true }
  },
  {
    path: '/change-password',
    name: 'change-password',
    component: Change_Password,
	meta: { requiresAuth: true }
  },
  {
    path: '/leave-type',
    name: 'leave-type',
    component: LeaveType,
	meta: { requiresAuth: true }
  },
  {
    path: '/toxbox-setting',
    name: 'toxbox-setting',
    component: Toxbox_Setting,
	meta: { requiresAuth: true }
  },
  {
    path: '/cron-setting',
    name: 'cron-setting',
    component: Cron_Setting,
	meta: { requiresAuth: true }
  },
  {
    path: '/knowledgebase',
    name: 'knowledgebase',
    component: Knowledgebase,
	meta: { requiresAuth: true }
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs,
	meta: { requiresAuth: true }
  },
  {
    path: '/manage-resumes',
    name: 'manage-resumes',
    component: Manage_Resumes,
	meta: { requiresAuth: true }
  },
  {
    path: '/shortlist-candidates',
    name: 'shortlist-candidates',
    component: Shortlist_Candidates,
	meta: { requiresAuth: true }
  },
  {
    path: '/interview-questions',
    name: 'interview-questions',
    component: Interview_Questions,
	meta: { requiresAuth: true }
  },
  {
    path: '/experiance-level',
    name: 'experiance-level',
    component: Experiance_Level,
	meta: { requiresAuth: true }
  },
  {
    path: '/candidates',
    name: 'candidates',
    component: Candidates,
	meta: { requiresAuth: true }
  },
  {
    path: '/schedule-timing',
    name: 'schedule-timing',
    component: Schedule_Timing,
	meta: { requiresAuth: true }
  },
  {
    path: '/apptitude-result',
    name: 'apptitude-result',
    component: Apptitude_Result,
	meta: { requiresAuth: true }
  },
  {
    path: '/users',
    name: 'users',
    component: Users,
	meta: { requiresAuth: true }
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
	meta: { requiresAuth: true }
  },
  {
    path: '/assets',
    name: 'assets',
    component: Assets,
	meta: { requiresAuth: true }
  },
  {
    path: '/client-profile',
    name: 'client-profile',
    component: Clientprofile,
	meta: { requiresAuth: true }
  },
  {
    path: '/estimates',
    name: 'estimates',
    component: Estimates,
	meta: { requiresAuth: true }
  },
  {
    path: '/create-estimate',
    name: 'create-estimate',
    component: CreateEstimate,
	meta: { requiresAuth: true }
  },
  {
    path: '/edit-estimate',
    name: 'edit-estimate',
    component: EditEstimate,
	meta: { requiresAuth: true }
  },
  {
    path: '/estimate-view',
    name: 'estimate-view',
    component: EstimateView,
	meta: { requiresAuth: true }
  },
  {
    path: '/invoices',
    name: 'invoices',
    component: Invoices,
	meta: { requiresAuth: true }
  },
  {
    path: '/create-invoice',
    name: 'create-invoice',
    component: CreateInvoice,
	meta: { requiresAuth: true }
  },
  {
    path: '/edit-invoice',
    name: 'edit-invoice',
    component: EditInvoice,
	meta: { requiresAuth: true }
  },
  {
    path: '/invoice-view',
    name: 'invoice-view',
    component: InvoiceView,
	meta: { requiresAuth: true }
  },
  {
    path: '/payments',
    name: 'payments',
    component: Payments,
	meta: { requiresAuth: true }
  },
  {
    path: '/expenses',
    name: 'expenses',
    component: Expenses,
	meta: { requiresAuth: true }
  },
  {
    path: '/provident-fund',
    name: 'provident-fund',
    component: ProvidentFund,
	meta: { requiresAuth: true }
  },
  {
    path: '/taxes',
    name: 'taxes',
    component: Taxes,
	meta: { requiresAuth: true }
  },
  {
    path: '/categories',
    name: 'categories',
    component: Categories,
	meta: { requiresAuth: true }
  },
  {
    path: '/sub-category',
    name: 'sub-category',
    component: SubCategory,
	meta: { requiresAuth: true }
  },
  {
    path: '/budgets',
    name: 'budgets',
    component: Budgets,
	meta: { requiresAuth: true }
  },
  {
    path: '/budget-expenses',
    name: 'budget-expenses',
    component: BudgetExpenses,
	meta: { requiresAuth: true }
  },
  {
    path: '/budget-revenues',
    name: 'budget-revenues',
    component: Budgetrevenues,
	meta: { requiresAuth: true }
  },
  {
    path: '/salary',
    name: 'salary',
    component: Salary,
	meta: { requiresAuth: true }
  },
  {
    path: '/salary-view',
    name: 'salary-view',
    component: Salaryview,
	meta: { requiresAuth: true }
  },
  {
    path: '/payroll-items',
    name: 'payroll-items',
    component: Payrollitems,
	meta: { requiresAuth: true }
  },
  {
    path: '/policies',
    name: 'policies',
    component: Policies,
	meta: { requiresAuth: true }
  },
  {
    path: '/policies',
    name: 'policies',
    component: Policies,
	meta: { requiresAuth: true }
  },
  {
    path: '/expense-reports',
    name: 'expense-reports',
    component: Expensereports,
	meta: { requiresAuth: true }
  },
  {
    path: '/invoice-reports',
    name: 'invoice-reports',
    component: Invoicereports,
	meta: { requiresAuth: true }
  },
  {
    path: '/payments-reports',
    name: 'payments-reports',
    component: Paymentsreports,
	meta: { requiresAuth: true }
  },
  {
    path: '/project-reports',
    name: 'project-reports',
    component: Projectreports,
	meta: { requiresAuth: true }
  },
  {
    path: '/task-reports',
    name: 'task-reports',
    component: Taskreports,
	meta: { requiresAuth: true }
  },
  {
    path: '/user-reports',
    name: 'user-reports',
    component: Userreports,
	meta: { requiresAuth: true }
  },
  {
    path: '/employee-reports',
    name: 'employee-reports',
    component: Employeereports,
	meta: { requiresAuth: true }
  },
  {
    path: '/payslip-reports',
    name: 'payslip-reports',
    component: Payslipreports,
	meta: { requiresAuth: true }
  },
  {
    path: '/attendance-reports',
    name: 'attendance-reports',
    component: Attendancereports,
	meta: { requiresAuth: true }
  },
  {
    path: '/leave-reports',
    name: 'leave-reports',
    component: Leavereports,
	meta: { requiresAuth: true }
  },
  {
    path: '/daily-reports',
    name: 'daily-reports',
    component: Dailyreports,
	meta: { requiresAuth: true }
  },
  {
    path: '/clients-list',
    name: 'clients-list',
    component: Clientslist,
	meta: { requiresAuth: true }
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects,
	meta: { requiresAuth: true }
  },
  {
    path: '/project-list',
    name: 'project-list',
    component: ProjectList,
	meta: { requiresAuth: true }
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: Tasks,
	meta: { requiresAuth: true }
  },
  {
    path: '/task-board',
    name: 'task-board',
    component: TaskBoard,
	meta: { requiresAuth: true }
  },
  {
    path: '/leads',
    name: 'leads',
    component: Leads,
	meta: { requiresAuth: true }
  },
  {
    path: '/tickets',
    name: 'tickets',
    component: Tickets,
	meta: { requiresAuth: true }
  },
  {
    path: '/project-view',
    name: 'project-view',
    component: ProjectView,
	meta: { requiresAuth: true }
  },
  {
    path: '/termination',
    name: 'termination',
    component: Termination,
	meta: { requiresAuth: true }
  },
  {
    path: '/search',
    name: 'search',
    component: Search,
	meta: { requiresAuth: true }
  },
  {
    path: '/resignation',
    name: 'resignation',
    component: Resignation,
	meta: { requiresAuth: true }
  },
  {
    path: '/promotion',
    name: 'promotion',
    component: Promotion,
	meta: { requiresAuth: true }
  },
  {
    path: '/trainers',
    name: 'trainers',
    component: Trainers,
	meta: { requiresAuth: true }
  },
  {
    path: '/training',
    name: 'training',
    component: Training,
	meta: { requiresAuth: true }
  },
  {
    path: '/training-type',
    name: 'training-type',
    component: Training_Type,
	meta: { requiresAuth: true }
  },
  {
    path: '/goal-type',
    name: 'goal-type',
    component: Goal_Type,
	meta: { requiresAuth: true }
  },
  {
    path: '/goal-tracking',
    name: 'goal-tracking',
    component: Goal_Tracking,
	meta: { requiresAuth: true }
  },
  {
    path: '/performance-appraisal',
    name: 'performance-appraisal',
    component: Performance_Appraisal,
	meta: { requiresAuth: true }
  },
  {
    path: '/performance-indicator',
    name: 'performance-indicator',
    component: Performance_Indicator,
	meta: { requiresAuth: true }
  },
  {
    path: '/performance',
    name: 'performance',
    component: Performance,
	meta: { requiresAuth: true }
  },
  {
    path: '/job-details',
    name: 'job-details',
    component: Job_Details,
	meta: { requiresAuth: true }
  },
  {
    path: '/job-list',
    name: 'job-list',
    component: Job_List,
	meta: { requiresAuth: true }
  },
  {
    path: '/job-applicants',
    name: 'job-applicants',
    component: Job_Applicants,
	meta: { requiresAuth: true }
  },
  {
    path: '/job-view',
    name: 'job-view',
    component: Job_View,
	meta: { requiresAuth: true }
  },
  {
    path: '/assets-details',
    name: 'assets-details',
    component: Assets_Details,
	meta: { requiresAuth: true }
  },
  {
    path: '/user-asset-details',
    name: 'user-asset-details',
    component: User_Asset_Details,
	meta: { requiresAuth: true }
  },
  {
    path: '/performance-setting',
    name: 'performance-setting',
    component: Performance_Setting,
	meta: { requiresAuth: true }
  },
  {
    path: '/knowledgebase-view',
    name: 'knowledgebase-view',
    component: Knowledgebase_View,
	meta: { requiresAuth: true }
  },
  {
    path: '/user-dashboard',
    name: 'user-dashboard',
    component: UserDashboard,
	meta: { requiresAuth: true }
  },
  {
    path: '/user-all-jobs',
    name: 'user-all-jobs',
    component: UserAllJobs,
	meta: { requiresAuth: true }
  },
  {
    path: '/saved-jobs',
    name: 'saved-jobs',
    component: SavedJobs,
	meta: { requiresAuth: true }
  },
  {
    path: '/visited-jobs',
    name: 'visited-jobs',
    component: VisitedJobs,
	meta: { requiresAuth: true }
  },
  {
    path: '/archived-jobs',
    name: 'archived-jobs',
    component: ArchivedJobs,
	meta: { requiresAuth: true }
  },
  {
    path: '/offered-jobs',
    name: 'offered-jobs',
    component: OfferedJobs,
	meta: { requiresAuth: true }
  },
  {
    path: '/offer-approvals',
    name: 'offer-approvals',
    component: Offer_Approvals,
	meta: { requiresAuth: true }
  },
  {
    path: '/interviewing',
    name: 'interviewing',
    component: Interviewing,
	meta: { requiresAuth: true }
  },
  {
    path: '/job-aptitude',
    name: 'job-aptitude',
    component: JobAptitude,
	meta: { requiresAuth: true }
  },
  {
    path: '/questions',
    name: 'questions',
    component: Questions,
	meta: { requiresAuth: true }
  },
  {
    path: '/jobs-dashboard',
    name: 'jobs-dashboard',
    component: JobsDashboard,
	meta: { requiresAuth: true }
  },
  {
    path: '/ticket-view',
    name: 'ticket-view',
    component: Ticket_view,
	meta: { requiresAuth: true }
  },
  {
    path: '/accordions',
    name: 'accordions',
    component: accordions,
	meta: { requiresAuth: true }
  },
  {
    path: '/alerts',
    name: 'alerts',
    component: alerts,
	meta: { requiresAuth: true }
  }, 
  {
    path: '/avatar',
    name: 'avatar',
    component: avatar,
	meta: { requiresAuth: true }
  },
  {
    path: '/badges',
    name: 'badges',
    component: badges,
	meta: { requiresAuth: true }
  },
  {
    path: '/buttongroup',
    name: 'buttongroup',
    component: buttongroup,
	meta: { requiresAuth: true }
  },
  {
    path: '/buttons',
    name: 'buttons',
    component: buttons,
	meta: { requiresAuth: true }
  },
  {
    path: '/breadcrumbs',
    name: 'breadcrumbs',
    component: breadcrumbs,
	meta: { requiresAuth: true }
  },
  {
    path: '/cards',
    name: 'cards',
    component: cards,
	meta: { requiresAuth: true }
  },
  {
    path: '/carousel',
    name: 'carousel',
    component: carousel,
	meta: { requiresAuth: true }
  },
  {
    path: '/dropdowns',
    name: 'dropdowns',
    component: dropdowns,
	meta: { requiresAuth: true }
  },
  {
    path: '/grid',
    name: 'grid',
    component: grid,
	meta: { requiresAuth: true }
  },
  {
    path: '/images',
    name: 'images',
    component: images,
	meta: { requiresAuth: true }
  },
  {
    path: '/lightbox',
    name: 'lightbox',
    component: lightbox,
	meta: { requiresAuth: true }
  },
  {
    path: '/media',
    name: 'media',
    component: media,
	meta: { requiresAuth: true }
  },
  {
    path: '/modal',
    name: 'modal',
    component: modal,
	meta: { requiresAuth: true }
  },
  {
    path: '/offcanvas',
    name: 'offcanvas',
    component: offcanvas,
	meta: { requiresAuth: true }
  },
  {
    path: '/pagination',
    name: 'pagination',
    component: pagination,
	meta: { requiresAuth: true }
  },
  {
    path: '/progress',
    name: 'progress',
    component: progress,
	meta: { requiresAuth: true }
  },
  {
    path: '/placeholders',
    name: 'placeholders',
    component: placeholders,
	meta: { requiresAuth: true }
  },
  {
    path: '/popover',
    name: 'popover',
    component: popover,
	meta: { requiresAuth: true }
  },
  {
    path: '/rangeslider',
    name: 'rangeslider',
    component: rangeslider,
	meta: { requiresAuth: true }
  },
  {
    path: '/spinners',
    name: 'spinners',
    component: spinners,
	meta: { requiresAuth: true }
  },
  {
    path: '/sweetalerts',
    name: 'sweetalerts',
    component: sweetalerts,
	meta: { requiresAuth: true }
  },
  {
    path: '/tab',
    name: 'tab',
    component: tab,
	meta: { requiresAuth: true }
  },
  {
    path: '/toastr',
    name: 'toastr',
    component: toastr,
	meta: { requiresAuth: true }
  },
  {
    path: '/tooltip',
    name: 'tooltip',
    component: tooltip,
	meta: { requiresAuth: true }
  },
  {
    path: '/typography',
    name: 'typography',
    component: typography,
	meta: { requiresAuth: true }
  },
  {
    path: '/video',
    name: 'video',
    component: video,
	meta: { requiresAuth: true }
  },
  {
    path: '/chart-apex',
    name: 'chart-apex',
    component: chartapex,
	meta: { requiresAuth: true }
  },
  {
    path: '/chart-c3',
    name: 'chart-c3',
    component: chartc3,
	meta: { requiresAuth: true }
  },
  {
    path: '/chart-flot',
    name: 'chart-flot',
    component: chartflot,
	meta: { requiresAuth: true }
  },
  {
    path: '/chart-js',
    name: 'chart-js',
    component: chartjs,
	meta: { requiresAuth: true }
  },
  {
    path: '/chart-morris',
    name: 'chart-morris',
    component: chartmorris,
	meta: { requiresAuth: true }
  },
  {
    path: '/icon-fontawesome',
    name: 'icon-fontawesome',
    component: iconfontawesome,
	meta: { requiresAuth: true }
  },
  {
    path: '/icon-feather',
    name: 'icon-feather',
    component: iconfeather,
	meta: { requiresAuth: true }
  },
  {
    path: '/icon-ionic',
    name: 'icon-ionic',
    component: iconionic,
	meta: { requiresAuth: true }
  },
  {
    path: '/icon-material',
    name: 'icon-material',
    component: iconmaterial,
	meta: { requiresAuth: true }
  },
  {
    path: '/icon-pe7',
    name: 'icon-pe7',
    component: iconpe7,
	meta: { requiresAuth: true }
  },
  {
    path: '/icon-simpleline',
    name: 'icon-simpleline',
    component: iconsimpleline,
	meta: { requiresAuth: true }
  },
  {
    path: '/icon-themify',
    name: 'icon-themify',
    component: iconthemify,
	meta: { requiresAuth: true }
  },
  {
    path: '/icon-weather',
    name: 'icon-weather',
    component: iconweather,
	meta: { requiresAuth: true }
  },
  {
    path: '/icon-typicon',
    name: 'icon-typicon',
    component: icontypicon,
	meta: { requiresAuth: true }
  },
  {
    path: '/icon-flag',
    name: 'icon-flag',
    component: iconflag,
	meta: { requiresAuth: true }
  },
  {
    path: '/clipboard',
    name: 'clipboard',
    component: clipboard,
	meta: { requiresAuth: true }
  },
  {
    path: '/ribbon',
    name: 'ribbon',
    component: ribbon,
	meta: { requiresAuth: true }
  },
  {
    path: '/drag-drop',
    name: 'drag-drop',
    component: dragdrop,
	meta: { requiresAuth: true }
  },
  {
    path: '/text-editor',
    name: 'text-editor',
    component: texteditor,
	meta: { requiresAuth: true }
  },
  {
    path: '/counter',
    name: 'counter',
    component: counter,
	meta: { requiresAuth: true }
  },
   {
    path: '/scrollbar',
    name: 'scrollbar',
    component: scrollbar,
	meta: { requiresAuth: true }
  }, 
  {
    path: '/notification',
    name: 'notification',
    component: notificationelement,
	meta: { requiresAuth: true }
  },
  {
    path: '/stickynote',
    name: 'stickynote',
    component: stickynote,
	meta: { requiresAuth: true }
  },
  {
    path: '/timeline',
    name: 'timeline',
    component: timeline,
	meta: { requiresAuth: true }
  },
  {
    path: '/horizontal-timeline',
    name: 'horizontal-timeline',
    component: horizontaltimeline,
	meta: { requiresAuth: true }
  },
  {
    path: '/form-wizard',
    name: 'form-wizard',
    component: formwizard,
	meta: { requiresAuth: true }
  },
  {
    path: '/form-basic-inputs',
    name: 'form-basic-inputs',
    component: Formbasicinput,
	meta: { requiresAuth: true }
  },
  {
    path: '/form-input-groups',
    name: 'form-input-groups',
    component: Forminput,
	meta: { requiresAuth: true }
  },
  {
    path: '/form-horizontal',
    name: 'form-horizontal',
    component: Horizontal,
	meta: { requiresAuth: true }
  },
  {
    path: '/form-mask',
    name: 'form-mask',
    component: Formmask,
	meta: { requiresAuth: true }
  },
  {
    path: '/form-validation',
    name: 'form-validation',
    component: Formvalidation,
	meta: { requiresAuth: true }
  },
  {
    path: '/form-select2',
    name: 'form-select2',
    component: Formselect2,
	meta: { requiresAuth: true }
  },
  {
    path: '/form-fileupload',
    name: 'form-fileupload',
    component: Formfileupload,
	meta: { requiresAuth: true }
  },
  {
    path: '/form-vertical',
    name: 'form-vertical',
    component: Formvertical,
	meta: { requiresAuth: true }
  },
  {
    path: '/tables-basic',
    name: 'tables-basic',
    component: Basictable,
	meta: { requiresAuth: true }
  },
  {
    path: '/data-tables',
    name: 'data-tables',
    component: Datatable,
	meta: { requiresAuth: true }
  },
];

export const router = createRouter({
  history: createWebHistory('/'),
    linkActiveClass: 'active',
    routes,
}); 

/*router.beforeEach((to, from, next) => {
// Scroll to the top of the page
window.scrollTo({ top: 0, behavior: 'smooth' });
// Continue with the navigation
next();
});*/


router.beforeEach((to, from, next) => {
  const token = window.localStorage.getItem('token');
  //console.log(to.matched.some(record => record.meta.requiresAuth));
  if (to.matched.some(record => record.meta.requiresAuth) && !token && to.path !== '/login') {
    //console.log(56);
    next({ name: 'login' })
  }
  else if (!to.matched.some(record => record.meta.requiresAuth) && token) {
    console.log(57);
    //next({ name: 'Dashboard' })
	next()
  }
  else {
    //console.log(58);
    next()
  }
  //next()
});
