<script setup>



</script>

<template>
    <div id="home" class="app-menu">
        <div class="container">
            
            <div class="logo">
                <Icon class="icon" symbol="recycle" />
                <span>Descarte Inteligente</span>
            </div>

            <menu class="menu">
                <a class="item" href="#home">Home</a>
                <a class="item" href="#new-point">Cadastrar Ponto de Coleta</a>
                <a class="item" href="#about">Sobre</a>
            </menu>


        </div>
    </div>
</template>

<style lang="scss" scoped>

.app-menu {

    background-color: rgba(0, 0, 0, .8);
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 9999;

    .container {

        align-items: stretch;
        display: flex;
        justify-content: space-between;
        max-width: 900px;
        margin: 0 auto;

    }

}

.logo {

    align-items: center;
    color: #fff;
    display: flex;
    font-size: 1.2rem;
    font-weight: 700;
    fill: #fff;
    padding: 1rem 0;
    text-transform: uppercase;

    .icon {
        
        font-size: 2rem;
        margin-right: .5rem;
    
    }

}

.menu {

    align-items: stretch;
    display: flex;
    margin: 0;
    padding: 0;

    .item {

        align-items: center;
        color: #fff;
        display: flex;
        padding: 0 1rem;

        &:hover {

            background-color: rgba(255, 255, 255, .15);
            text-decoration: none;

        }

    }

}

</style>