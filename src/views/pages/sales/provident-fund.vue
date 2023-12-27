<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <div class="content container-fluid">
        <!-- Page Header -->
        <leaves-admin-header :title="title" :path="path" :text="text" :text1="text1" />
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
                  <template v-if="column.key === 'EmployeeName'">
                    <div class="table-avatar">
                      <router-link to="profile" class="avatar"
                        ><img
                          :src="require(`@/assets/img/profiles/${record.Image}`)"
                          alt="User Image"
                      /></router-link>
                      <router-link to="profile"
                        >{{ record.EmployeeName }}
                        <span>{{ record.Role }}</span></router-link
                      >
                    </div>
                  </template>
                  <template v-else-if="column.key === 'Status'">
                    <div class="dropdown action-label">
                      <a
                        class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                        href="javascript:void(0);"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i :class="record.Class"></i>
                        {{ record.Status }}
                      </a>
                      <div class="dropdown-menu dropdown-menu-right">
                        <a class="dropdown-item" href="javascript:void(0);"
                          ><i class="fa-regular fa-circle-dot text-danger"></i> Pending</a
                        >
                        <a class="dropdown-item" href="javascript:void(0);"
                          ><i class="fa-regular fa-circle-dot text-success"></i>
                          Approved</a
                        >
                      </div>
                    </div>
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
                        <a
                          class="dropdown-item"
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_pf"
                          ><i class="fa-solid fa-pencil m-r-5"></i> Edit</a
                        >
                        <a
                          class="dropdown-item"
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_pf"
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
      <providentfund-model />
      <!-- /Page Content -->
    </div>
    <!-- Page Wrapper -->
  </div>
</template>
<script>
const columns = [
  {
    title: "Employee Name",
    dataIndex: "EmployeeName",
    key: "EmployeeName",
    sorter: {
      compare: (a, b) => {
        a = a.EmployeeName.toLowerCase();
        b = b.EmployeeName.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Provident Fund Type",
    dataIndex: "ProvidentFundType",
    sorter: {
      compare: (a, b) => {
        a = a.ProvidentFundType.toLowerCase();
        b = b.ProvidentFundType.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Employee Share",
    dataIndex: "EmployeeShare",
    sorter: {
      compare: (a, b) => {
        a = a.EmployeeShare.toLowerCase();
        b = b.EmployeeShare.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Organization Share",
    dataIndex: "OrganizationShare",
    sorter: {
      compare: (a, b) => {
        a = a.OrganizationShare.toLowerCase();
        b = b.OrganizationShare.toLowerCase();
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
    title: "Actions",
    key: "Actions",
    sorter: true,
  },
];
const data = [
  {
    EmployeeName: "John Doe",
    ProvidentFundType: "Percentage of Basic Salary",
    EmployeeShare: "2%",
    OrganizationShare: "2%",
    Class: "fa-regular fa-circle-dot text-danger",
    Status: "Pending",
    Image: "avatar-02.jpg",
    Role: "Web Designer",
  },
];
export default {
  data() {
    return {
      title: "Provident Fund",
      path: "Dashboard",
      text: "Provident Fund",
      text1: "Add Provident Fund",
      columns,
      data,
    };
  },
  name: "provident-fund",
};
</script>
