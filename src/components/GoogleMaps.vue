<script setup>

import { ref, computed } from 'vue'
import axios from "axios"
import { useStore } from 'vuex'
import { GoogleMap, Marker, InfoWindow } from "vue3-google-map"

const API_KEY = 'AIzaSyDc0yNl0tCNyXxm27SoC_Eg9Ze1Z_bPXOk'
const store = useStore()
const center = ref({ lat: -22.907104, lng: -47.063240 })

const markers = ref([])

navigator.geolocation.getCurrentPosition(
    position => {
        center.value = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }
        markers.value.push({
            position: center.value,
            label: {
                text: "Você",
                color: 'white',
                fontWeight: "bold",
                className: "marker-label"
            },
            title: "Você está aqui!"
        })
    },
    error => {
        console.log(error.message);
    }
)

store.dispatch('points/getPoints')

store.getters['points/getAll'].map(point => {
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${point.address},${point.cep}&key=${API_KEY}`)
        .then(response => {
            markers.value.push({
                position: {
                    lat: response.data.results[0].geometry.location.lat,
                    lng: response.data.results[0].geometry.location.lng
                },
                label: {
                    text: point.name,
                    color: 'white',
                    fontWeight: "bold",
                    className: "marker-label"
                },
                title: point.name,
                content: point.address
            })
        })
        .catch(error => {
            console.log(error);
        })
})

</script>

<template>
    <GoogleMap class="google-map" :api-key="API_KEY" :center="center" :zoom="15">
        
        <Marker v-for="(marker, index) in markers"
            :key="index"
            :options="marker"
        >
            
        <InfoWindow>
                <div class="info-window">
                    <h1 class="title">{{ marker.title }}</h1>
                    <div>{{ marker.content }}</div>
                </div>
            </InfoWindow>

        </Marker>

    </GoogleMap>
</template>

<style lang="scss" scoped>

.info-window {

    padding: 1rem;

    .title {

        font-size: 1.5rem;
        margin: 0 0 1rem 0;

    }

}

.google-map {

    height: 70vh;
    min-height: 500px;
    width: 100%;

}

</style>

<style>

.marker-label {

    background-color: var(--theme-color);
    border-radius: 5px;
    padding: 5px;

}

</style>