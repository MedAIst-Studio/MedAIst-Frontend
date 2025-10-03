import LandingFooter from "@/components/landing/LandingFooter";
import LandingHeader from "@/components/landing/LandingHeader";

type Props = {
  children: React.ReactNode;
};

const MarketingLayout = ({children}: Props) => {
  return (
    <>
      <LandingHeader />
      <main className="min-h-screen w-full relative">{children}</main>
      <LandingFooter />
    </>
  );
};

export default MarketingLayout;
