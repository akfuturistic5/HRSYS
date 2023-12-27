<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <!-- Page Header -->
        <breadcrumb :title="title" :path="path" :text="text" />
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
              <a-table
                class="stripped table-hover"
                :columns="columns"
                :data-source="data"
              >
                <template #bodyCell="{ column, record }">
                  <template v-if="column.key === 'Status'">
                    <div class="text-center">
                      <div class="dropdown action-label">
                        <a
                          class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                          href="javascript:void(0);"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i :class="record.class"></i>
                          {{ record.Status }}
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                          <a class="dropdown-item" href="javascript:void(0);"
                            ><i class="fa-regular fa-circle-dot text-info"></i> New</a
                          >
                          <a class="dropdown-item" href="javascript:void(0);"
                            ><i class="fa-regular fa-circle-dot text-success"></i>
                            Hired</a
                          >
                          <a class="dropdown-item" href="javascript:void(0);"
                            ><i class="fa-regular fa-circle-dot text-danger"></i>
                            Rejected</a
                          >
                          <a class="dropdown-item" href="javascript:void(0);"
                            ><i class="fa-regular fa-circle-dot text-danger"></i>
                            Interviewed</a
                          >
                        </div>
                      </div>
                    </div>
                  </template>
                  <template v-if="column.key === 'Resume'">
                    <a href="javascript:void(0);" class="btn btn-sm btn-primary"
                      ><i class="fa-solid fa-download"></i> {{ record.Resume }}</a
                    >
                  </template>
                  <template v-if="column.key === 'action'">
                    <div class="text-end">
                      <div class="dropdown dropdown-action">
                        <a
                          href="javascript:void(0);"
                          class="action-icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          ><i class="material-icons">{{ record.Actions }}</i></a
                        >
                        <div class="dropdown-menu dropdown-menu-right">
                          <a class="dropdown-item" href="javascript:void(0);"
                            ><i class="fa-regular fa-clock m-r-5"></i> Schedule
                            Interview</a
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
    title: "Name",
    dataIndex: "Name",
    sorter: {
      compare: (a, b) => {
        a = a.Name.toLowerCase();
        b = b.Name.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Email",
    dataIndex: "Email",
    sorter: {
      compare: (a, b) => {
        a = a.Email.toLowerCase();
        b = b.Email.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Phone",
    dataIndex: "Phone",
    sorter: {
      compare: (a, b) => {
        a = a.Phone.toLowerCase();
        b = b.Phone.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Apply Date",
    dataIndex: "ApplyDate",
    sorter: {
      compare: (a, b) => {
        a = a.ApplyDate.toLowerCase();
        b = b.ApplyDate.toLowerCase();
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
    title: "Resume",
    dataIndex: "Resume",
    key: "Resume",
    sorter: {
      compare: (a, b) => {
        a = a.Resume.toLowerCase();
        b = b.Resume.toLowerCase();
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
    Name: "John Doe",
    Email: "johndoe@example.com",
    Phone: "9876543210",
    ApplyDate: "9 Feb 2023",
    Status: "New",
    Resume: "Download",
    Actions: "more_vert",
    class: "fa-regular fa-circle-dot text-info",
  },
  {
    id: "2",
    Name: "Maria Sam",
    Email: "mariasam@example.com",
    Phone: "9876543210",
    ApplyDate: "21 Feb 2023",
    Status: "Hired",
    Resume: "Download",
    Actions: "more_vert",
    class: "fa-regular fa-circle-dot text-success",
  },
];
export default {
  data() {
    return {
      title: "Job Applicants",
      path: "Dashboard",
      text: "Job Applicants",
      columns,
      data,
    };
  },
};
</script>
