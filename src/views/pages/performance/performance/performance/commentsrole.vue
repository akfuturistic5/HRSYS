<template>
  <section class="review-section">
    <div class="review-header text-center">
      <h3 class="review-title">Comments on the role</h3>
      <p class="text-muted">
        alterations if any requirred like addition/deletion of responsibilities
      </p>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="table-responsive">
          <table
            class="table table-bordered table-review review-table mb-0"
            id="table_alterations"
          >
            <thead>
              <tr>
                <th class="width-pixel">#</th>
                <th>By Self</th>
                <th>RO's Comment</th>
                <th>HOD's Comment</th>
                <th class="width-64">
                  <button class="btn btn-primary btn-add-row" @click="addRow(index)">
                    <i class="fa-solid fa-plus"></i>
                  </button>
                </th>
              </tr>
            </thead>
            <tbody id="table_alterations_tbody">
              <tr>
                <td>1</td>
                <td><input type="text" class="form-control" /></td>
                <td><input type="text" class="form-control" /></td>
                <td><input type="text" class="form-control" /></td>
                <td></td>
              </tr>
              <tr>
                <td>2</td>
                <td><input type="text" class="form-control" /></td>
                <td><input type="text" class="form-control" /></td>
                <td><input type="text" class="form-control" /></td>
                <td></td>
              </tr>
              <tr>
                <td>3</td>
                <td><input type="text" class="form-control" /></td>
                <td><input type="text" class="form-control" /></td>
                <td><input type="text" class="form-control" /></td>
                <td></td>
              </tr>
              <tr>
                <td>4</td>
                <td><input type="text" class="form-control" /></td>
                <td><input type="text" class="form-control" /></td>
                <td><input type="text" class="form-control" /></td>
                <td></td>
              </tr>
              <tr>
                <td>5</td>
                <td><input type="text" class="form-control" /></td>
                <td><input type="text" class="form-control" /></td>
                <td><input type="text" class="form-control" /></td>
                <td></td>
              </tr>
              <tr v-for="(row, index) in rows" :key="index">
                <td>{{ index + 6 }}</td>
                <td><input type="text" v-model="row.column1" class="form-control" /></td>
                <td>
                  <input type="text" v-model="row.column2" class="form-control" />
                </td>
                <td>
                  <input type="text" v-model="row.column3" class="form-control" />
                </td>
                <td>
                  <button type="button" class="btn btn-danger" @click="removeRow(index)">
                    <i class="fa-regular fa-trash-can"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

  <section class="review-section">
    <div class="review-header text-center">
      <h3 class="review-title">Comments on the role</h3>
      <p class="text-muted">
        alterations if any requirred like addition/deletion of responsibilities
      </p>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="table-responsive">
          <table class="table table-bordered review-table mb-0">
            <thead>
              <tr>
                <th class="width-pixel">#</th>
                <th>Strengths</th>
                <th>Area's for Improvement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><input type="text" class="form-control" /></td>
                <td><input type="text" class="form-control" /></td>
              </tr>
              <tr>
                <td>2</td>
                <td><input type="text" class="form-control" /></td>
                <td><input type="text" class="form-control" /></td>
              </tr>
              <tr>
                <td>3</td>
                <td><input type="text" class="form-control" /></td>
                <td><input type="text" class="form-control" /></td>
              </tr>
              <tr>
                <td>4</td>
                <td><input type="text" class="form-control" /></td>
                <td><input type="text" class="form-control" /></td>
              </tr>
              <tr>
                <td>5</td>
                <td><input type="text" class="form-control" /></td>
                <td><input type="text" class="form-control" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      tableId: "myTable",
      rows: [],
    };
  },
  methods: {
    addRow(index) {
      this.rows.splice(index + 1, 0, {
        column1: "",
        column2: "",
        column3: "",
      });
    },
    removeRow(index) {
      if (this.rows.length > 0) {
        this.rows.splice(index, 1);
      }
    },
  },
};
</script>
