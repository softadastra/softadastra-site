<script lang="ts">
	import { onMount } from 'svelte';
	import * as THREE from 'three';

	let canvasEl: HTMLCanvasElement;

	const COLORS = {
		graphite: 0x17332d,
		graphiteLight: 0x285047,
		graphiteDark: 0x0b1d19,
		graphiteDeep: 0x071411,

		accent: 0xf47b20,
		accentDark: 0xc95e14,
		accentSoft: 0xd98442,

		ivory: 0xf7f3ed,
		muted: 0xaebbb6
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
			34,
			1,
			0.1,
			100
		);

		camera.position.set(0, 0.15, 7.4);

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
		   Lights
		-------------------------------------------------- */

		const ambientLight =
			new THREE.AmbientLight(
				0xffffff,
				1.35
			);

		scene.add(ambientLight);

		const keyLight =
			new THREE.DirectionalLight(
				0xfff5ea,
				3.4
			);

		keyLight.position.set(
			4.5,
			5.5,
			5.5
		);

		scene.add(keyLight);

		const coolLight =
			new THREE.DirectionalLight(
				0xa9c8be,
				1.5
			);

		coolLight.position.set(
			-4,
			1,
			3
		);

		scene.add(coolLight);

		const runtimeLight =
			new THREE.PointLight(
				COLORS.accent,
				11,
				9,
				2
			);

		runtimeLight.position.set(
			0,
			0,
			2.6
		);

		scene.add(runtimeLight);

		/* --------------------------------------------------
		   Runtime root

		   This is intentionally not a computer chassis.
		   It is a visual abstraction of a live digital engine.
		-------------------------------------------------- */

		const runtime =
			new THREE.Group();

		scene.add(runtime);

		/* --------------------------------------------------
		   Central engine body
		-------------------------------------------------- */

		const coreShellGeometry =
			new THREE.IcosahedronGeometry(
				0.82,
				3
			);

		const coreShellMaterial =
			new THREE.MeshPhysicalMaterial({
				color: COLORS.graphite,
				roughness: 0.3,
				metalness: 0.2,
				clearcoat: 0.5,
				clearcoatRoughness: 0.25
			});

		const coreShell =
			new THREE.Mesh(
				coreShellGeometry,
				coreShellMaterial
			);

		runtime.add(coreShell);

		/* --------------------------------------------------
		   Inner orange core
		-------------------------------------------------- */

		const coreGeometry =
			new THREE.IcosahedronGeometry(
				0.5,
				4
			);

		const coreMaterial =
			new THREE.MeshPhysicalMaterial({
				color: COLORS.accent,
				emissive: COLORS.accent,
				emissiveIntensity: 0.75,
				roughness: 0.24,
				metalness: 0.04,
				clearcoat: 0.35,
				transparent: true,
				opacity: 0.96
			});

		const core =
			new THREE.Mesh(
				coreGeometry,
				coreMaterial
			);

		runtime.add(core);

		/* --------------------------------------------------
		   Inner dark nucleus
		-------------------------------------------------- */

		const nucleusGeometry =
			new THREE.SphereGeometry(
				0.22,
				32,
				32
			);

		const nucleusMaterial =
			new THREE.MeshStandardMaterial({
				color: COLORS.graphiteDeep,
				emissive: COLORS.accentDark,
				emissiveIntensity: 0.55,
				roughness: 0.35
			});

		const nucleus =
			new THREE.Mesh(
				nucleusGeometry,
				nucleusMaterial
			);

		runtime.add(nucleus);

		/* --------------------------------------------------
		   Gyroscopic runtime rings
		-------------------------------------------------- */

		type RuntimeRing = {
			mesh: THREE.Mesh;
			speed: number;
			axis: 'x' | 'y' | 'z';
		};

		const runtimeRings: RuntimeRing[] = [];

		function createRing(
			radius: number,
			tube: number,
			color: number,
			rotation: THREE.Euler,
			speed: number,
			axis: RuntimeRing['axis']
		) {
			const geometry =
				new THREE.TorusGeometry(
					radius,
					tube,
					20,
					120
				);

			const material =
				new THREE.MeshPhysicalMaterial({
					color,
					emissive:
						color === COLORS.accent
							? COLORS.accent
							: COLORS.graphiteDark,
					emissiveIntensity:
						color === COLORS.accent
							? 0.5
							: 0.05,
					roughness: 0.3,
					metalness: 0.28,
					clearcoat: 0.3
				});

			const mesh =
				new THREE.Mesh(
					geometry,
					material
				);

			mesh.rotation.copy(rotation);

			runtime.add(mesh);

			runtimeRings.push({
				mesh,
				speed,
				axis
			});

			return mesh;
		}

		createRing(
			1.22,
			0.035,
			COLORS.accent,
			new THREE.Euler(
				Math.PI / 2,
				0,
				0
			),
			0.22,
			'z'
		);

		createRing(
			1.5,
			0.028,
			COLORS.graphiteLight,
			new THREE.Euler(
				0.45,
				0.2,
				0.8
			),
			-0.12,
			'y'
		);

		createRing(
			1.78,
			0.025,
			COLORS.graphite,
			new THREE.Euler(
				-0.8,
				0.45,
				0.2
			),
			0.09,
			'x'
		);

		/* --------------------------------------------------
		   Structural arcs

		   These give the Runtime the feeling of an engine
		   without making it look like physical hardware.
		-------------------------------------------------- */

		const structuralGroup =
			new THREE.Group();

		runtime.add(structuralGroup);

		const structureMaterial =
			new THREE.MeshStandardMaterial({
				color: COLORS.graphiteLight,
				roughness: 0.4,
				metalness: 0.18
			});

		const structureGeometry =
			new THREE.BoxGeometry(
				0.035,
				2.85,
				0.035
			);

		for (let index = 0; index < 6; index++) {
			const structure =
				new THREE.Mesh(
					structureGeometry,
					structureMaterial
				);

			const angle =
				(index / 6) *
				Math.PI *
				2;

			structure.rotation.z =
				angle;

			structuralGroup.add(
				structure
			);
		}

		structuralGroup.rotation.z =
			Math.PI / 6;

		/* --------------------------------------------------
		   Runtime nodes
		-------------------------------------------------- */

		const nodeGroup =
			new THREE.Group();

		runtime.add(nodeGroup);

		const nodeGeometry =
			new THREE.SphereGeometry(
				0.065,
				20,
				20
			);

		const runtimeNodes: THREE.Mesh[] = [];

		for (let index = 0; index < 8; index++) {
			const material =
				new THREE.MeshStandardMaterial({
					color:
						index % 3 === 0
							? COLORS.accent
							: COLORS.ivory,
					emissive:
						index % 3 === 0
							? COLORS.accent
							: COLORS.graphiteLight,
					emissiveIntensity:
						index % 3 === 0
							? 0.75
							: 0.12,
					roughness: 0.32
				});

			const node =
				new THREE.Mesh(
					nodeGeometry,
					material
				);

			const angle =
				(index / 8) *
				Math.PI *
				2;

			const radius =
				index % 2 === 0
					? 1.55
					: 1.78;

			node.position.set(
				Math.cos(angle) *
					radius,
				Math.sin(angle) *
					radius *
					0.72,
				Math.sin(
					angle * 1.5
				) * 0.42
			);

			nodeGroup.add(node);

			runtimeNodes.push(node);
		}

		/* --------------------------------------------------
		   Energy particles
		-------------------------------------------------- */

		const particleCount = 46;

		const particlePositions =
			new Float32Array(
				particleCount * 3
			);

		const particleSeeds: Array<{
			radius: number;
			offset: number;
			speed: number;
			height: number;
		}> = [];

		for (
			let index = 0;
			index < particleCount;
			index++
		) {
			particleSeeds.push({
				radius:
					1 +
					Math.random() *
						1.15,
				offset:
					Math.random() *
					Math.PI *
					2,
				speed:
					0.16 +
					Math.random() *
						0.24,
				height:
					-0.75 +
					Math.random() *
						1.5
			});
		}

		const particleGeometry =
			new THREE.BufferGeometry();

		particleGeometry.setAttribute(
			'position',
			new THREE.BufferAttribute(
				particlePositions,
				3
			)
		);

		const particleMaterial =
			new THREE.PointsMaterial({
				color: COLORS.accent,
				size: 0.035,
				transparent: true,
				opacity: 0.75,
				depthWrite: false,
				blending:
					THREE.AdditiveBlending
			});

		const particles =
			new THREE.Points(
				particleGeometry,
				particleMaterial
			);

		runtime.add(particles);

		/* --------------------------------------------------
		   Orbit pulses
		-------------------------------------------------- */

		const pulseGeometry =
			new THREE.SphereGeometry(
				0.055,
				18,
				18
			);

		const pulseMaterial =
			new THREE.MeshBasicMaterial({
				color: COLORS.accent
			});

		const pulseA =
			new THREE.Mesh(
				pulseGeometry,
				pulseMaterial
			);

		const pulseB =
			new THREE.Mesh(
				pulseGeometry,
				pulseMaterial.clone()
			);

		runtime.add(
			pulseA,
			pulseB
		);

		/* --------------------------------------------------
		   Runtime label
		-------------------------------------------------- */

		function createRuntimeTexture() {
			const canvas =
				document.createElement(
					'canvas'
				);

			canvas.width = 1600;
			canvas.height = 420;

			const context =
				canvas.getContext('2d');

			if (!context) {
				throw new Error(
					'Unable to create Softadastra Runtime label.'
				);
			}

			context.clearRect(
				0,
				0,
				canvas.width,
				canvas.height
			);

			context.textAlign =
				'center';

			context.textBaseline =
				'middle';

			context.fillStyle =
				'#f7f3ed';

			context.font =
				'700 82px "SFMono-Regular", Consolas, "Liberation Mono", monospace';

			context.fillText(
				'SOFTADASTRA',
				canvas.width / 2,
				150
			);

			context.fillStyle =
				'#f47b20';

			context.font =
				'700 118px "SFMono-Regular", Consolas, "Liberation Mono", monospace';

			context.fillText(
				'RUNTIME',
				canvas.width / 2,
				270
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

		const runtimeTexture =
			createRuntimeTexture();

		const runtimeLabelMaterial =
			new THREE.MeshBasicMaterial({
				map: runtimeTexture,
				transparent: true,
				depthWrite: false,
				side: THREE.DoubleSide
			});

		const runtimeLabel =
			new THREE.Mesh(
				new THREE.PlaneGeometry(
					2.45,
					0.64
				),
				runtimeLabelMaterial
			);

		runtimeLabel.position.set(
			0,
			-0.05,
			0.91
		);

		runtime.add(runtimeLabel);

		/* --------------------------------------------------
		   Outer halo
		-------------------------------------------------- */

		const haloGeometry =
			new THREE.RingGeometry(
				2.12,
				2.16,
				128
			);

		const haloMaterial =
			new THREE.MeshBasicMaterial({
				color: COLORS.accent,
				transparent: true,
				opacity: 0.1,
				side: THREE.DoubleSide,
				depthWrite: false,
				blending:
					THREE.AdditiveBlending
			});

		const halo =
			new THREE.Mesh(
				haloGeometry,
				haloMaterial
			);

		halo.rotation.x =
			Math.PI / 2;

		runtime.add(halo);

		/* --------------------------------------------------
		   Initial presentation pose
		-------------------------------------------------- */

		const REST_X = -0.1;
		const REST_Y = -0.32;

		runtime.rotation.x =
			REST_X;

		runtime.rotation.y =
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
		   Pointer interaction
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
				deltaX * 0.0055;

			targetRotationX +=
				deltaY * 0.0035;

			targetRotationX =
				THREE.MathUtils.clamp(
					targetRotationX,
					-0.5,
					0.35
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
				// Pointer may already be released.
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

		canvasEl.style.cursor = 'grab';

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
						width * 0.68,
						420
					),
					650
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

		function animateParticles(
			time: number
		) {
			const attribute =
				particleGeometry.getAttribute(
					'position'
				) as THREE.BufferAttribute;

			for (
				let index = 0;
				index < particleSeeds.length;
				index++
			) {
				const particle =
					particleSeeds[index];

				const angle =
					particle.offset +
					time *
						particle.speed;

				const radius =
					particle.radius;

				const x =
					Math.cos(angle) *
					radius;

				const y =
					particle.height +
					Math.sin(
						angle * 2
					) *
						0.18;

				const z =
					Math.sin(angle) *
					radius *
					0.52;

				attribute.setXYZ(
					index,
					x,
					y,
					z
				);
			}

			attribute.needsUpdate =
				true;
		}

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
					1200;

			if (
				idle &&
				!prefersReducedMotion
			) {
				targetRotationY +=
					0.0007;

				targetRotationX +=
					(
						REST_X -
						targetRotationX
					) *
					0.018;
			}

			currentRotationX +=
				(
					targetRotationX -
					currentRotationX
				) *
				0.075;

			currentRotationY +=
				(
					targetRotationY -
					currentRotationY
				) *
				0.075;

			runtime.rotation.x =
				currentRotationX;

			runtime.rotation.y =
				currentRotationY;

			if (!prefersReducedMotion) {
				runtime.position.y =
					Math.sin(
						time * 0.65
					) *
					0.035;

				/* ------------------------------
				   Runtime rings
				------------------------------ */

				for (
					const ring
					of runtimeRings
				) {
					ring.mesh.rotation[
						ring.axis
					] +=
						ring.speed *
						0.01;
				}

				structuralGroup.rotation.z +=
					0.0008;

				nodeGroup.rotation.y +=
					0.0016;

				/* ------------------------------
				   Core pulse
				------------------------------ */

				const pulse =
					0.5 +
					0.5 *
						Math.sin(
							time * 2.15
						);

				core.scale.setScalar(
					0.985 +
						pulse *
							0.035
				);

				coreMaterial.emissiveIntensity =
					0.55 +
					pulse *
						0.55;

				nucleusMaterial.emissiveIntensity =
					0.35 +
					pulse *
						0.75;

				runtimeLight.intensity =
					8 +
					pulse * 5;

				haloMaterial.opacity =
					0.055 +
					pulse *
						0.08;

				halo.scale.setScalar(
					0.97 +
						pulse *
							0.05
				);

				/* ------------------------------
				   Runtime nodes
				------------------------------ */

				runtimeNodes.forEach(
					(node, index) => {
						const material =
							node.material as THREE.MeshStandardMaterial;

						const wave =
							0.5 +
							0.5 *
								Math.sin(
									time *
										2.4 -
										index *
											0.55
								);

						material.emissiveIntensity =
							index % 3 === 0
								? 0.35 +
									wave *
										1.1
								: 0.05 +
									wave *
										0.18;
					}
				);

				/* ------------------------------
				   Data particles
				------------------------------ */

				animateParticles(
					time
				);

				/* ------------------------------
				   Orbiting pulses
				------------------------------ */

				const pulseAngleA =
					time * 0.9;

				pulseA.position.set(
					Math.cos(
						pulseAngleA
					) * 1.22,
					Math.sin(
						pulseAngleA
					) * 1.22,
					0
				);

				const pulseAngleB =
					-time * 0.65 + 1.8;

				pulseB.position.set(
					Math.cos(
						pulseAngleB
					) * 1.5,
					0.38 *
						Math.sin(
							pulseAngleB *
								1.7
						),
					Math.sin(
						pulseAngleB
					) * 0.8
				);
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

			runtimeTexture.dispose();

			runtime.traverse(
				(object) => {
					if (
						!(
							object instanceof
							THREE.Mesh ||
							object instanceof
								THREE.Points
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

			renderer.dispose();
		};
	});
</script>

<div class="runtime-visual">
	<div
		class="runtime-glow runtime-glow--orange"
		aria-hidden="true"
	></div>

	<div
		class="runtime-glow runtime-glow--graphite"
		aria-hidden="true"
	></div>

	<canvas
		bind:this={canvasEl}
		aria-label="Interactive 3D visualization of the Softadastra Runtime."
	></canvas>
</div>

<style>
	.runtime-visual {
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

		filter:
			drop-shadow(
				0 28px 32px
				rgb(10 30 25 / 12%)
			)
			drop-shadow(
				0 7px 12px
				rgb(10 30 25 / 8%)
			);
	}

	.runtime-glow {
		position: absolute;

		z-index: 0;

		top: 50%;
		left: 50%;

		border-radius: 50%;

		pointer-events: none;

		transform:
			translate(-50%, -50%);
	}

	.runtime-glow--orange {
		width: 58%;
		height: 45%;

		background:
			rgb(244 123 32 / 8%);

		filter: blur(85px);
	}

	.runtime-glow--graphite {
		width: 48%;
		height: 38%;

		background:
			rgb(23 51 45 / 8%);

		filter: blur(100px);

		transform:
			translate(
				-38%,
				-42%
			);
	}

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

		.runtime-glow--orange {
			width: 82%;
			height: 42%;
		}

		.runtime-glow--graphite {
			width: 70%;
			height: 34%;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		canvas {
			cursor: default !important;
		}
	}
</style>
