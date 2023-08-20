const Login = () => {
	return (
		<div className="flex flex-col bg-gray-800 h-screen ">
			<div className="flex flex-1 justify-center content-center items-center">
				<form>
					<div className="flex flex-col flex-1 items-center border-2 p-10">
						<div className="flex flex-col mb-5">
							<label className="text-white mr-10 font-bold" htmlFor="Email">
								{" "}
								Email{" "}
							</label>
							<input className="border-2" type="text" name="Email" required />
						</div>
						<div className="flex flex-col mb-10">
							<label className="text-white mr-1 font-bold" htmlFor="password">
								{" "}
								Password{" "}
							</label>
							<input
								className="border-2"
								type="password"
								name="password"
								required
							/>
						</div>
						<div className="bg-white w-20 border-2 border-black justify-center flex text-gray-800 font-bold hover:text-amber-900">
							<button type="submit">Login</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
