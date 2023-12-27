<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <!-- Page Header -->
        <inbox-header :title="title" :path="path" :text="text" :text1="text1" />
        <!-- /Page Header -->

        <div class="row">
          <div class="col-md-12">
            <div class="table-responsive">
              <table class="table table-striped custom-table mb-0">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Holiday Date</th>
                    <th>Day</th>
                    <th class="text-end">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="holiday-upcoming" v-for="item in Holidays" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.Title }}</td>
                    <td>{{ item.HolidayDate }}</td>
                    <td>{{ item.Day }}</td>
                    <td class="text-end">
                      <div class="dropdown dropdown-action">
                        <a
                          href="javascript:;"
                          class="action-icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          ><i class="material-icons">more_vert</i></a
                        >
                        <div class="dropdown-menu dropdown-menu-right">
                          <a
                            class="dropdown-item"
                            href="javascript:;"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_holiday"
                            ><i class="fa-solid fa-pencil m-r-5"></i> Edit</a
                          >
                          <a
                            class="dropdown-item"
                            href="javascript:;"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_holiday"
                            ><i class="fa-regular fa-trash-can m-r-5"></i> Delete</a
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

      <holiday-model></holiday-model>
    </div>
    <!-- /Page Wrapper -->
  </div>
</template>

<script>
import Holidays from "@/assets/json/holidays.json";
import inboxHeader from "@/components/breadcrumb/inbox-header.vue";
export default {
  components: { inboxHeader },
  data() {
    return {
      Holidays: Holidays,
      title: "Holidays 2023",
      path: "Dashboard",
      text: "Holidays",
      text1: "Add Holiday",
    };
  },
};
</script>
