//import axios from 'axios'

declare interface Room{
    type: string;
    status: boolean;
    total: number;
    empty: number;
    roomInfor: RoomInfor[];
}

declare interface RoomInfor{
    roomId: string;
    floor: string;
    dayAvailable: Array<boolean>;
    dayFee: number;
  }

const state = { 
    rooms: [] as Room[],
    cardSelected: 0
};

const getters = { 
    getRooms: state => state.rooms,
    getRoomInfor: state => state.rooms[state.cardSelected].roomInfor,
    getCardSelected: state => state.cardSelected
};

const actions = { 
    async fetchRooms({commit}){
      //const response = await axios.get("http://localhost:3000/users");
      const rooms = [{
        type: 'cao cap',
        status: true,
        total: 10,
        empty: 1,
        roomInfor : [{
            roomId: '1',
            floor: '1',
            dayAvailable: [true, false, true, true],
            dayFee: 1
          },
          {
            roomId: '2',
            floor: '1',
            dayAvailable: [true, false, true, true],
            dayFee: 50
          },
          {
            roomId: '3',
            floor: '4',
            dayAvailable: [true, false, true, true],
            dayFee: 1
          }]
      }, {
        type: 'cao cap',
        status: false,
        total: 10,
        empty: 1,
        roomInfor : [{
            roomId: '4',
            floor: '4',
            dayAvailable: [true, false, true, true],
            dayFee: 1
          },
          {
            roomId: '5',
            floor: '4',
            dayAvailable: [true, false, true, true],
            dayFee: 50
          },
          {
            roomId: '6',
            floor: '4',
            dayAvailable: [true, false, true, true],
            dayFee: 1
          }]
      }]

      commit('setRooms', rooms)
    },
    addRoomInfor({commit}, roomInfor: RoomInfor){
      //const response = await axios.post("http://localhost:3000/users", user);
      commit("addNewRoomInfor", roomInfor)
    },
    setCardSelected({commit}, index: number) {
      commit("setCardSelected", index)
    }
};

const mutations = { 
    setRooms: (state: any, rooms: Room[]) => (
        state.rooms = rooms
    ),
    addNewRoomInfor: (state: any, roomInfor: RoomInfor) => {
        state.rooms[state.cardSelected].roomInfor.unshift(roomInfor)
    },
    setCardSelected: (state, index: number) => state.cardSelected = index

};

export default {
    state,
    getters,
    actions,
    mutations
}