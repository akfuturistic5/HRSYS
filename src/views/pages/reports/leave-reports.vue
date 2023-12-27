<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>
    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <!-- Page Header -->
        <reports-header :title="title" :path="path" :text="text" :text1="text1" />
        <!-- /Page Header -->
        <!-- Search Filter -->
        <employee-reports-filter />
        <!-- /Search Filter -->
        <div class="row">
          <div class="col-md-12">
            <div class="showentries mb-3">
              <label
                >Show
                <select>
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                entries
              </label>
            </div>
            <div class="table-responsive">
              <a-table
                class="stripped table-hover"
                :columns="columns"
                :data-source="data"
              >
                <template #bodyCell="{ column, record }">
                  <template v-if="column.key === 'name'">
                    <div class="table-avatar">
                      <router-link to="profile" class="avatar"
                        ><img
                          :src="require(`@/assets/img/profiles/${record.avatar}`)"
                          alt="User Image"
                      /></router-link>
                      <router-link to="profile"
                        >{{ record.name }} <span>{{ record.id }}</span></router-link
                      >
                    </div>
                  </template>
                  <template v-else-if="column.key === 'leaveType'">
                    <div class="text-center">
                      <button :class="record.leaveTypeClass">
                        {{ record.leaveType }}
                      </button>
                    </div>
                  </template>
                  <template v-else-if="column.key === 'numberOfDays'">
                    <div class="text-center">
                      <span :class="record.numberOfDaysClass">{{
                        record.numberOfDays
                      }}</span>
                    </div>
                  </template>
                  <template v-else-if="column.key === 'remainingLeave'">
                    <div class="text-center">
                      <span :class="record.remainingLeaveClass"
                        ><b>{{ record.remainingLeave }}</b></span
                      >
                    </div>
                  </template>
                  <template v-else-if="column.key === 'totalLeaves'">
                    <div class="text-center">
                      <span :class="record.totalLeavesClass"
                        ><b>{{ record.totalLeaves }}</b></span
                      >
                    </div>
                  </template>
                  <template v-else-if="column.key === 'totalLeaveTaken'">
                    <div class="text-center">{{ record.totalLeaveTaken }}</div>
                  </template>
                  <template v-else-if="column.key === 'leaveCarryForward'">
                    <div class="text-center">
                      {{ record.leaveCarryForward }}
                    </div>
                  </template>
                </template>
              </a-table>
            </div>
          </div>
        </div>
      </div>
      <!-- /Page Content -->
    </div>
    <!-- /Page Wrapper -->
  </div>
</template>
<script>
const columns = [
  {
    title: "Employee",
    dataIndex: "name",
    key: "name",
    sorter: {
      compare: (a, b) => {
        a = a.name.toLowerCase();
        b = b.name.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Date",
    dataIndex: "date",
    sorter: {
      compare: (a, b) => {
        a = a.date.toLowerCase();
        b = b.date.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Department",
    dataIndex: "department",
    sorter: {
      compare: (a, b) => {
        a = a.department.toLowerCase();
        b = b.department.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Leave Type",
    dataIndex: "leaveType",
    key: "leaveType",
    sorter: {
      compare: (a, b) => {
        a = a.leaveType.toLowerCase();
        b = b.leaveType.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Number Of Days",
    dataIndex: "numberOfDays",
    key: "numberOfDays",
    sorter: {
      compare: (a, b) => {
        a = a.numberOfDays.toLowerCase();
        b = b.numberOfDays.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Remaining Leave",
    dataIndex: "remainingLeave",
    key: "remainingLeave",
    sorter: {
      compare: (a, b) => {
        a = a.remainingLeave.toLowerCase();
        b = b.remainingLeave.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Total Leaves",
    dataIndex: "totalLeaves",
    key: "totalLeaves",
    sorter: {
      compare: (a, b) => {
        a = a.totalLeaves.toLowerCase();
        b = b.totalLeaves.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Total Leave Taken",
    dataIndex: "totalLeaveTaken",
    key: "totalLeaveTaken",
    sorter: {
      compare: (a, b) => {
        a = a.totalLeaveTaken.toLowerCase();
        b = b.totalLeaveTaken.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Leave Carry Forward",
    dataIndex: "leaveCarryForward",
    key: "leaveCarryForward",
    sorter: {
      compare: (a, b) => {
        a = a.leaveCarryForward.toLowerCase();
        b = b.leaveCarryForward.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
];
const data = [
  {
    name: "John Doe",
    avatar: "avatar-02.jpg",
    id: "#0001",
    date: "20 Dec 2022",
    department: "Design",
    leaveType: "Sick Leave",
    leaveTypeClass: "btn btn-outline-info btn-sm",
    numberOfDays: "05",
    numberOfDaysClass: "btn btn-danger btn-sm",
    remainingLeave: "08",
    remainingLeaveClass: "btn btn-warning btn-sm",
    totalLeaves: "20",
    totalLeavesClass: "btn btn-success btn-sm",
    totalLeaveTaken: "12",
    leaveCarryForward: "08",
  },
  {
    name: "John Smith",
    avatar: "avatar-10.jpg",
    id: "#003",
    date: "22 Dec 2022",
    department: "Android Developer",
    leaveTypeClass: "btn btn-outline-danger btn-sm",
    leaveType: "Emergency Leave",
    numberOfDaysClass: "btn btn-danger btn-sm",
    numberOfDays: "01",
    remainingLeaveClass: "btn btn-warning btn-sm",
    remainingLeave: "09",
    totalLeavesClass: "btn btn-success btn-sm",
    totalLeaves: "20",
    totalLeaveTaken: "17",
    leaveCarryForward: "03",
  },
  {
    name: "Mike Litorus",
    avatar: "avatar-05.jpg",
    id: "#004",
    date: "23 Dec 2022",
    department: "IOS Developer",
    leaveTypeClass: "btn btn-outline-info btn-sm",
    leaveType: "Sick Leave",
    numberOfDaysClass: "btn btn-danger btn-sm",
    numberOfDays: "15",
    remainingLeaveClass: "btn btn-warning btn-sm",
    remainingLeave: "05",
    totalLeavesClass: "btn btn-success btn-sm",
    totalLeaves: "20",
    totalLeaveTaken: "15",
    leaveCarryForward: "05",
  },
  {
    name: "Richard Miles",
    avatar: "avatar-09.jpg",
    id: "#0002",
    date: "21 Dec 2022",
    department: "Web Developer",
    leaveTypeClass: "btn btn-outline-warning btn-sm",
    leaveType: "Parenting Leave",
    numberOfDaysClass: "btn btn-danger btn-sm",
    numberOfDays: "03",
    remainingLeaveClass: "btn btn-warning btn-sm",
    remainingLeave: "08",
    totalLeavesClass: "btn btn-success btn-sm",
    totalLeaves: "20",
    totalLeaveTaken: "12",
    leaveCarryForward: "05",
  },
  {
    name: "Wilmer Deluna",
    avatar: "avatar-11.jpg",
    id: "#005",
    date: "24 Dec 2022",
    department: "Team Leader",
    leaveTypeClass: "btn btn-outline-info btn-sm",
    leaveType: "Sick Leave",
    numberOfDaysClass: "btn btn-danger btn-sm",
    numberOfDays: "10",
    remainingLeaveClass: "btn btn-warning btn-sm",
    remainingLeave: "07",
    totalLeavesClass: "btn btn-success btn-sm",
    totalLeaves: "20",
    totalLeaveTaken: "18",
    leaveCarryForward: "2",
  },
];
export default {
  data() {
    return {
      title: "Leave Report",
      path: "Dashboard",
      text: "Leave Report",
      text1: "PDF",
      columns,
      data,
    };
  },
  name: "leave-reports",
};
</script>
