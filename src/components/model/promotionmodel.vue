<template>
  <!-- Add Promotion Modal -->
  <div id="add_promotion" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Promotion</h5>
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
                >Promotion For <span class="text-danger">*</span></label
              >
              <input class="form-control" type="text" />
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Promotion From <span class="text-danger">*</span></label
              >
              <input class="form-control" type="text" value="Web Developer" readonly />
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Promotion To <span class="text-danger">*</span></label
              >
              <vue-select
                :options="Promotion"
                placeholder="Web Developer"
                id="promotion"
              />
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Promotion Date <span class="text-danger">*</span></label
              >
              <div class="cal-icon">
                <datepicker
                  v-model="startdate"
                  placeholder="Choose Date"
                  class="form-control datetimepicker"
                  :editable="true"
                  :clearable="false"
                  :input-format="dateFormat"
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
  <!-- /Add Promotion Modal -->

  <!-- Edit Promotion Modal -->
  <div id="edit_promotion" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Promotion</h5>
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
                >Promotion For <span class="text-danger">*</span></label
              >
              <input class="form-control" type="text" value="John Doe" />
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Promotion From <span class="text-danger">*</span></label
              >
              <input class="form-control" type="text" value="Web Developer" readonly />
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Promotion To <span class="text-danger">*</span></label
              >
              <vue-select
                :options="Promotionmodel"
                placeholder="Web Developer"
                id="promotionmodel"
              />
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label"
                >Promotion Date <span class="text-danger">*</span></label
              >
              <div class="cal-icon">
                <datepicker
                  v-model="startdate"
                  placeholder="Choose Date"
                  class="form-control datetimepicker"
                  :editable="true"
                  :clearable="false"
                  :input-format="dateFormat"
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
  <!-- /Edit Promotion Modal -->

  <!-- Delete Promotion Modal -->
  <div class="modal custom-modal fade" id="delete_promotion" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="form-header">
            <h3>Delete Promotion</h3>
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
  <!-- /Delete Promotion Modal -->
</template>
<script>
import { ref } from "vue";
const currentDate = ref(new Date());
export default {
  data() {
    return {
      select2: null,
      Promotion: ["Web Developer", "Web Designer", "SEO Analyst"],
      Promotionmodel: ["Web Developer", "Web Designer", "SEO Analyst"],
      startdate: currentDate,
      dateFormat: 'dd-MM-yyyy',
    };
  },
};
</script>
