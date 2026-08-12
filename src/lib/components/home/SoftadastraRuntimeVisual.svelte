<script lang="ts">
	import { onMount } from 'svelte';

	let reducedMotion = false;

	onMount(() => {
		reducedMotion = window.matchMedia(
			'(prefers-reduced-motion: reduce)'
		).matches;
	});

	/* Nœuds répartis sur l'orbite (statiques, positionnés en %) */
	const nodes = Array.from({ length: 8 }, (_, index) => {
		const angle = (index / 8) * Math.PI * 2;
		const radius = index % 2 === 0 ? 44 : 48;

		return {
			accent: index % 3 === 0,
			left: 50 + Math.cos(angle) * radius,
			top: 50 + Math.sin(angle) * radius * 0.72,
			delay: (index * 0.28).toFixed(2)
		};
	});

	/* Particules orbitales */
	const particles = Array.from({ length: 22 }, (_, index) => ({
		delay: (-(index * 0.42)).toFixed(2),
		duration: (7 + (index % 5) * 1.4).toFixed(2),
		radius: 30 + (index % 6) * 6,
		size: index % 4 === 0 ? 3 : 2
	}));
</script>

<div
	class="runtime-visual"
	class:is-static={reducedMotion}
>
	<div
		class="runtime-glow runtime-glow--orange"
		aria-hidden="true"
	></div>

	<div
		class="runtime-glow runtime-glow--graphite"
		aria-hidden="true"
	></div>

	<div
		class="runtime-stage"
		role="img"
		aria-label="Visualisation du Softadastra Runtime."
	>
		<!-- Halo extérieur -->
		<div class="halo" aria-hidden="true"></div>

		<!-- Arcs structurels : statiques pour la performance -->
		<div class="structure" aria-hidden="true">
			{#each Array(6) as _, index}
				<span
					class="structure-bar"
					style="transform: translate(-50%, -50%) rotate({(index / 6) * 180 + 30}deg);"
				></span>
			{/each}
		</div>

		<!-- Anneaux gyroscopiques -->
		<div class="ring ring--accent" aria-hidden="true"></div>
		<div class="ring ring--light" aria-hidden="true"></div>
		<div class="ring ring--dark" aria-hidden="true"></div>

		<!-- Particules orbitales -->
		<div class="particles" aria-hidden="true">
			{#each particles as particle}
				<span
					class="particle"
					style="
						width: {particle.size}px;
						height: {particle.size}px;
						--radius: {particle.radius}%;
						animation-duration: {particle.duration}s;
						animation-delay: {particle.delay}s;
					"
				></span>
			{/each}
		</div>

		<!-- Corps de l'engine -->
		<div class="core-shell" aria-hidden="true">
			<div class="core">
				<div class="nucleus"></div>
			</div>
		</div>

		<!-- Nœuds runtime -->
		<div class="nodes" aria-hidden="true">
			{#each nodes as node}
				<span
					class="node"
					class:node--accent={node.accent}
					style="
						left: {node.left}%;
						top: {node.top}%;
						animation-delay: {node.delay}s;
					"
				></span>
			{/each}
		</div>

		<!-- Label -->
		<div class="runtime-label" aria-hidden="true">
			<span class="runtime-label__brand">SOFTADASTRA</span>
			<span class="runtime-label__word">RUNTIME</span>
		</div>
	</div>
</div>

<style>
	.runtime-visual {
		--graphite: #17332d;
		--graphite-light: #285047;
		--graphite-dark: #0b1d19;
		--graphite-deep: #071411;

		--accent: #f47b20;
		--accent-dark: #c95e14;
		--accent-soft: #d98442;

		--ivory: #f7f3ed;
		--muted: #aebbb6;

		position: relative;

		width: min(100%, 980px);
		min-height: 420px;

		margin-inline: auto;

		display: grid;
		place-items: center;

		isolation: isolate;
	}

	/* --------------------------------------------------
	   Glows
	-------------------------------------------------- */

	.runtime-glow {
		position: absolute;
		z-index: 0;

		top: 50%;
		left: 50%;

		border-radius: 50%;
		pointer-events: none;

		transform: translate(-50%, -50%);
	}

	.runtime-glow--orange {
		width: 58%;
		height: 45%;

		background: rgb(244 123 32 / 8%);
		filter: blur(85px);
	}

	.runtime-glow--graphite {
		width: 48%;
		height: 38%;

		background: rgb(23 51 45 / 8%);
		filter: blur(100px);

		transform: translate(-38%, -42%);
	}

	/* --------------------------------------------------
	   Stage
	-------------------------------------------------- */

	.runtime-stage {
		position: relative;
		z-index: 2;

		width: min(90%, 460px);
		aspect-ratio: 1 / 1;

		display: grid;
		place-items: center;

		filter:
			drop-shadow(0 28px 32px rgb(10 30 25 / 12%))
			drop-shadow(0 7px 12px rgb(10 30 25 / 8%));

		animation: float 6.2s ease-in-out infinite;
	}

	.runtime-stage > * {
		grid-area: 1 / 1;
	}

	@keyframes float {
		0%,
		100% {
			transform: translateY(-1.5%);
		}
		50% {
			transform: translateY(1.5%);
		}
	}

	/* --------------------------------------------------
	   Halo
	-------------------------------------------------- */

	.halo {
		width: 96%;
		height: 96%;

		border: 1px solid rgb(244 123 32 / 22%);
		border-radius: 50%;

		place-self: center;

		animation: halo-pulse 3s ease-in-out infinite;
	}

	@keyframes halo-pulse {
		0%,
		100% {
			opacity: 0.4;
			transform: scale(0.97);
		}
		50% {
			opacity: 0.85;
			transform: scale(1.02);
		}
	}

	/* --------------------------------------------------
	   Arcs structurels : STATIQUES (aucune animation)
	-------------------------------------------------- */

	.structure {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.structure-bar {
		position: absolute;
		top: 50%;
		left: 50%;

		width: 2px;
		height: 82%;

		background: linear-gradient(
			to bottom,
			transparent,
			var(--graphite-light) 18%,
			var(--graphite-light) 82%,
			transparent
		);

		opacity: 0.5;
		transform-origin: center;
	}

	/* --------------------------------------------------
	   Anneaux gyroscopiques
	-------------------------------------------------- */

	.ring {
		border-radius: 50%;
		place-self: center;
	}

	.ring--accent {
		width: 68%;
		height: 68%;

		border: 2px solid var(--accent);
		box-shadow:
			0 0 14px rgb(244 123 32 / 45%),
			inset 0 0 10px rgb(244 123 32 / 20%);

		transform: rotateX(72deg);
		animation: spin-z 9s linear infinite;
	}

	.ring--light {
		width: 84%;
		height: 84%;

		border: 1.5px solid var(--graphite-light);
		opacity: 0.7;

		transform: rotateX(58deg) rotateY(24deg) rotateZ(46deg);
		animation: spin-y 16s linear infinite reverse;
	}

	.ring--dark {
		width: 98%;
		height: 98%;

		border: 1.5px solid var(--graphite);
		opacity: 0.5;

		transform: rotateX(-46deg) rotateY(26deg) rotateZ(12deg);
		animation: spin-x 22s linear infinite;
	}

	@keyframes spin-z {
		from {
			transform: rotateX(72deg) rotateZ(0deg);
		}
		to {
			transform: rotateX(72deg) rotateZ(360deg);
		}
	}

	@keyframes spin-y {
		from {
			transform: rotateX(58deg) rotateY(24deg) rotateZ(46deg);
		}
		to {
			transform: rotateX(58deg) rotateY(384deg) rotateZ(46deg);
		}
	}

	@keyframes spin-x {
		from {
			transform: rotateX(-46deg) rotateY(26deg) rotateZ(12deg);
		}
		to {
			transform: rotateX(-46deg) rotateY(386deg) rotateZ(12deg);
		}
	}

	/* --------------------------------------------------
	   Corps de l'engine
	-------------------------------------------------- */

	.core-shell {
		width: 34%;
		height: 34%;

		place-self: center;

		display: grid;
		place-items: center;

		border-radius: 50%;

		background:
			radial-gradient(
				circle at 35% 30%,
				var(--graphite-light),
				var(--graphite) 55%,
				var(--graphite-deep)
			);

		box-shadow:
			inset 0 0 22px rgb(0 0 0 / 45%),
			0 0 30px rgb(23 51 45 / 40%);
	}

	.core {
		width: 62%;
		height: 62%;

		border-radius: 50%;

		display: grid;
		place-items: center;

		background:
			radial-gradient(
				circle at 38% 32%,
				var(--accent-soft),
				var(--accent) 55%,
				var(--accent-dark)
			);

		box-shadow:
			0 0 26px rgb(244 123 32 / 65%),
			0 0 55px rgb(244 123 32 / 35%);

		animation: core-pulse 2.9s ease-in-out infinite;
	}

	.nucleus {
		width: 42%;
		height: 42%;

		border-radius: 50%;

		background:
			radial-gradient(
				circle at 40% 35%,
				var(--accent-dark),
				var(--graphite-deep) 70%
			);

		box-shadow: 0 0 14px rgb(201 94 20 / 60%);

		animation: nucleus-pulse 2.9s ease-in-out infinite;
	}

	@keyframes core-pulse {
		0%,
		100% {
			transform: scale(0.985);
			box-shadow:
				0 0 22px rgb(244 123 32 / 50%),
				0 0 45px rgb(244 123 32 / 25%);
		}
		50% {
			transform: scale(1.03);
			box-shadow:
				0 0 34px rgb(244 123 32 / 80%),
				0 0 70px rgb(244 123 32 / 45%);
		}
	}

	@keyframes nucleus-pulse {
		0%,
		100% {
			opacity: 0.75;
		}
		50% {
			opacity: 1;
		}
	}

	/* --------------------------------------------------
	   Nœuds
	-------------------------------------------------- */

	.nodes {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.node {
		position: absolute;

		width: 9px;
		height: 9px;

		border-radius: 50%;

		background: var(--ivory);
		box-shadow: 0 0 6px rgb(40 80 71 / 40%);

		transform: translate(-50%, -50%);

		animation: node-glow 4.4s ease-in-out infinite;
	}

	.node--accent {
		background: var(--accent);
		box-shadow:
			0 0 8px rgb(244 123 32 / 70%),
			0 0 16px rgb(244 123 32 / 40%);
	}

	@keyframes node-glow {
		0%,
		100% {
			opacity: 0.55;
		}
		50% {
			opacity: 1;
		}
	}

	/* --------------------------------------------------
	   Particules
	-------------------------------------------------- */

	.particles {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.particle {
		position: absolute;
		top: 50%;
		left: 50%;

		border-radius: 50%;

		background: var(--accent);
		box-shadow: 0 0 5px rgb(244 123 32 / 70%);

		offset-path: circle(var(--radius) at center);
		animation-name: orbit;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
	}

	@keyframes orbit {
		from {
			offset-distance: 0%;
			opacity: 0.7;
		}
		50% {
			opacity: 0.35;
		}
		to {
			offset-distance: 100%;
			opacity: 0.7;
		}
	}

	/* --------------------------------------------------
	   Label
	-------------------------------------------------- */

	.runtime-label {
		place-self: center;

		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.15em;

		font-family:
			'SFMono-Regular', Consolas,
			'Liberation Mono', monospace;
		font-weight: 700;

		text-align: center;
		line-height: 1;

		pointer-events: none;

		transform: translateY(140%);
	}

	.runtime-label__brand {
		font-size: clamp(0.7rem, 2.4vw, 1.05rem);
		letter-spacing: 0.14em;
		color: var(--ivory);
	}

	.runtime-label__word {
		font-size: clamp(1.05rem, 3.6vw, 1.7rem);
		letter-spacing: 0.1em;
		color: var(--accent);

		text-shadow: 0 0 14px rgb(244 123 32 / 40%);
	}

	/* --------------------------------------------------
	   Reduced motion / static
	-------------------------------------------------- */

	.runtime-visual.is-static .runtime-stage,
	.runtime-visual.is-static .halo,
	.runtime-visual.is-static .ring,
	.runtime-visual.is-static .core,
	.runtime-visual.is-static .nucleus,
	.runtime-visual.is-static .node,
	.runtime-visual.is-static .particle {
		animation: none;
	}

	@media (prefers-reduced-motion: reduce) {
		.runtime-stage,
		.halo,
		.ring,
		.core,
		.nucleus,
		.node,
		.particle {
			animation: none !important;
		}
	}

	/* --------------------------------------------------
	   Responsive
	-------------------------------------------------- */

	@media (max-width: 760px) {
		.runtime-visual {
			width: 100%;
			min-height: 390px;
		}

		.runtime-glow--orange {
			width: 72%;
			height: 45%;
			filter: blur(65px);
		}
	}

	@media (max-width: 640px) {
		.runtime-visual {
			min-height: 340px;
		}

		.runtime-stage {
			width: min(96%, 360px);
		}

		.runtime-glow--orange {
			width: 82%;
			height: 42%;
		}

		.runtime-glow--graphite {
			width: 70%;
			height: 34%;
		}
	}
</style>
