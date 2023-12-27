<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <!-- Page Header -->
        <employees-header :title="title" :path="path" :text="text" :text1="text1" />
        <!-- /Page Header -->

        <!-- Search Filter -->
        <search-filter></search-filter>
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
                  <template v-if="column.key === 'Name'">
                    <h2 class="table-avatar">
                      <router-link to="profile" class="avatar"
                        ><img
                          :src="require(`@/assets/img/profiles/${record.Image}`)"
                          alt="User Image"
                      /></router-link>
                      <router-link to="profile"
                        >{{ record.Name }} <span>{{ record.Title }}</span></router-link
                      >
                    </h2>
                  </template>
                  <template v-else-if="column.key === 'Role'">
                    <div class="dropdown">
                      <a
                        href="javascript:;"
                        class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        >Web Developer
                      </a>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="javascript:;">Software Engineer</a>
                        <a class="dropdown-item" href="javascript:;">Software Tester</a>
                        <a class="dropdown-item" href="javascript:;"
                          >Frontend Developer</a
                        >
                        <a class="dropdown-item" href="javascript:;">UI/UX Developer</a>
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
                          ><i class="material-icons">more_vert</i></a
                        >
                        <div class="dropdown-menu dropdown-menu-right">
                          <a
                            class="dropdown-item"
                            href="javascript:;"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_employee"
                            ><i class="fa-solid fa-pencil m-r-5"></i> Edit</a
                          >
                          <a
                            class="dropdown-item"
                            href="javascript:;"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_employee"
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

      <employee-model></employee-model>
    </div>
    <!-- /Page Wrapper -->
  </div>
</template>

<script>
const columns = [
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
    title: "Mobile",
    dataIndex: "Mobile",
    sorter: {
      compare: (a, b) => {
        a = a.Mobile.toLowerCase();
        b = b.Mobile.toLowerCase();
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
    sorter: true,
  },
  {
    title: "Action",
    sorter: true,
    key: "action",
  },
];

const data = [
  {
    Image: "avatar-02.jpg",
    Name: "John Doe",
    Title: "Web Designer",
    EmployeeID: "FT-0001",
    Email: "johndoe@example.com",
    Mobile: "9876543210",
    JoinDate: "1 Jan 2023",
  },
  {
    Image: "avatar-09.jpg",
    Name: "Richard Miles",
    Title: "Web Designer",
    EmployeeID: "FT-0002",
    Email: "richardmiles@example.com",
    Mobile: "9876543210",
    JoinDate: "18 Mar 2023",
  },
  {
    Image: "avatar-10.jpg",
    Name: "John Smith",
    Title: "Web Designer",
    EmployeeID: "FT-0003",
    Email: "Android Developer",
    Mobile: "9876543210",
    JoinDate: "1 Apr 2023",
  },
  {
    Image: "avatar-05.jpg",
    Name: "Mike Litorus",
    Title: "IOS Developer",
    EmployeeID: "FT-0004",
    Email: "mikelitorus@example.com",
    Mobile: "9876543210",
    JoinDate: "1 Apr 2023",
  },
  {
    Image: "avatar-11.jpg",
    Name: "Wilmer Deluna",
    Title: "Team Leader",
    EmployeeID: "FT-0005",
    Email: "wilmerdeluna@example.com",
    Mobile: "9876543210",
    JoinDate: "22 May 2023",
  },
  {
    Image: "avatar-12.jpg",
    Name: "Jeffrey Warden",
    Title: "Web Developer",
    EmployeeID: "FT-0006",
    Email: "jeffreywarden@example.com",
    Mobile: "9876543210",
    JoinDate: "16 Jun 2023",
  },
  {
    Image: "avatar-13.jpg",
    Name: "Bernardo Galaviz",
    Title: " Web Developer",
    EmployeeID: "FT-0007",
    Email: "bernardogalaviz@example.com",
    Mobile: "9876543210",
    JoinDate: "1 Jan 2023",
  },
];
export default {
  data() {
    return {
      columns,
      data,
      title: "Employee",
      path: "Dashboard",
      text: "Employee",
      text1: "Add Employee",
    };
  },
};
</script>
