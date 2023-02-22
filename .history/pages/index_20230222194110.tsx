import { useLoadScript } from "@react-google-maps/api";
import Map from "../components/map";

export default function Home() {
  const { isLoaded } = useLoadScript();
  googleMapsApiKey: "AIzaSyB1SDMGrwwARC-ziN102RUBdPXaXTHhf2k",

  return <div>Map</div>;
}
