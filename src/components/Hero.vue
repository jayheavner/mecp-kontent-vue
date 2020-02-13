<template>
  <section class="bg-hero full-height home container-fluid">
    <img title="MECP" :src="image.url" alt="MECP" />
    <div id="mission-statement" class="content sticky-item">
      <h1 class="title">
        <p v-html="pageTitle"></p>
      </h1>
      <br /><br />
      <div class="buttons container">
        <div class="col-md-6 col-lg-4">
          <a class="btn btn-primary btn-lg outline" href="/Professionals.html">PROFESSIONALS</a>
        </div>
        <div class="col-md-6 col-lg-4">
          <a class="btn btn-primary btn-lg outline" href="/Employers.html">EMPLOYERS</a>
        </div>
        <div class="col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-0">
          <a class="btn btn-primary btn-lg outline" href="/Vehicle-Owners.html">VEHICLE OWNERS</a>
        </div>
      </div>
    </div>
    <a class="scroll-down-button icon-down-arrow" href="/index.html#aboutMECP"></a>
  </section>
</template>

<script>

export default {
  name: "Hero",
  props: {
    image: Object,
    pageTitle: String,
  },
  data: () => ({ imageUrl: String }),
  mounted: function() {
    debugger;
    this.url = this.image.url;
  },
};
</script>

<style lang="scss">
@import '../assets/style/hero/style.scss';
</style>