<template>
  <div id='wrapper'>
    <main>
      <h1>Gear List</h1>

      <!-- form for adding items -->
      <form class='' >
        <label for='name'>Item name</label>
        <input id='name' type='text' name='' value=''>
      </form>
      <button type='button' name='addItem'>Add Item</button>

      <!--  list of items -->
      <ul id='itemList'>

      </ul>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'landing-page',
    methods: {
      open(link) {
        this.$electron.shell.openExternal(link);
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
