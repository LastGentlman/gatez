<script>
	import '../app.css';
</script>

<div class="flex flex-col min-h-screen bg-black text-gray-200 font-mono">
	<header class="border-b border-gray-800 p-4">
		<div class="container mx-auto flex justify-between items-center">
			<a href="/" class="text-2xl font-bold tracking-tighter">
				GATE_<span class="text-cyan-400">Z</span>
			</a>
			<nav class="hidden md:flex space-x-6">
				<a href="#bridge" class="hover:text-cyan-400 transition-colors">The Bridge</a>
				<a href="#node" class="hover:text-cyan-400 transition-colors">The Node</a>
				<a href="#yield" class="hover:text-cyan-400 transition-colors">The Yield</a>
				<a href="#code" class="hover:text-cyan-400 transition-colors">The Code</a>
				<a href="#drop" class="hover:text-cyan-400 transition-colors">The Drop</a>
			</nav>
		</div>
	</header>

	<main class="flex-grow container mx-auto p-4 py-8">
		<slot />
	</main>

	<footer class="border-t border-gray-800 p-8 mt-12 text-sm text-gray-500">
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
