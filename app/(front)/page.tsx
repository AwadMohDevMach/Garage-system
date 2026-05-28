"use client"
import SliderCard from "@/components/SliderCard";




export default function Home() {
  return (
    <div className="">
      <div
        className=" h-screen bg-center bg-cover bg-fixed  flex flex-col justify-center items-center flex-wrap"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('../images/black-sport-car-dark-background-3d-render_68747-359.avif')",
        }}
      >
        <div className="flex flex-col items-center justify-center gap-6 relative z-10">
          <h1 className="font-[Lora] text-5xl font-bold text-white">
            WELCOME <span className="text-blue-500">awad</span>
          </h1>
          <h1 className="font-[Lora] text-5xl font-bold">
            WELCOME <span className="text-blue-500">awad</span>
          </h1>
        </div>
      </div>
      <div className="bg-slate-300 flex items-center  justify-center h-screen">
        <SliderCard />
      </div>
    </div>
  );
}
