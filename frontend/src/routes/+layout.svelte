<script>
	import '../app.css';
</script>

<div class="flex flex-col min-h-screen">
	<header class="glass-nav fixed top-0 w-full z-50">
		<div class="container mx-auto flex justify-between items-center px-4 py-4">
			<a href="/" class="text-2xl font-display font-semibold tracking-tighter text-text-main">
				GATE_<span class="text-violet-zk">Z</span>
			</a>
			<nav class="hidden md:flex space-x-6">
				<a href="#bridge" class="text-text-muted hover:text-cyan-security transition-colors">The Bridge</a>
				<a href="#node" class="text-text-muted hover:text-cyan-security transition-colors">The Node</a>
				<a href="#yield" class="text-text-muted hover:text-cyan-security transition-colors">The Yield</a>
				<a href="#code" class="text-text-muted hover:text-cyan-security transition-colors">The Code</a>
				<a href="#drop" class="text-text-muted hover:text-cyan-security transition-colors">The Drop</a>
			</nav>
		</div>
	</header>

	<main class="flex-grow container mx-auto px-4 py-8 pt-24">
		<slot />
	</main>

	<footer class="border-t border-border p-8 mt-12 text-sm text-text-muted">
		<div class="container mx-auto text-center space-y-4">
			<p>
				Gate Z is an independent educational platform and media outlet focused on Zero-Knowledge technology.
				<br />
				It is not affiliated, associated, authorized, endorsed by, or in any way officially connected with Gate.io Technology.
			</p>
			<p>&copy; {new Date().getFullYear()} Gate Z. All rights reserved.</p>
		</div>
	</footer>
</div>
