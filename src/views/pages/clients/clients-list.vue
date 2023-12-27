<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>
    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <!-- Page Header -->
        <clients-header :title="title" :path="path" :text="text" :text1="text1" />
        <!-- /Page Header -->
        <!-- Search Filter -->
        <clients-filter></clients-filter>
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
                    <div class="table-avatar">
                      <router-link to="client-profile" class="avatar"
                        ><img
                          :src="require(`@/assets/img/profiles/${record.Image}`)"
                          alt="User Image"
                      /></router-link>
                      <router-link to="client-profile">{{ record.Name }}</router-link>
                    </div>
                  </template>
                  <template v-else-if="column.key === 'Status'">
                    <div>
                      <div class="dropdown action-label">
                        <a
                          href="javascript:void(0);"
                          class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          ><i :class="record.Class"></i>
                          {{ record.Status }}
                        </a>
                        <div class="dropdown-menu">
                          <a class="dropdown-item" href="javascript:void(0);"
                            ><i class="fa-regular fa-circle-dot text-success"></i>
                            Active</a
                          >
                          <a class="dropdown-item" href="javascript:void(0);"
                            ><i class="fa-regular fa-circle-dot text-danger"></i>
                            Inactive</a
                          >
                        </div>
                      </div>
                    </div>
                  </template>
                  <template v-else-if="column.key === 'Action'">
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
                          data-bs-target="#edit_client"
                          ><i class="fa-solid fa-pencil m-r-5"></i> Edit</a
                        >
                        <a
                          class="dropdown-item"
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_client"
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
      <clients-list-model />
    </div>
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
    title: "Client Id",
    dataIndex: "ClientId",
    sorter: {
      compare: (a, b) => {
        a = a.ClientId.toLowerCase();
        b = b.ClientId.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Contact Person",
    dataIndex: "ContactPerson",
    sorter: {
      compare: (a, b) => {
        a = a.ContactPerson.toLowerCase();
        b = b.ContactPerson.toLowerCase();
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
    dataIndex: "Action",
    key: "Action",
    sorter: true,
  },
];
const data = [
  {
    Name: "Carlson Tech",
    ClientId: "CLT-0008",
    ContactPerson: "Betty Carlson",
    Email: "bettycarlson@example.com",
    Mobile: "9876543210",
    Class: "fa-regular fa-circle-dot text-danger",
    Status: "Inactive",
    Image: "avatar-22.jpg",
  },
  {
    Name: "Cream Inc",
    ClientId: "CLT-0003",
    ContactPerson: "Ruby Bartlett",
    Email: "rubybartlett@example.com",
    Mobile: "9876543210",
    Class: "fa-regular fa-circle-dot text-success",
    Status: "Active",
    Image: "avatar-07.jpg",
  },
  {
    Name: "Delta Infotech",
    ClientId: "CLT-0002",
    ContactPerson: "Tressa Wexler",
    Email: "tressawexler@example.com",
    Mobile: "9876543210",
    Class: "fa-regular fa-circle-dot text-danger",
    Status: "Inactive",
    Image: "avatar-29.jpg",
  },
  {
    Name: "Global Technologies",
    ClientId: "CLT-0001",
    ContactPerson: "Barry Cuda",
    Email: "barrycuda@example.com",
    Mobile: "9876543210",
    Class: "fa-regular fa-circle-dot text-success",
    Status: "Active",
    Image: "avatar-19.jpg",
  },
  {
    Name: "International Software Inc",
    ClientId: "CLT-0006",
    ContactPerson: "Walter Weaver",
    Email: "walterweaver@example.com",
    Mobile: "9876543210",
    Class: "fa-regular fa-circle-dot text-success",
    Status: "Active",
    Image: "avatar-18.jpg",
  },
  {
    Name: "Mercury Software Inc",
    ClientId: "CLT-0007",
    ContactPerson: "Amanda Warren",
    Email: "amandawarren@example.com",
    Mobile: "9876543210",
    Class: "fa-regular fa-circle-dot text-success",
    Status: "Active",
    Image: "avatar-28.jpg",
  },
  {
    Name: "Mustang Technologies",
    ClientId: "CLT-0005",
    ContactPerson: "Daniel Deacon",
    Email: "danieldeacon@example.com",
    Mobile: "9876543210",
    Class: "fa-regular fa-circle-dot text-success",
    Status: "Active",
    Image: "avatar-14.jpg",
  },
  {
    Name: "Wellware Company",
    ClientId: "CLT-0004",
    ContactPerson: "Misty Tison",
    Email: "mistytison@example.com",
    Mobile: "9876543210",
    Class: "fa-regular fa-circle-dot text-success",
    Status: "Active",
    Image: "avatar-06.jpg",
  },
];
export default {
  data() {
    return {
      title: "Clients",
      path: "Dashboard",
      text: "Clients",
      text1: "Add Client",
      columns,
      data,
    };
  },
  name: "clients-list",
};
</script>
