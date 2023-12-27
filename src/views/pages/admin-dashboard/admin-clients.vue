<template>
  <div class="table-responsive">
    <table class="table custom-table mb-0">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Status</th>
          <th class="text-end">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in AdminClients" :key="item.id">
          <td>
            <h2 class="table-avatar">
              <a href="javascript:;" class="avatar"
                ><img
                  :src="require(`@/assets/img/profiles/${item.Image}`)"
                  alt="User Image"
              /></a>
              <router-link to="client-profile"
                >{{ item.Name }} <span>{{ item.Role }}</span></router-link
              >
            </h2>
          </td>
          <td>{{ item.Email }}</td>
          <td>
            <div class="dropdown action-label">
              <a
                class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                href="javascript:;"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i :class="item.Class"></i> {{ item.Status }}
              </a>
              <div class="dropdown-menu dropdown-menu-right">
                <a class="dropdown-item" href="javascript:;"
                  ><i class="fa-regular fa-circle-dot text-success"></i> Active</a
                >
                <a class="dropdown-item" href="javascript:;"
                  ><i class="fa-regular fa-circle-dot text-danger"></i> Inactive</a
                >
              </div>
            </div>
          </td>
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
                <a class="dropdown-item" href="javascript:void(0)"
                  ><i class="fa-solid fa-pencil m-r-5"></i> Edit</a
                >
                <a class="dropdown-item" href="javascript:void(0)"
                  ><i class="fa-regular fa-trash-can m-r-5"></i> Delete</a
                >
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminClients from "@/assets/json/admin-clients.json";
export default {
  data() {
    return {
      AdminClients: AdminClients,
    };
  },
};
</script>
