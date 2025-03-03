import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://cathedralquarternorwich.co.uk/wp-content/uploads/elementor/thumbs/quayside-norwich-wensum-river-walk-oyy0gfat2401578fzznrk0c2zsnbq3ib2h8m870arg.jpg')",
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
