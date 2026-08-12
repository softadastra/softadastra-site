<script lang="ts">
	import Container from '$lib/components/ui/Container.svelte';
	import SoftadastraNode3D from './SoftadastraNode3D.svelte';

	const specifications = [
		{
			label: 'Purpose',
			value: 'Reference hardware for infrastructure-independent computing'
		},
		{
			label: 'Runtime',
			value: 'Softadastra Runtime'
		},
		{
			label: 'Architecture',
			value: 'x86-64 initially'
		},
		{
			label: 'CPU class',
			value: 'Low-power 4-core processor'
		},
		{
			label: 'Prototype target',
			value: 'Intel N150 class or equivalent'
		},
		{
			label: 'Memory',
			value: '16 GB'
		},
		{
			label: 'Storage',
			value: '512 GB NVMe SSD'
		},
		{
			label: 'Storage model',
			value: 'Replaceable local storage'
		},
		{
			label: 'Networking',
			value: '2.5 GbE'
		},
		{
			label: 'Wireless',
			value: 'Wi-Fi 6'
		},
		{
			label: 'Internet required',
			value: 'No'
		},
		{
			label: 'Offline operation',
			value: 'Local computation + local state'
		},
		{
			label: 'Reconnection',
			value: 'Synchronization + reconciliation through the Runtime'
		},
		{
			label: 'Fabric role',
			value: 'Local compute node'
		},
		{
			label: 'Acceleration',
			value: 'Integrated graphics initially'
		},
		{
			label: 'External compute',
			value: 'Edge · cloud · GPU nodes · future accelerators'
		},
		{
			label: 'Power input',
			value: '12 V DC target'
		},
		{
			label: 'System power',
			value: '< 20 W typical target'
		},
		{
			label: 'Power adapter',
			value: '≈ 36 W class'
		},
		{
			label: 'Cooling',
			value: 'Passive / fanless preferred'
		},
		{
			label: 'Noise',
			value: '0 dB cooling target if passive design is validated'
		},
		{
			label: 'Operating system',
			value: 'Minimal Linux-based Softadastra Node system'
		},
		{
			label: 'Security',
			value: 'Secure boot · encrypted state · device identity'
		},
		{
			label: 'Runtime memory',
			value: '< 2 GB base software stack target'
		},
		{
			label: 'Form factor',
			value: '≈ 120 × 120 × 45 mm target'
		},
		{
			label: 'Weight',
			value: '< 500 g target'
		},
		{
			label: 'Display',
			value: 'Headless by default'
		},
		{
			label: 'USB',
			value: 'At least 2 × USB 3'
		},
		{
			label: 'Deployment',
			value: 'Desk · wall · office · remote site · edge'
		},
		{
			label: 'Price target',
			value: '≤ $250 before taxes and shipping'
		},
		{
			label: 'Status',
			value: 'PLANNED',
			accent: true
		}
	];
</script>

<section
	class="node"
	id="softadastra-node"
	aria-labelledby="softadastra-node-title"
>
	<Container>
		<div class="node-content">
			<header class="node-header">
				<h2 id="softadastra-node-title">
					Softadastra Node
					<span>(planned)</span>
				</h2>

				<p>
					Future reference hardware for infrastructure-independent computing,
					powered by the Softadastra Runtime.
				</p>
			</header>

			<div class="node-stage">
				<SoftadastraNode3D />
			</div>

			<p class="node-intro">
				A small, low-power computer designed to run local applications and state,
				participate in a Softadastra computing fabric, and continue operating when
				Internet connectivity is unavailable.
			</p>

			<div class="specification-heading">
				<p>
					Target specification. The first Softadastra Node is a planned reference
					system. Final hardware may change as prototypes and the Runtime are
					validated.
				</p>
			</div>

			<div class="node-specs">
				<table>
					<thead>
						<tr>
							<th class="spec-label" scope="col"></th>

							<th class="spec-model" scope="col">
								<span class="model-name">
									node v1
								</span>

								<span class="model-status">
									reference target
								</span>
							</th>
						</tr>
					</thead>

					<tbody>
						{#each specifications as specification}
							<tr>
								<th
									class="spec-label"
									scope="row"
								>
									{specification.label}
								</th>

								<td
									class:accent-value={specification.accent}
								>
									{specification.value}
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>

			<p class="node-principle">
				One infrastructure option.
				<strong>
					Never an infrastructure dependency.
				</strong>
			</p>
		</div>
	</Container>
</section>

<style>
	.node {
		background: var(--color-white);
		color: var(--color-text);
	}

	.node-content {
		width: 100%;
		max-width: var(--content-width);

		margin-inline: auto;
		padding-block: var(--section-padding);

		font-family: var(--font-mono);
	}

	/* --------------------------------------------------
	   Header
	-------------------------------------------------- */

	.node-header {
		max-width: 850px;
	}

	.node-header h2 {
		margin: 0;

		color: var(--color-text);

		font-size: clamp(1.2rem, 1.65vw, 1.5rem);
		font-weight: var(--font-weight-bold);

		letter-spacing: -0.018em;
		line-height: 1.4;
	}

	.node-header h2 span {
		color: var(--color-accent);

		font-size: 0.8em;
		font-weight: var(--font-weight-normal);
	}

	.node-header p {
		max-width: 760px;

		margin: 9px 0 0;

		color: var(--color-text-secondary);

		font-size: clamp(0.88rem, 1vw, 0.96rem);
		font-weight: var(--font-weight-normal);

		line-height: 1.6;
	}

	/* --------------------------------------------------
	   3D Node
	-------------------------------------------------- */

	.node-stage {
		width: 100%;

		margin-top: 2px;
	}

	/* --------------------------------------------------
	   Intro below hardware
	-------------------------------------------------- */

	.node-intro {
		max-width: 900px;

		margin: 2px auto 0;

		color: var(--color-text-secondary);

		font-size: 0.82rem;
		font-weight: var(--font-weight-normal);

		line-height: 1.6;

		text-align: center;
	}

	/* --------------------------------------------------
	   Specification note
	-------------------------------------------------- */

	.specification-heading {
		max-width: 1000px;

		margin: 30px auto 10px;
	}

	.specification-heading p {
		margin: 0;

		color: var(--color-muted);

		font-size: 0.7rem;
		font-weight: var(--font-weight-normal);

		line-height: 1.5;
	}

	/* --------------------------------------------------
	   Specifications
	-------------------------------------------------- */

	.node-specs {
		width: 100%;
		max-width: 1000px;

		margin-inline: auto;

		overflow-x: auto;
	}

	.node-specs table {
		width: 100%;
		min-width: 660px;

		border-collapse: collapse;
		border-spacing: 0;
	}

	.node-specs th,
	.node-specs td {
		padding: 7px 12px;

		border: 1px solid var(--color-border);

		vertical-align: middle;
	}

	/* --------------------------------------------------
	   Left specification column
	-------------------------------------------------- */

	.spec-label {
		width: 235px;

		color: var(--color-muted);

		font-size: 0.7rem;
		font-weight: var(--font-weight-medium);

		line-height: 1.35;

		text-align: right;

		white-space: nowrap;
	}

	/* --------------------------------------------------
	   Model heading
	-------------------------------------------------- */

	.spec-model {
		background: var(--color-white);

		text-align: center;
	}

	.model-name {
		display: block;

		color: var(--color-accent);

		font-size: 0.82rem;
		font-weight: var(--font-weight-bold);

		letter-spacing: -0.01em;
		line-height: 1.3;
	}

	.model-status {
		display: block;

		margin-top: 2px;

		color: var(--color-muted);

		font-size: 0.59rem;
		font-weight: var(--font-weight-normal);

		line-height: 1.3;
	}

	/* --------------------------------------------------
	   Values
	-------------------------------------------------- */

	.node-specs td {
		color: var(--color-text);

		font-size: 0.71rem;
		font-weight: var(--font-weight-normal);

		line-height: 1.4;

		text-align: center;
	}

	.node-specs tbody tr:hover th,
	.node-specs tbody tr:hover td {
		background: rgb(244 123 32 / 2%);
	}

	.node-specs .accent-value {
		color: var(--color-accent);

		font-weight: var(--font-weight-bold);
	}

	/* --------------------------------------------------
	   Principle
	-------------------------------------------------- */

	.node-principle {
		max-width: 1000px;

		margin: 13px auto 0;

		color: var(--color-text);

		font-size: 0.75rem;
		font-weight: var(--font-weight-bold);

		line-height: 1.5;
	}

	.node-principle strong {
		color: var(--color-accent);
	}

	/* --------------------------------------------------
	   Mobile
	-------------------------------------------------- */

	@media (max-width: 640px) {
		.node-header h2 {
			font-size: 1.08rem;
		}

		.node-header p {
			margin-top: 7px;

			font-size: 0.82rem;
		}

		.node-stage {
			margin-top: 0;
		}

		.node-intro {
			font-size: 0.76rem;

			text-align: left;
		}

		.specification-heading {
			margin-top: 25px;
		}

		.specification-heading p {
			font-size: 0.65rem;
		}

		.node-specs {
			margin-inline: 0;
		}

		.node-specs table {
			min-width: 620px;
		}

		.node-specs th,
		.node-specs td {
			padding: 6px 9px;
		}

		.spec-label {
			width: 185px;

			font-size: 0.64rem;
		}

		.model-name {
			font-size: 0.75rem;
		}

		.model-status {
			font-size: 0.55rem;
		}

		.node-specs td {
			font-size: 0.65rem;
		}

		.node-principle {
			font-size: 0.7rem;
		}
	}
</style>
