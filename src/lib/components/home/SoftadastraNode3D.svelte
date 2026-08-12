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

		metal: 0x9aa6a1,
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

		renderer.outputColorSpace = THREE.SRGBColorSpace;

		renderer.setClearColor(0x000000, 0);

		// Softer, filmic tone response and real shadows
		renderer.toneMapping = THREE.ACESFilmicToneMapping;
		renderer.toneMappingExposure = 1.05;
		renderer.shadowMap.enabled = true;
		renderer.shadowMap.type = THREE.PCFSoftShadowMap;

		/* --------------------------------------------------
		   Lighting
		-------------------------------------------------- */

		scene.add(new THREE.AmbientLight(0xffffff, 1.05));

		// Gentle sky/ground fill for grounded, non-flat shading
		scene.add(
			new THREE.HemisphereLight(0xdfeee8, 0x0b1d19, 0.9)
		);

		const keyLight = new THREE.DirectionalLight(
			0xfff6ec,
			3.1
		);

		keyLight.position.set(4, 6.5, 5);
		keyLight.castShadow = true;
		keyLight.shadow.mapSize.set(1024, 1024);
		keyLight.shadow.camera.near = 1;
		keyLight.shadow.camera.far = 20;
		keyLight.shadow.camera.left = -5;
		keyLight.shadow.camera.right = 5;
		keyLight.shadow.camera.top = 5;
		keyLight.shadow.camera.bottom = -5;
		keyLight.shadow.bias = -0.0004;
		keyLight.shadow.radius = 4;

		scene.add(keyLight);

		const fillLight = new THREE.DirectionalLight(
			0xa7c7bd,
			1.15
		);

		fillLight.position.set(-5, 1.5, 3);

		scene.add(fillLight);

		const backLight = new THREE.DirectionalLight(
			COLORS.accent,
			0.8
		);

		backLight.position.set(0, 3, -5);

		scene.add(backLight);

		const accentLight = new THREE.PointLight(
			COLORS.accent,
			5,
			8,
			2
		);

		accentLight.position.set(0, -0.9, 3);

		scene.add(accentLight);

		/* --------------------------------------------------
		   Node root
		-------------------------------------------------- */

		const node = new THREE.Group();

		scene.add(node);

		const WIDTH = 3.8;
		const HEIGHT = 2.15;
		const DEPTH = 2.65;

		/* --------------------------------------------------
		   Main chassis, smoother bevel and richer material
		-------------------------------------------------- */

		const chassisGeometry = new RoundedBoxGeometry(
			WIDTH,
			HEIGHT,
			DEPTH,
			14,
			0.2
		);

		const chassisMaterial = new THREE.MeshPhysicalMaterial({
			color: COLORS.shell,
			roughness: 0.32,
			metalness: 0.35,
			clearcoat: 0.5,
			clearcoatRoughness: 0.28,
			reflectivity: 0.4
		});

		const chassis = new THREE.Mesh(
			chassisGeometry,
			chassisMaterial
		);

		chassis.castShadow = true;
		chassis.receiveShadow = true;

		node.add(chassis);

		// Top bevel highlight plate catches the key light as a crisp edge
		const topPlate = new THREE.Mesh(
			new RoundedBoxGeometry(
				WIDTH - 0.14,
				0.06,
				DEPTH - 0.14,
				8,
				0.03
			),
			new THREE.MeshPhysicalMaterial({
				color: COLORS.shellLight,
				roughness: 0.26,
				metalness: 0.45,
				clearcoat: 0.6,
				clearcoatRoughness: 0.2
			})
		);

		topPlate.position.y = HEIGHT / 2 - 0.02;
		topPlate.castShadow = true;

		node.add(topPlate);

		/* --------------------------------------------------
		   Lower chassis layer
		-------------------------------------------------- */

		const lower = new THREE.Mesh(
			new RoundedBoxGeometry(
				WIDTH + 0.03,
				0.58,
				DEPTH + 0.03,
				10,
				0.15
			),
			new THREE.MeshPhysicalMaterial({
				color: COLORS.shellDark,
				roughness: 0.4,
				metalness: 0.28,
				clearcoat: 0.25,
				clearcoatRoughness: 0.35
			})
		);

		lower.position.y = -HEIGHT / 2 + 0.33;
		lower.castShadow = true;
		lower.receiveShadow = true;

		node.add(lower);

		/* --------------------------------------------------
		   Orange chassis seam sits in a routed channel
		-------------------------------------------------- */

		const seamChannel = new THREE.Mesh(
			new THREE.BoxGeometry(
				WIDTH - 0.12,
				0.06,
				DEPTH - 0.1
			),
			new THREE.MeshStandardMaterial({
				color: COLORS.shellDeep,
				roughness: 0.6,
				metalness: 0.1
			})
		);

		seamChannel.position.y = HEIGHT / 2 - 0.06;

		node.add(seamChannel);

		const seamMaterial = new THREE.MeshStandardMaterial({
			color: COLORS.accent,
			emissive: COLORS.accent,
			emissiveIntensity: 0.55,
			roughness: 0.3
		});

		const seam = new THREE.Mesh(
			new THREE.BoxGeometry(
				WIDTH - 0.2,
				0.028,
				DEPTH - 0.18
			),
			seamMaterial
		);

		seam.position.y = HEIGHT / 2 - 0.02;

		node.add(seam);

		/* --------------------------------------------------
		   Front inset, deeper recess for a machined feel
		-------------------------------------------------- */

		const frontInset = new THREE.Mesh(
			new RoundedBoxGeometry(
				3.2,
				1.34,
				0.06,
				8,
				0.09
			),
			new THREE.MeshStandardMaterial({
				color: COLORS.shellDark,
				roughness: 0.52,
				metalness: 0.15
			})
		);

		frontInset.position.set(0, 0.15, DEPTH / 2 + 0.005);
		frontInset.receiveShadow = true;

		node.add(frontInset);

		// Thin bright bezel around the inset
		const bezel = new THREE.Mesh(
			new RoundedBoxGeometry(
				3.32,
				1.46,
				0.05,
				8,
				0.1
			),
			new THREE.MeshStandardMaterial({
				color: COLORS.metal,
				roughness: 0.3,
				metalness: 0.7
			})
		);

		bezel.position.set(0, 0.15, DEPTH / 2 - 0.01);

		node.add(bezel);

		/* --------------------------------------------------
		   Front identity texture (crisper, with baseline grid)
		-------------------------------------------------- */

		function createFrontTexture() {
			const canvas = document.createElement('canvas');

			canvas.width = 1700;
			canvas.height = 620;

			const context = canvas.getContext('2d');

			if (!context) {
				throw new Error(
					'Unable to create Softadastra Node texture.'
				);
			}

			context.clearRect(0, 0, canvas.width, canvas.height);

			context.textBaseline = 'alphabetic';

			context.fillStyle = '#f7f3ed';
			context.font =
				'700 108px "SFMono-Regular", Consolas, "Liberation Mono", monospace';
			context.fillText('SOFTADASTRA', 110, 210);

			context.fillStyle = '#f47b20';
			context.font =
				'700 152px "SFMono-Regular", Consolas, "Liberation Mono", monospace';
			context.fillText('NODE', 110, 390);

			context.fillStyle = '#aebbb6';
			context.font =
				'400 34px "SFMono-Regular", Consolas, "Liberation Mono", monospace';
			context.fillText(
				'powered by Softadastra Runtime',
				110,
				490
			);

			const texture = new THREE.CanvasTexture(canvas);
			texture.colorSpace = THREE.SRGBColorSpace;
			texture.anisotropy =
				renderer.capabilities.getMaxAnisotropy();

			return texture;
		}

		const frontTexture = createFrontTexture();

		const frontLabel = new THREE.Mesh(
			new THREE.PlaneGeometry(2.9, 1.05),
			new THREE.MeshBasicMaterial({
				map: frontTexture,
				transparent: true,
				depthWrite: false
			})
		);

		frontLabel.position.set(0, 0.16, DEPTH / 2 + 0.045);

		node.add(frontLabel);

		/* --------------------------------------------------
		   Status indicator, recessed well and glow ring
		-------------------------------------------------- */

		const statusWell = new THREE.Mesh(
			new THREE.CylinderGeometry(0.09, 0.09, 0.04, 24),
			new THREE.MeshStandardMaterial({
				color: COLORS.shellDeep,
				roughness: 0.6
			})
		);

		statusWell.rotation.x = Math.PI / 2;
		statusWell.position.set(1.48, -0.63, DEPTH / 2 + 0.03);

		node.add(statusWell);

		const statusMaterial = new THREE.MeshStandardMaterial({
			color: COLORS.accent,
			emissive: COLORS.accent,
			emissiveIntensity: 0.8,
			roughness: 0.25
		});

		const statusLight = new THREE.Mesh(
			new THREE.CircleGeometry(0.05, 24),
			statusMaterial
		);

		statusLight.position.set(1.48, -0.63, DEPTH / 2 + 0.055);

		node.add(statusLight);

		/* --------------------------------------------------
		   Front ventilation, instanced evenly milled slots
		-------------------------------------------------- */

		const frontVentColumns = 16;

		const frontVent = new THREE.InstancedMesh(
			new THREE.BoxGeometry(0.03, 0.19, 0.03),
			new THREE.MeshStandardMaterial({
				color: COLORS.vent,
				roughness: 0.88,
				metalness: 0
			}),
			frontVentColumns
		);

		const dummy = new THREE.Object3D();

		for (let index = 0; index < frontVentColumns; index++) {
			dummy.position.set(
				-0.72 + index * 0.096,
				-0.64,
				DEPTH / 2 + 0.045
			);
			dummy.updateMatrix();
			frontVent.setMatrixAt(index, dummy.matrix);
		}

		node.add(frontVent);

		/* --------------------------------------------------
		   Side ventilation, instanced grid
		-------------------------------------------------- */

		const sideRows = 5;
		const sideCols = 4;

		const sideVent = new THREE.InstancedMesh(
			new THREE.BoxGeometry(0.02, 0.055, 0.42),
			new THREE.MeshStandardMaterial({
				color: COLORS.vent,
				roughness: 0.88,
				metalness: 0
			}),
			sideRows * sideCols
		);

		let sideIndex = 0;

		for (let row = 0; row < sideRows; row++) {
			for (let column = 0; column < sideCols; column++) {
				dummy.position.set(
					WIDTH / 2 + 0.01,
					0.55 - row * 0.22,
					-0.72 + column * 0.48
				);
				dummy.updateMatrix();
				sideVent.setMatrixAt(sideIndex++, dummy.matrix);
			}
		}

		node.add(sideVent);

		/* --------------------------------------------------
		   Side accent strip
		-------------------------------------------------- */

		const sideAccentMaterial = new THREE.MeshStandardMaterial({
			color: COLORS.accent,
			emissive: COLORS.accent,
			emissiveIntensity: 0.3,
			roughness: 0.32
		});

		const sideAccent = new THREE.Mesh(
			new RoundedBoxGeometry(0.035, 1.28, 0.14, 4, 0.02),
			sideAccentMaterial
		);

		sideAccent.position.set(WIDTH / 2 + 0.02, 0.08, 0.92);

		node.add(sideAccent);

		/* --------------------------------------------------
		   Rear identity mark + connector cluster
		-------------------------------------------------- */

		const rearMark = new THREE.Mesh(
			new RoundedBoxGeometry(0.46, 0.46, 0.035, 5, 0.06),
			new THREE.MeshStandardMaterial({
				color: COLORS.accent,
				emissive: COLORS.accent,
				emissiveIntensity: 0.18,
				roughness: 0.4
			})
		);

		rearMark.position.set(-1.1, 0.35, -DEPTH / 2 - 0.018);

		node.add(rearMark);

		// Rear recessed I/O panel
		const ioPanel = new THREE.Mesh(
			new RoundedBoxGeometry(2.0, 1.0, 0.05, 6, 0.06),
			new THREE.MeshStandardMaterial({
				color: COLORS.shellDeep,
				roughness: 0.55,
				metalness: 0.2
			})
		);

		ioPanel.position.set(0.35, -0.05, -DEPTH / 2 - 0.005);
		ioPanel.receiveShadow = true;

		node.add(ioPanel);

		// A row of port blocks on the I/O panel
		const portMaterial = new THREE.MeshStandardMaterial({
			color: COLORS.metal,
			roughness: 0.35,
			metalness: 0.75
		});

		const ports = new THREE.InstancedMesh(
			new THREE.BoxGeometry(0.34, 0.16, 0.05),
			portMaterial,
			4
		);

		for (let index = 0; index < 4; index++) {
			dummy.position.set(
				-0.32 + index * 0.42,
				0.18,
				-DEPTH / 2 - 0.03
			);
			dummy.rotation.set(0, 0, 0);
			dummy.updateMatrix();
			ports.setMatrixAt(index, dummy.matrix);
		}

		node.add(ports);

		// Two circular connectors below the ports
		for (let index = 0; index < 2; index++) {
			const connector = new THREE.Mesh(
				new THREE.CylinderGeometry(0.11, 0.11, 0.06, 20),
				portMaterial
			);

			connector.rotation.x = Math.PI / 2;
			connector.position.set(
				-0.1 + index * 0.5,
				-0.28,
				-DEPTH / 2 - 0.03
			);

			node.add(connector);
		}

		/* --------------------------------------------------
		   Base feet with soft rubber tint
		-------------------------------------------------- */

		const footMaterial = new THREE.MeshStandardMaterial({
			color: COLORS.shellDeep,
			roughness: 0.85,
			metalness: 0.05
		});

		const footGeometry = new RoundedBoxGeometry(
			0.5,
			0.12,
			0.5,
			5,
			0.05
		);

		const footPositions = [
			[-1.35, -0.95],
			[1.35, -0.95],
			[-1.35, 0.95],
			[1.35, 0.95]
		];

		for (const [x, z] of footPositions) {
			const foot = new THREE.Mesh(footGeometry, footMaterial);
			foot.position.set(x, -HEIGHT / 2 - 0.075, z);
			foot.castShadow = true;
			node.add(foot);
		}

		/* --------------------------------------------------
		   Ground, a real receiving plane for cast shadow,
		   plus a soft radial contact shadow on top of it.
		-------------------------------------------------- */

		const groundMaterial = new THREE.ShadowMaterial({
			opacity: 0.16
		});

		const ground = new THREE.Mesh(
			new THREE.PlaneGeometry(24, 24),
			groundMaterial
		);

		ground.rotation.x = -Math.PI / 2;
		ground.position.y = -HEIGHT / 2 - 0.135;
		ground.receiveShadow = true;

		scene.add(ground);

		const shadowTextureCanvas =
			document.createElement('canvas');

		shadowTextureCanvas.width = 512;
		shadowTextureCanvas.height = 256;

		const shadowContext =
			shadowTextureCanvas.getContext('2d');

		if (shadowContext) {
			const gradient = shadowContext.createRadialGradient(
				256,
				128,
				15,
				256,
				128,
				230
			);

			gradient.addColorStop(0, 'rgba(11,29,25,0.28)');
			gradient.addColorStop(0.48, 'rgba(11,29,25,0.11)');
			gradient.addColorStop(1, 'rgba(11,29,25,0)');

			shadowContext.fillStyle = gradient;
			shadowContext.fillRect(0, 0, 512, 256);
		}

		const shadowTexture = new THREE.CanvasTexture(
			shadowTextureCanvas
		);

		const shadowMaterial = new THREE.MeshBasicMaterial({
			map: shadowTexture,
			transparent: true,
			depthWrite: false
		});

		const shadow = new THREE.Mesh(
			new THREE.PlaneGeometry(5.3, 2.6),
			shadowMaterial
		);

		shadow.rotation.x = -Math.PI / 2;
		shadow.position.set(0, -HEIGHT / 2 - 0.13, 0.15);

		scene.add(shadow);

		/* --------------------------------------------------
		   Presentation pose
		-------------------------------------------------- */

		const REST_X = -0.12;
		const REST_Y = -0.52;

		node.rotation.x = REST_X;
		node.rotation.y = REST_Y;

		let targetRotationX = REST_X;
		let targetRotationY = REST_Y;
		let currentRotationX = REST_X;
		let currentRotationY = REST_Y;

		let dragging = false;
		let previousX = 0;
		let previousY = 0;
		let lastInteraction = performance.now();

		/* --------------------------------------------------
		   Interaction
		-------------------------------------------------- */

		function handlePointerDown(event: PointerEvent) {
			dragging = true;
			previousX = event.clientX;
			previousY = event.clientY;
			lastInteraction = performance.now();
			canvasEl.setPointerCapture(event.pointerId);
			canvasEl.style.cursor = 'grabbing';
		}

		function handlePointerMove(event: PointerEvent) {
			if (!dragging) {
				return;
			}

			const deltaX = event.clientX - previousX;
			const deltaY = event.clientY - previousY;

			previousX = event.clientX;
			previousY = event.clientY;

			targetRotationY += deltaX * 0.006;
			targetRotationX += deltaY * 0.0035;

			targetRotationX = THREE.MathUtils.clamp(
				targetRotationX,
				-0.42,
				0.25
			);

			lastInteraction = performance.now();
		}

		function handlePointerUp(event: PointerEvent) {
			dragging = false;
			lastInteraction = performance.now();
			canvasEl.style.cursor = 'grab';

			try {
				canvasEl.releasePointerCapture(event.pointerId);
			} catch {
				// Pointer capture may already be released.
			}
		}

		canvasEl.addEventListener('pointerdown', handlePointerDown);
		canvasEl.addEventListener('pointermove', handlePointerMove);
		canvasEl.addEventListener('pointerup', handlePointerUp);
		canvasEl.addEventListener('pointercancel', handlePointerUp);

		canvasEl.style.cursor = 'grab';
		canvasEl.style.touchAction = 'pan-y';

		/* --------------------------------------------------
		   Resize
		-------------------------------------------------- */

		function resize() {
			const width = parent.clientWidth;

			const height = Math.min(
				Math.max(width * 0.66, 420),
				620
			);

			renderer.setSize(width, height, false);

			camera.aspect = width / height;
			camera.updateProjectionMatrix();
		}

		resize();

		const resizeObserver = new ResizeObserver(resize);
		resizeObserver.observe(parent);

		/* --------------------------------------------------
		   Animation
		-------------------------------------------------- */

		const clock = new THREE.Clock();
		let animationFrame = 0;
		let isIntersecting = true;
		let shouldRender = !document.hidden;

		const visibilityObserver = new IntersectionObserver(
			([entry]) => {
				isIntersecting = entry.isIntersecting;
				shouldRender = isIntersecting && !document.hidden;

				if (shouldRender && !prefersReducedMotion) animate();
			},
			{ threshold: 0 }
		);

		visibilityObserver.observe(parent);

		function handleVisibilityChange() {
			shouldRender = isIntersecting && !document.hidden;

			if (shouldRender && !prefersReducedMotion) animate();
		}

		document.addEventListener('visibilitychange', handleVisibilityChange);

		function animate() {
			animationFrame = 0;

			if (!shouldRender) return;

			const time = clock.getElapsedTime();

			const idle =
				!dragging &&
				performance.now() - lastInteraction > 1300;

			if (idle && !prefersReducedMotion) {
				targetRotationY += 0.00065;
				targetRotationX +=
					(REST_X - targetRotationX) * 0.02;
			}

			currentRotationX +=
				(targetRotationX - currentRotationX) * 0.07;
			currentRotationY +=
				(targetRotationY - currentRotationY) * 0.07;

			node.rotation.x = currentRotationX;
			node.rotation.y = currentRotationY;

			if (!prefersReducedMotion) {
				const pulse =
					0.5 + 0.5 * Math.sin(time * 1.6);

				statusMaterial.emissiveIntensity =
					0.45 + pulse * 0.85;

				seamMaterial.emissiveIntensity =
					0.35 + pulse * 0.35;

				sideAccentMaterial.emissiveIntensity =
					0.16 + pulse * 0.3;

				accentLight.intensity = 3.5 + pulse * 2.5;
			}

			renderer.render(scene, camera);

			if (!prefersReducedMotion) {
				animationFrame = requestAnimationFrame(animate);
			}
		}

		animate();

		/* --------------------------------------------------
		   Cleanup
		-------------------------------------------------- */

		return () => {
			cancelAnimationFrame(animationFrame);
			resizeObserver.disconnect();
			visibilityObserver.disconnect();
			document.removeEventListener('visibilitychange', handleVisibilityChange);

			canvasEl.removeEventListener('pointerdown', handlePointerDown);
			canvasEl.removeEventListener('pointermove', handlePointerMove);
			canvasEl.removeEventListener('pointerup', handlePointerUp);
			canvasEl.removeEventListener('pointercancel', handlePointerUp);

			frontTexture.dispose();
			shadowTexture.dispose();

			node.traverse((object) => {
				if (
					!(
						object instanceof THREE.Mesh ||
						object instanceof THREE.InstancedMesh
					)
				) {
					return;
				}

				object.geometry.dispose();

				if (Array.isArray(object.material)) {
					object.material.forEach((material) =>
						material.dispose()
					);
				} else {
					object.material.dispose();
				}
			});

			ground.geometry.dispose();
			groundMaterial.dispose();
			shadow.geometry.dispose();
			shadowMaterial.dispose();

			renderer.dispose();
		};
	});
</script>

<div class="node-visual">
	<div class="node-glow" aria-hidden="true"></div>

	<canvas
		bind:this={canvasEl}
		aria-label="Interactive 3D concept of future Softadastra Node reference hardware."
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

		background: radial-gradient(
			ellipse,
			rgb(244 123 32 / 7%),
			rgb(23 51 45 / 5%) 48%,
			transparent 72%
		);

		filter: blur(60px);

		pointer-events: none;

		transform: translate(-50%, -50%);
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
