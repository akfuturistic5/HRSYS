<template>
  <!-- Search Filter -->
  <div class="row filter-row">
    <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
      <div class="input-block mb-3 form-focus" :class="{ focused: isFocused }">
        <input
          type="text"
          class="form-control floating"
          v-model="employeeID"
          @focus="isFocused = true"
          @blur="isFocused = employeeID !== ''"
        />
        <label class="focus-label">Employee Name</label>
      </div>
    </div>
    <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
      <div class="input-block mb-3 form-focus select-focus">
        <vue-select :options="SalaryRole" id="salary-role" placeholder="-- Select --" />
        <label class="focus-label">Role</label>
      </div>
    </div>
    <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
      <div class="input-block mb-3 form-focus select-focus">
        <vue-select :options="SelectTwo" id="pending-leave" placeholder="-- Select --" />
        <label class="focus-label">Leave Status</label>
      </div>
    </div>
    <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
      <div class="input-block mb-3 form-focus">
        <div class="cal-icon">
          <datepicker
            v-model="startdate"
            class="form-control floating datetimepicker"
            :editable="true"
            :clearable="false"
            :input-format="dateFormat"
          />
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
      <div class="input-block mb-3 form-focus">
        <div class="cal-icon">
          <datepicker
            v-model="startdateone"
            class="form-control floating datetimepicker"
            :editable="true"
            :clearable="false"
            :input-format="dateFormat"
          />
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-md-3 col-lg-3 col-xl-2 col-12">
      <a href="javascript:;" class="btn btn-success w-100"> Search </a>
    </div>
  </div>
  <!-- /Search Filter -->
</template>
<script>
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
export default {
  data() {
    return {
      select2: null,
      SalaryRole: ["-- Select --", "Employee", "Manager"],
      SelectTwo: ["-- Select --", "Pending", "Approved", "Rejected"],
      startdate: currentDate,
      dateFormat: 'dd-MM-yyyy',
      startdateone: currentDateOne,
      employeeID: "",
      isFocused: false,
    };
  },
};
</script>
