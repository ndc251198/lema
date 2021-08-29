//import axios from 'axios'

declare interface Hotel{
    nameHotel: string;
    idHotel: string;
}

const state = { 
    hotels: [] as Hotel[]
};

const getters = { 
    getHotels: state => state.hotels
};

const actions = { 
    async fetchHotels({commit}){
      //const response = await axios.get("http://localhost:3000/users");
      const hotels = [{
        nameHotel: 'hotel1',
        idHotel: '1'
      },
      {
        nameHotel: '2',
        idHotel: '3'
      }]
      commit('setHotels', hotels)
    },
    async addHotels({commit}, hotel: Hotel){
      //const response = await axios.post("http://localhost:3000/users", user);
      commit("addNewHotel", hotel)
    },
    async deleteHotels({commit}, id: string){
      //await axios.delete(`http://localhost:3000/users/${id}`);
      commit("removeHotel", id)
    }
};

const mutations = { 
    setHotels: (state: any, hotels: Hotel[]) => (
        state.hotels = hotels
    ),
    addNewHotel: (state: any, hotel: Hotel) => state.hotels.unshift(hotel),
    removeHotel: (state: any, id: string) => (
        state.hotels.filter((hotel: Hotel) => hotel.idHotel !== id),
        state.hotels.splice((hotel: Hotel) => hotel.idHotel, 1)
    )
};

export default {
    state,
    getters,
    actions,
    mutations
}