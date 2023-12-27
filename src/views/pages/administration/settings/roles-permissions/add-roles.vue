<template>
  <div class="roles-menu">
    <ul>
      <li :class="item.class" v-for="item in Addrole" :key="item.id">
        <a href="javascript:void(0);"
          >{{ item.Role }}
          <span class="role-action">
            <span
              class="action-circle large"
              data-bs-toggle="modal"
              data-bs-target="#edit_role"
            >
              <i class="material-icons">edit</i>
            </span>
            <span
              class="action-circle large delete-btn ms-1"
              data-bs-toggle="modal"
              data-bs-target="#delete_role"
            >
              <i class="material-icons">delete</i>
            </span>
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import Addrole from "@/assets/json/settings/roles-permissions/add-roles.json";
export default {
  data() {
    return {
      Addrole: Addrole,
    };
  },
};
</script>
