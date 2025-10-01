type Props = {
  className?: string;
  children: React.ReactNode;
};

const MaxWidthWrapper = ({className, children}: Props) => {
  return <div className={`max-w-6xl mx-auto ${className}`}>{children}</div>;
};

export default MaxWidthWrapper;
