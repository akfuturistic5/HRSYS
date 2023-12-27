<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>
    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <!-- Page Header -->
        <reports-header :title="title" :path="path" :text="text" :text1="text1" />
        <!-- /Page Header -->
        <!-- Content Starts -->
        <div class="row justify-content-center">
          <div class="col-md-3 col-sm-6">
            <div class="card">
              <div class="card-body text-center">
                <h3><b>101</b></h3>
                <p>Total Employees</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="card">
              <div class="card-body text-center">
                <h3 class="text-success"><b>84</b></h3>
                <p>Today Present</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="card">
              <div class="card-body text-center">
                <h3 class="text-danger"><b>12</b></h3>
                <p>Today Absent</p>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="card">
              <div class="card-body text-center">
                <h3><b>5</b></h3>
                <p>Today Left</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Search Filter -->
        <employee-reports-filter />
        <!-- /Search Filter -->
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
                    <div class="table-avatar">
                      <router-link to="profile" class="avatar"
                        ><img
                          :src="require(`@/assets/img/profiles/${record.Avatar}`)"
                          alt="User Image"
                      /></router-link>
                      <router-link to="profile"
                        >{{ record.Name }}
                        <span>{{ record.EmployeeID }}</span></router-link
                      >
                    </div>
                  </template>
                  <template v-else-if="column.key === 'Status'">
                    <div class="text-center">
                      <button :class="record.Class">
                        {{ record.Status }}
                      </button>
                    </div>
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
    title: "Employee",
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
    title: "Date",
    dataIndex: "Date",
    sorter: {
      compare: (a, b) => {
        a = a.Date.toLowerCase();
        b = b.Date.toLowerCase();
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
    Name: "John Doe",
    Avatar: "avatar-02.jpg",
    EmployeeID: "#0001",
    Date: "20 Dec 2022",
    Department: "Design",
    Class: "btn btn-outline-info btn-sm",
    Status: "Week off",
  },
  {
    Name: "John Smith",
    Avatar: "avatar-10.jpg",
    EmployeeID: "#003",
    Date: "20 Dec 2022",
    Department: "Android Developer",
    Class: "btn btn-outline-info btn-sm",
    Status: "Week off",
  },
  {
    Name: "Mike Litorus",
    Avatar: "avatar-05.jpg",
    EmployeeID: "#004",
    Date: "20 Dec 2022",
    Department: "IOS Developer",
    Class: "btn btn-outline-info btn-sm",
    Status: "Week off",
  },
  {
    Name: "Richard Miles",
    Avatar: "avatar-09.jpg",
    EmployeeID: "#0002",
    Date: "20 Dec 2022",
    Department: "Web Developer",
    Class: "btn btn-outline-danger btn-sm",
    Status: "Absent",
  },
  {
    Name: "Wilmer Deluna",
    Avatar: "avatar-11.jpg",
    EmployeeID: "#005",
    Date: "20 Dec 2022",
    Department: "Team Leader",
    Class: "btn btn-outline-info btn-sm",
    Status: "Week off",
  },
];
export default {
  data() {
    return {
      title: "Daily Report",
      path: "Dashboard",
      text: "Daily Report",
      text1: "PDF",
      columns,
      data,
    };
  },
  name: "daily-reports",
};
</script>
