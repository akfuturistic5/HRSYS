<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <!-- Page Header -->
        <user-dashboard-header
          :title="title"
          :path="path"
          :text="text"
          :text1="text1"
          :text2="text2"
        />
        <!-- /Page Header -->

        <!-- Content Starts -->
        <user-dashboard-tabset></user-dashboard-tabset>

        <div class="quiz-wizard">
          <div class="row">
            <div class="col-md-8 offset-md-2">
              <div class="card">
                <div class="card-body">
                  <div class="" id="myWizard">
                    <form method="post" id="quiz_answer">
                      <div class="tab-content pt-0">
                        <div
                          class="tab-pane"
                          :class="{ active: currentQuestionIndex === index }"
                          v-for="(question, index) in questions"
                          :key="index"
                        >
                          <div class="row">
                            <div class="col-md-12">
                              <div class="">
                                <h4 class="mb-4 text-dark">
                                  <span>{{ index + 1 }}.</span>
                                  {{ question.text }}
                                </h4>

                                <div class="row">
                                  <div
                                    class="col-md-6"
                                    v-for="(option, optionIndex) in question.options"
                                    :key="optionIndex"
                                  >
                                    <label class="question-radio text-secondary">
                                      <input
                                        type="radio"
                                        :name="'answer[' + index + ']'"
                                        :value="optionIndex"
                                        v-model="selectedAnswers[index]"
                                      />
                                      <span class="checkmark"></span>
                                      {{ option }}
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div class="text-start mt-3">
                                <a
                                  class="btn btn-primary btn-lg next submit-btn"
                                  href="javascript:;"
                                  @click.prevent="nextQuestion"
                                  v-if="currentQuestionIndex < questions.length - 1"
                                  >Next</a
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="text-start mt-3">
                          <button
                            class="btn btn-success btn-lg submit-btn mt-3"
                            data-bs-toggle="modal"
                            data-bs-target="#free_question_modal"
                            type="button"
                            v-if="currentQuestionIndex === questions.length - 1"
                          >
                            Finish
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Content End -->
      </div>
      <!-- /Page Content -->
      <questions-model></questions-model>
    </div>
    <!-- /Page Wrapper -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Aptitude",
      path: "Dashboard",
      text: "Jobs",
      text1: "Interviewing",
      text2: "Aptitude",
      questions: [
        {
          text:
            "Which of the following would be the BEST method for ensuring that critical fields in a master record have been updated properly?",
          options: [
            "Inadequate screen/report design facilities",
            "Complex programming language subsets",
            "Lack of portability across operating systems",
            "Inability to perform data-intensive operations",
          ],
        },
        {
          text:
            "Which of the following is a dynamic analysis tool for the purpose of testing software modules?",
          options: [
            "Blackbox test",
            "Desk checking",
            "Structured walk-through",
            "Design and code",
          ],
        },
        {
          text:
            "Which of the following is MOST likely to result from a business process reengineering (BPR) project?",
          options: [
            "An increased number of people using technology",
            "Significant cost savings, through a reduction in the complexity of information technology",
            "A weaker organisational structures and less accountability",
            "Increased information protection (IP) risk will increase",
          ],
        },
        {
          text:
            "Which of the following devices extends the network and has the capacity to store frames and act as a storage and forward device?",
          options: ["Gateway", "Repeater", "Bridge", "Router"],
        },
        {
          text:
            "An offsite information processing facility having electrical wiring, air conditioning and flooring, but no computer or communications equipment is a:",
          options: [
            "Cold site",
            "Warm site",
            "Dial-up site",
            "Duplicate processing facility",
          ],
        },
      ],
      selectedAnswers: [],
      currentQuestionIndex: 0,
    };
  },
  mounted() {
    var nextButtons = this.$el.getElementsByClassName("next");
    for (var i = 0; i < nextButtons.length; i++) {
      nextButtons[i].addEventListener("click", this.handleNextClick);
    }

    var firstButtons = this.$el.getElementsByClassName("first");
    for (var k = 0; k < firstButtons.length; k++) {
      firstButtons[k].addEventListener("click", this.handleFirstClick);
    }
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex];
    },
  },
  methods: {
    nextQuestion() {
      // Increment the current question index to display the next question
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
      }
    },
  },
};
</script>
