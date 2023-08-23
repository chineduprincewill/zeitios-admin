export default function LoginBox() {
  return (
    <div className="bg-white w-full pb-8 px-8 md:px-4 mb-8">
      <div className="flex flex-col">
        <div className="my-4 w-[100%]">
          <div className="font-medium mb-2">Email Address</div>
          <input
            type="text"
            className="border border-gray-light outline-none rounded text-sm w-full py-3 px-3 leading-tight focus:outline-none"
          />
        </div>
        <div className="my-4 w-[100%]">
          <div className="font-medium mb-2">Password</div>
          <input
            type="password"
            placeholder="*****"
            className="border border-gray-light outline-none rounded text-sm w-full py-3 px-3 leading-tight focus:outline-none"
          />
        </div>
      </div>

      <button
        type="submit"
        className={`bg-[#0259DB] text-white w-full rounded text-white-primary text-sm py-3 font-medium bg-purple-primary grid place-items-center cursor-pointer 
            ${
              ""
              //   loading ? "cursor-not-allowed opacity-60" : "cursor-pointer"
            }
            `}
      >
        Login
      </button>
      <div className="w-full flex flex-row justify-center my-4">
        You don't have an account?{" "}
        <a href="/register" className="text-[#0259DB]">
          {"  "}
          Register
        </a>
      </div>
    </div>
  );
}
