<template>
  <!-- Search Filter -->
  <div class="row filter-row">
    <div class="col-sm-6 col-md-3">
      <div class="input-block mb-3 form-focus" :class="{ focused: clientIdFocused }">
        <input
          type="text"
          class="form-control floating"
          v-model="clientId"
          @focus="clientIdFocused = true"
          @blur="clientIdFocused = clientId !== ''"
        />
        <label class="focus-label">Client ID</label>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <div class="input-block mb-3 form-focus" :class="{ focused: clientNameFocused }">
        <input
          type="text"
          class="form-control floating"
          v-model="clientName"
          @focus="clientNameFocused = true"
          @blur="clientNameFocused = clientName !== ''"
        />
        <label class="focus-label">Client Name</label>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <div class="input-block mb-3 form-focus select-focus">
        <vue-select
          :options="ClientsCompany"
          id="clientscompany"
          placeholder="Select Company"
        />
        <label class="focus-label">Company</label>
      </div>
    </div>
    <div class="col-sm-6 col-md-3">
      <div class="d-grid">
        <a href="javascript:;" class="btn btn-success"> Search </a>
      </div>
    </div>
  </div>
  <!-- Search Filter -->
</template>
<script>
export default {
  data() {
    return {
      select2: null,
      ClientsCompany: ["Select Company", "Global Technologies", "Delta Infotech"],
      clientName: "",
      clientId: "",
      clientIdFocused: false,
      clientNameFocused: false,
    };
  },
};
</script>
