<template>
  <div id='container'>
    <!-- <h1>Container</h1> -->
    <Sidebar />
    <MainView />
    <RightDrawer />

  </div>
</template>

<script>
  import MainView from './MainView';
  import Sidebar from './Sidebar';
  import RightDrawer from './RightDrawer';

  export default {
    components: {
      MainView,
      Sidebar,
      RightDrawer,
    },
  };

</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  body {
    font-family: 'Source Sans Pro', arial sans-serif;
    color: #292929;
  }

  #container {
    position: absolute;
    height: 100%;
    display: grid;
    grid-template-columns: 2fr 7fr 1fr;
    grid-template-rows: auto;
  }

</style>
