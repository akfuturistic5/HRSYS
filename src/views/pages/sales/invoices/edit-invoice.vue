<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>
    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content">
        <!-- Page Header -->
        <breadcrumb :title="title" :path="path" :text="text" />
        <!-- /Page Header -->
        <div class="row">
          <div class="col-sm-12">
            <form>
              <div class="row">
                <div class="col-sm-6 col-md-3">
                  <div class="input-block mb-3">
                    <label class="col-form-label"
                      >Client <span class="text-danger">*</span></label
                    >
                    <vue-select
                      :options="SelectInvoiceClient"
                      id="edit-client"
                      placeholder="Barry Cuda"
                    />
                  </div>
                </div>
                <div class="col-sm-6 col-md-3">
                  <div class="input-block mb-3">
                    <label class="col-form-label"
                      >Project <span class="text-danger">*</span></label
                    >
                    <vue-select
                      :options="SelectInvoiceProject"
                      id="edit-project"
                      placeholder="Office Management"
                    />
                  </div>
                </div>

                <div class="col-sm-6 col-md-3">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Email</label>
                    <input
                      class="form-control"
                      type="email"
                      value="barrycuda@example.com"
                    />
                  </div>
                </div>
                <div class="col-sm-6 col-md-3">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Tax</label>
                    <vue-select
                      :options="SelectInvoiceTax"
                      id="edit-tax"
                      placeholder="GST"
                    />
                  </div>
                </div>
                <div class="col-sm-6 col-md-3">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Client Address</label>
                    <textarea class="form-control" rows="3">
5754 Airport Rd, Coosada, AL, 36020</textarea
                    >
                  </div>
                </div>
                <div class="col-sm-6 col-md-3">
                  <div class="input-block mb-3">
                    <label class="col-form-label">Billing Address</label>
                    <textarea class="form-control" rows="3">
5754 Airport Rd, Coosada, AL, 36020</textarea
                    >
                  </div>
                </div>
                <div class="col-sm-6 col-md-3">
                  <div class="input-block mb-3">
                    <label class="col-form-label"
                      >Invoice date <span class="text-danger">*</span></label
                    >
                    <div class="cal-icon">
                      <datepicker
                        v-model="startdate"
                        class="form-control floating datetimepicker"
                        :editable="true"
                        :clearable="false"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-md-3">
                  <div class="input-block mb-3">
                    <label class="col-form-label"
                      >Due Date <span class="text-danger">*</span></label
                    >
                    <div class="cal-icon">
                      <datepicker
                        v-model="startdateone"
                        class="form-control floating datetimepicker"
                        :editable="true"
                        :clearable="false"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 col-sm-12">
                  <div class="table-responsive">
                    <table class="table table-hover table-white" id="addTable">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th class="col-sm-2">Item</th>
                          <th class="col-md-6">Description</th>
                          <th>Unit Cost</th>
                          <th>Qty</th>
                          <th>Amount</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody class="tbodyone">
                        <tr>
                          <td>1</td>
                          <td>
                            <input
                              class="form-control"
                              type="text"
                              value="Vehicle Module"
                            />
                          </td>
                          <td>
                            <input
                              class="form-control"
                              type="text"
                              value="Create, edit delete functionlity"
                            />
                          </td>
                          <td>
                            <input class="form-control" type="text" value="112" />
                          </td>
                          <td>
                            <input class="form-control" type="text" value="1" />
                          </td>
                          <td>
                            <input
                              class="form-control"
                              readonly
                              type="text"
                              value="112"
                            />
                          </td>
                          <td>
                            <a
                              href="javascript:void(0)"
                              class="text-success font-18"
                              @click="addRow(index)"
                              id="addProduct"
                              title="Add"
                              ><i class="fa-solid fa-plus"></i
                            ></a>
                          </td>
                        </tr>
                        <tr v-for="(row, index) in rows" :key="index">
                          <td>{{ index + 2 }}</td>
                          <td>
                            <input class="form-control" type="text" v-model="row.item" />
                          </td>
                          <td>
                            <input
                              class="form-control"
                              type="text"
                              v-model="row.description"
                            />
                          </td>
                          <td>
                            <input
                              class="form-control"
                              type="text"
                              v-model="row.unitCost"
                            />
                          </td>
                          <td>
                            <input class="form-control" type="text" v-model="row.qty" />
                          </td>
                          <td>
                            <input
                              class="form-control"
                              readonly
                              type="text"
                              :value="calculateAmount(row)"
                            />
                          </td>
                          <td>
                            <a
                              href="javascript:void(0)"
                              class="text-danger font-18 remove"
                              title="Remove"
                              @click="removeRow(index)"
                              ><i class="fa-regular fa-trash-can"></i
                            ></a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="table-responsive">
                    <table class="table table-hover table-white">
                      <tbody>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td class="text-end">Total</td>
                          <td class="text-end">112</td>
                        </tr>
                        <tr>
                          <td colspan="5" class="text-end">Tax</td>
                          <td class="text-end">
                            <input
                              class="form-control text-end"
                              value="0"
                              readonly
                              type="text"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td colspan="5" class="text-end">Discount %</td>
                          <td class="text-end">
                            <input class="form-control text-end" value="0" type="text" />
                          </td>
                        </tr>
                        <tr>
                          <td colspan="5" class="text-end">
                            <b>Grand Total</b>
                          </td>
                          <td class="text-end tdata-width">
                            <b>$ 112</b>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="input-block mb-3">
                        <label class="col-form-label">Other Information</label>
                        <textarea class="form-control" rows="4"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="submit-section">
                <button class="btn btn-primary submit-btn ms-1">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- /Page Content -->
    </div>
    <!-- /Page Wrapper -->
  </div>
</template>

<script>
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
export default {
  data() {
    return {
      select2: null,
      title: "Edit Invoice",
      path: "Dashboard",
      text: "Edit Invoice",
      startdate: currentDate,
      startdateone: currentDate,
      SelectInvoiceClient: ["Please Select", "Barry Cuda", "Tressa Wexler"],
      SelectInvoiceProject: ["Select Project", "Office Management", "Project Management"],
      SelectInvoiceTax: ["Select Tax", "VAT", "GST", "No Tax"],
      startdate: currentDate,
      startdateone: currentDateOne,
      rows: [
        {
          item: "",
          description: "",
          unitCost: "",
          qty: "",
        },
      ],
    };
  },
  methods: {
    calculateAmount(row) {
      // Add your logic to calculate the amount
    },
    addRow(index) {
      this.rows.splice(index + 1, 0, {
        item: "",
        description: "",
        unitCost: "",
        qty: "",
      });
    },
    removeRow(index) {
      if (this.rows.length > 0) {
        this.rows.splice(index, 1);
      }
    },
  },
  name: "edit-invoice",
};
</script>
