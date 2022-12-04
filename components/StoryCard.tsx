import Image from "next/image";

type Props = {
  name: string;
  src: string;
  profile: string;
};

const StoryCard = ({ name, src, profile }: Props) => {
  return (
    <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer p-3">
      <Image
        className="object-cover absolute opacity-0 lg:opacity-100 rounded-full top-5 z-30"
        src={profile}
        alt={name}
        width={40}
        height={40}
      />
      <Image
        src={src}
        alt={name}
        fill
        sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
        className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
      />
    </div>
  );
};

export default StoryCard;
