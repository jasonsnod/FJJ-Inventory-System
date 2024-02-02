<template>
    <div id="inventory-window">
        <div class="inventory-border">
            <h1>Inventory Window</h1>
                <div class="inventory-text">
                    <p>This is a placeholder for inventory information.</p>
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
#inventory-window {
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

.inventory-border {
    position: relative;
    border: 2px solid black;
    border-radius: 25px;
    padding: 10px;
    height: 500px;
    width: 844px;
}

.inventory-text {
    text-align: center;
    font-size: smaller; 
}
</style>