<section>
	<h2>Register</h2>
	<form action="">
		<label for="kroky-username">Kroky Username</label>
		<input type="text" name="kroky-username" />
		<label for="kroky-password">Kroky Password</label>
		<input type="text" name="kroky-password" />
		<label for="username">Username</label>
		<input type="text" name="username" />
		<label for="password">Password</label>
		<input type="password" name="password" />
		<label for="password-confirm">Password Repeat</label>
		<input type="password" name="password-confirm" />
		<p>Already have an account, login <a id="here" href="/login">here</a>.</p>
		<button>Register</button>
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
