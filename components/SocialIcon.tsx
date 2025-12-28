import { DribbbleIcon, FacebookIcon, LinkedinIcon, PlusIcon } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { SiUpwork } from "react-icons/si";
import Link from "next/link";


function SocialIcons() {
  const items = [
    {
      icon: <FaGithub />,
      bgColor: 'bg-[#000308]'
    },
    {
      icon: <FaLinkedin />,
      bgColor: 'bg-[#0070B5]'
    },
    {
      icon: <TbBrandFiverr />,
      bgColor: 'bg-[#039C25]'
    },
    {
      icon: <SiUpwork />,
      bgColor: 'bg-[#0a66c2]'
    }
  ];

  return (
    <>
      <ul className="wrapper">
        <Link href="https://github.com/syed-yarooq-hussain">
          <li className="icon github">
            <span className="tooltip">Github</span>
            <FaGithub/>
          </li>
        </Link>
        <Link href="https://www.linkedin.com/in/syed-yarooq">
          <li className="icon linkedIn">
            <span className="tooltip">LinkedIn</span>
            <FaLinkedin/>
          </li>
        </Link>
        <Link href="https://www.fiverr.com/syedyarooq/buying?source=avater_menu_profile">
          <li className="icon fiverr">
            <span className="tooltip">Fiverr</span>
            <TbBrandFiverr className=" text-black font-extrabold"/>
          </li>
        </Link>
        <Link href="https://www.upwork.com/freelancers/syedyarooqh">
          <li className="icon upwork">
            <span className="tooltip">UpWork</span>
            <SiUpwork/>
          </li>
        </Link>  
      </ul>

      <style jsx>{`
        .wrapper {
          display: inline-flex;
          height: 120px;
          width: 100%;
          justify-content: center;
          list-style: none;
          font-family: "Poppins", sans-serif;
        }
        .icon {
          position: relative;
          width: 50px;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          margin: 10px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          font-size: 25px;
          transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          box-shadow: -3px 1px 10px rgba(255, 255, 255, 0.5);
        }

        .tooltip {
          position: absolute;
          top: 0;
          background: white;
          color: black;
          padding: 5px 8px;
          border-radius: 5px;
          font-size: 12px;
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .tooltip::before {
          content: "";
          position: absolute;
          bottom: -3px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
          width: 8px;
          height: 8px;
          background: white;
        }

        .icon:hover .tooltip {
          top: -45px;
          opacity: 1;
        }

        .github:hover,
        .github:hover .tooltip,
        .github:hover .tooltip::before {
          background: #000308;
          color: white;
        }

        .linkedIn:hover,
        .linkedIn:hover .tooltip,
        .linkedIn:hover .tooltip::before {
          background: #0070B5;
          color: white;
        }

        .fiverr:hover,
        .fiverr:hover .tooltip,
        .fiverr:hover .tooltip::before {
          background: #039C25;
          color: white;
        }
        .upwork:hover,
        .upwork:hover .tooltip,
        .upwork:hover .tooltip::before {
          background: #e4405f;
          color: white;
        }
      `}</style>
    </>
  );
}

export { SocialIcons };
