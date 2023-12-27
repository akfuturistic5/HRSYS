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
              <!-- Promotion Table -->
              <a-table
                class="stripped table-hover"
                :columns="columns"
                :data-source="data"
              >
                <template #bodyCell="{ column, record }">
                  <template v-if="column.key === 'PromotedEmployee'">
                    <h2 class="table-avatar blue-link">
                      <router-link to="profile" class="avatar"
                        ><img
                          :src="require(`@/assets/img/profiles/${record.Image}`)"
                          alt="User Image"
                      /></router-link>
                      <router-link to="profile">{{
                        record.ResigningEmployee
                      }}</router-link>
                    </h2>
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
                            data-bs-target="#edit_promotion"
                            ><i class="fa-solid fa-pencil m-r-5"></i> Edit</a
                          >
                          <a
                            class="dropdown-item"
                            href="javascript:;"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_promotion"
                            ><i class="fa-regular fa-trash-can m-r-5"></i> Delete</a
                          >
                        </div>
                      </div>
                    </div>
                  </template>
                </template>
              </a-table>
              <!-- /Promotion Table -->
            </div>
          </div>
        </div>
      </div>
      <!-- /Page Content -->
    </div>
  </div>
  <promotionmodel></promotionmodel>
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
    title: "Promoted Employee",
    dataIndex: "PromotedEmployee",
    key: "PromotedEmployee",
    sorter: {
      compare: (a, b) => {
        a = a.PromotedEmployee.toLowerCase();
        b = b.PromotedEmployee.toLowerCase();
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
    title: "Promotion Designation From",
    dataIndex: "PromotionDesignationFrom",
    sorter: {
      compare: (a, b) => {
        a = a.PromotionDesignationFrom.toLowerCase();
        b = b.PromotionDesignationFrom.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "PromotionDesignationTo",
    dataIndex: "PromotionDesignationTo",
    sorter: {
      compare: (a, b) => {
        a = a.PromotionDesignationTo.toLowerCase();
        b = b.PromotionDesignationTo.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Promotion Date",
    dataIndex: "PromotionDate",
    sorter: {
      compare: (a, b) => {
        a = a.PromotionDate.toLowerCase();
        b = b.PromotionDate.toLowerCase();
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
    ResigningEmployee: "John Doe",
    Image: "avatar-02.jpg",
    Department: "Web Development",
    PromotionDesignationFrom: "Web Developer",
    PromotionDesignationTo: "Sr Web Developer",
    PromotionDate: "28 Feb 2023",
    Action: "more_vert",
  },
];
export default {
  data() {
    return {
      title: "Promotion",
      path: "Dashboard",
      text: "Promotion",
      text1: "Add Promotion",
      columns,
      data,
    };
  },
};
</script>
