<template>
  <!-- Add Custom Policy Modal -->
  <div id="add_custom_policy" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Custom Policy</h5>
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
              <input type="text" class="form-control" />
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Days <span class="text-danger">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
            <div class="input-block mb-3 leave-duallist">
              <label class="col-form-label">Add employee</label>
              <div class="row">
                <div class="col-lg-5 col-sm-5">
                  <select
                    v-model="selectedFrom"
                    class="form-control form-select"
                    size="5"
                    multiple
                  >
                    <option
                      v-for="option in optionsFrom"
                      :value="option.value"
                      :key="option.value"
                    >
                      {{ option.label }}
                    </option>
                  </select>
                </div>
                <div class="multiselect-controls col-lg-2 col-sm-2 d-grid gap-2">
                  <button type="button" @click="moveRightAll" class="btn w-100 btn-white">
                    <i class="fa fa-forward"></i>
                  </button>
                  <button
                    type="button"
                    @click="moveRightSelected"
                    class="btn w-100 btn-white"
                  >
                    <i class="fa fa-chevron-right"></i>
                  </button>
                  <button
                    type="button"
                    @click="moveLeftSelected"
                    class="btn w-100 btn-white"
                  >
                    <i class="fa fa-chevron-left"></i>
                  </button>
                  <button type="button" @click="moveLeftAll" class="btn w-100 btn-white">
                    <i class="fa fa-backward"></i>
                  </button>
                </div>
                <div class="col-lg-5 col-sm-5">
                  <select
                    v-model="selectedTo"
                    class="form-control form-select"
                    size="8"
                    multiple
                  >
                    <option
                      v-for="option in optionsTo"
                      :value="option.value"
                      :key="option.value"
                    >
                      {{ option.label }}
                    </option>
                  </select>
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
  <!-- /Add Custom Policy Modal -->

  <!-- Edit Custom Policy Modal -->
  <div id="edit_custom_policy" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Custom Policy</h5>
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
              <input type="text" class="form-control" value="LOP" />
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Days <span class="text-danger">*</span></label
              >
              <input type="text" class="form-control" value="4" />
            </div>
            <div class="input-block mb-3 leave-duallist">
              <label class="col-form-label">Add employee</label>
              <div class="row">
                <div class="col-lg-5 col-sm-5">
                  <select
                    name="edit_customleave_from"
                    id="edit_customleave_select"
                    class="form-control form-select"
                    size="5"
                    multiple="multiple"
                  >
                    <option value="1">Bernardo Galaviz</option>
                    <option value="2">Jeffrey Warden</option>
                    <option value="2">John Doe</option>
                    <option value="2">John Smith</option>
                    <option value="3">Mike Litorus</option>
                  </select>
                </div>
                <div class="multiselect-controls col-lg-2 col-sm-2 d-grid gap-2">
                  <button
                    type="button"
                    id="edit_customleave_select_rightAll"
                    class="btn w-100 btn-white"
                  >
                    <i class="fa fa-forward"></i>
                  </button>
                  <button
                    type="button"
                    id="edit_customleave_select_rightSelected"
                    class="btn w-100 btn-white"
                  >
                    <i class="fa fa-chevron-right"></i>
                  </button>
                  <button
                    type="button"
                    id="edit_customleave_select_leftSelected"
                    class="btn w-100 btn-white"
                  >
                    <i class="fa fa-chevron-left"></i>
                  </button>
                  <button
                    type="button"
                    id="edit_customleave_select_leftAll"
                    class="btn w-100 btn-white"
                  >
                    <i class="fa fa-backward"></i>
                  </button>
                </div>
                <div class="col-lg-5 col-sm-5">
                  <select
                    name="customleave_to"
                    id="edit_customleave_select_to"
                    class="form-control form-select"
                    size="8"
                    multiple="multiple"
                  ></select>
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
  <!-- /Edit Custom Policy Modal -->

  <!-- Delete Custom Policy Modal -->
  <div class="modal custom-modal fade" id="delete_custom_policy" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="form-header">
            <h3>Delete Custom Policy</h3>
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
  <!-- /Delete Custom Policy Modal -->
</template>

<script>
export default {
  data() {
    return {
      optionsFrom: [
        { label: "Bernardo Galaviz", value: 1 },
        { label: "Jeffrey Warden", value: 2 },
        { label: "John Doe", value: 3 },
        { label: "John Smith", value: 4 },
        { label: "Mike Litorus", value: 5 },
      ],
      selectedFrom: [],
      selectedTo: [],
      optionsTo: [],
    };
  },
  methods: {
    moveRightAll() {
      this.optionsTo = this.optionsTo.concat(this.optionsFrom); // Add selected options to optionsTo
      this.optionsFrom = []; // Clear optionsFrom
    },
    moveRightSelected() {
      // Move selected options from optionsFrom to optionsTo
      const selectedValues = this.selectedFrom.slice();
      this.optionsTo = this.optionsTo.concat(
        this.optionsFrom.filter((option) => selectedValues.includes(option.value))
      );
      // Remove selected options from optionsFrom
      this.optionsFrom = this.optionsFrom.filter(
        (option) => !selectedValues.includes(option.value)
      );
      // Clear selectedFrom
      this.selectedFrom = [];
    },

    moveLeftSelected() {
      // Move selected options from optionsTo to optionsFrom
      const selectedValues = this.selectedTo.slice();
      this.optionsFrom = this.optionsFrom.concat(
        this.optionsTo.filter((option) => selectedValues.includes(option.value))
      );
      // Remove selected options from optionsTo
      this.optionsTo = this.optionsTo.filter(
        (option) => !selectedValues.includes(option.value)
      );
      // Clear selectedTo
      this.selectedTo = [];
    },
    moveLeftAll() {
      this.optionsFrom = this.optionsFrom.concat(this.optionsTo); // Add selected options back to optionsFrom
      this.optionsTo = [];
    },
  },
};
</script>
