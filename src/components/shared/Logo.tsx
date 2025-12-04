import Image from "next/image";

type Props = {
  size?: number;
};

const Logo = ({size}: Props) => {
  return <Image alt="MedAIst Logo" height={size} src="/logo.svg" width={size} />;
};

export default Logo;
