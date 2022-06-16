<script setup>



</script>

<template>
    <div class="global-loading">

        <div class="spinner"></div>

    </div>
</template>

<style lang="scss" scoped>


.global-loading {

    align-items: center;
    display: flex;
    justify-content: center;

}

.spinner {

    animation: spinner .5s linear infinite;
    border: 3px solid var(--theme-color);
    border-top-color: transparent;
    border-radius: 50%;
    height: 30px;
    width: 30px;

}

@keyframes spinner {

    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }

}

</style>