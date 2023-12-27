<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <!-- Page Header -->
        <shift-header
          :title="title"
          :path="path"
          :text="text"
          :text1="text1"
          :text2="text2"
          :text3="text3"
        />
        <!-- /Page Header -->

        <!-- Content Starts -->
        <!-- Search Filter -->
        <shift-scheduling-filter/>
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
                  <template v-if="column.key === 'Name'">
                    <h2 class="table-avatar">
                      <router-link to="profile" class="avatar"
                        ><img
                          :src="require(`@/assets/img/profiles/${record.Image}`)"
                          alt="User Image"
                      /></router-link>
                      <router-link to="profile">{{ record.Name }}</router-link>
                    </h2>
                  </template>
                  <template v-else-if="column.key === 'Fri21'">
                    <div class="user-add-shedule-list">
                      <h2>
                        <a
                          href="javascript:;"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_schedule"
                          :class="record.ClassOne"
                        >
                          <span class="username-info m-b-10">{{ record.Content }}</span>
                          <span class="userrole-info">{{ record.Role }}</span>
                        </a>
                      </h2>
                    </div>
                  </template>
                  <template v-else-if="column.key === 'Sat22'">
                    <div class="user-add-shedule-list">
                      <a
                        href="javascript:;"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span><i :class="record.ClassTwo"></i></span>
                      </a>
                    </div>
                  </template>
                  <template v-else-if="column.key === 'Sun23'">
                    <div class="user-add-shedule-list">
                      <a
                        href="javascript:;"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span><i :class="record.ClassTwo"></i></span>
                      </a>
                    </div>
                  </template>
                  <template v-else-if="column.key === 'Mon24'">
                    <div class="user-add-shedule-list">
                      <a
                        href="javascript:;"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span><i :class="record.ClassTwo"></i></span>
                      </a>
                    </div>
                  </template>
                  <template v-else-if="column.key === 'Tue25'">
                    <div class="user-add-shedule-list">
                      <a
                        href="javascript:;"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span><i :class="record.ClassTwo"></i></span>
                      </a>
                    </div>
                  </template>
                  <template v-else-if="column.key === 'Wed26'">
                    <div class="user-add-shedule-list">
                      <a
                        href="javascript:;"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span><i :class="record.ClassTwo"></i></span>
                      </a>
                    </div>
                  </template>
                  <template v-else-if="column.key === 'Thu27'">
                    <div class="user-add-shedule-list">
                      <h2>
                        <a
                          href="javascript:;"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_schedule"
                          :class="record.ClassOne"
                        >
                          <span class="username-info m-b-10">{{ record.Content }}</span>
                          <span class="userrole-info">{{ record.Role }}</span>
                        </a>
                      </h2>
                    </div>
                  </template>
                  <template v-else-if="column.key === 'Fri28'">
                    <div class="user-add-shedule-list">
                      <a
                        href="javascript:;"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span><i :class="record.ClassTwo"></i></span>
                      </a>
                    </div>
                  </template>
                  <template v-else-if="column.key === 'Sat29'">
                    <div class="user-add-shedule-list">
                      <a
                        href="javascript:;"
                        data-bs-toggle="modal"
                        data-bs-target="#add_schedule"
                      >
                        <span><i :class="record.ClassTwo"></i></span>
                      </a>
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

      <shift-list-model></shift-list-model>
      <edit-schedule-model></edit-schedule-model>
    </div>
    <!-- /Page Wrapper -->
  </div>
</template>

<script>
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
const columns = [
  {
    title: "Scheduled Shift",
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
    title: "Fri 21",
    dataIndex: "Fri21",
    key: "Fri21",
    sorter: {
      compare: (a, b) => {
        a = a.Fri21.toLowerCase();
        b = b.Fri21.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Sat 22",
    dataIndex: "Sat22",
    key: "Sat22",
    sorter: {
      compare: (a, b) => {
        a = a.Sat22.toLowerCase();
        b = b.Sat22.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Sun 23",
    dataIndex: "Sun23",
    key: "Sun23",
    sorter: {
      compare: (a, b) => {
        a = a.Sun23.toLowerCase();
        b = b.Sun23.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Mon 24",
    dataIndex: "Mon24",
    key: "Mon24",
    sorter: {
      compare: (a, b) => {
        a = a.Mon24.toLowerCase();
        b = b.Mon24.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Tue 25",
    dataIndex: "Tue25",
    key: "Tue25",
    sorter: {
      compare: (a, b) => {
        a = a.Tue25.toLowerCase();
        b = b.Tue25.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Wed 26",
    dataIndex: "Wed26",
    key: "Wed26",
    sorter: {
      compare: (a, b) => {
        a = a.Wed26.toLowerCase();
        b = b.Wed26.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Thu 27",
    dataIndex: "Thu27",
    key: "Thu27",
    sorter: {
      compare: (a, b) => {
        a = a.Thu27.toLowerCase();
        b = b.Thu27.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Fri 28",
    dataIndex: "Fri28",
    key: "Fri28",
    sorter: {
      compare: (a, b) => {
        a = a.Fri28.toLowerCase();
        b = b.Fri28.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Sat 29",
    dataIndex: "Sat29",
    key: "Sat29",
    sorter: {
      compare: (a, b) => {
        a = a.Sat29.toLowerCase();
        b = b.Sat29.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
];
const data = [
  {
    Image: "avatar-02.jpg",
    Name: "John Doe Web Designer",
    Content: "6:30 am - 9:30 pm ( 14 hrs 15 mins)",
    Role: "Web Designer - SMARTHR",
    Fri21: "",
    Sat22: "",
    Sun23: "",
    Mon24: "",
    Tue25: "",
    Wed26: "",
    Thu27: "",
    Fri28: "",
    Sat29: "",
    ClassOne: "green-border",
    ClassTwo: "fa-solid fa-plus",
  },
  {
    Image: "avatar-09.jpg",
    Name: "Richard Miles Web Developer",
    Content: "6:30 am - 9:30 pm ( 14 hrs 15 mins)",
    Role: "Web Designer - SMARTHR",
    Fri21: "",
    Sat22: "",
    Sun23: "",
    Mon24: "",
    Tue25: "",
    Wed26: "",
    Thu27: "",
    Fri28: "",
    Sat29: "",
    ClassOne: "green-border",
    ClassTwo: "fa-solid fa-plus",
  },
  {
    Image: "avatar-10.jpg",
    Name: "John Smith Android Developer",
    Content: "6:30 am - 9:30 pm ( 14 hrs 15 mins)",
    Role: "Web Designer - SMARTHR",
    Fri21: "",
    Sat22: "",
    Sun23: "",
    Mon24: "",
    Tue25: "",
    Wed26: "",
    Thu27: "",
    Fri28: "",
    Sat29: "",
    ClassOne: "green-border",
    ClassTwo: "fa-solid fa-plus",
  },
  {
    Image: "avatar-05.jpg",
    Name: "Mike Litorus IOS Developer",
    Content: "6:30 am - 9:30 pm ( 14 hrs 15 mins)",
    Role: "Web Designer - SMARTHR",
    Fri21: "",
    Sat22: "",
    Sun23: "",
    Mon24: "",
    Tue25: "",
    Wed26: "",
    Thu27: "",
    Fri28: "",
    Sat29: "",
    ClassOne: "green-border",
    ClassTwo: "fa-solid fa-plus",
  },
  {
    Image: "avatar-11.jpg",
    Name: "Wilmer Deluna Team Leader",
    Content: "6:30 am - 9:30 pm ( 14 hrs 15 mins)",
    Role: "Web Designer - SMARTHR",
    Fri21: "",
    Sat22: "",
    Sun23: "",
    Mon24: "",
    Tue25: "",
    Wed26: "",
    Thu27: "",
    Fri28: "",
    Sat29: "",
    ClassOne: "green-border",
    ClassTwo: "fa-solid fa-plus",
  },
  {
    Image: "avatar-12.jpg",
    Name: "Jeffrey Warden Web Developer",
    Content: "6:30 am - 9:30 pm ( 14 hrs 15 mins)",
    Role: "Web Designer - SMARTHR",
    Fri21: "",
    Sat22: "",
    Sun23: "",
    Mon24: "",
    Tue25: "",
    Wed26: "",
    Thu27: "",
    Fri28: "",
    Sat29: "",
    ClassOne: "green-border",
    ClassTwo: "fa-solid fa-plus",
  },
  {
    Image: "avatar-13.jpg",
    Name: "Bernardo Galaviz Web Developer",
    Content: "6:30 am - 9:30 pm ( 14 hrs 15 mins)",
    Role: "Web Designer - SMARTHR",
    Fri21: "",
    Sat22: "",
    Sun23: "",
    Mon24: "",
    Tue25: "",
    Wed26: "",
    Thu27: "",
    Fri28: "",
    Sat29: "",
    ClassOne: "green-border",
    ClassTwo: "fa-solid fa-plus",
  },
];
export default {
  data() {
    return {
      select2: null,
      title: "Daily Scheduling",
      path: "Dashboard",
      text: "Employees",
      text1: "Shift Scheduling",
      text2: "Shifts",
      text3: "Assign Shifts",
      employeeID: "",
      isFocused: false,
      Finance: [
        "All Department",
        "Finance",
        "Finance and Management",
        "Hr & Finance",
        "ITech",
      ],
      startdate: currentDate,
      startdateone: currentDateOne,
      data,
      columns,
    };
  },
  methods: {
    addFocusClass() {
      this.isFocused = true;
    },
    removeFocusClass() {
      this.isFocused = false;
    },
  },
};
</script>
