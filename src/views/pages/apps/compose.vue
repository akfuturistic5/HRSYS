<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <inbox-sidebar></inbox-sidebar>

    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <!-- Page Header -->
        <inbox-header :title="title" :path="path" :text="text" />
        <!-- /Page Header -->

        <div class="row">
          <div class="col-sm-12">
            <div class="card">
              <div class="card-body">
                <form>
                  <div class="input-block mb-3">
                    <input type="email" placeholder="To" class="form-control" />
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="input-block mb-3">
                        <input type="email" placeholder="Cc" class="form-control" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-block mb-3">
                        <input type="email" placeholder="Bcc" class="form-control" />
                      </div>
                    </div>
                  </div>
                  <div class="input-block mb-3">
                    <input type="text" placeholder="Subject" class="form-control" />
                  </div>
                  <div class="input-block mb-3">
                    <summernoteEditor
                      v-model="myValue"
                      @update:modelValue="summernoteChange($event)"
                      @summernoteImageLinkInsert="summernoteImageLinkInsert"
                    />
                  </div>
                  <div class="input-block mb-3 mb-0">
                    <div class="text-center">
                      <button class="btn btn-primary me-2">
                        <span>Send</span> <i class="fa-solid fa-paper-plane m-l-5"></i>
                      </button>
                      <button class="btn btn-success me-2" type="button">
                        <span>Draft</span> <i class="fa-regular fa-floppy-disk m-l-5"></i>
                      </button>
                      <button class="btn btn-success me-2" type="button">
                        <span>Delete</span> <i class="fa-regular fa-trash-can m-l-5"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Page Content -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Compose",
      path: "Dashboard",
      text: "Compose",
      myValue: "description",
    };
  },
  methods: {
    summernoteChange(newValue) {
      // console.log("summernoteChange", newValue);
    },
    summernoteImageLinkInsert(...args) {
      // console.log("summernoteImageLinkInsert()", args);
    },
  },
};
</script>
