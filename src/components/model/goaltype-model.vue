<template>
  <!-- Add Goal Modal -->
  <div id="add_type" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add New Goal Type</h5>
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
                >Goal Type <span class="text-danger">*</span></label
              >
              <input class="form-control" type="text" />
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Description <span class="text-danger">*</span></label
              >
              <textarea class="form-control" rows="4"></textarea>
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label">Status</label>
              <vue-select :options="Goalstatus" placeholder="Active" id="goalstatus" />
            </div>
            <div class="submit-section">
              <button class="btn btn-primary submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Goal Modal -->

  <!-- Edit Goal Modal -->
  <div id="edit_type" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Goal Type</h5>
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
                >Goal Type <span class="text-danger">*</span></label
              >
              <input class="form-control" type="text" value="Invoice Goal" />
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Description <span class="text-danger">*</span></label
              >
              <textarea class="form-control" rows="4">Lorem ipsum is map</textarea>
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label">Status</label>
              <vue-select
                :options="Goaltypestatus"
                placeholder="Active"
                id="goaltypestatus"
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
  <!-- /Edit Goal Modal -->

  <!-- Delete Goal Modal -->
  <div class="modal custom-modal fade" id="delete_type" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="form-header">
            <h3>Delete Goal Type</h3>
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
  <!-- /Delete Goal Modal -->
</template>

<script>
export default {
  data() {
    return {
      select2: null,
      Goalstatus: ["Active", "Inactive"],
      Goaltypestatus: ["Active", "Inactive"],
    };
  },
};
</script>
