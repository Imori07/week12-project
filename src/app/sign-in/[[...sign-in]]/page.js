import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://twotravelingtexans.com/wp-content/uploads/2019/06/riverside-wide.jpg')",
      }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
          Sign in, please!
        </h2>
        <SignIn />
      </div>
    </div>
  );
}
