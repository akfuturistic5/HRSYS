<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <!-- Page Header -->
        <reports-header
          :title="title"
          :path="path"
          :text="text"
          :text1="text1"
        />
        <!-- /Page Header -->

        <div class="row">
          <div class="col-lg-10 mx-auto">
            <!-- Plan Tab -->
            <div class="row justify-content-center mb-4">
              <div class="col-auto">
                <nav class="nav btn-group">
                  <a
                    href="#monthly"
                    class="btn btn-outline-secondary active"
                    data-bs-toggle="tab"
                    >Monthly Plan</a
                  >
                  <a
                    href="#annual"
                    class="btn btn-outline-secondary"
                    data-bs-toggle="tab"
                    >Annual Plan</a
                  >
                </nav>
              </div>
            </div>
            <!-- /Plan Tab -->

            <!-- Plan Tab Content -->
            <div class="tab-content">
              <!-- Monthly Tab -->
              <monthlysub> </monthlysub>
              <!-- /Monthly Tab -->

              <!-- Annual Plan Tab -->
              <annualsub></annualsub>
              <!-- /Annual Plan Tab -->
            </div>
            <!-- /Plan Tab Content -->
          </div>
        </div>
      </div>
      <!-- /Page Content -->
    </div>
  </div>
  <submodels></submodels>
</template>
<script>
import inboxHeader from "@/components/breadcrumb/inbox-header.vue";

export default {
  components: { inboxHeader },
  data() {
    return {
      title: "Subscriptions",
      path: "Dashboard",
      text: "Subscriptions",
      text1: "Add Subscription",
    };
  },
};
</script>
