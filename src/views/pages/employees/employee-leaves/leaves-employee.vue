<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <!-- Page Header -->
        <leaves-admin-header :title="title" :path="path" :text="text" :text1="text1" />
        <!-- /Page Header -->

        <!-- Leave Statistics -->
        <div class="row">
          <div class="col-md-3">
            <div class="stats-info">
              <h6>Annual Leave</h6>
              <h4>12</h4>
            </div>
          </div>
          <div class="col-md-3">
            <div class="stats-info">
              <h6>Medical Leave</h6>
              <h4>3</h4>
            </div>
          </div>
          <div class="col-md-3">
            <div class="stats-info">
              <h6>Other Leave</h6>
              <h4>4</h4>
            </div>
          </div>
          <div class="col-md-3">
            <div class="stats-info">
              <h6>Remaining Leave</h6>
              <h4>5</h4>
            </div>
          </div>
        </div>
        <!-- /Leave Statistics -->

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
                  <template v-if="column.key === 'Status'">
                    <div class="text-center">
                      <div class="action-label">
                        <a
                          class="btn btn-white btn-sm btn-rounded"
                          href="javascript:void(0);"
                        >
                          <i :class="record.Class"></i>
                          {{ record.Status }}
                        </a>
                      </div>
                    </div>
                  </template>
                  <template v-if="column.key === 'Approvedby'">
                    <h2 class="table-avatar">
                      <router-link to="profile" class="avatar avatar-xs"
                        ><img
                          :src="require(`@/assets/img/profiles/${record.Image}`)"
                          alt="User Image"
                      /></router-link>
                      <a href="javascript:;">{{ record.Approvedby }}</a>
                    </h2>
                  </template>
                  <template v-if="column.key === 'action'">
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
                            data-bs-target="#edit_leave"
                            ><i class="fa-solid fa-pencil m-r-5"></i> Edit</a
                          >
                          <a
                            class="dropdown-item"
                            href="javascript:;"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_approve"
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

      <leaves-admin-model></leaves-admin-model>
    </div>
    <!-- /Page Wrapper -->
    <terminationmodel></terminationmodel>
  </div>
</template>

<script>
const columns = [
  {
    title: "Leave Type",
    dataIndex: "LeaveType",
    sorter: {
      compare: (a, b) => {
        a = a.LeaveType.toLowerCase();
        b = b.LeaveType.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "From",
    dataIndex: "From",
    sorter: {
      compare: (a, b) => {
        a = a.From.toLowerCase();
        b = b.From.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "To",
    dataIndex: "To",
    sorter: {
      compare: (a, b) => {
        a = a.To.toLowerCase();
        b = b.To.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "No of Days",
    dataIndex: "NoofDays",
    sorter: {
      compare: (a, b) => {
        a = a.NoofDays.toLowerCase();
        b = b.NoofDays.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Reason",
    dataIndex: "Reason",
    sorter: {
      compare: (a, b) => {
        a = a.Reason.toLowerCase();
        b = b.Reason.toLowerCase();
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
    title: "Approved by",
    dataIndex: "Approvedby",
    key: "Approvedby",
    sorter: {
      compare: (a, b) => {
        a = a.Approvedby.toLowerCase();
        b = b.Approvedby.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Action",
    sorter: true,
    key: "action",
    text: "end",
  },
];

const data = [
  {
    LeaveType: "Casual Leave",
    From: "8 Mar 2023",
    To: "9 Mar 2023",
    NoofDays: "2 days",
    Reason: "Going to Hospital",
    Status: "New",
    Class: "fa-regular fa-circle-dot text-purple",
    Image: "avatar-09.jpg",
    Approvedby: "Richard Miles",
  },
  {
    LeaveType: "Medical Leave",
    From: "27 Feb 2023",
    To: "27 Feb 2023",
    NoofDays: "1 day",
    Reason: "Going to Hospital",
    Status: "Approved",
    Class: "fa-regular fa-circle-dot text-success",
    Image: "avatar-09.jpg",
    Approvedby: "Richard Miles",
  },
  {
    LeaveType: "LOP",
    From: "24 Feb 2023",
    To: "25 Feb 2023",
    NoofDays: "2 days",
    Reason: "Personnal",
    Status: "Approved",
    Class: "fa-regular fa-circle-dot text-success",
    Image: "avatar-09.jpg",
    Approvedby: "Richard Miles",
  },
  {
    LeaveType: "Paternity Leave",
    From: "13 Feb 2023",
    To: "17 Feb 2023",
    NoofDays: "5 days",
    Reason: "Going to Hospital",
    Status: "Declined",
    Class: "fa-regular fa-circle-dot text-danger",
    Image: "avatar-09.jpg",
    Approvedby: "Richard Miles",
  },
  {
    LeaveType: "Casual Leave",
    From: "30 Jan 2023",
    To: "30 Jan 2023",
    NoofDays: "Second Half",
    Reason: "Going to Hospital",
    Status: "New",
    Class: "fa-regular fa-circle-dot text-purple",
    Image: "avatar-09.jpg",
    Approvedby: "Richard Miles",
  },
  {
    LeaveType: "Hospitalisation",
    From: "15 Jan 2023",
    To: "25 Jan 2023",
    NoofDays: "10 days",
    Reason: "Going to Hospital",
    Status: "Approved",
    Class: "fa-regular fa-circle-dot text-success",
    Image: "avatar-09.jpg",
    Approvedby: "Richard Miles",
  },
  {
    LeaveType: "Casual Leave",
    From: "13 Jan 2023",
    To: "14 Jan 2023",
    NoofDays: "2 days",
    Reason: "Going to Hospital",
    Status: "Approved",
    Class: "fa-regular fa-circle-dot text-success",
    Image: "avatar-09.jpg",
    Approvedby: "Richard Miles",
  },
  {
    LeaveType: "Casual Leave",
    From: "10 Jan 2023",
    To: "10 Jan 2023",
    NoofDays: "First Half",
    Reason: "Going to Hospital",
    Status: "Declined",
    Class: "fa-regular fa-circle-dot text-danger",
    Image: "avatar-09.jpg",
    Approvedby: "Richard Miles",
  },
];
export default {
  data() {
    return {
      columns,
      data,
      title: "Leaves",
      path: "Dashboard",
      text: "Leaves",
      text1: "Add Leave",
    };
  },
};
</script>
