<template>
  <!-- Edit Job Modal -->
  <div id="edit_schedule" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit</h5>
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
                  <label class="col-form-label">Schedule Date 1</label>
                  <input
                    type="text"
                    class="form-control datetimepicker"
                    value="3 Mar 2023"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Select Time</label>
                  <vue-select
                    :options="Scheduletiming"
                    id="scheduletiming"
                    placeholder="12:00 AM-01:00 AM"
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Schedule Date 2</label>
                  <input
                    type="text"
                    class="form-control datetimepicker"
                    value="3 Mar 2023"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Select Time</label>
                  <vue-select
                    :options="Scheduletime"
                    id="scheduletime"
                    placeholder="12:00 AM-01:00 AM"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Schedule Date 3</label>
                  <input
                    type="text"
                    class="form-control datetimepicker"
                    value="3 Mar 2023"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Select Time</label
                  ><vue-select
                    :options="Schedule"
                    id="schedule"
                    placeholder="12:00 AM-01:00 AM"
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
  <!-- /Edit Job Modal -->
</template>
<script>
export default {
  data() {
    return {
      select2: null,
      Scheduletiming: [
        "Select Time",
        "12:00 AM-01:00 AM",
        "01:00 AM-02:00 AM",
        "02:00 AM-03:00 AM",
        "03:00 AM-04:00 AM",
        "04:00 AM-05:00 AM",
        "05:00 AM-06:00 AM",
      ],
      Scheduletime: [
        "Select Time",
        "12:00 AM-01:00 AM",
        "01:00 AM-02:00 AM",
        "02:00 AM-03:00 AM",
        "03:00 AM-04:00 AM",
        "04:00 AM-05:00 AM",
        "05:00 AM-06:00 AM",
      ],
      Schedule: [
        "Select Time",
        "12:00 AM-01:00 AM",
        "01:00 AM-02:00 AM",
        "02:00 AM-03:00 AM",
        "03:00 AM-04:00 AM",
        "04:00 AM-05:00 AM",
        "05:00 AM-06:00 AM",
      ],
    };
  },
};
</script>
