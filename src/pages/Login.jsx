const login = () => {
  return (
    //Login Page
    <div className="h-[100vh] w-full flex items-center justify-center bg-gray-200 gap-4">
      <div className="h-[50vh] min-w-[25vw] rounded-xl bg-white shadow-lg ">
        <form action="" className="flex flex-col gap-4 p-4">
          <label htmlFor="Email">Email:</label>
          <input
            type="text"
            name="Email"
            placeholder="email"
            className="border-2 rounded-lg p-2"
          />
          <label htmlFor="Email">Password:</label>
          <input
            type="password"
            name="Email"
            placeholder="password"
            className="border-2 rounded-lg p-2"
          />
          <p className="text-base font-medium">Forgot Password?</p>
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Login
          </button>
        </form>
      </div>
      <div className="flex flex-col items-start justify-center gap-2 border-2">
        <h1 className="text-4xl font-bold text-gray-700">Login Now!</h1>
        <p className="text-gray-700 text-md w-[30vw] font-normal">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam porro at
          dolorum?jgujyggggiiiiiiigy
        </p>
      </div>
    </div>
  );
};

export default login;
