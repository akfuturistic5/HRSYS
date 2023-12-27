<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <!-- Page Header -->
        <breadcrumb :title="title" :path="path" :text="text" />
        <!-- /Page Header -->
        <!-- Search Filter -->
        <attendance-reports-filter />
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
                  <template v-if="column.key === 'ClockOut'">
                    <div :class="record.Class">{{ record.ClockOut }}</div>
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
    title: "#",
    dataIndex: "Id",
    sorter: {
      compare: (a, b) => {
        a = a.Id.toLowerCase();
        b = b.Id.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Date",
    dataIndex: "Date",
    sorter: {
      compare: (a, b) => {
        a = a.Date.toLowerCase();
        b = b.Date.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Clock In",
    dataIndex: "ClockIn",
    sorter: {
      compare: (a, b) => {
        a = a.ClockIn.toLowerCase();
        b = b.ClockIn.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Clock Out",
    dataIndex: "ClockOut",
    key: "ClockOut",
    sorter: {
      compare: (a, b) => {
        a = a.ClockOut.toLowerCase();
        b = b.ClockOut.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Work Status",
    dataIndex: "WorkStatus",
    sorter: {
      compare: (a, b) => {
        a = a.WorkStatus.toLowerCase();
        b = b.WorkStatus.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
];
const data = [
  {
    Id: "1",
    Date: "1 Jan 2023",
    ClockIn: "-",
    ClockOut: "-",
    Class: "",
    WorkStatus: "-",
  },
  {
    Id: "2",
    Date: "2 Jan 2023",
    ClockIn: "-",
    ClockOut: "-",
    Class: "",
    WorkStatus: "-",
  },
  {
    Id: "3",
    Date: "3 Jan 2023",
    ClockIn: "-",
    ClockOut: "-",
    Class: "",
    WorkStatus: "-",
  },
  {
    Id: "4",
    Date: "4 Jan 2023",
    ClockIn: "-",
    ClockOut: "Week Off",
    Class: "text-danger text-center",
    WorkStatus: "-",
  },
  {
    Id: "5",
    Date: "5 Jan 2023",
    ClockIn: "-",
    ClockOut: "Week Off",
    Class: "text-danger text-center",
    WorkStatus: "-",
  },
  {
    Id: "6",
    Date: "6 Jan 2023",
    ClockIn: "-",
    ClockOut: "-",
    WorkStatus: "-",
  },
];
export default {
  data() {
    return {
      title: "Attendance Reports",
      path: "Dashboard",
      text: "Attendance Reports",
      columns,
      data,
    };
  },
  name: "attendance-reports",
};
</script>
