import Link from "next/link";
import photosList from "./photos";
import Image from "next/image";
export default function PhotoFeed() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1 className="text-3xl font-bold mb-4">Photo Feed</h1>

      <div className="grid grid-cols-3 gap-4">
        {photosList.map((photo) => (
          <div key={photo.id} className="overflow-hidden rounded-lg shadow-md">
            <Link href={`/photo-feed/${photo.id}`}>
              <Image
                width={photo.width}
                height={photo.height}
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
