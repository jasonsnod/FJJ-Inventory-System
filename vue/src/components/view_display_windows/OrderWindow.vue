<template>
    <div id="order-window">
        <div class="order-border">
            <h1>Order Window</h1>
                <div class="order-text">
                    <p>This is a placeholder for order information.</p>
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
#order-window {
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

.order-border {
    position: relative;
    border: 2px solid black;
    border-radius: 25px;
    padding: 10px;
    height: 30vh;
    width: 59vw;
}

.order-text {
    text-align: center;
    font-size: smaller; 
}
</style>