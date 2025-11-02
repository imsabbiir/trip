import React from "react";
import { AnimatedTestimonials } from "./ui/AnimatedTestimonials";
import Title from "./Title";

const testimonials = [
  {
    id: 1,
    name: "Rahim Hossain",
    designation: "Product Manager at TechFlow",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    quote:
      "ExploreBD made our trip unforgettable! Every detail was perfect and the destinations were breathtaking.",
  },
  {
    id: 2,
    name: "Fatima Akter",
    designation: "CTO at InnovateSphere",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    quote:
      "I loved the personalized travel plan. The team was very helpful and made sure we had a safe and enjoyable journey.",
  },
  {
    id: 3,
    name: "Shahariyar Hasan",
    designation: "Operations Director at CloudScale",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    quote:
      "Beautiful locations and amazing experiences! Highly recommend ExploreBD for anyone looking to explore Bangladesh.",
  },
  {
    id: 4,
    name: "Ayesha Karim",
    designation: "Engineering Lead at DataPro",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    quote:
      "Every trip with ExploreBD feels magical. The guides are friendly and knowledgeable, making the journey smooth.",
  },
  {
    id: 5,
    name: "Imran Hossain",
    designation: "VP of Technology at FutureNet",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    quote:
      "The best travel experience I've had in years. ExploreBD took care of everything with such professionalism!",
  },
];

export default function Testimonials() {
  return (
    <div>
      <Title title={"Testimonials"} subTitle={"Reviews"} />
      <AnimatedTestimonials testimonials={testimonials} />;
    </div>
  );
}
