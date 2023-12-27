<template>
  <div class="tab-pane fade" id="emp_assets">
    <div class="showentries mb-3">
      <label
        >Show
        <select>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        entries
      </label>
    </div>
    <div class="table-responsive table-newdatatable">
      <a-table class="stripped table-hover" :columns="columns" :data-source="data">
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'Name'">
            <router-link to="assets-details" class="table-imgname">
              <img
                :src="require(`@/assets/img/${record.Image}`)"
                class="me-2"
                alt="Laptop Image"
              />
              <span>{{ record.Name }}</span>
            </router-link>
          </template>
          <template v-if="column.key === 'Assignee'">
            <div class="table-namesplit">
              <a href="javascript:void(0);" class="table-profileimage">
                <img
                  :src="require(`@/assets/img/profiles/${record.ImageProfile}`)"
                  class="me-2"
                  alt="User Image"
                />
              </a>
              <a href="javascript:void(0);" class="table-name">
                <span>{{ record.Assignee }}</span>
                <p>{{ record.Email }}</p>
              </a>
            </div>
          </template>
          <template v-if="column.key === 'action'">
            <div class="table-actions d-flex">
              <router-link class="delete-table me-2" to="user-asset-details">
                <img :src="require(`@/assets/img/icons/${record.Eye}`)" alt="Eye Icon" />
              </router-link>
            </div>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>
<script>
const columns = [
  {
    title: "#",
    dataIndex: "id",
    sorter: {
      compare: (a, b) => {
        a = a.id.toLowerCase();
        b = b.id.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Name",
    dataIndex: "Name",
    key: "Name",
    sorter: {
      compare: (a, b) => {
        a = a.Name.toLowerCase();
        b = b.Name.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Asset ID",
    dataIndex: "AssetID",
    sorter: {
      compare: (a, b) => {
        a = a.AssetID.toLowerCase();
        b = b.AssetID.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Assigned Date",
    dataIndex: "AssignedDate",
    sorter: {
      compare: (a, b) => {
        a = a.AssignedDate.toLowerCase();
        b = b.AssignedDate.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Assignee",
    dataIndex: "Assignee",
    key: "Assignee",
    sorter: {
      compare: (a, b) => {
        a = a.Assignee.toLowerCase();
        b = b.Assignee.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },

  {
    title: "Action",
    key: "action",
    sorter: true,
  },
];
const data = [
  {
    id: "1",
    Name: "Laptop",
    AssetID: "AST - 001",
    Image: "laptop.png",
    ImageProfile: "avatar-02.jpg",
    AssignedDate: "22 Nov, 2022 10:32AM",
    Assignee: "John Paul Raj",
    Email: "john@dreamstechnologies.com",
    Action: "",
    Eye: "eye.svg",
  },
  {
    id: "2",
    Name: "Laptop",
    AssetID: "AST - 002",
    Image: "laptop.png",
    ImageProfile: "avatar-05.jpg",
    AssignedDate: "22 Nov, 2022 10:32AM",
    Assignee: "Vinod Selvara",
    Email: " vinod.s@dreamstechnologies.com",
    Action: "",
    Eye: "eye.svg",
  },
  {
    id: "3",
    Name: "Dell Keyboard",
    AssetID: "AST - 003",
    Image: "keyboard.png",
    ImageProfile: "avatar-03.jpg",
    AssignedDate: "22 Nov, 2022 10:32AM",
    Assignee: "Harika       ",
    Email: "harika.v@dreamstechnologies.com",
    Action: "",
    Eye: "eye.svg",
  },
  {
    id: "4",
    Name: "Logitech Mouse",
    AssetID: "AST - 0024",
    Image: "mouse.png",
    ImageProfile: "avatar-02.jpg",
    AssignedDate: "22 Nov, 2022 10:32AM",
    Assignee: "Mythili      ",
    Email: "mythili@dreamstechnologies.com",
    Action: "",
    Eye: "eye.svg",
  },
  {
    id: "5",
    Name: "Laptop",
    AssetID: "AST - 005",
    Image: "laptop.png",
    ImageProfile: "avatar-02.jpg",
    AssignedDate: "22 Nov, 2022 10:32AM",
    Assignee: "John Paul Raj",
    Email: "john@dreamstechnologies.com",
    Action: "",
    Eye: "eye.svg",
  },
  {
    id: "6",
    Name: "Laptop",
    AssetID: "AST - 006",
    Image: "laptop.png",
    ImageProfile: "avatar-05.jpg",
    AssignedDate: "22 Nov, 2022 10:32AM",
    Assignee: "Vinod Selvara",
    Email: " vinod.s@dreamstechnologies.com",
    Action: "",
    Eye: "eye.svg",
  },
];
export default {
  data() {
    return {
      columns,
      data,
    };
  },
};
</script>
