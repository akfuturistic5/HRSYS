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
                    <th>#</th>
                    <th>Invoice Number</th>
                    <th>Client</th>
                    <th>Created Date</th>
                    <th>Due Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th class="text-end">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in Invoices" :key="item.id">
                    <td>{{ item.Id }}</td>
                    <td>
                      <router-link to="invoice-view">{{
                        item.InvoiceNumber
                      }}</router-link>
                    </td>
                    <td>{{ item.Client }}</td>
                    <td>{{ item.CreatedDate }}</td>
                    <td>{{ item.DueDate }}</td>
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
                          <router-link class="dropdown-item" to="edit-invoice"
                            ><i class="fa-solid fa-pencil m-r-5"></i>
                            Edit</router-link
                          >
                          <router-link class="dropdown-item" to="invoice-view"
                            ><i class="fa-solid fa-eye m-r-5"></i>
                            View</router-link
                          >
                          <a class="dropdown-item" href="javascript:void(0);"
                            ><i class="fa-regular fa-file-pdf m-r-5"></i>
                            Download</a
                          >
                          <a class="dropdown-item" href="javascript:void(0);"
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
    </div>
    <!-- /Page Wrapper -->
  </div>
</template>

<script>
import Invoices from "@/assets/json/invoices.json";
export default {
  data() {
    return {
      title: "Invoices",
      path: "Dashboard",
      text: "Invoices",
      text1: "Create Invoice",
      Invoices: Invoices,
    };
  },
  name: "invoices",
};
</script>
