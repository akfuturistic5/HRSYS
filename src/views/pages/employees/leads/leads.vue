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
                  <template v-if="column.key === 'LeadName'">
                    <div class="table-avatar">
                      <a href="javascript:void(0);" class="avatar"
                        ><img
                          :src="require(`@/assets/img/profiles/${record.Image}`)"
                          alt="User Image"
                      /></a>
                      <a href="javascript:void(0);">{{ record.LeadName }}</a>
                    </div>
                  </template>

                  <template v-else-if="column.key === 'Project'">
                    <router-link to="project-view">{{ record.Project }}</router-link>
                  </template>
                  <template v-else-if="column.key === 'AssignedStaff'">
                    <ul class="team-members">
                      <li>
                        <a
                          href="javascript:void(0);"
                          title="John Doe"
                          data-bs-toggle="tooltip"
                          ><img
                            src="@/assets/img/profiles/avatar-02.jpg"
                            alt="User Image"
                        /></a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          title="Richard Miles"
                          data-bs-toggle="tooltip"
                          ><img
                            src="@/assets/img/profiles/avatar-09.jpg"
                            alt="User Image"
                        /></a>
                      </li>
                      <li class="dropdown avatar-dropdown">
                        <a
                          href="javascript:void(0);"
                          class="all-users dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          >+15</a
                        >
                        <div class="dropdown-menu dropdown-menu-right">
                          <div class="avatar-group">
                            <a class="avatar avatar-xs" href="javascript:void(0);">
                              <img
                                src="@/assets/img/profiles/avatar-02.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a class="avatar avatar-xs" href="javascript:void(0);">
                              <img
                                src="@/assets/img/profiles/avatar-09.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a class="avatar avatar-xs" href="javascript:void(0);">
                              <img
                                src="@/assets/img/profiles/avatar-10.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a class="avatar avatar-xs" href="javascript:void(0);">
                              <img
                                src="@/assets/img/profiles/avatar-05.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a class="avatar avatar-xs" href="javascript:void(0);">
                              <img
                                src="@/assets/img/profiles/avatar-11.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a class="avatar avatar-xs" href="javascript:void(0);">
                              <img
                                src="@/assets/img/profiles/avatar-12.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a class="avatar avatar-xs" href="javascript:void(0);">
                              <img
                                src="@/assets/img/profiles/avatar-13.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a class="avatar avatar-xs" href="javascript:void(0);">
                              <img
                                src="@/assets/img/profiles/avatar-01.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a class="avatar avatar-xs" href="javascript:void(0);">
                              <img
                                src="@/assets/img/profiles/avatar-16.jpg"
                                alt="User Image"
                              />
                            </a>
                          </div>
                          <div class="avatar-pagination">
                            <ul class="pagination">
                              <li class="page-item">
                                <a
                                  class="page-link"
                                  href="javascript:void(0);"
                                  aria-label="Previous"
                                >
                                  <span aria-hidden="true">«</span>
                                  <span class="visually-hidden">Previous</span>
                                </a>
                              </li>
                              <li class="page-item">
                                <a class="page-link" href="javascript:void(0);">1</a>
                              </li>
                              <li class="page-item">
                                <a class="page-link" href="javascript:void(0);">2</a>
                              </li>
                              <li class="page-item">
                                <a
                                  class="page-link"
                                  href="javascript:void(0);"
                                  aria-label="Next"
                                >
                                  <span aria-hidden="true">»</span>
                                  <span class="visually-hidden">Next</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </template>
                  <template v-else-if="column.key === 'Status'">
                    <span class="badge bg-inverse-success">{{ record.Status }}</span>
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
                        <a class="dropdown-item" href="javascript:void(0);"
                          ><i class="fa-solid fa-pencil m-r-5"></i> Edit</a
                        >
                        <a class="dropdown-item" href="javascript:void(0);"
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
    title: "Lead Name",
    dataIndex: "LeadName",
    key: "LeadName",
    sorter: {
      compare: (a, b) => {
        a = a.LeadName.toLowerCase();
        b = b.LeadName.toLowerCase();
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
    title: "Project",
    dataIndex: "Project",
    sorter: {
      compare: (a, b) => {
        a = a.Project.toLowerCase();
        b = b.Project.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Assigned Staff",
    dataIndex: "AssignedStaff",
    key: "AssignedStaff",
    sorter: true,
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
    title: "Created",
    dataIndex: "Created",
    sorter: {
      compare: (a, b) => {
        a = a.Created.toLowerCase();
        b = b.Created.toLowerCase();
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
    LeadName: "Wilmer Deluna",
    Email: "wilmerdeluna@example.com",
    Phone: "9876543210",
    Project: "Hospital Administration",
    Status: "Working",
    Image: "avatar-11.jpg",
    Created: "10 hours ago",
  },
  {
    id: "2",
    LeadName: "Lesley Grauer",
    Email: "lesleygrauer@example.com",
    Phone: "9876543210",
    Project: "Video Calling App",
    Status: "Working",
    Image: "avatar-01.jpg",
    Created: "5 Mar 2023",
  },
  {
    id: "3",
    LeadName: "Jeffery Lalor",
    Email: "jefferylalor@example.com",
    Phone: "9876543210",
    Project: "Office Management",
    Status: "Working",
    Image: "avatar-16.jpg",
    Created: "27 Feb 2023",
  },
  {
    id: "4",
    LeadName: "Wilmer Deluna",
    Email: "wilmerdeluna@example.com",
    Phone: "9876543210",
    Project: "Hospital Administration",
    Status: "Working",
    Image: "avatar-11.jpg",
    Created: "10 hours ago",
  },
  {
    id: "5",
    LeadName: "Lesley Grauer",
    Email: "lesleygrauer@example.com",
    Phone: "9876543210",
    Project: "Video Calling App",
    Status: "Working",
    Image: "avatar-01.jpg",
    Created: "5 Mar 2023",
  },
  {
    id: "6",
    LeadName: "Jeffery Lalor",
    Email: "jefferylalor@example.com",
    Phone: "9876543210",
    Project: "Office Management",
    Status: "Working",
    Image: "avatar-16.jpg",
    Created: "27 Feb 2023",
  },
  {
    id: "7",
    LeadName: "Wilmer Deluna",
    Email: "wilmerdeluna@example.com",
    Phone: "9876543210",
    Project: "Hospital Administration",
    Status: "Working",
    Image: "avatar-11.jpg",
    Created: "10 hours ago",
  },
  {
    id: "8",
    LeadName: "Lesley Grauer",
    Email: "lesleygrauer@example.com",
    Phone: "9876543210",
    Project: "Video Calling App",
    Status: "Working",
    Image: "avatar-01.jpg",
    Created: "5 Mar 2023",
  },
  {
    id: "9",
    LeadName: "Jeffery Lalor",
    Email: "jefferylalor@example.com",
    Phone: "9876543210",
    Project: "Office Management",
    Status: "Working",
    Image: "avatar-16.jpg",
    Created: "27 Feb 2023",
  },
];
export default {
  data() {
    return {
      title: "Leads",
      path: "Dashboard",
      text: "Leads",
      columns,
      data,
    };
  },
  name: "leads",
};
</script>
