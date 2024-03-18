import React from "react";
import Link from "next/link";
import Image from "next/image";
import { volumes } from "@/lib/data.js";

export default function theTwoTowers() {
  const volumeInfo = volumes.find(({ slug }) => slug === "the-two-towers");
  return (
    <>
      <Link href="/volumes">👉All Volumes</Link>
      <h1>{volumeInfo.title}</h1>
      <p>{volumeInfo.description}</p>
      <ul>
        {volumeInfo.books.map((book) => (
          <li key={book.title}>{`${book.ordinal}: ${book.title}`}</li>
        ))}
      </ul>
      <Image
        alt={`cover of ${volumeInfo.title}`}
        src={volumeInfo.cover}
        width="140"
        height="230"
      />
      <Link href="/volumes/the-fellowship-of-the-ring">
        <button>Previous Volume</button>
      </Link>
      <Link href="/volumes/the-return-of-the-king">
        <button>Next Volume</button>
      </Link>
    </>
  );
}
