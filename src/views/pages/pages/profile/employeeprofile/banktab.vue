<template>
  <!-- Bank Statutory Tab -->
  <div class="tab-pane fade" id="bank_statutory">
    <div class="card">
      <div class="card-body">
        <h3 class="card-title">Basic Salary Information</h3>
        <form>
          <div class="row">
            <div class="col-sm-4">
              <div class="input-block mb-3">
                <label class="col-form-label"
                  >Salary basis <span class="text-danger">*</span></label
                >
                <vue-select :options="Banksalary" placeholder="Select" id="banksalary" />
              </div>
            </div>
            <div class="col-sm-4">
              <div class="input-block mb-3">
                <label class="col-form-label"
                  >Salary amount <small class="text-muted">per month</small></label
                >
                <div class="input-group">
                  <span class="input-group-text">$</span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Type your salary amount"
                    value="0.00"
                  />
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="input-block mb-3">
                <label class="col-form-label">Payment type</label>
                <vue-select
                  :options="Bankpayment"
                  placeholder="Select"
                  id="bankpayment"
                />
              </div>
            </div>
          </div>
          <hr />
          <h3 class="card-title">PF Information</h3>
          <div class="row">
            <div class="col-sm-4">
              <div class="input-block mb-3">
                <label class="col-form-label">PF contribution</label>
                <vue-select :options="Bankpf" placeholder="Select" id="bankpf" />
              </div>
            </div>
            <div class="col-sm-4">
              <div class="input-block mb-3">
                <label class="col-form-label"
                  >PF No. <span class="text-danger">*</span></label
                >
                <vue-select :options="Bankpfno" placeholder="Select" id="bankpfno" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4">
              <div class="input-block mb-3">
                <label class="col-form-label">Employee PF rate</label>
                <vue-select :options="Bankpfrate" placeholder="Select" id="bankpfrate" />
              </div>
            </div>
            <div class="col-sm-4">
              <div class="input-block mb-3">
                <label class="col-form-label"
                  >Additional rate <span class="text-danger">*</span></label
                >
                <vue-select :options="Bankrate" placeholder="Select" id="bankrate" />
              </div>
            </div>
            <div class="col-sm-4">
              <div class="input-block mb-3">
                <label class="col-form-label">Total rate</label>
                <input type="text" class="form-control" placeholder="N/A" value="11%" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4">
              <div class="input-block mb-3">
                <label class="col-form-label">Employee PF rate</label>
                <vue-select
                  :options="Employeepfrate"
                  placeholder="Select"
                  id="employeepfrate"
                />
              </div>
            </div>
            <div class="col-sm-4">
              <div class="input-block mb-3">
                <label class="col-form-label"
                  >Additional rate <span class="text-danger">*</span></label
                >
                <vue-select
                  :options="Employeerate"
                  placeholder="Select"
                  id="employeerate"
                />
              </div>
            </div>
            <div class="col-sm-4">
              <div class="input-block mb-3">
                <label class="col-form-label">Total rate</label>
                <input type="text" class="form-control" placeholder="N/A" value="11%" />
              </div>
            </div>
          </div>

          <hr />
          <h3 class="card-title">ESI Information</h3>
          <div class="row">
            <div class="col-sm-4">
              <div class="input-block mb-3">
                <label class="col-form-label">ESI contribution</label>

                <vue-select
                  :options="EmployeeEsi"
                  placeholder="Select"
                  id="employeeEsi"
                />
              </div>
            </div>
            <div class="col-sm-4">
              <div class="input-block mb-3">
                <label class="col-form-label"
                  >ESI No. <span class="text-danger">*</span></label
                >
                <vue-select
                  :options="EmployeeEsino"
                  placeholder="Select"
                  id="employeeEsino"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4">
              <div class="input-block mb-3">
                <label class="col-form-label">Employee ESI rate</label>
                <vue-select
                  :options="EmployeeEsirate"
                  placeholder="Select"
                  id="employeeEsirate"
                />
              </div>
            </div>
            <div class="col-sm-4">
              <div class="input-block mb-3">
                <label class="col-form-label"
                  >Additional rate <span class="text-danger">*</span></label
                >
                <vue-select
                  :options="Employeeadditionalrate"
                  placeholder="Select"
                  id="employeeadditionalrate"
                />
              </div>
            </div>
            <div class="col-sm-4">
              <div class="input-block mb-3">
                <label class="col-form-label">Total rate</label>
                <input type="text" class="form-control" placeholder="N/A" value="11%" />
              </div>
            </div>
          </div>

          <div class="submit-section">
            <button class="btn btn-primary submit-btn" type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Bank Statutory Tab -->
</template>
<script>
export default {
  data() {
    return {
      select2: null,
      SelectBanksalary: "Select salary basis type",
      SelectBankpayment: "Select payment type",
      SelectBankpf: "Select PF contribution",
      SelectBankpfno: "Select PF contribution",
      SelectBankpfrate: "Select PF contribution",
      SelectBankrate: "Select additional rate",
      SelectEmployeepfrate: "Select PF contribution",
      SelectEmployeerate: "Select additional rate",
      SelectEmployeeEsi: "Select ESI contribution",
      SelectEmployeeEsino: "Select ESI contribution",
      SelectEmployeeEsirate: "Select ESI contribution",
      SelectEmployeeadditionalrate: "Select additional rate",
      Banksalary: ["Select salary basis type", "Hourly", "Daily", "Weekly", "Monthly"],
      Bankpayment: ["Select payment type", "Bank transfer", "Check", "Cash"],
      Bankpf: ["Select PF contribution", "Yes", "No"],
      Bankpfno: ["Select PF contribution", "Yes", "No"],
      Bankpfrate: ["Select PF contribution", "Yes", "No"],
      Bankrate: [
        "Select additional rate",
        "0%",
        "1%",
        "2%",
        "3%",
        "4%",
        "5%",
        "6%",
        "7%",
        "8%",
        "9%",
        "10%",
      ],
      Employeepfrate: ["Select PF contribution", "Yes", "No"],
      Employeerate: [
        "Select additional rate",
        "0%",
        "1%",
        "2%",
        "3%",
        "4%",
        "5%",
        "6%",
        "7%",
        "8%",
        "9%",
        "10%",
      ],
      EmployeeEsi: ["Select ESI contribution", "Yes", "No"],
      EmployeeEsino: ["Select ESI contribution", "Yes", "No"],
      EmployeeEsirate: ["Select ESI contribution", "Yes", "No"],
      Employeeadditionalrate: [
        "Select additional rate",
        "0%",
        "1%",
        "2%",
        "3%",
        "4%",
        "5%",
        "6%",
        "7%",
        "8%",
        "9%",
        "10%",
      ],
    };
  },
  name: "profilemodal",
};
</script>
