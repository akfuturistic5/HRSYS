<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <div class="content container-fluid">
        <!-- Page Header -->
        <breadcrumb :title="title" :path="path" :text="text" />
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
                <th>Invoice ID</th>
                <th>Client</th>
                <th>Payment Type</th>
                <th>Paid Date</th>
                <th>Paid Amount</th>
                <template #bodyCell="{ column, record }">
                  <template v-if="column.key === 'Id'">
                    <div>
                      <router-link to="invoice-view">{{ record.Id }}</router-link>
                    </div>
                  </template>
                  <template v-if="column.key === 'Client'">
                    <div>
                      <a href="javascript:void(0);">{{ record.Client }}</a>
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
    <!-- Page Wrapper -->
  </div>
</template>

<script>
const columns = [
  {
    title: "Invoice ID",
    dataIndex: "Id",
    key: "Id",
    sorter: {
      compare: (a, b) => {
        a = a.Id.toLowerCase();
        b = b.Id.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Client",
    dataIndex: "Client",
    key: "Client",
    sorter: {
      compare: (a, b) => {
        a = a.Client.toLowerCase();
        b = b.Client.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Payment Type",
    dataIndex: "PaymentType",
    sorter: {
      compare: (a, b) => {
        a = a.PaymentType.toLowerCase();
        b = b.PaymentType.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Paid Date",
    dataIndex: "PaidDate",
    sorter: {
      compare: (a, b) => {
        a = a.PaidDate.toLowerCase();
        b = b.PaidDate.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Paid Amount",
    dataIndex: "PaidAmount",
    sorter: {
      compare: (a, b) => {
        a = a.PaidAmount.toLowerCase();
        b = b.PaidAmount.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
];
const data = [
  {
    Id: "#INV-0001",
    Client: "Global Technologies",
    PaymentType: "Paypal",
    PaidDate: "8 Feb 2023",
    PaidAmount: "$500",
  },
  {
    Id: "#INV-0002",
    Client: "Delta Infotech",
    PaymentType: "Paypal",
    PaidDate: "8 Feb 2023",
    PaidAmount: "$500",
  },
  {
    Id: "#INV-0003",
    Client: "Cream Inc",
    PaymentType: "Paypal",
    PaidDate: "8 Feb 2023",
    PaidAmount: "$500",
  },
];
export default {
  data() {
    return {
      title: "Payments",
      path: "Dashboard",
      text: "Payments",
      columns,
      data,
    };
  },
  name: "payments",
};
</script>
