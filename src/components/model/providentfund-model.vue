<template>
  <!-- Add PF Modal -->
  <div id="add_pf" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Provident Fund</h5>
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
            <div class="row">
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Employee Name</label>
                  <select class="form-control select">
                    <option value="3">John Doe (FT-0001)</option>
                    <option value="23">Richard Miles (FT-0002)</option>
                  </select>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Provident Fund Type</label>
                  <select class="form-control select">
                    <option value="Fixed Amount" selected="">
                      Fixed Amount
                    </option>
                    <option value="Percentage of Basic Salary">
                      Percentage of Basic Salary
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="show-fixed-amount">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="input-block mb-3">
                        <label class="col-form-label"
                          >Employee Share (Amount)</label
                        >
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="input-block mb-3">
                        <label class="col-form-label"
                          >Organization Share (Amount)</label
                        >
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="show-basic-salary">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="input-block mb-3">
                        <label class="col-form-label">Employee Share (%)</label>
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="input-block mb-3">
                        <label class="col-form-label"
                          >Organization Share (%)</label
                        >
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="input-block mb-3">
                  <label class="col-form-label">Description</label>
                  <textarea class="form-control" rows="4"></textarea>
                </div>
              </div>
            </div>
            <div class="submit-section">
              <button class="btn btn-primary submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add PF Modal -->

  <!-- Edit PF Modal -->
  <div id="edit_pf" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Provident Fund</h5>
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
            <div class="row">
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Employee Name</label>
                  <select class="form-control select">
                    <option value="3">John Doe (FT-0001)</option>
                    <option value="23">Richard Miles (FT-0002)</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Provident Fund Type</label>
                  <select class="form-control select">
                    <option value="Fixed Amount" selected="">
                      Fixed Amount
                    </option>
                    <option value="Percentage of Basic Salary">
                      Percentage of Basic Salary
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-md-12">
                <div class="show-fixed-amount">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="input-block mb-3">
                        <label class="col-form-label"
                          >Employee Share (Amount)</label
                        >
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-block mb-3">
                        <label class="col-form-label"
                          >Organization Share (Amount)</label
                        >
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="show-basic-salary">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="input-block mb-3">
                        <label class="col-form-label">Employee Share (%)</label>
                        <input class="form-control" type="text" value="2%" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-block mb-3">
                        <label class="col-form-label"
                          >Organization Share (%)</label
                        >
                        <input class="form-control" type="text" value="2%" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="input-block mb-3">
                  <label class="col-form-label">Description</label>
                  <textarea class="form-control" rows="4"></textarea>
                </div>
              </div>
            </div>
            <div class="submit-section">
              <button class="btn btn-primary submit-btn">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Edit PF Modal -->

  <!-- Delete PF Modal -->
  <div class="modal custom-modal fade" id="delete_pf" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="form-header">
            <h3>Delete Provident Fund</h3>
            <p>Are you sure want to delete?</p>
          </div>
          <div class="modal-btn delete-action">
            <div class="row">
              <div class="col-6">
                <a
                  href="javascript:void(0);"
                  class="btn btn-primary continue-btn"
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
  <!-- /Delete PF Modal -->
</template>
