<template>
  <!-- Overtime Tab -->
  <div class="tab-pane" id="tab_overtime">
    <!-- Add Overtime Button -->
    <div class="text-end mb-4 clearfix">
      <button
        class="btn btn-primary add-btn"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#add_overtime"
      >
        <i class="fa-solid fa-plus"></i> Add Overtime
      </button>
    </div>
    <!-- /Add Overtime Button -->

    <!-- Payroll Overtime Table -->
    <div class="payroll-table card">
      <div class="table-responsive">
        <table class="table table-hover table-radius">
          <thead>
            <tr>
              <th>Name</th>
              <th>Rate</th>
              <th class="text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in AddOvertime" :key="item.id">
              <th>{{ item.name }}</th>
              <td>{{ item.rate }}</td>
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
                      data-bs-target="#edit_overtime"
                      ><i class="fa fa-pencil m-r-5"></i> Edit</a
                    >
                    <a
                      class="dropdown-item"
                      href="javascript:;"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_overtime"
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
    <!-- /Payroll Overtime Table -->
  </div>
  <!-- /Overtime Tab -->
</template>
<script>
import AddOvertime from "@/assets/json/addovertime.json";
export default {
  data() {
    return {
      AddOvertime: AddOvertime,
    };
  },
};
</script>
