<template>
  <div class="row">
    <div class="col-md-12">
      <div class="row">
        <div class="col-md-6 text-center">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">Total Revenue</h3>
              <apexchart
                type="bar"
                height="350"
                :options="barchartjs.morrisbar"
                :series="barchartjs.series"
              >
              </apexchart>
            </div>
          </div>
        </div>
        <div class="col-md-6 text-center">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">Sales Overview</h3>
              <div id="line-charts"></div>
              <apexchart
                type="line"
                height="350"
                :options="lineChart.morrisbar"
                :series="lineChart.series"
              >
              </apexchart>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-md-12">
      <div class="card-group m-b-30">
        <div class="card" v-for="(card, index) in cardList" :key="index">
          <div class="card-body">
            <div class="d-flex justify-content-between mb-3">
              <div>
                <span class="d-block">{{ card.title }}</span>
              </div>
              <div>
                <span :class="card.changeClass">{{ card.change }}</span>
              </div>
            </div>
            <h3 class="mb-3">{{ card.value }}</h3>
            <div class="progress height-five mb-2">
              <div
                class="progress-bar bg-primary w-70"
                role="progressbar"
                aria-valuenow="40"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <p class="mb-0">
              {{ card.previousMonthText }}
              <span class="text-muted">{{ card.previousMonthValue }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { barchartjs, lineChart } from "./data";

export default {
  data() {
    return {
      barchartjs: barchartjs,
      lineChart: lineChart,
      cardList: [
        {
          title: "New Employees",
          change: "+10%",
          changeClass: "text-success",
          value: "10",
          previousMonthText: "Overall Employees",
          previousMonthValue: "218",
        },
        {
          title: "Earnings",
          change: "+12.5%",
          changeClass: "text-success",
          value: "$1,42,300",
          previousMonthText: "Previous Month",
          previousMonthValue: "$1,15,852",
        },
        {
          title: "Expenses",
          change: "-2.8%",
          changeClass: "text-danger",
          value: "$8,500",
          previousMonthText: "Previous Month",
          previousMonthValue: "$7,500",
        },
        {
          title: "Profit",
          change: "-75%",
          changeClass: "text-danger",
          value: "$1,12,000",
          previousMonthText: "Previous Month",
          previousMonthValue: "$1,42,000",
        },
      ],
    };
  },
};
</script>
