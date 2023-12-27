<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <!-- Page Header -->
        <breadcrumb :title="title" :path="path" :text="text" />
        <!-- /Page Header -->
        <!-- Search Filter -->
        <user-reports-filter />
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
                  <template v-if="column.key === 'name'">
                    <div class="table-avatar">
                      <router-link to="profile" class="avatar"
                        ><img
                          :src="require(`@/assets/img/profiles/${record.image}`)"
                          alt="User Image"
                      /></router-link>
                      <router-link to="profile"
                        >{{ record.name }} <span>{{ record.company }}</span></router-link
                      >
                    </div>
                  </template>
                  <template v-else-if="column.key === 'role'">
                    <span :class="record.Class">{{ record.role }}</span>
                  </template>

                  <template v-else-if="column.key === 'status'">
                    <div class="dropdown action-label">
                      <a
                        href="javascript:void(0);"
                        class="btn btn-white btn-sm btn-rounded"
                        ><i class="fa-regular fa-circle-dot text-success"></i>
                        {{ record.status }}
                      </a>
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
    <!-- /Page Wrapper -->
  </div>
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
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: {
      compare: (a, b) => {
        a = a.name.toLowerCase();
        b = b.name.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Company",
    dataIndex: "company",
    sorter: {
      compare: (a, b) => {
        a = a.company.toLowerCase();
        b = b.company.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Email",
    dataIndex: "email",
    sorter: {
      compare: (a, b) => {
        a = a.email.toLowerCase();
        b = b.email.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
    sorter: {
      compare: (a, b) => {
        a = a.role.toLowerCase();
        b = b.role.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Designation",
    dataIndex: "designation",
    sorter: {
      compare: (a, b) => {
        a = a.designation.toLowerCase();
        b = b.designation.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    sorter: {
      compare: (a, b) => {
        a = a.status.toLowerCase();
        b = b.status.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
];
const data = [
  {
    id: "1",
    name: "Barry Cuda",
    company: "Global Technologies",
    email: "barrycuda@example.com",
    role: "Client",
    designation: "CEO",
    status: "Active",
    image: "avatar-19.jpg",
    Class: "badge bg-inverse-info",
  },
  {
    id: "2",
    name: "Daniel Porter",
    company: "Focus Technologies",
    email: "danielporter@example.com",
    role: "Admin",
    designation: "Admin Manager",
    status: "Active",
    image: "avatar-21.jpg",
    Class: "badge bg-inverse-danger",
  },
];
export default {
  data() {
    return {
      title: "User Report",
      path: "Dashboard",
      text: "User Reports",
      columns,
      data,
    };
  },
  name: "user-reports",
};
</script>
