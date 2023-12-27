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
        <project-reports-filter />
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
                  <template v-if="column.key === 'Status'">
                    <div class="dropdown action-label">
                      <a
                        href="javascript:void(0);"
                        class="btn btn-white btn-sm btn-rounded"
                        ><i class="fa-regular fa-circle-dot text-success"></i>
                        {{ record.Status }}
                      </a>
                    </div>
                  </template>
                  <template v-else-if="column.key === 'name'">
                    <ul class="team-members">
                      <li>
                        <a
                          href="javascript:void(0);"
                          data-bs-toggle="tooltip"
                          title=""
                          data-original-title="Jeffery Lalor"
                          ><img
                            :src="require(`@/assets/img/profiles/${record.image}`)"
                            alt="User Image"
                        /></a>
                      </li>
                    </ul>
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
    title: "Task Name",
    dataIndex: "TaskName",
    sorter: {
      compare: (a, b) => {
        a = a.TaskName.toLowerCase();
        b = b.TaskName.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Start Date",
    dataIndex: "StartDate",
    sorter: {
      compare: (a, b) => {
        a = a.StartDate.toLowerCase();
        b = b.StartDate.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "End Date",
    dataIndex: "EndDate",
    sorter: {
      compare: (a, b) => {
        a = a.EndDate.toLowerCase();
        b = b.EndDate.toLowerCase();
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
    title: "Assigned To",
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
];
const data = [
  {
    id: "1",
    TaskName: "Hospital Administration",
    StartDate: "26 Mar 2023",
    EndDate: "26 Apr 2023",
    Status: "Active",
    name: "Jeffery Lalor",
    image: "avatar-16.jpg",
  },
  {
    id: "2",
    TaskName: "Hospital Administration",
    StartDate: "26 Mar 2023",
    EndDate: "26 Apr 2023",
    Status: "Active",
    name: "Jeffery Lalor",
    image: "avatar-16.jpg",
  },
];
export default {
  data() {
    return {
      title: "Task Reports",
      path: "Dashboard",
      text: "Task Reports",
      columns,
      data,
    };
  },
  name: "task-reports",
};
</script>
