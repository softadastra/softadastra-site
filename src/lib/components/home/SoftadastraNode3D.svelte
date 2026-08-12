<script lang="ts">
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

	let canvasEl: HTMLCanvasElement;

	const COLORS = {
		shell: 0x17332d,
		shellLight: 0x285047,
		shellDark: 0x0b1d19,
		shellDeep: 0x071411,

		accent: 0xf47b20,
		accentDark: 0xc95e14,

		ivory: 0xf7f3ed,
		muted: 0xaebbb6,

		vent: 0x0c211c
	};

	onMount(() => {
		const parent = canvasEl.parentElement as HTMLElement;

		const prefersReducedMotion = window.matchMedia(
			'(prefers-reduced-motion: reduce)'
		).matches;

		/* --------------------------------------------------
		   Scene
		-------------------------------------------------- */

		const scene = new THREE.Scene();

		const camera = new THREE.PerspectiveCamera(
			31,
			1,
			0.1,
			100
		);

		camera.position.set(0, 0.35, 7.3);

		const renderer = new THREE.WebGLRenderer({
			canvas: canvasEl,
			antialias: true,
			alpha: true,
			powerPreference: 'high-performance'
		});

		renderer.setPixelRatio(
			Math.min(window.devicePixelRatio, 2)
		);

		renderer.outputColorSpace =
			THREE.SRGBColorSpace;

		renderer.setClearColor(
			0x000000,
			0
		);

		/* --------------------------------------------------
		   Lighting
		-------------------------------------------------- */

		scene.add(
			new THREE.AmbientLight(
				0xffffff,
				1.45
			)
		);

		const keyLight =
			new THREE.DirectionalLight(
				0xfff6ec,
				3.6
			);

		keyLight.position.set(
			4,
			6,
			5
		);

		scene.add(keyLight);

		const fillLight =
			new THREE.DirectionalLight(
				0xa7c7bd,
				1.35
			);

		fillLight.position.set(
			-5,
			1.5,
			3
		);

		scene.add(fillLight);

		const backLight =
			new THREE.DirectionalLight(
				COLORS.accent,
				0.7
			);

		backLight.position.set(
			0,
			3,
			-5
		);

		scene.add(backLight);

		const accentLight =
			new THREE.PointLight(
				COLORS.accent,
				5,
				8,
				2
			);

		accentLight.position.set(
			0,
			-0.9,
			3
		);

		scene.add(accentLight);

		/* --------------------------------------------------
		   Node root

		   Unlike SoftadastraRuntime3D, this is intentionally
		   a physical object: future reference hardware for
		   running the Softadastra Runtime.
		-------------------------------------------------- */

		const node =
			new THREE.Group();

		scene.add(node);

		const WIDTH = 3.8;
		const HEIGHT = 2.15;
		const DEPTH = 2.65;

		/* --------------------------------------------------
		   Main chassis
		-------------------------------------------------- */

		const chassisGeometry =
			new RoundedBoxGeometry(
				WIDTH,
				HEIGHT,
				DEPTH,
				10,
				0.16
			);

		const chassisMaterial =
			new THREE.MeshPhysicalMaterial({
				color: COLORS.shell,
				roughness: 0.34,
				metalness: 0.2,
				clearcoat: 0.42,
				clearcoatRoughness: 0.3
			});

		const chassis =
			new THREE.Mesh(
				chassisGeometry,
				chassisMaterial
			);

		node.add(chassis);

		/* --------------------------------------------------
		   Lower chassis layer
		-------------------------------------------------- */

		const lowerGeometry =
			new RoundedBoxGeometry(
				WIDTH + 0.025,
				0.56,
				DEPTH + 0.025,
				8,
				0.13
			);

		const lowerMaterial =
			new THREE.MeshPhysicalMaterial({
				color: COLORS.shellDark,
				roughness: 0.37,
				metalness: 0.18,
				clearcoat: 0.25,
				clearcoatRoughness: 0.35
			});

		const lower =
			new THREE.Mesh(
				lowerGeometry,
				lowerMaterial
			);

		lower.position.y =
			-HEIGHT / 2 + 0.33;

		node.add(lower);

		/* --------------------------------------------------
		   Orange chassis seam
		-------------------------------------------------- */

		const seamGeometry =
			new THREE.BoxGeometry(
				WIDTH - 0.18,
				0.04,
				DEPTH - 0.16
			);

		const seamMaterial =
			new THREE.MeshStandardMaterial({
				color: COLORS.accent,
				emissive: COLORS.accent,
				emissiveIntensity: 0.55,
				roughness: 0.3
			});

		const seam =
			new THREE.Mesh(
				seamGeometry,
				seamMaterial
			);

		seam.position.y =
			HEIGHT / 2 + 0.017;

		node.add(seam);

		/* --------------------------------------------------
		   Front inset
		-------------------------------------------------- */

		const frontInsetGeometry =
			new RoundedBoxGeometry(
				3.15,
				1.28,
				0.055,
				6,
				0.08
			);

		const frontInsetMaterial =
			new THREE.MeshStandardMaterial({
				color: COLORS.shellDark,
				roughness: 0.5,
				metalness: 0.1
			});

		const frontInset =
			new THREE.Mesh(
				frontInsetGeometry,
				frontInsetMaterial
			);

		frontInset.position.set(
			0,
			0.15,
			DEPTH / 2 + 0.02
		);

		node.add(frontInset);

		/* --------------------------------------------------
		   Front identity texture
		-------------------------------------------------- */

		function createFrontTexture() {
			const canvas =
				document.createElement(
					'canvas'
				);

			canvas.width = 1700;
			canvas.height = 620;

			const context =
				canvas.getContext('2d');

			if (!context) {
				throw new Error(
					'Unable to create Softadastra Node texture.'
				);
			}

			context.clearRect(
				0,
				0,
				canvas.width,
				canvas.height
			);

			context.textBaseline =
				'alphabetic';

			context.fillStyle =
				'#f7f3ed';

			context.font =
				'700 108px "SFMono-Regular", Consolas, "Liberation Mono", monospace';

			context.fillText(
				'SOFTADASTRA',
				110,
				210
			);

			context.fillStyle =
				'#f47b20';

			context.font =
				'700 152px "SFMono-Regular", Consolas, "Liberation Mono", monospace';

			context.fillText(
				'NODE',
				110,
				390
			);

			context.fillStyle =
				'#aebbb6';

			context.font =
				'400 34px "SFMono-Regular", Consolas, "Liberation Mono", monospace';

			context.fillText(
				'powered by Softadastra Runtime',
				110,
				490
			);

			const texture =
				new THREE.CanvasTexture(
					canvas
				);

			texture.colorSpace =
				THREE.SRGBColorSpace;

			texture.anisotropy =
				renderer.capabilities.getMaxAnisotropy();

			return texture;
		}

		const frontTexture =
			createFrontTexture();

		const frontLabelMaterial =
			new THREE.MeshBasicMaterial({
				map: frontTexture,
				transparent: true,
				depthWrite: false
			});

		const frontLabel =
			new THREE.Mesh(
				new THREE.PlaneGeometry(
					2.9,
					1.05
				),
				frontLabelMaterial
			);

		frontLabel.position.set(
			0,
			0.16,
			DEPTH / 2 + 0.056
		);

		node.add(frontLabel);

		/* --------------------------------------------------
		   Status indicator

		   Generic system status only.
		   It does not imply a finished hardware specification.
		-------------------------------------------------- */

		const statusMaterial =
			new THREE.MeshStandardMaterial({
				color: COLORS.accent,
				emissive: COLORS.accent,
				emissiveIntensity: 0.8,
				roughness: 0.25
			});

		const statusLight =
			new THREE.Mesh(
				new THREE.CircleGeometry(
					0.055,
					24
				),
				statusMaterial
			);

		statusLight.position.set(
			1.48,
			-0.63,
			DEPTH / 2 + 0.06
		);

		node.add(statusLight);

		/* --------------------------------------------------
		   Front ventilation

		   Visual industrial detail only.
		   No specific thermal capability is implied.
		-------------------------------------------------- */

		const frontVentGroup =
			new THREE.Group();

		const ventGeometry =
			new THREE.BoxGeometry(
				0.035,
				0.17,
				0.025
			);

		const ventMaterial =
			new THREE.MeshStandardMaterial({
				color: COLORS.vent,
				roughness: 0.85,
				metalness: 0
			});

		const frontVentColumns = 14;

		for (
			let index = 0;
			index < frontVentColumns;
			index++
		) {
			const vent =
				new THREE.Mesh(
					ventGeometry,
					ventMaterial
				);

			vent.position.set(
				-0.68 +
					index * 0.105,
				-0.64,
				DEPTH / 2 + 0.057
			);

			frontVentGroup.add(vent);
		}

		node.add(frontVentGroup);

		/* --------------------------------------------------
		   Side ventilation
		-------------------------------------------------- */

		const sideVentGroup =
			new THREE.Group();

		const sideVentGeometry =
			new THREE.BoxGeometry(
				0.022,
				0.055,
				0.42
			);

		for (
			let row = 0;
			row < 5;
			row++
		) {
			for (
				let column = 0;
				column < 4;
				column++
			) {
				const vent =
					new THREE.Mesh(
						sideVentGeometry,
						ventMaterial
					);

				vent.position.set(
					WIDTH / 2 + 0.015,
					0.55 -
						row * 0.22,
					-0.72 +
						column * 0.48
				);

				sideVentGroup.add(
					vent
				);
			}
		}

		node.add(sideVentGroup);

		/* --------------------------------------------------
		   Side accent strip
		-------------------------------------------------- */

		const sideAccentMaterial =
			new THREE.MeshStandardMaterial({
				color: COLORS.accent,
				emissive: COLORS.accent,
				emissiveIntensity: 0.3,
				roughness: 0.32
			});

		const sideAccent =
			new THREE.Mesh(
				new RoundedBoxGeometry(
					0.035,
					1.28,
					0.14,
					4,
					0.02
				),
				sideAccentMaterial
			);

		sideAccent.position.set(
			WIDTH / 2 + 0.018,
			0.08,
			0.92
		);

		node.add(sideAccent);

		/* --------------------------------------------------
		   Rear identity mark
		-------------------------------------------------- */

		const rearMark =
			new THREE.Mesh(
				new RoundedBoxGeometry(
					0.46,
					0.46,
					0.035,
					5,
					0.06
				),
				new THREE.MeshStandardMaterial({
					color: COLORS.accent,
					emissive: COLORS.accent,
					emissiveIntensity: 0.18,
					roughness: 0.4
				})
			);

		rearMark.position.set(
			0,
			0.12,
			-DEPTH / 2 - 0.018
		);

		node.add(rearMark);

		/* --------------------------------------------------
		   Base feet
		-------------------------------------------------- */

		const footMaterial =
			new THREE.MeshStandardMaterial({
				color: COLORS.shellDeep,
				roughness: 0.8
			});

		const footGeometry =
			new RoundedBoxGeometry(
				0.48,
				0.11,
				0.48,
				4,
				0.04
			);

		const footPositions = [
			[-1.35, -0.95],
			[1.35, -0.95],
			[-1.35, 0.95],
			[1.35, 0.95]
		];

		for (
			const [
				x,
				z
			] of footPositions
		) {
			const foot =
				new THREE.Mesh(
					footGeometry,
					footMaterial
				);

			foot.position.set(
				x,
				-HEIGHT / 2 - 0.075,
				z
			);

			node.add(foot);
		}

		/* --------------------------------------------------
		   Ground shadow

		   The object is physical, so unlike Runtime3D
		   a subtle ground reference makes sense here.
		-------------------------------------------------- */

		const shadowTextureCanvas =
			document.createElement(
				'canvas'
			);

		shadowTextureCanvas.width =
			512;

		shadowTextureCanvas.height =
			256;

		const shadowContext =
			shadowTextureCanvas.getContext(
				'2d'
			);

		if (shadowContext) {
			const gradient =
				shadowContext.createRadialGradient(
					256,
					128,
					15,
					256,
					128,
					230
				);

			gradient.addColorStop(
				0,
				'rgba(11,29,25,0.22)'
			);

			gradient.addColorStop(
				0.48,
				'rgba(11,29,25,0.09)'
			);

			gradient.addColorStop(
				1,
				'rgba(11,29,25,0)'
			);

			shadowContext.fillStyle =
				gradient;

			shadowContext.fillRect(
				0,
				0,
				512,
				256
			);
		}

		const shadowTexture =
			new THREE.CanvasTexture(
				shadowTextureCanvas
			);

		const shadowMaterial =
			new THREE.MeshBasicMaterial({
				map: shadowTexture,
				transparent: true,
				depthWrite: false
			});

		const shadow =
			new THREE.Mesh(
				new THREE.PlaneGeometry(
					5.3,
					2.6
				),
				shadowMaterial
			);

		shadow.rotation.x =
			-Math.PI / 2;

		shadow.position.set(
			0,
			-HEIGHT / 2 - 0.16,
			0.15
		);

		scene.add(shadow);

		/* --------------------------------------------------
		   Presentation pose
		-------------------------------------------------- */

		const REST_X = -0.12;
		const REST_Y = -0.52;

		node.rotation.x =
			REST_X;

		node.rotation.y =
			REST_Y;

		let targetRotationX =
			REST_X;

		let targetRotationY =
			REST_Y;

		let currentRotationX =
			REST_X;

		let currentRotationY =
			REST_Y;

		let dragging = false;

		let previousX = 0;
		let previousY = 0;

		let lastInteraction =
			performance.now();

		/* --------------------------------------------------
		   Interaction
		-------------------------------------------------- */

		function handlePointerDown(
			event: PointerEvent
		) {
			dragging = true;

			previousX =
				event.clientX;

			previousY =
				event.clientY;

			lastInteraction =
				performance.now();

			canvasEl.setPointerCapture(
				event.pointerId
			);

			canvasEl.style.cursor =
				'grabbing';
		}

		function handlePointerMove(
			event: PointerEvent
		) {
			if (!dragging) {
				return;
			}

			const deltaX =
				event.clientX -
				previousX;

			const deltaY =
				event.clientY -
				previousY;

			previousX =
				event.clientX;

			previousY =
				event.clientY;

			targetRotationY +=
				deltaX * 0.006;

			targetRotationX +=
				deltaY * 0.0035;

			targetRotationX =
				THREE.MathUtils.clamp(
					targetRotationX,
					-0.42,
					0.25
				);

			lastInteraction =
				performance.now();
		}

		function handlePointerUp(
			event: PointerEvent
		) {
			dragging = false;

			lastInteraction =
				performance.now();

			canvasEl.style.cursor =
				'grab';

			try {
				canvasEl.releasePointerCapture(
					event.pointerId
				);
			} catch {
				// Pointer capture may already be released.
			}
		}

		canvasEl.addEventListener(
			'pointerdown',
			handlePointerDown
		);

		canvasEl.addEventListener(
			'pointermove',
			handlePointerMove
		);

		canvasEl.addEventListener(
			'pointerup',
			handlePointerUp
		);

		canvasEl.addEventListener(
			'pointercancel',
			handlePointerUp
		);

		canvasEl.style.cursor =
			'grab';

		canvasEl.style.touchAction =
			'pan-y';

		/* --------------------------------------------------
		   Resize
		-------------------------------------------------- */

		function resize() {
			const width =
				parent.clientWidth;

			const height =
				Math.min(
					Math.max(
						width * 0.66,
						420
					),
					620
				);

			renderer.setSize(
				width,
				height,
				false
			);

			camera.aspect =
				width / height;

			camera.updateProjectionMatrix();
		}

		resize();

		const resizeObserver =
			new ResizeObserver(
				resize
			);

		resizeObserver.observe(
			parent
		);

		/* --------------------------------------------------
		   Animation
		-------------------------------------------------- */

		const clock =
			new THREE.Clock();

		let animationFrame = 0;

		function animate() {
			animationFrame =
				requestAnimationFrame(
					animate
				);

			const time =
				clock.getElapsedTime();

			const idle =
				!dragging &&
				performance.now() -
					lastInteraction >
					1300;

			/*
			 * The Node moves much more slowly than Runtime3D.
			 * It should feel like a physical industrial object,
			 * not like a digital engine.
			 */

			if (
				idle &&
				!prefersReducedMotion
			) {
				targetRotationY +=
					0.00065;

				targetRotationX +=
					(
						REST_X -
						targetRotationX
					) *
					0.02;
			}

			currentRotationX +=
				(
					targetRotationX -
					currentRotationX
				) *
				0.07;

			currentRotationY +=
				(
					targetRotationY -
					currentRotationY
				) *
				0.07;

			node.rotation.x =
				currentRotationX;

			node.rotation.y =
				currentRotationY;

			if (!prefersReducedMotion) {
				const pulse =
					0.5 +
					0.5 *
						Math.sin(
							time * 1.6
						);

				statusMaterial.emissiveIntensity =
					0.45 +
					pulse *
						0.85;

				seamMaterial.emissiveIntensity =
					0.35 +
					pulse *
						0.35;

				sideAccentMaterial.emissiveIntensity =
					0.16 +
					pulse *
						0.3;

				accentLight.intensity =
					3.5 +
					pulse *
						2.5;
			}

			renderer.render(
				scene,
				camera
			);
		}

		animate();

		/* --------------------------------------------------
		   Cleanup
		-------------------------------------------------- */

		return () => {
			cancelAnimationFrame(
				animationFrame
			);

			resizeObserver.disconnect();

			canvasEl.removeEventListener(
				'pointerdown',
				handlePointerDown
			);

			canvasEl.removeEventListener(
				'pointermove',
				handlePointerMove
			);

			canvasEl.removeEventListener(
				'pointerup',
				handlePointerUp
			);

			canvasEl.removeEventListener(
				'pointercancel',
				handlePointerUp
			);

			frontTexture.dispose();
			shadowTexture.dispose();

			node.traverse(
				(object) => {
					if (
						!(
							object instanceof
							THREE.Mesh
						)
					) {
						return;
					}

					object.geometry.dispose();

					if (
						Array.isArray(
							object.material
						)
					) {
						object.material.forEach(
							(material) =>
								material.dispose()
						);
					} else {
						object.material.dispose();
					}
				}
			);

			shadow.geometry.dispose();
			shadowMaterial.dispose();

			renderer.dispose();
		};
	});
</script>

<div class="node-visual">
	<div
		class="node-glow"
		aria-hidden="true"
	></div>

	<canvas
		bind:this={canvasEl}
		aria-label="Interactive 3D concept of the future Softadastra Node reference hardware."
	></canvas>
</div>

<style>
	.node-visual {
		position: relative;

		width: min(100%, 980px);
		min-height: 420px;

		margin-inline: auto;

		isolation: isolate;
	}

	canvas {
		position: relative;

		z-index: 2;

		display: block;

		width: 100%;

		outline: none;
	}

	.node-glow {
		position: absolute;

		z-index: 0;

		top: 48%;
		left: 50%;

		width: 65%;
		height: 48%;

		border-radius: 50%;

		background:
			radial-gradient(
				ellipse,
				rgb(244 123 32 / 7%),
				rgb(23 51 45 / 5%) 48%,
				transparent 72%
			);

		filter: blur(60px);

		pointer-events: none;

		transform:
			translate(-50%, -50%);
	}

	@media (max-width: 760px) {
		.node-visual {
			width: 100%;
			min-height: 390px;
		}
	}

	@media (max-width: 640px) {
		.node-visual {
			min-height: 340px;
		}

		.node-glow {
			width: 82%;
			height: 42%;

			filter: blur(50px);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		canvas {
			cursor: default !important;
		}
	}
</style>
