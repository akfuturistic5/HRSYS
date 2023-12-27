<template>
  <div class="row filter-row">
    <div class="col-sm-6 col-md-3">
      <div class="input-block mb-3 form-focus" :class="{ focused: isFocused }">
        <input
          type="text"
          class="form-control floating"
          v-model="employeeID"
          @focus="isFocused = true"
          @blur="isFocused = employeeID !== ''"
        />
        <label class="focus-label">Employee ID</label>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <div class="input-block mb-3 form-focus" :class="{ focused: isFocusedOn }">
        <input
          type="text"
          class="form-control floating"
          v-model="employeeName"
          @focus="isFocusedOn = true"
          @blur="isFocusedOn = employeeName !== ''"
        />
        <label class="focus-label">Employee Name</label>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <div class="input-block mb-3 form-focus select-focus">
        <vue-select :options="Designation" placeholder="Select Designation" id="design" />
        <label class="focus-label">Designation</label>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <a href="javascript:;" class="btn btn-success w-100"> Search </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      select2: null,
      Designation: [
        "Select Designation",
        "Web Developer",
        "Web Designer",
        "Android Developer",
        "Ios Developer",
      ],
      Company: ["Select Company", "Global Technologies", "Delta Infotech"],
      employeeID: "",
      isFocused: false,
      employeeName: "",
      isFocusedOn: false,
    };
  },
};
</script>
