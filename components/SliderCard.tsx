"use client"
import React from "react";
import Autoplay from "embla-carousel-autoplay"
import {  FaHeart,FaLocationDot } from "react-icons/fa6";
import { FaCarSide, FaBusinessTime,FaArrowRight } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// type CardProps = {
//         icone: React.ElementType,
//         title: string
//         disc:string
//         subMain: string
//         subDisc: string
// }
  const aboutData = [
    {
      icone: FaCarSide,
      title: "Gate",
      disc: "Welcome to smart Garage, no more hassle finding a parking spot! Our app helps you locate the nearest available space effortlessly.",
      subMain: "Get Started",
      subDisc: "Park quickly and drive stress-free! ",
    },
    {
      icone: FaLocationDot,
      title: "FIND A SPOT EASILY",
      disc: "Find the nearest available spot in seconds, no need to waste time searching! The app instantly shows you empty spaces so you can park with ease.",
      subMain: "Continue",
      subDisc: "Save time and enjoy the convenience! ",
    },
    {
      icone: FaBusinessTime,
      title: "BOOK IN ADVANCE",
      disc: "Reserve your spot before arrival, secure your parking spot in advance and avoid the stress of last-minute searching.",
      subMain: "Continue",
      subDisc: "Your parking space is ready when you arrive! ",
    },
    {
      icone: MdOutlinePhoneIphone,
      title: "SMART CONTROL",
      disc: "Control your parking effortlessly, open the garage, check availability, and manage your parking—all from one app.",
      subMain: "PARKING REQUEST",
      subDisc: "Everything is in your hands, just one tap away! ",
    },
  ];
export default function SlideCard() {
    const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-6xl"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {
          aboutData.map((item, idx)=>{
            const Icon = item.icone
            return(
          <CarouselItem key={idx}>
            <div className="p-1">
              <Card
                className="bg-center bg-cover  bg-fixed py-10"
                style={{
                  backgroundImage: "url('../images/wave.svg')",
                }}
              >
                <CardContent className="p-6 flex  flex-col justify-center items-center gap-4">
                  <Icon className="text-7xl text-gray-900" />
                  <h1 className="text-5xl font-semibold text-gray-900">
                    {item.title}
                  </h1>
                  <p className="text-2xl text-center  pt-14">
                    {item.disc}
                  </p>
                  <div className="flex flex-col gap-2 justify-center items-center my-10 text-3xl">
                    <FaArrowRight className="p-1 bg-blue-400 rounded-full" />
                    <h3>{item.subMain}</h3>
                  </div>
                  <div className="flex gap-2 items-center justify-center text-2xl">
                    <p>{item.subDisc} </p>
                    <FaHeart />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
            )
          })
        }
        {/* {Array.from({ length: 5 }).map((_, index) => (

        ))} */}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
