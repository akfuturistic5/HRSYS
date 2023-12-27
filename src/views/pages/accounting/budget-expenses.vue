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
                    <th>No</th>
                    <th>Notes</th>
                    <th>Category Name</th>
                    <th>SubCategory Name</th>
                    <th>Amount</th>
                    <th>Revenue Date</th>
                    <th class="text-end">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in Budgetexpenses" :key="item.id">
                    <td>{{ item.no }}</td>
                    <td>{{ item.notes }}</td>
                    <td>{{ item.categoryname }}</td>
                    <td>{{ item.subcategoryname }}</td>
                    <td>{{ item.amount }}</td>
                    <td>{{ item.revenuedate }}</td>
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
      <budgetexpenses-model />
    </div>
    <!-- /Page Wrapper -->
  </div>
</template>
<script>
import Budgetexpenses from "@/assets/json/budgetexpenses.json";
export default {
  data() {
    return {
      title: "Budgets Expenses",
      path: "Dashboard",
      text: "Accounts",
      text1: "Add Expenses",
      Budgetexpenses: Budgetexpenses,
    };
  },
  name: "budget-expenses",
};
</script>
