import Head from "next/head";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Head>
        {" "}
        <title>The Lord of the Rings</title>
      </Head>
      <h1>Lord of the Rings - Website</h1>
      <Link href="/volumes">See all the volumes here.</Link>
    </>
  );
}
