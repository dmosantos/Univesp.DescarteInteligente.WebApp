<script setup>



</script>

<template>
    <ul class="list">
        <li class="item" v-for="index in 20" :key="index">
            <div>
                <a class="show-in-map" href="javascript:void(0)">
                    <Icon symbol="geo-alt-fill" />
                </a>
            </div>
            <div class="details">
                <p class="id">#{{ index }}</p>
                <p class="name"><strong>Nome da Instituição</strong></p>
                <p class="address">Rua Duque de Caxias, 110 - Itajubá - MG - CEP 37503-012</p>
                <p class="phonenumber">
                    <Icon symbol="telephone" /> (35) 3233-7513
                </p>
            </div>
            <div class="buttons">
                <Button label="Editar" icon="pencil" />
                <Button label="Excluir" icon="dash-circle" color="danger" />
            </div>
        </li>
    </ul>
</template>

<style lang="scss" scoped>

.list {

    background-color: #fff;
    margin: 0;
    padding: 0 2rem;

    > .item {

        align-items: center;
        border-bottom: 1px solid #efefef;
        display: flex;
        list-style: none;
        margin-bottom: 0;
        padding: 2rem 0;

        > .details {

            flex-grow: 1;

            p { margin: 0 0 .4rem 0 }

            > .id {
                
                color: #999;
                font-size: 0.8rem;
                
            }

            .name {
                
                font-size: 1.2rem;
                font-weight: 700;
                
            }

        }

        > .buttons {

            display: flex;
            flex-direction: column;
            gap: 5px;

        }

        .show-in-map {

            fill: var(--theme-color);
            font-size: 2rem;
            padding: 0 3rem;

        }

    }

}

</style>