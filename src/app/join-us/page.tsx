import ChalkTitle from "@/components/ChalkTItle";
import JoinUsHero from "@/components/join-us/JoinUsHero";
import SupportWorkerApplicationForm from "@/components/support-worker/SupportWorkerApplicationForm";
import Image from "next/image";


const JoinUs = () => {
  return (
    <>
      <main className="mx-auto p-2 w-full lg:max-w-7xl mt-20">
        <JoinUsHero />
      </main>
      <main className="mx-auto p-2 w-full lg:max-w-7xl">
        <div className="mb-7 flex flex-col items-start justify-center lg:items-center mt-10">
          <ChalkTitle
            title="What makes Ably Care a great place to work?"
            className="mt-10 lg:w-[65%] text-start lg:text-center"
            underlineColor="#B97021"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 rounded-2xl overflow-hidden">
          {[
            {
              image: "/icons/clinic-icon.png",
              title: "Above Award Rates",
              subTitle:
                "Above Award Rates It is our commitment to pay our support workers well above the minimum award rate.",
            },
            {
              image: "/icons/clinic-icon.png",
              title: "Dedicated Care Coordination",
              subTitle:
                "You’ll have a dedicated care coordination team! You can turn to any member of the team if you have any questions.",
            },
            {
              image: "/icons/clinic-icon.png",
              title: "Onsite and Online Training",
              subTitle:
                "Build your skills and knowledge with onsite training sessions, supplemented by our online Learning Management System.",
            },
            {
              image: "/icons/clinic-icon.png",
              title: "Rewards and Recognition",
              subTitle:
                "We recognise excellent performance with monthly ‘Cheers for Peers’ events, where we celebrate a ‘Support Worker of the Month’ and a ‘Learner of the Month’.",
            },
            {
              image: "/icons/clinic-icon.png",
              title: "Regular Coffee Catchups",
              subTitle:
                "We host informal cafe catchups for support workers to meet their care team, ask questions, and connect. Coffee or tea is on us!",
            },
            {
              image: "/icons/clinic-icon.png",
              title: "Modern EAP",
              subTitle:
                "Gain access to our award-winning platform that provides 24/7 mental health support.",
            },
            {
              image: "/icons/clinic-icon.png",
              title: "Career Growth and Development",
              subTitle:
                "Various career progression opportunities for support workers – and we provide support, training, mentorship and encouragement along the way.",
            },
            {
              image: "/icons/clinic-icon.png",
              title: "Social Events",
              subTitle:
                "We invite support workers to various social events, from local meet-ups to organisation-wide celebrations.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-start justify-center p-10 overflow-hidden group hover:bg-customAccent ${
                index % 2 === 0 ? "bg-customAccent/20" : "bg-complementary/10"
              }`}
            >
              <div className="w-full gap-3 flex flex-col items-start justify-center translate-y-5 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                <div className="relative w-32 h-32 group-hover:w-20 group-hover:h-20 left-[50%] translate-x-[-50%] group-hover:translate-x-0 group-hover:left-0 transition-all duration-300 ease-out">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="100%"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex items-center justify-center w-full group-hover:justify-start">
                  <h1 className="text-gray-800 group-hover:text-white text-2xl font-poppins font-semibold text-center group-hover:text-start transition-all duration-300 ease-in-out">
                    {item.title}
                  </h1>
                </div>
                <p className="text-sm text-white text-inter opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                  {item.subTitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full mt-20 lg:mt-28">
          <SupportWorkerApplicationForm/>
        </div>
      </main>
    </>
  );
};

export default JoinUs;
