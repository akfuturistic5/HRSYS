<template>
  <div class="main-wrapper">
    <settingssidebar></settingssidebar>
    <layout-header></layout-header>
    <div class="page-wrapper">
      <div class="content container-fluid">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <singlebreadcrumb :title="title" />
            <form>
              <div class="settings-widget">
                <div class="h3 card-title with-switch">
                  DA and HRA
                  <div class="onoffswitch">
                    <input
                      type="checkbox"
                      name="onoffswitch"
                      class="onoffswitch-checkbox"
                      id="switch_hra"
                      checked
                    />
                    <label class="onoffswitch-label" for="switch_hra">
                      <span class="onoffswitch-inner"></span>
                      <span class="onoffswitch-switch"></span>
                    </label>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <div class="input-block mb-3">
                      <label class="col-form-label">DA (%)</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="input-block mb-3">
                      <label class="col-form-label">HRA (%)</label>
                      <input class="form-control" type="text" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="settings-widget">
                <div class="h3 card-title with-switch">
                  Provident Fund Settings
                  <div class="onoffswitch">
                    <input
                      type="checkbox"
                      name="onoffswitch"
                      class="onoffswitch-checkbox"
                      id="switch_pf"
                      checked
                    />
                    <label class="onoffswitch-label" for="switch_pf">
                      <span class="onoffswitch-inner"></span>
                      <span class="onoffswitch-switch"></span>
                    </label>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <div class="input-block mb-3">
                      <label class="col-form-label">Employee Share (%)</label>
                      <input class="form-control" type="text" />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="input-block mb-3">
                      <label class="col-form-label">Organization Share (%)</label>
                      <input class="form-control" type="text" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="settings-widget">
                <div class="h3 card-title with-switch">
                  ESI Settings
                  <div class="onoffswitch">
                    <input
                      type="checkbox"
                      name="onoffswitch"
                      class="onoffswitch-checkbox"
                      id="switch_esi"
                    />
                    <label class="onoffswitch-label" for="switch_esi">
                      <span class="onoffswitch-inner"></span>
                      <span class="onoffswitch-switch"></span>
                    </label>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <div class="input-block mb-3">
                      <label class="col-form-label">Employee Share (%)</label>
                      <input class="form-control" type="text" />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="input-block mb-3">
                      <label class="col-form-label">Organization Share (%)</label>
                      <input class="form-control" type="text" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="settings-widget">
                <div class="h3 card-title with-switch">
                  TDS&nbsp; <small class="form-text text-muted">Annual Salary</small>
                  <div class="onoffswitch">
                    <input
                      type="checkbox"
                      name="onoffswitch"
                      class="onoffswitch-checkbox"
                      id="switch_tds"
                    />
                    <label class="onoffswitch-label" for="switch_tds">
                      <span class="onoffswitch-inner"></span>
                      <span class="onoffswitch-switch"></span>
                    </label>
                  </div>
                </div>
                <div class="row row-sm">
                  <div class="col-sm-4">
                    <div class="input-block mb-3">
                      <label class="col-form-label">Salary From</label>
                      <input class="form-control" type="text" />
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="input-block mb-3">
                      <label class="col-form-label">Salary To</label>
                      <input class="form-control" type="text" />
                    </div>
                  </div>
                  <div class="col-sm-2">
                    <div class="input-block mb-3">
                      <label class="col-form-label">%</label>
                      <input class="form-control" type="text" />
                    </div>
                  </div>
                  <div class="col-sm-2">
                    <div class="input-block mb-3">
                      <label class="d-none d-sm-block">&nbsp;</label>
                      <button class="btn btn-danger w-100 set-btn" type="button">
                        <i class="fa-regular fa-trash-can"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="row row-sm">
                  <div class="col-sm-4">
                    <div class="input-block mb-3">
                      <label class="col-form-label">Salary From</label>
                      <input class="form-control" type="text" />
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="input-block mb-3">
                      <label class="col-form-label">Salary To</label>
                      <input class="form-control" type="text" />
                    </div>
                  </div>
                  <div class="col-sm-2">
                    <div class="input-block mb-3">
                      <label class="col-form-label">%</label>
                      <input class="form-control" type="text" />
                    </div>
                  </div>
                  <div class="col-sm-2">
                    <div class="input-block mb-3">
                      <label class="d-none d-sm-block">&nbsp;</label>
                      <button class="btn btn-danger w-100 set-btn" type="button">
                        <i class="fa-regular fa-trash-can"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="row row-sm">
                  <div class="col-sm-2 ms-auto">
                    <div class="input-block mb-3">
                      <button class="btn btn-primary w-100" type="button">
                        <i class="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="submit-section">
                <button class="btn btn-primary submit-btn" type="submit">Save</button>
              </div>
            </form>
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
      title: "Salary Settings",
    };
  },
};
</script>
