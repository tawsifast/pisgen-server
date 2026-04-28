import PhotoCard from "./PhotoCard";

const TopGeneration = async () => {
  const res = await fetch("https://pisgen-server.vercel.app/data.json");
  const photos = await res.json();
  const topPhotos = photos.slice(0, 8);
  console.log(topPhotos, "data");
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-3xl font-bold my-5 text-center">Top Generation</h2>
      <div className="grid grid-cols-4 gap-3">
        {topPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default TopGeneration;
