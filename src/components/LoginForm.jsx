import { doSocialLogin } from "../app/actions";

const LoginForm = () => {
  return (
    <form className="flex gap-8" action={doSocialLogin}>
      <button
        className="px-3 py-1 rounded bg-blue-500 text-white cursor-pointer"
        type="submit"
        name="action"
        value="google"
      >
        Login With Google
      </button>
      <button
        className="px-3 py-1 rounded bg-black text-white cursor-pointer"
        type="submit"
        name="action"
        value="github"
      >
        Login With Github
      </button>
    </form>
  );
};

export default LoginForm;
