import Volume from "@/components/Volume/Volume";
import React from "react";
import { volumes } from "@/lib/data";
import { useRouter } from "next/router";
import Head from "next/head";

export default function VolumePage() {
  const router = useRouter();
  const { slug } = router.query;
  const volume = volumes.find((element) => element.slug === slug);
  if (!volume) return;
  console.log("slug", slug);
  console.log("volume", volume);
  console.log(
    "index",
    volumes.findIndex((element) => element.slug === slug)
  );

  return (
    <>
      <Head>
        <title>{`LoTR - ${volume.title}`}</title>
      </Head>
      <Volume
        volumes={volumes}
        title={volume.title}
        description={volume.description}
        books={volume.books}
        cover={volume.cover}
        index={volumes.findIndex((element) => element.slug === slug)}
      />
    </>
  );
}
