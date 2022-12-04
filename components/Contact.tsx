import Image from "next/image";

type Props = {
    contact: {
        name: string;
        src: string;
    }
}

const Contact = ({ contact }: Props) => {
  return (
    <div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl">
        <Image src={contact.src} alt={contact.name} className="rounded-full object-cover" width={50} height={50} />
        <p>{contact.name}</p>
        <div className="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full animate-bounce" />
    </div>
  )
}

export default Contact