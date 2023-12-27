<template>
  <!-- Add Salary Modal -->
  <div id="add_salary" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Staff Salary</h5>
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
          <form @submit.prevent="submitForm">
            <div class="row">
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Select Staff</label>
                  <vue-select
                    :options="AddSalaryStaff"
                    id="select-add-salary-staff"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <label class="col-form-label">Net Salary</label>
                <input class="form-control" type="text" />
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <h4 class="text-primary">Earnings</h4>
                <div class="input-block mb-3">
                  <label class="col-form-label">Basic</label>
                  <input class="form-control" type="text" />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">DA(40%)</label>
                  <input class="form-control" type="text" />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">HRA(15%)</label>
                  <input class="form-control" type="text" />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">Conveyance</label>
                  <input class="form-control" type="text" />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">Allowance</label>
                  <input class="form-control" type="text" />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">Medical Allowance</label>
                  <input class="form-control" type="text" />
                </div>
                <div
                  class="input-block mb-3"
                  v-for="(other, index) in earningsOthersList"
                  :key="index"
                >
                  <label class="col-form-label">Others</label>
                  <input class="form-control" type="text" v-model="other.value" />
                </div>
                <div class="add-more">
                  <a href="javascript:void(0);" @click="addMoreEarningsOthers"
                    ><i class="fa-solid fa-plus-circle"></i> Add More</a
                  >
                </div>
              </div>
              <div class="col-sm-6">
                <h4 class="text-primary">Deductions</h4>
                <div class="input-block mb-3">
                  <label class="col-form-label">TDS</label>
                  <input class="form-control" type="text" />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">ESI</label>
                  <input class="form-control" type="text" />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">PF</label>
                  <input class="form-control" type="text" />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">Leave</label>
                  <input class="form-control" type="text" />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">Prof. Tax</label>
                  <input class="form-control" type="text" />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">Labour Welfare</label>
                  <input class="form-control" type="text" />
                </div>
                <div
                  class="input-block mb-3"
                  v-for="(other, index) in deductionsOthersList"
                  :key="index"
                >
                  <label class="col-form-label">Others</label>
                  <input class="form-control" type="text" v-model="other.value" />
                </div>
                <div class="add-more">
                  <a href="javascript:void(0);" @click="addMoreDeductionsOthers"
                    ><i class="fa-solid fa-plus-circle"></i> Add More</a
                  >
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
  <!-- /Add Salary Modal -->

  <!-- Edit Salary Modal -->
  <div id="edit_salary" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Staff Salary</h5>
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
          <form @submit.prevent="submitForm">
            <div class="row">
              <div class="col-sm-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Select Staff</label>
                  <vue-select
                    :options="EditSalaryStaff"
                    id="select-edit-salary-staff"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <label class="col-form-label">Net Salary</label>
                <input class="form-control" type="text" value="$4000" />
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <h4 class="text-primary">Earnings</h4>
                <div class="input-block mb-3">
                  <label class="col-form-label">Basic</label>
                  <input class="form-control" type="text" value="$6500" />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">DA(40%)</label>
                  <input class="form-control" type="text" value="$2000" />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">HRA(15%)</label>
                  <input class="form-control" type="text" value="$700" />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">Conveyance</label>
                  <input class="form-control" type="text" value="$70" />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">Allowance</label>
                  <input class="form-control" type="text" value="$30" />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">Medical Allowance</label>
                  <input class="form-control" type="text" value="$20" />
                </div>
                <div
                  class="input-block mb-3"
                  v-for="(other, index) in earningsOthersList"
                  :key="index"
                >
                  <label class="col-form-label">Others</label>
                  <input class="form-control" type="text" v-model="other.value" />
                </div>
                <div class="add-more">
                  <a href="javascript:void(0);" @click="editMoreEarningsOthers"
                    ><i class="fa-solid fa-plus-circle"></i> Add More</a
                  >
                </div>
              </div>
              <div class="col-sm-6">
                <h4 class="text-primary">Deductions</h4>
                <div class="input-block mb-3">
                  <label class="col-form-label">TDS</label>
                  <input class="form-control" type="text" value="$300" />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">ESI</label>
                  <input class="form-control" type="text" value="$20" />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">PF</label>
                  <input class="form-control" type="text" value="$20" />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">Leave</label>
                  <input class="form-control" type="text" value="$250" />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">Prof. Tax</label>
                  <input class="form-control" type="text" value="110" />
                </div>
                <div class="input-block mb-3">
                  <label class="col-form-label">Labour Welfare</label>
                  <input class="form-control" type="text" value="10" />
                </div>
                <div
                  class="input-block mb-3"
                  v-for="(other, index) in deductionsOthersList"
                  :key="index"
                >
                  <label class="col-form-label">Others</label>
                  <input class="form-control" type="text" v-model="other.value" />
                </div>
                <div class="add-more">
                  <a href="javascript:void(0);" @click="editMoreDeductionsOthers"
                    ><i class="fa-solid fa-plus-circle"></i> Add More</a
                  >
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
  <!-- /Edit Salary Modal -->

  <!-- Delete Salary Modal -->
  <div class="modal custom-modal fade" id="delete_salary" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="form-header">
            <h3>Delete Salary</h3>
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
  <!-- /Delete Salary Modal -->
</template>
<script>
export default {
  data() {
    return {
      select2: null,
      AddSalaryStaff: ["John Doe", "Richard Miles"],
      EditSalaryStaff: ["John Doe", "Richard Miles"],
      earningsOthersList: [{ value: "" }],
      deductionsOthersList: [{ value: "" }],
    };
  },
  methods: {
    addMoreEarningsOthers() {
      this.earningsOthersList.push({ value: "" });
    },
    addMoreDeductionsOthers() {
      this.deductionsOthersList.push({ value: "" });
    },
    editMoreEarningsOthers() {
      this.earningsOthersList.push({ value: "" });
    },
    editMoreDeductionsOthers() {
      this.deductionsOthersList.push({ value: "" });
    },
    submitForm() {
      this.$router.push("/salary");
    },
  },
};
</script>
