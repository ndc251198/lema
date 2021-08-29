//import axios from 'axios'

declare interface Partner{
    name: string;
    id: string;
    phone: string;
    nation: string;
    email: string;
    address: string;
}

const state = { 
    partners: [] as Partner[]
};

const getters = { 
    getPartners: state => state.partners
};

const actions = { 
    async fetchPartners({commit}){
      //const response = await axios.get("http://localhost:3000/users");
      
      const partners = [
        {
            name: 'name1',
            id: 'id1',
            phone: '12345',
            nation: 'VN',
            email: 'asdada@gmail.com',
            address: 'address',
        },
        {
            name: 'name1',
            id: 'id2',
            phone: '12345',
            nation: 'VN',
            email: 'asdada@gmail.com',
            address: 'address',
        },
        {
            name: 'name1',
            id: 'id3',
            phone: '12345',
            nation: 'VN',
            email: 'asdada@gmail.com',
            address: 'address',
        },
        {
            name: 'name1',
            id: 'id4',
            phone: '12345',
            nation: 'VN',
            email: 'asdada@gmail.com',
            address: 'address',
        },
        {
            name: 'name1',
            id: 'id5',
            phone: '12345',
            nation: 'VN',
            email: 'asdada@gmail.com',
            address: 'address',
        },
        {
            name: 'name1',
            id: 'id6',
            phone: '12345',
            nation: 'VN',
            email: 'asdada@gmail.com',
            address: 'address',
        },
    ]
      commit('setPartners', partners)
    },
    async addPartners({commit}, partner: Partner){
      //const response = await axios.post("http://localhost:3000/users", user);
      commit("addNewPartner", partner)
    },
    async updatePartners({commit}, partner: Partner){
        commit("updatePartner", partner)
    }
};

const mutations = { 
    setPartners: (state: any, partners: Partner[]) => (
        state.partners = partners
    ),
    addNewPartner: (state: any, partner: Partner) => state.partners.unshift(partner),
    updatePartner: (state, partner: Partner) => {
        const objIndex = state.partners.findIndex((obj => obj.id == partner.id))
        state.partners[objIndex].name = partner.name
        state.partners[objIndex].email = partner.email
        state.partners[objIndex].nation = partner.nation

    }
};

export default {
    state,
    getters,
    actions,
    mutations
}