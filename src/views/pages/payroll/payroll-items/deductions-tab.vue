<template>
  <!-- Deductions Tab -->
  <div class="tab-pane" id="tab_deductions">
    <!-- Add Deductions Button -->
    <div class="text-end mb-4 clearfix">
      <button
        class="btn btn-primary add-btn"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#add_deduction"
      >
        <i class="fa-solid fa-plus"></i> Add Deduction
      </button>
    </div>
    <!-- /Add Deductions Button -->

    <!-- Payroll Deduction Table -->
    <div class="payroll-table card">
      <div class="table-responsive">
        <table class="table table-hover table-radius">
          <thead>
            <tr>
              <th>Name</th>
              <th>Default/Unit Amount</th>
              <th class="text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in AddDeduction" :key="item.id">
              <th>{{ item.name }}</th>
              <td>{{ item.category }}</td>
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
                      data-bs-target="#edit_deduction"
                      ><i class="fa fa-pencil m-r-5"></i> Edit</a
                    >
                    <a
                      class="dropdown-item"
                      href="javascript:;"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_deduction"
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
    <!-- /Payroll Deduction Table -->
  </div>
  <!-- /Deductions Tab -->
</template>
<script>
import AddDeduction from "@/assets/json/adddeduction.json";
export default {
  data() {
    return {
      AddDeduction: AddDeduction,
    };
  },
};
</script>
