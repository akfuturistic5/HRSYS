<template>
  <!-- Additions Tab -->
  <div class="tab-pane show active" id="tab_additions">
    <!-- Add Addition Button -->
    <div class="text-end mb-4 clearfix">
      <button
        class="btn btn-primary add-btn"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#add_addition"
      >
        <i class="fa-solid fa-plus"></i> Add Addition
      </button>
    </div>
    <!-- /Add Addition Button -->

    <!-- Payroll Additions Table -->
    <div class="payroll-table card">
      <div class="table-responsive">
        <table class="table table-hover table-radius">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Default/Unit Amount</th>
              <th class="text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in AddPayroll" :key="item.id">
              <th>{{ item.name }}</th>
              <td>{{ item.category }}</td>
              <td>{{ item.default }}</td>
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
                      data-bs-target="#edit_addition"
                      ><i class="fa fa-pencil m-r-5"></i> Edit</a
                    >
                    <a
                      class="dropdown-item"
                      href="javascript:;"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_addition"
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
    <!-- /Payroll Additions Table -->
  </div>
  <!-- Additions Tab -->
</template>
<script>
import AddPayroll from "@/assets/json/addpayroll.json";
export default {
  data() {
    return {
      AddPayroll: AddPayroll,
    };
  },
};
</script>
