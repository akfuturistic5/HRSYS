<template>
  <div class="main-warpper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>
    <div class="page-wrapper">
      <div class="content container-fluid">
        <!-- Page Header -->
        <breadcrumb :title="title" :path="path" :text="text" />
        <!-- /Page Header -->

        <div class="row">
          <div
            class="col-xl-4 col-md-6 col-sm-6"
            v-for="item in Knowledgebase"
            :key="item.id"
          >
            <div class="topics">
              <h3 class="topic-title">
                <a href="javascript:;"
                  ><i class="fa-regular fa-folder"></i> {{ item.Topic }}
                  <span>{{ item.Number }}</span></a
                >
              </h3>
              <ul class="topics-list">
                <li>
                  <router-link to="knowledgebase-view">
                    {{ item.link1 }}
                  </router-link>
                </li>
                <li>
                  <router-link to="knowledgebase-view">
                    {{ item.link2 }}
                  </router-link>
                </li>
                <li>
                  <router-link to="knowledgebase-view">
                    {{ item.link3 }}
                  </router-link>
                </li>
                <li>
                  <router-link to="knowledgebase-view">
                    {{ item.link4 }}
                  </router-link>
                </li>
                <li>
                  <router-link to="knowledgebase-view">
                    {{ item.link5 }}
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Knowledgebase from "@/assets/json/knowledgebase/knowledgebase.json";
export default {
  data() {
    return {
      title: "Knowledgebase",
      path: "Dashboard",
      text: "Knowledgebase",
      Knowledgebase: Knowledgebase,
    };
  },
};
</script>
