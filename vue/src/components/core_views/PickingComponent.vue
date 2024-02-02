<template>
    <div id="picking-component">
        <div id="top">
            <div class="order-window"> <OrderWindow /> </div>
            <div class="notifications-window"> <NotificationsWindow /> </div>
        </div>
        <div id="bottom">    
            <div class="daily-window"> <DailyWindow /> </div>
        </div>    
    </div>
</template>

<script>
import OrderWindow from "../view_display_windows/OrderWindow.vue";
import NotificationsWindow from "../view_display_windows/NotificationsWindow.vue";
import DailyWindow from "../view_display_windows/DailyWindow.vue";

export default {
    components: { OrderWindow, NotificationsWindow, DailyWindow },
}
</script>

<style>
#top {
    display: flex;
    justify-content: center;
    position: relative;
}
</style>