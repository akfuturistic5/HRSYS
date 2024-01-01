<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>
    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content">
        <!-- Page Header -->
        <sales-header :title="title" :path="path" :text="text" />
        <!-- /Page Header -->
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-6 m-b-20">
                    <img
                      src="@/assets/img/logo2.png"
                      class="inv-logo"
                      alt="Logo"
                    />
                    <ul class="list-unstyled">
                      <li>iTensia USA</li>
                      <li>3864 Quiet Valley Lane,</li>
                      <li>Sherman Oaks, CA, 91403</li>
                      <li>GST No:</li>
                    </ul>
                  </div>
                  <div class="col-sm-6 m-b-20">
                    <div class="invoice-details">
                      <h3 class="text-uppercase">Estimate #49029</h3>
                      <ul class="list-unstyled">
                        <li>Create Date: <span>March 12, 2023</span></li>
                        <li>Expiry date: <span>May 25, 2023</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12 col-lg-12 m-b-20">
                    <h5>Estimate to:</h5>
                    <ul class="list-unstyled">
                      <li>
                        <h5><strong>Barry Cuda</strong></h5>
                      </li>
                      <li>Global Technologies</li>
                      <li>5754 Airport Rd</li>
                      <li>Coosada, AL, 36020</li>
                      <li>United States</li>
                      <li>888-777-6655</li>
                      <li><a href="javascript:void(0);">barrycuda@example.com</a></li>
                    </ul>
                  </div>
                </div>
                <table class="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>ITEM</th>
                      <th class="d-none d-sm-table-cell">DESCRIPTION</th>
                      <th>UNIT COST</th>
                      <th>QUANTITY</th>
                      <th class="text-end">TOTAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in Estimateview" :key="item.id">
                      <td>{{ item.ID }}</td>
                      <td>{{ item.Item }}</td>
                      <td class="d-none d-sm-table-cell">
                        {{ item.Description }}
                      </td>
                      <td>{{ item.Unitcost }}</td>
                      <td>{{ item.Quantity }}</td>
                      <td class="text-end">{{ item.Total }}</td>
                    </tr>
                  </tbody>
                </table>
                <div>
                  <div class="row invoice-payment">
                    <div class="col-sm-7"></div>
                    <div class="col-sm-5">
                      <div class="m-b-20">
                        <div class="table-responsive no-border">
                          <table class="table">
                            <tbody>
                              <tr>
                                <th>Subtotal:</th>
                                <td class="text-end">$7,000</td>
                              </tr>
                              <tr>
                                <th>
                                  Tax: <span class="text-regular">(25%)</span>
                                </th>
                                <td class="text-end">$1,750</td>
                              </tr>
                              <tr>
                                <th>Total:</th>
                                <td class="text-end text-primary">
                                  <h5>$8,750</h5>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="invoice-info">
                    <h5>Other information</h5>
                    <p class="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus sed dictum ligula, cursus blandit risus. Maecenas
                      eget metus non tellus dignissim aliquam ut a ex. Maecenas
                      sed vehicula dui, ac suscipit lacus. Sed finibus leo vitae
                      lorem interdum, eu scelerisque tellus fermentum. Curabitur
                      sit amet lacinia lorem. Nullam finibus pellentesque
                      libero, eu finibus sapien interdum vel
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Page Content -->
    </div>
    <!-- /Page Wrapper -->
  </div>
</template>

<script>
import Estimateview from "@/assets/json/estimate-view.json";
export default {
  data() {
    return {
      title: "Estimate",
      path: "Dashboard",
      text: "Estimate",
      Estimateview: Estimateview,
    };
  },
  name: "estimate-view",
};
</script>
