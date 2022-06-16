<script setup>

import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

let loading = ref(true)

const getPoints = async () => {
    
    await store.dispatch('points/getPoints')
    
    loading.value = false
}

getPoints()

</script>

<template>
    <div class="points-list">
        
        <ul class="list" v-if="!loading">
            <li class="item" v-for="(point, index) in store.getters['points/getAll']" :key="index">
                <div>
                    <a class="show-in-map" href="javascript:void(0)">
                        <Icon symbol="geo-alt-fill" />
                    </a>
                </div>
                <div class="details">
                    <p class="id">#{{ point.id }}</p>
                    <p class="name"><strong>{{ point.name }}</strong></p>
                    <p class="address">{{ point.address }} - {{ point.cep }}</p>
                    <p class="phonenumber">
                        <Icon symbol="telephone" /> {{ point.phone }}
                    </p>
                </div>
                <div class="buttons">
                    <Button label="Editar" icon="pencil" />
                    <Button label="Excluir" icon="dash-circle" color="danger" />
                </div>
            </li>
        </ul>

        <div class="loading" v-if="loading">
            <Loading />
        </div>

    </div>
</template>

<style lang="scss" scoped>

.points-list { flex-grow: 1 }

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