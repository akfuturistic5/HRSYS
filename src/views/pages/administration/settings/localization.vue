<template>
  <div class="main-wrapper">
    <settingssidebar></settingssidebar>
    <layout-header></layout-header>
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <!-- Page Header -->
            <singlebreadcrumb :title="title" />
            <!-- /Page Header -->

            <form>
              <div class="row">
                <div class="col-sm-6">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Default Country</label>
                    <vue-select :options="Country" id="localcountry" placeholder="USA" />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Date Format</label>
                    <vue-select
                      :options="Dateformat"
                      id="dateformat"
                      placeholder="15 May 2023"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Timezone</label>
                    <vue-select
                      :options="Timezone"
                      id="timezone"
                      placeholder="(UTC +5:30) Antarctica/Palmer"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Default Language</label>
                    <vue-select :options="Language" id="language" placeholder="English" />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Currency Code</label>
                    <vue-select :options="Code" id="localCode" placeholder="USD" />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Currency Symbol</label>
                    <input class="form-control" readonly value="$" type="text" />
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="submit-section">
                    <button class="btn btn-primary submit-btn">Save</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- /Page Content -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      select2: null,
      title: "Basic Settings",
      Code: ["USD", "Pound", "EURO", "Ringgit"],
      Country: ["USA", "United Kingdom"],
      Dateformat: [
        "15/05/2023",
        "15.05.2023",
        "15-05-2023",
        "05/15/2023",
        "2023/05/15",
        "2023-05-15",
        "15 May 2023",
      ],
      Language: ["English", "French"],
      Timezone: ["(UTC +5:30) Antarctica/Palmer"],
    };
  },
};
</script>
