"use client";
import { TestimonialsColumn } from "@/components/ui/projectContribution";
import { motion } from "framer-motion";

export const testimonials = [
  {
    heading: "🏢 B2B Marketplace Platform",
    text: "Led the backend development of a high-scale B2B FMCG & electronics platform with logistics, warehouse, seller, retailer, and admin systems. Migrated monolith to microservices, optimized performance, resolved production issues, and led feature development cycles across multiple teams.",
  },
  {
    heading: "☁️ AWS & DevOps Infrastructure",
    text: "Provisioned and managed AWS services including S3, CloudWatch, Lambda, ECS, and API Gateway. Implemented CI/CD, containerized applications using Docker, optimized logging pipelines, and supported scalable backend deployment flows.",
  },
  {
    heading: "📦 Middleware: eBay → Alibaba / Ecwid Integration",
    text: "Developed a Node.js/NestJS middleware enabling seamless product listing sync across platforms like eBay, Ecwid, and Alibaba with minimal user input.",
  },
  {
    heading: "📱 WhatsApp Order Chatbot",
    text: "Integrated a chatbot to manage end-to-end order flow including place/track/update for both customers and drivers via WhatsApp, supporting payments and delivery status.",
  },
  {
    heading: "🛍️ Shopify Gift App",
    text: "Built an event-based Shopify app that allowed hosts to create gift registries from store products, and guests could purchase selected gifts directly from Shopify backend.",
  },
  {
    heading: "🔧 Custom Shopify Store with Hydrogen",
    text: "Created a low-code custom storefront using Shopify Hydrogen and added personalized feature extensions with API integration.",
  },
  {
    heading: "🧾 SaaS E-Commerce Engines",
    text: "Built and deployed multiple SaaS-based e-commerce applications with features like product management, checkout, cart, inventory, and order tracking, used by different business clients.",
},
  {
    heading: "💬 Discord Broadcasting Bot",
    text: "Designed a Discord bot to auto-publish content from one channel to others and sync posts to a connected Facebook Page.",
  },
  {
    heading: "🎯 Web3 NFT Stats Bot (Discord)",
    text: "Built a bot to fetch NFT stats via APIs or scraping, process real-time data and return computed metrics back to Discord users via commands.",
  },
  {
    heading: "🚗 Ride Sharing App (Finland)",
    text: "Created a location-based ride-sharing app with custom route rendering logic (avoiding Map APIs), allowing users to request and join carpools efficiently.",
},
  {
    heading: "🌾 Finland Job Portal (COVID Era)",
    text: "Built a local job discovery portal for Finnish agricultural laborers during the pandemic, with geolocation-based job search.",
  },
  {
    heading: "🏢 Student Apartment Manager",
    text: "Created a communication & e-commerce portal for student residents to chat, shop, get notified, and interact with building communities.",
  },
  {
    heading: "🔐 IoT Smart Rental System",
    text: "Developed a keyless item rental platform with IoT integrations — users could unlock doors, shelves, and return items without staff intervention. Admins had full control over the store network.",
  },
  {
    heading: "🛡️ Audit Management Web App",
    text: "Designed a secure internal audit management system to track compliance workflows, assign responsibilities, and automate reporting cycles with user-based access roles.",
  },
  {
    heading: "🔔 Notification Service for German NGO",
    text: "Built a multilingual push-notification microservice for a German NGO to manage user alerts, emergency announcements, and volunteer communications in real-time.",
  },
  {
    heading: "🏥 Clinic Management Platform",
    text: "Developed a modern patient management portal for clinics to handle appointments, prescriptions, medical records, billing, and doctor communication dashboards.",
  },
  {
    heading: "🛒 Shopify Stores (Multiple)",
    text: "Delivered custom Shopify storefronts and embedded apps for small businesses including theme customizations, gift flow automation, and inventory sync with third-party tools.",
  },
  {
    heading: "🚚 Logistics Platform",
    text: "Built a logistics dashboard to manage vehicle tracking, order pickup, delivery timelines, route optimizations, and warehouse coordination using RESTful APIs and microservices.",
  },
  {
    heading: "🌾 Rice Distribution Marketplace",
    text: "Developed an e-commerce platform tailored for B2B rice distributors to showcase bulk products, process wholesale orders, and support multilingual customer engagement.",
  },
];


const firstColumn = testimonials.slice(0, 6);
const secondColumn = testimonials.slice(6, 12);
const thirdColumn = testimonials.slice(12, 19);


export const Contribution = () => {
  return (
    <section className=" py-20 relative bg-linear-to-b to-black via-gray-950/90 from-black "
      id="project">

    <div className=" z-10 mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-135 mx-auto"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold tracking-tighter mt-5 bg-linear-to-t to-[#B3E5F5] via-[#D4F1FC]/50 from-[#B3E5F5] bg-clip-text text-transparent">
            🧪 Project Contribution
          </h2>
          <p className='text-lg my-1 text-white tracking-tight font-normal'>Contribution Highlights</p>
          <div className="w-20 h-1 rounded-2xl bg-linear-to-b to-white via-gray-950/90 from-white mx-auto"></div>
        </motion.div>

        <div className="flex  justify-center gap-6 mt-10 mask-[linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[540px] overflow-hidden ">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block " duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default { Contribution };