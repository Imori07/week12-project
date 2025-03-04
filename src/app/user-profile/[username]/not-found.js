import Link from "next/link";

export default function UserNotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-center p-6"
      style={{
        backgroundImage:
          "url('https://ukmoneyman.com/wp-content/uploads/2023/09/Norwich.jpg')",
      }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-lg">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Oops! This Norwich Explorer is Missing 🕵️‍♂️
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          The user you're looking for isn't here. Maybe they've wandered off to
          explore the hidden gems of Norwich!
        </p>
        {/* <Link href="/users/">
          <span className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition cursor-pointer">
            🔍 Search for Another User
          </span>
        </Link> */}
        <br />
        <Link href="/">
          <span className="mt-4 inline-block text-blue-600 hover:underline">
            🏡 Return to Homepage
          </span>
        </Link>
      </div>
    </div>
  );
}
