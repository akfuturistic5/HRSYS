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
                  <template v-else-if="column.key === 'JobType'">
                    <div class="text-center">
                      <div class="dropdown action-label">
                        <a
                          class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                          href="javascript:;"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i :class="record.class"></i>
                          {{ record.JobType }}
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                          <a class="dropdown-item" href="javascript:;"
                            ><i class="fa-regular fa-circle-dot text-info"></i> Full
                            Time</a
                          >
                          <a class="dropdown-item" href="javascript:;"
                            ><i class="fa-regular fa-circle-dot text-success"></i> Part
                            Time</a
                          >
                          <a class="dropdown-item" href="javascript:;"
                            ><i class="fa-regular fa-circle-dot text-danger"></i>
                            Internship</a
                          >
                          <a class="dropdown-item" href="javascript:;"
                            ><i class="fa-regular fa-circle-dot text-warning"></i>
                            Temporary</a
                          >
                          <a class="dropdown-item" href="javascript:;"
                            ><i class="fa-regular fa-circle-dot text-warning"></i>
                            Other</a
                          >
                        </div>
                      </div>
                    </div>
                  </template>
                  <template v-else-if="column.key === 'Status'">
                    <div class="text-center">
                      <div class="dropdown action-label">
                        <a
                          class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                          href="javascript:;"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i :class="record.class"></i>
                          {{ record.Status }}
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                          <a class="dropdown-item" href="javascript:;"
                            ><i class="fa-regular fa-circle-dot text-info"></i> Open</a
                          >
                          <a class="dropdown-item" href="javascript:;"
                            ><i class="fa-regular fa-circle-dot text-success"></i>
                            Closed</a
                          >
                          <a class="dropdown-item" href="javascript:;"
                            ><i class="fa-regular fa-circle-dot text-danger"></i>
                            Cancelled</a
                          >
                        </div>
                      </div>
                    </div>
                  </template>
                  <template v-else-if="column.key === 'Resume'">
                    <div>
                      <a href="javascript:void(0);" class="btn btn-sm btn-primary"
                        ><i class="fa-solid fa-download me-1"></i> {{ record.Resume }}</a
                      >
                    </div>
                  </template>
                  <template v-else-if="column.key === 'action'">
                    <div class="text-center">
                      <div class="dropdown dropdown-action">
                        <a
                          href="javascript:;"
                          class="action-icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          ><i class="material-icons">{{ record.actions }}</i></a
                        >
                        <div class="dropdown-menu dropdown-menu-right">
                          <a
                            href="javascript:;"
                            class="dropdown-item"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_job"
                            ><i class="fa-solid fa-pencil m-r-5"></i> Edit</a
                          >
                          <a
                            href="javascript:;"
                            class="dropdown-item"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_job"
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
  <jobmodel></jobmodel>
</template>
<script>
import jobbreadcrumb from "@/components/breadcrumb/jobbreadcrumb.vue";
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
    Name: "John Deo ",
    Job: "Web Designer",
    Image: "avatar-02.jpg",
    JobTitle: "Web Developer",
    Department: "Development",
    StartDate: "3 Mar 2023",
    ExpireDate: "31 May 2023",
    JobType: "Full Time",
    Status: "Open",
    Resume: "Download",
    actions: "more_vert",
    class: "fa-regular fa-circle-dot text-danger",
  },
  {
    id: "2",
    Name: "Richard Miles ",
    Job: "Web Developer",
    Image: "avatar-09.jpg",
    JobTitle: "Web Designer",
    Department: "Designing",
    StartDate: "3 Mar 2023",
    ExpireDate: "31 May 2023",
    JobType: "Part Time",
    Status: "Closed",
    Resume: "Download",
    actions: "more_vert",
    class: "fa-regular fa-circle-dot text-success",
  },
  {
    id: "3",
    Name: "John Smith",
    Job: "Android Developer",
    Image: "avatar-10.jpg",
    JobTitle: "Android Developer",
    Department: "Android",
    StartDate: "3 Mar 2023",
    ExpireDate: "31 May 2023",
    JobType: "Internship",
    Status: "Cancelled ",
    Resume: "Download",
    actions: "more_vert",
    class: "fa-regular fa-circle-dot text-danger",
  },
];

export default {
  components: { jobbreadcrumb },
  data() {
    return {
      title: "Manage Resumes",
      path: "Dashboard",
      text: "Jobs",
      text1: "Manage Resumes",
      columns,
      data,
    };
  },
};
</script>
