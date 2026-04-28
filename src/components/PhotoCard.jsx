import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { PiDownloadSimpleFill } from "react-icons/pi";

const PhotoCard = ({ photo }) => {
  return (
    <Card className="border">
        <div className="relative aspect-square">
          <Image
            src={photo.imageUrl}
            alt={photo.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-xl"
          />
          <Chip size="sm" className="absolute top-2 right-2">{photo.category}</Chip>
        </div>
        <div>
          <h2>{photo.title}</h2>
        </div>
        <div className="flex items-center justify-between font-semibold">
            <p className="flex items-center gap-2 text-lg"><FaHeart />{photo.likes}</p>
            <p className="flex items-center gap-2 text-lg"><PiDownloadSimpleFill />{photo.downloads}</p>
        </div>
        <Button variant="outline" className={"w-full"}>View</Button>
    </Card>
  );
};

export default PhotoCard;
