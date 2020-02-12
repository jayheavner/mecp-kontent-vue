<template>
  <section
    class="padding-top-lg"
    :style="backgroundStyles(image.url)" style="background-size: cover;"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-offset-3 col-lg-9">
          <h2>
            <p>{{title}}</p>
          </h2>
        </div>
      </div>
      <div class="row padding-vertical-lg">
        <div class="col-lg-offset-3 col-lg-9" v-html="description"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Promo",
  props: {
    title: String,
    image: Object,
    description: String
  },
  methods: {
    backgroundStyles(image) {
      return {
        "background-image": `url(${image})`
      };
    }
  }
};
</script>

<style lang="scss">
@import "../assets/style/sass/config";
@import "../assets/style/sass/base/headers";
</style>