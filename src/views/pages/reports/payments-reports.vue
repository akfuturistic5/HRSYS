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
        <payments-reports-filter />
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
                  <template v-if="column.key === 'transactionID'">
                    <a href="javascript:void(0);">{{ record.transactionID }}</a>
                  </template>
                  <template v-else-if="column.key === 'invoice'">
                    <a href="javascript:void(0);">{{ record.invoice }}</a>
                  </template>
                  <template v-else-if="column.key === 'amount'">
                    <div class="text-center">{{ record.amount }}</div>
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
    title: "Transaction ID",
    dataIndex: "transactionID",
    key: "transactionID",
    sorter: {
      compare: (a, b) => {
        a = a.transactionID.toLowerCase();
        b = b.transactionID.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Date",
    dataIndex: "date",
    sorter: {
      compare: (a, b) => {
        a = a.date.toLowerCase();
        b = b.date.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Client Name",
    dataIndex: "clientName",
    sorter: {
      compare: (a, b) => {
        a = a.clientName.toLowerCase();
        b = b.clientName.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Payment Method",
    dataIndex: "paymentMethod",
    sorter: {
      compare: (a, b) => {
        a = a.paymentMethod.toLowerCase();
        b = b.paymentMethod.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Invoice",
    dataIndex: "invoice",
    key: "invoice",
    sorter: {
      compare: (a, b) => {
        a = a.invoice.toLowerCase();
        b = b.invoice.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    class: "text-center",
    sorter: {
      compare: (a, b) => {
        a = a.amount.toLowerCase();
        b = b.amount.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
];
const data = [
  {
    id: "1",
    transactionID: "834521",
    date: "2 Dec 2022",
    clientName: "Dreams",
    paymentMethod: "Online",
    invoice: "INV0001",
    amount: "$4,329,970.7",
  },
  {
    id: "2",
    transactionID: "834521",
    date: "2 Dec 2022",
    clientName: "Dreams",
    paymentMethod: "Online",
    invoice: "INV0001",
    amount: "$4,329,970.7",
  },
];

export default {
  data() {
    return {
      title: "Payments Report",
      path: "Dashboard",
      text: "Payments Report",
      columns,
      data,
    };
  },
  name: "payments-reports",
};
</script>
