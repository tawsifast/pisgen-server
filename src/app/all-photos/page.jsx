import PhotoCard from "@/components/PhotoCard";
import React from "react";

const AllPhotosPage = async () => {
  const res = await fetch("https://pisgen-server.vercel.app/data.json");
  const photos = await res.json();
  console.log(photos);
  return (
 <div className="w-11/12 mx-auto">
      <h2 className="text-3xl font-bold my-5 text-center">All Photos</h2>
      <div className="grid grid-cols-4 gap-3">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default AllPhotosPage;
