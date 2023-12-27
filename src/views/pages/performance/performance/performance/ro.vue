<template>
  <section class="review-section">
    <div class="review-header text-center">
      <h3 class="review-title">For RO's Use Only</h3>
      <p class="text-muted">Lorem ipsum dollar</p>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="table-responsive">
          <table class="table table-bordered review-table mb-0">
            <thead>
              <tr>
                <th></th>
                <th>Yes/No</th>
                <th>If Yes - Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The Team member has Work related Issues</td>
                <td>
                  <vue-select :options="Roteam" id="ro" placeholder="Select" class="ro-select"/>
                </td>
                <td><input type="text" class="form-control" /></td>
              </tr>
              <tr>
                <td>The Team member has Leave Issues</td>
                <td>
                  <vue-select :options="Roteam" id="roleave" placeholder="Select" />
                </td>
                <td><input type="text" class="form-control" /></td>
              </tr>
              <tr>
                <td>The team member has Stability Issues</td>
                <td>
                  <vue-select :options="Roteam" id="roissue" placeholder="Select" />
                </td>
                <td><input type="text" class="form-control" /></td>
              </tr>
              <tr>
                <td>The Team member exhibits non-supportive attitude</td>
                <td>
                  <vue-select
                    :options="Roteam"
                    id="roattitude"
                    placeholder="Select"
                  />
                </td>
                <td><input type="text" class="form-control" /></td>
              </tr>
              <tr>
                <td>Any other points in specific to note about the team member</td>
                <td>
                  <vue-select :options="Roteam" id="romember" placeholder="Select" />
                </td>
                <td><input type="text" class="form-control" /></td>
              </tr>
              <tr>
                <td>Overall Comment /Performance of the team member</td>
                <td>
                  <vue-select :options="Roteam" id="roteam" placeholder="Select" />
                </td>
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
      <h3 class="review-title">For HRD's Use Only</h3>
      <p class="text-muted">Lorem ipsum dollar</p>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="table-responsive">
          <table class="table table-bordered review-table mb-0">
            <thead>
              <tr>
                <th>Overall Parameters</th>
                <th>Available Points</th>
                <th>Points Scored</th>
                <th>RO's Comment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  KRAs Target Achievement Points (will be considered from the overall
                  score specified in this document by the Reporting officer)
                </td>
                <td><input type="text" class="form-control" /></td>
                <td><input type="text" class="form-control" /></td>
                <td><input type="text" class="form-control" /></td>
              </tr>
              <tr>
                <td>
                  Professional Skills Scores(RO's Points furnished in the skill & attitude
                  assessment sheet will be considered)
                </td>
                <td><input type="text" class="form-control" /></td>
                <td><input type="text" class="form-control" /></td>
                <td><input type="text" class="form-control" /></td>
              </tr>
              <tr>
                <td>
                  Personal Skills Scores(RO's Points furnished in the skill & attitude
                  assessment sheet will be considered)
                </td>
                <td><input type="text" class="form-control" /></td>
                <td><input type="text" class="form-control" /></td>
                <td><input type="text" class="form-control" /></td>
              </tr>
              <tr>
                <td>Special Achievements Score (HOD to furnish)</td>
                <td><input type="text" class="form-control" /></td>
                <td><input type="text" class="form-control" /></td>
                <td><input type="text" class="form-control" /></td>
              </tr>
              <tr>
                <td>Overall Total Score</td>
                <td><input type="text" class="form-control" /></td>
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
      select2: null,
      Ro: ["Select", "Yes", "No"],
      Roleave: ["Select", "Yes", "No"],
      Roissue: ["Select", "Yes", "No"],
      Roattitude: ["Select", "Yes", "No"],
      Romember: ["Select", "Yes", "No"],
      Roteam: ["Select", "Yes", "No"],
    };
  },
};
</script>
