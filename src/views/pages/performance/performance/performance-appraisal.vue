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
                  <template v-if="column.key === 'Employee'">
                    <h2 class="table-avatar">
                      <router-link to="profile" class="avatar"
                        ><img
                          :src="require(`@/assets/img/profiles/${record.Image}`)"
                          alt="User Image"
                      /></router-link>
                      <router-link to="profile">{{ record.Employee }}</router-link>
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
                            data-bs-target="#edit_appraisal"
                            ><i class="fa-solid fa-pencil m-r-5"></i> Edit</a
                          >
                          <a
                            class="dropdown-item"
                            href="javascript:;"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_appraisal"
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
  <appraisal-add-model></appraisal-add-model>
  <appraisal-edit-model></appraisal-edit-model>
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
    title: "Designation",
    dataIndex: "Designation",
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
    title: "AppraisalDate",
    dataIndex: "AppraisalDate",
    sorter: {
      compare: (a, b) => {
        a = a.AppraisalDate.toLowerCase();
        b = b.AppraisalDate.toLowerCase();
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
    Employee: "John Doe",
    Image: "avatar-02.jpg",
    Designation: "Web Designer",
    Department: "Designing",
    AppraisalDate: "7 May 2023",
    Status: "Active",
    Action: "more_vert",
  },
  {
    id: "2",
    Employee: "Mike Litorus",
    Image: "avatar-05.jpg",
    Designation: "IOS Developer",
    Department: "IOS",
    AppraisalDate: "7 May 2023",
    Status: "Active",
    Action: "more_vert",
  },
  {
    id: "3",
    Employee: "Bernardo Galaviz",
    Image: "avatar-13.jpg",
    Designation: "Web Developer",
    Department: "Designing",
    AppraisalDate: "7 May 2023",
    Status: "Active",
    Action: "more_vert",
  },
  {
    id: "4",
    Employee: "Jeffrey Warden",
    Image: "avatar-12.jpg",
    Designation: "Web Developer",
    Department: "Designing",
    AppraisalDate: "7 May 2023",
    Status: "Active",
    Action: "more_vert",
  },
  {
    id: "5",
    Employee: "Wilmer Deluna",
    Image: "avatar-11.jpg",
    Designation: "Team Leader",
    Department: "IOS",
    AppraisalDate: "7 May 2023",
    Status: "Active",
    Action: "more_vert",
  },
];
export default {
  data() {
    return {
      title: "Performance Appraisal",
      path: "Dashboard",
      text: "Performance",
      text1: "Add New",
      columns,
      data,
    };
  },
};
</script>
