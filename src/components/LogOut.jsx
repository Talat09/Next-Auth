import { doLogout } from "../app/actions";
const LogOut = () => {
  return (
    <form action={doLogout}>
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-3 rounded-md w-full transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-300 cursor-pointer"
        type="submit"
      >
        Logout
      </button>
    </form>
  );
};

export default LogOut;
