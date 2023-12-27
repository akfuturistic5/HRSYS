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
                  <template v-if="column.key === 'Designation'">
                    <div>{{ record.Designation }}</div>
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
                            data-bs-target="#edit_designation"
                            ><i class="fa-solid fa-pencil m-r-5"></i> Edit</a
                          >
                          <a
                            class="dropdown-item"
                            href="javascript:;"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_designation"
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
      <designation-model></designation-model>
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
    title: "Designation",
    dataIndex: "Designation",
    key: "Designation",
    sorter: {
      compare: (a, b) => {
        a = a.Designation.toLowerCase();
        b = b.Designation.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Department",
    dataIndex: "Department",
    sorter: {
      compare: (a, b) => {
        a = a.Department.toLowerCase();
        b = b.Department.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Action",
    sorter: true,
    key: "action",
    class: "text-end",
  },
];

const data = [
  {
    id: "1",
    Designation: "Web Designer",
    Department: "Web Development",
  },
  {
    id: "2",
    Designation: "Web Developer",
    Department: "Web Development",
  },
  {
    id: "3",
    Designation: "Android Developer",
    Department: "Application Development",
  },
  {
    id: "4",
    Designation: "IOS Developer",
    Department: "Application Development",
  },
  {
    id: "5",
    Designation: "UI Designer",
    Department: "Application Development",
  },
  {
    id: "6",
    Designation: "UX Designer",
    Department: "Application Development",
  },
  {
    id: "7",
    Designation: "IT Technician",
    Department: "Application Development",
  },
  {
    id: "8",
    Designation: "Product Manager",
    Department: "Application Development",
  },
  {
    id: "9",
    Designation: "SEO Analyst",
    Department: "Application Development",
  },
  {
    id: "10",
    Designation: "Front End Designer",
    Department: "Application Development",
  },
  {
    id: "11",
    Designation: "Front End Developer",
    Department: "Application Development",
  },
  {
    id: "12",
    Designation: "Systems Engineer",
    Department: "Application Development",
  },
  {
    id: "13",
    Designation: "Systems Administrator",
    Department: "Application Development",
  },
  {
    id: "14",
    Designation: "Technical Lead",
    Department: "Application Development",
  },
  {
    id: "15",
    Designation: "Quality Assurance",
    Department: "Application Development",
  },
];
export default {
  data() {
    return {
      columns,
      data,
      title: "Designations",
      path: "Dashboard",
      text: "Designations",
      text1: "Add Designation",
    };
  },
};
</script>
