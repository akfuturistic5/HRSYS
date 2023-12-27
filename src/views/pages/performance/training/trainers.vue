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

        <div class="row">
          <div class="col-md-12">
            <div class="showentries">
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
                  <template v-if="column.key === 'title'">
                    <h2 class="table-avatar">
                      <router-link to="profile" class="avatar"
                        ><img
                          :src="
                            require(`@/assets/img/profiles/${record.Image}`)
                          "
                          alt="User Image"
                      /></router-link>
                      <router-link to="profile">John Smith </router-link>
                    </h2>
                  </template>
                  <template v-else-if="column.key === 'Status'">
                    <div class="dropdown action-label">
                      <a
                        class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                        href="javascript:;"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i :class="record.class"></i> {{ record.Status }}
                      </a>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="javascript:;"
                          ><i class="fa-regular fa-circle-dot text-success"></i>
                          Active</a
                        >
                        <a class="dropdown-item" href="javascript:;"
                          ><i class="fa-regular fa-circle-dot text-danger"></i>
                          Inactive</a
                        >
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
                          ><i class="material-icons">{{ record.Action }}</i></a
                        >
                        <div class="dropdown-menu dropdown-menu-right">
                          <a
                            class="dropdown-item"
                            href="javascript:;"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_type"
                            ><i class="fa-solid fa-pencil m-r-5"></i> Edit</a
                          >
                          <a
                            class="dropdown-item"
                            href="javascript:;"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_type"
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
  <trainer-model></trainer-model>
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
    dataIndex: "Name",
    key: "title",
    sorter: {
      compare: (a, b) => {
        a = a.Name.toLowerCase();
        b = b.Name.toLowerCase();
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
    title: "Description",
    dataIndex: "Description",
    key: "Description",
    sorter: {
      compare: (a, b) => {
        a = a.Description.toLowerCase();
        b = b.Description.toLowerCase();
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
    key: "action",
    sorter: true,
    class: "text-end",
  },
];
const data = [
  {
    id: "1",
    Name: "John Doe",
    Image: "avatar-02.jpg",
    ContactNumber: "9876543210",
    Email: "johndoe@example.com",
    Description: "Lorem ipsum dollar",
    Status: "Inactive",
    Action: "more_vert",
    class: "fa-regular fa-circle-dot text-danger",
  },
  {
    id: "2",
    Name: "Mike Litorus",
    Image: "avatar-05.jpg",
    ContactNumber: "9876543120",
    Email: "mikelitorus@example.com",
    Description: "Lorem ipsum dollar",
    Status: "Active",
    Action: "more_vert",
    class: "fa-regular fa-circle-dot text-success",
  },
  {
    id: "3",
    Name: "Wilmer Deluna",
    Image: "avatar-11.jpg",
    ContactNumber: "9876543210",
    Email: "wilmerdeluna@example.com",
    Description: "Lorem ipsum dollar",
    Status: "Inactive",
    Action: "more_vert",
    class: "fa-regular fa-circle-dot text-danger",
  },
  {
    id: "4",
    Name: "John Smith",
    Image: "avatar-10.jpg",
    ContactNumber: "9876543210",
    Email: "johnsmith@example.com",
    Description: "Lorem ipsum dollar",
    Status: "Inactive",
    Action: "more_vert",
    class: "fa-regular fa-circle-dot text-danger",
  },
  {
    id: "5",
    Name: "Richard Miles",
    Image: "avatar-09.jpg",
    ContactNumber: "9876543210",
    Email: "richardmiles@example.com",
    Description: "Lorem ipsum dollar",
    Status: "Inactive",
    Action: "more_vert",
    class: "fa-regular fa-circle-dot text-danger",
  },
];
export default {
  data() {
    return {
      title: "Trainers",
      path: "Dashboard",
      text: "Trainers",
      text1: "Add New",
      columns,
      data,
    };
  },
};
</script>
