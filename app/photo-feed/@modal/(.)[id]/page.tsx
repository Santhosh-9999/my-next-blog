import photosList from "../../photos";
import Modal from "../../../components/Modal";
import Image from "next/image";

export default async function InterceptedPhotoId({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photoId = Number(id);
  const photoSrc = photosList.find((item) => item.id === photoId)?.src;
  return (
    <Modal>
      <h1 className="text-3xl font-bold mb-4">Intercepted Photo Modal</h1>
      <Image
        src={photoSrc || `/photos/${id}.svg`}
        alt={`Photo ${id}`}
        width={600}
        height={400}
      />
    </Modal>
  );
}
