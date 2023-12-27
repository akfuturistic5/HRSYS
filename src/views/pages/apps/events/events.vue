<template>
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <!-- Page Content -->
      <div class="content container-fluid">
        <!-- Page Header -->
        <event-header :title="title" :path="path" :text="text" :text1="text1" />
        <!-- /Page Header -->

        <div class="row">
          <div class="col-lg-12">
            <div class="card mb-0">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-12">
                    <!-- Calendar -->
                    <FullCalendar
                      :options="calendarOptions"
                      :events="events"
                    ></FullCalendar>
                    <!-- /Calendar -->
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
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
export default {
  components: {
    FullCalendar,
  },
  data() {
    return {
      events: [],
      title: "Events",
      path: "Dashboard",
      text: "Events",
      text1: "Add Events",
      calendarOptions: {
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin, // needed for dateClick
        ],
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        },
        events: [
          {
            title: "10.02p Test Event 1",
            start: "2023-08-18",
          },
          {
            title: "7.55p Test Event 3",
            start: "2023-08-22",
          },
          {
            title: "Event Name 4  2.55a",
            start: "2023-08-23",
          },
          {
            title: "Test Event 2 8.29a",
            start: "2023-08-23",
          },
        ],

        initialView: "dayGridMonth",
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
      },
    };
  },
  name: "events",
};
</script>
