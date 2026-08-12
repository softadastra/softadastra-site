<!--
	SoftadastraNodeVisual.svelte

	Illustration 2D isometrique du Softadastra Node.
	Volume construit uniquement avec des coordonnees SVG (polygons par face).
	Zero Three.js, zero WebGL, zero canvas, zero onMount, zero listener.
	CSS leger uniquement, avec support prefers-reduced-motion.
-->

<div
	class="node-visual"
	role="img"
	aria-label="Concept illustration of the planned Softadastra Node reference hardware."
>
	<svg
		class="node-svg"
		viewBox="0 0 640 480"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
	>
		<defs>
			<!-- Degrade face avant -->
			<linearGradient id="sn-front" x1="0" y1="0" x2="0" y2="1">
				<stop offset="0" stop-color="#1d3f37" />
				<stop offset="0.55" stop-color="#17332d" />
				<stop offset="1" stop-color="#0f2620" />
			</linearGradient>

			<!-- Degrade face superieure (plus claire) -->
			<linearGradient id="sn-top" x1="0" y1="0" x2="1" y2="1">
				<stop offset="0" stop-color="#2f5a4f" />
				<stop offset="0.6" stop-color="#285047" />
				<stop offset="1" stop-color="#1d3f37" />
			</linearGradient>

			<!-- Degrade face laterale droite (plus sombre) -->
			<linearGradient id="sn-side" x1="0" y1="0" x2="1" y2="1">
				<stop offset="0" stop-color="#122a24" />
				<stop offset="1" stop-color="#0b1d19" />
			</linearGradient>

			<!-- Degrade bandeau inferieur -->
			<linearGradient id="sn-plinth" x1="0" y1="0" x2="0" y2="1">
				<stop offset="0" stop-color="#0b1d19" />
				<stop offset="1" stop-color="#071411" />
			</linearGradient>
		</defs>

		<!-- Ombre au sol -->
		<ellipse
			cx="320"
			cy="404"
			rx="196"
			ry="34"
			fill="#0b1d19"
			opacity="0.16"
		/>

		<!--
			Geometrie isometrique.
			Face avant : quadrilatere (bas gauche).
			Face droite : quadrilatere (bas droite, plus sombre).
			Face top : parallelogramme (dessus, plus clair).
		-->

		<!-- FACE AVANT -->
		<polygon
			points="150,190 400,190 400,330 150,330"
			fill="url(#sn-front)"
			stroke="#0b1d19"
			stroke-width="1.5"
		/>

		<!-- Bandeau inferieur avant (plinthe) -->
		<polygon
			points="150,330 400,330 400,352 150,352"
			fill="url(#sn-plinth)"
		/>

		<!-- FACE DROITE -->
		<polygon
			points="400,190 486,150 486,290 400,330"
			fill="url(#sn-side)"
			stroke="#071411"
			stroke-width="1.5"
		/>

		<!-- Bandeau inferieur droit -->
		<polygon
			points="400,330 486,290 486,312 400,352"
			fill="#071411"
		/>

		<!-- FACE SUPERIEURE -->
		<polygon
			points="150,190 236,150 486,150 400,190"
			fill="url(#sn-top)"
			stroke="#0b1d19"
			stroke-width="1.5"
		/>

		<!-- Aretes d'accent tres discretes sur les bords hauts -->
		<line
			x1="150" y1="190" x2="400" y2="190"
			stroke="#3a6a5d" stroke-width="1" opacity="0.5"
		/>
		<line
			x1="400" y1="190" x2="486" y2="150"
			stroke="#26493f" stroke-width="1" opacity="0.5"
		/>

		<!-- ===================== FACE SUPERIEURE : seam ===================== -->
		<!-- Rainure sombre -->
		<polyline
			points="196,178 432,178"
			fill="none"
			stroke="#071411"
			stroke-width="3"
			stroke-linecap="round"
			opacity="0.6"
			transform="translate(0,-2)"
		/>
		<!-- Seam orange discrete (suivant l'axe du dessus) -->
		<line
			class="sn-seam"
			x1="198" y1="176" x2="430" y2="176"
			stroke="#f47b20"
			stroke-width="2"
			stroke-linecap="round"
		/>

		<!-- ===================== FACE AVANT : contenu ===================== -->

		<!-- Label -->
		<text
			x="172" y="228"
			font-family="'SFMono-Regular', Consolas, 'Liberation Mono', monospace"
			font-size="15"
			font-weight="700"
			letter-spacing="2.5"
			fill="#f7f3ed"
		>SOFTADASTRA</text>

		<text
			x="172" y="266"
			font-family="'SFMono-Regular', Consolas, 'Liberation Mono', monospace"
			font-size="34"
			font-weight="700"
			letter-spacing="3"
			fill="#f47b20"
		>NODE</text>

		<text
			x="172" y="288"
			font-family="'SFMono-Regular', Consolas, 'Liberation Mono', monospace"
			font-size="9"
			font-weight="400"
			letter-spacing="0.5"
			fill="#aebbb6"
		>powered by Softadastra Runtime</text>

		<!-- Fentes de ventilation minimalistes (bas gauche) -->
		<g fill="#0c211c">
			<rect x="172" y="306" width="3" height="14" rx="1.5" />
			<rect x="180" y="306" width="3" height="14" rx="1.5" />
			<rect x="188" y="306" width="3" height="14" rx="1.5" />
			<rect x="196" y="306" width="3" height="14" rx="1.5" />
			<rect x="204" y="306" width="3" height="14" rx="1.5" />
			<rect x="212" y="306" width="3" height="14" rx="1.5" />
			<rect x="220" y="306" width="3" height="14" rx="1.5" />
			<rect x="228" y="306" width="3" height="14" rx="1.5" />
		</g>

		<!-- LED de statut (bas droite de la face avant) -->
		<circle cx="378" cy="314" r="7" fill="#071411" />
		<circle
			class="sn-led"
			cx="378" cy="314" r="3.6"
			fill="#f47b20"
		/>

		<!-- ===================== FACE DROITE : contenu ===================== -->

		<!-- Ventilation laterale discrete (lignes techniques suivant la perspective) -->
		<g stroke="#0c211c" stroke-width="2.5" stroke-linecap="round" opacity="0.85">
			<line x1="418" y1="212" x2="470" y2="188" />
			<line x1="418" y1="228" x2="470" y2="204" />
			<line x1="418" y1="244" x2="470" y2="220" />
			<line x1="418" y1="260" x2="470" y2="236" />
			<line x1="418" y1="276" x2="470" y2="252" />
		</g>

		<!-- Petit accent orange vertical sur la face droite -->
		<line
			class="sn-side-accent"
			x1="410" y1="208" x2="410" y2="300"
			stroke="#f47b20"
			stroke-width="2"
			stroke-linecap="round"
			opacity="0.75"
		/>

		<!-- Pieds discrets sous la face avant -->
		<rect x="168" y="352" width="26" height="7" rx="2" fill="#071411" />
		<rect x="356" y="352" width="26" height="7" rx="2" fill="#071411" />
	</svg>

	<p class="node-caption">concept reference hardware</p>
</div>

<style>
	.node-visual {
		width: 100%;
		max-width: 700px;

		margin-inline: auto;

		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
	}

	.node-svg {
		width: 100%;
		height: auto;

		display: block;
	}

	.node-caption {
		margin: 0;

		font-family:
			'SFMono-Regular', Consolas,
			'Liberation Mono', monospace;
		font-size: 0.72rem;
		letter-spacing: 0.08em;

		color: #aebbb6;
		text-transform: lowercase;
	}

	/* --------------------------------------------------
	   Animations tres subtiles (CSS uniquement)
	-------------------------------------------------- */

	.sn-led {
		animation: sn-led-pulse 3.2s ease-in-out infinite;
	}

	@keyframes sn-led-pulse {
		0%,
		100% {
			opacity: 0.6;
		}
		50% {
			opacity: 1;
		}
	}

	.sn-seam,
	.sn-side-accent {
		animation: sn-seam-glow 4s ease-in-out infinite;
	}

	@keyframes sn-seam-glow {
		0%,
		100% {
			opacity: 0.7;
		}
		50% {
			opacity: 1;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.sn-led,
		.sn-seam,
		.sn-side-accent {
			animation: none;
		}
	}
</style>
