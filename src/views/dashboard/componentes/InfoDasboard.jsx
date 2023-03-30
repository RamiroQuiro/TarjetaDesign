import CardDashboard from "./CardDashboard";
import CardsDasboard from "./CardsDasboard";

export default function InfoDasboard() {
  return (
    <div
      className="md:mr-6 md:w-1/2 mx-auto mt-8 py-2  
    bg-amber-100 rounded-lg  shadow-lg"
    >

        <CardsDasboard>
          <CardDashboard />
        </CardsDasboard>
    </div>
  );
}
