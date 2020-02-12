<template>
  <section v-if="!loaded">
    <span>loading...</span>
  </section>
  <section v-else>
    <Hero v-bind:pageTitle="content.pageTitle" v-bind:image="content.heroImage" />
    <About v-bind:title="content.aboutTitle" v-bind:image="content.aboutImage" v-bind:description="content.aboutDescription" />
    <Promo v-bind:title="content.aboutTitle" v-bind:image="content.aboutImage" v-bind:description="content.aboutDescription" />
  </section>
</template>

<script>
import { Store } from "@/store/mecp";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Promo from '@/components/Promo';

import { flatten } from '@/helpers/flatten'

export default {
  name: "Home",
  components: {
    Hero,
    About,
    Promo
  },
  props: {
    url: String,
    pageType: String
  },
  data: () => ({
    content: Object
  }),
  computed: {
    loaded() {
      return Object.keys(this.content).length !== 0
    }
  },
  created() {},
  mounted: function() {
    Store.subscribe();
    Store.addChangeListener(this.onChange);
    Store.fetchFromCMS("home");
  },
  beforeDestroy: function() {
    Store.unsubscribe();
  },
  destroyed: function() {
    Store.removeChangeListener(this.onChange);
  },
  methods: {
    onChange: function() {
      const page = Store.get();
      if (page) {
        this.content = flatten(page);
      }
    }
  },
};
</script>

<style lang="scss">
@import '../assets/style/sass/config';
</style>