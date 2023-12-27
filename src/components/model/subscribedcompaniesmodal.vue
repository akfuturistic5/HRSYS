<template>
  <!-- Upgrade Plan Modal -->
  <div class="modal custom-modal fade" id="upgrade_plan" role="dialog">
    <div class="modal-dialog modal-md modal-dialog-centered">
      <div class="modal-content">
        <button type="button" class="btn-close" data-bs-dismiss="modal">
          <i class="fa fa-close"></i>
        </button>
        <div class="modal-body">
          <h5 class="modal-title text-center mb-3">Upgrade Plan</h5>
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
                  <label class="col-form-label">Amount</label>
                  <input type="text" class="form-control" value="$500" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Plan Type</label>
                  <vue-select
                    :options="Updateplan"
                    placeholder="Monthly"
                    id="updateplan"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">No of Users</label>
                  <vue-select
                    :options="Updateuser"
                    placeholder="5 Users"
                    id="updateuser"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">No of Projects</label>
                  <vue-select
                    :options="Updateproject"
                    placeholder="5 Project"
                    id="updateproject"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">No of Storage Space</label>
                  <vue-select
                    :options="Updatestorage"
                    placeholder="5 GB"
                    id="updatestorage"
                  />
                </div>
              </div>
            </div>
            <div class="input-block mb-3">
              <label class="col-form-label">Plan Description</label>
              <textarea class="form-control" rows="4" cols="30"></textarea>
            </div>
            <div class="input-block mb-3">
              <label class="d-block">Status</label>
              <div class="status-toggle">
                <input type="checkbox" id="upgrade_plan_status" class="check" />
                <label for="upgrade_plan_status" class="checktoggle">checkbox</label>
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
  <!-- /Upgrade Plan Modal -->
</template>
<script>
export default {
  data() {
    return {
      select2: null,
      SelectUpdatePlan: "Monthly",
      SelectUpdateUser: "5 Users",
      SelectUpdateProject: "5 Projects",
      SelectUpdateStorage: "5 GB",
      Updateplan: ["Monthly", "Yearly"],
      Updateuser: ["5 Users", "50 Users", "Unlimited"],
      Updateproject: ["5 Projects", "50 Projects", "Unlimited"],
      Updatestorage: ["5 GB", "100 GB", "500 GB"],
    };
  },
  name: "subscribedcompaniesmodal",
};
</script>
