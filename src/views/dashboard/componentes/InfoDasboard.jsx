import CardDashboard from "./CardDashboard";
import CardsDasboard from "./CardsDasboard";

export default function InfoDasboard() {
  return (
    <div
      className="md:mr-6 md:w-11/12 border-2 shadow-lg border-gray-300/50 mx-auto mt-8 p-5  
    bg-white rounded-lg  "
    >
      <CardsDasboard>
        <CardDashboard />
      </CardsDasboard>
    </div>
  );
}
