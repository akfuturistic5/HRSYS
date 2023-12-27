<template>
  <div class="tab-pane" id="settings" role="tabpanel" aria-labelledby="settings-tab">
    <form>
      <h3>Resignation Notice</h3>
      <div class="input-block mb-3 row">
        <label class="col-sm-12"
          >Email Notification <span class="text-danger">*</span></label
        >
        <div class="col-sm-6">
          <label class="control-label col-form-label">Simultaneous Approval </label>
          <vue-select :options="Approvers" id="regApprovers" placeholder="" />
        </div>
      </div>
      <div class="input-block mb-3 row">
        <label class="col-form-label col-md-12"
          >Notice Days <span class="text-danger">*</span></label
        >
        <div class="col-md-6 approval-option">
          <input
            type="number"
            name="notice_days"
            class="form-control notice_days"
            value="15"
          />
        </div>
      </div>
      <div class="m-t-30">
        <div class="col-md-12 submit-section">
          <button
            id="resignation_notice_set_btn"
            type="submit"
            class="btn btn-primary submit-btn"
          >
            Save Changes
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      select2: null,
      Approvers: ["select", "UI/UX Desginer", "Sox Analyst"],
    };
  },
};
</script>
