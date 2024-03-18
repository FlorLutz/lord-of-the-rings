import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Volume({
  volumes,
  title,
  description,
  books,
  cover,
  index,
}) {
  return (
    <>
      <Link href="/volumes">👉All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map((book) => (
          <li key={book.title}>{`${book.ordinal}: ${book.title}`}</li>
        ))}
      </ul>
      <Image alt={`cover of ${title}`} src={cover} width="140" height="230" />
      {index === 0 && (
        <Link href={`/volumes/${volumes[index + 1].slug}`}>
          <button>Next Volume</button>
        </Link>
      )}
      {index > 0 && index < volumes.length - 1 && (
        <>
          <Link href={`/volumes/${volumes[index - 1].slug}`}>
            <button>Previous Volume</button>
          </Link>
          <Link href={`/volumes/${volumes[index + 1].slug}`}>
            <button>Next Volume</button>
          </Link>
        </>
      )}
      {index === volumes.length - 1 && (
        <Link href={`/volumes/${volumes[index - 1].slug}`}>
          <button>Previous Volume</button>
        </Link>
      )}
    </>
  );
}
