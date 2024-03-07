<script>
	export let data;
</script>

<nav>
	<ul>
		<li><a href="/">Home</a></li>

		{#if data.user}
			<li><a href="/order">Order</a></li>
			<li>
				<form action="/logout" method="post">
					<button id="logout">Logout</button>
				</form>
			</li>
		{:else}
			<li><a href="/register">Register</a></li>
			<li><a href="/login">Login</a></li>
		{/if}
	</ul>
</nav>

<main>
	<slot />
</main>

<style>
	:global(body) {
		padding: 0;
		margin: 0;
		font-family: 'Roboto', sans-serif;
		background-color: black;
		color: white;
	}
	:global(a) {
		color: white;
		text-decoration: none;
	}
	#logout {
		background-color: transparent;
		font-size: 1em;
		padding: 0;
		margin: 0;
		height: min-content;
	}
	:global(input) {
		height: 3em;
		width: 18em;
		color: white;
		background-color: rgb(84, 84, 84);
		border: none;
		outline-color: none;
		border-radius: 5px;
	}

	:global(button) {
		height: 3em;
		background-color: rgb(130, 130, 130);
		color: white;
		border: none;
		outline: none;
		border-radius: 5px;
	}
	nav {
		position: fixed;
		height: 5em;

		width: 100vw;
		justify-content: flex-end;
		align-items: center;
		background-color: black;
		display: flex;
	}
	li {
		font-size: 1.3em;
		margin-right: 2em;
	}
	ul {
		display: flex;
		list-style: none;
	}
	main {
		min-height: 100vh;
		min-height: 100svh;
	}
</style>
