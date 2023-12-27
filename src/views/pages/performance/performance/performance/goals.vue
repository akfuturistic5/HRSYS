<template>
  <section class="review-section">
    <div class="review-header text-center">
      <h3 class="review-title">Personal Goals</h3>
      <p class="text-muted">Lorem ipsum dollar</p>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="table-responsive">
          <table class="table table-bordered review-table mb-0">
            <thead>
              <tr>
                <th class="width-pixel">#</th>
                <th>Goal Achieved during last year</th>
                <th>Goal set for current year</th>
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

  <section class="review-section">
    <div class="review-header text-center">
      <h3 class="review-title">Personal Updates</h3>
      <p class="text-muted">Lorem ipsum dollar</p>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="table-responsive">
          <table class="table table-bordered review-table mb-0">
            <thead>
              <tr>
                <th class="width-pixel">#</th>
                <th>Last Year</th>
                <th>Yes/No</th>
                <th>Details</th>
                <th>Current Year</th>
                <th>Yes/No</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Married/Engaged?</td>
                <td>
                  <vue-select :options="Married" placeholder="Select" id="married" />
                </td>
                <td><input type="text" class="form-control" /></td>
                <td>Marriage Plans</td>
                <td>
                  <vue-select :options="Marriage" placeholder="Select" id="marriage" />
                </td>
                <td><input type="text" class="form-control" /></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Higher Studies/Certifications?</td>
                <td>
                  <vue-select :options="Studies" placeholder="Select" id="studies" />
                </td>
                <td><input type="text" class="form-control" /></td>
                <td>Plans For Higher Study</td>
                <td>
                  <vue-select :options="Higher" placeholder="Select" id="higher" />
                </td>
                <td><input type="text" class="form-control" /></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Health Issues?</td>
                <td>
                  <vue-select :options="Health" placeholder="Select" id="health" />
                </td>
                <td><input type="text" class="form-control" /></td>
                <td>Certification Plans</td>
                <td>
                  <vue-select
                    :options="Certification"
                    placeholder="Select"
                    id="certification"
                  />
                </td>
                <td><input type="text" class="form-control" /></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Others</td>
                <td>
                  <vue-select :options="Others" placeholder="Select" id="others" />
                </td>
                <td><input type="text" class="form-control" /></td>
                <td>Others</td>
                <td>
                  <vue-select :options="Othersone" placeholder="Select" id="othersone" />
                </td>
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
      select2: null,
      Married: ["Select", "Yes", "No"],
      Marriage: ["Select", "Yes", "No"],
      Studies: ["Select", "Yes", "No"],
      Higher: ["Select", "Yes", "No"],
      Health: ["Select", "Yes", "No"],
      Certification: ["Select", "Yes", "No"],
      Others: ["Select", "Yes", "No"],
      Othersone: ["Select", "Yes", "No"],
    };
  },
};
</script>
