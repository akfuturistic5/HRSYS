<template>
  <section class="review-section information">
    <div class="review-header text-center">
      <h3 class="review-title">Employee Basic Information</h3>
      <p class="text-muted">Lorem ipsum dollar</p>
    </div>
    <div class="row">
      <div class="col-md-12 col-sm-12">
        <div class="table-responsive">
          <table class="table table-bordered table-nowrap review-table mb-0">
            <tbody>
              <tr>
                <td>
                  <form>
                    <div class="input-block mb-3">
                      <label for="name">Name</label>
                      <input type="text" class="form-control" id="name" />
                    </div>
                    <div class="input-block mb-3">
                      <label for="depart3">Department</label>
                      <input type="text" class="form-control" id="depart3" />
                    </div>
                    <div class="input-block mb-3">
                      <label for="departa">Designation</label>
                      <input type="text" class="form-control" id="departa" />
                    </div>
                    <div class="input-block mb-3">
                      <label for="qualif">Qualification: </label>
                      <input type="text" class="form-control" id="qualif" />
                    </div>
                  </form>
                </td>
                <td>
                  <form>
                    <div class="input-block mb-3">
                      <label for="doj">Emp ID</label>
                      <input type="text" class="form-control" value="DGT-009" />
                    </div>
                    <div class="input-block mb-3">
                      <label for="doj">Date of Join</label>
                      <input type="text" class="form-control" id="doj" />
                    </div>
                    <div class="input-block mb-3">
                      <label for="doc">Date of Confirmation</label>
                      <input type="text" class="form-control" id="doc" />
                    </div>
                    <div class="input-block mb-3">
                      <label for="qualif1">Previous years of Exp</label>
                      <input type="text" class="form-control" id="qualif1" />
                    </div>
                  </form>
                </td>
                <td>
                  <form>
                    <div class="input-block mb-3">
                      <label for="name1"> RO's Name</label>
                      <input type="text" class="form-control" id="name1" />
                    </div>
                    <div class="input-block mb-3">
                      <label for="depart1"> RO Designation: </label>
                      <input type="text" class="form-control" id="depart1" />
                    </div>
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

  <section class="review-section professional-excellence">
    <div class="review-header text-center">
      <h3 class="review-title">Professional Excellence</h3>
      <p class="text-muted">Lorem ipsum dollar</p>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="table-responsive">
          <table class="table table-bordered review-table mb-0">
            <thead>
              <tr>
                <th class="width-pixel">#</th>
                <th>Key Result Area</th>
                <th>Key Performance Indicators</th>
                <th>Weightage</th>
                <th>Percentage achieved <br />( Self Score )</th>
                <th>Points Scored <br />( Self )</th>
                <th>Percentage achieved <br />( RO's Score )</th>
                <th>Points Scored <br />( RO )</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="2">1</td>
                <td rowspan="2">Production</td>
                <td>Quality</td>
                <td>
                  <input type="text" class="form-control" readonly value="30" />
                </td>
                <td><input type="text" class="form-control" /></td>
                <td>
                  <input type="text" class="form-control" readonly value="0" />
                </td>
                <td><input type="text" class="form-control" /></td>
                <td>
                  <input type="text" class="form-control" readonly value="0" />
                </td>
              </tr>
              <tr>
                <td>TAT (turn around time)</td>
                <td>
                  <input type="text" class="form-control" readonly value="30" />
                </td>
                <td><input type="text" class="form-control" /></td>
                <td>
                  <input type="text" class="form-control" readonly value="0" />
                </td>
                <td><input type="text" class="form-control" /></td>
                <td>
                  <input type="text" class="form-control" readonly value="0" />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Process Improvement</td>
                <td>PMS,New Ideas</td>
                <td>
                  <input type="text" class="form-control" readonly value="10" />
                </td>
                <td><input type="text" class="form-control" /></td>
                <td>
                  <input type="text" class="form-control" readonly value="0" />
                </td>
                <td><input type="text" class="form-control" /></td>
                <td>
                  <input type="text" class="form-control" readonly value="0" />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Team Management</td>
                <td>Team Productivity,dynaics,attendance,attrition</td>
                <td>
                  <input type="text" class="form-control" readonly value="5" />
                </td>
                <td><input type="text" class="form-control" /></td>
                <td>
                  <input type="text" class="form-control" readonly value="0" />
                </td>
                <td><input type="text" class="form-control" /></td>
                <td>
                  <input type="text" class="form-control" readonly value="0" />
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Knowledge Sharing</td>
                <td>Sharing the knowledge for team productivity</td>
                <td>
                  <input type="text" class="form-control" readonly value="5" />
                </td>
                <td><input type="text" class="form-control" /></td>
                <td>
                  <input type="text" class="form-control" readonly value="0" />
                </td>
                <td><input type="text" class="form-control" /></td>
                <td>
                  <input type="text" class="form-control" readonly value="0" />
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Reporting and Communication</td>
                <td>Emails/Calls/Reports and Other Communication</td>
                <td>
                  <input type="text" class="form-control" readonly value="5" />
                </td>
                <td><input type="text" class="form-control" /></td>
                <td>
                  <input type="text" class="form-control" readonly value="0" />
                </td>
                <td><input type="text" class="form-control" /></td>
                <td>
                  <input type="text" class="form-control" readonly value="0" />
                </td>
              </tr>
              <tr>
                <td colspan="3" class="text-center">Total</td>
                <td>
                  <input type="text" class="form-control" readonly value="85" />
                </td>
                <td>
                  <input type="text" class="form-control" readonly value="0" />
                </td>
                <td>
                  <input type="text" class="form-control" readonly value="0" />
                </td>
                <td>
                  <input type="text" class="form-control" readonly value="0" />
                </td>
                <td>
                  <input type="text" class="form-control" readonly value="0" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>
