import Image from "next/image";
import TestImage from "@public/images/test.png";
import MockImage from "@public/images/mock.png";
import MockImage2 from "@public/images/mock2.png";
import FSC from "@public/images/FSC.png";

const PartnersDetailPageContainer = () => {
  return (
    <div className="flex flex-col gap-y-12 px-20 pt-12 pb-36 bg-white text-gray-800">
      <div className="text-center">
        <h1 className="text-64px700 font-bai">Financial Support Center</h1>
      </div>
      <div className="flex flex-col items-center py-10 text-center bg-gray-50 rounded-3xl">
      <Image
          src={FSC} 
          alt="Person pointing to whiteboard"
          width={147}
          height={64}
          className="rounded-lg mb-6"
        />
      </div>
      <div className="flex flex-col px-32 text-start gap-y-5 font-inter">
        <h2 className="text-24px600 text-gray-800">
          Sollicitudin habitant viverra ornare
        </h2>
        <p className="text-gray-500 text-16px500">
          Donec ultricies eros vitae bibendum tincidunt. Duis sem erat euismod
          laoreet ornare. Donec ornare nulla nec sapien pellentesque convallis.
          Nunc vehicula quis mauris a rutrum. Aliquam erat volutpat. Duis ac
          purus at sapien vehicula egestas ut quis purus.
        </p>
        <p className="text-gray-500 text-16px500">
          At vestibulum pharetra leo nullam quis nibh pellentesque vestibulum.
          In massa, eu sed nunc massa ridiculus lacus. Quis purus commodo turpis
          in hendrerit ut porttitor. Massa turpis proin maecenas fringilla
          massa, malesuada condimentum sit. Ipsum neque sed dignissim tellus.
          Neque sit orci, sit auctor sagittis.
        </p>
      
      </div>
      <div className="mx-auto gap-x-6 grid md:grid-cols-2 items-center">
        <Image
          src={MockImage} 
          alt="Building"
          width={900}
          height={400}
          className="rounded-lg"
        />
        <Image
          src={MockImage2}
          alt="Person again"
          width={900}
          height={400}
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col px-32 py-10 text-start gap-y-5 font-inter">
        <h2 className="text-24px600 text-gray-800">
          Sollicitudin habitant viverra ornare
        </h2>
        <p className="text-gray-500 text-16px500">
          Donec ultricies eros vitae bibendum tincidunt. Duis sem erat euismod
          laoreet ornare. Donec ornare nulla nec sapien pellentesque convallis.
          Nunc vehicula quis mauris a rutrum. Aliquam erat volutpat. Duis ac
          purus at sapien vehicula egestas ut quis purus.
        </p>
        <p className="text-gray-500 text-16px500">
          At vestibulum pharetra leo nullam quis nibh pellentesque vestibulum.
          In massa, eu sed nunc massa ridiculus lacus. Quis purus commodo turpis
          in hendrerit ut porttitor. Massa turpis proin maecenas fringilla
          massa, malesuada condimentum sit. Ipsum neque sed dignissim tellus.
          Neque sit orci, sit auctor sagittis.
        </p>
        <p className="text-gray-500 text-16px500">
          At vestibulum pharetra leo nullam quis nibh pellentesque vestibulum.
          In massa, eu sed nunc massa ridiculus lacus. Quis purus commodo turpis
          in hendrerit ut porttitor. Massa turpis proin maecenas fringilla
          massa, malesuada condimentum sit. Ipsum neque sed dignissim tellus.
          Neque sit orci, sit auctor sagittis.
        </p><p className="text-gray-500 text-16px500">
          At vestibulum pharetra leo nullam quis nibh pellentesque vestibulum.
          In massa, eu sed nunc massa ridiculus lacus. Quis purus commodo turpis
          in hendrerit ut porttitor. Massa turpis proin maecenas fringilla
          massa, malesuada condimentum sit. Ipsum neque sed dignissim tellus.
          Neque sit orci, sit auctor sagittis.
        </p>
      </div>
      <div className=" mx-auto">
        <Image
          src={TestImage} 
          alt="Person pointing to whiteboard"
          width={1800}
          height={300}
          className="rounded-lg mb-6"
        />
      </div>
      <div className="flex flex-col px-32 py-10 text-start gap-y-5 font-inter">
        <h2 className="text-24px600 text-gray-800">
          Sollicitudin habitant viverra ornare
        </h2>
        <p className="text-gray-500 text-16px500">
          Diam ultrices odio ornare sollicitudin habitant viverra ornare. Quis
          amet cras suspendisse convallis fames. Nulla enim quis suspendisse
          lacinia ultrices. In euismod platea malesuada gravida. Diam at
          ullamcorper ipsum sed ac. Leo, sit vel enim aenean aenean diam. A
          sodales pulvinar diam, sed lorem morbi proin lacus. Neque natoque
          fringilla diam egestas purus. Mauris dictum velit adipiscing nibh
          nunc.
        </p>
        <p className="text-gray-500 text-16px500">
          At vestibulum pharetra leo nullam quis nibh pellentesque vestibulum.
          In massa, eu sed nunc massa ridiculus lacus. Quis purus commodo turpis
          in hendrerit ut porttitor. Massa turpis proin maecenas fringilla
          massa, malesuada condimentum sit. Ipsum neque sed dignissim tellus.
          Neque sit orci, sit auctor sagittis.
        </p>
        <ul className="list-disc pl-5 text-gray-500 text-16px500">
            <li>
            In euismod platea malesuada gravida iam at ullamcorper ipsum sed ac.
            </li>
            <li>
            In euismod platea malesuada gravida iam at ullamcorper ipsum sed ac.
            </li>
        </ul>
      </div>
     
    </div>
  );
};

export default PartnersDetailPageContainer;
