import { useLoadScript } from "@react-google-maps/api";
import Map from "../components/map";

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.,
    libraries: ['places'],

  });
  if(!isLoaded) return <div>Loading...</div>
  return <div>Map</div>;
}
