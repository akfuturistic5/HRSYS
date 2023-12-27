<template>
  <!-- Add Addition Modal -->
  <div id="add_addition" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Addition</h5>
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
                >Name <span class="text-danger">*</span></label
              >
              <input class="form-control" type="text" />
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Category <span class="text-danger">*</span></label
              >
              <vue-select
                :options="AddAdditionCategory"
                id="select-add-additioncategory"
                placeholder="Select a category"
              />
            </div>
            <div class="input-block mb-3">
              <label class="d-block col-form-label">Unit calculation</label>
              <div class="status-toggle">
                <input type="checkbox" id="unit_calculation" class="check" />
                <label for="unit_calculation" class="checktoggle">checkbox</label>
              </div>
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label">Unit Amount</label>
              <div class="input-group">
                <span class="input-group-text">$</span>
                <input type="text" class="form-control" />
                <span class="input-group-text">.00</span>
              </div>
            </div>
            <div class="input-block mb-3">
              <label class="d-block col-form-label">Assignee</label>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="addition_assignee"
                  id="addition_no_emp"
                  value="option1"
                  checked
                />
                <label class="form-check-label" for="addition_no_emp">
                  No assignee
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="addition_assignee"
                  id="addition_all_emp"
                  value="option2"
                />
                <label class="form-check-label" for="addition_all_emp">
                  All employees
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="addition_assignee"
                  id="addition_single_emp"
                  value="option3"
                />
                <label class="form-check-label" for="addition_single_emp">
                  Select Employee
                </label>
              </div>
              <div class="input-block mb-3">
                <vue-select
                  :options="AddAdditionEmployee"
                  id="select-add-additionemployee"
                  placeholder="-"
                />
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
  <!-- /Add Addition Modal -->

  <!-- Edit Addition Modal -->
  <div id="edit_addition" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Addition</h5>
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
                >Name <span class="text-danger">*</span></label
              >
              <input class="form-control" type="text" />
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Category <span class="text-danger">*</span></label
              >
              <vue-select
                :options="EditAdditionCategory"
                id="select-edit-additioncategory"
                placeholder="Select a category"
              />
            </div>
            <div class="input-block mb-3">
              <label class="d-block col-form-label">Unit calculation</label>
              <div class="status-toggle">
                <input type="checkbox" id="edit_unit_calculation" class="check" />
                <label for="edit_unit_calculation" class="checktoggle">checkbox</label>
              </div>
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label">Unit Amount</label>
              <div class="input-group">
                <span class="input-group-text">$</span>
                <input type="text" class="form-control" />
                <span class="input-group-text">.00</span>
              </div>
            </div>
            <div class="input-block mb-3">
              <label class="d-block col-form-label">Assignee</label>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="edit_addition_assignee"
                  id="edit_addition_no_emp"
                  value="option1"
                  checked
                />
                <label class="form-check-label" for="edit_addition_no_emp">
                  No assignee
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="edit_addition_assignee"
                  id="edit_addition_all_emp"
                  value="option2"
                />
                <label class="form-check-label" for="edit_addition_all_emp">
                  All employees
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="edit_addition_assignee"
                  id="edit_addition_single_emp"
                  value="option3"
                />
                <label class="form-check-label" for="edit_addition_single_emp">
                  Select Employee
                </label>
              </div>
              <div class="input-block mb-3">
                <vue-select
                  :options="EditAdditionEmployee"
                  id="select-edit-additionemployee"
                  placeholder="-"
                />
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
  <!-- /Edit Addition Modal -->

  <!-- Delete Addition Modal -->
  <div class="modal custom-modal fade" id="delete_addition" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="form-header">
            <h3>Delete Addition</h3>
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
  <!-- /Delete Addition Modal -->

  <!-- Add Overtime Modal -->
  <div id="add_overtime" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Overtime</h5>
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
                >Name <span class="text-danger">*</span></label
              >
              <input class="form-control" type="text" />
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Rate Type <span class="text-danger">*</span></label
              >
              <vue-select
                :options="Addovertimerate"
                id="select-add-overtimerate"
                placeholder="-"
              />
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Rate <span class="text-danger">*</span></label
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
  <!-- /Add Overtime Modal -->

  <!-- Edit Overtime Modal -->
  <div id="edit_overtime" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Overtime</h5>
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
                >Name <span class="text-danger">*</span></label
              >
              <input class="form-control" type="text" />
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Rate Type <span class="text-danger">*</span></label
              >
              <vue-select
                :options="Editovertimerate"
                id="select-edit-overtimerate"
                placeholder="-"
              />
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Rate <span class="text-danger">*</span></label
              >
              <input class="form-control" type="text" />
            </div>
            <div class="submit-section">
              <button class="btn btn-primary submit-btn">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Edit Overtime Modal -->

  <!-- Delete Overtime Modal -->
  <div class="modal custom-modal fade" id="delete_overtime" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="form-header">
            <h3>Delete Overtime</h3>
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
  <!-- /Delete Overtime Modal -->

  <!-- Add Deduction Modal -->
  <div id="add_deduction" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Deduction</h5>
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
                >Name <span class="text-danger">*</span></label
              >
              <input class="form-control" type="text" />
            </div>
            <div class="input-block mb-3">
              <label class="d-block col-form-label">Unit calculation</label>
              <div class="status-toggle">
                <input type="checkbox" id="unit_calculation_deduction" class="check" />
                <label for="unit_calculation_deduction" class="checktoggle"
                  >checkbox</label
                >
              </div>
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label">Unit Amount</label>
              <div class="input-group">
                <span class="input-group-text">$</span>
                <input type="text" class="form-control" />
                <span class="input-group-text">.00</span>
              </div>
            </div>
            <div class="input-block mb-3">
              <label class="d-block col-form-label">Assignee</label>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="deduction_assignee"
                  id="deduction_no_emp"
                  value="option1"
                  checked
                />
                <label class="form-check-label" for="deduction_no_emp">
                  No assignee
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="deduction_assignee"
                  id="deduction_all_emp"
                  value="option2"
                />
                <label class="form-check-label" for="deduction_all_emp">
                  All employees
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="deduction_assignee"
                  id="deduction_single_emp"
                  value="option3"
                />
                <label class="form-check-label" for="deduction_single_emp">
                  Select Employee
                </label>
              </div>
              <div class="input-block mb-3">
                <vue-select
                  :options="Adddeductionemployee"
                  id="select-add-deductionemployee"
                  placeholder="-"
                />
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
  <!-- /Add Deduction Modal -->

  <!-- Edit Deduction Modal -->
  <div id="edit_deduction" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Deduction</h5>
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
                >Name <span class="text-danger">*</span></label
              >
              <input class="form-control" type="text" />
            </div>
            <div class="input-block mb-3">
              <label class="d-block col-form-label">Unit calculation</label>
              <div class="status-toggle">
                <input
                  type="checkbox"
                  id="edit_unit_calculation_deduction"
                  class="check"
                />
                <label for="edit_unit_calculation_deduction" class="checktoggle"
                  >checkbox</label
                >
              </div>
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label">Unit Amount</label>
              <div class="input-group">
                <span class="input-group-text">$</span>
                <input type="text" class="form-control" />
                <span class="input-group-text">.00</span>
              </div>
            </div>
            <div class="input-block mb-3">
              <label class="d-block col-form-label">Assignee</label>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="edit_deduction_assignee"
                  id="edit_deduction_no_emp"
                  value="option1"
                  checked
                />
                <label class="form-check-label" for="edit_deduction_no_emp">
                  No assignee
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="edit_deduction_assignee"
                  id="edit_deduction_all_emp"
                  value="option2"
                />
                <label class="form-check-label" for="edit_deduction_all_emp">
                  All employees
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="edit_deduction_assignee"
                  id="edit_deduction_single_emp"
                  value="option3"
                />
                <label class="form-check-label" for="edit_deduction_single_emp">
                  Select Employee
                </label>
              </div>
              <div class="input-block mb-3">
                <vue-select
                  :options="Editdeductionemployee"
                  id="select-edit-deductionemployee"
                  placeholder="-"
                />
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
  <!-- /Edit Addition Modal -->

  <!-- Delete Deduction Modal -->
  <div class="modal custom-modal fade" id="delete_deduction" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="form-header">
            <h3>Delete Deduction</h3>
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
  <!-- /Delete Deduction Modal -->
</template>
<script>
export default {
  data() {
    return {
      select2: null,
      AddAdditionCategory: [
        "Select a category",
        "Monthly remuneration",
        "Additional remuneration",
      ],
      AddAdditionEmployee: ["-", "Select All", "John Doe", "Richard Miles"],
      EditAdditionCategory: [
        "Select a category",
        "Monthly remuneration",
        "Additional remuneration",
      ],
      EditAdditionEmployee: ["-", "Select All", "John Doe", "Richard Miles"],
      Addovertimerate: ["-", "Daily Rate", "Hourly Rate"],
      Editovertimerate: ["-", "Daily Rate", "Hourly Rate"],
      Adddeductionemployee: ["-", "Select All", "John Doe", "Richard Miles"],
      Editdeductionemployee: ["-", "Select All", "John Doe", "Richard Miles"],
    };
  },
};
</script>
