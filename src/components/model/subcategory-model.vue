<template>
  <!-- Add Modal -->
  <div class="modal custom-modal fade" id="add_categories" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Sub Categories</h5>
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
                >Categories Name <span class="text-danger">*</span></label
              >
              <vue-select
                :options="AddSubcategory"
                id="select-add-subcategory"
                placeholder="Select"
              />
            </div>

            <div class="input-block mb-3">
              <label class="col-form-label"
                >Sub Categories Name <span class="text-danger">*</span></label
              >
              <input class="form-control" type="text" />
            </div>

            <div class="submit-section">
              <button class="btn btn-primary submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Modal -->

  <!-- Edit Modal -->
  <div class="modal custom-modal fade" id="edit_categories" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Categories</h5>
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
                >Categories Name <span class="text-danger">*</span></label
              >
              <vue-select
                :options="EditSubcategory"
                id="select-edit-subcategory"
                placeholder="Select"
              />
            </div>

            <div class="input-block mb-3">
              <label class="col-form-label"
                >Sub Categories Name <span class="text-danger">*</span></label
              >
              <input class="form-control" type="text" />
            </div>

            <div class="submit-section">
              <button class="btn btn-primary submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Edit Modal -->

  <!-- Delete Holiday Modal -->
  <div class="modal custom-modal fade" id="delete" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="form-header">
            <h3>Delete</h3>
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
  <!-- /Delete Holiday Modal -->
</template>
<script>
export default {
  data() {
    return {
      select2: null,
      AddSubcategory: ["Select", "Hardware", "Material"],
      EditSubcategory: ["Select", "Hardware", "Material"],
    };
  },
};
</script>
