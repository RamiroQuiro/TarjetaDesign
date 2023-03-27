import SectionTarjetaSola from "./component/SectionTarjetaSola";

export default function Home() {
  return (
    <div className="w-screen overflow-x-hidden min-h-screen h-screen md:rounded-lg bg-neutral-100 relative flex items-center justify-center">
      
      <SectionTarjetaSola />
      <div className="absolute top-0 left-0 w-full bg-blue-200/70 z-10 backdrop-blur-sm h-full"></div>
    </div>
  );
}
