<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>
    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content">
        <!-- Page Header -->
        <leaves-admin-header
          :title="title"
          :path="path"
          :text="text"
          :text1="text1"
        />
        <!-- /Page Header -->

        <!-- Search Filter -->
        <sales-filter />
        <!-- /Search Filter -->

        <div class="row">
          <div class="col-md-12">
            <div class="table-responsive">
              <table class="table table-striped custom-table mb-0">
                <thead>
                  <tr>
                    <th>Estimate Number</th>
                    <th>Client</th>
                    <th>Estimate Date</th>
                    <th>Expiry Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th class="text-end">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in Estimates" :key="item.id">
                    <td>
                      <router-link to="estimate-view">{{
                        item.EstimateId
                      }}</router-link>
                    </td>
                    <td>{{ item.Client }}</td>
                    <td>{{ item.EstimateDate }}</td>
                    <td>{{ item.ExpiryDate }}</td>
                    <td>{{ item.Amount }}</td>
                    <td>
                      <span :class="item.Class">{{ item.Status }}</span>
                    </td>
                    <td class="text-end">
                      <div class="dropdown dropdown-action">
                        <a
                          href="javascript:void(0);"
                          class="action-icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          ><i class="material-icons">more_vert</i></a
                        >
                        <div class="dropdown-menu dropdown-menu-right">
                          <router-link class="dropdown-item" to="edit-estimate"
                            ><i class="fa-solid fa-pencil m-r-5"></i>
                            Edit</router-link
                          >
                          <a
                            class="dropdown-item"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_estimate"
                            ><i class="fa-regular fa-trash-can m-r-5"></i>
                            Delete</a
                          >
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <!-- /Page Content -->
      <delete-model />
    </div>
    <!-- /Page Wrapper -->
  </div>
</template>

<script>
import Estimates from "@/assets/json/estimates.json";
export default {
  data() {
    return {
      title: "Estimates",
      path: "Dashboard",
      text: "Estimates",
      text1: "Create Estimate",
      Estimates: Estimates,
    };
  },
  name: "estimates",
};
</script>
