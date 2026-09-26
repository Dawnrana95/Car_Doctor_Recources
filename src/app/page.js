import Banner from "@/Components/Banner";
import Image from "next/image";
import ServiceSesion from "./ServiceSesion/page";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <ServiceSesion></ServiceSesion>
    </div>
  );
}
