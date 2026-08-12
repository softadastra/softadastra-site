<script lang="ts">
	import { onMount } from 'svelte';

	let wordmarkStage: HTMLDivElement;

	onMount(() => {
		const prefersReducedMotion = window.matchMedia(
			'(prefers-reduced-motion: reduce)'
		).matches;

		if (prefersReducedMotion) {
			return;
		}

		function handlePointerMove(event: PointerEvent) {
			const rect = wordmarkStage.getBoundingClientRect();

			const x =
				(event.clientX - rect.left) /
				rect.width;

			const y =
				(event.clientY - rect.top) /
				rect.height;

			const normalizedX =
				(x - 0.5) * 2;

			const normalizedY =
				(y - 0.5) * 2;

			const rotateY =
				normalizedX * 7;

			const rotateX =
				normalizedY * -5;

			const translateX =
				normalizedX * 2;

			const translateY =
				normalizedY * 1.5;

			wordmarkStage.style.setProperty(
				'--wordmark-rx',
				`${rotateX}deg`
			);

			wordmarkStage.style.setProperty(
				'--wordmark-ry',
				`${rotateY}deg`
			);

			wordmarkStage.style.setProperty(
				'--wordmark-x',
				`${translateX}px`
			);

			wordmarkStage.style.setProperty(
				'--wordmark-y',
				`${translateY}px`
			);
		}

		function handlePointerLeave() {
			wordmarkStage.style.setProperty(
				'--wordmark-rx',
				'0deg'
			);

			wordmarkStage.style.setProperty(
				'--wordmark-ry',
				'0deg'
			);

			wordmarkStage.style.setProperty(
				'--wordmark-x',
				'0px'
			);

			wordmarkStage.style.setProperty(
				'--wordmark-y',
				'0px'
			);
		}

		wordmarkStage.addEventListener(
			'pointermove',
			handlePointerMove
		);

		wordmarkStage.addEventListener(
			'pointerleave',
			handlePointerLeave
		);

		return () => {
			wordmarkStage.removeEventListener(
				'pointermove',
				handlePointerMove
			);

			wordmarkStage.removeEventListener(
				'pointerleave',
				handlePointerLeave
			);
		};
	});
</script>

<section
	class="hero"
	aria-labelledby="hero-title"
>
	<div class="hero-inner">
		<div
			class="wordmark-stage"
			bind:this={wordmarkStage}
		>
			<a
				class="wordmark"
				href="/"
				aria-label="Softadastra"
			>
				<span
					class="wordmark-depth wordmark-depth--4"
					aria-hidden="true"
				>
					Softadastra
				</span>

				<span
					class="wordmark-depth wordmark-depth--3"
					aria-hidden="true"
				>
					Softadastra
				</span>

				<span
					class="wordmark-depth wordmark-depth--2"
					aria-hidden="true"
				>
					Softadastra
				</span>

				<span
					class="wordmark-depth wordmark-depth--1"
					aria-hidden="true"
				>
					Softadastra
				</span>

				<span class="wordmark-face">
					Softadastra
				</span>
			</a>
		</div>

		<div class="hero-copy">
			<h1 id="hero-title">
				Make computing
				<span>
					infrastructure-independent.
				</span>
			</h1>

			<p class="hero-question">
				Can software be separated from the infrastructure that executes it?
			</p>
		</div>

		<nav
			class="hero-nav"
			aria-label="Primary navigation"
		>
			<a href="/research">
				research
			</a>

			<span aria-hidden="true">|</span>

			<a href="/technology">
				technology
			</a>

			<span aria-hidden="true">|</span>

			<a href="/open-source">
				open source
			</a>

			<span aria-hidden="true">|</span>

			<a href="/company">
				company
			</a>

			<span aria-hidden="true">|</span>

			<a
				href="https://github.com/softadastra"
				target="_blank"
				rel="noreferrer"
			>
				github
			</a>
		</nav>
	</div>
</section>

<style>
	.hero {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 100%;
		min-height: 100svh;

		padding:
			48px
			var(--page-padding);

		overflow: hidden;

		background:
			var(--color-white);
	}

	.hero-inner {
		display: flex;
		flex-direction: column;
		align-items: center;

		width: 100%;
		max-width: 1100px;

		margin-inline: auto;

		text-align: center;
	}

	/* --------------------------------------------------
	   3D Softadastra wordmark
	-------------------------------------------------- */

	.wordmark-stage {
		--wordmark-rx: 0deg;
		--wordmark-ry: 0deg;
		--wordmark-x: 0px;
		--wordmark-y: 0px;

		position: relative;

		display: flex;
		align-items: center;
		justify-content: center;

		width: min(100%, 900px);

		padding:
			22px
			20px
			28px;

		perspective: 900px;
		perspective-origin: center;

		user-select: none;
	}

	.wordmark {
		position: relative;

		display: inline-block;

		color: var(--color-accent);

		font-family:
			Arial,
			Helvetica,
			sans-serif;

		font-size:
			clamp(
				3.9rem,
				9.5vw,
				7.8rem
			);

		font-weight: 700;

		letter-spacing: -0.03em;
		line-height: 0.9;

		text-decoration: none;

		transform:
			translate3d(
				var(--wordmark-x),
				var(--wordmark-y),
				0
			)
			rotateX(
				var(--wordmark-rx)
			)
			rotateY(
				var(--wordmark-ry)
			);

		transform-style:
			preserve-3d;

		transition:
			transform
			220ms
			cubic-bezier(
				0.2,
				0.7,
				0.2,
				1
			);

		will-change: transform;
	}

	.wordmark-face,
	.wordmark-depth {
		display: block;

		white-space: nowrap;

		backface-visibility:
			hidden;
	}

	.wordmark-face {
		position: relative;

		z-index: 10;

		color: #f47b20;

		text-shadow:
			0 1px 0
				rgb(255 255 255 / 35%);

		transform:
			translateZ(16px);
	}

	.wordmark-depth {
		position: absolute;

		inset: 0;

		pointer-events: none;
	}

	.wordmark-depth--1 {
		z-index: 4;

		color: #dd691b;

		transform:
			translate3d(
				1px,
				2px,
				12px
			);
	}

	.wordmark-depth--2 {
		z-index: 3;

		color: #bf5816;

		transform:
			translate3d(
				2px,
				4px,
				8px
			);
	}

	.wordmark-depth--3 {
		z-index: 2;

		color: #984513;

		transform:
			translate3d(
				3px,
				6px,
				4px
			);
	}

	.wordmark-depth--4 {
		z-index: 1;

		color: #71330f;

		transform:
			translate3d(
				4px,
				8px,
				0
			);

		filter:
			blur(0.2px);
	}

	.wordmark::after {
		position: absolute;

		z-index: -1;

		right: 7%;
		bottom: -22px;
		left: 7%;

		height: 20px;

		border-radius: 50%;

		background:
			rgb(64 34 18 / 11%);

		filter: blur(16px);

		content: '';

		transform:
			translateZ(-20px)
			scaleX(0.9);

		pointer-events: none;
	}

	/* --------------------------------------------------
	   Mission
	-------------------------------------------------- */

	.hero-copy {
		margin-top:
			clamp(
				26px,
				4vw,
				42px
			);

		font-family:
			var(--font-mono);
	}

	.hero-copy h1 {
		margin: 0;

		color: var(--color-text);

		font-family:
			var(--font-mono);

		font-size:
			clamp(
				1.2rem,
				2vw,
				1.6rem
			);

		font-weight:
			var(--font-weight-bold);

		letter-spacing:
			-0.02em;

		line-height: 1.5;
	}

	.hero-copy h1 span {
		display: block;

		color:
			var(--color-accent);
	}

	.hero-question {
		max-width: 820px;

		margin:
			clamp(
				18px,
				2.5vw,
				26px
			)
			auto
			0;

		color:
			var(--color-text-secondary);

		font-family:
			var(--font-mono);

		font-size:
			clamp(
				0.88rem,
				1.25vw,
				1.02rem
			);

		font-weight:
			var(--font-weight-normal);

		letter-spacing:
			-0.01em;

		line-height: 1.6;
	}

	/* --------------------------------------------------
	   Navigation
	-------------------------------------------------- */

	.hero-nav {
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: center;

		gap:
			clamp(
				7px,
				1.3vw,
				13px
			);

		margin-top:
			clamp(
				30px,
				4vw,
				44px
			);

		font-family:
			var(--font-mono);

		font-size:
			clamp(
				0.76rem,
				1vw,
				0.9rem
			);

		line-height: 1;

		white-space: nowrap;
	}

	.hero-nav a {
		color:
			var(--color-text);

		text-decoration: none;

		transition:
			color
			var(--transition-fast);
	}

	.hero-nav a:hover {
		color:
			var(--color-accent);
	}

	.hero-nav > span {
		color:
			var(--color-border-strong);

		user-select: none;
	}

	/* --------------------------------------------------
	   Mobile
	-------------------------------------------------- */

	@media (max-width: 640px) {
		.hero {
			min-height: 100svh;

			padding:
				38px
				var(--page-padding);
		}

		.wordmark-stage {
			width: 100%;

			padding:
				16px
				4px
				20px;

			perspective: 700px;
		}

		.wordmark {
			font-size:
				clamp(
					3.05rem,
					16vw,
					4.4rem
				);

			letter-spacing:
				-0.035em;
		}

		.wordmark-face {
			transform:
				translateZ(10px);
		}

		.wordmark-depth--1 {
			transform:
				translate3d(
					1px,
					1px,
					7px
				);
		}

		.wordmark-depth--2 {
			transform:
				translate3d(
					2px,
					2px,
					4px
				);
		}

		.wordmark-depth--3 {
			transform:
				translate3d(
					3px,
					3px,
					2px
				);
		}

		.wordmark-depth--4 {
			transform:
				translate3d(
					4px,
					4px,
					0
				);
		}

		.wordmark::after {
			bottom: -15px;

			height: 14px;

			filter: blur(12px);
		}

		.hero-copy {
			margin-top: 26px;
		}

		.hero-copy h1 {
			font-size: 1.03rem;

			line-height: 1.55;
		}

		.hero-question {
			max-width: 520px;

			margin-top: 17px;

			font-size: 0.78rem;

			line-height: 1.55;
		}

		.hero-nav {
			width: 100%;

			gap: 5px;

			margin-top: 30px;

			font-size:
				clamp(
					0.56rem,
					2.45vw,
					0.7rem
				);

			letter-spacing:
				-0.02em;
		}
	}

	/* --------------------------------------------------
	   Very small screens
	-------------------------------------------------- */

	@media (max-width: 380px) {
		.wordmark {
			font-size: 2.85rem;
		}

		.hero-nav {
			gap: 4px;

			font-size: 0.54rem;
		}
	}

	/* --------------------------------------------------
	   Reduced motion
	-------------------------------------------------- */

	@media (prefers-reduced-motion: reduce) {
		.wordmark {
			transform: none;
			transition: none;
		}
	}
</style>
