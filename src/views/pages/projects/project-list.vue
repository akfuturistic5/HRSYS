<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>
    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <!-- Page Header -->
        <projects-header :title="title" :path="path" :text="text" :text1="text1" />
        <!-- /Page Header -->
        <!-- Search Filter -->
        <projects-filter></projects-filter>
        <!-- Search Filter -->

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
                  <template v-if="column.key === 'Project'">
                    <router-link to="project-view">Office Management</router-link>
                  </template>

                  <template v-else-if="column.key === 'Leader'">
                    <ul class="team-members">
                      <li>
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="tooltip"
                          title="Jeffery Lalor"
                          ><img
                            :src="require(`@/assets/img/profiles/${record.Image}`)"
                            alt="User Image"
                        /></a>
                      </li>
                    </ul>
                  </template>
                  <template v-else-if="column.key === 'Team'">
                    <ul class="team-members text-nowrap">
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
                      <li>
                        <a
                          href="javascript:void(0);"
                          title="John Smith"
                          data-bs-toggle="tooltip"
                          ><img
                            src="@/assets/img/profiles/avatar-10.jpg"
                            alt="User Image"
                        /></a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          title="Mike Litorus"
                          data-bs-toggle="tooltip"
                          ><img
                            src="@/assets/img/profiles/avatar-05.jpg"
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

                  <template v-else-if="column.key === 'Priority'">
                    <div class="dropdown action-label">
                      <a
                        href="javascript:;"
                        class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        ><i :class="record.PriorityClass"></i>
                        {{ record.Priority }}
                      </a>
                      <div class="dropdown-menu">
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
                        href="javascript:;"
                        class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        ><i :class="record.StatusClass"></i>
                        {{ record.Status }}
                      </a>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="javascript:void(0);"
                          ><i class="fa-regular fa-circle-dot text-success"></i> Active</a
                        >
                        <a class="dropdown-item" href="javascript:void(0);"
                          ><i class="fa-regular fa-circle-dot text-danger"></i>
                          Inactive</a
                        >
                      </div>
                    </div>
                  </template>
                  <template v-else-if="column.key === 'Action'">
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
                          data-bs-target="#edit_project"
                          ><i class="fa-solid fa-pencil m-r-5"></i> Edit</a
                        >
                        <a
                          class="dropdown-item"
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_project"
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
      <project-list-model />
    </div>
  </div>
</template>
<script>
const columns = [
  {
    title: "Project",
    dataIndex: "Project",
    key: "Project",
    sorter: {
      compare: (a, b) => {
        a = a.Project.toLowerCase();
        b = b.Project.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Project Id",
    dataIndex: "ProjectId",
    sorter: {
      compare: (a, b) => {
        a = a.ProjectId.toLowerCase();
        b = b.ProjectId.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Leader",
    key: "Leader",
    sorter: true,
  },
  {
    title: "Team",
    key: "Team",
    sorter: true,
  },
  {
    title: "Deadline",
    dataIndex: "Deadline",
    sorter: {
      compare: (a, b) => {
        a = a.Deadline.toLowerCase();
        b = b.Deadline.toLowerCase();
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
    title: "Action",
    key: "Action",
    sorter: true,
  },
];
const data = [
  {
    Project: "Office Management",
    ProjectId: "PRO-0001",
    Image: "avatar-16.jpg",
    Deadline: "17 Apr 2023",
    Priority: "High",
    Status: "Active",
    StatusClass: "fa-regular fa-circle-dot text-success",
    PriorityClass: "fa-regular fa-circle-dot text-danger",
  },
  {
    Project: "Project Management",
    ProjectId: "PRO-0002",
    Image: "avatar-16.jpg",
    Deadline: "17 Apr 2023",
    Priority: "Medium",
    Status: "Inactive",
    StatusClass: "fa-regular fa-circle-dot text-danger",
    PriorityClass: "fa-regular fa-circle-dot text-warning",
  },
  {
    Project: "Video Calling App",
    ProjectId: "PRO-0003",
    Image: "avatar-16.jpg",
    Deadline: "17 Apr 2023",
    Priority: "Low",
    Status: "Active",
    StatusClass: "fa-regular fa-circle-dot text-success",
    PriorityClass: "fa-regular fa-circle-dot text-success",
  },
  {
    Project: "Hospital Administration",
    ProjectId: "PRO-0004",
    Image: "avatar-16.jpg",
    Deadline: "17 Apr 2023",
    Priority: "High",
    Status: "Active",
    StatusClass: "fa-regular fa-circle-dot text-success",
    PriorityClass: "fa-regular fa-circle-dot text-danger",
  },
  {
    Project: "Office Management",
    ProjectId: "PRO-0005",
    Image: "avatar-16.jpg",
    Deadline: "17 Apr 2023",
    Priority: "High",
    Status: "Active",
    StatusClass: "fa-regular fa-circle-dot text-success",
    PriorityClass: "fa-regular fa-circle-dot text-danger",
  },
  {
    Project: "Project Management",
    ProjectId: "PRO-0006",
    Image: "avatar-16.jpg",
    Deadline: "17 Apr 2023",
    Priority: "High",
    Status: "Active",
    StatusClass: "fa-regular fa-circle-dot text-success",
    PriorityClass: "fa-regular fa-circle-dot text-danger",
  },
  {
    Project: "Video Calling App",
    ProjectId: "PRO-0007",
    Image: "avatar-16.jpg",
    Deadline: "17 Apr 2023",
    Priority: "High",
    Status: "Active",
    StatusClass: "fa-regular fa-circle-dot text-success",
    PriorityClass: "fa-regular fa-circle-dot text-danger",
  },
  {
    Project: "Hospital Administration",
    ProjectId: "PRO-0008",
    Image: "avatar-16.jpg",
    Deadline: "17 Apr 2023",
    Priority: "High",
    Status: "Active",
    StatusClass: "fa-regular fa-circle-dot text-success",
    PriorityClass: "fa-regular fa-circle-dot text-danger",
  },
  {
    Project: "Office Management",
    ProjectId: "PRO-0009",
    Image: "avatar-16.jpg",
    Deadline: "17 Apr 2023",
    Priority: "High",
    Status: "Active",
    StatusClass: "fa-regular fa-circle-dot text-success",
    PriorityClass: "fa-regular fa-circle-dot text-danger",
  },
  {
    Project: "Project Management",
    ProjectId: "PRO-0010",
    Image: "avatar-16.jpg",
    Deadline: "17 Apr 2023",
    Priority: "High",
    Status: "Active",
    StatusClass: "fa-regular fa-circle-dot text-success",
    PriorityClass: "fa-regular fa-circle-dot text-danger",
  },
  {
    Project: "Video Calling App",
    ProjectId: "PRO-0011",
    Image: "avatar-16.jpg",
    Deadline: "17 Apr 2023",
    Priority: "High",
    Status: "Active",
    StatusClass: "fa-regular fa-circle-dot text-success",
    PriorityClass: "fa-regular fa-circle-dot text-danger",
  },
];
export default {
  data() {
    return {
      title: "Projects",
      path: "Dashboard",
      text: "Projects",
      text1: "Create Project",
      columns,
      data,
    };
  },
  name: "project-list",
};
</script>
