import { createApp } from 'vue';
import { router } from '@/router';
import App from "@/App.vue";
import { BootstrapVue3, BToastPlugin } from 'bootstrap-vue-3'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import VueSelect from 'vue3-select2-component'
import VueApexCharts from "vue3-apexcharts"
import DatePicker from 'vue3-datepicker'
import FlagIcon from 'vue-flag-icon';
import VueFeather from 'vue-feather';
import Vue3Autocounter from 'vue3-autocounter';
import SummernoteEditor from 'vue3-summernote-editor'
import VueSweetalert2 from 'vue-sweetalert2' 
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';



import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'line-awesome/dist/line-awesome/css/line-awesome.css'
import 'material-icons/css/material-icons.min.css'
import 'material-icons/css/material-icons.css'
import 'sweetalert2/dist/sweetalert2.min.css';
import '@/assets/plugins/summernote/dist/summernote-lite.min.css'
import '@/assets/plugins/summernote/dist/summernote-lite.min.js'
import 'material-icons/iconfont/material-icons.css'
import 'material-icons/css/material-icons.min.css';
import 'material-icons/css/material-icons.css';
import 'pe7-icon/dist/dist/pe-icon-7-stroke.css';
import 'typicons.font/src/font/typicons.css';
import 'weathericons/css/weather-icons.css'
import 'ionicons-npm/css/ionicons.css';
import '@/assets/css/style.css';


// *************** Components ***************
import Breadcrumb from "@/components/breadcrumb/breadcrumb.vue"
import DashboardHeader from "@/components/breadcrumb/dashboardheader.vue"
import UserDashboardHeader from "@/components/breadcrumb/user-dashboard-header.vue"
import EventHeader from "@/components/breadcrumb/event-header.vue"
import UserDashboardTabset from "@/components/user-dashboard-tabset.vue"
import JobFilter from "@/components/job-filter.vue"
import InboxHeader from '@/components/breadcrumb/inbox-header.vue'
import EmployeesHeader from '@/components/breadcrumb/employees-header.vue'
import SearchFilter from '@/components/search-filter.vue'
import HolidayHeader from '@/components/breadcrumb/holiday-header.vue'
import LeavesAdminHeader from '@/components/breadcrumb/leaves-admin-header.vue'
import Singlebreadcrumb from '@/components/breadcrumb/singlebreadcrumb.vue'
import LeavesSearchFilter from '@/components/leaves-search-filter.vue'
import ShiftHeader from '@/components/breadcrumb/shift-header.vue'
import SalesFilter from '@/components/sales-filter.vue'
import SalesHeader from "@/components/breadcrumb/sales-header.vue"
import ExpensesFilter from '@/components/expenses-filter.vue'
import ExpenseReportsFilter from '@/components/expense-reports-filter.vue'
import PaymentsReportsFilter from '@/components/payments-reports-filter.vue'
import ProjectReportsFilter from '@/components/project-reports-filter.vue'
import UserReportsFilter from '@/components/user-reports-filter.vue'
import EmployeeReportsFilter from '@/components/employee-reports-filter.vue'
import PayslipReportsFilter from '@/components/payslip-reports-filter.vue'
import AttendanceReportsFilter from '@/components/attendance-reports-filter.vue'
import ClientsHeader from '@/components/breadcrumb/clients-header.vue'
import ClientsFilter from '@/components/clients-filter.vue'
import ProjectsHeader from '@/components/breadcrumb/projects-header.vue'
import ProjectsFilter from '@/components/projects-filter.vue'
import TicketsFilter from '@/components/tickets-filter.vue'
import ProjectViewHeader from '@/components/breadcrumb/project-view-header.vue'
import Jobbreadcrumb from '@/components/breadcrumb/jobbreadcrumb.vue'
import AttendanceFilter from '@/components/attendance-filter.vue'
import AttendanceEmployeeFilter from '@/components/attendance-employee-filter.vue'
import UserDashboardFilter from '@/components/user-dashboard-filter.vue'
import ShiftSchedulingFilter from "@/components/shift-scheduling-filter.vue"
import SalaryFilter from "@/components/salary-filter.vue"
import ReportHeader from '@/components/breadcrumb/reports-header.vue'
import UsersFilter from '@/components/users-filter.vue'
import ElementBreadcrumb from '@/components/breadcrumb/elementbreadcrumb.vue'

// *************** Layout Component ***************
import Header from "@/views/layouts/header.vue"
import Sidebar from "@/views/layouts/sidebar.vue"
import TwoColSidebar from '@/views/layouts/two-col-sidebar.vue'
import ChatSidebar from '@/views/layouts/chat-sidebar.vue'
import InboxSidebar from '@/views/layouts/inbox-sidebar.vue'
import Settingssidebar from '@/views/layouts/settings-sidebar.vue'
import Taskssidebar from '@/views/layouts/tasks-sidebar.vue'
import JobHeader from '@/views/layouts/job-header.vue'
import SideSettings from '@/views/layouts/side-settings.vue'
import HorizontalHeader from '@/views/layouts/horizontal-header.vue'


// *************** Page Component ***************
import AdminPayments from '@/views/pages/admin-dashboard/admin-payment.vue'
import AdminInvoices from '@/views/pages/admin-dashboard/admin-invoices.vue'
import AdminCharts from '@/views/pages/admin-dashboard/admin-charts.vue'
import AdminStatistics from '@/views/pages/admin-dashboard/admin-statistics.vue'
import AdminClients from '@/views/pages/admin-dashboard/admin-clients.vue'
import AdminRecentProject from '@/views/pages/admin-dashboard/admin-recent-project.vue'
import ChatView from '@/views/pages/apps/chat/chat-view.vue'
import ChatRight from '@/views/pages/apps/chat/chat-right.vue'
import Annual from '@/views/pages/employees/leave-settings/annual.vue'
import Sick from '@/views/pages/employees/leave-settings/sick.vue'
import Maternity from '@/views/pages/employees/leave-settings/maternity.vue'
import CustomLeave from '@/views/pages/employees/leave-settings/custom-leave.vue'
import Annualsub from '@/views/pages/pages/subscriptions/sub/annualsub.vue'
import Monthlysub from '@/views/pages/pages/subscriptions/sub/monthlysub.vue'
import Companylist from '@/views/pages/pages/subscriptions/subscribedcompanies/companylist'
import Profiletab from '@/views/pages/pages/profile/employeeprofile/profiletab'
import Banktab from '@/views/pages/pages/profile/employeeprofile/banktab'
import Projectstab from '@/views/pages/pages/profile/employeeprofile/projectstab'
import Profilehead from '@/views/pages/pages/profile/employeeprofile/profilehead'
import Clientprofilehead from '@/views/pages/pages/profile/clientprofile/clientprofilehead'
import Clientprofiletab from '@/views/pages/pages/profile/clientprofile/clientprofiletab'
import Clienttaskstab from '@/views/pages/pages/profile/clientprofile/clienttaskstab'
import Profileassets from '@/views/pages/pages/profile/employeeprofile/assets'
import Resignation_Notice from '@/views/pages/administration/settings/approval-setting/resignation-notice.vue'
import Expenses_Approval from '@/views/pages/administration/settings/approval-setting/expenses-approval.vue'
import Leave_Approval from '@/views/pages/administration/settings/approval-setting/leave-approval.vue'
import Offer_Approval from '@/views/pages/administration/settings/approval-setting/offer-approval.vue'
import Add_role from '@/views/pages/administration/settings/roles-permissions/add-roles.vue'
import Modeltable from '@/views/pages/administration/settings/roles-permissions/modeltable.vue'
import Assetsearch from '@/views/pages/administration/assets/assetsearch'
import Assetstable from '@/views/pages/administration/assets/assetstable'
import Additionstab from '@/views/pages/payroll/payroll-items/additions-tab'
import Overtimetab from '@/views/pages/payroll/payroll-items/overtime-tab'
import Deductionstab from '@/views/pages/payroll/payroll-items/deductions-tab'
import ProjectTasks from '@/views/pages/projects/project-view/project-tasks'
import Projectdetails from '@/views/pages/projects/project-view/project-details'
import Taskright from '@/views/pages/projects/tasks/tasks-right'
import Taskleft from '@/views/pages/projects/tasks/tasks-left'
import Kanbanboard from '@/views/pages/projects/task-board/kanban-board'
import Clientsearch from '@/views/pages/pages/pages/search/clientsearch'
import Usersearch from '@/views/pages/pages/pages/search/userssearch'
import Projectsearch from '@/views/pages/pages/pages/search/projectsearch'
import Basicinformation from '@/views/pages/performance/performance/performance/basicinformation'
import Personalexcellence from '@/views/pages/performance/performance/performance/personalexcellence'
import Commentsrole from '@/views/pages/performance/performance/performance/commentsrole'
import Appraisee from '@/views/pages/performance/performance/performance/appraisee'
import Goals from '@/views/pages/performance/performance/performance/goals'
import Professional from '@/views/pages/performance/performance/performance/professional'
import Professionalgoals from '@/views/pages/performance/performance/performance/professionalgoals'
import PerformanceTraining from '@/views/pages/performance/performance/performance/performancetraining'
import Generalcomment from '@/views/pages/performance/performance/performance/generalcomment'
import Ro from '@/views/pages/performance/performance/performance/ro'
import Performancetable from '@/views/pages/performance/performance/performance/performancetable'
import Okr from '@/views/pages/administration/settings/performance-setting/okr'
import Compentency from '@/views/pages/administration/settings/performance-setting/compentency'
import Smartgoal from '@/views/pages/administration/settings/performance-setting/smartgoal'
import SubscriptionsMonthly from '@/views/pages/pages/subscriptions/subscriptions-company/subscriptions-monthly.vue'
import SubscriptionsAnnual from '@/views/pages/pages/subscriptions/subscriptions-company/subscriptions-annual.vue'
import Rightchat from '@/views/pages/employees/tickets/ticket-view/rightchat'
import Laptop_Issue from '@/views/pages/employees/tickets/ticket-view/laptop-issue'
import Apptitude from "@/views/pages/administration/jobs/user-dashboard/interviewing/apptitude"
import Schedule from '@/views/pages/administration/jobs/user-dashboard/interviewing/schedule'
import ChatLeft from '@/views/pages/apps/chat/chat-left.vue'
import TaskView from '@/views/pages/projects/tasks/tasks-view'
import VoiceCallChat from '@/views/pages/apps/calls/voice-call-chat'
import VideoCallChat from '@/views/pages/apps/calls/video-call-chat'
import Inputsize from '@/views/pages/uiinterface/form/formbasic/Inputsize.vue'
import Addressform from '@/views/pages/uiinterface/form/formhorizontal/Addressform'
import Basicform from '@/views/pages/uiinterface/form/formhorizontal/Basicform'
import Personaldetail from '@/views/pages/uiinterface/form/formhorizontal/Personaldetail'
import Personalinformation from '@/views/pages/uiinterface/form/formhorizontal/Personalinformation'
import Contexttable from '@/views/pages/uiinterface/table/Contexttable'
import LightBoxOne from '@/views/pages/uiinterface/baseui/lightbox/lightboxone.vue'
import LightBoxTwo from '@/views/pages/uiinterface/baseui/lightbox/lightboxtwo.vue'
import Bordered from '@/views/pages/uiinterface/baseui/accordions/bordered.vue'
import BorderedJustified from '@/views/pages/uiinterface/baseui/accordions/borderedjustified.vue'
import Default from '@/views/pages/uiinterface/baseui/accordions/default.vue'
import Justified from '@/views/pages/uiinterface/baseui/accordions/justified.vue'
import Questions from '@/views/pages/uiinterface/baseui/accordions/questions.vue'
import Vakal from '@/views/pages/uiinterface/baseui/accordions/vakal.vue'
import Verticalleft from '@/views/pages/uiinterface/baseui/accordions/verticalleft.vue'
import VerticalRight from '@/views/pages/uiinterface/baseui/accordions/verticalright.vue'
import Gradientbadges from '@/views/pages/uiinterface/baseui/badges/gradientbadges.vue'
import BadgesOne from '@/views/pages/uiinterface/baseui/badges/badgesone.vue'
import Pillbadges from '@/views/pages/uiinterface/baseui/badges/pillbadges.vue'
import Carouselthree from '@/views/pages/uiinterface/baseui/carousel/carouselthree.vue'
import Carouseltwo from '@/views/pages/uiinterface/baseui/carousel/carouseltwo.vue'
import Carouselone from '@/views/pages/uiinterface/baseui/carousel/carouselone.vue'
import Bootstrapmodal from '@/views/pages/uiinterface/baseui/modal/bootstrapmodal.vue'
import Custommodal from '@/views/pages/uiinterface/baseui/modal/custommodal.vue'
import Modelalert from '@/views/pages/uiinterface/baseui/modal/modalalert.vue'
import Multiplemodal from '@/views/pages/uiinterface/baseui/modal/multiplemodal.vue'
import Pagemodals from '@/views/pages/uiinterface/baseui/modal/pagemodals.vue'
import Positionmodal from '@/views/pages/uiinterface/baseui/modal/positionmodal.vue'
import Staticmodal from '@/views/pages/uiinterface/baseui/modal/staticmodal.vue'
import Backdrop from '@/views/pages/uiinterface/baseui/offcanvas/backdrop.vue'
import Offcanvasone from '@/views/pages/uiinterface/baseui/offcanvas/offcanvasone.vue'
import Placement from '@/views/pages/uiinterface/baseui/offcanvas/placement.vue'
import Largeprogress from '@/views/pages/uiinterface/baseui/progress/largeprogress.vue'
import Defaultprogress from '@/views/pages/uiinterface/baseui/progress/defaultprogress.vue'
import Mediumprogress from '@/views/pages/uiinterface/baseui/progress/mediumprogress.vue'
import Smallprogress from '@/views/pages/uiinterface/baseui/progress/smallprogress.vue'
import Extrasmallprogress from '@/views/pages/uiinterface/baseui/progress/extrasmallprogress.vue'
import Basictab from '@/views/pages/uiinterface/baseui/tab/basictab.vue'
import Bottomtab from '@/views/pages/uiinterface/baseui/tab/bottomtab.vue'
import Linetab from '@/views/pages/uiinterface/baseui/tab/linetab.vue'
import Roundtab from '@/views/pages/uiinterface/baseui/tab/roundtab.vue'
import Solidtab from '@/views/pages/uiinterface/baseui/tab/solidtab.vue'

// *************** Model Component ***************
import ContactModel from '@/components/model/contacts-model.vue'
import EmployeeModel from '@/components/model/employee-model.vue'
import HolidayModel from '@/components/model/holiday-model.vue'
import LeavesAdminModel from '@/components/model/leaves-admin-model.vue'
import AttendanceModel from '@/components/model/attendance-model.vue'
import DesignationModel from '@/components/model/designation-model.vue'
import TimesheetModel from '@/components/model/timesheet-model.vue'
import ShiftListModel from '@/components/model/shift-list-model.vue'
import OverTimeModel from '@/components/model/overtime-model.vue'
import Rolemodels from '@/components/model/rolemodels.vue'
import LeaveModel from '@/components/model/leavemodel.vue'
import JobModel from '@/components/model/jobmodel.vue'
import Candidatesmodel from '@/components/model/candidatesmodel.vue'
import Experiancemodel from '@/components/model/experiancemodel.vue'
import Questionmodel from '@/components/model/questionmodel.vue'
import Schedulemodel from '@/components/model/schedulemodel.vue'
import Assetmodel from '@/components/model/assetmodel.vue'
import Submodels from '@/components/model/submodels.vue'
import DeleteModel from '@/components/model/delete-model.vue'
import Expensesmodel from '@/components/model/expenses-model.vue'
import Providentfundmodel from '@/components/model/providentfund-model.vue'
import Taxesmodel from '@/components/model/taxes-model.vue'
import Categoriesmodel from '@/components/model/categories-model.vue'
import SubCategorymodel from '@/components/model/subcategory-model.vue'
import Budgetsmodel from '@/components/model/budgets-model.vue'
import Budgetexpensesmodel from '@/components/model/budgetexpenses-model.vue'
import Budgetrevenuesmodel from '@/components/model/budgetrevenues-model.vue'
import Salarymodel from '@/components/model/salary-model.vue'
import Payrollitemmodel from '@/components/model/payrollitems-model.vue'
import Policiesmodel from '@/components/model/policies-model.vue'
import ClientsListmodel from '@/components/model/clients-list-model.vue'
import ProjectListmodel from '@/components/model/project-list-model.vue'
import Ticketsmodel from '@/components/model/tickets-model.vue'
import ProjectViewmodel from '@/components/model/project-view-model.vue'
import Tasksmodel from '@/components/model/tasks-model.vue'
import Taskboardmodel from '@/components/model/task-board-model.vue'
import Terminationmodel from '@/components/model/terminationmodel.vue'
import Resignationmodel from '@/components/model/resignationmodel.vue'
import Promotionmodel from '@/components/model/promotionmodel.vue'
import Training_type_model from '@/components/model/training-type-model.vue'
import Trainer_model from '@/components/model/trainer-model.vue'
import Training_model from '@/components/model/training-model.vue'
import Goaltype_model from '@/components/model/goaltype-model.vue'
import Goaltracking_Model from '@/components/model/goaltracking-model.vue'
import Appraisal_Add_Model from '@/components/model/appraisal-add-model.vue'
import Appraisal_Edit_Model from '@/components/model/appraisal-edit-model.vue'
import Indicator_Add_Model from '@/components/model/indicator-add-model.vue'
import Indicator_Edit_Model from '@/components/model/indicator-edit-model.vue'
import ProfileModal from '@/components/model/profilemodal.vue'
import ChatModal from '@/components/model/chat-model.vue'
import Leave_Settings_model from '@/components/model/leave-settings-model.vue'
import Ticket_View_Model from '@/components/model/ticket-view-model'
import DepartmentsModel from '@/components/model/departments-model'
import ClientModel from '@/components/model/client-model.vue'
import EditScheduleModel from '@/components/model/edit-schedule-model.vue'
import Interviewing_Model from '@/components/model/interviewing-model'
import Subscribedcompaniesmodal from '@/components/model/subscribedcompaniesmodal'
import QuestionsModel from '@/components/model/questions-model.vue'

import {LoadingPlugin} from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import swal from 'sweetalert2';

window.Swal = swal;

const app = createApp(App)

// *************** Components ***************
app.component('breadcrumb', Breadcrumb)
app.component('dashboardheader', DashboardHeader)
app.component('user-dashboard-header', UserDashboardHeader)
app.component('event-header', EventHeader)
app.component('inbox-header', InboxHeader)
app.component('user-dashboard-tabset', UserDashboardTabset)
app.component('job-filter', JobFilter)
app.component('inbox-sidebar', InboxSidebar)
app.component('employees-header', EmployeesHeader)
app.component('search-filter', SearchFilter)
app.component('holiday-header', HolidayHeader)
app.component('leaves-admin-header', LeavesAdminHeader)
app.component('singlebreadcrumb', Singlebreadcrumb)
app.component('leaves-search-filter', LeavesSearchFilter)
app.component('shift-header', ShiftHeader)
app.component('sales-filter', SalesFilter)
app.component('sales-header', SalesHeader)
app.component('expenses-filter', ExpensesFilter)
app.component('expense-reports-filter', ExpenseReportsFilter)
app.component('payments-reports-filter', PaymentsReportsFilter)
app.component('project-reports-filter', ProjectReportsFilter)
app.component('user-reports-filter', UserReportsFilter)
app.component('employee-reports-filter', EmployeeReportsFilter)
app.component('payslip-reports-filter', PayslipReportsFilter)
app.component('attendance-reports-filter', AttendanceReportsFilter)
app.component('clients-header', ClientsHeader)
app.component('clients-filter', ClientsFilter)
app.component('projects-header', ProjectsHeader)
app.component('projects-filter', ProjectsFilter)
app.component('tickets-filter', TicketsFilter)
app.component('project-view-header', ProjectViewHeader)
app.component('jobbreadcrumb', Jobbreadcrumb)
app.component('attendance-filter', AttendanceFilter)
app.component('attendance-employee-filter', AttendanceEmployeeFilter)
app.component('user-dashboard-filter', UserDashboardFilter)
app.component('shift-scheduling-filter', ShiftSchedulingFilter)
app.component('salary-filter', SalaryFilter)
app.component('reports-header', ReportHeader)
app.component('users-filter', UsersFilter)
app.component('elementbreadcrumb',ElementBreadcrumb)

// *************** Layout Component ***************
app.component('layout-header', Header)
app.component('layout-sidebar', Sidebar)
app.component('two-col-sidebar', TwoColSidebar)
app.component('chat-sidebar', ChatSidebar)
app.component('settingssidebar', Settingssidebar)
app.component('tasks-sidebar', Taskssidebar)
app.component('job-header', JobHeader)
app.component('sidesettings', SideSettings)
app.component('horizontal-header', HorizontalHeader)

// *************** Page Component ***************
app.component('admin-payments', AdminPayments)
app.component('admin-invoices', AdminInvoices)
app.component('admin-charts', AdminCharts)
app.component('admin-statistics', AdminStatistics)
app.component('admin-clients', AdminClients)
app.component('admin-recent-project', AdminRecentProject)
app.component('chat-view', ChatView)
app.component('chat-right', ChatRight)
app.component('annual', Annual)
app.component('sick', Sick)
app.component('maternity', Maternity)
app.component('custom-leave', CustomLeave)
app.component('annualsub', Annualsub)
app.component('monthlysub', Monthlysub)
app.component('subscribedcompaniesmodal', Subscribedcompaniesmodal)
app.component('companylist', Companylist)
app.component('profiletab', Profiletab)
app.component('banktab', Banktab)
app.component('projectstab', Projectstab)
app.component('profilehead', Profilehead)
app.component('clientprofilehead', Clientprofilehead)
app.component('clientprofiletab', Clientprofiletab)
app.component('clienttaskstab', Clienttaskstab)
app.component('profileassets', Profileassets)
app.component('resignation-notice', Resignation_Notice)
app.component('expenses-approval', Expenses_Approval)
app.component('leave-approval', Leave_Approval)
app.component('offer-approval', Offer_Approval)
app.component('add-role', Add_role)
app.component('modeltable', Modeltable)
app.component('assetstable', Assetstable)
app.component('assetsearch', Assetsearch)
app.component('additions-tab', Additionstab)
app.component('overtime-tab', Overtimetab)
app.component('deductions-tab', Deductionstab)
app.component('project-tasks', ProjectTasks)
app.component('project-details', Projectdetails)
app.component('tasks-right', Taskright)
app.component('tasks-left', Taskleft)
app.component('kanban-board', Kanbanboard)
app.component('clientsearch', Clientsearch)
app.component('userssearch', Usersearch)
app.component('projectsearch', Projectsearch)
app.component('personalexcellence', Personalexcellence)
app.component('basicinformation', Basicinformation)
app.component('commentsrole', Commentsrole)
app.component('appraisee', Appraisee)
app.component('goals', Goals)
app.component('professional', Professional)
app.component('professionalgoals', Professionalgoals)
app.component('performancetraining', PerformanceTraining)
app.component('generalcomment', Generalcomment)
app.component('ro', Ro)
app.component('performancetable', Performancetable)
app.component('smartgoal', Smartgoal)
app.component('okr', Okr)
app.component('compentency', Compentency)
app.component('subscriptions-monthly', SubscriptionsMonthly)
app.component('subscriptions-annual', SubscriptionsAnnual)
app.component('laptop-issue', Laptop_Issue)
app.component('rightchat', Rightchat)
app.component('apptitude', Apptitude)
app.component('schedule', Schedule)
app.component('chat-left', ChatLeft)
app.component('tasks-view', TaskView)
app.component('voice-call-chat', VoiceCallChat)
app.component('video-call-chat', VideoCallChat)
app.component('lightboxone',LightBoxOne)
app.component('lightboxtwo',LightBoxTwo)
app.component('bordered',Bordered)
app.component('borderedjustified',BorderedJustified)
app.component('default',Default)
app.component('justified',Justified)
app.component('questions',Questions)
app.component('vakal',Vakal)
app.component('verticalleft',Verticalleft)
app.component('verticalright',VerticalRight)
app.component('gradientbadges',Gradientbadges)
app.component('badgesone',BadgesOne)
app.component('pillbadges',Pillbadges)
app.component('carouselone',Carouselone)
app.component('carouseltwo',Carouseltwo)
app.component('carouselthree',Carouselthree)
app.component('bootstrapmodal',Bootstrapmodal)
app.component('custommodal',Custommodal)
app.component('modalalert',Modelalert)
app.component('multiplemodal',Multiplemodal)
app.component('pagemodals',Pagemodals)
app.component('positionmodal',Positionmodal)
app.component('staticmodal',Staticmodal)
app.component('backdrop',Backdrop)
app.component('placement',Placement)
app.component('offcanvasone',Offcanvasone)
app.component('smallprogress',Smallprogress)
app.component('extrasmallprogress',Extrasmallprogress)
app.component('mediumprogress',Mediumprogress)
app.component('defaultprogress',Defaultprogress)
app.component('largeprogress',Largeprogress)
app.component('basictab',Basictab)
app.component('bottomtab',Bottomtab)
app.component('linetab',Linetab)
app.component('roundtab',Roundtab)
app.component('solidtab',Solidtab)
app.component('inputsize', Inputsize)
app.component('personaldetail', Personaldetail)
app.component('personalinformation', Personalinformation)
app.component('addressform', Addressform)
app.component('basicform', Basicform)
app.component('contexttable', Contexttable)

// *************** Model Component ***************
app.component('contacts-model', ContactModel)
app.component('employee-model', EmployeeModel)
app.component('holiday-model', HolidayModel)
app.component('leaves-admin-model', LeavesAdminModel)
app.component('attendance-model', AttendanceModel)
app.component('designation-model', DesignationModel)
app.component('timesheet-model', TimesheetModel)
app.component('shift-list-model', ShiftListModel)
app.component('overtime-model', OverTimeModel)
app.component('rolemodels', Rolemodels)
app.component('leavemodel', LeaveModel)
app.component('submodels', Submodels)
app.component('jobmodel', JobModel)
app.component('assetmodel', Assetmodel)
app.component('candidatesmodel', Candidatesmodel)
app.component('experiancemodel', Experiancemodel)
app.component('questionmodel', Questionmodel)
app.component('schedulemodel', Schedulemodel)
app.component('delete-model', DeleteModel)
app.component('expenses-model', Expensesmodel)
app.component('providentfund-model', Providentfundmodel)
app.component('taxes-model', Taxesmodel)
app.component('categories-model', Categoriesmodel)
app.component('subcategory-model', SubCategorymodel)
app.component('budgets-model', Budgetsmodel)
app.component('budgetexpenses-model', Budgetexpensesmodel)
app.component('budgetrevenues-model', Budgetrevenuesmodel)
app.component('salary-model', Salarymodel)
app.component('payrollitem-model', Payrollitemmodel)
app.component('policies-model', Policiesmodel)
app.component('clients-list-model', ClientsListmodel)
app.component('project-list-model', ProjectListmodel)
app.component('tickets-model', Ticketsmodel)
app.component('project-view-model', ProjectViewmodel)
app.component('tasks-model', Tasksmodel)
app.component('task-board-model', Taskboardmodel)
app.component('terminationmodel', Terminationmodel)
app.component('resignationmodel', Resignationmodel)
app.component('promotionmodel', Promotionmodel)
app.component('training-type-model', Training_type_model)
app.component('trainer-model', Trainer_model)
app.component('training-model', Training_model)
app.component('goaltype-model', Goaltype_model)
app.component('goaltracking-model', Goaltracking_Model)
app.component('appraisal-add-model', Appraisal_Add_Model)
app.component('appraisal-edit-model', Appraisal_Edit_Model)
app.component('indicator-add-model', Indicator_Add_Model)
app.component('indicator-edit-model', Indicator_Edit_Model)
app.component('profilemodal', ProfileModal)
app.component('chat-model', ChatModal)
app.component('leave-settings-model', Leave_Settings_model)
app.component('ticket-view-model', Ticket_View_Model)
app.component('departments-model', DepartmentsModel)
app.component('client-model', ClientModel)
app.component('edit-schedule-model', EditScheduleModel)
app.component('interviewing-model', Interviewing_Model)
app.component('questions-model', QuestionsModel)

app.component('vue3-autocounter', Vue3Autocounter)

app.component('datepicker', DatePicker)
app.component('vue-select', VueSelect)
app.component(VueFeather.name, VueFeather);
app.component('SummernoteEditor', SummernoteEditor)


import axios from "axios";

//axios.defaults.baseURL = "https://dev.peoplekrafthr.com/api";
axios.defaults.baseURL = "http://localhost/HRSYSCODE/api";
axios.defaults.headers["content-type"] = "application/json";
//axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
//axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS, PUT, DELETE';
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'POST, GET, PUT, DELETE';

app.use(LoadingPlugin);


app.use(VueSweetalert2)
app.use(VueApexCharts)

    .use(Antd)
    .use(BootstrapVue3)
    .use(BToastPlugin)
.use(VueToast, {
        position: "top-right",
      });
app.use(FlagIcon)
app.use(router).mount('#app');

