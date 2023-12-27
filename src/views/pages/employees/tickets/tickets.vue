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
        <div class="row">
          <div class="col-md-12">
            <div class="card-group m-b-30">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex justify-content-between mb-3">
                    <div>
                      <span class="d-block">New Tickets</span>
                    </div>
                    <div>
                      <span class="text-success">+10%</span>
                    </div>
                  </div>
                  <h3 class="mb-3">112</h3>
                  <div class="progress height-five mb-2">
                    <div
                      class="progress-bar bg-primary w-70"
                      role="progressbar"
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-body">
                  <div class="d-flex justify-content-between mb-3">
                    <div>
                      <span class="d-block">Solved Tickets</span>
                    </div>
                    <div>
                      <span class="text-success">+12.5%</span>
                    </div>
                  </div>
                  <h3 class="mb-3">70</h3>
                  <div class="progress height-five mb-2">
                    <div
                      class="progress-bar bg-primary w-70"
                      role="progressbar"
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-body">
                  <div class="d-flex justify-content-between mb-3">
                    <div>
                      <span class="d-block">Open Tickets</span>
                    </div>
                    <div>
                      <span class="text-danger">-2.8%</span>
                    </div>
                  </div>
                  <h3 class="mb-3">100</h3>
                  <div class="progress height-five mb-2">
                    <div
                      class="progress-bar bg-primary w-70"
                      role="progressbar"
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-body">
                  <div class="d-flex justify-content-between mb-3">
                    <div>
                      <span class="d-block">Pending Tickets</span>
                    </div>
                    <div>
                      <span class="text-danger">-75%</span>
                    </div>
                  </div>
                  <h3 class="mb-3">125</h3>
                  <div class="progress height-five mb-2">
                    <div
                      class="progress-bar bg-primary w-70"
                      role="progressbar"
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <tickets-filter />
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
                entries</label
              >
            </div>
            <div class="table-responsive">
              <a-table
                class="stripped table-hover"
                :columns="columns"
                :data-source="data"
              >
                <template #bodyCell="{ column, record }">
                  <template v-if="column.key === 'TicketId'">
                    <router-link to="ticket-view">{{ record.TicketId }}</router-link>
                  </template>
                  <template v-else-if="column.key === 'AssignedStaff'">
                    <div class="table-avatar">
                      <router-link class="avatar avatar-xs" to="profile"
                        ><img
                          :src="require(`@/assets/img/profiles/${record.Image}`)"
                          alt="User Image"
                      /></router-link>
                      <a href="javascript:void(0);">{{ record.AssignedStaff }}</a>
                    </div>
                  </template>

                  <template v-else-if="column.key === 'Priority'">
                    <div class="dropdown action-label">
                      <a
                        class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                        href="javascript:void(0);"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        ><i :class="record.PriorityClass"></i>
                        {{ record.Priority }}
                      </a>
                      <div class="dropdown-menu dropdown-menu-right">
                        <a class="dropdown-item" href="javascript:void(0);"
                          ><i class="fa-regular fa-circle-dot text-danger"></i> High</a
                        >
                        <a class="dropdown-item" href="javascript:void(0);"
                          ><i class="fa-regular fa-circle-dot text-warning"></i> Medium</a
                        >
                        <a class="dropdown-item" href="javascript:void(0);"
                          ><i class="fa-regular fa-circle-dot text-success"></i> Low</a
                        >
                      </div>
                    </div>
                  </template>
                  <template v-else-if="column.key === 'Status'">
                    <div class="dropdown action-label">
                      <a
                        class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                        href="javascript:void(0);"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i :class="record.StatusClass"></i>
                        {{ record.Status }}
                      </a>
                      <div class="dropdown-menu dropdown-menu-right">
                        <a class="dropdown-item" href="javascript:void(0);"
                          ><i class="fa-regular fa-circle-dot text-info"></i> Open</a
                        >
                        <a class="dropdown-item" href="javascript:void(0);"
                          ><i class="fa-regular fa-circle-dot text-info"></i> Reopened</a
                        >
                        <a class="dropdown-item" href="javascript:void(0);"
                          ><i class="fa-regular fa-circle-dot text-danger"></i> On Hold</a
                        >
                        <a class="dropdown-item" href="javascript:void(0);"
                          ><i class="fa-regular fa-circle-dot text-success"></i> Closed</a
                        >
                        <a class="dropdown-item" href="javascript:void(0);"
                          ><i class="fa-regular fa-circle-dot text-success"></i> In
                          Progress</a
                        >
                        <a class="dropdown-item" href="javascript:void(0);"
                          ><i class="fa-regular fa-circle-dot text-danger"></i>
                          Cancelled</a
                        >
                      </div>
                    </div>
                  </template>
                  <template v-else-if="column.key === 'Actions'">
                    <div class="dropdown dropdown-action">
                      <a
                        href="javascript:void(0);"
                        class="action-icon dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        ><i class="material-icons">more_vert</i></a
                      >
                      <div class="dropdown-menu dropdown-menu-right">
                        <a
                          class="dropdown-item"
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_ticket"
                          ><i class="fa-solid fa-pencil m-r-5"></i> Edit</a
                        >
                        <a
                          class="dropdown-item"
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_ticket"
                          ><i class="fa-regular fa-trash-can m-r-5"></i> Delete</a
                        >
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
      <tickets-model />
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
    title: "Ticket Id",
    dataIndex: "TicketId",
    key: "TicketId",
    sorter: {
      compare: (a, b) => {
        a = a.TicketId.toLowerCase();
        b = b.TicketId.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Ticket Subject",
    dataIndex: "TicketSubject",
    sorter: {
      compare: (a, b) => {
        a = a.TicketSubject.toLowerCase();
        b = b.TicketSubject.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Assigned Staff",
    dataIndex: "AssignedStaff",
    key: "AssignedStaff",
    sorter: {
      compare: (a, b) => {
        a = a.AssignedStaff.toLowerCase();
        b = b.AssignedStaff.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Created Date",
    dataIndex: "CreatedDate",
    sorter: {
      compare: (a, b) => {
        a = a.CreatedDate.toLowerCase();
        b = b.CreatedDate.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Last Reply",
    dataIndex: "LastReply",
    sorter: {
      compare: (a, b) => {
        a = a.LastReply.toLowerCase();
        b = b.LastReply.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Priority",
    dataIndex: "Priority",
    key: "Priority",
    sorter: {
      compare: (a, b) => {
        a = a.Priority.toLowerCase();
        b = b.Priority.toLowerCase();
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
    title: "Actions",
    dataIndex: "Actions",
    key: "Actions",
    sorter: true,
  },
];
const data = [
  {
    id: "1",
    TicketId: "#TKT-0001",
    TicketSubject: "Laptop Issue",
    AssignedStaff: "John Smith",
    CreatedDate: "5 Jan 2023 07:21 AM",
    LastReply: "5 Jan 2023 11.12 AM",
    Priority: "High",
    PriorityClass: "fa-regular fa-circle-dot text-danger",
    Status: "New",
    StatusClass: "fa-regular fa-circle-dot text-danger",
    Image: "avatar-10.jpg",
  },
  {
    id: "2",
    TicketId: "#TKT-0001",
    TicketSubject: "Internet Issue",
    AssignedStaff: "Catherine Manseau",
    CreatedDate: "5 Jan 2023 07:21 AM",
    LastReply: "5 Jan 2023 11.12 AM",
    Priority: "Medium",
    PriorityClass: "fa-regular fa-circle-dot text-warning",
    Status: "Reopened",
    StatusClass: "fa-regular fa-circle-dot text-info",
    Image: "avatar-08.jpg",
  },
];
export default {
  data() {
    return {
      title: "Tickets",
      path: "Dashboard",
      text: "Tickets",
      text1: "Add Ticket",
      columns,
      data,
    };
  },
  name: "tickets",
};
</script>
