import LoginForm from "../components/LoginForm";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center m-4">
      <h2>Hello Next Auth!</h2>

      <LoginForm />
    </div>
  );
}
