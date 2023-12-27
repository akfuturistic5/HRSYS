<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <!-- Page Header -->
        <jobbreadcrumb
          :title="title"
          :path="path"
          :text="text"
          :text1="text1"
          :text2="text2"
        />
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
                  <template v-if="column.key === 'Status'">
                    <div class="action-label">
                      <a
                        class="btn btn-white btn-sm btn-rounded"
                        href="javascript:void(0);"
                      >
                        <i class="fa-regular fa-circle-dot text-success"></i>
                        {{ record.Status }}
                      </a>
                    </div>
                  </template>
                  <template v-else-if="column.key === 'action'">
                    <div class="text-center">
                      <div class="dropdown dropdown-action">
                        <a
                          href="javascript:;"
                          class="action-icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          ><i class="material-icons">{{ record.actions }}</i></a
                        >
                        <div class="dropdown-menu dropdown-menu-right">
                          <a
                            class="dropdown-item"
                            href="javascript:;"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_job"
                            ><i class="fa-solid fa-pencil m-r-5"></i> Edit</a
                          >
                          <a
                            class="dropdown-item"
                            href="javascript:;"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_job"
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
  <experiancemodel></experiancemodel>
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
    title: "Experiance",
    dataIndex: "Experiance",
    key: "Experiance",
    sorter: {
      compare: (a, b) => {
        a = a.Experiance.toLowerCase();
        b = b.Experiance.toLowerCase();
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
    class: "text-center",
  },
];
const data = [
  {
    id: "1",
    Experiance: "1-2 ",
    Status: "Active",
    actions: "more_vert",
  },
  {
    id: "2",
    Experiance: "1-3",
    Status: "Active",
    actions: "more_vert",
  },
  {
    id: "3",
    Experiance: "4-7",
    Status: "Active ",
    actions: "more_vert",
  },
];

export default {
  data() {
    return {
      title: "Experience Level",
      path: "Dashboard",
      text: "Jobs",
      text1: "Experience Level",
      text2: "Add Experience Level",
      columns,
      data,
    };
  },
};
</script>


