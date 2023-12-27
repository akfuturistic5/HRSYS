<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <!-- Page Header -->
        <inbox-header :title="title" :path="path" :text="text" :text1="text1" />
        <!-- /Page Header -->
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
                  <template v-if="column.key === 'Trainer'">
                    <h2 class="table-avatar">
                      <router-link to="profile" class="avatar"
                        ><img
                          :src="
                            require(`@/assets/img/profiles/${record.Image}`)
                          "
                          alt="User Image"
                      /></router-link>
                      <router-link to="profile"
                        >{{ record.Trainer }}
                      </router-link>
                    </h2>
                  </template>
                  <template v-else-if="column.key === 'Employee'">
                    <ul class="team-members">
                      <li>
                        <a
                          href="javascript:;"
                          title="Bernardo Galaviz"
                          data-bs-toggle="tooltip"
                          ><img
                            src="@/assets/img/profiles/avatar-10.jpg"
                            alt="User Image"
                        /></a>
                      </li>
                      <li>
                        <a
                          href="javascript:;"
                          title="Richard Miles"
                          data-bs-toggle="tooltip"
                          ><img
                            src="@/assets/img/profiles/avatar-09.jpg"
                            alt="User Image"
                        /></a>
                      </li>
                      <li class="dropdown avatar-dropdown">
                        <a
                          href="javascript:;"
                          class="all-users dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          >+15</a
                        >
                        <div class="dropdown-menu dropdown-menu-right">
                          <div class="avatar-group">
                            <a class="avatar avatar-xs" href="javascript:;">
                              <img
                                src="@/assets/img/profiles/avatar-02.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a class="avatar avatar-xs" href="javascript:;">
                              <img
                                src="@/assets/img/profiles/avatar-09.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a class="avatar avatar-xs" href="javascript:;">
                              <img
                                src="@/assets/img/profiles/avatar-10.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a class="avatar avatar-xs" href="javascript:;">
                              <img
                                src="@/assets/img/profiles/avatar-05.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a class="avatar avatar-xs" href="javascript:;">
                              <img
                                src="@/assets/img/profiles/avatar-11.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a class="avatar avatar-xs" href="javascript:;">
                              <img
                                src="@/assets/img/profiles/avatar-12.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a class="avatar avatar-xs" href="javascript:;">
                              <img
                                src="@/assets/img/profiles/avatar-13.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a class="avatar avatar-xs" href="javascript:;">
                              <img
                                src="@/assets/img/profiles/avatar-01.jpg"
                                alt="User Image"
                              />
                            </a>
                            <a class="avatar avatar-xs" href="javascript:;">
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
                                  href="javascript:;"
                                  aria-label="Previous"
                                >
                                  <span aria-hidden="true">«</span>
                                  <span class="visually-hidden">Previous</span>
                                </a>
                              </li>
                              <li class="page-item">
                                <a class="page-link" href="javascript:;">1</a>
                              </li>
                              <li class="page-item">
                                <a class="page-link" href="javascript:;">2</a>
                              </li>
                              <li class="page-item">
                                <a
                                  class="page-link"
                                  href="javascript:;"
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
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="javascript:;"
                          ><i class="fa-regular fa-circle-dot text-success"></i>
                          Active</a
                        >
                        <a class="dropdown-item" href="javascript:;"
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
                          ><i class="material-icons">{{ record.Action }}</i></a
                        >
                        <div class="dropdown-menu dropdown-menu-right">
                          <a
                            class="dropdown-item"
                            href="javascript:;"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_training"
                            ><i class="fa-solid fa-pencil m-r-5"></i> Edit</a
                          >
                          <a
                            class="dropdown-item"
                            href="javascript:;"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_training"
                            ><i class="fa-regular fa-trash-can m-r-5"></i>
                            Delete</a
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
    <!-- /Page Wrapper -->
  </div>
  <training-model></training-model>
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
    title: "Training Type",
    dataIndex: "TrainingType",
    key: "TrainingType",
    sorter: {
      compare: (a, b) => {
        a = a.TrainingType.toLowerCase();
        b = b.TrainingType.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Trainer",
    dataIndex: "Trainer",
    key: "Trainer",
    sorter: {
      compare: (a, b) => {
        a = a.Trainer.toLowerCase();
        b = b.Trainer.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Employee",
    dataIndex: "Employee",
    key: "Employee",
    sorter: {
      compare: (a, b) => {
        a = a.Employee.toLowerCase();
        b = b.Employee.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Time Duration",
    dataIndex: "TimeDuration",
    sorter: {
      compare: (a, b) => {
        a = a.TimeDuration.toLowerCase();
        b = b.TimeDuration.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Description",
    dataIndex: "Description",
    sorter: {
      compare: (a, b) => {
        a = a.Description.toLowerCase();
        b = b.Description.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Cost",
    dataIndex: "Cost",
    sorter: {
      compare: (a, b) => {
        a = a.Cost.toLowerCase();
        b = b.Cost.toLowerCase();
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
    TrainingType: "Git Training",
    Image: "avatar-02.jpg",
    Trainer: "John Doe",
    Employee: "+15",
    TimeDuration: "7 May 2023 - 10 May 2023",
    Description: "Lorem ipsum dollar",
    Cost: "$400",
    Status: "Active",
    Action: "more_vert",
    class: "fa-regular fa-circle-dot text-success",
  },
  {
    id: "2",
    TrainingType: "Swift Training",
    Image: "avatar-09.jpg",
    Trainer: "Richard Miles",
    Employee: "+15",
    TimeDuration: "7 May 2023 - 10 May 2023",
    Description: "Lorem ipsum dollar",
    Cost: "$800",
    Status: "Inactive",
    Action: "more_vert",
    class: "fa-regular fa-circle-dot text-danger",
  },
  {
    id: "3",
    TrainingType: "Node Training",
    Image: "avatar-02.jpg",
    Trainer: "John Doe",
    Employee: "+15",
    TimeDuration: "7 May 2023 - 10 May 2023",
    Description: "Lorem ipsum dollar",
    Cost: "$400",
    Status: "Active",
    Action: "more_vert",
    class: "fa-regular fa-circle-dot text-success",
  },
  {
    id: "4",
    TrainingType: "Angular Training",
    Image: "avatar-05.jpg",
    Trainer: "Mike Litorus",
    Employee: "+15",
    TimeDuration: "7 May 2023 - 10 May 2023",
    Description: "Lorem ipsum dollar",
    Cost: "$400",
    Status: "Active",
    Action: "more_vert",
    class: "fa-regular fa-circle-dot text-success",
  },
  {
    id: "5",
    TrainingType: "Git Training",
    Image: "avatar-11.jpg",
    Trainer: "Wilmer Deluna",
    Employee: "+15",
    TimeDuration: "7 May 2023 - 10 May 2023",
    Description: "Lorem ipsum dollar",
    Cost: "$400",
    Status: "Active",
    Action: "more_vert",
    class: "fa-regular fa-circle-dot text-success",
  },
];
export default {
  data() {
    return {
      title: "Training",
      path: "Dashboard",
      text: "Training",
      text1: "Add New",
      columns,
      data,
    };
  },
  name: "leads",
};
</script>
