<script>
    // Placeholder for data fetching or interactive elements
</script>

<div class="space-y-24">
    <!-- Hero Section -->
    <section class="text-center space-y-6 py-20">
        <h1 class="text-5xl md:text-7xl font-bold tracking-tighter">
            Architecting your entry into the <span class="text-purple-500">ZK Era</span>.
        </h1>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
            Don't just trade. Verify.
        </p>
    </section>

    <!-- I. The Bridge -->
    <section id="bridge" class="space-y-6">
        <div class="flex items-center space-x-4">
            <h2 class="text-3xl font-bold text-cyan-400">I. The Bridge</h2>
            <div class="h-px bg-gray-800 flex-grow"></div>
        </div>
        <div class="grid md:grid-cols-2 gap-8">
            <div class="p-6 border border-gray-800 rounded-lg hover:border-cyan-500/50 transition-colors">
                <h3 class="text-xl font-bold mb-2">Onboarding</h3>
                <p class="text-gray-400">Master the art of moving assets to ZkSync, Starknet, and Scroll without burning your portfolio on gas fees.</p>
                <a href="/onboarding" class="mt-4 text-sm text-cyan-500 cursor-pointer hover:underline block">View Comparative Guides &rarr;</a>
            </div>
            <div class="p-6 bg-gray-900/50 border border-gray-800 rounded-lg">
                <h3 class="text-xl font-bold mb-2">Live Fee Monitor</h3>
                <p class="text-gray-500 italic">Simulated Data</p>
                <ul class="mt-4 space-y-2 text-sm">
                    <li class="flex justify-between"><span>Ethereum Mainnet</span> <span class="text-red-400">$15.42</span></li>
                    <li class="flex justify-between"><span>Orbiter Finance</span> <span class="text-green-400">$1.20</span></li>
                    <li class="flex justify-between"><span>Rhino.fi</span> <span class="text-green-400">$0.85</span></li>
                </ul>
            </div>
        </div>
    </section>

    <!-- II. The Node -->
    <section id="node" class="space-y-6">
        <div class="flex items-center space-x-4">
            <h2 class="text-3xl font-bold text-cyan-400">II. The Node</h2>
            <div class="h-px bg-gray-800 flex-grow"></div>
        </div>
        <div class="p-8 border border-gray-800 rounded-lg bg-gradient-to-r from-gray-900 to-black">
            <h3 class="text-2xl font-bold mb-4">Run Infrastructure</h3>
            <p class="text-gray-400 mb-6">Attract technical users and aspiring validators. Learn how to run a light node on Scroll in 15 minutes.</p>
            <button class="px-6 py-2 border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black transition-colors">
                Get "One-Click" Scripts
            </button>
        </div>
    </section>

    <!-- III. The Yield -->
    <section id="yield" class="space-y-6">
        <div class="flex items-center space-x-4">
            <h2 class="text-3xl font-bold text-purple-500">III. The Yield</h2>
            <div class="h-px bg-gray-800 flex-grow"></div>
        </div>
        <div class="grid md:grid-cols-3 gap-6">
            <div class="p-6 border border-gray-800 rounded-lg hover:border-purple-500/50 transition-colors">
                <h3 class="text-lg font-bold mb-2">SyncSwap Strategy</h3>
                <span class="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">Low Risk</span>
            </div>
            <div class="p-6 border border-gray-800 rounded-lg hover:border-purple-500/50 transition-colors">
                <h3 class="text-lg font-bold mb-2">JediSwap Liquidity</h3>
                <span class="text-xs bg-yellow-900 text-yellow-300 px-2 py-1 rounded">Medium Risk</span>
            </div>
            <div class="p-6 border border-gray-800 rounded-lg hover:border-purple-500/50 transition-colors">
                <h3 class="text-lg font-bold mb-2">iZUMi Bond</h3>
                <span class="text-xs bg-red-900 text-red-300 px-2 py-1 rounded">High Risk</span>
            </div>
        </div>
    </section>

    <!-- IV. The Code -->
    <section id="code" class="space-y-6">
        <div class="flex items-center space-x-4">
            <h2 class="text-3xl font-bold text-purple-500">IV. The Code</h2>
            <div class="h-px bg-gray-800 flex-grow"></div>
        </div>
        <div class="bg-gray-900 p-6 rounded-lg font-mono text-sm border border-gray-700 overflow-x-auto">
<pre><code class="language-solidity">// Deploy your first contract in Cairo
#[contract]
mod HelloStarknet {'{'}
    struct Storage {'{'}
        balance: felt252,
    {'}'}

    #[external]
    fn increase_balance(amount: felt252) {'{'}
        let current = balance::read();
        balance::write(current + amount);
    {'}'}
{'}'}</code></pre>
        </div>
        <p class="text-center text-gray-500 text-sm">Copyable code snippets for developers.</p>
    </section>

    <!-- V. The Drop -->
    <section id="drop" class="space-y-6">
         <div class="flex items-center space-x-4">
            <h2 class="text-3xl font-bold text-cyan-400">V. The Drop</h2>
            <div class="h-px bg-gray-800 flex-grow"></div>
        </div>
        <div class="text-center p-12 border border-dashed border-gray-700 rounded-lg">
            <h3 class="text-2xl font-bold mb-4">Ecosystem Insights & News</h3>
            <p class="text-gray-400 mb-6">Organic activity matrix. Quality over Quantity.</p>
             <a href="/news" class="inline-block px-6 py-2 border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black transition-colors rounded">
                View Latest News
            </a>
        </div>
    </section>
</div>
