<template>
    <div id="core-component">
        <div class="pending-task-window"> <PendingTaskWindow /> </div>
        <div class="notifications-window"> <NotificationsWindow /> </div>
        <div class="analytics-window"> <AnalyticsWindow /> </div>
        <div class="daily-window"> <DailyWindow /> </div>
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

<style scoped>
#core-component {
}

.pending-task-window {
}

.notifications-window {
}

.analytics-window {
}

.daily-window {
}
</style>