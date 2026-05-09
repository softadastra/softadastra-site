import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import EcosystemPage from "../pages/EcosystemPage.vue";
import StackPage from "../pages/StackPage.vue";
import ProductPage from "../pages/ProductPage.vue";
import CompanyPage from "../pages/CompanyPage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
    meta: {
      title: "Softadastra | Reliable local-first infrastructure",
      description:
        "Softadastra builds reliable local-first infrastructure for applications that must keep working when the network fails.",
    },
  },
  {
    path: "/ecosystem",
    name: "ecosystem",
    component: EcosystemPage,
    meta: {
      title: "Ecosystem | Softadastra",
      description:
        "Explore the Softadastra ecosystem: Vix, Softadastra, Kordex, Cnerium, PulseGrid, and Softadastra Cloud.",
    },
  },
  {
    path: "/stacks/:id",
    name: "stack",
    component: StackPage,
    meta: {
      title: "Stack | Softadastra",
      description:
        "Explore a stack maintained under the Softadastra ecosystem.",
    },
  },
  {
    path: "/products/:id",
    name: "product",
    component: ProductPage,
    meta: {
      title: "Product | Softadastra",
      description:
        "Explore a product built around the Softadastra reliability foundation.",
    },
  },
  {
    path: "/company",
    name: "company",
    component: CompanyPage,
    meta: {
      title: "Company | Softadastra",
      description:
        "Softadastra Company maintains open runtime, sync, framework, and infrastructure projects while building commercial services around them.",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFoundPage,
    meta: {
      title: "Page not found | Softadastra",
      description:
        "The requested page could not be found on the Softadastra website.",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0,
      behavior: "smooth",
    };
  },
});

router.afterEach((to) => {
  document.title = to.meta.title || "Softadastra";

  const description = document.querySelector("meta[name='description']");

  if (description && to.meta.description) {
    description.setAttribute("content", to.meta.description);
  }
});

export default router;
