<template>
  <div id="selectMyTime" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Select Your Time</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-12">
              <div class="input-block mb-3">
                <label class="col-form-label"
                  >Day1 <span class="text-danger">*</span></label
                >
                <vue-select
                  :options="Value"
                  id="value"
                  placeholder="11.00am - 11.30am (24 Feb 2023)"
                />
              </div>
            </div>
          </div>
          <div class="modal-btn delete-action mt-3">
            <div class="row">
              <div class="col-6">
                <button type="button" class="btn btn-primary w-100 cancel-btn">
                  Submit
                </button>
              </div>
              <div class="col-6">
                <button
                  type="button"
                  class="btn btn-primary w-100 cancel-btn"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Value: [
        "11.00am - 11.30am (24 Feb 2023)",
        "1.00pm - 1.30pm (25 Feb 2023)",
        "3.00pm - 3.30pm (26 Feb 2023)",
      ],
    };
  },
};
</script>
