<template>
  <div class="row filter-row">
    <div class="col-sm-6 col-md-3">
      <div class="input-block mb-3 form-focus" :class="{ focused: isFocused }">
        <input
          type="text"
          class="form-control floating"
          v-model="name"
          @focus="isFocused = true"
          @blur="isFocused = name !== ''"
        />
        <label class="focus-label">Name</label>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <div class="input-block mb-3 form-focus select-focus">
        <vue-select :options="Info" id="info" placeholder="Select Company" />,
        <label class="focus-label">Company</label>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <div class="input-block mb-3 form-focus select-focus">
        <vue-select :options="selInfo" id="selInfo" placeholder="Select Role" />
        <label class="focus-label">Role</label>
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
      Info: ["Select Company", "Global Technologies", "Delta Infotech"],
      selInfo: [
        "Web Developer",
        "Web Designer",
        "Android Developer",
        "Ios Developer",
      ],
      name: "",
      isFocused: false,
    };
  },
};
</script>
