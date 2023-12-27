<template>
  <div class="tab-pane" id="results_users">
    <div class="table-responsive">
      <table class="table table-striped custom-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Created Date</th>
            <th>Role</th>
            <th class="text-end">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in User" :key="item.id">
            <td>
              <h2 class="table-avatar">
                <router-link to="profile" class="avatar"
                  ><img
                    :src="require(`@/assets/img/profiles/${item.Image}`)"
                    alt="User Image"
                /></router-link>
                <router-link to="profile"
                  >{{ item.Name }} <span>{{ item.Job }}</span></router-link
                >
              </h2>
            </td>
            <td>{{ item.Email }}</td>
            <td>{{ item.Company }}</td>
            <td>{{ item.CreatedDate }}</td>
            <td>
              <span :class="item.class">{{ item.Role }}</span>
            </td>
            <td class="text-end">
              <div class="dropdown dropdown-action">
                <a
                  href="javascript:;"
                  class="action-icon dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  ><i class="material-icons">{{ item.Action }}</i></a
                >
                <div class="dropdown-menu dropdown-menu-right">
                  <a class="dropdown-item" href="javascript:;"
                    ><i class="fa-solid fa-pencil m-r-5"></i> Edit</a
                  >
                  <a class="dropdown-item" href="javascript:;"
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
</template>
<script>
import User from "@/assets/json/users";
export default {
  data() {
    return {
      User,
    };
  },
};
</script>
