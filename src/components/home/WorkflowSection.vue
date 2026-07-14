<template>
  <section ref="root" class="wf sd-section">
    <div class="sd-section__inner wf__inner">
      <header class="wf__header" data-reveal>
        <div class="wf__heading">
          <p class="wf__eyebrow">
            <span aria-hidden="true" />
            Workflow
          </p>

          <h2>
            One local project.
            <span>A continuous path to the team.</span>
          </h2>
        </div>

        <div class="wf__intro">
          <p>
            Start with a native C++ application, add reusable Rix capabilities,
            verify the project locally, then share package, lockfile, and build
            context through Softadastra Cloud.
          </p>

          <div class="wf__rules">
            <span>
              <i aria-hidden="true" />
              Source stays local
            </span>

            <span>
              <i aria-hidden="true" />
              Builds stay local
            </span>

            <span>
              <i aria-hidden="true" />
              Team context stays connected
            </span>
          </div>
        </div>
      </header>

      <div
        class="wf-board"
        data-reveal
        aria-label="Animated Softadastra workflow from local project creation to team operations"
      >
        <div class="wf-board__pattern" aria-hidden="true" />

        <header class="wf-board__topbar">
          <div class="wf-project">
            <span class="wf-project__mark" aria-hidden="true">C++</span>

            <div>
              <strong>native-service</strong>
              <small>Softadastra workflow session</small>
            </div>
          </div>

          <div class="wf-board__context">
            <span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.9"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M6 3v12" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="6" r="3" />
                <path d="M9 18h3a6 6 0 0 0 6-6V9" />
              </svg>

              main
            </span>

            <span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.9"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <path d="M7 8h10M7 12h6M7 16h8" />
              </svg>

              release
            </span>
          </div>

          <div class="wf-board__connection">
            <span class="wf-board__connection-dot" aria-hidden="true" />

            <div>
              <strong>Workflow active</strong>
              <small>local → team context</small>
            </div>
          </div>
        </header>

        <!-- Animated route -->
        <div class="wf-route">
          <div class="wf-route__line" aria-hidden="true">
            <span class="wf-route__line-progress" />
            <span class="wf-route__packet">
              <i />
            </span>
          </div>

          <div class="wf-route__steps">
            <article
              v-for="step in steps"
              :key="step.number"
              class="wf-route-step"
              :class="`wf-route-step--${step.tone}`"
              :style="{ '--phase': step.phase }"
            >
              <span class="wf-route-step__number">
                {{ step.number }}
              </span>

              <span class="wf-route-step__icon">
                <component :is="step.icon" />
              </span>

              <div>
                <strong>{{ step.label }}</strong>
                <small>{{ step.short }}</small>
              </div>

              <span class="wf-route-step__state">
                {{ step.state }}
              </span>
            </article>
          </div>
        </div>

        <!-- Main workflow workspace -->
        <div class="wf-workspace">
          <!-- Files -->
          <aside class="wf-files">
            <header class="wf-files__header">
              <div>
                <span>Project</span>
                <strong>native-service</strong>
              </div>

              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </header>

            <div class="wf-files__tree">
              <div class="wf-file wf-file--folder">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  aria-hidden="true"
                >
                  <path d="M3 6h6l2 2h10v11H3z" />
                </svg>

                <span>src</span>
              </div>

              <div class="wf-file wf-file--nested">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  aria-hidden="true"
                >
                  <path d="M6 3h9l3 3v15H6z" />
                  <path d="M15 3v4h4" />
                </svg>

                <span>main.cpp</span>
                <small>M</small>
              </div>

              <div class="wf-file">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  aria-hidden="true"
                >
                  <path d="M6 3h9l3 3v15H6z" />
                  <path d="M15 3v4h4" />
                </svg>

                <span>vix.app</span>
                <small>A</small>
              </div>

              <div class="wf-file">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  aria-hidden="true"
                >
                  <path d="M6 3h9l3 3v15H6z" />
                  <path d="M15 3v4h4" />
                </svg>

                <span>vix.lock</span>
                <small>A</small>
              </div>

              <div class="wf-file wf-file--folder">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  aria-hidden="true"
                >
                  <path d="M3 6h6l2 2h10v11H3z" />
                </svg>

                <span>.vix</span>
              </div>

              <div class="wf-file wf-file--nested">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  aria-hidden="true"
                >
                  <path d="M6 3h9l3 3v15H6z" />
                  <path d="M15 3v4h4" />
                </svg>

                <span>cloud.json</span>
                <small>A</small>
              </div>
            </div>

            <div class="wf-files__status">
              <div>
                <span class="wf-files__status-dot" aria-hidden="true" />
                <strong>Local workspace</strong>
              </div>

              <small>4 tracked files</small>
            </div>
          </aside>

          <!-- Animated command runner -->
          <section class="wf-runner">
            <header class="wf-runner__header">
              <div class="wf-runner__tabs">
                <span class="wf-runner__tab wf-runner__tab--active">
                  Workflow
                </span>
                <span class="wf-runner__tab">Output</span>
                <span class="wf-runner__tab">Diagnostics</span>
              </div>

              <span class="wf-runner__local">
                <i aria-hidden="true" />
                Local execution
              </span>
            </header>

            <div class="wf-runner__screen">
              <article
                v-for="run in runs"
                :key="run.number"
                class="wf-run"
                :class="`wf-run--${run.tone}`"
                :style="{ '--phase': run.phase }"
              >
                <header class="wf-run__header">
                  <div>
                    <span>{{ run.number }} · {{ run.owner }}</span>
                    <h3>{{ run.title }}</h3>
                  </div>

                  <span class="wf-run__badge">
                    <i aria-hidden="true" />
                    {{ run.badge }}
                  </span>
                </header>

                <div class="wf-run__content">
                  <div class="wf-terminal">
                    <header class="wf-terminal__header">
                      <div aria-hidden="true">
                        <span />
                        <span />
                        <span />
                      </div>

                      <strong>native-service</strong>

                      <small>bash</small>
                    </header>

                    <div class="wf-terminal__body">
                      <div
                        v-for="command in run.commands"
                        :key="command"
                        class="wf-terminal__command"
                      >
                        <span>$</span>
                        <code>{{ command }}</code>
                      </div>

                      <div
                        v-for="line in run.output"
                        :key="line.text"
                        class="wf-terminal__output"
                        :class="`wf-terminal__output--${line.type}`"
                      >
                        <span>{{ line.icon }}</span>
                        <code>{{ line.text }}</code>
                      </div>

                      <div class="wf-terminal__cursor" aria-hidden="true">
                        <span>$</span>
                        <i />
                      </div>
                    </div>
                  </div>

                  <!-- Create preview -->
                  <div
                    v-if="run.visual === 'manifest'"
                    class="wf-artifact wf-artifact--manifest"
                  >
                    <header class="wf-artifact__header">
                      <span>Generated manifest</span>
                      <strong>vix.app</strong>
                    </header>

                    <div class="wf-manifest">
                      <div>
                        <span>name</span>
                        <code>"native-service"</code>
                      </div>

                      <div>
                        <span>type</span>
                        <code>"executable"</code>
                      </div>

                      <div>
                        <span>standard</span>
                        <code>"c++20"</code>
                      </div>

                      <div>
                        <span>sources</span>
                        <code>["src/**/*.cpp"]</code>
                      </div>
                    </div>

                    <span class="wf-artifact__success">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        aria-hidden="true"
                      >
                        <path d="m5 12 4 4L19 6" />
                      </svg>

                      Project ready
                    </span>
                  </div>

                  <!-- Rix packages -->
                  <div
                    v-else-if="run.visual === 'packages'"
                    class="wf-artifact wf-artifact--packages"
                  >
                    <header class="wf-artifact__header">
                      <span>Mounted facade</span>
                      <strong>@rix/rix</strong>
                    </header>

                    <div class="wf-packages">
                      <article
                        v-for="pkg in rixPackages"
                        :key="pkg.name"
                        :style="{ '--package-delay': pkg.delay }"
                      >
                        <span :class="`wf-package-mark--${pkg.tone}`">
                          {{ pkg.mark }}
                        </span>

                        <div>
                          <strong>{{ pkg.name }}</strong>
                          <small>{{ pkg.description }}</small>
                        </div>

                        <i aria-hidden="true">✓</i>
                      </article>
                    </div>
                  </div>

                  <!-- Build summary -->
                  <div
                    v-else-if="run.visual === 'build'"
                    class="wf-artifact wf-artifact--build"
                  >
                    <header class="wf-artifact__header">
                      <span>Build report</span>
                      <strong>release</strong>
                    </header>

                    <div class="wf-build-result">
                      <div class="wf-build-result__main">
                        <span class="wf-build-result__ring">
                          <svg viewBox="0 0 80 80" aria-hidden="true">
                            <circle cx="40" cy="40" r="31" />
                            <circle
                              class="wf-build-result__progress"
                              cx="40"
                              cy="40"
                              r="31"
                            />
                          </svg>

                          <strong>100%</strong>
                        </span>

                        <div>
                          <strong>Build passed</strong>
                          <small>GCC 14 · linux-x86_64</small>
                        </div>
                      </div>

                      <dl>
                        <div>
                          <dt>Duration</dt>
                          <dd>12.4s</dd>
                        </div>

                        <div>
                          <dt>Warnings</dt>
                          <dd>0</dd>
                        </div>

                        <div>
                          <dt>Errors</dt>
                          <dd>0</dd>
                        </div>
                      </dl>
                    </div>
                  </div>

                  <!-- Cloud result -->
                  <div v-else class="wf-artifact wf-artifact--cloud">
                    <header class="wf-artifact__header">
                      <span>Team operations</span>
                      <strong>Softadastra Cloud</strong>
                    </header>

                    <div class="wf-cloud-sync">
                      <article
                        v-for="item in cloudItems"
                        :key="item.label"
                        :style="{ '--sync-delay': item.delay }"
                      >
                        <span :class="`wf-cloud-sync__mark--${item.tone}`">
                          <component :is="item.icon" />
                        </span>

                        <div>
                          <strong>{{ item.label }}</strong>
                          <small>{{ item.detail }}</small>
                        </div>

                        <span class="wf-cloud-sync__state">
                          <i aria-hidden="true" />
                          {{ item.state }}
                        </span>
                      </article>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <footer class="wf-runner__footer">
              <div class="wf-runner__progress">
                <span />
              </div>

              <div class="wf-runner__footer-text">
                <span>Workflow cycle</span>
                <strong>Create → Extend → Verify → Organize</strong>
              </div>
            </footer>
          </section>

          <!-- Team activity -->
          <aside class="wf-team">
            <header class="wf-team__header">
              <div>
                <span>Team activity</span>
                <strong>native-service</strong>
              </div>

              <span class="wf-team__online">
                <i aria-hidden="true" />
                Connected
              </span>
            </header>

            <div class="wf-team__events">
              <article
                v-for="event in events"
                :key="event.title"
                class="wf-team-event"
                :class="`wf-team-event--${event.tone}`"
                :style="{ '--phase': event.phase }"
              >
                <span class="wf-team-event__icon">
                  <component :is="event.icon" />
                </span>

                <div>
                  <strong>{{ event.title }}</strong>
                  <small>{{ event.detail }}</small>
                </div>

                <time>{{ event.time }}</time>
              </article>
            </div>

            <div class="wf-team__summary">
              <div class="wf-team__avatars" aria-hidden="true">
                <span>GK</span>
                <span>AM</span>
                <span>JD</span>
              </div>

              <div>
                <strong>Project context available</strong>
                <small>3 workspace members</small>
              </div>
            </div>

            <div class="wf-team__boundary">
              <span class="wf-team__boundary-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.9"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <rect x="4" y="10" width="16" height="10" rx="2" />
                  <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                </svg>
              </span>

              <p>
                Source code and compilation remain on the developer machine.
              </p>
            </div>
          </aside>
        </div>

        <footer class="wf-result">
          <div class="wf-result__message">
            <span class="wf-result__mark" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m5 12 4 4L19 6" />
              </svg>
            </span>

            <div>
              <span>Connected workflow</span>
              <strong>
                The application moves forward without moving the build away from
                the developer.
              </strong>
            </div>
          </div>

          <div class="wf-result__facts">
            <span>
              <i aria-hidden="true">01</i>
              One project manifest
            </span>

            <span>
              <i aria-hidden="true">02</i>
              One locked package graph
            </span>

            <span>
              <i aria-hidden="true">03</i>
              One team context
            </span>
          </div>

          <span class="wf-result__sweep" aria-hidden="true" />
        </footer>
      </div>

      <div class="wf-explanation" data-reveal>
        <article v-for="step in steps" :key="`explain-${step.number}`">
          <span :class="`wf-explanation__icon--${step.tone}`">
            <component :is="step.icon" />
          </span>

          <div>
            <small>{{ step.number }} · {{ step.owner }}</small>
            <strong>{{ step.title }}</strong>
            <p>{{ step.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h, ref, onMounted, onBeforeUnmount } from "vue";

const root = ref(null);
let observer = null;

const IconCreate = () =>
  h(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "1.8",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "aria-hidden": "true",
    },
    [
      h("path", { d: "M6 3h9l3 3v15H6z" }),
      h("path", { d: "M15 3v4h4" }),
      h("path", { d: "M9 12h6M12 9v6" }),
    ],
  );

const IconExtend = () =>
  h(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "1.8",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "aria-hidden": "true",
    },
    [
      h("rect", {
        x: "3",
        y: "3",
        width: "8",
        height: "8",
        rx: "1.5",
      }),
      h("rect", {
        x: "13",
        y: "3",
        width: "8",
        height: "8",
        rx: "1.5",
      }),
      h("rect", {
        x: "3",
        y: "13",
        width: "8",
        height: "8",
        rx: "1.5",
      }),
      h("path", { d: "M17 13v8M13 17h8" }),
    ],
  );

const IconBuild = () =>
  h(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "1.8",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "aria-hidden": "true",
    },
    [
      h("rect", { x: "4", y: "4", width: "16", height: "16", rx: "3" }),
      h("rect", { x: "9", y: "9", width: "6", height: "6", rx: "1" }),
      h("path", { d: "M9 1v3M15 1v3M9 20v3M15 20v3" }),
      h("path", { d: "M1 9h3M1 15h3M20 9h3M20 15h3" }),
    ],
  );

const IconCloud = () =>
  h(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "1.8",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "aria-hidden": "true",
    },
    [
      h("path", { d: "M21 16V8l-9-5-9 5v8l9 5 9-5Z" }),
      h("path", { d: "m3.3 8.3 8.7 4.8 8.7-4.8" }),
      h("path", { d: "M12 13v8" }),
    ],
  );

const IconProject = () =>
  h(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "1.8",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "aria-hidden": "true",
    },
    [
      h("path", { d: "M3 6h6l2 2h10v11H3z" }),
      h("path", { d: "M12 11v5M9.5 13.5h5" }),
    ],
  );

const IconLock = () =>
  h(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "1.8",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "aria-hidden": "true",
    },
    [
      h("rect", { x: "4", y: "10", width: "16", height: "10", rx: "2" }),
      h("path", { d: "M8 10V7a4 4 0 0 1 8 0v3" }),
    ],
  );

const IconReport = () =>
  h(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "1.8",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "aria-hidden": "true",
    },
    [
      h("path", { d: "M4 19V5" }),
      h("path", { d: "M4 19h16" }),
      h("path", { d: "m7 15 3-4 3 2 4-6" }),
    ],
  );

const IconPackage = () =>
  h(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "1.8",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "aria-hidden": "true",
    },
    [
      h("path", { d: "M21 16V8l-9-5-9 5v8l9 5 9-5Z" }),
      h("path", { d: "m3.5 8.3 8.5 4.8 8.5-4.8" }),
      h("path", { d: "M12 13v8" }),
    ],
  );

const steps = [
  {
    number: "01",
    owner: "Vix.cpp",
    label: "Create",
    short: "Project scaffold",
    title: "Create the native application",
    description:
      "Generate a clear application structure and central project manifest.",
    state: "Ready",
    tone: "blue",
    phase: "0s",
    icon: IconCreate,
  },
  {
    number: "02",
    owner: "Rix",
    label: "Extend",
    short: "Reusable APIs",
    title: "Add reusable capabilities",
    description:
      "Install only the Rix packages the application needs or use the unified facade.",
    state: "Mounted",
    tone: "orange",
    phase: "-6s",
    icon: IconExtend,
  },
  {
    number: "03",
    owner: "Vix.cpp",
    label: "Verify",
    short: "Local build",
    title: "Build and diagnose locally",
    description:
      "Compile the application, keep dependencies locked, and produce a build report.",
    state: "Passed",
    tone: "green",
    phase: "-4s",
    icon: IconBuild,
  },
  {
    number: "04",
    owner: "Cloud",
    label: "Organize",
    short: "Team context",
    title: "Share project operations",
    description:
      "Link the project and synchronize lockfiles, package versions, and build information.",
    state: "Synced",
    tone: "purple",
    phase: "-2s",
    icon: IconCloud,
  },
];

const runs = [
  {
    number: "01",
    owner: "Vix.cpp",
    title: "Create the application",
    badge: "Generated",
    tone: "blue",
    phase: "0s",
    visual: "manifest",
    commands: ["vix new native-service --app"],
    output: [
      {
        icon: "→",
        text: "Creating application structure",
        type: "normal",
      },
      {
        icon: "✓",
        text: "Project created with vix.app",
        type: "success",
      },
    ],
  },
  {
    number: "02",
    owner: "Rix",
    title: "Mount reusable capabilities",
    badge: "Installed",
    tone: "orange",
    phase: "-6s",
    visual: "packages",
    commands: ["vix add @rix/rix", "vix install"],
    output: [
      {
        icon: "→",
        text: "Resolving unified Rix facade",
        type: "normal",
      },
      {
        icon: "✓",
        text: "Rix packages added to vix.lock",
        type: "success",
      },
    ],
  },
  {
    number: "03",
    owner: "Vix.cpp",
    title: "Verify the local build",
    badge: "Passed",
    tone: "green",
    phase: "-4s",
    visual: "build",
    commands: ["vix build --release --report"],
    output: [
      {
        icon: "→",
        text: "Using locked dependency graph",
        type: "normal",
      },
      {
        icon: "✓",
        text: "Build completed in 12.4s",
        type: "success",
      },
      {
        icon: "✓",
        text: "Build report prepared",
        type: "success",
      },
    ],
  },
  {
    number: "04",
    owner: "Softadastra Cloud",
    title: "Connect the project to the team",
    badge: "Synced",
    tone: "purple",
    phase: "-2s",
    visual: "cloud",
    commands: [
      "vix cloud init",
      "vix cloud lockfile upload",
      "vix cloud publish",
    ],
    output: [
      {
        icon: "✓",
        text: "Project linked to workspace",
        type: "success",
      },
      {
        icon: "✓",
        text: "Lockfile and package metadata synced",
        type: "success",
      },
    ],
  },
];

const rixPackages = [
  {
    mark: "C",
    name: "rix.csv",
    description: "CSV parsing",
    tone: "blue",
    delay: "0s",
  },
  {
    mark: "D",
    name: "rix.debug",
    description: "Print and diagnostics",
    tone: "orange",
    delay: "0.18s",
  },
  {
    mark: "A",
    name: "rix.auth",
    description: "Authentication",
    tone: "green",
    delay: "0.36s",
  },
  {
    mark: "P",
    name: "rix.pdf",
    description: "Document generation",
    tone: "purple",
    delay: "0.54s",
  },
];

const cloudItems = [
  {
    label: "Project linked",
    detail: "native-service · main",
    state: "Connected",
    tone: "project",
    delay: "0s",
    icon: IconProject,
  },
  {
    label: "Lockfile uploaded",
    detail: "47 dependencies verified",
    state: "Synced",
    tone: "lock",
    delay: "0.2s",
    icon: IconLock,
  },
  {
    label: "Build report received",
    detail: "release · 12.4s · passed",
    state: "Stored",
    tone: "report",
    delay: "0.4s",
    icon: IconReport,
  },
];

const events = [
  {
    title: "Project scaffolded",
    detail: "vix.app created locally",
    time: "now",
    tone: "blue",
    phase: "0s",
    icon: IconCreate,
  },
  {
    title: "Rix facade installed",
    detail: "4 capabilities available",
    time: "now",
    tone: "orange",
    phase: "-6s",
    icon: IconExtend,
  },
  {
    title: "Release build passed",
    detail: "GCC 14 · 0 warnings",
    time: "now",
    tone: "green",
    phase: "-4s",
    icon: IconBuild,
  },
  {
    title: "Project context synced",
    detail: "lockfile, report, package",
    time: "now",
    tone: "purple",
    phase: "-2s",
    icon: IconPackage,
  },
];

onMounted(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets = root.value?.querySelectorAll("[data-reveal]") ?? [];

  if (reduce) {
    targets.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -7% 0px",
    },
  );

  targets.forEach((element) => observer.observe(element));
});

onBeforeUnmount(() => observer?.disconnect());
</script>

<style scoped>
.wf {
  --wf-bg: #edf3f0;
  --wf-bg-deep: #e5eeea;
  --wf-surface: #ffffff;
  --wf-surface-soft: #f7faf8;
  --wf-dark: #101418;
  --wf-dark-raised: #161b20;
  --wf-dark-border: #272d34;
  --wf-blue: #3776d6;
  --wf-blue-soft: #e8f0fd;
  --wf-green: #36845f;
  --wf-green-soft: #e6f3ec;
  --wf-purple: #7752a7;
  --wf-purple-soft: #f0eaf8;

  position: relative;
  overflow: hidden;
  border-block: 1px solid #dbe5e0;
  background:
    radial-gradient(circle at 5% 10%, rgba(216, 111, 31, 0.1), transparent 27%),
    radial-gradient(
      circle at 94% 78%,
      rgba(46, 125, 90, 0.11),
      transparent 30%
    ),
    linear-gradient(145deg, var(--wf-bg), var(--wf-bg-deep));
}

.wf::before {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(23, 60, 51, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(23, 60, 51, 0.025) 1px, transparent 1px);
  background-size: 54px 54px;
  content: "";
  mask-image: linear-gradient(
    to bottom,
    transparent,
    #000 13%,
    #000 87%,
    transparent
  );
  pointer-events: none;
}

.wf__inner {
  position: relative;
  z-index: 1;
  display: grid;
  gap: clamp(42px, 6vw, 70px);
}

[data-reveal] {
  opacity: 0;
  transform: translateY(22px);
  transition:
    opacity 0.75s var(--sd-ease-out),
    transform 0.75s var(--sd-ease-out);
}

[data-reveal].is-visible {
  opacity: 1;
  transform: none;
}

/* Header */

.wf__header {
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(350px, 0.72fr);
  gap: clamp(40px, 8vw, 112px);
  align-items: end;
}

.wf__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  margin: 0 0 15px;
  color: var(--sd-orange-dark);
  font-family: var(--sd-font-mono);
  font-size: 10.5px;
  font-weight: 760;
  letter-spacing: 0.075em;
  text-transform: uppercase;
}

.wf__eyebrow > span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--wf-green);
  box-shadow: 0 0 0 4px rgba(54, 132, 95, 0.12);
  animation: wf-eyebrow-pulse 2.3s ease-in-out infinite;
}

@keyframes wf-eyebrow-pulse {
  50% {
    box-shadow: 0 0 0 8px rgba(54, 132, 95, 0);
  }
}

.wf h2 {
  max-width: 790px;
  margin: 0;
  color: var(--sd-text);
  font-size: clamp(35px, 4.5vw, 58px);
  font-weight: 720;
  line-height: 1.01;
  letter-spacing: -0.052em;
}

.wf h2 span {
  display: block;
  color: var(--wf-green);
}

.wf__intro {
  max-width: 530px;
  padding-bottom: 4px;
}

.wf__intro > p {
  margin: 0;
  color: var(--sd-text-soft);
  font-size: 14.5px;
  line-height: 1.66;
}

.wf__rules {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 18px;
}

.wf__rules span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 9px;
  border: 1px solid rgba(23, 60, 51, 0.1);
  border-radius: var(--sd-radius-full);
  background: rgba(255, 255, 255, 0.7);
  color: #567068;
  font-family: var(--sd-font-mono);
  font-size: 8px;
  font-weight: 700;
  box-shadow: 0 4px 12px rgba(23, 60, 51, 0.035);
}

.wf__rules i {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--wf-green);
}

/* Board */

.wf-board {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(23, 60, 51, 0.12);
  border-radius: 18px;
  background: var(--wf-surface);
  box-shadow:
    0 3px 8px rgba(23, 60, 51, 0.05),
    0 30px 90px rgba(23, 60, 51, 0.13);
}

.wf-board__pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
    rgba(23, 60, 51, 0.15) 0.75px,
    transparent 0.75px
  );
  background-size: 17px 17px;
  opacity: 0.12;
  mask-image: radial-gradient(circle at 50% 0%, #000, transparent 42%);
  pointer-events: none;
}

.wf-board__topbar {
  position: relative;
  z-index: 3;
  display: grid;
  grid-template-columns: minmax(190px, 1fr) auto minmax(190px, 1fr);
  align-items: center;
  gap: 22px;
  min-height: 70px;
  padding: 13px 18px;
  border-bottom: 1px solid var(--sd-border);
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(16px);
}

.wf-project {
  display: flex;
  align-items: center;
  gap: 10px;
}

.wf-project__mark {
  display: grid;
  width: 39px;
  height: 39px;
  place-items: center;
  border-radius: 9px;
  background: var(--sd-text);
  color: #ffffff;
  font-family: var(--sd-font-mono);
  font-size: 9px;
  font-weight: 800;
  box-shadow: 0 6px 16px rgba(31, 31, 31, 0.15);
}

.wf-project > div,
.wf-board__connection > div {
  display: grid;
  line-height: 1.3;
}

.wf-project strong,
.wf-board__connection strong {
  color: var(--sd-text);
  font-family: var(--sd-font-mono);
  font-size: 11px;
  font-weight: 730;
}

.wf-project small,
.wf-board__connection small {
  color: var(--sd-text-muted);
  font-size: 8px;
}

.wf-board__context {
  display: flex;
  align-items: center;
  gap: 7px;
}

.wf-board__context span {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 8px;
  border: 1px solid var(--sd-border);
  border-radius: 6px;
  background: var(--wf-surface-soft);
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 8px;
}

.wf-board__context svg {
  width: 11px;
  height: 11px;
}

.wf-board__connection {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 9px;
  text-align: right;
}

.wf-board__connection-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--wf-green);
  box-shadow: 0 0 0 4px var(--wf-green-soft);
  animation: wf-connected-pulse 1.8s ease-in-out infinite;
}

@keyframes wf-connected-pulse {
  50% {
    box-shadow: 0 0 0 9px rgba(54, 132, 95, 0);
  }
}

/* Route */

.wf-route {
  position: relative;
  z-index: 2;
  padding: 25px 28px 29px;
  border-bottom: 1px solid var(--sd-border);
  background: linear-gradient(
    180deg,
    rgba(247, 250, 248, 0.88),
    rgba(255, 255, 255, 0.98)
  );
}

.wf-route__line {
  position: absolute;
  top: 70px;
  right: 11%;
  left: 11%;
  height: 2px;
  background: var(--sd-border);
}

.wf-route__line-progress {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    var(--wf-blue),
    var(--sd-orange),
    var(--wf-green),
    var(--wf-purple)
  );
  transform-origin: left;
  animation: wf-route-progress 8s ease-in-out infinite;
}

@keyframes wf-route-progress {
  0%,
  12% {
    transform: scaleX(0.03);
  }

  25%,
  37% {
    transform: scaleX(0.34);
  }

  50%,
  62% {
    transform: scaleX(0.67);
  }

  75%,
  92% {
    transform: scaleX(1);
  }

  100% {
    transform: scaleX(0.03);
  }
}

.wf-route__packet {
  position: absolute;
  top: 50%;
  left: 0;
  display: grid;
  width: 14px;
  height: 14px;
  place-items: center;
  border-radius: 50%;
  background: #ffffff;
  box-shadow:
    0 0 0 3px rgba(216, 111, 31, 0.13),
    0 5px 14px rgba(23, 60, 51, 0.18);
  transform: translate(-50%, -50%);
  animation: wf-route-packet 8s var(--sd-ease-out) infinite;
}

.wf-route__packet i {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--sd-orange);
}

@keyframes wf-route-packet {
  0%,
  12% {
    left: 0%;
  }

  25%,
  37% {
    left: 33.33%;
  }

  50%,
  62% {
    left: 66.66%;
  }

  75%,
  92% {
    left: 100%;
  }

  100% {
    left: 0%;
  }
}

.wf-route__steps {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.wf-route-step {
  position: relative;
  display: grid;
  justify-items: center;
  gap: 7px;
  text-align: center;
  animation: wf-route-step-cycle 8s ease-in-out infinite;
  animation-delay: var(--phase);
}

@keyframes wf-route-step-cycle {
  0%,
  18% {
    transform: translateY(-4px);
  }

  24%,
  100% {
    transform: none;
  }
}

.wf-route-step__number {
  color: var(--sd-text-dim);
  font-family: var(--sd-font-mono);
  font-size: 7px;
  font-weight: 760;
  letter-spacing: 0.08em;
}

.wf-route-step__icon {
  display: grid;
  width: 50px;
  height: 50px;
  place-items: center;
  border: 1px solid var(--sd-border);
  border-radius: 13px;
  background: #ffffff;
  box-shadow:
    0 5px 14px rgba(15, 23, 42, 0.06),
    0 0 0 7px rgba(255, 255, 255, 0.9);
  transition:
    color var(--sd-transition),
    border-color var(--sd-transition);
}

.wf-route-step__icon svg {
  width: 20px;
  height: 20px;
}

.wf-route-step--blue .wf-route-step__icon {
  color: var(--wf-blue);
}

.wf-route-step--orange .wf-route-step__icon {
  color: var(--sd-orange);
}

.wf-route-step--green .wf-route-step__icon {
  color: var(--wf-green);
}

.wf-route-step--purple .wf-route-step__icon {
  color: var(--wf-purple);
}

.wf-route-step > div {
  display: grid;
  line-height: 1.3;
}

.wf-route-step strong {
  color: var(--sd-text);
  font-size: 10px;
  font-weight: 730;
}

.wf-route-step small {
  color: var(--sd-text-muted);
  font-size: 7px;
}

.wf-route-step__state {
  padding: 3px 6px;
  border: 1px solid var(--sd-border);
  border-radius: var(--sd-radius-full);
  background: #ffffff;
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 6px;
  font-weight: 720;
  text-transform: uppercase;
}

/* Workspace */

.wf-workspace {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 155px minmax(0, 1fr) 245px;
  min-height: 505px;
}

.wf-files {
  display: flex;
  min-width: 0;
  flex-direction: column;
  border-right: 1px solid var(--sd-border);
  background: #f8faf9;
}

.wf-files__header,
.wf-team__header {
  display: flex;
  min-height: 55px;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 0 13px;
  border-bottom: 1px solid var(--sd-border);
  color: var(--sd-text-muted);
}

.wf-files__header > div,
.wf-team__header > div {
  display: grid;
  min-width: 0;
  line-height: 1.3;
}

.wf-files__header span,
.wf-team__header span {
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 6.5px;
  font-weight: 740;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.wf-files__header strong,
.wf-team__header strong {
  overflow: hidden;
  color: var(--sd-text);
  font-size: 8.5px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.wf-files__tree {
  display: grid;
  align-content: start;
  gap: 2px;
  padding: 10px 8px;
}

.wf-file {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 7px;
  min-height: 27px;
  padding: 0 7px;
  border-radius: 5px;
  color: var(--sd-text-soft);
  font-family: var(--sd-font-mono);
  font-size: 7.5px;
}

.wf-file:hover {
  background: #ffffff;
}

.wf-file svg {
  width: 11px;
  height: 11px;
  color: var(--sd-text-muted);
}

.wf-file--folder {
  font-weight: 700;
}

.wf-file--nested {
  padding-left: 20px;
}

.wf-file small {
  color: var(--wf-green);
  font-size: 6px;
  font-weight: 780;
}

.wf-files__status {
  display: grid;
  gap: 4px;
  margin-top: auto;
  padding: 12px;
  border-top: 1px solid var(--sd-border);
  background: rgba(255, 255, 255, 0.58);
}

.wf-files__status > div {
  display: flex;
  align-items: center;
  gap: 6px;
}

.wf-files__status strong {
  color: var(--sd-text-soft);
  font-size: 7px;
}

.wf-files__status small {
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 6.5px;
}

.wf-files__status-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--wf-green);
}

/* Runner */

.wf-runner {
  display: grid;
  min-width: 0;
  grid-template-rows: auto 1fr auto;
  background: var(--wf-dark);
}

.wf-runner__header {
  display: flex;
  min-height: 55px;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 0 14px;
  border-bottom: 1px solid var(--wf-dark-border);
  background: var(--wf-dark-raised);
}

.wf-runner__tabs {
  display: flex;
  align-items: center;
  gap: 5px;
}

.wf-runner__tab {
  padding: 6px 8px;
  border-radius: 5px;
  color: #69727d;
  font-family: var(--sd-font-mono);
  font-size: 7px;
}

.wf-runner__tab--active {
  background: #232930;
  color: #d7dce2;
}

.wf-runner__local {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #87919c;
  font-family: var(--sd-font-mono);
  font-size: 7px;
}

.wf-runner__local i {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #55c990;
}

.wf-runner__screen {
  position: relative;
  min-height: 390px;
  overflow: hidden;
}

.wf-run {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-rows: auto 1fr;
  padding: 18px;
  opacity: 0;
  pointer-events: none;
  transform: translateY(8px);
  animation: wf-run-cycle 8s ease-in-out infinite;
  animation-delay: var(--phase);
}

@keyframes wf-run-cycle {
  0%,
  19% {
    opacity: 1;
    transform: none;
    pointer-events: auto;
  }

  24%,
  100% {
    opacity: 0;
    transform: translateY(8px);
    pointer-events: none;
  }
}

.wf-run__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 14px;
}

.wf-run__header > div {
  display: grid;
  line-height: 1.3;
}

.wf-run__header span {
  color: #737d88;
  font-family: var(--sd-font-mono);
  font-size: 6.5px;
  font-weight: 730;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.wf-run__header h3 {
  margin: 2px 0 0;
  color: #f0f2f4;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.025em;
}

.wf-run__badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 7px;
  border: 1px solid #2b333b;
  border-radius: var(--sd-radius-full);
  background: #171c21;
}

.wf-run__badge i {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #55c990;
}

.wf-run__content {
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(180px, 0.92fr);
  gap: 12px;
  min-height: 0;
}

.wf-terminal,
.wf-artifact {
  overflow: hidden;
  border: 1px solid var(--wf-dark-border);
  border-radius: 9px;
  background: #0d1014;
}

.wf-terminal__header {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  min-height: 38px;
  align-items: center;
  gap: 10px;
  padding: 0 11px;
  border-bottom: 1px solid var(--wf-dark-border);
  background: #13171c;
}

.wf-terminal__header > div {
  display: flex;
  gap: 4px;
}

.wf-terminal__header > div span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #353c45;
}

.wf-terminal__header strong,
.wf-terminal__header small {
  font-family: var(--sd-font-mono);
  font-size: 6.5px;
}

.wf-terminal__header strong {
  overflow: hidden;
  color: #9da6b0;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.wf-terminal__header small {
  color: #59626d;
}

.wf-terminal__body {
  padding: 13px;
}

.wf-terminal__command,
.wf-terminal__output {
  display: grid;
  grid-template-columns: 19px minmax(0, 1fr);
  align-items: center;
  min-height: 28px;
  font-family: var(--sd-font-mono);
  font-size: 7.5px;
}

.wf-terminal__command span {
  color: var(--sd-orange);
  font-weight: 800;
}

.wf-terminal__command code {
  color: #e1e5e9;
}

.wf-terminal__output span,
.wf-terminal__output code {
  color: #737d88;
}

.wf-terminal__output--success span,
.wf-terminal__output--success code {
  color: #55c990;
}

.wf-terminal code {
  overflow: hidden;
  font-family: inherit;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.wf-terminal__cursor {
  display: flex;
  min-height: 27px;
  align-items: center;
  gap: 8px;
  color: var(--sd-orange);
  font-family: var(--sd-font-mono);
  font-size: 7.5px;
}

.wf-terminal__cursor i {
  width: 6px;
  height: 11px;
  background: #dce1e6;
  animation: wf-cursor 0.9s steps(1) infinite;
}

@keyframes wf-cursor {
  50% {
    opacity: 0;
  }
}

/* Artifacts */

.wf-artifact {
  background: #14191e;
}

.wf-artifact__header {
  display: grid;
  min-height: 39px;
  align-content: center;
  padding: 0 11px;
  border-bottom: 1px solid var(--wf-dark-border);
  line-height: 1.25;
}

.wf-artifact__header span {
  color: #626d78;
  font-family: var(--sd-font-mono);
  font-size: 6px;
  text-transform: uppercase;
}

.wf-artifact__header strong {
  color: #cbd1d7;
  font-family: var(--sd-font-mono);
  font-size: 7px;
}

.wf-manifest {
  display: grid;
  padding: 11px;
}

.wf-manifest > div {
  display: grid;
  grid-template-columns: 58px minmax(0, 1fr);
  gap: 8px;
  padding: 8px 0;
  border-bottom: 1px solid #252b32;
  font-family: var(--sd-font-mono);
  font-size: 6.5px;
}

.wf-manifest span {
  color: #69737e;
}

.wf-manifest code {
  overflow: hidden;
  color: #c6ccd2;
  font-family: inherit;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.wf-artifact__success {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin: 3px 11px 11px;
  color: #55c990;
  font-size: 7px;
  font-weight: 700;
}

.wf-artifact__success svg {
  width: 12px;
  height: 12px;
}

.wf-packages {
  display: grid;
  gap: 7px;
  padding: 10px;
}

.wf-packages article {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 7px;
  padding: 7px;
  border: 1px solid #282f36;
  border-radius: 6px;
  background: #181d23;
  animation: wf-package-enter 2s ease-in-out infinite alternate;
  animation-delay: var(--package-delay);
}

@keyframes wf-package-enter {
  to {
    border-color: #3d474f;
    transform: translateX(2px);
  }
}

.wf-packages article > span {
  display: grid;
  width: 23px;
  height: 23px;
  place-items: center;
  border-radius: 5px;
  font-size: 7px;
  font-weight: 800;
}

.wf-package-mark--blue {
  background: rgba(55, 118, 214, 0.15);
  color: #78a7ee;
}

.wf-package-mark--orange {
  background: rgba(216, 111, 31, 0.15);
  color: #ef9b5d;
}

.wf-package-mark--green {
  background: rgba(54, 132, 95, 0.15);
  color: #6bc399;
}

.wf-package-mark--purple {
  background: rgba(119, 82, 167, 0.16);
  color: #ae8dd5;
}

.wf-packages article > div {
  display: grid;
  min-width: 0;
  line-height: 1.25;
}

.wf-packages strong {
  color: #cbd1d7;
  font-family: var(--sd-font-mono);
  font-size: 6.5px;
}

.wf-packages small {
  color: #69737e;
  font-size: 5.8px;
}

.wf-packages article > i {
  color: #55c990;
  font-size: 8px;
  font-style: normal;
  font-weight: 800;
}

/* Build */

.wf-build-result {
  padding: 13px;
}

.wf-build-result__main {
  display: flex;
  align-items: center;
  gap: 10px;
}

.wf-build-result__ring {
  position: relative;
  display: grid;
  width: 62px;
  height: 62px;
  place-items: center;
}

.wf-build-result__ring svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  transform: rotate(-90deg);
}

.wf-build-result__ring circle {
  fill: none;
  stroke: #262d34;
  stroke-width: 6;
}

.wf-build-result__ring .wf-build-result__progress {
  stroke: #55c990;
  stroke-dasharray: 195;
  stroke-dashoffset: 195;
  stroke-linecap: round;
  animation: wf-build-ring 2s ease-in-out infinite alternate;
}

@keyframes wf-build-ring {
  to {
    stroke-dashoffset: 0;
  }
}

.wf-build-result__ring > strong {
  color: #d7dce1;
  font-size: 10px;
}

.wf-build-result__main > div {
  display: grid;
  line-height: 1.35;
}

.wf-build-result__main > div strong {
  color: #d7dce1;
  font-size: 8px;
}

.wf-build-result__main > div small {
  color: #69737e;
  font-size: 6px;
}

.wf-build-result dl {
  display: grid;
  gap: 0;
  margin: 13px 0 0;
}

.wf-build-result dl > div {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 7px 2px;
  border-bottom: 1px solid #272d34;
  font-family: var(--sd-font-mono);
  font-size: 6px;
}

.wf-build-result dt,
.wf-build-result dd {
  margin: 0;
}

.wf-build-result dt {
  color: #69737e;
}

.wf-build-result dd {
  color: #cbd1d7;
}

/* Cloud artifact */

.wf-cloud-sync {
  display: grid;
}

.wf-cloud-sync article {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 7px;
  padding: 9px 10px;
  border-bottom: 1px solid #272d34;
  animation: wf-sync-highlight 2.5s ease-in-out infinite;
  animation-delay: var(--sync-delay);
}

@keyframes wf-sync-highlight {
  50% {
    background: rgba(119, 82, 167, 0.08);
  }
}

.wf-cloud-sync article > span:first-child {
  display: grid;
  width: 25px;
  height: 25px;
  place-items: center;
  border-radius: 6px;
}

.wf-cloud-sync article > span:first-child svg {
  width: 13px;
  height: 13px;
}

.wf-cloud-sync__mark--project {
  background: rgba(55, 118, 214, 0.14);
  color: #78a7ee;
}

.wf-cloud-sync__mark--lock {
  background: rgba(216, 111, 31, 0.14);
  color: #ef9b5d;
}

.wf-cloud-sync__mark--report {
  background: rgba(54, 132, 95, 0.14);
  color: #6bc399;
}

.wf-cloud-sync article > div {
  display: grid;
  min-width: 0;
  line-height: 1.25;
}

.wf-cloud-sync strong {
  overflow: hidden;
  color: #cbd1d7;
  font-size: 6.5px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.wf-cloud-sync small {
  overflow: hidden;
  color: #69737e;
  font-size: 5.7px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.wf-cloud-sync__state {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #55c990;
  font-size: 5.5px;
  font-weight: 700;
}

.wf-cloud-sync__state i {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: currentColor;
}

/* Runner footer */

.wf-runner__footer {
  display: grid;
  gap: 8px;
  padding: 11px 14px;
  border-top: 1px solid var(--wf-dark-border);
  background: #12161b;
}

.wf-runner__progress {
  height: 3px;
  overflow: hidden;
  border-radius: 3px;
  background: #282e35;
}

.wf-runner__progress span {
  display: block;
  width: 25%;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(
    90deg,
    var(--wf-blue),
    var(--sd-orange),
    #55c990,
    #9f7bcd
  );
  animation: wf-runner-progress 8s var(--sd-ease-out) infinite;
}

@keyframes wf-runner-progress {
  0%,
  12% {
    width: 25%;
  }

  25%,
  37% {
    width: 50%;
  }

  50%,
  62% {
    width: 75%;
  }

  75%,
  92% {
    width: 100%;
  }

  100% {
    width: 25%;
  }
}

.wf-runner__footer-text {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  color: #67717c;
  font-family: var(--sd-font-mono);
  font-size: 6px;
}

.wf-runner__footer-text strong {
  color: #929ba5;
  font-weight: 650;
}

/* Team panel */

.wf-team {
  display: flex;
  min-width: 0;
  flex-direction: column;
  border-left: 1px solid var(--sd-border);
  background: #ffffff;
}

.wf-team__online {
  display: inline-flex !important;
  align-items: center;
  gap: 5px;
  color: var(--wf-green) !important;
  font-size: 6px !important;
}

.wf-team__online i {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: currentColor;
}

.wf-team__events {
  display: grid;
  padding: 9px;
}

.wf-team-event {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 8px;
  padding: 9px 7px;
  border-bottom: 1px solid var(--sd-border);
  opacity: 0.45;
  animation: wf-team-event-cycle 8s ease-in-out infinite;
  animation-delay: var(--phase);
}

@keyframes wf-team-event-cycle {
  0%,
  19% {
    background: var(--wf-surface-soft);
    opacity: 1;
    transform: translateX(3px);
  }

  24%,
  100% {
    background: transparent;
    opacity: 0.45;
    transform: none;
  }
}

.wf-team-event__icon {
  display: grid;
  width: 27px;
  height: 27px;
  place-items: center;
  border-radius: 6px;
}

.wf-team-event__icon svg {
  width: 13px;
  height: 13px;
}

.wf-team-event--blue .wf-team-event__icon {
  background: var(--wf-blue-soft);
  color: var(--wf-blue);
}

.wf-team-event--orange .wf-team-event__icon {
  background: var(--sd-accent-bg-soft);
  color: var(--sd-orange);
}

.wf-team-event--green .wf-team-event__icon {
  background: var(--wf-green-soft);
  color: var(--wf-green);
}

.wf-team-event--purple .wf-team-event__icon {
  background: var(--wf-purple-soft);
  color: var(--wf-purple);
}

.wf-team-event > div {
  display: grid;
  min-width: 0;
  line-height: 1.3;
}

.wf-team-event strong {
  overflow: hidden;
  color: var(--sd-text);
  font-size: 7px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.wf-team-event small,
.wf-team-event time {
  color: var(--sd-text-muted);
  font-size: 6px;
}

.wf-team-event time {
  font-family: var(--sd-font-mono);
}

.wf-team__summary {
  display: flex;
  align-items: center;
  gap: 9px;
  margin: auto 10px 0;
  padding: 11px;
  border: 1px solid var(--sd-border);
  border-radius: 8px;
  background: var(--wf-surface-soft);
}

.wf-team__avatars {
  display: flex;
}

.wf-team__avatars span {
  display: grid;
  width: 25px;
  height: 25px;
  place-items: center;
  margin-left: -6px;
  border: 2px solid var(--wf-surface-soft);
  border-radius: 50%;
  background: var(--sd-text);
  color: #ffffff;
  font-size: 5.5px;
  font-weight: 760;
}

.wf-team__avatars span:first-child {
  margin-left: 0;
  background: var(--sd-orange);
}

.wf-team__summary > div:last-child {
  display: grid;
  line-height: 1.3;
}

.wf-team__summary strong {
  color: var(--sd-text);
  font-size: 7px;
}

.wf-team__summary small {
  color: var(--sd-text-muted);
  font-size: 6px;
}

.wf-team__boundary {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 9px 10px 11px;
  padding: 9px;
  border: 1px solid rgba(54, 132, 95, 0.14);
  border-radius: 8px;
  background: var(--wf-green-soft);
}

.wf-team__boundary-icon {
  display: grid;
  width: 25px;
  height: 25px;
  flex: 0 0 auto;
  place-items: center;
  border-radius: 6px;
  background: #ffffff;
  color: var(--wf-green);
}

.wf-team__boundary-icon svg {
  width: 13px;
  height: 13px;
}

.wf-team__boundary p {
  margin: 0;
  color: #587669;
  font-size: 6.5px;
  line-height: 1.4;
}

/* Result */

.wf-result {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: minmax(280px, 0.9fr) minmax(0, 1.1fr);
  align-items: center;
  gap: 26px;
  overflow: hidden;
  padding: 18px 20px;
  border-top: 1px solid var(--sd-border);
  background:
    linear-gradient(
      100deg,
      rgba(232, 240, 253, 0.7),
      rgba(232, 243, 236, 0.72),
      rgba(240, 234, 248, 0.66)
    ),
    #ffffff;
}

.wf-result__message {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 11px;
}

.wf-result__mark {
  display: grid;
  width: 40px;
  height: 40px;
  flex: 0 0 auto;
  place-items: center;
  border: 1px solid rgba(54, 132, 95, 0.2);
  border-radius: 10px;
  background: #ffffff;
  color: var(--wf-green);
  box-shadow: 0 6px 18px rgba(23, 60, 51, 0.07);
}

.wf-result__mark svg {
  width: 18px;
  height: 18px;
}

.wf-result__message > div {
  display: grid;
  line-height: 1.35;
}

.wf-result__message span:not(.wf-result__mark) {
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 6.5px;
  font-weight: 730;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.wf-result__message strong {
  max-width: 430px;
  color: var(--sd-text);
  font-size: 9px;
}

.wf-result__facts {
  position: relative;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;
}

.wf-result__facts span {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 7px 9px;
  border: 1px solid rgba(23, 60, 51, 0.09);
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.86);
  color: var(--sd-text-soft);
  font-size: 7px;
  font-weight: 650;
  box-shadow: 0 4px 12px rgba(23, 60, 51, 0.035);
}

.wf-result__facts i {
  color: var(--wf-green);
  font-family: var(--sd-font-mono);
  font-size: 6px;
  font-style: normal;
  font-weight: 780;
}

.wf-result__sweep {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    100deg,
    transparent 20%,
    rgba(255, 255, 255, 0.72),
    transparent 80%
  );
  transform: translateX(-100%);
  animation: wf-result-sweep 5s ease-in-out infinite;
}

@keyframes wf-result-sweep {
  0%,
  62% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}

/* Explanation */

.wf-explanation {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
}

.wf-explanation article {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: start;
  gap: 10px;
  padding: 15px;
  border: 1px solid rgba(23, 60, 51, 0.1);
  border-radius: 11px;
  background: rgba(255, 255, 255, 0.65);
  box-shadow: 0 8px 22px rgba(23, 60, 51, 0.045);
  transition:
    background var(--sd-transition),
    box-shadow var(--sd-transition),
    transform var(--sd-transition);
}

.wf-explanation article:hover {
  background: #ffffff;
  box-shadow: 0 14px 30px rgba(23, 60, 51, 0.08);
  transform: translateY(-3px);
}

.wf-explanation article > span {
  display: grid;
  width: 32px;
  height: 32px;
  place-items: center;
  border-radius: 8px;
}

.wf-explanation article > span svg {
  width: 15px;
  height: 15px;
}

.wf-explanation__icon--blue {
  background: var(--wf-blue-soft);
  color: var(--wf-blue);
}

.wf-explanation__icon--orange {
  background: var(--sd-accent-bg-soft);
  color: var(--sd-orange);
}

.wf-explanation__icon--green {
  background: var(--wf-green-soft);
  color: var(--wf-green);
}

.wf-explanation__icon--purple {
  background: var(--wf-purple-soft);
  color: var(--wf-purple);
}

.wf-explanation article > div {
  display: grid;
  min-width: 0;
  line-height: 1.4;
}

.wf-explanation small {
  color: var(--sd-text-muted);
  font-family: var(--sd-font-mono);
  font-size: 6.5px;
  font-weight: 720;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.wf-explanation strong {
  margin-top: 3px;
  color: var(--sd-text);
  font-size: 9px;
}

.wf-explanation p {
  margin: 5px 0 0;
  color: var(--sd-text-soft);
  font-size: 7.5px;
  line-height: 1.5;
}

/* Reduced motion */

@media (prefers-reduced-motion: reduce) {
  .wf__eyebrow > span,
  .wf-board__connection-dot,
  .wf-route__line-progress,
  .wf-route__packet,
  .wf-route-step,
  .wf-run,
  .wf-terminal__cursor i,
  .wf-packages article,
  .wf-build-result__progress,
  .wf-cloud-sync article,
  .wf-runner__progress span,
  .wf-team-event,
  .wf-result__sweep {
    animation: none;
  }

  .wf-run {
    display: none;
    opacity: 1;
    transform: none;
  }

  .wf-run:first-child {
    display: grid;
  }

  .wf-team-event {
    opacity: 1;
  }
}

/* Responsive */

@media (max-width: 1060px) {
  .wf-workspace {
    grid-template-columns: 150px minmax(0, 1fr);
  }

  .wf-team {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: minmax(220px, 0.6fr) minmax(0, 1fr);
    border-top: 1px solid var(--sd-border);
    border-left: 0;
  }

  .wf-team__header {
    border-right: 1px solid var(--sd-border);
    border-bottom: 0;
  }

  .wf-team__events {
    grid-column: 2;
    grid-row: 1 / 4;
  }

  .wf-team__summary,
  .wf-team__boundary {
    grid-column: 1;
  }

  .wf-team__summary {
    margin-top: 10px;
  }

  .wf-explanation {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 860px) {
  .wf__header {
    grid-template-columns: 1fr;
    gap: 22px;
  }

  .wf__intro {
    max-width: 720px;
  }

  .wf-board__topbar {
    grid-template-columns: minmax(0, 1fr) auto;
  }

  .wf-board__context {
    display: none;
  }

  .wf-route__line {
    display: none;
  }

  .wf-route__steps {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .wf-route-step {
    grid-template-columns: auto auto minmax(0, 1fr) auto;
    justify-items: start;
    padding: 9px;
    border: 1px solid var(--sd-border);
    border-radius: 9px;
    background: #ffffff;
    text-align: left;
  }

  .wf-route-step__number,
  .wf-route-step__state {
    align-self: center;
  }

  .wf-route-step__icon {
    width: 39px;
    height: 39px;
    box-shadow: none;
  }

  .wf-route-step > div {
    align-self: center;
  }

  .wf-run__content {
    grid-template-columns: 1fr;
  }

  .wf-runner__screen {
    min-height: 610px;
  }

  .wf-artifact {
    min-height: 225px;
  }

  .wf-result {
    grid-template-columns: 1fr;
  }

  .wf-result__facts {
    justify-content: flex-start;
  }
}

@media (max-width: 680px) {
  .wf h2 {
    font-size: clamp(2.3rem, 11vw, 3rem);
  }

  .wf-board__topbar {
    grid-template-columns: 1fr;
  }

  .wf-board__connection {
    justify-content: flex-start;
    text-align: left;
  }

  .wf-route {
    padding-inline: 14px;
  }

  .wf-route__steps {
    grid-template-columns: 1fr;
  }

  .wf-workspace {
    grid-template-columns: 1fr;
  }

  .wf-files {
    display: none;
  }

  .wf-team {
    display: flex;
  }

  .wf-team__header {
    border-right: 0;
    border-bottom: 1px solid var(--sd-border);
  }

  .wf-team__events,
  .wf-team__summary,
  .wf-team__boundary {
    grid-column: auto;
    grid-row: auto;
  }

  .wf-run {
    padding: 14px;
  }

  .wf-runner__screen {
    min-height: 620px;
  }

  .wf-runner__tabs .wf-runner__tab:not(.wf-runner__tab--active) {
    display: none;
  }

  .wf-runner__footer-text {
    align-items: flex-start;
    flex-direction: column;
  }

  .wf-explanation {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .wf-board {
    border-radius: 13px;
  }

  .wf__rules {
    display: grid;
  }

  .wf-run__header {
    align-items: flex-start;
  }

  .wf-run__badge {
    display: none;
  }

  .wf-runner__screen {
    min-height: 650px;
  }

  .wf-result {
    padding: 16px;
  }

  .wf-result__facts {
    display: grid;
  }
}
/* ==========================================================================
   Workflow warm copper theme
   Place after the previous dark override
   ========================================================================== */

.wf {
  --wf-section-orange: #cf641f;
  --wf-section-orange-deep: #a94314;
  --wf-section-orange-soft: #ef8b45;

  --wf-cream: #fffaf5;
  --wf-cream-soft: #fff4e9;
  --wf-cream-muted: #fbe8d7;

  --wf-text-on-orange: #fffaf6;
  --wf-text-on-orange-soft: rgba(255, 250, 246, 0.8);
  --wf-text-on-orange-muted: rgba(255, 250, 246, 0.58);

  --wf-surface: #ffffff;
  --wf-surface-soft: #fffaf6;

  --wf-dark: #101318;
  --wf-dark-raised: #161a20;
  --wf-dark-border: #292f36;

  --wf-blue: #3978d7;
  --wf-blue-soft: #e8f0fd;

  --wf-green: #35845e;
  --wf-green-soft: #e6f3ec;

  --wf-purple: #7752a7;
  --wf-purple-soft: #f0eaf8;

  --wf-orange: #d86f1f;
  --wf-orange-soft: #fff0e4;

  border-block-color: rgba(120, 45, 10, 0.18);

  background:
    radial-gradient(
      circle at 10% 5%,
      rgba(255, 218, 184, 0.44),
      transparent 31%
    ),
    radial-gradient(circle at 88% 76%, rgba(112, 39, 10, 0.2), transparent 34%),
    linear-gradient(145deg, #ed8a45 0%, #d86f1f 43%, #ba4f18 100%);
}

/* Warm grid over the section */

.wf::before {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.055) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.055) 1px, transparent 1px);

  background-size: 54px 54px;
  opacity: 0.65;
}

/* Header */

.wf__eyebrow {
  color: rgba(255, 250, 246, 0.82);
}

.wf__eyebrow > span {
  background: #fff5eb;
  box-shadow: 0 0 0 4px rgba(255, 245, 235, 0.18);
}

.wf h2 {
  color: var(--wf-text-on-orange);
  text-shadow: 0 2px 18px rgba(91, 29, 7, 0.12);
}

.wf h2 span {
  color: #4b1b0b;
}

.wf__intro > p {
  color: var(--wf-text-on-orange-soft);
}

.wf__rules span {
  border-color: rgba(255, 255, 255, 0.22);
  background: rgba(255, 255, 255, 0.12);
  color: #fff8f2;
  box-shadow:
    0 4px 12px rgba(94, 30, 6, 0.08),
    inset 0 1px rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
}

.wf__rules i {
  background: #fff3e8;
}

/* Main workflow board */

.wf-board {
  border-color: rgba(102, 38, 10, 0.17);

  background:
    radial-gradient(
      circle at 50% -18%,
      rgba(216, 111, 31, 0.08),
      transparent 40%
    ),
    #ffffff;

  box-shadow:
    0 35px 95px rgba(91, 29, 7, 0.28),
    0 12px 36px rgba(91, 29, 7, 0.16);
}

.wf-board__pattern {
  background-image: radial-gradient(
    rgba(173, 81, 23, 0.17) 0.75px,
    transparent 0.75px
  );
  opacity: 0.18;
}

/* Board header */

.wf-board__topbar {
  border-bottom-color: #eee2d8;
  background: rgba(255, 250, 246, 0.9);
}

.wf-project__mark {
  border: 0;
  background: #2c211d;
  color: #ffffff;
  box-shadow: 0 6px 16px rgba(58, 31, 20, 0.18);
}

.wf-project strong,
.wf-board__connection strong {
  color: var(--sd-text);
}

.wf-project small,
.wf-board__connection small {
  color: var(--sd-text-muted);
}

.wf-board__context span {
  border-color: #eadfd7;
  background: #ffffff;
  color: var(--sd-text-muted);
}

/* Workflow route */

.wf-route {
  border-bottom-color: #eee2d8;

  background:
    radial-gradient(
      circle at 50% 0%,
      rgba(216, 111, 31, 0.09),
      transparent 58%
    ),
    linear-gradient(180deg, #fffaf6, #ffffff);
}

.wf-route__line {
  background: #eadfd7;
}

.wf-route__line-progress {
  background: linear-gradient(
    90deg,
    var(--wf-blue),
    var(--wf-orange),
    var(--wf-green),
    var(--wf-purple)
  );
}

.wf-route__packet {
  background: #ffffff;
  box-shadow:
    0 0 0 4px rgba(216, 111, 31, 0.12),
    0 8px 20px rgba(173, 81, 23, 0.22);
}

.wf-route__packet i {
  background: var(--wf-orange);
}

.wf-route-step__number,
.wf-route-step small {
  color: var(--sd-text-muted);
}

.wf-route-step strong {
  color: var(--sd-text);
}

.wf-route-step__icon {
  border-color: #eadfd7;
  background: #ffffff;

  box-shadow:
    0 7px 18px rgba(79, 44, 27, 0.08),
    0 0 0 7px rgba(255, 250, 246, 0.94);
}

.wf-route-step__state {
  border-color: #eadfd7;
  background: #fffaf6;
  color: var(--sd-text-muted);
}

/* Explorer */

.wf-files {
  border-right-color: #eee2d8;
  background: #fffaf6;
}

.wf-files__header,
.wf-team__header {
  border-bottom-color: #eee2d8;
  color: var(--sd-text-muted);
}

.wf-files__header span,
.wf-team__header span {
  color: var(--sd-text-muted);
}

.wf-files__header strong,
.wf-team__header strong {
  color: var(--sd-text);
}

.wf-file {
  color: var(--sd-text-soft);
}

.wf-file:hover {
  background: #ffffff;
}

.wf-file svg {
  color: #9b7c6b;
}

.wf-files__status {
  border-top-color: #eee2d8;
  background: #ffffff;
}

.wf-files__status strong {
  color: var(--sd-text-soft);
}

.wf-files__status small {
  color: var(--sd-text-muted);
}

/* Keep the central execution area dark */

.wf-runner {
  background: #0d1014;
}

.wf-runner__header {
  border-bottom-color: var(--wf-dark-border);
  background: #15191e;
}

.wf-runner__footer {
  border-top-color: var(--wf-dark-border);
  background: #11151a;
}

/* Team activity */

.wf-team {
  border-left-color: #eee2d8;
  background: #ffffff;
}

.wf-team-event {
  border-bottom-color: #eee2d8;
}

.wf-team-event strong {
  color: var(--sd-text);
}

.wf-team-event small,
.wf-team-event time {
  color: var(--sd-text-muted);
}

.wf-team-event--blue .wf-team-event__icon {
  background: var(--wf-blue-soft);
  color: var(--wf-blue);
}

.wf-team-event--orange .wf-team-event__icon {
  background: var(--wf-orange-soft);
  color: var(--wf-orange);
}

.wf-team-event--green .wf-team-event__icon {
  background: var(--wf-green-soft);
  color: var(--wf-green);
}

.wf-team-event--purple .wf-team-event__icon {
  background: var(--wf-purple-soft);
  color: var(--wf-purple);
}

.wf-team__summary {
  border-color: #eadfd7;
  background: #fffaf6;
}

.wf-team__summary strong {
  color: var(--sd-text);
}

.wf-team__summary small {
  color: var(--sd-text-muted);
}

.wf-team__avatars span {
  border-color: #fffaf6;
  background: #38302c;
}

.wf-team__avatars span:first-child {
  background: var(--wf-orange);
}

.wf-team__boundary {
  border-color: rgba(53, 132, 94, 0.16);
  background: var(--wf-green-soft);
}

.wf-team__boundary-icon {
  background: #ffffff;
  color: var(--wf-green);
}

.wf-team__boundary p {
  color: #547464;
}

/* Connected result */

.wf-result {
  border-top-color: #eadfd7;

  background:
    radial-gradient(
      circle at 8% 50%,
      rgba(216, 111, 31, 0.13),
      transparent 38%
    ),
    radial-gradient(
      circle at 90% 50%,
      rgba(119, 82, 167, 0.08),
      transparent 36%
    ),
    linear-gradient(90deg, #fff4e9, #fffaf6);
}

.wf-result__mark {
  border-color: rgba(216, 111, 31, 0.2);
  background: #ffffff;
  color: var(--wf-orange);
  box-shadow: 0 7px 18px rgba(173, 81, 23, 0.1);
}

.wf-result__message span:not(.wf-result__mark) {
  color: var(--sd-text-muted);
}

.wf-result__message strong {
  color: var(--sd-text);
}

.wf-result__facts span {
  border-color: #eadfd7;
  background: rgba(255, 255, 255, 0.88);
  color: var(--sd-text-soft);
  box-shadow: 0 4px 12px rgba(79, 44, 27, 0.045);
}

.wf-result__facts i {
  color: var(--wf-orange);
}

.wf-result__sweep {
  background: linear-gradient(
    100deg,
    transparent 20%,
    rgba(255, 255, 255, 0.65),
    transparent 80%
  );
}

/* Explanatory cards below */

.wf-explanation article {
  border-color: rgba(255, 255, 255, 0.24);
  background: rgba(255, 250, 246, 0.88);

  box-shadow:
    0 12px 28px rgba(91, 29, 7, 0.13),
    inset 0 1px rgba(255, 255, 255, 0.48);

  backdrop-filter: blur(12px);
}

.wf-explanation article:hover {
  border-color: rgba(255, 255, 255, 0.48);
  background: #ffffff;
  box-shadow:
    0 20px 42px rgba(91, 29, 7, 0.18),
    0 5px 14px rgba(91, 29, 7, 0.1);
}

.wf-explanation small {
  color: #9a684c;
}

.wf-explanation strong {
  color: #3a2419;
}

.wf-explanation p {
  color: #765d4f;
}

/* Responsive route cards */

@media (max-width: 860px) {
  .wf-route-step {
    border-color: #eadfd7;
    background: #ffffff;
  }
}

@media (max-width: 1060px) {
  .wf-team {
    border-top-color: #eee2d8;
  }

  .wf-team__header {
    border-right-color: #eee2d8;
  }
}
</style>
