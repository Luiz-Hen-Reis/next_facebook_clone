import Image from "next/image";
import { SVGProps } from "react";

type Props = {
  Icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  src?: string;
};

const SidebarRow = ({ Icon, title, src }: Props) => {
  return (
    <div className="flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl">
      {src && (
        <Image
          src={src}
          alt="profile picture"
          width={30}
          height={30}
          className="rounded-full"
        />
      )}
      {Icon && <Icon className="h-8 w-8 text-blue-500" />}
      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  );
};

export default SidebarRow;
