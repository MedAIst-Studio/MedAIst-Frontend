import Image from "next/image";

type Props = {
  size?: number;
};

const Logo = ({size}: Props) => {
  return (
    <Image alt="MedAIst Logo" className="rounded-md" height={size} src="/logo.svg" width={size} />
  );
};

export default Logo;
