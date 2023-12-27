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
        <expense-reports-filter />
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
                  <template v-if="column.key === 'Item'">
                    <strong>{{ record.Item }}</strong>
                  </template>
                  <template v-else-if="column.key === 'PurchasedBy'">
                    <div class="table-avatar">
                      <router-link to="profile" class="avatar avatar-xs"
                        ><img
                          :src="require(`@/assets/img/profiles/${record.Image}`)"
                          alt="User Image"
                      /></router-link>
                      <router-link to="profile">{{ record.PurchasedBy }}</router-link>
                    </div>
                  </template>
                  <template v-else-if="column.key === 'Status'">
                    <div class="text-center">
                      <div class="dropdown action-label">
                        <a
                          class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                          href="javascript:void(0);"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i :class="record.Class"></i>
                          {{ record.Status }}
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                          <a class="dropdown-item" href="javascript:void(0);"
                            ><i class="fa-regular fa-circle-dot text-danger"></i>
                            Pending</a
                          >
                          <a class="dropdown-item" href="javascript:void(0);"
                            ><i class="fa-regular fa-circle-dot text-success"></i>
                            Approved</a
                          >
                        </div>
                      </div>
                    </div>
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
                            ><i class="fa-solid fa-pencil m-r-5"></i> Edit</a
                          >
                          <a class="dropdown-item" href="javascript:void(0);"
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
    </div>
    <!-- /Page Wrapper -->
  </div>
</template>
<script>
const columns = [
  {
    title: "Item",
    dataIndex: "Item",
    key: "Item",
    sorter: {
      compare: (a, b) => {
        a = a.Item.toLowerCase();
        b = b.Item.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Purchase From",
    dataIndex: "PurchaseFrom",
    sorter: {
      compare: (a, b) => {
        a = a.PurchaseFrom.toLowerCase();
        b = b.PurchaseFrom.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Purchase Date",
    dataIndex: "PurchaseDate",
    sorter: {
      compare: (a, b) => {
        a = a.PurchaseDate.toLowerCase();
        b = b.PurchaseDate.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Purchased By",
    dataIndex: "PurchasedBy",
    key: "PurchasedBy",
    sorter: {
      compare: (a, b) => {
        a = a.PurchasedBy.toLowerCase();
        b = b.PurchasedBy.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Amount",
    dataIndex: "Amount",
    sorter: {
      compare: (a, b) => {
        a = a.Amount.toLowerCase();
        b = b.Amount.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Paid By",
    dataIndex: "PaidBy",
    sorter: {
      compare: (a, b) => {
        a = a.PaidBy.toLowerCase();
        b = b.PaidBy.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "Status",
    class: "text-center",
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
    key: "Actions",
    sorter: true,
    class: "text-end",
  },
];
const data = [
  {
    Item: "Dell Laptop",
    PurchaseFrom: "Amazon",
    PurchaseDate: "5 Jan 2023",
    PurchasedBy: "Loren Gatlin",
    Image: "avatar-04.jpg",
    Amount: "$ 1215",
    PaidBy: "Cash",
    Class: "fa-regular fa-circle-dot text-danger",
    Status: "Pending",
  },
  {
    Item: "Mac System",
    PurchaseFrom: "Amazon",
    PurchaseDate: "5 Jan 2023",
    PurchasedBy: "Tarah Shropshire",
    Image: "avatar-03.jpg",
    Amount: "$ 1215",
    PaidBy: "Cheque",
    Class: "fa-regular fa-circle-dot text-success",
    Status: "Approved",
  },
];
export default {
  data() {
    return {
      title: "Expense Report",
      path: "Dashboard",
      text: "Expense Report",
      columns,
      data,
    };
  },
  name: "expense-reports",
};
</script>
