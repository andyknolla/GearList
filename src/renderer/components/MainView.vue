<template>
  <div id='MainView'>
    <div id='Topbar'>
      <h3>Top bar</h3>
    </div>
    <div id='listHeader'>
      <div id='listTitle'>
        <h3>Indian Creek </h3>
        <span class='season'> - Fall</span>
      </div>
      <p>Climbing trip</p>
      <p class='trip-date'>July 29th 2018</p>
    </div>
    <div id='ListArea'>

      <div class='category'>
        <div class='category-header'>
          <h4>Climbing</h4>
          <button class='show-form'>+</button>
        </div>
        <form class='new-item-form' >
          <input type='checkbox' class='packed'/>
          <input id='name' type='text' class='name-input' v-model='itemName'>
          <div class='new-item-buttons'>
            <button type='button' name='addItem' @click='newItem()'>Add Item</button>
          </div>
        </form>

        <ul id='itemList'>
          <li v-for='item in allItems' class='list-item'>
            <div class='item-left'>
              <input type='checkbox' class='packed' />
              <p>{{ item.name }}</p>
            </div>
            <button class='delete'>X</button>
          </li>
        </ul>
      </div>

    </div>
    <button type='button' name='deleteAll' @click='clearItems()'>Clear item list</button>


      <!-- For Vuex testing -->
    <div>
      <h3>State test</h3>
      <button type='button' name='increase' @click='increase()'>increase</button>
      <button type='button' name='addItem' @click='decrement()'>decrease</button>
      <div> Test Counter: {{ main }}</div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'main-view',
    data() {
      return {
        itemName: '',
      };
    },
    computed: {
      ...mapGetters([
        'allItems',
        'main',
      ]),
    },
    beforeMount() {
      this.$store.dispatch('loadItems');
    },
    methods: {
      open(link) {
        this.$electron.shell.openExternal(link);
      },
      newItem() {
        this.$store.dispatch('addItem');
        this.$db.models.item.create({
          name: this.itemName,
          packed: false,
        });
        console.log('LandingPage this: ', this, 'db: ', this.$db);
      },
      clearItems() {
        this.$store.dispatch('deleteAll');
      },
      increase() {
        this.$store.dispatch('increase');
      },
      decrement() {
        this.$store.dispatch('decrease');
      },
    },
  };
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  #MainView {
    background: lightyellow;
    height: 100%;
  }
  #Topbar {
    background: white;
    height: 30px;
    padding: 0 15px;
    border-bottom: 1px solid lightgray;
  }
  #ListArea {
    background: white;
    padding: 15px;
  }

  #listHeader {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    align-items: center;
    white-space: nowrap;
    padding: 5px 15px;
  }

  #listTitle {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
  }

  .season {
    font-weight: 300;
    color: gray;
  }
  .trip-date {
    text-align: right;
  }

  .category-header {
    display: flex;
  }
  .show-form {
  }
  .new-item-form {
    display: flex;
    align-items: flex-end;
  }
  .name-input {
    margin-right: 20px;
    height: 15px;
    border: 1px solid lightgray;
    border-radius: 3px;
  }

  #itemList li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    border-bottom: 1px solid lightgray;
  }
  .delete {
    font-size: 8px;
    height: 12px;
    width: 12px;
  }

  .item-left {
    display: flex;
    align-items: center;

  }

  .packed {
    margin-right: 5px;
  }

</style>
