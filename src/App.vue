<script>
import component_stage from "./components/stage.vue";
import mainHero from "./components/mainHero.vue";
import mainFunction from "./components/mainFunction.vue";
import mainDownload from "./components/mainDownload.vue";
import mainFooter from "./components/mainFooter.vue";
import mainHeader from "./components/mainHeader.vue";


export default {
	components: {
		component_stage,
		mainHero,
		mainFunction,
		mainDownload,
		mainFooter,
		mainHeader,
	}
}

</script>

<template>

	<header>
		<mainHeader />
	</header>
	<RouterView />
	<main>
		<mainDownload />
	</main>

	<footer>
		<mainFooter />
	</footer>


</template>

<style scoped>
</style>

