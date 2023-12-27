<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <!-- Page Header -->
        <jobbreadcrumb
          :title="title"
          :path="path"
          :text="text"
          :text1="text1"
          :text2="text2"
          :text3="text3"
        />
        <!-- /Page Header -->

        <div class="row">
          <div class="col-md-12">
            <div class="showentries mb-3">
              <label
                >Show
                <select>
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                entries
              </label>
            </div>
            <div class="table-responsive">
              <a-table
                class="stripped table-hover"
                :columns="columns"
                :data-source="data"
              >
                <template #bodyCell="{ column, record }">
                  <template v-if="column.key === 'Questions'">
                    IS management has decided to rewrite a legacy <br />customer
                    relations system using fourth generation <br />languages
                    (4GLs). Which of the following risks is<br />
                    MOST often associated with system development using 4GLs?
                  </template>
                  <template v-else-if="column.key === 'CorrectAnswer'">
                    <div class="text-center">{{ record.CorrectAnswer }}</div>
                  </template>
                  <template v-else-if="column.key === 'action'">
                    <div class="text-center">
                      <div class="dropdown dropdown-action">
                        <a
                          href="javascript:;"
                          class="action-icon dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          ><i class="material-icons">{{ record.Actions }}</i></a
                        >
                        <div class="dropdown-menu dropdown-menu-right">
                          <a
                            class="dropdown-item"
                            href="javascript:;"
                            data-bs-toggle="modal"
                            data-bs-target="#edit_question"
                            ><i class="fa-solid fa-pencil m-r-5"></i> Edit</a
                          >
                          <a class="dropdown-item" href="javascript:;"
                            ><i class="fa-regular fa-trash-can m-r-5"></i>
                            Delete</a
                          >
                        </div>
                      </div>
                    </div>
                  </template>
                </template>
              </a-table>
            </div>
          </div>
        </div>
      </div>
      <!-- /Page Content -->
    </div>
  </div>
  <questionmodel></questionmodel>
</template>
<script>
const columns = [
  {
    title: "#",
    dataIndex: "id",
    sorter: {
      compare: (a, b) => {
        a = a.id.toLowerCase();
        b = b.id.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Questions",
    key: "Questions",
    sorter: true,
  },
  {
    title: "Options A",
    dataIndex: "OptionsA",
    sorter: {
      compare: (a, b) => {
        a = a.OptionsA.toLowerCase();
        b = b.OptionsA.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "OptionsB",
    dataIndex: "OptionsB",
    sorter: {
      compare: (a, b) => {
        a = a.OptionsB.toLowerCase();
        b = b.OptionsB.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Options C",
    dataIndex: "OptionsC",
    sorter: {
      compare: (a, b) => {
        a = a.OptionsC.toLowerCase();
        b = b.OptionsC.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Options D",
    dataIndex: "OptionsD",
    sorter: {
      compare: (a, b) => {
        a = a.OptionsD.toLowerCase();
        b = b.OptionsD.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Correct Answer",
    dataIndex: "CorrectAnswer",
    key: "CorrectAnswer",
    sorter: {
      compare: (a, b) => {
        a = a.CorrectAnswer.toLowerCase();
        b = b.CorrectAnswer.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Action",
    key: "action",
    sorter: true,
    class: "text-end",
  },
];
const data = [
  {
    id: "1",
    OptionsA: "design facilities",
    OptionsB: "language subsets",
    OptionsC: "Lack of portability",
    OptionsD: "Inability to perform data",
    CorrectAnswer: "A",
    Actions: "more_vert",
  },
  {
    id: "2",
    OptionsA: "design facilities",
    OptionsB: "language subsets",
    OptionsC: "Lack of portability",
    OptionsD: "Inability to perform data",
    CorrectAnswer: "A",
    Actions: "more_vert",
  },
];

export default {
  data() {
    return {
      title: "Interview Questions",
      path: "Dashboard",
      text: "Jobs",
      text1: "Interview Questions",
      text2: "Add Questions",
      text3: "Add Category",
      columns,
      data,
    };
  },
};
</script>
<style>
.question-cell {
  white-space: pre-line;
}
</style>
