import Link from "next/link";
export default function HomePage() {
  return (
    <>
      <h1>Home page</h1>
    <Link href={"/foods"}>Food</Link>
    <p></p>
    <Link href={"/hotels"}>Hotels</Link>
    <p></p>
    <Link href={"/parks"}>Parks</Link>
    <p></p>
    <Link href={"/sports"}>Sport & Exercise</Link>
    </>
  );
}
