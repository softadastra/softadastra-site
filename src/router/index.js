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
    path: "/stacks",
    redirect: "/ecosystem",
  },
  {
    path: "/stacks/softadastra",
    redirect: "/stacks/softadastra-engine",
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

function setMeta(selector, attribute, value) {
  const element = document.querySelector(selector);

  if (element && value) {
    element.setAttribute(attribute, value);
  }
}

router.afterEach((to) => {
  const title = to.meta.title || "Softadastra | The C++ Tooling Company";
  const description =
    to.meta.description ||
    "Softadastra builds the tools C++ teams use to create, run, extend, and manage modern applications with Vix.cpp, Rix, and Softadastra Cloud.";
  const url = new URL(to.fullPath, "https://softadastra.com").toString();

  document.title = title;
  setMeta("meta[name='description']", "content", description);
  setMeta("link[rel='canonical']", "href", url);
  setMeta("meta[property='og:title']", "content", title);
  setMeta("meta[property='og:description']", "content", description);
  setMeta("meta[property='og:url']", "content", url);
  setMeta("meta[name='twitter:title']", "content", title);
  setMeta("meta[name='twitter:description']", "content", description);
});

export default router;
