<script lang="ts">
	const capabilities = [
		{
			area: 'Placement',
			input: 'latency · locality · trust · capabilities',
			responsibility:
				'Determine where computation should execute across available infrastructure.'
		},
		{
			area: 'Scheduling',
			input: 'priority · load · resources · constraints',
			responsibility:
				'Schedule workloads according to application requirements and current resource conditions.'
		},
		{
			area: 'Distributed state',
			input: 'durability · consistency · availability',
			responsibility:
				'Manage application state independently from any single machine or location.'
		},
		{
			area: 'Replication',
			input: 'state · availability · locality',
			responsibility:
				'Determine when and where state should be replicated across the computing fabric.'
		},
		{
			area: 'Recovery',
			input: 'failure · availability · application state',
			responsibility:
				'Recover or resume execution when machines, networks or infrastructure become unavailable.'
		},
		{
			area: 'Reconciliation',
			input: 'divergent state · connectivity · consistency',
			responsibility:
				'Reconcile state after partitions, offline operation or infrastructure reconnection.'
		},
		{
			area: 'Trust',
			input: 'identity · policy · security',
			responsibility:
				'Restrict execution and state placement to infrastructure permitted by application policy.'
		},
		{
			area: 'Hardware',
			input: 'CPU · GPU · accelerators · capabilities',
			responsibility:
				'Select compatible computing resources without permanently coupling the application to specific hardware.'
		},
		{
			area: 'Adaptation',
			input: 'network · resources · failures · changing conditions',
			responsibility:
				'Re-evaluate execution decisions while the application and its environment change.'
		}
	];
</script>

<div class="runtime-table">
	<table>
		<thead>
			<tr>
				<th scope="col">Runtime area</th>
				<th scope="col">Observes</th>
				<th scope="col">Responsibility</th>
			</tr>
		</thead>

		<tbody>
			{#each capabilities as capability}
				<tr>
					<th scope="row">
						{capability.area}
					</th>

					<td class="runtime-input">
						{capability.input}
					</td>

					<td>
						{capability.responsibility}
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.runtime-table {
		width: 100%;

		overflow-x: auto;

		font-family: var(--font-mono);
	}

	table {
		width: 100%;
		min-width: 760px;

		border-collapse: collapse;
	}

	th,
	td {
		padding: 10px 14px;

		border: 1px solid var(--color-border);

		text-align: left;
		vertical-align: top;
	}

	thead th {
		color: var(--color-text);

		font-size: 0.72rem;
		font-weight: var(--font-weight-bold);

		line-height: 1.4;
	}

	tbody th {
		width: 180px;

		color: var(--color-text);

		font-size: 0.72rem;
		font-weight: var(--font-weight-bold);

		line-height: 1.5;

		white-space: nowrap;
	}

	td {
		color: var(--color-text-secondary);

		font-size: 0.72rem;
		font-weight: var(--font-weight-normal);

		line-height: 1.55;
	}

	.runtime-input {
		width: 310px;

		color: var(--color-muted);
	}

	tbody tr:hover th,
	tbody tr:hover td {
		background: rgb(244 123 32 / 2%);
	}

	@media (max-width: 640px) {
		table {
			min-width: 700px;
		}

		th,
		td {
			padding: 8px 10px;
		}

		thead th,
		tbody th,
		td {
			font-size: 0.66rem;
		}

		tbody th {
			width: 150px;
		}

		.runtime-input {
			width: 260px;
		}
	}
</style>
