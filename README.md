<!DOCTYPE html>
<html>
	<head>
		<title>SimpleXAccount</title>
		<body>
			<link rel="stylesheet" type="text/css" href="form_design.css">
			<script type="text/javascript" src="form_functions.js"></script>

			<div class="blur"></div>

			<div class="main">
				<form>
					<center>
						<p class="title"><strong>Create Account</strong></p>
					</center>
					<p class="sub-title">First Name</p>
					<input type="text" name="firstname" required><br>
					<p class="sub-title">Last Name</p>
					<input type="text" name="lastname" required><br>
					<p class="sub-title">Username</p>
					<input type="text" name="username" required><br>
					<p class="sub-title">Password</p>
					<input type="text" name="password" required><br>
					<p class="sub-title">Email</p> 
					<input type="email" name="email">

					<center>
						<br>
						<br>
						<input type="submit" name="Submit" value="Register" onclick="confirm()">
						<script>
							function confirm(){
								alert("Registered!")
							}
						</script>
					</center>

				</form>
			</div>

		</body>
	</head>
</html>
