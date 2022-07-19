<script>
import component_stage from "./components/stage.vue";
import mainHero from "./components/mainHero.vue";
import mainFunction from "./components/mainFunction.vue";
import mainDownload from "./components/mainDownload.vue";
import mainFooter from "./components/mainFooter.vue";


export default {
  components: {
    component_stage,
    mainHero,
    mainFunction,
    mainDownload,
    mainFooter,
}
}

</script>

<template>
<!-- {{ router }} -->

  <!-- <header> -->
    <RouterView />
  <!-- </header> -->

  <!-- <main>
    <mainHero />
    <component_stage />
    <mainFunction />
    <mainDownload />
    <mainFooter />
  </main> -->


</template>

<style scoped>
</style>

