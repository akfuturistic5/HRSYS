<template>
  <!-- Add Policy Modal -->
  <div id="add_policy" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Policy</h5>
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
                >Policy Name <span class="text-danger">*</span></label
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
              <label class="col-form-label">Department</label>
              <vue-select
                :options="AddPolicyDepartment"
                id="select-add-policydepartment"
                placeholder="All Departments"
              />
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Upload Policy <span class="text-danger">*</span></label
              >
              <input type="file" class="form-control" id="policy_upload" />
            </div>
            <div class="submit-section">
              <button class="btn btn-primary submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Policy Modal -->

  <!-- Edit Policy Modal -->
  <div id="edit_policy" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Policy</h5>
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
                >Policy Name <span class="text-danger">*</span></label
              >
              <input class="form-control" type="text" value="Leave Policy" />
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Description <span class="text-danger">*</span></label
              >
              <textarea class="form-control" rows="4"></textarea>
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label">Department</label>
              <vue-select
                :options="EditPolicyDepartment"
                id="select-edit-policydepartment"
                placeholder="All Departments"
              />
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Upload Policy <span class="text-danger">*</span></label
              >
              <input type="file" class="form-control" id="edit_policy_upload" />
            </div>
            <div class="submit-section">
              <button class="btn btn-primary submit-btn">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Edit Policy Modal -->

  <!-- Delete Policy Modal -->
  <div class="modal custom-modal fade" id="delete_policy" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="form-header">
            <h3>Delete Policy</h3>
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
  <!-- /Delete Policy Modal -->
</template>
<script>
export default {
  data() {
    return {
      select2: null,
      AddPolicyDepartment: [
        "All Departments",
        "Web Development",
        "Marketing",
        "IT Management",
      ],
      EditPolicyDepartment: [
        "All Departments",
        "Web Development",
        "Marketing",
        "IT Management",
      ],
    };
  },
};
</script>
