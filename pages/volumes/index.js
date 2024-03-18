import Link from "next/link";
import React from "react";
import { introduction, volumes } from "@/lib/data";

export default function index() {
  return (
    <>
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
    </>
  );
}
