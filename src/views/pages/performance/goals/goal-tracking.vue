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
                        class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                        href="javascript:;"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i :class="record.class"></i>
                        {{ record.Status }}
                      </a>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="javascript:;"
                          ><i class="fa-regular fa-circle-dot text-success"></i> Active</a
                        >
                        <a class="dropdown-item" href="javascript:;"
                          ><i class="fa-regular fa-circle-dot text-danger"></i>
                          Inactive</a
                        >
                      </div>
                    </div>
                  </template>
                  <template v-if="column.key === 'Progress'">
                    <p class="mb-1">{{ record.Progress }}</p>
                    <div class="progress height-5">
                      <div
                        class="progress-bar bg-primary progress-sm w-73 height-10"
                      ></div>
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
                            data-bs-target="#edit_goal"
                            ><i class="fa-solid fa-pencil m-r-5"></i> Edit</a
                          >
                          <a
                            class="dropdown-item"
                            href="javascript:;"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_goal"
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
    </div>
  </div>
  <goaltracking-model></goaltracking-model>
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
    title: "Goal Type",
    dataIndex: "GoalType",
    sorter: {
      compare: (a, b) => {
        a = a.GoalType.toLowerCase();
        b = b.GoalType.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Subject",
    dataIndex: "Subject",
    sorter: {
      compare: (a, b) => {
        a = a.Subject.toLowerCase();
        b = b.Subject.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Target Achievement",
    dataIndex: "TargetAchievement",
    sorter: {
      compare: (a, b) => {
        a = a.TargetAchievement.toLowerCase();
        b = b.TargetAchievement.toLowerCase();
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
    title: "Progress",
    dataIndex: "Progress",
    key: "Progress",
    sorter: {
      compare: (a, b) => {
        a = a.Progress.toLowerCase();
        b = b.Progress.toLowerCase();
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
    GoalType: "Event Goal",
    Subject: "Test Goal",
    TargetAchievement: "Lorem ipsum dollar",
    StartDate: "7 May 2023",
    EndDate: "10 May 2023",
    Description: "Lorem ipsum dollar",
    Status: "Active",
    Progress: "Completed 73%",
    Action: "more_vert",
    class: "fa-regular fa-circle-dot text-success",
  },
  {
    id: "2",
    GoalType: "Invoice Goal",
    Subject: "Test Goal",
    TargetAchievement: "Lorem ipsum dollar",
    StartDate: "7 May 2023",
    EndDate: "10 May 2023",
    Description: "Lorem ipsum dollar",
    Status: "Inactive",
    Progress: "Completed 100%",
    Action: "more_vert",
    class: "fa-regular fa-circle-dot text-danger",
  },
  {
    id: "3",
    GoalType: "Employee Goal",
    Subject: "Test Goal",
    TargetAchievement: "Lorem ipsum dollar",
    StartDate: "7 May 2023",
    EndDate: "10 May 2023",
    Description: "Lorem ipsum dollar",
    Status: "Active",
    Progress: "Completed 73%",
    Action: "more_vert",
    class: "fa-regular fa-circle-dot text-success",
  },
  {
    id: "4",
    GoalType: "Invoice Goal",
    Subject: "Test Goal",
    TargetAchievement: "Lorem ipsum dollar",
    StartDate: "7 May 2023",
    EndDate: "10 May 2023",
    Description: "Lorem ipsum dollar",
    Status: "Active",
    Progress: "Completed 73%",
    Action: "more_vert",
    class: "fa-regular fa-circle-dot text-success",
  },
  {
    id: "5",
    GoalType: "Project Goal",
    Subject: "Test Goal",
    TargetAchievement: "Lorem ipsum dollar",
    StartDate: "7 May 2023",
    EndDate: "10 May 2023",
    Description: "Lorem ipsum dollar",
    Status: "Active",
    Progress: "Completed 73%",
    Action: "more_vert",
    class: "fa-regular fa-circle-dot text-success",
  },
];
export default {
  data() {
    return {
      title: "Goal Tracking",
      path: "Dashboard",
      text: "Goal Tracking",
      text1: "Add New",
      columns,
      data,
    };
  },
};
</script>
