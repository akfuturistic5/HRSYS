<template>
  <!-- Company List -->
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
        <a-table class="stripped" :columns="columns" :data-source="data">
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'id'">
              {{ record.id }}
            </template>
            <template v-else-if="column.key === 'Client'">
              <div class="table-avatar">
                <router-link to="client-profile" class="avatar"
                  ><img
                    :src="require(`@/assets/img/profiles/${record.image}`)"
                    alt="User Image"
                /></router-link>
                <router-link to="client-profile">{{ record.Client }}</router-link>
              </div>
            </template>
            <template v-else-if="column.key === 'PlanStatus'">
              <span :class="record.class">{{ record.PlanStatus }}</span>
            </template>
            <template v-else-if="column.key === 'UpdatePlan'">
              <a
                class="btn btn-primary btn-sm"
                href="javascript:void(0);"
                data-bs-toggle="modal"
                data-bs-target="#upgrade_plan"
                >{{ record.UpdatePlan }}</a
              >
            </template>
            <template v-else-if="column.key === 'Status'">
              <td>
                <div class="status-toggle">
                  <input
                    type="checkbox"
                    :id="record.id_status"
                    class="check"
                    :checked="record.checked"
                  />
                  <label :for="record.for_status" class="checktoggle">{{
                    record.checkbox
                  }}</label>
                </div>
              </td>
            </template>
          </template>
        </a-table>
      </div>
    </div>
  </div>
  <!-- /Company List -->
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
    title: "Plan",
    dataIndex: "Plan",
    key: "Plan",
    sorter: {
      compare: (a, b) => {
        a = a.Plan.toLowerCase();
        b = b.Plan.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Users",
    dataIndex: "Users",
    key: "Users",
    sorter: {
      compare: (a, b) => {
        a = a.Users.toLowerCase();
        b = b.Users.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Plan Duration",
    dataIndex: "PlanDuration",
    key: "PlanDuration",
    sorter: {
      compare: (a, b) => {
        a = a.PlanDuration.toLowerCase();
        b = b.PlanDuration.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Start Date",
    dataIndex: "StartDate",
    key: "StartDate",
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
    key: "EndDate",
    sorter: {
      compare: (a, b) => {
        a = a.EndDate.toLowerCase();
        b = b.EndDate.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Amount",
    dataIndex: "Amount",
    key: "Amount",
    sorter: {
      compare: (a, b) => {
        a = a.Amount.toLowerCase();
        b = b.Amount.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Plan Status",
    dataIndex: "PlanStatus",
    key: "PlanStatus",
    sorter: {
      compare: (a, b) => {
        a = a.PlanStatus.toLowerCase();
        b = b.PlanStatus.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Update Plan",
    dataIndex: "UpdatePlan",
    key: "UpdatePlan",
    sorter: {
      compare: (a, b) => {
        a = a.UpdatePlan.toLowerCase();
        b = b.UpdatePlan.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "Status",
    sorter: true,
  },
];
const data = [
  {
    id: "1",
    Client: "Global Technologies",
    Plan: "Free Trial",
    image: "avatar-19.jpg",
    Users: "30",
    PlanDuration: "6 Months",
    StartDate: "15 Feb 2023",
    EndDate: "14 July 2023",
    Amount: "$200",
    PlanStatus: "Active",
    UpdatePlan: "Change Plan",
    checkbox: "checkbox",
    class: "badge bg-inverse-success",
    for_status: "company_status_1",
    id_status: "company_status_1",
  },
  {
    id: "2",
    Client: "Delta Infotech",
    Plan: "Premium",
    image: "avatar-29.jpg",
    Users: "50",
    PlanDuration: "1 Year",
    StartDate: "15 Feb 2023",
    EndDate: "14 July 2023",
    Amount: "$200",
    PlanStatus: "Expired",
    UpdatePlan: "Change Plan",
    checked: "checked",
    checkbox: "checkbox",
    class: "badge bg-inverse-danger",
    for_status: "company_status_2",
    id_status: "company_status_2",
  },
  {
    id: "3",
    Client: "Cream Inc",
    Plan: "Professional",
    image: "avatar-07.jpg",
    Users: "10",
    PlanDuration: "1 Month",
    StartDate: "15 Feb 2023",
    EndDate: "14 July 2023",
    Amount: "Free",
    PlanStatus: "Active",
    UpdatePlan: "Change Plan",
    checked: "checked",
    checkbox: "checkbox",
    class: "badge bg-inverse-success",
    for_status: "company_status_3",
    id_status: "company_status_3",
  },
  {
    id: "4",
    Client: "Wellware Company",
    Plan: "Enterprise",
    image: "avatar-06.jpg",
    Users: "10",
    PlanDuration: "1 Month",
    StartDate: "15 Feb 2023",
    EndDate: "14 July 2023",
    Amount: "Free",
    PlanStatus: "Active",
    UpdatePlan: "Change Plan",
    checked: "checked",
    checkbox: "checkbox",
    class: "badge bg-inverse-success",
    for_status: "company_status_4",
    id_status: "company_status_4",
  },
  {
    id: "5",
    Client: "Mustang Technologies",
    Plan: "Free Trial",
    image: "avatar-14.jpg",
    Users: "10",
    PlanDuration: "1 Year",
    StartDate: "15 Feb 2023",
    EndDate: "14 July 2023",
    Amount: "Free",
    PlanStatus: "Active",
    UpdatePlan: "Change Plan",
    checked: "checked",
    checkbox: "checkbox",
    class: "badge bg-inverse-success",
    for_status: "company_status_5",
    id_status: "company_status_5",
  },
  {
    id: "6",
    Client: "International Software Inc",
    Plan: "Enterprise",
    image: "avatar-18.jpg",
    Users: "10",
    PlanDuration: "1 Month",
    StartDate: "15 Feb 2023",
    EndDate: "14 July 2023",
    Amount: "Free",
    PlanStatus: "Active",
    UpdatePlan: "Change Plan",
    checked: "checked",
    checkbox: "checkbox",
    class: "badge bg-inverse-success",
    for_status: "company_status_6",
    id_status: "company_status_6",
  },
  {
    id: "7",
    Client: "Mercury Software Inc",
    Plan: "Professional",
    image: "avatar-28.jpg",
    Users: "10",
    PlanDuration: "1 Year",
    StartDate: "15 Feb 2023",
    EndDate: "14 July 2023",
    Amount: "Free",
    PlanStatus: "Active",
    UpdatePlan: "Change Plan",
    checked: "checked",
    checkbox: "checkbox",
    class: "badge bg-inverse-success",
    for_status: "company_status_7",
    id_status: "company_status_7",
  },
];
export default {
  data() {
    return {
      columns,
      data,
    };
  },
  name: "companylist",
};
</script>
