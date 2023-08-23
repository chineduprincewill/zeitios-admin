export default function RegisterBox() {
  return (
    <div className="bg-white w-full py-2 px-8 md:px-4">
      <div className="flex flex-col sm:flex-row flex-wrap justify-between">
        <div className="my-2 w-[100%] md:w-[45%]">
          <div className="font-medium mb-2">First Name</div>
          <input
            type="text"
            className="border border-gray-light outline-none rounded text-sm w-full py-2 px-3 leading-tight focus:outline-none"
          />
        </div>
        <div className="my-2 w-[100%] md:w-[45%]">
          <div className="font-medium mb-2">Last Name</div>
          <input
            type="text"
            className="border border-gray-light outline-none rounded text-sm w-full py-2 px-3 leading-tight focus:outline-none"
          />
        </div>
        <div className="my-2 w-[100%] md:w-[45%]">
          <div className="font-medium mb-2">Phone Number</div>
          <input
            type="text"
            className="border border-gray-light outline-none rounded text-sm w-full py-2 px-3 leading-tight focus:outline-none"
          />
        </div>
        <div className="my-2 w-[100%] md:w-[45%]">
          <div className="font-medium mb-2">Email Address</div>
          <input
            type="text"
            className="border border-gray-light outline-none rounded text-sm w-full py-2 px-3 leading-tight focus:outline-none"
          />
        </div>
        <div className="my-2 w-[100%] md:w-[45%]">
          <div className="font-medium mb-2">Password</div>
          <input
            type="password"
            placeholder="*****"
            className="border border-gray-light outline-none rounded text-sm w-full py-2 px-3 leading-tight focus:outline-none"
          />
        </div>
        <div className="my-2 w-[100%] md:w-[45%]">
          <div className="font-medium mb-2">Confirm Password</div>
          <input
            type="password"
            placeholder="*****"
            className="border border-gray-light outline-none rounded text-sm w-full py-2 px-3 leading-tight focus:outline-none"
          />
        </div>
        <div className="my-2 w-[100%] md:w-[45%]">
          <div className="font-medium mb-2">Category</div>
          <select className="border border-gray-light outline-none rounded bg-white text-sm w-full py-2 px-3 leading-tight focus:outline-none">
            <option>Hello</option>
          </select>
        </div>
        <div className="my-2 w-[100%] md:w-[45%]">
          <div className="font-medium mb-2">Skills</div>
          <select className="border border-gray-light outline-none rounded bg-white text-sm w-full py-2 px-3 leading-tight focus:outline-none">
            <option>Hello</option>
          </select>
        </div>
      </div>
      <div className="flex justify-between my-4 items-center">
        <div className="flex">
          <input type="checkbox" className="mr-2" />
          <div className="">
            I agree to all{" "}
            <a href="/login" className="text-[#0259DB]">
              Terms
            </a>{" "}
            and{" "}
            <a href="/login" className="text-[#0259DB]">
              Privacy Policy
            </a>
          </div>
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
        Register
      </button>
      <div className="w-full flex flex-row justify-center my-4">
        Have an existing account?{" "}
        <a href="/login" className="text-[#0259DB]">
          {" "}
          Login
        </a>
      </div>
    </div>
  );
}
