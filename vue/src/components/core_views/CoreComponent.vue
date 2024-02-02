<template>
    <div id="core-component">
        <div id="top">
            <div class="pending-task-window"> <PendingTaskWindow /> </div>
            <div class="notifications-window"> <NotificationsWindow /> </div>
            <div class="analytics-window"> <AnalyticsWindow /> </div>
        </div>
        <div id="bottom">    
            <div class="daily-window"> <DailyWindow /> </div>
        </div>    
    </div>
</template>

<script>
import PendingTaskWindow from "../view_display_windows/PendingTaskWindow.vue";
import NotificationsWindow from "../view_display_windows/NotificationsWindow.vue";
import AnalyticsWindow from "../view_display_windows/AnalyticsWindow.vue";
import DailyWindow from "../view_display_windows/DailyWindow.vue";

export default {
    components: { PendingTaskWindow, NotificationsWindow, AnalyticsWindow, DailyWindow },
}
</script>

<style>
#top {
    display: flex;
    justify-content: center;
    position: relative;
}
</style>