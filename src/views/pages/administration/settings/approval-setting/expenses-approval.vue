<template>
  <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">
    <h4>Expense Approval Settings</h4>
    <div class="input-block mb-3 row">
      <label class="control-label col-md-12 col-form-label"
        >Default Expense Approval</label
      >
      <div class="col-md-12 approval-option">
        <label class="radio-inline">
          <input
            id="radio-single1"
            class="me-2 default_expense_approval"
            value="seq-approver"
            name="default_expense_approval"
            type="radio"
          />Sequence Approval (Chain)
          <sup>
            <span class="badge info-badge"
              ><i class="fa fa-info" aria-hidden="true"></i></span
          ></sup>
        </label>
        <label class="radio-inline ms-2">
          <input
            id="radio-multiple3"
            class="me-2 default_expense_approval"
            value="sim-approver"
            name="default_expense_approval"
            type="radio"
          />Simultaneous Approval
          <sup
            ><span class="badge info-badge"
              ><i class="fa fa-info" aria-hidden="true"></i></span
          ></sup>
        </label>
      </div>
    </div>
    <div class="input-block mb-3 row approver seq-approver d-block">
      <label class="control-label col-form-label col-sm-3">Expense Approvers</label>
      <div class="col-sm-9">
        <label class="ex_exp_approvers_1 control-label mb-2 exp_appr ps-0"
          >Approver 1</label
        >
        <div class="row ex_exp_approvers_1 input-block mb-3">
          <div class="col-md-6">
            <vue-select
              :options="Approver"
              id="expenseApprover"
              placeholder="Select Approvers"
            />
          </div>
        </div>
        <label class="ex_exp_approvers_2 control-label mb-2 exp_appr ps-0"
          >Approver 2</label
        >
        <div class="row ex_exp_approvers_2 input-block mb-3">
          <div class="col-md-6">
            <vue-select
              :options="Approvers1"
              id="expenseApprovers1"
              placeholder="Select Approvers"
            />
          </div>
          <div class="col-md-2">
            <a class="remove_ex_exp_approver btn rounded border text-danger" data-id="2"
              ><i class="fa-solid fa-xmark" aria-hidden="true"></i
            ></a>
          </div>
        </div>
        <label class="ex_exp_approvers_3 control-label mb-2 exp_appr ps-0"
          >Approver 3</label
        >
        <div class="row ex_exp_approvers_3 input-block mb-3">
          <div class="col-md-6">
            <vue-select
              :options="Approvers2"
              id="expenseApprovers2"
              placeholder="Select Approvers"
            />
          </div>
          <div class="col-md-2">
            <a class="remove_ex_exp_approver btn rounded border text-danger" data-id="3"
              ><i class="fa-solid fa-xmark" aria-hidden="true"></i
            ></a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-9 col-md-offset-3 m-t-10">
          <a id="add_expense_approvers" href="javascript:void(0)" class="add-more"
            >+ Add Approver</a
          >
        </div>
      </div>
      <div class="m-t-30">
        <div class="col-md-12 submit-section">
          <button
            id="expense_approval_set_btn"
            type="submit"
            class="btn btn-primary submit-btn"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      select2: null,
      Approver: [
        "Select Approvers",
        "CEO",
        "Direct Manager",
        "Development Manager",
        "Finance",
      ],
      Approvers1: [
        "Select Approvers",
        "CEO",
        "Direct Manager",
        "Development Manager",
        "Finance",
      ],
      Approvers2: [
        "Select Approvers",
        "CEO",
        "Direct Manager",
        "Development Manager",
        "Finance",
      ],
    };
  },
};
</script>
