<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <!-- Page Header -->
        <breadcrumb :title="title" :path="path" :text="text" />
        <!-- /Page Header -->
        <!-- /Page Header -->

        <!-- Content Starts -->
        <div class="row">
          <div class="col-12">
            <!-- Search Form -->
            <div class="main-search">
              <form action="javascript:;">
                <div class="input-group">
                  <input type="text" class="form-control" />
                  <button class="btn btn-primary" type="button">Search</button>
                </div>
              </form>
            </div>
            <!-- /Search Form -->

            <div class="search-result">
              <h3>Search Result Found For: <u>Keyword</u></h3>
              <p>215 Results found</p>
            </div>

            <div class="search-lists">
              <ul class="nav nav-tabs nav-tabs-solid">
                <li class="nav-item">
                  <a class="nav-link active" href="#results_projects" data-bs-toggle="tab"
                    >Projects</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#results_clients" data-bs-toggle="tab"
                    >Clients</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#results_users" data-bs-toggle="tab">Users</a>
                </li>
              </ul>
              <div class="tab-content">
                <div class="tab-pane show active" id="results_projects">
                  <projectsearch />
                </div>

                <div class="tab-pane" id="results_clients">
                  <clientsearch />
                </div>

                <div class="tab-pane" id="results_users">
                  <userssearch />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Content End -->
      </div>
      <!-- /Page Content -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Search",
      path: "Dashboard",
      text: "Search",
    };
  },
};
</script>
