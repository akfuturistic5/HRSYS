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

        <!-- Overtime Statistics -->
        <div class="row">
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div class="stats-info">
              <h6>Overtime Employee</h6>
              <h4>12 <span>this month</span></h4>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div class="stats-info">
              <h6>Overtime Hours</h6>
              <h4>118 <span>this month</span></h4>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div class="stats-info">
              <h6>Pending Request</h6>
              <h4>23</h4>
            </div>
          </div>
          <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
            <div class="stats-info">
              <h6>Rejected</h6>
              <h4>5</h4>
            </div>
          </div>
        </div>
        <!-- /Overtime Statistics -->

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
                    <h2 class="table-avatar blue-link">
                      <router-link to="profile" class="avatar"
                        ><img
                          :src="require(`@/assets/img/profiles/${record.Image}`)"
                          alt="User Image"
                      /></router-link>
                      <router-link to="profile">John Doe</router-link>
                    </h2>
                  </template>
                  <template v-else-if="column.key === 'Status'">
                    <div class="text-center">
                      <div class="action-label">
                        <a
                          class="btn btn-white btn-sm btn-rounded"
                          href="javascript:void(0);"
                        >
                          <i class="fa-regular fa-circle-dot text-purple"></i>
                          {{ record.Status }}
                        </a>
                      </div>
                    </div>
                  </template>
                  <template v-else-if="column.key === 'Approvedby'">
                    <h2 class="table-avatar">
                      <router-link to="profile" class="avatar avatar-xs"
                        ><img
                          :src="require(`@/assets/img/profiles/${record.ApproveImg}`)"
                          alt="User Image"
                      /></router-link>
                      <a href="javascript:;">{{ record.Approvedby }}</a>
                    </h2>
                  </template>
                  <template v-else-if="column.key === 'action'">
                    <td class="text-end">
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
                            data-bs-target="#edit_overtime"
                            ><i class="fa-solid fa-pencil m-r-5"></i> Edit</a
                          >
                          <a
                            class="dropdown-item"
                            href="javascript:;"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_overtime"
                            ><i class="fa-regular fa-trash-can m-r-5"></i> Delete</a
                          >
                        </div>
                      </div>
                    </td>
                  </template>
                </template>
              </a-table>
            </div>
          </div>
        </div>
      </div>
      <!-- /Page Content -->

      <overtime-model></overtime-model>
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
    title: "OT Date",
    dataIndex: "OTDate",
    sorter: {
      compare: (a, b) => {
        a = a.OTDate.toLowerCase();
        b = b.OTDate.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "OT Hours",
    dataIndex: "OTHours",
    sorter: {
      compare: (a, b) => {
        a = a.OTHours.toLowerCase();
        b = b.OTHours.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "OT Type",
    dataIndex: "OTType",
    sorter: {
      compare: (a, b) => {
        a = a.OTType.toLowerCase();
        b = b.OTType.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Description",
    dataIndex: "Description",
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
    title: "Approved by",
    dataIndex: "Approvedby",
    key: "Approvedby",
    sorter: {
      compare: (a, b) => {
        a = a.Approvedby.toLowerCase();
        b = b.Approvedby.toLowerCase();
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
    id: "1",
    Image: "avatar-02.jpg",
    Name: "John Doe",
    OTDate: "8 Mar 2023",
    OTHours: "2",
    OTType: "Normal day OT 1.5x",
    Description: "Lorem ipsum dollar",
    Status: "New",
    ApproveImg: "avatar-09.jpg",
    Approvedby: "Richard Miles",
  },
];
export default {
  data() {
    return {
      title: "Overtime",
      path: "Dashboard",
      text: "Overtime",
      text1: "Add Overtime",
      columns,
      data,
    };
  },
};
</script>
