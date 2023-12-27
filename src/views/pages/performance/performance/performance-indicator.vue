<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <!-- Page Header -->
        <inbox-header :title="title" :path="path" :text="text" :text1="text1" />
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
                  <template v-if="column.key === 'AddedBy'">
                    <h2 class="table-avatar">
                      <router-link to="profile" class="avatar"
                        ><img
                          :src="require(`@/assets/img/profiles/${record.Image}`)"
                          alt="User Image"
                      /></router-link>
                      <router-link to="profile">{{ record.AddedBy }}</router-link>
                    </h2>
                  </template>
                  <template v-if="column.key === 'Status'">
                    <div class="dropdown action-label">
                      <a
                        class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                        href="javascript:;"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="fa-regular fa-circle-dot text-success"></i>
                        {{ record.Status }}
                      </a>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="javascript:;"
                          ><i class="fa-regular fa-circle-dot text-success"></i> Active</a
                        >
                        <a class="dropdown-item" href="javascript:;"
                          ><i class="fa-regular fa-circle-dot text-danger"></i>
                          Inactive</a
                        >
                      </div>
                    </div>
                  </template>
                  <template v-if="column.key === 'action'">
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
                            data-bs-target="#edit_indicator"
                            ><i class="fa-solid fa-pencil m-r-5"></i> Edit</a
                          >
                          <a
                            class="dropdown-item"
                            href="javascript:;"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_indicator"
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
  <indicator-add-model></indicator-add-model>
  <indicator-edit-model></indicator-edit-model>
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
    title: "Designation",
    dataIndex: "Designation",
    key: "Designation",
    sorter: {
      compare: (a, b) => {
        a = a.Designation.toLowerCase();
        b = b.Designation.toLowerCase();
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
    title: "Added By",
    dataIndex: "AddedBy",
    key: "AddedBy",
    sorter: {
      compare: (a, b) => {
        a = a.AddedBy.toLowerCase();
        b = b.AddedBy.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Create At",
    dataIndex: "CreateAt",
    sorter: {
      compare: (a, b) => {
        a = a.CreateAt.toLowerCase();
        b = b.CreateAt.toLowerCase();
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
    Image: "avatar-02.jpg",
    Designation: "Web Designer",
    Department: "Designing",
    AddedBy: "John Doe",
    CreateAt: "7 May 2023",
    Status: "Active",
    Action: "more_vert",
  },
  {
    id: "2",
    Image: "avatar-05.jpg",
    Designation: "IOS Developer",
    Department: "IOS",
    AddedBy: "Mike Litorus",
    CreateAt: "7 May 2023",
    Status: "Active",
    Action: "more_vert",
  },
  {
    id: "3",
    Image: "avatar-10.jpg",
    Designation: "Web Designer",
    Department: "Designing",
    AddedBy: "John Smith",
    CreateAt: "7 May 2023",
    Status: "Active",
    Action: "more_vert",
  },
  {
    id: "4",
    Image: "avatar-12.jpg",
    Designation: "Web Designer",
    Department: "Designing",
    AddedBy: "Jeffrey Warden",
    CreateAt: "7 May 2023",
    Status: "Active",
    Action: "more_vert",
  },
  {
    id: "5",
    Image: "avatar-11.jpg",
    Designation: "Web Designer",
    Department: "Designing",
    AddedBy: "Wilmer Deluna",
    CreateAt: "7 May 2023",
    Status: "Active",
    Action: "more_vert",
  },
];
export default {
  data() {
    return {
      title: "Performance Indicator",
      path: "Dashboard",
      text: "Performance Indicator ",
      text1: "Add New",
      columns,
      data,
    };
  },
};
</script>
