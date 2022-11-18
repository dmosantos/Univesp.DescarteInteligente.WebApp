<script setup>

import AppMenu from './AppMenu.vue'

</script>

<template>
    <header class="app-header">

        <AppMenu />

        <div class="content">

            <Icon class="icon" symbol="recycle" />
            <h1 class="title">Descate de Óleo Inteligente</h1>
            <p>Encontre um ponto de coleta de óleo próximo a você!</p>

        </div>

    </header>
</template>

<style lang="scss" scoped>

.app-header {

    background-color: #f4f8fb;
    text-align: center;
    
    > .content {
        
        padding: 8rem 0 14rem 0;

        > .icon {
            
            fill: var(--theme-color);
            font-size: 4rem;
            
        }
        
        > .title { margin: 1rem 0 .5rem 0 }
        p { margin: 0 }

    }

}

</style>