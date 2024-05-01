import Button from "@/ui/components/Button";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="m-1">
      <section id="top" className="text-center space-y-10">
        <div className="text-4xl md:text-5xl lg:text-6xl font-semibold space-y-3">
          <p className="">A powerfully simple email</p>
          <p className="">marketing platform.</p>
        </div>
        <div className="font-light text-xl md:text-2xl lg:text-3xl">
          <p>Have a minute? Answer a few questions to create your first email in a jiff.</p>
        </div>
        <div className="space-y-2">
          <Button className="bg-indigo-500 dark:bg-blue-50 dark:text-blue-950 dark:hover:bg-blue-500 font-normal md:text-2xl lg:text-3xl">CREATE YOUR FIRST EMAIL</Button>
          <p className="font-light">{"(It's free!! No credit card required.)"}</p>
        </div>
      </section>
      <section className="flex justify-center items-center mt-16">
        <Image src="/assets/index/section2/hero_video02.gif" alt="" height={1200} width={1200} />
      </section>

      <section className="flex flex-col sm:flex-row justify-center items-center sm:m-16 sm:space-x-16 text-center">
        <video src="/assets/index/section2/3-Sell-More.mp4" autoPlay={true} loop={true} height={600} width={600} muted />
        <div className="text-wrap sm:max-w-80 space-y-2 dark:p-5 dark:rounded-md dark:hover:bg-slate-100 dark:hover:text-black antialiased transition-colors duration-300">
          <div className="text-xl sm:text-2xl">Sell More</div>
          <div className="text-lg sm:text-3xl font-normal">Feature your products to grow new and repeat sales.</div>
          <div className="text:lg sm:text-xl font-light">Emails are mobile responsive, easily branded, and ready to delight subscribers in the inbox.</div>
        </div>
      </section>
    </div>
  );
}
