import Image from "next/image";
import { Button } from "./ui/button";

const Medical = () => {
  return (
    <div className="w-full max-w-[72rem] mx-auto mt-10  ">
      <div className="flex flex-col sm:flex-row justify-between items-center px-4">
        <div className="sm:w-[60%] text-center sm:text-left mb-8 sm:mb-0">
        <p className="text-[0.875rem] md:text-[1rem]  xl:text-[1rem]   font-medium leading-[2.3125rem] text-[#161E42]">
  Say goodbye to the constant worry, the endless doctor&apos;s appointments,
  the restrictive diets, and the side effects of medication. With the
  RESET Method, you can regain control of your health and reverse your
  diabetes. <br /><br />
  This revolutionary approach to health and wellness has already transformed
  the lives of hundreds of people just like you. It&apos;s not just a new way
  of managing diabetes - it&apos;s a whole new way of living. <br /><br />
  With the &apos;RESET Method&apos; you&apos;re not just managing your diabetes,
  you&apos;re eliminating it!
</p>

          <Button className="py-[2.12688rem] px-[3.125rem] rounded-lg mt-8 sm:mt-10 bg-[#FE862A]">
            <div className="flex flex-col items-center gap-2">
              {/* Use consistent button text size for all screen sizes */}
              <h4 className="text-[1rem] font-medium">
                Get Instant Access For 100% FREE
              </h4>
              {/* Display the same inner text for all screen sizes */}
              <h4 className="text-[0.75rem] font-normal">
                Download now for $37 Free (for a limited time)
              </h4>
            </div>
          </Button>
        </div>

        <div className="w-[100%] sm:w-[35%]">
          <Image
            src="/Image2.png"
            alt="image"
            width={600}
            height={200}
            className="ml-0 sm:ml-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Medical;
