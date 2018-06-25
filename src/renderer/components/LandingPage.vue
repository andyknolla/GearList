<template>
  <div id='wrapper'>
    <main>
      <h1>Gear List</h1>

      <!-- form for adding items -->
      <form class='' >
        <label for='name'>Item name</label>
        <input id='name' type='text' name='' v-model='itemName'>
      </form>
      <button type='button' name='addItem' @click='newItem()'>Add Item</button>
      <button type='button' name='deleteAll' @click='clearItems()'>Clear item list</button>

      <button type='button' name='increase' @click='increase()'>increase</button>
      <button type='button' name='addItem' @click='decrement()'>decrease</button>

      <div> Main: {{ main }}</div>
      <!--  list of items -->

      <ul id='itemList'>
        <li v-for='item in allItems' >
          one item: {{ item.name }}
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'landing-page',
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

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  #wrapper {

  }
</style>
