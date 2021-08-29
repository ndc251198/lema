//import axios from 'axios'

declare interface Service{
    id: string;
    name: string;
    price: string;
    unit: string;
  }

const state = { 
    services: [] as Service[]
};

const getters = { 
    getServices: state => state.services
};

const actions = { 
    async fetchServices({commit}){
      //const response = await axios.get("http://localhost:3000/users");
      const services = [
        {
          id : '1',
          name: 'demo',
          price: 'price',
          unit: 'unit'
        },
        {
          id : '2',
          name: 'demo',
          price: 'price',
          unit: 'unit'
        },
        {
          id : '3',
          name: 'demo',
          price: 'price',
          unit: 'unit'
        },
        {
          id : '4',
          name: 'demo',
          price: 'price',
          unit: 'unit'
        },
        {
          id : '5',
          name: 'demo',
          price: 'price',
          unit: 'unit'
        },
        {
          id : '6',
          name: 'demo',
          price: 'price',
          unit: 'unit'
        },
      ]
      commit('setServices', services)
    },
    async addServices({commit}, service: Service){
      //const response = await axios.post("http://localhost:3000/users", user);
      commit("addNewService", service)
    },
    async removeService({commit}, id: string){
      //await axios.delete(`http://localhost:3000/users/${id}`);
      console.log(id)
      commit("removeService", id)
    }
};

const mutations = { 
    setServices: (state: any, services: Service[]) => (
        state.services = services
    ),
    addNewService: (state: any, service: Service) => state.services.unshift(service),
    removeService: (state: any, id: string) => (
        state.services.filter((service: Service) => service.id !== id),
        state.services.splice((service: Service) => service.id, 1)
    )
};

export default {
    state,
    getters,
    actions,
    mutations
}