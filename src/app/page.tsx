import AdvantagesList from "@/components/advantagesList/AdvantagesList";
import DepartmentMap from "@/components/departmentMap/DepartmentMap";
import Map from "@/components/map/Map";
import SenderForm from "@/components/senderForm/SenderForm";
import ShippingForm from "@/components/shippingForm/ShippingForm";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen p-24 main">
        <div className="description">
          <h1 className="title">SPEEDY - це служба доставки, яка доставляє:</h1>
          <AdvantagesList />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10">
            Відстежити
          </button>
        </div>
        <Map />
      </main>
      <div>
        <h1 className="title text-center contactInfo">Контактна інформація</h1>
        <div className="shipping flex justify-center gap-24">
          <ShippingForm />
          <DepartmentMap />
        </div>
      </div>
    </>
  );
}
