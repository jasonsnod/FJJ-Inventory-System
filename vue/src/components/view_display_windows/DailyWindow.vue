<template>
    <div id="daily-window">
        <div class="daily-border">
            <h1>Daily Window</h1>
                <div class="daily-text">
                    <p>This is a placeholder for daily information.</p>
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
#daily-window {
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

.daily-border {
    position: relative;
    border: 2px solid black;
    border-radius: 25px;
    padding: 10px;
    height: 40vh;
    width: 90vw;
}

.daily-text {
    text-align: center;
    font-size: smaller; 
}
</style>