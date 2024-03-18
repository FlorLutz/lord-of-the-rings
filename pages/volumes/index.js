import Link from "next/link";
import React from "react";
import { introduction, volumes } from "@/lib/data";
import Head from "next/head";
import { useRouter } from "next/router";

export default function index() {
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  if (!volumes) {
    return;
  }
  const randomSlug = getRandomElement(volumes).slug;

  console.log("random", getRandomElement(volumes));

  const router = useRouter();

  function handleRandomClick(e) {
    e.preventDefault();
    router.push(`/volumes/${randomSlug}`);
  }

  return (
    <>
      <Head>
        <title>LoTR - Volumes</title>
      </Head>
      <Link href="/">👉Back To Home</Link>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume, index) => (
          <li key={index}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleRandomClick}>Random Volume</button>

      {/* // not needed: <Link href={`/volumes/${randomSlug}`}>
        <button>Random Volume</button>
      </Link> */}
    </>
  );
}
