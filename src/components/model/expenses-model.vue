<template>
  <!-- Add Expense Modal -->
  <div id="add_expense" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Expense</h5>
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
                  <label class="col-form-label">Item Name</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Purchase From</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Purchase Date</label>
                  <div class="cal-icon">
                    <datepicker
                      v-model="startdate"
                      class="form-control floating datetimepicker"
                      :editable="true"
                      :clearable="false"
                      :input-format="dateFormat"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Purchased By </label>
                  <vue-select
                    :options="AddExpensesPurchase"
                    id="select-add-expense-purchase"
                    placeholder="Daniel Porter"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Amount</label>
                  <input placeholder="$50" class="form-control" type="text" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Paid By</label>
                  <vue-select
                    :options="AddExpensesPaid"
                    id="select-add-expense-paid"
                    placeholder="Cash"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Status</label>
                  <vue-select
                    :options="AddExpensesStatus"
                    id="select-add-expense-status"
                    placeholder="Pending"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Attachments</label>
                  <input class="form-control" type="file" />
                </div>
              </div>
            </div>
            <div class="attach-files">
              <ul>
                <li>
                  <img src="@/assets/img/placeholder.jpg" alt="Placeholder Image" />
                  <a href="javascript:void(0);" class="fa fa-close file-remove"></a>
                </li>
                <li>
                  <img src="@/assets/img/placeholder.jpg" alt="Placeholder Image" />
                  <a href="javascript:void(0);" class="fa fa-close file-remove"></a>
                </li>
              </ul>
            </div>
            <div class="submit-section">
              <button class="btn btn-primary submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Expense Modal -->

  <!-- Edit Expense Modal -->
  <div id="edit_expense" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Expense</h5>
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
                  <label class="col-form-label">Item Name</label>
                  <input class="form-control" value="Dell Laptop" type="text" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Purchase From</label>
                  <input class="form-control" value="Amazon" type="text" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Purchase Date</label>
                  <div class="cal-icon">
                    <datepicker
                      v-model="startdateone"
                      class="form-control floating datetimepicker"
                      :editable="true"
                      :clearable="false"
                      :input-format="dateFormat"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Purchased By </label>
                  <vue-select
                    :options="EditExpensesPurchase"
                    id="select-edit-expense-purchase"
                    placeholder="Daniel Porter"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Amount</label>
                  <input
                    placeholder="$50"
                    class="form-control"
                    value="$10000"
                    type="text"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Paid By</label>
                  <vue-select
                    :options="EditExpensesPaid"
                    id="select-edit-expense-paid"
                    placeholder="Cash"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Status</label>
                  <vue-select
                    :options="EditExpensesStatus"
                    id="select-edit-expense-status"
                    placeholder="Pending"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Attachments</label>
                  <input class="form-control" type="file" />
                </div>
              </div>
            </div>
            <div class="attach-files">
              <ul>
                <li>
                  <img src="@/assets/img/placeholder.jpg" alt="Placeholder Image" />
                  <a href="javascript:void(0);" class="fa fa-close file-remove"></a>
                </li>
                <li>
                  <img src="@/assets/img/placeholder.jpg" alt="Placeholder Image" />
                  <a href="javascript:void(0);" class="fa fa-close file-remove"></a>
                </li>
              </ul>
            </div>
            <div class="submit-section">
              <button class="btn btn-primary submit-btn">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Edit Expense Modal -->

  <!-- Delete Expense Modal -->
  <div class="modal custom-modal fade" id="delete_expense" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="form-header">
            <h3>Delete Expense</h3>
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
  <!-- Delete Expense Modal -->
</template>
<script>
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
export default {
  data() {
    return {
      select2: null,
      AddExpensesPurchase: ["Daniel Porter", "Roger Dixon"],
      AddExpensesPaid: ["Cash", "Cheque"],
      AddExpensesStatus: ["Pending", "Approved"],
      EditExpensesPurchase: ["Daniel Porter", "Roger Dixon"],
      EditExpensesPaid: ["Cash", "Cheque"],
      EditExpensesStatus: ["Pending", "Approved"],
      startdate: currentDate,
      dateFormat: 'dd-MM-yyyy',
      startdateone: currentDateOne,
    };
  },
};
</script>
