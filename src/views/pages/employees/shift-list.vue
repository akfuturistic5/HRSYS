<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <!-- Page Header -->
        <shift-header
          :title="title"
          :path="path"
          :text="text"
          :text1="text1"
          :text2="text2"
          :text3="text3"
        />
        <!-- /Page Header -->

        <!-- Content Starts -->
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
                  <template v-if="column.key === 'ShiftName'">
                    <div>{{ record.ShiftName }}</div>
                  </template>
                  <template v-else-if="column.key === 'Status'">
                    <div class="text-center">
                      <div class="action-label">
                        <a
                          class="btn btn-white btn-sm btn-rounded"
                          href="javascript:void(0);"
                        >
                          <i class="fa-regular fa-circle-dot text-success"></i>
                          {{ record.Status }}
                        </a>
                      </div>
                    </div>
                  </template>
                  <template v-else-if="column.key === 'action'">
                    <div class="text-end">
                      <div class="dropdown dropdown-action">
                        <a
                          href="javascript:;"
                          class="action-icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          ><i class="material-icons">more_vert</i></a
                        >
                        <div class="dropdown-menu dropdown-menu-right">
                          <a
                            class="dropdown-item"
                            href="javascript:;"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_shift"
                            ><i class="fa-solid fa-pencil m-r-5"></i> Edit</a
                          >
                          <a
                            class="dropdown-item"
                            href="javascript:;"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_employee"
                            ><i class="fa-regular fa-trash-can m-r-5"></i>
                            Delete</a
                          >
                        </div>
                      </div>
                    </div>
                  </template>
                </template>
              </a-table>
            </div>
          </div>
        </div>
        <!-- /Content End -->
      </div>
      <!-- /Page Content -->

      
      <shift-list-model></shift-list-model>
      <edit-schedule-model></edit-schedule-model>
    </div>
    <!-- /Page Wrapper -->
  </div>
</template>

<script>
const columns = [
  {
    title: "#",
    dataIndex: "id",
    sorter: {
      compare: (a, b) => {
        a = a.id.toLowerCase();
        b = b.id.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Shift Name",
    dataIndex: "ShiftName",
    key: "ShiftName",
    sorter: {
      compare: (a, b) => {
        a = a.ShiftName.toLowerCase();
        b = b.ShiftName.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Min Start Time",
    dataIndex: "MinStartTime",
    sorter: {
      compare: (a, b) => {
        a = a.MinStartTime.toLowerCase();
        b = b.MinStartTime.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Start Time",
    dataIndex: "StartTime",
    sorter: {
      compare: (a, b) => {
        a = a.StartTime.toLowerCase();
        b = b.StartTime.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Max Start Time",
    dataIndex: "MaxStartTime",
    sorter: {
      compare: (a, b) => {
        a = a.MaxStartTime.toLowerCase();
        b = b.MaxStartTime.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Min End Time",
    dataIndex: "MinEndTime",
    sorter: {
      compare: (a, b) => {
        a = a.MinEndTime.toLowerCase();
        b = b.MinEndTime.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "End Time",
    dataIndex: "EndTime",
    sorter: {
      compare: (a, b) => {
        a = a.EndTime.toLowerCase();
        b = b.EndTime.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Max End Time",
    dataIndex: "MaxEndTime",
    sorter: {
      compare: (a, b) => {
        a = a.MaxEndTime.toLowerCase();
        b = b.MaxEndTime.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Break Time",
    dataIndex: "BreakTime",
    sorter: {
      compare: (a, b) => {
        a = a.BreakTime.toLowerCase();
        b = b.BreakTime.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "Status",
    sorter: {
      compare: (a, b) => {
        a = a.Status.toLowerCase();
        b = b.Status.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Action",
    sorter: true,
    key: "action",
  },
];
const data = [
  {
    id: "1",
    ShiftName: "10'o clock Shift",
    MinStartTime: "09:00:00 am",
    StartTime: "10:00:00 am",
    MaxStartTime: "10:30:00 am",
    MinEndTime: "06:00:00 pm",
    EndTime: "06:30:00 pm",
    MaxEndTime: "07:00:00 pm",
    BreakTime: "30 mins",
    Status: "Active",
  },
  {
    id: "2",
    ShiftName: "10:30 shift",
    MinStartTime: "10:00:00 am",
    StartTime: "10:30:00 am",
    MaxStartTime: "11:00:00 am",
    MinEndTime: "06:30:00 pm",
    EndTime: "07:00:00 pm",
    MaxEndTime: "07:30:00 pm",
    BreakTime: "45 mins",
    Status: "Active",
  },
  {
    id: "3",
    ShiftName: "Daily Rout",
    MinStartTime: "06:00:00 am",
    StartTime: "06:30:00 am",
    MaxStartTime: "07:00:00 am",
    MinEndTime: "03:00:00 pm",
    EndTime: "03:30:00 pm",
    MaxEndTime: "04:00:00 pm",
    BreakTime: "60 mins",
    Status: "Active",
  },
  {
    id: "4",
    ShiftName: "New Shift",
    MinStartTime: "06:11:00 am",
    StartTime: "06:30:00 am",
    MaxStartTime: "08:12:00 am",
    MinEndTime: "09:12:00 pm",
    EndTime: "09:30:00 pm",
    MaxEndTime: "09:45:00 pm",
    BreakTime: "45 mins",
    Status: "Active",
  },
  {
    id: "5",
    ShiftName: "Recurring Shift",
    MinStartTime: "08:30:00 am",
    StartTime: "09:00:00 am",
    MaxStartTime: "09:30:00 am",
    MinEndTime: "05:30:00 pm",
    EndTime: "06:00:00 pm",
    MaxEndTime: "06:30:00 pm",
    BreakTime: "60 mins",
    Status: "Active",
  },
];
export default {
  data() {
    return {
      columns,
      data,
      title: "Shift List",
      path: "Dashboard",
      text: "Employees",
      text1: "Shift List",
      text2: "Add Shifts",
      text3: "Assign Shifts",
    };
  },
};
</script>
