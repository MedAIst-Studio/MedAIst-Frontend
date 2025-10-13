import MarketingFooter from "@/components/shared/MarketingFooter";
import MarketingHeader from "@/components/shared/MarketingHeader";

type Props = {
  children: React.ReactNode;
};

const MarketingLayout = ({children}: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <MarketingHeader />
      <main className="flex-1 w-full relative">{children}</main>
      <MarketingFooter />
    </div>
  );
};

export default MarketingLayout;
