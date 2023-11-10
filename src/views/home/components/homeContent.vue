<template>
  <div class="content">
    <span class="typed-text"></span>
  </div>
</template>

<script lang="js">
import Typed from 'typed.js';
export default {
    props: {
    },
    components: {},
    data() {
        return {

        }
    },
    created() {

    },
    mounted() {
      // this.initTyped()
    },
    computed: {

    },
    methods: {
        initTyped() {
          new Typed('.typed-text', {
            strings: ['Hello, World!', 'Welcome to Typed.js'],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true
          });
        },
    },
}
</script>

<style scoped lang="scss">
.content {
  height: calc(100vh - 80px);
  width: 100%;
  background-color: rgb(236, 237, 237);
}
</style>
