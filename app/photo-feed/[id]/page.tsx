import Image from "next/image";
import photosList from "../photos";

export default async function renderPhotoFeedPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photoId = Number(id);
  const photo = photosList.find((item) => item.id === photoId);
  const photoSrc = photo ? photo.src : `/photos/${id}.svg`;

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1 className="text-3xl font-bold mb-4">Photo Feed Page - ID: {id}</h1>
      <h1 className="text-3xl font-bold mb-4">
        photographer: {photo?.photographer || "Unknown"}
      </h1>
      <Image
        src={photoSrc}
        alt={photo?.alt || `Photo ${id}`}
        width={600}
        height={400}
      />
    </div>
  );
}
