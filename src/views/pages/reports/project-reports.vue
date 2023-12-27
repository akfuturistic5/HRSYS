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
                <th>#</th>
                <th>Project Title</th>
                <th>Client Name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Status</th>
                <th>Team</th>
                <template #bodyCell="{ column, record }">
                  <template v-if="column.key === 'ProjectTitle'">
                    <router-link to="project-view">{{ record.ProjectTitle }}</router-link>
                  </template>
                  <template v-else-if="column.key === 'ClientName'">
                    <div class="table-avatar">
                      <router-link to="client-profile" class="avatar"
                        ><img
                          :src="require(`@/assets/img/profiles/${record.image}`)"
                          alt="User Image"
                      /></router-link>
                      <router-link to="client-profile">{{
                        record.ClientName
                      }}</router-link>
                    </div>
                  </template>
                  <template v-else-if="column.key === 'Status'">
                    <div class="dropdown action-label">
                      <a
                        href="javascript:void(0);"
                        class="btn btn-white btn-sm btn-rounded"
                        ><i class="fa-regular fa-circle-dot text-success"></i>
                        {{ record.Status }}
                      </a>
                    </div>
                  </template>
                  <template v-else-if="column.key === 'Team'">
                    <ul class="team-members">
                      <li>
                        <a
                          href="javascript:void(0);"
                          title=""
                          data-bs-toggle="tooltip"
                          data-original-title="John Doe"
                          ><img
                            :src="require(`@/assets/img/profiles/${record.Avatar_1}`)"
                            alt="User Image"
                        /></a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          title=""
                          data-bs-toggle="tooltip"
                          data-original-title="Richard Miles"
                          ><img
                            :src="require(`@/assets/img/profiles/${record.Avatar_2}`)"
                            alt="User Image"
                        /></a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          title=""
                          data-bs-toggle="tooltip"
                          data-original-title="John Smith"
                          ><img
                            :src="require(`@/assets/img/profiles/${record.Avatar_3}`)"
                            alt="User Image"
                        /></a>
                      </li>
                      <li>
                        <a
                          href="javascript:void(0);"
                          title=""
                          data-bs-toggle="tooltip"
                          data-original-title="Mike Litorus"
                          ><img
                            :src="require(`@/assets/img/profiles/${record.Avatar_4}`)"
                            alt="User Image"
                        /></a>
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="all-users">+15</a>
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
    title: "Project Title",
    dataIndex: "ProjectTitle",
    key: "ProjectTitle",
    sorter: {
      compare: (a, b) => {
        a = a.ProjectTitle.toLowerCase();
        b = b.ProjectTitle.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Client Name",
    dataIndex: "ClientName",
    key: "ClientName",
    sorter: {
      compare: (a, b) => {
        a = a.ClientName.toLowerCase();
        b = b.ClientName.toLowerCase();
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
    title: "Team",
    dataIndex: "Team",
    key: "Team",
    sorter: true,
  },
];
const data = [
  {
    id: "1",
    ProjectTitle: "Hospital Administration",
    ClientName: "Global Technologies",
    StartDate: "9 Jan 2023",
    EndDate: "10 Apr 2023",
    Status: "Active",
    image: "avatar-19.jpg",
    Name_1: "John Doe",
    Avatar_1: "avatar-02.jpg",
    Name_2: "Richard Miles",
    Avatar_2: "avatar-09.jpg",
    Name_3: "John Smith",
    Avatar_3: "avatar-10.jpg",
    Name_4: "Mike Litorus",
    Avatar_4: "avatar-05.jpg",
  },
  {
    id: "2",
    ProjectTitle: "Office Management",
    ClientName: "Delta Infotech",
    StartDate: "10 Dec 2023",
    EndDate: "2 May 2023",
    Status: "Active",
    image: "avatar-29.jpg",
    Name_1: "John Doe",
    Avatar_1: "avatar-02.jpg",
    Name_2: "Richard Miles",
    Avatar_2: "avatar-09.jpg",
    Name_3: "John Smith",
    Avatar_3: "avatar-10.jpg",
    Name_4: "Mike Litorus",
    Avatar_4: "avatar-05.jpg",
  },
];
export default {
  data() {
    return {
      title: "Project Reports",
      path: "Dashboard",
      text: "Project Reports",
      columns,
      data,
    };
  },
  name: "project-reports",
};
</script>
