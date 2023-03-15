import CardDashboard from "./CardDashboard";
import CardsDasboard from "./CardsDasboard";

export default function InfoDasboard() {
  return (
    <div
    className="mr-6 w-1/2 mt-8 py-2 flex-shrink-0 flex flex-col 
    bg-zinc-600 rounded-lg">

    <h3
        className="flex items-center pt-1 pb-1 px-8 text-lg font-semibold
        capitalize text-zinc-300">
        <span>nearby jobs</span>
        <button className="ml-2">
            <svg className="h-5 w-5 fill-current" viewBox="0 0 256 512">
                <path
                    d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9
                    0l-22.6-22.6c-9.4-9.4-9.4-24.6
                    0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6
                    0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136
                    136c9.5 9.4 9.5 24.6.1 34z"></path>
            </svg>
        </button>
    </h3>

    <div>

    <CardsDasboard>
<CardDashboard/>
</CardsDasboard>

    

    </div>

</div>
  )
}
