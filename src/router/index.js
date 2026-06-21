import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import EcosystemPage from "../pages/EcosystemPage.vue";
import StackPage from "../pages/StackPage.vue";
import ToolingPage from "../pages/ToolingPage.vue";
import CompanyPage from "../pages/CompanyPage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
    meta: {
      title: "Softadastra | The C++ Tooling Company",
      description:
        "Softadastra builds and maintains open C++ tooling to make modern C++ development simpler, faster, and more accessible.",
    },
  },
  {
    path: "/ecosystem",
    name: "ecosystem",
    component: EcosystemPage,
    meta: {
      title: "Ecosystem | Softadastra",
      description:
        "Explore the Softadastra C++ tooling ecosystem: Vix.cpp, Softadastra Engine, Cnerium, Kordex, and Pico.",
    },
  },
  {
    path: "/stacks/:id",
    name: "stack",
    component: StackPage,
    meta: {
      title: "Stack | Softadastra",
      description:
        "Explore a technical layer maintained inside the Softadastra C++ tooling ecosystem.",
    },
  },
  {
    path: "/tooling/:id",
    name: "tooling",
    component: ToolingPage,
    meta: {
      title: "Tooling | Softadastra",
      description:
        "Explore open tooling maintained by Softadastra for modern C++ development.",
    },
  },
  {
    path: "/products/:id",
    redirect: (to) => {
      return {
        name: "tooling",
        params: {
          id: to.params.id,
        },
      };
    },
  },
  {
    path: "/company",
    name: "company",
    component: CompanyPage,
    meta: {
      title: "Company | Softadastra",
      description:
        "Softadastra is a C++ tooling company building and maintaining open tools for modern C++ development.",
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
