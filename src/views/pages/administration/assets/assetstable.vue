<template>
  <div class="row">
    <div class="col-md-12">
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
      <div class="table-responsive">
        <a-table class="stripped table-hover" :columns="columns" :data-source="data">
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'Status'">
              <div class="text-center">
                <div class="dropdown action-label">
                  <a
                    class="btn btn-white btn-sm btn-rounded dropdown-toggle"
                    href="javascript:;"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i :class="record.class"></i>
                    {{ record.Status }}
                  </a>
                  <div class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="javascript:;"
                      ><i class="fa-regular fa-circle-dot text-danger"></i> Pending</a
                    >
                    <a class="dropdown-item" href="javascript:;"
                      ><i class="fa-regular fa-circle-dot text-success"></i> Approved</a
                    >
                    <a class="dropdown-item" href="javascript:;"
                      ><i class="fa-regular fa-circle-dot text-info"></i> Returned</a
                    >
                  </div>
                </div>
              </div>
            </template>
            <template v-if="column.key === 'action'">
              <div class="text-end">
                <div class="dropdown dropdown-action">
                  <a
                    href="javascript:;"
                    class="action-icon dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    ><i class="material-icons">{{ record.action }}</i></a
                  >
                  <div class="dropdown-menu dropdown-menu-right">
                    <a
                      class="dropdown-item"
                      href="javascript:;"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_asset"
                      ><i class="fa-solid fa-pencil m-r-5"></i> Edit</a
                    >
                    <a
                      class="dropdown-item"
                      href="javascript:;"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_asset"
                      ><i class="fa-regular fa-trash-can m-r-5"></i> Delete</a
                    >
                  </div>
                </div>
              </div>
            </template>
          </template>
        </a-table>
      </div>
    </div>
  </div>
</template>
<script>
const columns = [
  {
    title: "Asset User",
    dataIndex: "AssetUser",
    sorter: {
      compare: (a, b) => {
        a = a.AssetUser.toLowerCase();
        b = b.AssetUser.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Asset Name",
    dataIndex: "AssetName",
    sorter: {
      compare: (a, b) => {
        a = a.AssetName.toLowerCase();
        b = b.AssetName.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Asset ID",
    dataIndex: "AssetId",
    sorter: {
      compare: (a, b) => {
        a = a.AssetId.toLowerCase();
        b = b.AssetId.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Purchase Date",
    dataIndex: "PurchaseDate",
    sorter: {
      compare: (a, b) => {
        a = a.PurchaseDate.toLowerCase();
        b = b.PurchaseDate.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Warrenty",
    dataIndex: "Warrenty",
    sorter: {
      compare: (a, b) => {
        a = a.Warrenty.toLowerCase();
        b = b.Warrenty.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Warrenty End",
    dataIndex: "WarrentyEnd",
    sorter: {
      compare: (a, b) => {
        a = a.WarrentyEnd.toLowerCase();
        b = b.WarrentyEnd.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Amount",
    dataIndex: "Amount",
    sorter: {
      compare: (a, b) => {
        a = a.Amount.toLowerCase();
        b = b.Amount.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "Status",
    class: "text-center",
    sorter: {
      compare: (a, b) => {
        a = a.Status.toLowerCase();
        b = b.Status.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },

  {
    title: "Action",
    key: "action",
    sorter: true,
    class: "text-end",
  },
];
const data = [
  {
    AssetUser: "Richard Miles",
    AssetName: "Dell Laptop",
    AssetId: "#AST-0001",
    PurchaseDate: "5 Jan 2023",
    Warrenty: "12 Months",
    WarrentyEnd: "5 Jan 2023",
    Amount: "$1215",
    Status: "Pending",
    action: "more_vert",
    class: "fa-regular fa-circle-dot text-danger",
  },
  {
    AssetUser: "John Doe",
    AssetName: "Seagate Harddisk",
    AssetId: "#AST-0002",
    PurchaseDate: "14 Jan 2023",
    Warrenty: "12 Months",
    WarrentyEnd: "14 Jan 2023",
    Amount: "$300",
    Status: "Approved",
    action: "more_vert",
    class: "fa-regular fa-circle-dot text-success",
  },
  {
    AssetUser: "John Smith",
    AssetName: "Canon Portable Printer",
    AssetId: "#AST-0003",
    PurchaseDate: "14 Jan 2023",
    Warrenty: "12 Months",
    WarrentyEnd: "14 Jan 2023",
    Amount: "$2500",
    Status: "Returned",
    action: "more_vert",
    class: "fa-regular fa-circle-dot text-info",
  },
  {
    AssetUser: "Mike Litorus",
    AssetName: "Dell Laptop",
    AssetId: "#AST-0004",
    PurchaseDate: "5 Jan 2023",
    Warrenty: "12 Months",
    WarrentyEnd: "5 Jan 2023",
    Amount: "$1215",
    Status: "Pending",
    action: "more_vert",
    class: "fa-regular fa-circle-dot text-danger",
  },
  {
    AssetUser: "Wilmer Deluna",
    AssetName: "Seagate Harddisk",
    AssetId: "#AST-0005",
    PurchaseDate: "14 Jan 2023",
    Warrenty: "12 Months",
    WarrentyEnd: "14 Jan 2023",
    Amount: "$300",
    Status: "Approved",
    action: "more_vert",
    class: "fa-regular fa-circle-dot text-success",
  },
  {
    AssetUser: "Jeffrey Warden",
    AssetName: "Canon Portable Printer",
    AssetId: "#AST-0006",
    PurchaseDate: "14 Jan 2023",
    Warrenty: "12 Months",
    WarrentyEnd: "14 Jan 2023",
    Amount: "$2500",
    Status: "Returned",
    action: "more_vert",
    class: "fa-regular fa-circle-dot text-info",
  },
  {
    AssetUser: "Bernardo Galaviz",
    AssetName: "Dell Laptop",
    AssetId: "#AST-0007",
    PurchaseDate: "5 Jan 2023",
    Warrenty: "12 Months",
    WarrentyEnd: "5 Jan 2023",
    Amount: "$1215",
    Status: "Pending",
    action: "more_vert",
    class: "fa-regular fa-circle-dot text-danger",
  },
  {
    AssetUser: "Lesley Grauer",
    AssetName: "Seagate Harddisk",
    AssetId: "#AST-0008",
    PurchaseDate: "14 Jan 2023",
    Warrenty: "12 Months",
    WarrentyEnd: "14 Jan 2023",
    Amount: "$300",
    Status: "Approved",
    action: "more_vert",
    class: "fa-regular fa-circle-dot text-success",
  },
  {
    AssetUser: "Jeffery Lalor",
    AssetName: "Canon Portable Printer",
    AssetId: "#AST-0009",
    PurchaseDate: "14 Jan 2023",
    Warrenty: "12 Months",
    WarrentyEnd: "14 Jan 2023",
    Amount: "$2500",
    Status: "Returned",
    action: "more_vert",
    class: "fa-regular fa-circle-dot text-info",
  },
  {
    AssetUser: "Loren Gatlin",
    AssetName: "Dell Laptop",
    AssetId: "#AST-0010",
    PurchaseDate: "5 Jan 2023",
    Warrenty: "12 Months",
    WarrentyEnd: "5 Jan 2023",
    Amount: "$1215",
    Status: "Pending",
    action: "more_vert",
    class: "fa-regular fa-circle-dot text-danger",
  },
  {
    AssetUser: "Tarah Shropshire",
    AssetName: "Seagate Harddisk",
    AssetId: "#AST-0011",
    PurchaseDate: "14 Jan 2023",
    Warrenty: "12 Months",
    WarrentyEnd: "14 Jan 2023",
    Amount: "$300",
    Status: "Approved",
    action: "more_vert",
    class: "fa-regular fa-circle-dot text-success",
  },
  {
    AssetUser: "Catherine Manseau",
    AssetName: "Canon Portable Printer",
    AssetId: "#AST-0012",
    PurchaseDate: "14 Jan 2023",
    Warrenty: "12 Months",
    WarrentyEnd: "14 Jan 2023",
    Amount: "$2500",
    Status: "Returned",
    action: "more_vert",
    class: "fa-regular fa-circle-dot text-info",
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
