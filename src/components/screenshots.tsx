import Image from "next/image";
import styles from "./screenshots.module.css";

export default function Screenshots() {
  const screenshots = [
    '/screenshot1.png',
    '/screenshot2.png',
    '/screenshot1.png',
    '/screenshot2.png',
    '/screenshot1.png',
    '/screenshot2.png',
    '/screenshot1.png',
    '/screenshot2.png',
  ];

  return (
    // <div className="hidden md:block relative w-full overflow-hidden my-12">
    //   {/* Left fade */}
    //   <div className="absolute left-0 w-2/12 h-full bg-gradient-to-r from-background to-transparent z-10" />
    //   {/* Right fade */}
    //   <div className="absolute right-0 w-2/12 h-full bg-gradient-to-l from-background to-transparent z-10" />

    //   {/* Actual content */}
    //   <div className={`flex w-full h-full bg-background ${styles.animationContainer}`}>
    //     {screenshots.map((url, index) =>

    //       <div className="slide-item w-1/4 h-full flex-shrink-0" key={index}>
    //         <Image src={url} alt="Server screenshot" width={1280} height={720} className="w-full" />
    //       </div>
    //     )}
    //   </div>
    // </div>

    // <div className="w-full h-80 overflow-hidden flex justify-center items-center my-12">
    //   <Image src="/screenshot1.png" alt="Server screenshot" width={1280} height={720} className="object-cover min-w-full min-h-full" />
    // </div>

    <div className="w-full flex justify-center">
      <div className="w-3/5 h-80 overflow-hidden flex justify-center items-center my-12 rounded-lg">
        <Image src="/screenshot1.png" alt="Server screenshot" width={1280} height={720} className="object-cover min-w-full min-h-full" />
      </div>
    </div>
  );
}