<template>
  <!-- Add Tax Modal -->
  <div id="add_tax" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Tax</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Tax Name <span class="text-danger">*</span></label
              >
              <input class="form-control" type="text" />
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Tax Percentage (%) <span class="text-danger">*</span></label
              >
              <input class="form-control" type="text" />
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Status <span class="text-danger">*</span></label
              >
              <vue-select
                :options="AddTaxesStatus"
                id="select-add-taxes-status"
                placeholder="Active"
              />
            </div>
            <div class="submit-section">
              <button class="btn btn-primary submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Tax Modal -->

  <!-- Edit Tax Modal -->
  <div id="edit_tax" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Tax</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Tax Name <span class="text-danger">*</span></label
              >
              <input class="form-control" value="VAT" type="text" />
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Tax Percentage (%) <span class="text-danger">*</span></label
              >
              <input class="form-control" value="14%" type="text" />
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Status <span class="text-danger">*</span></label
              >
              <vue-select
                :options="EditTaxesStatus"
                id="select-edit-taxes-status"
                placeholder="Active"
              />
            </div>
            <div class="submit-section">
              <button class="btn btn-primary submit-btn">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Edit Tax Modal -->

  <!-- Delete Tax Modal -->
  <div class="modal custom-modal fade" id="delete_tax" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="form-header">
            <h3>Delete Tax</h3>
            <p>Are you sure want to delete?</p>
          </div>
          <div class="modal-btn delete-action">
            <div class="row">
              <div class="col-6">
                <a href="javascript:void(0);" class="btn btn-primary continue-btn"
                  >Delete</a
                >
              </div>
              <div class="col-6">
                <a
                  href="javascript:void(0);"
                  data-bs-dismiss="modal"
                  class="btn btn-primary cancel-btn"
                  >Cancel</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Delete Tax Modal -->
</template>
<script>
export default {
  data() {
    return {
      select2: null,
      AddTaxesStatus: ["Active", "Inactive"],
      EditTaxesStatus: ["Active", "Inactive"],
    };
  },
};
</script>
