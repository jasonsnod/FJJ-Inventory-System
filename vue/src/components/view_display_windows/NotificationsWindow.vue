<template>
    <div id="notifications-window">
        <div class="notifications-border">
            <h1>Notifications Window</h1>
                <div class="notifications-text">
                    <p>This is a placeholder for notifications information.</p>
                </div>
        </div> 
    </div>
</template>

<script>
export default {
    data() {
    }
};
</script>

<style scoped>
#notifications-window {
    padding: 10px;
    display: flex;
    justify-content: center;
    position: relative;
}

h1 {
    text-align: center;
    font-weight: bolder;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: medium;
}

.notifications-border {
    position: relative;
    border: 2px solid black;
    border-radius: 25px;
    padding: 10px;
    height: 30vh;
    width: 28vw;
}

.notifications-text {
    text-align: center;
    font-size: smaller; 
}
</style>