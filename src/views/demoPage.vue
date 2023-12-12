<template>
  <div>
    <div id="app">
      <div class="container" v-scroll="handleScroll">
        <div class="content">
          <div class="item" v-for="item in items" :key="item.id">
            {{ item.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  data() {
    return {
      items: _.range(1, 50).map((i) => ({ id: i, text: `Item ${i}` })),
    };
  },
  methods: {
    handleScroll(event) {
      const scrollPosition = event.target.scrollTop;
      if (scrollPosition > 100) {
        this.$refs.container.classList.add("scrolled-1");
      } else if (scrollPosition > 200) {
        this.$refs.container.classList.add("scrolled-2");
      } else {
        this.$refs.container.classList.remove("scrolled-1", "scrolled-2");
      }
    },
  },
  mounted() {
    this.$refs.container.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    this.$refs.container.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped lang="scss">
.container {
  overflow-y: auto;
  height: 500px;
  transition: transform 0.3s ease-in-out;
}

.content {
  padding: 20px;
}

.item {
  margin-bottom: 20px;
}
</style>
