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
        <payslip-reports-filter />
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
                  <template v-if="column.key === 'employeeName'">
                    <div class="table-avatar">
                      <router-link to="profile" class="avatar"
                        ><img
                          :src="require(`@/assets/img/profiles/${record.avatar}`)"
                          alt="User Image"
                      /></router-link>
                      <router-link to="profile"
                        >{{ record.employeeName }}
                        <span>{{ record.role }}</span></router-link
                      >
                    </div>
                  </template>
                  <template v-else-if="column.key === 'Actions'">
                    <div class="text-center">
                      <a href="javascript:void(0);" class="btn btn-sm btn-primary">PDF</a>
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
    title: "Employee Name",
    dataIndex: "employeeName",
    key: "employeeName",
    sorter: {
      compare: (a, b) => {
        a = a.employeeName.toLowerCase();
        b = b.employeeName.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Paid Amount",
    dataIndex: "paidAmount",
    key: "paidAmount",
    sorter: {
      compare: (a, b) => {
        a = a.paidAmount.toLowerCase();
        b = b.paidAmount.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Payment Month",
    dataIndex: "paymentMonth",
    key: "paymentMonth",
    sorter: {
      compare: (a, b) => {
        a = a.paymentMonth.toLowerCase();
        b = b.paymentMonth.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Payment Year",
    dataIndex: "paymentYear",
    key: "paymentYear",
    sorter: {
      compare: (a, b) => {
        a = a.paymentYear.toLowerCase();
        b = b.paymentYear.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Actions",
    key: "Actions",
    sorter: true,
  },
];
const data = [
  {
    id: "1",
    employeeName: "Bernardo Galaviz",
    paidAmount: "$200",
    paymentMonth: "Apr",
    paymentYear: "2023",
    avatar: "avatar-13.jpg",
    role: "Web Developer",
  },
  {
    id: "2",
    employeeName: "Jeffrey Warden",
    paidAmount: "$300",
    paymentMonth: "Dec",
    paymentYear: "2023",
    avatar: "avatar-12.jpg",
    role: "Web Developer",
  },
  {
    id: "3",
    employeeName: "John Doe",
    paidAmount: "$400",
    paymentMonth: "Jun",
    paymentYear: "2023",
    avatar: "avatar-02.jpg",
    role: "Web Designer",
  },
  {
    id: "4",
    employeeName: "John Smith",
    paidAmount: "$500",
    paymentMonth: "Feb",
    paymentYear: "2023",
    avatar: "avatar-10.jpg",
    role: "Android Developer",
  },
  {
    id: "5",
    employeeName: "Mike Litorus",
    paidAmount: "$600",
    paymentMonth: "Jan",
    paymentYear: "2023",
    avatar: "avatar-05.jpg",
    role: "IOS Developer",
  },
];
export default {
  data() {
    return {
      title: "Payslip Reports",
      path: "Dashboard",
      text: "Payslip Reports",
      columns,
      data,
    };
  },
  name: "payslip-reports",
};
</script>
