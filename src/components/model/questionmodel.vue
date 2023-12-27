<template>
  <!-- Add Questions Modal -->
  <div id="add_question" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Questions</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="row">
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Add Category</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Department</label>
                  <vue-select
                    :options="Departmentcate"
                    id="departmentcate"
                    placeholder="-"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="input-block mb-3">
                  <label class="col-form-label">Add Questions</label>
                  <textarea class="form-control"> </textarea>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Option A</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Option B</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Option C</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Option D</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="input-block mb-3">
                  <label class="col-form-label">Correct Answer</label>
                  <vue-select :options="Answercate" id="answercate" placeholder="-" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Code Snippets</label>
                  <textarea class="form-control"> </textarea>
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Answer Explanation</label>
                  <textarea class="form-control"> </textarea>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Add Video Link</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Add Image To Question</label>
                  <input class="form-control" type="file" />
                </div>
              </div>
            </div>
            <div class="submit-section">
              <button class="btn btn-primary submit-btn">Cancel</button>
              <button class="btn btn-primary submit-btn ms-1">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Questions Modal -->
  <!-- Edit Job Modal -->
  <div id="edit_question" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Questions</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="row">
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Category</label>
                  <vue-select
                    :options="CategoryQue"
                    id="categoryQue"
                    placeholder="HTML"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Department</label>
                  <vue-select
                    :options="DepartmentQue"
                    id="departmentQue"
                    placeholder="Web Development"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="input-block mb-3">
                  <label class="col-form-label">Add Questions</label>
                  <textarea class="form-control">
IS management has decided to rewrite a legacy customer relations system using fourth generation languages (4GLs). Which of the following risks is MOST often associated with system development using 4GLs?
                       </textarea
                  >
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Option A</label>
                  <input class="form-control" type="text" value="Design facilities" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Option B</label>
                  <input class="form-control" type="text" value="language subsets" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Option C</label>
                  <input class="form-control" type="text" value="Lack of portability" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Option D</label>
                  <input
                    class="form-control"
                    type="text"
                    value="Inability to perform data"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="input-block mb-3">
                  <label class="col-form-label">Correct Answer</label>
                  <vue-select
                    :options="AnswerQue"
                    id="answerQue"
                    placeholder="Options A"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Code Snippets</label>
                  <textarea class="form-control"> </textarea>
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Answer Explanation</label>
                  <textarea class="form-control"> </textarea>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Add Video Link</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="input-block mb-3">
                  <label class="col-form-label">Add Image To Question</label>
                  <input class="form-control" type="file" />
                </div>
              </div>
            </div>
            <div class="submit-section">
              <button class="btn btn-primary submit-btn">Cancel</button>
              <button class="btn btn-primary submit-btn ms-1">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Edit Job Modal -->
  <!-- Add Category Modal -->
  <div id="add_category" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Category</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="row">
              <div class="col-md-12">
                <div class="input-block mb-3">
                  <label class="col-form-label">Add Category</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
            </div>
            <div class="submit-section">
              <button class="btn btn-primary submit-btn">Cancel</button>
              <button class="btn btn-primary submit-btn ms-1">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Questions Modal -->
  <!-- Add Category Modal -->
  <div id="add_category" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Category</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="row">
              <div class="col-md-12">
                <div class="input-block mb-3">
                  <label class="col-form-label">Add Category</label>
                  <input class="form-control" type="text" />
                </div>
              </div>
            </div>
            <div class="submit-section">
              <button class="btn btn-primary submit-btn">Cancel</button>
              <button class="btn btn-primary submit-btn">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Questions Modal -->
</template>
<script>
export default {
  data() {
    return {
      select2: null,
      CategoryQue: ["-", "HTML", "CSS"],
      DepartmentQue: [
        "-",
        "Web Development",
        "Application Development",
        "IT Management",
        "Accounts Management",
        "Support Management",
        "Marketing",
      ],
      AnswerQue: ["-", "Options A", "Options B", "Options c", "Options D"],
      Departmentcate: [
        "-",
        "Web Development",
        "Application Development",
        "IT Management",
        "Accounts Management",
        "Support Management",
        "Marketing",
      ],
      Answercate: ["-", "Options A", "Options B", "Options c", "Options D"],
    };
  },
};
</script>
