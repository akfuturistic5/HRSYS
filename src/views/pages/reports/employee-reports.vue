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
                  <template v-if="column.key === 'EmployeeName'">
                    <div class="table-avatar">
                      <router-link to="profile" class="avatar"
                        ><img
                          :src="require(`@/assets/img/profiles/${record.Image}`)"
                          alt="User Image"
                      /></router-link>
                      <router-link to="profile" class="text-primary"
                        >{{ record.EmployeeName }}
                        <span>{{ record.Number }}</span></router-link
                      >
                    </div>
                  </template>
                  <template v-else-if="column.key === 'Email'">
                    <div class="text-info">johndoe@example.com</div>
                  </template>
                  <template v-else-if="column.key === 'Status'">
                    <button class="btn btn-outline-success btn-sm">Active</button>
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
    title: "Employee Type",
    dataIndex: "EmployeeType",
    sorter: {
      compare: (a, b) => {
        a = a.EmployeeType.toLowerCase();
        b = b.EmployeeType.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Email",
    dataIndex: "Email",
    key: "Email",
    sorter: {
      compare: (a, b) => {
        a = a.Email.toLowerCase();
        b = b.Email.toLowerCase();
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
    title: "Joining Date",
    dataIndex: "JoiningDate",
    sorter: {
      compare: (a, b) => {
        a = a.JoiningDate.toLowerCase();
        b = b.JoiningDate.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "DOB",
    dataIndex: "DOB",
    sorter: {
      compare: (a, b) => {
        a = a.DOB.toLowerCase();
        b = b.DOB.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Martial Status",
    dataIndex: "MartialStatus",
    sorter: {
      compare: (a, b) => {
        a = a.MartialStatus.toLowerCase();
        b = b.MartialStatus.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Gender",
    dataIndex: "Gender",
    sorter: {
      compare: (a, b) => {
        a = a.Gender.toLowerCase();
        b = b.Gender.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Terminated Date",
    dataIndex: "TerminatedDate",
    sorter: {
      compare: (a, b) => {
        a = a.TerminatedDate.toLowerCase();
        b = b.TerminatedDate.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Relieving Date",
    dataIndex: "RelievingDate",
    sorter: {
      compare: (a, b) => {
        a = a.RelievingDate.toLowerCase();
        b = b.RelievingDate.toLowerCase();
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
    title: "Address",
    dataIndex: "Address",
    sorter: {
      compare: (a, b) => {
        a = a.Address.toLowerCase();
        b = b.Address.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Contact Number",
    dataIndex: "ContactNumber",
    sorter: {
      compare: (a, b) => {
        a = a.ContactNumber.toLowerCase();
        b = b.ContactNumber.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Emercency Contact Details",
    dataIndex: "EmercencyContactDetails",
    sorter: {
      compare: (a, b) => {
        a = a.EmercencyContactDetails.toLowerCase();
        b = b.EmercencyContactDetails.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Experience",
    dataIndex: "Experience",
    sorter: {
      compare: (a, b) => {
        a = a.Experience.toLowerCase();
        b = b.Experience.toLowerCase();
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
];
const data = [
  {
    EmployeeName: "John Doe",
    Number: "#0001",
    EmployeeType: "Employee",
    Email: "johndoe@example.com",
    Department: "Design",
    Designation: "UI Design",
    JoiningDate: "20 Aug 2023",
    DOB: "03 Mar 1992",
    MartialStatus: "Married",
    Gender: "Male",
    TerminatedDate: "-",
    RelievingDate: "-",
    Salary: "$20000",
    Address: "1861 Bayonne Ave, Manchester Township, NJ, 08759",
    ContactNumber: "9876543210",
    EmercencyContactDetails: "7894561235",
    Experience: "0 years 4 months and 9 days",
    Status: "Active",
    Image: "avatar-02.jpg",
  },
  {
    EmployeeName: "John Smith",
    Number: "#003",
    EmployeeType: "Employee",
    Email: "johnsmith@example.com",
    Department: "IOS Developer",
    Designation: "Development Manager",
    JoiningDate: "03 Sep 2023",
    DOB: "16 Apr 1984",
    MartialStatus: "Married",
    Gender: "Male",
    TerminatedDate: "-",
    RelievingDate: "-",
    Salary: "$27000",
    Address: "1861 Bayonne Ave, Manchester Township, NJ, 08759",
    ContactNumber: "9876543210",
    EmercencyContactDetails: "7894561235",
    Experience: "0 years 3 months and 21 days",
    Status: "Active",
    Image: "avatar-10.jpg",
  },
  {
    EmployeeName: "Mike Litorus",
    Number: "#004",
    EmployeeType: "Employee",
    Email: "mikelitorus@example.com",
    Department: "Web Developer",
    Designation: "IT Support",
    JoiningDate: "15 Nov 2023",
    DOB: "15 Jul 2005",
    MartialStatus: "Single",
    Gender: "Male",
    TerminatedDate: "-",
    RelievingDate: "-",
    Salary: "$15000",
    Address: "1861 Bayonne Ave, Manchester Township, NJ, 08759",
    ContactNumber: "9876543210",
    EmercencyContactDetails: "7894561235",
    Experience: "0 years 1 months and 9 days",
    Status: "Active",
    Image: "avatar-05.jpg",
  },
  {
    EmployeeName: "Richard Miles",
    Number: "#0002",
    EmployeeType: "Employee",
    Email: "richardmiles@example.com",
    Department: "Android Developer",
    Designation: "IT Support",
    JoiningDate: "01 Jul 2023",
    DOB: "05 Dec 1979",
    MartialStatus: "Married",
    Gender: "Male",
    TerminatedDate: "-",
    RelievingDate: "-",
    Salary: "$15000",
    Address: "1861 Bayonne Ave, Manchester Township, NJ, 08759",
    ContactNumber: "9876543210",
    EmercencyContactDetails: "7894561235",
    Experience: "0 years 5 months and 24 days",
    Status: "Active",
    Image: "avatar-09.jpg",
  },
  {
    EmployeeName: "Wilmer Deluna",
    Number: "#005",
    EmployeeType: "Employee",
    Email: "wilmerdeluna@example.com",
    Department: "Team Leader",
    Designation: "Development Manager",
    JoiningDate: "01 Dec 2023",
    DOB: "21 Jun 1984",
    MartialStatus: "Married",
    Gender: "Male",
    TerminatedDate: "-",
    RelievingDate: "-",
    Salary: "$25000",
    Address: "1861 Bayonne Ave, Manchester Township, NJ, 08759",
    ContactNumber: "9876543210",
    EmercencyContactDetails: "7894561235",
    Experience: "0 years 0 months and 24 days",
    Status: "Active",
    Image: "avatar-11.jpg",
  },
];
export default {
  data() {
    return {
      title: "Employee Report",
      path: "Dashboard",
      text: "Employee Report",
      text1: "PDF",
      columns,
      data,
    };
  },
  name: "employee-reports",
};
</script>
