import Category from "@/components/Category";
import PhotoCard from "@/components/PhotoCard";
import React from "react";

const AllPhotosPage = async ({searchParams}) => {
  const {category} = await searchParams;
  console.log(category);

  const res = await fetch("https://pisgen-server.vercel.app/data.json");
  const photos = await res.json();
  console.log(photos);

  const filteredPhotos = category ? photos.filter((photo)=> photo.category.toLowerCase() == category.toLowerCase() ) : photos ;
  return (
 <div className="w-11/12 mx-auto">
      <h2 className="text-3xl font-bold my-5 text-center">All Photos</h2>
      <Category/>
      <div className="grid grid-cols-4 gap-3">
        {filteredPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default AllPhotosPage;
