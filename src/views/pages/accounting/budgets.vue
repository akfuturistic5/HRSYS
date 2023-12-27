<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>
    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <!-- Page Header -->
        <leaves-admin-header
          :title="title"
          :path="path"
          :text="text"
          :text1="text1"
        />
        <!-- /Page Header -->
        <div class="row">
          <div class="col-md-12">
            <div class="table-responsive">
              <table class="table table-striped custom-table mb-0">
                <thead>
                  <tr>
                    <th>Budget No</th>
                    <th>Budget Title</th>
                    <th>Budget Type</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Total Revenue</th>
                    <th>Total Expenses</th>
                    <th>Tax Amount</th>
                    <th>Budget Amount</th>
                    <th class="text-end">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in Budgets" :key="item.id">
                    <td>{{ item.budgetno }}</td>
                    <td>{{ item.budgettitle }}</td>
                    <td>{{ item.budgettype }}</td>
                    <td>{{ item.startdate }}</td>
                    <td>{{ item.enddate }}</td>
                    <td>{{ item.totalrevenue }}</td>
                    <td>{{ item.totalexpenses }}</td>
                    <td>{{ item.taxamount }}</td>
                    <td>{{ item.budgetamount }}</td>
                    <td class="text-end">
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
                            data-bs-target="#edit_categories"
                            ><i class="fa fa-pencil m-r-5"></i> Edit</a
                          >
                          <a
                            class="dropdown-item"
                            href="javascript:;"
                            data-bs-toggle="modal"
                            data-bs-target="#delete"
                            ><i class="fa fa-trash-can m-r-5"></i> Delete</a
                          >
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <!-- /Page Content -->
      <budgets-model />
    </div>
    <!-- /Page Wrapper -->
  </div>
</template>
<script>
import Budgets from "@/assets/json/budgets.json";
export default {
  data() {
    return {
      title: "Budgets",
      path: "Dashboard",
      text: "Accounts",
      text1: "Add Budgets",
      Budgets: Budgets,
    };
  },
  name: "budgets",
};
</script>
