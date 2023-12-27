<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>
    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <!-- Page Header -->
        <leaves-admin-header :title="title" :path="path" :text="text" :text1="text1" />
        <leaves-search-filter />
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
                    <div class="table-avatar">
                      <router-link to="profile" class="avatar"
                        ><img
                          :src="require(`@/assets/img/profiles/${record.Image}`)"
                          alt="User Image"
                      /></router-link>
                      <router-link to="profile"
                        >{{ record.Employee }} <span>{{ record.Role }}</span></router-link
                      >
                    </div>
                  </template>

                  <template v-else-if="column.key === 'Role'">
                    <div class="dropdown">
                      <a
                        href="javascript:;"
                        class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        >{{ record.Role }}
                      </a>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="javascript:void(0);"
                          >Software Engineer</a
                        >
                        <a class="dropdown-item" href="javascript:void(0);"
                          >Software Tester</a
                        >
                        <a class="dropdown-item" href="javascript:void(0);"
                          >Frontend Developer</a
                        >
                        <a class="dropdown-item" href="javascript:void(0);"
                          >UI/UX Developer</a
                        >
                      </div>
                    </div>
                  </template>

                  <template v-else-if="column.key === 'Payslip'">
                    <router-link class="btn btn-sm btn-primary" to="salary-view">{{
                      record.Payslip
                    }}</router-link>
                  </template>
                  <template v-else-if="column.key === 'Action'">
                    <div class="text-end">
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
                            data-bs-target="#edit_salary"
                            ><i class="fa-solid fa-pencil m-r-5"></i> Edit</a
                          >
                          <a
                            class="dropdown-item"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_salary"
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
      <salary-model />
    </div>
    <!-- /Page Wrapper -->
  </div>
</template>
<script>
const columns = [
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
    title: "Employee ID",
    dataIndex: "EmployeeID",
    sorter: {
      compare: (a, b) => {
        a = a.EmployeeID.toLowerCase();
        b = b.EmployeeID.toLowerCase();
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
    title: "Join Date",
    dataIndex: "JoinDate",
    sorter: {
      compare: (a, b) => {
        a = a.JoinDate.toLowerCase();
        b = b.JoinDate.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Role",
    dataIndex: "Role",
    key: "Role",
    sorter: {
      compare: (a, b) => {
        a = a.Role.toLowerCase();
        b = b.Role.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Salary",
    dataIndex: "Salary",
    sorter: {
      compare: (a, b) => {
        a = a.Salary.toLowerCase();
        b = b.Salary.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Payslip",
    dataIndex: "Payslip",
    key: "Payslip",
    sorter: {
      compare: (a, b) => {
        a = a.Payslip.toLowerCase();
        b = b.Payslip.toLowerCase();
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
    Employee: "Bernardo Galaviz",
    EmployeeID: "FT-0007",
    Image: "avatar-13.jpg",
    Email: "bernardogalaviz@example.com",
    JoinDate: "1 Jan 2023",
    Role: "Web Developer",
    Salary: "$38400",
    Payslip: "Generate Slip",
  },
  {
    Employee: "Jeffery Lalor",
    EmployeeID: "FT-0009",
    Image: "avatar-16.jpg",
    Email: "jefferylalor@example.com",
    JoinDate: "1 Jan 2023",
    Role: "Team Leader",
    Salary: "$73550",
    Payslip: "Generate Slip",
  },
  {
    Employee: "Jeffrey Warden",
    EmployeeID: "FT-0006",
    Image: "avatar-12.jpg",
    Email: "jeffreywarden@example.com",
    JoinDate: "1 Jan 2023",
    Role: "Web Developer",
    Salary: "$45000",
    Payslip: "Generate Slip",
  },
  {
    Employee: "John Doe",
    EmployeeID: "FT-0001",
    Image: "avatar-02.jpg",
    Email: "johndoe@example.com",
    JoinDate: "1 Jan 2023",
    Role: "Web Designer",
    Salary: "$59698",
    Payslip: "Generate Slip",
  },
  {
    Employee: "John Smith",
    EmployeeID: "FT-0003",
    Image: "avatar-10.jpg",
    Email: "johnsmith@example.com",
    JoinDate: "1 Jan 2023",
    Role: "Android Developer",
    Salary: "$48200",
    Payslip: "Generate Slip",
  },
  {
    Employee: "Lesley Grauer",
    EmployeeID: "FT-0008",
    Image: "avatar-01.jpg",
    Email: "lesleygrauer@example.com",
    JoinDate: "1 Jun 2023",
    Role: "Team Leader",
    Salary: "$75500",
    Payslip: "Generate Slip",
  },
  {
    Employee: "Loren Gatlin",
    EmployeeID: "FT-0010",
    Image: "avatar-04.jpg",
    Email: "lorengatlin@example.com",
    JoinDate: "1 Jan 2023",
    Role: "Android Developer",
    Salary: "$55000",
    Payslip: "Generate Slip",
  },
  {
    Employee: "Mike Litorus",
    EmployeeID: "FT-0004",
    Image: "avatar-05.jpg",
    Email: "mikelitorus@example.com",
    JoinDate: "1 Jan 2023",
    Role: "IOS Developer",
    Salary: "$59698",
    Payslip: "Generate Slip",
  },
  {
    Employee: "Richard Miles",
    EmployeeID: "FT-0002",
    Image: "avatar-09.jpg",
    Email: "richardmiles@example.com",
    JoinDate: "1 Jan 2023",
    Role: "Web Developer",
    Salary: "$72000",
    Payslip: "Generate Slip",
  },
  {
    Employee: "Tarah Shropshire",
    EmployeeID: "FT-0011",
    Image: "avatar-03.jpg",
    Email: "tarahshropshire@example.com",
    JoinDate: "1 Jan 2023",
    Role: "Android Developer",
    Salary: "$92400",
    Payslip: "Generate Slip",
  },
  {
    Employee: "Wilmer Deluna",
    EmployeeID: "FT-0005",
    Image: "avatar-11.jpg",
    Email: "wilmerdeluna@example.com",
    JoinDate: "1 Jan 2023",
    Role: "Team Leader",
    Salary: "$43000",
    Payslip: "Generate Slip",
  },
];
export default {
  data() {
    return {
      title: "Employee Salary",
      path: "Dashboard",
      text: "Salary",
      text1: "Add Salary",
      columns,
      data,
    };
  },
  name: "salary",
};
</script>
