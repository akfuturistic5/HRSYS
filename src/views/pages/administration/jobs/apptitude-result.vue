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
                  <template v-else-if="column.key === 'TotalMark'">
                    <div class="text-center">{{ record.TotalMark }}</div>
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
                          <i class="fa-regular fa-circle-dot text-danger"></i> Action
                          pending
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                          <a class="dropdown-item" href="javascript:;"
                            ><i class="fa-regular fa-circle-dot text-info"></i> Resume
                            selected</a
                          >
                          <a class="dropdown-item" href="javascript:;"
                            ><i class="fa-regular fa-circle-dot text-danger"></i> Resume
                            Rejected</a
                          >
                          <a class="dropdown-item" href="javascript:;"
                            ><i class="fa-regular fa-circle-dot text-success"></i>
                            Aptitude Selected</a
                          >
                          <a class="dropdown-item" href="javascript:;"
                            ><i class="fa-regular fa-circle-dot text-danger"></i> Aptitude
                            rejected</a
                          >
                          <a class="dropdown-item" href="javascript:;"
                            ><i class="fa-regular fa-circle-dot text-success"></i> video
                            call selected</a
                          >
                          <a class="dropdown-item" href="javascript:;"
                            ><i class="fa-regular fa-circle-dot text-danger"></i> Video
                            call rejected</a
                          >
                          <a class="dropdown-item" href="javascript:;"
                            ><i class="fa-regular fa-circle-dot text-success"></i>
                            Offered</a
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
    title: "Category Wise Mark",
    dataIndex: "CategoryWiseMark",
    sorter: {
      compare: (a, b) => {
        a = a.CategoryWiseMark.toLowerCase();
        b = b.CategoryWiseMark.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Total Mark",
    dataIndex: "TotalMark",
    sorter: {
      compare: (a, b) => {
        a = a.TotalMark.toLowerCase();
        b = b.TotalMark.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "Status",
    class: "text-center",
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
    id: "1",
    Name: "John Deo ",
    Job: "Web Designer",
    Image: "avatar-02.jpg",
    JobTitle: "Web Developer",
    Department: "Development",
    TotalMark: "1",
    Status: "Action pending",
    CategoryWiseMark: "html -1 Level1-0",
  },
  {
    id: "2",
    Name: "Richard Miles ",
    Job: "Web Developer",
    Image: "avatar-09.jpg",
    JobTitle: "Web Designer",
    Department: "Designing",
    TotalMark: "1",
    Status: "Action pending",
    CategoryWiseMark: "html -1 Level1-0",
  },
  {
    id: "3",
    Name: "John Smith",
    Job: "Android Developer",
    Image: "avatar-10.jpg",
    JobTitle: "Android Developer",
    Department: "Android",
    TotalMark: "1",
    Status: "Action pending",
    CategoryWiseMark: "html -1 Level1-0",
  },
];

export default {
  components: { jobbreadcrumb },
  data() {
    return {
      title: "Aptitude Result",
      path: "Dashboard",
      text: "Jobs",
      text1: "Aptitude Result",
      columns,
      data,
    };
  },
};
</script>
