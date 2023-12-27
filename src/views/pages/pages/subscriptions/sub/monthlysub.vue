<template>
  <div class="tab-pane fade active show" id="monthly">
    <div class="row mb-30 equal-height-cards">
      <div class="col-md-4">
        <div class="card pricing-box">
          <div class="card-body d-flex flex-column">
            <div class="mb-4">
              <h3>Free</h3>
              <span class="display-4">$0</span>
            </div>
            <ul>
              <li><i class="fa-solid fa-check"></i> <b>1 User</b></li>
              <li><i class="fa-solid fa-check"></i> 5 Projects</li>
              <li><i class="fa-solid fa-check"></i> 5 GB Storage</li>
              <li><i class="fa-solid fa-check"></i> Unlimited Message</li>
            </ul>
            <a
              href="javascript:;"
              class="btn btn-lg btn-secondary mt-auto"
              data-bs-toggle="modal"
              data-bs-target="#edit_plan"
              >Edit</a
            >
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card pricing-box">
          <div class="card-body d-flex flex-column">
            <div class="mb-4">
              <h3>Professional</h3>
              <span class="display-4">$21</span>
              <span>/mo</span>
            </div>
            <ul>
              <li><i class="fa-solid fa-check"></i> <b>30 Users</b></li>
              <li><i class="fa-solid fa-check"></i> 50 Projects</li>
              <li><i class="fa-solid fa-check"></i> 100 GB Storage</li>
              <li><i class="fa-solid fa-check"></i> Unlimited Message</li>
              <li><i class="fa-solid fa-check"></i> 24/7 Customer Support</li>
            </ul>
            <a
              href="javascript:;"
              class="btn btn-lg btn-secondary mt-auto"
              data-bs-toggle="modal"
              data-bs-target="#edit_plan"
              >Edit</a
            >
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card pricing-box">
          <div class="card-body d-flex flex-column">
            <div class="mb-4">
              <h3>Enterprise</h3>
              <span class="display-4">$38</span>
              <span>/mo</span>
            </div>
            <ul>
              <li><i class="fa-solid fa-check"></i> <b>Unlimited Users </b></li>
              <li><i class="fa-solid fa-check"></i> Unlimited Projects</li>
              <li><i class="fa-solid fa-check"></i> 500 GB Storage</li>
              <li><i class="fa-solid fa-check"></i> Unlimited Message</li>
              <li><i class="fa-solid fa-check"></i> Voice and Video Call</li>
              <li><i class="fa-solid fa-check"></i> 24/7 Customer Support</li>
            </ul>
            <a
              href="javascript:;"
              class="btn btn-lg btn-secondary mt-auto"
              data-bs-toggle="modal"
              data-bs-target="#edit_plan"
              >Edit</a
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Monthly Plan Details -->
    <div class="row">
      <div class="col-md-12">
        <div class="card card-table mb-0">
          <div class="card-header">
            <h4 class="card-title mb-0">Plan Details</h4>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-hover table-center mb-0">
                <thead>
                  <tr>
                    <th>Plan</th>
                    <th>Plan Type</th>
                    <th>Create Date</th>
                    <th>Modified Date</th>
                    <th>Amount</th>
                    <th>Subscribed Users</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="monthlysub in Monthlysub" :key="monthlysub.id">
                    <td>{{ monthlysub.Plan }}</td>
                    <td>{{ monthlysub.PlanType }}</td>
                    <td>{{ monthlysub.CreateDate }}</td>
                    <td>{{ monthlysub.ModifiedDate }}</td>
                    <td>{{ monthlysub.Amount }}</td>
                    <td>
                      <router-link
                        class="btn btn-info btn-sm"
                        to="subscribed-companies"
                        >{{ monthlysub.SubscribedUsers }}</router-link
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Monthly Plan Details -->
  </div>
</template>
<script>
import Monthlysub from "@/assets/json/subscriptions/monthlysub.json";
export default {
  data() {
    return {
      Monthlysub: Monthlysub,
    };
  },
};
</script>
