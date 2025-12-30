<svelte:head>
	<title>Gate Z Brand Style Guide</title>
</svelte:head>

<div class="space-y-12">
	<header class="text-center space-y-4">
		<h1 class="text-4xl font-display font-semibold text-text-main">Gate Z Style Guide</h1>
		<p class="text-text-muted">Identity System v1.0 • High Performance • Obsidian & Neon</p>
	</header>

	<section class="space-y-6">
		<h2 class="text-2xl font-display font-semibold border-b border-border pb-2">1. Paleta de Colores</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
			<!-- Obsidian -->
			<div class="bento-card p-4 space-y-2">
				<div class="h-24 rounded-lg bg-obsidian border border-border"></div>
				<div class="flex justify-between items-center">
					<span class="font-medium text-text-main">Obsidian</span>
					<span class="font-mono text-sm text-text-muted">#050505</span>
				</div>
				<p class="text-xs text-text-muted">Background</p>
			</div>

			<!-- Surface -->
			<div class="bento-card p-4 space-y-2">
				<div class="h-24 rounded-lg bg-surface border border-border"></div>
				<div class="flex justify-between items-center">
					<span class="font-medium text-text-main">Surface</span>
					<span class="font-mono text-sm text-text-muted">#121212</span>
				</div>
				<p class="text-xs text-text-muted">Cards / Sections</p>
			</div>

			<!-- Electric Violet -->
			<div class="bento-card p-4 space-y-2">
				<div class="h-24 rounded-lg bg-violet-zk"></div>
				<div class="flex justify-between items-center">
					<span class="font-medium text-text-main">Electric Violet</span>
					<span class="font-mono text-sm text-text-muted">#8B5CF6</span>
				</div>
				<p class="text-xs text-text-muted">Primary Accent</p>
			</div>

			<!-- Cyan Pulse -->
			<div class="bento-card p-4 space-y-2">
				<div class="h-24 rounded-lg bg-cyan-security"></div>
				<div class="flex justify-between items-center">
					<span class="font-medium text-text-main">Cyan Pulse</span>
					<span class="font-mono text-sm text-text-muted">#06B6D4</span>
				</div>
				<p class="text-xs text-text-muted">Secondary Accent</p>
			</div>
		</div>
	</section>

	<section class="space-y-6">
		<h2 class="text-2xl font-display font-semibold border-b border-border pb-2">2. Tipografía</h2>
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
			<div class="space-y-4">
				<div class="space-y-2">
					<p class="text-sm text-text-muted font-mono">Display / Headings</p>
					<div class="font-display text-4xl font-semibold">The quick brown fox jumps over the lazy dog.</div>
					<p class="text-sm text-text-muted">Inter Tight (Semi-bold 600)</p>
				</div>
				<div class="space-y-2">
					<p class="text-sm text-text-muted font-mono">Body / Text</p>
					<div class="font-sans text-lg">The quick brown fox jumps over the lazy dog. Used for maximum legibility in technical guides.</div>
					<p class="text-sm text-text-muted">Inter (Regular 400)</p>
				</div>
				<div class="space-y-2">
					<p class="text-sm text-text-muted font-mono">Mono / Code</p>
					<div class="font-mono text-base p-4 bg-surface border border-border rounded-lg">
						0x71C...9A23 // JetBrains Mono
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="space-y-6">
		<h2 class="text-2xl font-display font-semibold border-b border-border pb-2">3. Componentes Core</h2>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			<!-- Bento Card Example -->
			<div class="space-y-4">
				<h3 class="text-lg font-medium text-text-main">Bento Card</h3>
				<div class="bento-card p-6 space-y-4">
					<h4 class="font-display font-semibold text-xl text-text-main">ZK-Rollup Architecture</h4>
					<p class="text-text-muted">
						Understanding the fundamentals of validity proofs and data availability in Layer 2 scaling solutions.
					</p>
					<div class="flex gap-2">
						<span class="badge badge-alpha">Alpha</span>
						<span class="badge badge-security">Security</span>
					</div>
				</div>
			</div>

			<!-- Badges Example -->
			<div class="space-y-4">
				<h3 class="text-lg font-medium text-text-main">ZK-Badges</h3>
				<div class="bento-card p-6 space-y-4 flex flex-col items-start gap-4">
					<div class="flex items-center gap-4">
						<span class="badge badge-alpha">Alpha</span>
						<span class="text-sm text-text-muted">Experimental features</span>
					</div>
					<div class="flex items-center gap-4">
						<span class="badge badge-security">Security</span>
						<span class="text-sm text-text-muted">Critical updates</span>
					</div>
					<div class="flex items-center gap-4">
						<span class="badge badge-live">
							<span class="live-dot"></span>
							Live Data
						</span>
						<span class="text-sm text-text-muted">Real-time metrics</span>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
