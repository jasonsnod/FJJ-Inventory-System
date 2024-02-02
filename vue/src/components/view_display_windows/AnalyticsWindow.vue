<template>
    <div id="analytics-window">
        <div class="analytics-border">
            <h1>Analytics Window</h1>
                <div class="analytics-text">
                    <p>This is a placeholder for analytics information.</p>
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
#analytics-window {
    padding: 10px;
    display: flex;
    justify-content: right;
    position: relative;
}

h1 {
    text-align: center;
    font-weight: bolder;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: medium;
}

.analytics-border {
    position: relative;
    border: 2px solid black;
    border-radius: 25px;
    padding: 10px;
    height: 500px;
    width: 400px;
}

.analytics-text {
    text-align: center;
    font-size: smaller; 
}
</style>