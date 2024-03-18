import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Lord of the Rings - Website</h1>
      <Link href="/volumes">See all the volumes here.</Link>
    </div>
  );
}
