<template>
  <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">
    <div class="input-block mb-3 row">
      <label class="control-label col-md-12 col-form-label">Default Leave Approval</label>
      <div class="col-md-12 approval-option">
        <label class="radio-inline">
          <input
            id="radio-single"
            class="me-2 default_offer_approval"
            value="seq-approver"
            name="default_leave_approval"
            type="radio"
          />Sequence Approval (Chain)
          <sup>
            <span class="badge info-badge"
              ><i class="fa fa-info" aria-hidden="true"></i></span
          ></sup>
        </label>
        <label class="radio-inline ms-2">
          <input
            id="radio-multiple1"
            class="me-2 default_offer_approval"
            value="sim-approver"
            name="default_leave_approval"
            type="radio"
          />Simultaneous Approval
          <sup
            ><span class="badge info-badge"
              ><i class="fa fa-info" aria-hidden="true"></i></span
          ></sup>
        </label>
      </div>
    </div>
    <div class="input-block mb-3 row">
      <label class="control-label col-form-label col-sm-12">leave Approvers</label>
      <div class="col-sm-6">
        <label class="control-label mb-2 pl-0">Simultaneous Approval </label>
        <vue-select :options="Approvers" id="leaveApprover" placeholder="" />
      </div>
    </div>
    <div class="m-t-30 row">
      <div class="col-md-12 submit-section">
        <button
          id="leave_approval_set_btn"
          type="submit"
          class="btn btn-primary submit-btn"
        >
          Save Changes
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      select2: null,
      Approvers: ["Select", "UI/UX Designer", "Sox Analyst", "Test Lead"],
    };
  },
};
</script>
