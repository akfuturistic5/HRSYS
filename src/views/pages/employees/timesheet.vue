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
                          :src="
                            require(`@/assets/img/profiles/${record.Image}`)
                          "
                          alt="User Image"
                      /></router-link>
                      <router-link to="profile">{{
                        record.Employee
                      }}</router-link>
                    </h2>
                  </template>
                  <template v-else-if="column.key === 'Assigned'">
                    <div class="text-center">{{ record.Assigned }}</div>
                  </template>
                  <template v-else-if="column.key === 'Hours'">
                    <div class="text-center">{{ record.Hours }}</div>
                  </template>
                  <template v-else-if="column.key === 'Description'">
                    <div class="d-none d-sm-table-cell col-md-4">
                      {{ record.Description }}
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
                            data-bs-target="#edit_todaywork"
                            ><i class="fa-solid fa-pencil m-r-5"></i> Edit</a
                          >
                          <a
                            class="dropdown-item"
                            href="javascript:;"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_workdetail"
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
      <timesheet-model></timesheet-model>
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
    title: "Date",
    dataIndex: "Dates",
    sorter: {
      compare: (a, b) => {
        a = a.Dates.toLowerCase();
        b = b.Dates.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Projects",
    dataIndex: "Projects",
    sorter: {
      compare: (a, b) => {
        a = a.Projects.toLowerCase();
        b = b.Projects.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Assigned Hours",
    dataIndex: "Assigned",
    kay: "Assigned",
    sorter: {
      compare: (a, b) => {
        a = a.Assigned.toLowerCase();
        b = b.Assigned.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Hours",
    dataIndex: "Hours",
    kay: "Hours",
    sorter: {
      compare: (a, b) => {
        a = a.Hours.toLowerCase();
        b = b.Hours.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Description",
    dataIndex: "Description",
    key: "Description",
    class: "d-none d-sm-table-cell col-md-4",
    sorter: {
      compare: (a, b) => {
        a = a.Description.toLowerCase();
        b = b.Description.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
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
    Employee: "John Doe Web Designer",
    Dates: "8 Mar 2023",
    Projects: "Office Management",
    Assigned: "20",
    Hours: "7",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque.",
  },
  {
    Image: "avatar-09.jpg",
    Employee: "Richard Miles Web Developer",
    Dates: "8 Mar 2023",
    Projects: "Project Management",
    Assigned: "20",
    Hours: "12",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque.",
  },
  {
    Image: "avatar-10.jpg",
    Employee: "John Smith Android Developer",
    Dates: "8 Mar 2023",
    Projects: "Video Calling App",
    Assigned: "20",
    Hours: "12",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque.",
  },
  {
    Image: "avatar-05.jpg",
    Employee: "Mike Litorus IOS Developer",
    Dates: "8 Mar 2023",
    Projects: "Hospital Administration",
    Assigned: "20",
    Hours: "12",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque.",
  },
  {
    Image: "avatar-11.jpg",
    Employee: "Wilmer Deluna Team Leader",
    Dates: "8 Mar 2023",
    Projects: "Office Management",
    Assigned: "20",
    Hours: "7",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque.",
  },
  {
    Image: "avatar-12.jpg",
    Employee: "Jeffrey Warden Web Developer",
    Dates: "8 Mar 2023",
    Projects: "Project Management",
    Assigned: "20",
    Hours: "12",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque.",
  },
  {
    Image: "avatar-13.jpg",
    Employee: "Bernardo Galaviz Web Developer",
    Dates: "8 Mar 2023",
    Projects: "Video Calling App",
    Assigned: "20",
    Hours: "12",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque.",
  },
  {
    Image: "avatar-01.jpg",
    Employee: "Lesley Grauer Team Leader",
    Dates: "8 Mar 2023",
    Projects: "Hospital Administration",
    Assigned: "20",
    Hours: "12",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque.",
  },
  {
    Image: "avatar-16.jpg",
    Employee: "Jeffery Lalor Team Leader",
    Dates: "8 Mar 2023",
    Projects: "Ware house developement",
    Assigned: "20",
    Hours: "9",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque.",
  },
  {
    Image: "avatar-04.jpg",
    Employee: "Loren Gatlin Android Developer",
    Dates: "8 Mar 2023",
    Projects: "Office Management",
    Assigned: "20",
    Hours: "12",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque.",
  },
  {
    Image: "avatar-03.jpg",
    Employee: "Tarah Shropshire Android Developer",
    Dates: "8 Mar 2023",
    Projects: "Project Management",
    Assigned: "20",
    Hours: "12",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque.",
  },
  {
    Image: "avatar-08.jpg",
    Employee: "Catherine Manseau Android Developer",
    Dates: "8 Mar 2023",
    Projects: "Video Calling App",
    Assigned: "20",
    Hours: "12",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque.",
  },
];
export default {
  data() {
    return {
      columns,
      data,
      title: "Timesheet",
      path: "Dashboard",
      text: "Timesheet",
      text1: "Add Today Work",
    };
  },
};
</script>
