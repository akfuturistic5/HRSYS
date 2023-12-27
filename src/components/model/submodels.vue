<template>
  <!-- Add Plan Modal -->
  <div
    class="modal custom-modal fade"
    id="add_plan"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-md modal-dialog-centered">
      <div class="modal-content">
        <button type="button" class="btn-close" data-bs-dismiss="modal">
          <i class="fa fa-close"></i>
        </button>
        <div class="modal-body">
          <h5 class="modal-title text-center mb-3">Add Plan</h5>
          <form>
            <div class="row">
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Plan Name</label>
                  <input type="text" placeholder="Free Trial" class="form-control" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Plan Amount</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Plan Type</label>
                  <vue-select :options="Plantype" id="plantype" placeholder="Monthly" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">No of Users</label>
                  <vue-select :options="Users" id="user" placeholder="5 Users" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">No of Projects</label>
                  <vue-select :options="Projects" id="project" placeholder="5 Projects" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">No of Storage Space</label>
                  <vue-select :options="Storage" id="storages" placeholder="5 GB" />
                </div>
              </div>
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label">Plan Description</label>
              <textarea class="form-control" rows="4" cols="30"></textarea>
            </div>
            <div class="input-block mb-3">
              <label class="d-block col-form-label">Status</label>
              <div class="status-toggle">
                <input type="checkbox" id="add_plan_status" class="check" />
                <label for="add_plan_status" class="checktoggle">checkbox</label>
              </div>
            </div>
            <div class="m-t-20 text-center">
              <button class="btn btn-primary submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Plan Modal -->

  <!-- Edit Plan Modal -->
  <div class="modal custom-modal fade" id="edit_plan" role="dialog">
    <div class="modal-dialog modal-md modal-dialog-centered">
      <div class="modal-content">
        <button type="button" class="btn-close" data-bs-dismiss="modal">
          <i class="fa fa-close"></i>
        </button>
        <div class="modal-body">
          <h5 class="modal-title text-center mb-3">Edit Plan</h5>
          <form>
            <div class="row">
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Plan Name</label>
                  <input
                    type="text"
                    placeholder="Free Trial"
                    class="form-control"
                    value="Free Trial"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Plan Amount</label>
                  <input type="text" class="form-control" value="$500" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Plan Type</label>
                  <vue-select :options="Plantype1" id="plantype1" placeholder="Monthly" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">No of Users</label>
                  <vue-select :options="Users1" id="user1" placeholder="5 Users" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">No of Projects</label>
                  <vue-select
                    :options="Projects1"
                    id="project1"
                    placeholder="5 Projects"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">No of Storage Space</label>
                  <vue-select :options="Storage1" id="storages1" placeholder="5 GB" />
                </div>
              </div>
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label">Plan Description</label>
              <textarea class="form-control" rows="4" cols="30"></textarea>
            </div>
            <div class="input-block mb-3">
              <label class="d-block col-form-label">Status</label>
              <div class="status-toggle">
                <input type="checkbox" id="edit_plan_status" class="check" />
                <label for="edit_plan_status" class="checktoggle">checkbox</label>
              </div>
            </div>
            <div class="m-t-20 text-center">
              <button class="btn btn-primary submit-btn">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Edit Plan Modal -->
</template>
<script>
export default {
  data() {
    return {
      select2: null,
      Plantype: ["Monthly", "Yearly"],
      Users: ["5 Users", "50 Users", "Unlimited"],
      Projects: ["5 Projects", "50 Projects", "Unlimited"],
      Storage: ["5 GB", "100 GB", "500 GB"],
      Plantype1: ["Monthly", "Yearly"],
      Users1: ["5 Users", "50 Users", "Unlimited"],
      Projects1: ["5 Projects", "50 Projects", "Unlimited"],
      Storage1: ["5 GB", "100 GB", "500 GB"],
    };
  },
};
</script>
