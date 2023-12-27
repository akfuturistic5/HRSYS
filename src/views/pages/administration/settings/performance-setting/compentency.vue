<template>
  <!-- Compentency Config -->
  <div class="tab-pane" id="compentency_tab">
    <div class="row">
      <div class="col-md-12">
        <div class="input-block mb-3">
          <label class="col-form-label">Competency-based</label>
          <textarea
            rows="4"
            cols="5"
            class="form-control"
            name="competencies_desc"
          >Competency-based performance management allow companies to evaluate employees' performance through define core competencies that align with the company’s mission, vision and goals. A 360-degree assessment can also be added to capture ratings and feedback </textarea
          >
        </div>
        <div class="submit-section my-3">
          <button
            class="m-0 btn btn-sm btn-primary submit-btn performance_status"
            data-status="competency"
            title=""
          >
            Activate Competency-based
          </button>
        </div>
      </div>
      <div class="col-md-12">
        <div class="input-block mb-3">
          <table class="table table-bordered table-center">
            <thead class="bg-thead">
              <tr>
                <th class="width-250">Competency</th>
                <th>Definition</th>
                <th class="text-center width-70">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Adaptability</th>
                <td>
                  <div class="task-textarea">
                    <textarea
                      placeholder="Definition"
                      class="form-control definition_edit_6"
                      readonly=""
                    >Ability to handle ambiguity and certain situations outside of their control. Dealing with a change in process, systems, role, and direction of the company. Adapting to new ways of doing things.</textarea
                    >
                  </div>
                </td>
                <td class="text-center">
                  <a
                    href="javascript:void(0);"
                    class="text-warning"
                    title=""
                    data-original-title="Edit"
                    ><i class="fa-solid fa-pencil"></i
                  ></a>
                  <a
                    href="javascript:void(0);"
                    class="text-danger"
                    title=""
                    data-bs-toggle="ajaxModal"
                    data-original-title="Delete"
                    ><i class="fa-solid fa-xmark ms-1"></i
                  ></a>
                </td>
              </tr>
              <tr>
                <th>Collaboration &amp; Teamwork</th>
                <td>
                  <div class="task-textarea">
                    <textarea
                      placeholder="Definition"
                      class="form-control definition_edit_7"
                      readonly=""
                    >Works harmoniously with others to get a job done; shares critical information with everyone involved in a project. Works cooperatively with others to achieve common goals. Seeks opinions and values the contributions of others; involves team in discussion and decision-making.</textarea
                    >
                  </div>
                </td>
                <td class="text-center">
                  <a
                    href="javascript:void(0);"
                    class="text-warning"
                    title=""
                    data-original-title="Edit"
                    ><i class="fa-solid fa-pencil"></i
                  ></a>
                  <a
                    href="javascript:void(0);"
                    class="text-danger"
                    title=""
                    data-bs-toggle="ajaxModal"
                    data-original-title="Delete"
                    ><i class="fa-solid fa-xmark ms-1"></i
                  ></a>
                </td>
              </tr>
              <tr>
                <th>Communication</th>
                <td>
                  <div class="task-textarea">
                    <textarea
                      placeholder="Definition"
                      class="form-control definition_edit_8"
                      readonly=""
                    >Communicates in an engaging, effective, and respectful way to a wide variety of groups. Delivers convincing and meaningful messages that leave a positive impact. Effective oral and written communication skills. The ability to persuade and convince others including management.</textarea
                    >
                  </div>
                </td>
                <td class="text-center">
                  <a
                    href="javascript:void(0);"
                    class="text-warning"
                    title=""
                    data-original-title="Edit"
                    ><i class="fa-solid fa-pencil"></i
                  ></a>
                  <a
                    href="javascript:void(0);"
                    class="text-danger"
                    title=""
                    data-bs-toggle="ajaxModal"
                    data-original-title="Delete"
                    ><i class="fa-solid fa-xmark ms-1"></i
                  ></a>
                </td>
              </tr>
              <tr>
                <th>Customer Service</th>
                <td>
                  <div class="task-textarea">
                    <textarea
                      placeholder="Definition"
                      class="form-control definition_edit_9"
                      readonly=""
                    >Listens and responds effectively to customer questions; resolves customer problems to the customer’s satisfaction; respects all internal and external customers; follows up to evaluate customer satisfaction; exceeds customer expectations.</textarea
                    >
                  </div>
                </td>
                <td class="text-center">
                  <a
                    href="javascript:void(0);"
                    class="text-warning"
                    title=""
                    data-original-title="Edit"
                    ><i class="fa-solid fa-pencil"></i
                  ></a>
                  <a
                    href="javascript:void(0);"
                    class="text-danger"
                    title=""
                    data-bs-toggle="ajaxModal"
                    data-original-title="Delete"
                    ><i class="fa-solid fa-xmark ms-1"></i
                  ></a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="input-block mb-3">
          <form>
            <table class="table performance-table">
              <tbody>
                <tr>
                  <td class="pe-0">
                    <input
                      type="text"
                      class="form-control"
                      name="competency[]"
                      required=""
                      placeholder="Competency"
                    />
                  </td>
                  <td>
                    <textarea
                      rows="4"
                      cols="20"
                      class="form-control"
                      name="definition[]"
                      placeholder="Definition"
                      required=""
                    ></textarea>
                  </td>
                  <td class="pe-0 width-55">
                    <button
                      type="button"
                      class="btn btn-white add_competency_performance setting-pref-btn"
                      data-bs-toggle="tooltip"
                      data-original-title="Add Competency"
                    >
                      <i class="fa-solid fa-plus-circle"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="">
              <button
                class="btn btn-primary"
                type="submit"
                id="create_offers_submit"
              >
                Create Competencies
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="col-md-12 col-lg-12">
        <hr class="mt-0" />
        <div class="input-block mb-3 m-b-0">
          <label class="col-form-label">Choose Your Rating Scale</label>
          <div class="radio_input" id="rating_scale_select_competency">
            <label class="radio-inline custom_radio">
              <input
                type="radio"
                name="rating_scale_competency"
                value="rating_1_5"
                required=""
                class="rating_scale"
                checked=""
              />1 - 5 <span class="checkmark"></span>
            </label>
            <label class="radio-inline custom_radio">
              <input
                type="radio"
                name="rating_scale_competency"
                value="rating_1_10"
                class="rating_scale"
              />1 - 10 <span class="checkmark"></span>
            </label>
            <label class="radio-inline custom_radio">
              <input
                type="radio"
                name="rating_scale_competency"
                value="custom_rating"
                class="rating_scale"
              />Custom <span class="checkmark"></span>
            </label>
          </div>
        </div>

        <!-- 5 Ratings Content -->
        <div
          class="input-block mb-3"
          id="5ratings_cont_competency"
          style="display: block"
        >
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
                    <td class="w-50pixel">1</td>
                    <td class="w-300pixel">
                      <input
                        type="text"
                        name="rating_value[]"
                        class="form-control"
                        value="tst"
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
Lorem ipsum</textarea
                      >
                    </td>
                  </tr>
                  <tr>
                    <td class="w-50pixel">2</td>
                    <td class="w-300pixel">
                      <input
                        type="text"
                        name="rating_value[]"
                        class="form-control"
                        value="dsgds"
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
Lorem ipsum</textarea
                      >
                    </td>
                  </tr>
                  <tr>
                    <td class="w-50pixel">3</td>
                    <td class="w-300pixel">
                      <input
                        type="text"
                        name="rating_value[]"
                        class="form-control"
                        value="sdg"
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
Lorem ipsum</textarea
                      >
                    </td>
                  </tr>
                  <tr>
                    <td class="w-50pixel">4</td>
                    <td class="w-300pixel">
                      <input
                        type="text"
                        name="rating_value[]"
                        class="form-control"
                        value="sdgsdg"
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
Lorem ipsum</textarea
                      >
                    </td>
                  </tr>
                  <tr>
                    <td class="w-50pixel">5</td>
                    <td class="w-300pixel">
                      <input
                        type="text"
                        name="rating_value[]"
                        class="form-control"
                        value="sdg"
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
Lorem ipsum</textarea
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

        <!-- 10 Ratings Content -->
        <div
          class="input-block mb-3"
          id="10ratings_cont_competency"
          style="display: none"
        >
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
                    <td class="w-50pixel">1</td>
                    <td class="w-300pixel">
                      <input
                        type="text"
                        name="rating_value_ten[]"
                        class="form-control"
                        placeholder="Short word to describe rating of 1"
                        required=""
                      />
                    </td>
                    <td>
                      <textarea
                        rows="3"
                        name="definition_ten[]"
                        class="form-control"
                        placeholder="Descriptive Rating Definition"
                        required=""
                      ></textarea>
                    </td>
                  </tr>
                  <tr>
                    <td class="w-50pixel">2</td>
                    <td class="w-300pixel">
                      <input
                        type="text"
                        name="rating_value_ten[]"
                        class="form-control"
                        placeholder="Short word to describe rating of 2"
                        required=""
                      />
                    </td>
                    <td>
                      <textarea
                        rows="3"
                        name="definition_ten[]"
                        class="form-control"
                        placeholder="Descriptive Rating Definition"
                        required=""
                      ></textarea>
                    </td>
                  </tr>
                  <tr>
                    <td class="w-50pixel">3</td>
                    <td class="w-300pixel">
                      <input
                        type="text"
                        name="rating_value_ten[]"
                        class="form-control"
                        placeholder="Short word to describe rating of 3"
                        required=""
                      />
                    </td>
                    <td>
                      <textarea
                        rows="3"
                        name="definition_ten[]"
                        class="form-control"
                        placeholder="Descriptive Rating Definition"
                        required=""
                      ></textarea>
                    </td>
                  </tr>
                  <tr>
                    <td class="w-50pixel">4</td>
                    <td class="w-300pixel">
                      <input
                        type="text"
                        name="rating_value_ten[]"
                        class="form-control"
                        placeholder="Short word to describe rating of 4"
                        required=""
                      />
                    </td>
                    <td>
                      <textarea
                        rows="3"
                        name="definition_ten[]"
                        class="form-control"
                        placeholder="Descriptive Rating Definition"
                        required=""
                      ></textarea>
                    </td>
                  </tr>
                  <tr>
                    <td class="w-50pixel">5</td>
                    <td class="w-300pixel">
                      <input
                        type="text"
                        name="rating_value_ten[]"
                        class="form-control"
                        placeholder="Short word to describe rating of 5"
                        required=""
                      />
                    </td>
                    <td>
                      <textarea
                        rows="3"
                        name="definition_ten[]"
                        class="form-control"
                        placeholder="Descriptive Rating Definition"
                        required=""
                      ></textarea>
                    </td>
                  </tr>
                  <tr>
                    <td class="w-50pixel">6</td>
                    <td class="w-300pixel">
                      <input
                        type="text"
                        name="rating_value_ten[]"
                        class="form-control"
                        placeholder="Short word to describe rating of 6"
                        required=""
                      />
                    </td>
                    <td>
                      <textarea
                        rows="3"
                        name="definition_ten[]"
                        class="form-control"
                        placeholder="Descriptive Rating Definition"
                        required=""
                      ></textarea>
                    </td>
                  </tr>
                  <tr>
                    <td class="w-50pixel">7</td>
                    <td class="w-300pixel">
                      <input
                        type="text"
                        name="rating_value_ten[]"
                        class="form-control"
                        placeholder="Short word to describe rating of 7"
                        required=""
                      />
                    </td>
                    <td>
                      <textarea
                        rows="3"
                        name="definition_ten[]"
                        class="form-control"
                        placeholder="Descriptive Rating Definition"
                        required=""
                      ></textarea>
                    </td>
                  </tr>
                  <tr>
                    <td class="w-50pixel">8</td>
                    <td class="w-300pixel">
                      <input
                        type="text"
                        name="rating_value_ten[]"
                        class="form-control"
                        placeholder="Short word to describe rating of 8"
                        required=""
                      />
                    </td>
                    <td>
                      <textarea
                        rows="3"
                        name="definition_ten[]"
                        class="form-control"
                        placeholder="Descriptive Rating Definition"
                        required=""
                      ></textarea>
                    </td>
                  </tr>
                  <tr>
                    <td class="w-50pixel">9</td>
                    <td class="w-300pixel">
                      <input
                        type="text"
                        name="rating_value_ten[]"
                        class="form-control"
                        placeholder="Short word to describe rating of 9"
                        required=""
                      />
                    </td>
                    <td>
                      <textarea
                        rows="3"
                        name="definition_ten[]"
                        class="form-control"
                        placeholder="Descriptive Rating Definition"
                        required=""
                      ></textarea>
                    </td>
                  </tr>
                  <tr>
                    <td class="w-50pixel">10</td>
                    <td class="w-300pixel">
                      <input
                        type="text"
                        name="rating_value_ten[]"
                        class="form-control"
                        placeholder="Short word to describe rating of 10"
                        required=""
                      />
                    </td>
                    <td>
                      <textarea
                        rows="3"
                        name="definition_ten[]"
                        class="form-control"
                        placeholder="Descriptive Rating Definition"
                        required=""
                      ></textarea>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="submit-section">
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
        <!-- 10 Ratings Content -->

        <!-- Custom Ratings Content -->
        <div
          class="input-block mb-3"
          id="custom_rating_cont_competency"
          style="display: none"
        >
          <label class="col-form-label">Custom Rating Count</label>
          <div class="input-block mb-3">
            <input
              type="text"
              class="form-control custom_rating_input"
              data-type="competency"
              id="custom_rating_input1"
              name="custom_rating_count"
              value=""
              placeholder="20"
              style="width: 160px"
            />
          </div>
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
                <tbody class="custom-value_competency"></tbody>
              </table>
              <div class="submit-section">
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
        <!-- /Custom Ratings Content -->
      </div>
    </div>
  </div>
  <!-- /Compentency Config -->
</template>
