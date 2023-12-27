<template>
  <!-- Search Filter -->
  <div class="row filter-row mb-4">
    <div class="col-sm-6 col-md-3">
      <div class="input-block mb-3 form-focus" :class="{ focused: isFocused }">
        <input
          class="form-control floating"
          v-model="employee"
          @focus="isFocused = true"
          @blur="isFocused = employee !== ''"
          type="text"
        />
        <label class="focus-label">Employee</label>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <div class="input-block mb-3 form-focus select-focus">
        <vue-select
          :options="employeereportdepartment"
          id="employeereportdepartment"
          placeholder="Select Department"
        />
        <label class="focus-label">Department</label>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <div class="input-block mb-3 form-focus">
        <div class="cal-icon">
          <datepicker
            v-model="startdate"
            placeholder="From"
            class="form-control floating datetimepicker"
            :editable="true"
            :clearable="false"
            :input-format="dateFormat"
          />
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <div class="input-block mb-3 form-focus">
        <div class="cal-icon">
          <datepicker
            v-model="startdateone"
            placeholder="To"
            class="form-control floating datetimepicker"
            :editable="true"
            :clearable="false"
            :input-format="dateFormat"
          />
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <div class="d-grid">
        <a href="javascript:;" class="btn btn-success"> Search </a>
      </div>
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
      employeereportdepartment: [
        "Select Department",
        "Designing",
        "Development",
        "Finance",
        "Hr & Finance",
      ],
      startdate: currentDate,
      dateFormat: 'dd-MM-yyyy',
      startdateone: currentDateOne,
      employee: "",
      isFocused: false,
    };
  },
};
</script>
