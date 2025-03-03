import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://www.prolet.co.uk/wp-content/uploads/2023/10/norwich-lanes-1400x1051.jpg')",
      }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
          Sign up, please, new user!
        </h2>
        <SignUp />
      </div>
    </div>
  );
}
