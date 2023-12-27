<template>
  <!-- Smart Goal Config -->
  <div class="tab-pane" id="smart_goals_tab">
    <div class="row">
      <div class="col-md-12">
        <div class="input-block mb-3">
          <label class="col-form-label">Smart Goals Configuration</label>
          <textarea rows="4" cols="5" class="form-control" name="smart_goals">
A 360-degree assessment can also be added to capture ratings and feedback</textarea
          >
        </div>
        <div class="submit-section my-3">
          <button
            class="btn btn-primary submit-btn performance_status"
            data-status="smart_goals"
            title=""
          >
            Activate SMART Goals
          </button>
        </div>
      </div>
    </div>
    <hr class="mt-0" />
    <div class="input-block mb-3 m-b-0">
      <label class="col-form-label">Choose Your Rating Scale</label>
      <div class="radio_input" id="rating_scale_select">
        <label class="radio-inline custom_radio">
          <input
            type="radio"
            name="rating_scale_smart_goal"
            value="rating_1_5"
            required=""
            class="rating_scale"
            checked=""
          />1 - 5 <span class="checkmark"></span>
        </label>
        <label class="radio-inline custom_radio ms-1">
          <input
            type="radio"
            name="rating_scale_smart_goal"
            value="rating_1_10"
            class="rating_scale"
          />1 - 10 <span class="checkmark"></span>
        </label>
        <label class="radio-inline custom_radio ms-1">
          <input
            type="radio"
            name="rating_scale_smart_goal"
            value="custom_rating"
            class="rating_scale"
          />Custom <span class="checkmark"></span>
        </label>
      </div>
    </div>

    <!-- 5 Ratings Content -->
    <div class="input-block mb-3 d-block" id="5ratings_cont">
      <div class="table-responsive">
        <form>
          <table class="table setting-performance-table">
            <thead>
              <tr>
                <th>Rating</th>
                <th>Short Descriptive Word</th>
                <th>Definition</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="perform-set">1</td>
                <td class="perform-set2">
                  <input
                    type="text"
                    name="rating_value[]"
                    class="form-control"
                    value="very bad"
                    placeholder="Short word to describe rating of 1"
                    required=""
                  />
                </td>
                <td>
                  <textarea
                    rows="3"
                    name="definition[]"
                    class="form-control"
                    placeholder="Descriptive Rating Definition"
                    required=""
                  >
very bad</textarea
                  >
                </td>
              </tr>
              <tr>
                <td class="perform-set">2</td>
                <td class="perform-set2">
                  <input
                    type="text"
                    name="rating_value[]"
                    class="form-control"
                    value="bad"
                    placeholder="Short word to describe rating of 2"
                    required=""
                  />
                </td>
                <td>
                  <textarea
                    rows="3"
                    name="definition[]"
                    class="form-control"
                    placeholder="Descriptive Rating Definition"
                    required=""
                  >
bad</textarea
                  >
                </td>
              </tr>
              <tr>
                <td class="perform-set">3</td>
                <td class="perform-set2">
                  <input
                    type="text"
                    name="rating_value[]"
                    class="form-control"
                    value="Average"
                    placeholder="Short word to describe rating of 3"
                    required=""
                  />
                </td>
                <td>
                  <textarea
                    rows="3"
                    name="definition[]"
                    class="form-control"
                    placeholder="Descriptive Rating Definition"
                    required=""
                  >
Average</textarea
                  >
                </td>
              </tr>
              <tr>
                <td class="perform-set">4</td>
                <td class="perform-set2">
                  <input
                    type="text"
                    name="rating_value[]"
                    class="form-control"
                    value="Good"
                    placeholder="Short word to describe rating of 4"
                    required=""
                  />
                </td>
                <td>
                  <textarea
                    rows="3"
                    name="definition[]"
                    class="form-control"
                    placeholder="Descriptive Rating Definition"
                    required=""
                  >
Good</textarea
                  >
                </td>
              </tr>
              <tr>
                <td class="perform-set">5</td>
                <td class="perform-set2">
                  <input
                    type="text"
                    name="rating_value[]"
                    class="form-control"
                    value="Very Good"
                    placeholder="Short word to describe rating of 5"
                    required=""
                  />
                </td>
                <td>
                  <textarea
                    rows="3"
                    name="definition[]"
                    class="form-control"
                    placeholder="Descriptive Rating Definition"
                    required=""
                  >
Very Good</textarea
                  >
                </td>
              </tr>
            </tbody>
          </table>
          <div class="submit-section m-b-0">
            <button
              class="btn btn-primary submit-btn create_goal_configuration_submit"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
    <!-- /5 Ratings Content -->
  </div>
  <!-- /Smart Goal Config -->
</template>
<script>
export default {};
</script>
