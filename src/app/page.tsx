import { Header } from "@/components/Header";
import { LeftSide } from "@/components/LeftSide";
import { RightSide } from "@/components/RightSide";

const Page = () => {
  return (
    <div className="max-w-[80%] mx-auto">
      <Header />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
};

export default Page;
