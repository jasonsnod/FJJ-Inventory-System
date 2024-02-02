<template>
    <div id="pending-task-window">
        <div class="pending-task-border">
            <h1>Pending Tasks Window</h1>
                <div class="pending-task-text">
                    <p>This is a placeholder for pending task information.</p>
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
#pending-task-window {
    padding: 10px;
    display: flex;
    justify-content: left;
    position: relative;
}

h1 {
    text-align: center;
    font-weight: bolder;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: medium;
}

.pending-task-border {
    position: relative;
    border: 2px solid black;
    border-radius: 25px;
    padding: 10px;
    height: 500px;
    width: 400px;
}

.pending-task-text {
    text-align: center;
    font-size: smaller; 
}
</style>