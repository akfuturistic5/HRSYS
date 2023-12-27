<template>
  <table class="table table-striped custom-table">
    <thead>
      <tr>
        <th>Module Permission</th>
        <th class="text-center">Read</th>
        <th class="text-center">Write</th>
        <th class="text-center">Create</th>
        <th class="text-center">Delete</th>
        <th class="text-center">Import</th>
        <th class="text-center">Export</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="moduletable in Moduletable" :key="moduletable.id">
        <td>{{ moduletable.ModulePermission }}</td>
        <td class="text-center">
          <label class="custom_check">
            <input type="checkbox" checked />
            <span class="checkmark"></span>
          </label>
        </td>
        <td class="text-center">
          <label class="custom_check">
            <input type="checkbox" checked />
            <span class="checkmark"></span>
          </label>
        </td>
        <td class="text-center">
          <label class="custom_check">
            <input type="checkbox" checked />
            <span class="checkmark"></span>
          </label>
        </td>
        <td class="text-center">
          <label class="custom_check">
            <input type="checkbox" checked />
            <span class="checkmark"></span>
          </label>
        </td>
        <td class="text-center">
          <label class="custom_check">
            <input type="checkbox" checked />
            <span class="checkmark"></span>
          </label>
        </td>
        <td class="text-center">
          <label class="custom_check">
            <input type="checkbox" checked />
            <span class="checkmark"></span>
          </label>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import Moduletable from "@/assets/json/settings/roles-permissions/moduletable.json";
export default {
  data() {
    return {
      Moduletable: Moduletable,
    };
  },
};
</script>
