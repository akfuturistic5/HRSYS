<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <!-- Page Header -->
        <user-dashboard-header
          :title="title"
          :path="path"
          :text="text"
          :text1="text1"
          :text2="text2"
        />
        <!-- /Page Header -->

        <!-- Content Starts -->
        <user-dashboard-tabset></user-dashboard-tabset>

        <!-- Search Filter -->
        <user-dashboard-filter></user-dashboard-filter>
        <!-- Search Filter -->

        <div class="row">
          <div class="col-md-12">
            <div class="showentries">
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
                  <template v-if="column.key === 'JobTitle'">
                    <div>
                      <router-link to="job-details">{{
                        record.JobTitle
                      }}</router-link>
                    </div>
                  </template>
                  <template v-else-if="column.key === 'JobType'">
                    <div class="text-center">
                      <div class="action-label">
                        <a
                          class="btn btn-white btn-sm btn-rounded"
                          href="javascript:;"
                        >
                          <i :class="record.Class"></i> {{ record.JobType }}
                        </a>
                      </div>
                    </div>
                  </template>
                  <template v-else-if="column.key === 'Status'">
                    <td class="text-center">
                      <div class="action-label">
                        <a
                          class="btn btn-white btn-sm btn-rounded"
                          href="javascript:;"
                        >
                          <i :class="record.Class"></i> {{ record.Status }}
                        </a>
                      </div>
                    </td>
                  </template>
                </template>
              </a-table>
            </div>
          </div>
        </div>

        <!-- /Content End -->
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
    title: "Job Title",
    dataIndex: "JobTitle",
    key: "JobTitle",
    sorter: {
      compare: (a, b) => {
        a = a.JobTitle.toLowerCase();
        b = b.JobTitle.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Department",
    dataIndex: "Department",
    sorter: {
      compare: (a, b) => {
        a = a.Department.toLowerCase();
        b = b.Department.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Start Date",
    dataIndex: "StartDate",
    sorter: {
      compare: (a, b) => {
        a = a.StartDate.toLowerCase();
        b = b.StartDate.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Expire Date",
    dataIndex: "ExpireDate",
    sorter: {
      compare: (a, b) => {
        a = a.ExpireDate.toLowerCase();
        b = b.ExpireDate.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Job Type",
    dataIndex: "JobType",
    key: "JobType",
    sorter: {
      compare: (a, b) => {
        a = a.JobType.toLowerCase();
        b = b.JobType.toLowerCase();
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
];

const data = [
  {
    id: 1,
    JobTitle: "Web Developer",
    Department: "Development",
    StartDate: "3 Mar 2023",
    ExpireDate: "31 May 2023",
    JobType: "Full Time",
    Status: "Open",
    Class: "fa-regular fa-circle-dot text-danger",
  },
  {
    id: 2,
    JobTitle: "Web Designer",
    Department: "Designing",
    StartDate: "3 Mar 2023",
    ExpireDate: "31 May 2023",
    JobType: "Part Time",
    Status: "Closed",
    Class: "fa-regular fa-circle-dot text-success",
  },
  {
    id: 3,
    JobTitle: "Android Developer",
    Department: "Android",
    StartDate: "3 Mar 2023",
    ExpireDate: "31 May 2023",
    JobType: "Internship",
    Status: "Cancelled",
    Class: "fa-regular fa-circle-dot text-danger",
  },
];
export default {
  data() {
    return {
      title: "All Jobs",
      path: "Dashboard",
      text: "Jobs",
      text1: "User Dashboard",
      text2: "All Jobs",
      columns,
      data,
    };
  },
};
</script>
