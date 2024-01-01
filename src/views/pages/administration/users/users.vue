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

        <!-- Search Filter -->
        <users-filter />
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
                    <h2 class="table-avatar">
                      <router-link to="profile" class="avatar"
                        ><img
                          :src="
                            require(`@/assets/img/profiles/${record.Image}`)
                          "
                          alt="User Image"
                      /></router-link>
                      <router-link to="profile"
                        >{{ record.Name }}
                        <span>{{ record.Job }}</span></router-link
                      >
                    </h2>
                  </template>
                  <template v-if="column.key === 'Role'">
                    <div>
                      <span :class="record.class">{{ record.Role }}</span>
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
                            data-bs-target="#edit_user"
                            ><i class="fa-solid fa-pencil m-r-5"></i> Edit</a
                          >
                          <a
                            class="dropdown-item"
                            href="javascript:;"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_user"
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
  </div>
  <usermodel />
</template>
<script>
import usermodel from "@/components/model/usermodel.vue";
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
    title: "Company",
    dataIndex: "Company",
    sorter: {
      compare: (a, b) => {
        a = a.Company.toLowerCase();
        b = b.Company.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Created Date",
    dataIndex: "CreatedDate",
    sorter: {
      compare: (a, b) => {
        a = a.CreatedDate.toLowerCase();
        b = b.CreatedDate.toLowerCase();
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
    title: "Action",
    key: "action",
    sorter: true,
    class: "text-end",
  },
];
const data = [
  {
    Name: "Barry Cuda",
    Job: "Global Technologies",
    Image: "avatar-21.jpg",
    Email: "barrycuda@example.com",
    Company: "Global Technologies",
    CreatedDate: "1 Jan 2023",
    Role: "Client",
    Action: "more_vert",
    class: "badge bg-inverse-info",
  },
  {
    Name: "Daniel Porter",
    Job: "Admin",
    Image: "avatar-02.jpg",
    Email: "danielporter@example.com",
    Company: "iTensia USA",
    CreatedDate: "1 Jan 2023",
    Role: "Admin",
    Action: "more_vert",
    class: "badge bg-inverse-danger",
  },
  {
    Name: "John Doe",
    Job: "Web Designer",
    Image: "avatar-09.jpg",
    Email: "johndoe@example.com",
    Company: "iTensia USA",
    CreatedDate: "1 Jan 2023",
    Role: "Employee",
    Action: "more_vert",
    class: "badge bg-inverse-success",
  },
  {
    Name: "John Smith",
    Job: "Android Developer",
    Image: "avatar-10.jpg",
    Email: "johnsmith@example.com",
    Company: "iTensia USA",
    CreatedDate: "1 Jan 2023",
    Role: "Employee",
    Action: "more_vert",
    class: "badge bg-inverse-success",
  },
  {
    Name: "Mike Litorus",
    Job: "IOS Developer",
    Image: "avatar-05.jpg",
    Email: "mikelitorus@example.com",
    Company: "iTensia USA",
    CreatedDate: "1 Jan 2023",
    Role: "Employee",
    Action: "more_vert",
    class: "badge bg-inverse-success",
  },
  {
    Name: "Richard Miles",
    Job: "Admin",
    Image: "avatar-11.jpg",
    Email: "richardmiles@example.com",
    Company: "iTensia USA",
    CreatedDate: "1 Jan 2023",
    Role: "Employee",
    Action: "more_vert",
    class: "badge bg-inverse-success",
  },
  {
    Name: "Wilmer Deluna",
    Job: "Team Leader",
    Image: "avatar-19.jpg",
    Email: "wilmerdeluna@example.com",
    Company: "iTensia USA",
    CreatedDate: "1 Jan 2023",
    Role: "Employee",
    Action: "more_vert",
    class: "badge bg-inverse-success",
  },
];

export default {
  components: { usermodel },
  data() {
    return {
      title: "Users",
      path: "Dashboard",
      text: "Users",
      text1: "Add User",
      columns,
      data,
    };
  },
};
</script>
