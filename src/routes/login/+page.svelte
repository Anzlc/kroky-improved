<section>
	<h2>Login</h2>
	<form action="">
		<label for="username">Username</label>
		<input type="text" name="username" />
		<label for="password">Password</label>
		<input type="password" name="password" />
		<p>Don't have an account, register <a id="here" href="/register">here</a>.</p>
		<button>Login</button>
	</form>
</section>

<style>
	#here {
		color: rgb(124, 124, 255);
	}
	section {
		min-height: 100vh;
		min-height: 100svh;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding-top: 5em;
		box-sizing: border-box;
	}
	form {
		display: flex;
		flex-direction: column;
		gap: 1em;
	}

	h2 {
		font-size: 2.5em;
	}
</style>
