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
                  <template v-if="column.key === 'number'">
                    {{ record.number }}
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
                    <span :class="record.Class">{{ record.Status }}</span>
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
                          <router-link class="dropdown-item" to="edit-invoice"
                            ><i class="fa-solid fa-pencil m-r-5"></i> Edit</router-link
                          >
                          <router-link class="dropdown-item" to="invoice-view"
                            ><i class="fa-solid fa-eye m-r-5"></i> View</router-link
                          >
                          <a class="dropdown-item" href="javascript:void(0);"
                            ><i class="fa-regular fa-file-pdf m-r-5"></i> Download</a
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
    title: "#",
    dataIndex: "number",
    key: "number",
    sorter: {
      compare: (a, b) => {
        a = a.number.toLowerCase();
        b = b.number.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Invoice Number",
    dataIndex: "invoiceNumber",
    sorter: {
      compare: (a, b) => {
        a = a.invoiceNumber.toLowerCase();
        b = b.invoiceNumber.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Client",
    dataIndex: "client",
    sorter: {
      compare: (a, b) => {
        a = a.client.toLowerCase();
        b = b.client.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Created Date",
    dataIndex: "createdDate",
    key: "createdDate",
    sorter: {
      compare: (a, b) => {
        a = a.createdDate.toLowerCase();
        b = b.createdDate.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Due Date",
    dataIndex: "dueDate",
    key: "dueDate",
    sorter: {
      compare: (a, b) => {
        a = a.dueDate.toLowerCase();
        b = b.dueDate.toLowerCase();
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
    key: "Actions",
    sorter: true,
    class: "text-end",
  },
];
const data = [
  {
    number: "1",
    invoiceNumber: "#INV-0001",
    client: "Global Technologies",
    createdDate: "11 Mar 2023",
    dueDate: "17 Mar 2023",
    Amount: "$2099",
    Status: "Paid",
    Class: "badge bg-inverse-success",
  },
  {
    number: "2",
    invoiceNumber: "#INV-0002",
    client: "Delta Infotech",
    createdDate: "11 Mar 2023",
    dueDate: "17 Mar 2023",
    Amount: "$2099",
    Status: "Sent",
    Class: "badge bg-inverse-info",
  },
];

export default {
  data() {
    return {
      title: "Invoice Report",
      path: "Dashboard",
      text: "Invoice Report",
      columns,
      data,
    };
  },
  name: "invoice-reports",
};
</script>
