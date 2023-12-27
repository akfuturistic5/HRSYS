<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <!-- Page Header -->
        <jobbreadcrumb :title="title" :path="path" :text="text" :text1="text1" />
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
                  <template v-if="column.key === 'Name'">
                    <h2 class="table-avatar">
                      <router-link to="profile" class="avatar"
                        ><img
                          :src="require(`@/assets/img/profiles/${record.Image}`)"
                          alt="User Image"
                      /></router-link>
                      <router-link to="profile"
                        >{{ record.Name }} <span>{{ record.Job }}</span></router-link
                      >
                    </h2>
                  </template>
                  <template v-else-if="column.key === 'JobTitle'">
                    <div>
                      <router-link to="job-details">{{ record.JobTitle }}</router-link>
                    </div>
                  </template>
                  <template v-else-if="column.key === 'Status'">
                    <div>
                      <label :class="record.class">{{ record.Status }}</label>
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
                          ><i class="material-icons">{{ record.actions }}</i></a
                        >
                        <div class="dropdown-menu dropdown-menu-right">
                          <a class="dropdown-item" href="javascript:;"
                            ><i class="fa-regular fa-thumbs-up m-r-5"></i> Approved</a
                          >
                          <a class="dropdown-item" href="javascript:;"
                            ><i class="fa-solid fa-ban m-r-5"></i> Rejected</a
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
    key: "Name",
    sorter: {
      compare: (a, b) => {
        a = a.Name.toLowerCase();
        b = b.Name.toLowerCase();
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
    title: "Job Type",
    dataIndex: "JobType",
    sorter: {
      compare: (a, b) => {
        a = a.JobType.toLowerCase();
        b = b.JobType.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Pay",
    dataIndex: "Pay",
    sorter: {
      compare: (a, b) => {
        a = a.Pay.toLowerCase();
        b = b.Pay.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Annual IP",
    dataIndex: "AnnualIP",
    sorter: {
      compare: (a, b) => {
        a = a.AnnualIP.toLowerCase();
        b = b.AnnualIP.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Long Term IP",
    dataIndex: "LongTermIP",
    key: "JobType",
    sorter: {
      compare: (a, b) => {
        a = a.LongTermIP.toLowerCase();
        b = b.LongTermIP.toLowerCase();
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
    Name: "John Deo ",
    Job: "Web Designer",
    Image: "avatar-02.jpg",
    JobTitle: "Web Developer",
    JobType: "Temporary",
    Pay: "$25000",
    AnnualIP: "15%",
    LongTermIP: "No",
    Status: "Requested",
    actions: "more_vert",
    class: "badge bg-inverse-warning d-inline-block min-w-90",
  },
  {
    id: "2",
    Name: "Richard Miles ",
    Job: "Web Developer",
    Image: "avatar-09.jpg",
    JobTitle: "Web Designer",
    JobType: "Contract",
    Pay: "$25000",
    AnnualIP: "15%",
    LongTermIP: "No",
    Status: "Rejected",
    actions: "more_vert",
    class: "badge bg-inverse-danger d-inline-block min-w-90",
  },
  {
    id: "3",
    Name: "John Smith",
    Job: "Android Developer",
    Image: "avatar-10.jpg",
    JobTitle: "Android Developer",
    JobType: "Salary",
    Pay: "$25000",
    AnnualIP: "15%",
    LongTermIP: "No",
    Status: "Approved ",
    actions: "more_vert",
    class: "badge bg-inverse-success d-inline-block min-w-90",
  },
];

export default {
  data() {
    return {
      title: "Offer Approvals",
      path: "Dashboard",
      text: "Jobs",
      text1: "Offer Approvals",
      columns,
      data,
    };
  },
};
</script>
