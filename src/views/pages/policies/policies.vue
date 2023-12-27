<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>
    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <!-- Page Header -->
        <leaves-admin-header :title="title" :path="path" :text="text" :text1="text1" />
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
                  <template v-if="column.key === 'id'">
                    {{ record.id }}
                  </template>
                  <template v-else-if="column.key === 'Actions'">
                    <div class="text-end">
                      <div class="dropdown dropdown-action">
                        <a
                          href="javascript:void(0);"
                          class="action-icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          ><i class="material-icons">more_vert</i></a
                        >
                        <div class="dropdown-menu dropdown-menu-right">
                          <a class="dropdown-item" href="javascript:void(0);"
                            ><i class="fa-solid fa-download m-r-5"></i> Download</a
                          >
                          <a
                            class="dropdown-item"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_policy"
                            ><i class="fa-solid fa-pencil m-r-5"></i> Edit</a
                          >
                          <a
                            class="dropdown-item"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_policy"
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
      <policies-model />
    </div>
    <!-- /Page Wrapper -->
  </div>
</template>
<script>
const columns = [
  {
    title: "#",
    dataIndex: "id",
    key: "id",
    sorter: {
      compare: (a, b) => {
        a = a.id.toLowerCase();
        b = b.id.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Policy Name",
    dataIndex: "policyName",
    sorter: {
      compare: (a, b) => {
        a = a.policyName.toLowerCase();
        b = b.policyName.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Department",
    dataIndex: "department",
    sorter: {
      compare: (a, b) => {
        a = a.department.toLowerCase();
        b = b.department.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Description",
    dataIndex: "description",
    sorter: {
      compare: (a, b) => {
        a = a.description.toLowerCase();
        b = b.description.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Created",
    dataIndex: "created",
    sorter: {
      compare: (a, b) => {
        a = a.created.toLowerCase();
        b = b.created.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Action",
    key: "Actions",
    sorter: true,
    class: "text-end",
  },
];
const data = [
  {
    id: "1",
    policyName: "Leave Policy",
    department: "All Departments",
    description: "Lorem ipsum dollar",
    created: "19 Feb 2023",
  },
  {
    id: "2",
    policyName: "Permission Policy",
    department: "Marketing",
    description: "Lorem ipsum dollar",
    created: "20 Feb 2023",
  },
];
export default {
  data() {
    return {
      title: "Policies",
      path: "Dashboard",
      text: "Policies",
      text1: "Add Policy",
      columns,
      data,
    };
  },
  name: "policies",
};
</script>
