<nav>
	<ul>
		<li>Order</li>
		<li>Login</li>
		<li>Register</li>
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
