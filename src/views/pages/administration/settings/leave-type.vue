<template>
  <div class="main-wrapper">
    <settingssidebar></settingssidebar>
    <layout-header></layout-header>
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <!-- Page Header -->
        <inbox-header :title="title" :path="path" :text="text" :text1="text1" />
        <!-- /Page Header -->

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
              <a-table :columns="columns" :data-source="data">
                <template #bodyCell="{ column, record }">
                  <template v-if="column.key === 'LeaveType'">
                    <td>{{ record.LeaveType }}</td>
                  </template>
                  <template v-else-if="column.key === 'Status'">
                    <div class="dropdown action-label">
                      <a
                        class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                        href="javascript:;"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i :class="record.Class"></i> {{ record.Status }}
                      </a>
                      <div class="dropdown-menu dropdown-menu-right">
                        <a href="javascript:;" class="dropdown-item"
                          ><i class="fa-regular fa-circle-dot text-success"></i> Active</a
                        >
                        <a href="javascript:;" class="dropdown-item"
                          ><i class="fa-regular fa-circle-dot text-danger"></i>
                          Inactive</a
                        >
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
                            data-bs-target="#edit_leavetype"
                            ><i class="fa-solid fa-pencil m-r-5"></i> Edit</a
                          >
                          <a
                            class="dropdown-item"
                            href="javascript:;"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_leavetype"
                            ><i class="fa-regular fa-trash-can m-r-5"></i> Delete</a
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
      </div>
      <!-- /Page Content -->
    </div>
  </div>
  <leavemodel></leavemodel>
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
    title: "Leave Type",
    dataIndex: "LeaveType",
    key: "LeaveType",
    sorter: {
      compare: (a, b) => {
        a = a.LeaveType.toLowerCase();
        b = b.LeaveType.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Leave Days",
    dataIndex: "LeaveDays",
    sorter: {
      compare: (a, b) => {
        a = a.LeaveDays.toLowerCase();
        b = b.LeaveDays.toLowerCase();
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
    key: "action",
    sorter: true,
    class: "text-end",
  },
];
const data = [
  {
    id: "1",
    LeaveType: "Casual Leave",
    LeaveDays: "12 Days",
    Status: "Active",
    Class: "fa-regular fa-circle-dot text-success",
    Action: "more_vert",
  },
  {
    id: "2",
    LeaveType: "Medical Leave",
    LeaveDays: "12 Days",
    Status: "Inactive",
    Class: "fa-regular fa-circle-dot text-danger",
    Action: "more_vert",
  },
  {
    id: "3",
    LeaveType: "Loss of Pay",
    LeaveDays: "-",
    Status: "Active",
    Class: "fa-regular fa-circle-dot text-success",
    Action: "more_vert",
  },
];
export default {
  data() {
    return {
      title: "Leave Type",
      path: "Dashboard",
      text: "Leave Type",
      text1: "Add Leave Type",
      columns,
      data,
    };
  },
};
</script>
