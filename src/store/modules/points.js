import axios from "axios"

axios.defaults.baseURL = "https://coletadb.herokuapp.com"

// Initial state
const state = {

    points: []

}

// Getters
const getters = {

    getAll: state => state.points

}

// Setters
const mutations = {

    setPoints: (state, points) => state.points = points

}

// Methods
const actions = {

    getPoints: async ({commit}) => {
            
        const response = await axios.get('/')
        commit('setPoints', response.data.datahome)

    }

}

// Config
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}