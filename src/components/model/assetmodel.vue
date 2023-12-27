<template>
  <!-- Add Asset Modal -->
  <div id="add_asset" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-md" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Asset</h5>
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
                  <label class="col-form-label">Asset Name</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Asset Id</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Purchase Date</label>
                  <datepicker
                    v-model="startdate"
                    class="form-control floating datetimepicker"
                    :editable="true"
                    :clearable="false"
                    :input-format="dateFormat"
                  />
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
                  <label class="col-form-label">Manufacturer</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Model</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Serial Number</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Supplier</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Condition</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Warranty</label>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="In Months"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Value</label>
                  <input placeholder="$1800" class="form-control" type="text" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Asset User</label>
                  <vue-select
                    :options="addassetsuser"
                    placeholder="John Doe"
                    id="addassetsuser"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="input-block mb-3">
                  <label class="col-form-label">Description</label>
                  <textarea class="form-control"></textarea>
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Status</label>
                  <vue-select
                    :options="addassetstatus"
                    placeholder="Pending"
                    id="addassetstatus"
                  />
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
  <!-- /Add Asset Modal -->

  <!-- Edit Asset Modal -->
  <div id="edit_asset" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-md" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Asset</h5>
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
                  <label class="col-form-label">Asset Name</label>
                  <input class="form-control" type="text" value="Dell Laptop" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Asset Id</label>
                  <input
                    class="form-control"
                    type="text"
                    value="#AST-0001"
                    readonly
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Purchase Date</label>
                  <datepicker
                    v-model="startdateone"
                    class="form-control floating datetimepicker"
                    :editable="true"
                    :clearable="false"
                    :input-format="dateFormat"
                  />
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
                  <label class="col-form-label">Manufacturer</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Model</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Serial Number</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Supplier</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Condition</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Warranty</label>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="In Months"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Value</label>
                  <input placeholder="$1800" class="form-control" type="text" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Asset User</label>
                  <vue-select
                    :options="editassetsuser"
                    placeholder="John Doe"
                    id="editassetsuser"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="input-block mb-3">
                  <label class="col-form-label">Description</label>
                  <textarea class="form-control"></textarea>
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Status</label>
                  <vue-select
                    :options="editassetstatus"
                    placeholder="Pending"
                    id="editassetstatus"
                  />
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
  <!-- Edit Asset Modal -->

  <!-- Delete Asset Modal -->
  <div class="modal custom-modal fade" id="delete_asset" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="form-header">
            <h3>Delete Asset</h3>
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
  <!-- /Delete Asset Modal -->
</template>
<script>
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
export default {
  data() {
    return {
      select2: null,
      addassetsuser: ["John Doe", "Richard Miles"],
      addassetstatus: ["Pending", "Approved", "Deployed", "Damaged"],
      editassetsuser: ["John Doe", "Richard Miles"],
      editassetstatus: ["Pending", "Approved", "Deployed", "Damaged"],
      startdate: currentDate,
      dateFormat: 'dd-MM-yyyy',
      startdateone: currentDateOne,
    };
  },
 
};
</script>
