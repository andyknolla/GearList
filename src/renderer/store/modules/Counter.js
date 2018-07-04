import db from '../../datastore';

const state = {
  main: 0,
  items: [],
};

const getters = {
  allItems: state => state.items,
  main: state => state.main,
};

const mutations = {
  LOAD_ITEMS(state, items) {
    state.items = items;
  },
  ADD_ITEM(state, itemName) {
    state.items.push(
      {
        name: itemName,
        packed: false,
      },
    );
  },
  DELETE_ITEMS(state) {
    state.items = [];
  },
  // test stuff
  DECREMENT_MAIN_COUNTER(state) {
    state.main -= 1;
  },
  INCREMENT_MAIN_COUNTER(state) {
    state.main += 1;
  },
};

const actions = {
  loadItems({ commit }) {
    db.models.item.findAll().then( (items) => {
      commit('LOAD_ITEMS', items);
    });
  },
  addItem({ commit }, itemName) {
    db.models.item.create({
      name: itemName,
      packed: false,
    });
    commit('ADD_ITEM', itemName);
  },
  deleteAll({ commit }) {
    commit('DELETE_ITEMS');
  },
  // test stuff
  increase({ commit }) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER');
  },
  decrease({ commit }) {
    // do something async
    commit('DECREMENT_MAIN_COUNTER');
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
