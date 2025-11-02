
import SliderClient from "./SliderClient";

export default async function TravelSlider() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/destinations`,
    {
      cache: "no-store", // or 'force-cache' if data rarely changes
    }
  );
  const data = await res.json();
  const destinations = data.topRatedDestinations || [];

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-800 relative overflow-hidden">
      <SliderClient destinations={destinations} />
    </div>
  );
}
