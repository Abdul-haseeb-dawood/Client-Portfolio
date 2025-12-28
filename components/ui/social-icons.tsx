"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";

export default function SocialIcon() {
  return (
    <>
      <ul className="social">
        <li className="social-item">
          <div className="social-link">
          <Link className="social-link" href="https://github.com/syed-yarooq-hussain">
            <FaGithub/>
          </Link>
          </div>
        </li>

        <li className="social-item">
         <div className="social-link">
          <Link className="social-link" href="https://www.linkedin.com/in/syed-yarooq">
            <FaLinkedin/>
          </Link>
          </div>
        </li>

        <li className="social-item">
         <div className="social-link">
          <Link className="social-link" href="https://www.fiverr.com/syedyarooq/buying?source=avater_menu_profile">
            <TbBrandFiverr/>
          </Link>
         </div>
        </li>

        <li className="social-item">
          <div className="social-link">
          <Link className="social-link" href="https://www.upwork.com/freelancers/syedyarooqh">
            <SiUpwork/>
          </Link>
         </div>
        </li>
      </ul>

      <style jsx>{`
        .social {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          margin: 0;
          padding-left: 0;
          list-style: none;
        }

        .social-item {
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 30px;
        }

        .social-link {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          transition: 0.4s ease;
          background: white;
          color: inherit;
          transform: perspective(1000px) rotate(-30deg) skew(25deg);
          box-shadow: 0 0 0 transparent;
        }

        .social-link::before,
        .social-link::after {
          content: "";
          position: absolute;
          background: #b1b1b1;
          transition: 0.4s ease;
        }

        .social-link::before {
          height: 100%;
          width: 10px;
          left: -10px;
          top: 5px;
          transform: skewY(-45deg);
        }

        .social-link::after {
          width: 100%;
          height: 10px;
          left: -5px;
          top: 40px;
          transform: skewX(-45deg);
        }

        .social-link:hover {
          transform: perspective(1000px) rotate(-30deg) skew(25deg) translate(10px, -10px);
          color: white;
          box-shadow: -20px 20px 10px rgba(0, 0, 0, 0.5);
        }

        .social-item:nth-child(1) .social-link {
          color: #3b5999;
        }
        .social-item:nth-child(1):hover .social-link,
        .social-item:nth-child(1):hover .social-link::before,
        .social-item:nth-child(1):hover .social-link::after {
          background: #00030A;
          color: white
        }

        .social-item:nth-child(2) .social-link {
          color: #55acee;
        }
        .social-item:nth-child(2):hover .social-link,
        .social-item:nth-child(2):hover .social-link::before,
        .social-item:nth-child(2):hover .social-link::after {
          background: #55acee;
          color: white
        }

        .social-item:nth-child(3) .social-link {
          color: #dd4b39;
        }
        .social-item:nth-child(3):hover .social-link,
        .social-item:nth-child(3):hover .social-link::before,
        .social-item:nth-child(3):hover .social-link::after {
          background: #dd4b39;
          color: white
        }

        .social-item:nth-child(4) .social-link {
          color: #e4405f;
        }
        .social-item:nth-child(4):hover .social-link,
        .social-item:nth-child(4):hover .social-link::before,
        .social-item:nth-child(4):hover .social-link::after {
          background: #e4405f;
          color: white
        }
      `}</style>
    </>
  );
}
