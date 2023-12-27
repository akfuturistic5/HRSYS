<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>
    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <!-- Page Header -->
        <leaves-admin-header
          :title="title"
          :path="path"
          :text="text"
          :text1="text1"
        />
        <!-- /Page Header -->
        <div class="row">
          <div class="col-md-12">
            <div class="table-responsive">
              <table class="table table-striped custom-table mb-0">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Category Name</th>
                    <th>Sub-Category Name</th>
                    <th class="text-end">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in Subcategory" :key="item.id">
                    <td>{{ item.no }}</td>
                    <td>{{ item.categoryname }}</td>
                    <td>{{ item.subcategoryname }}</td>
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
                          <a
                            class="dropdown-item"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_categories"
                            ><i class="fa-solid fa-pencil m-r-5"></i> Edit</a
                          >
                          <a
                            class="dropdown-item"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete"
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
      <subcategory-model />
    </div>
    <!-- /Page Wrapper -->
  </div>
</template>
<script>
import Subcategory from "@/assets/json/subcategory.json";
export default {
  data() {
    return {
      title: "Sub Categories",
      path: "Dashboard",
      text: "Accounts",
      text1: "Add Sub Categories",
      Subcategory: Subcategory,
    };
  },
  name: "sub-category",
};
</script>
