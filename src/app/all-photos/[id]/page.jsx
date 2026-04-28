import { Chip } from "@heroui/react";
import Image from "next/image";
import React from "react";

const PhotoDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://pisgen-server.vercel.app/data.json");
  const photos = await res.json();
  const photo = photos.find((p) => p.id == id);
  console.log(photo);
  return (
    <div className="w-11/12 mx-auto flex justify-around items-center my-10">
      <div className="relative aspect-square">
        <Image
          src={photo.imageUrl}
          alt={photo.title}
          width={250}
          height={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-xl"
        />
        <Chip size="sm" className="absolute top-2 right-2">
          {photo.category}
        </Chip>
      </div>
      <div>
        <h2>{photo.title}</h2>
      </div>
    </div>
  );
};

export default PhotoDetailsPage;
