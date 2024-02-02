<template>
    <div id="inventory-component">
        <div id="top">
            <div class="inventory-window"> <InventoryWindow /> </div>
            <div class="notifications-window"> <NotificationsWindow /> </div>
        </div>
        <div id="bottom">    
            <div class="daily-window"> <DailyWindow /> </div>
        </div>    
    </div>
</template>

<script>
import InventoryWindow from "../view_display_windows/InventoryWindow.vue";
import NotificationsWindow from "../view_display_windows/NotificationsWindow.vue";
import DailyWindow from "../view_display_windows/DailyWindow.vue";

export default {
    components: { InventoryWindow, NotificationsWindow, DailyWindow },
}
</script>

<style>
#top {
    display: flex;
    justify-content: center;
    position: relative;
}
</style>