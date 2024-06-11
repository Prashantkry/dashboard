import Image from "next/image";
import LeftPanel from "./components/LeftPanel";
import MiddlePanel from "./components/MiddlePanel";
import RightPanel from "./components/RightPanel";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-between">
        <LeftPanel />
        <MiddlePanel />
        <RightPanel />
      </div>
    </>
  );
}
