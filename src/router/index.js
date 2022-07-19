import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CareersScoot from "../views/CareersScoot.vue";
import LocationsScoot from "../views/LocationsScoot.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/home",
			name: "home",
			component: HomeView,
		},
		{
			path: "/about",
			name: "about",
			component: () => import("../views/AboutScoot.vue"),
		},

		{
			path: "/careers",
			name: "careers",
			component: CareersScoot,
		},
		{
			path: "/locations",
			name: "locations",
			component: LocationsScoot,
		},
	],
});

export default router;
