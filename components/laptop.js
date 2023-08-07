import Image from "next/image";
import React, { useState, useEffect } from "react";
import resolvoo from "../public/resolvoo.png";
import pilatesHome from "../public/pilateshome.png";

function Laptop() {
  const [opened, setOpened] = useState(false);
  const [buttonActive, setButtonActive] = useState(true);
  const [selectedImage, setSelectedImage] = useState(resolvoo);

  const imagesArray = [
    { src: resolvoo, text: "Resolvoo", color: "#825aba" },
    {
      src: pilatesHome,
      text: "Pilates Home",
      color: "#6BA478",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const button = document.querySelector(".pimba");

      if (button) {
        const buttonPosition = button.getBoundingClientRect();
        const distanceToBottom = window.innerHeight - buttonPosition.bottom;

        const activateDistance = window.innerWidth > 768 ? 400 : 230;

        if (distanceToBottom > activateDistance && buttonActive) {
          setOpened(true);
          setButtonActive(false);
        }

        if (window.scrollY === 0) {
          setOpened(false);
          setButtonActive(true);
          setOpened(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [buttonActive]);

  return (
    <div className="flex flex-col items-start">
      <div className="w-full">
        {imagesArray.map((img, index) => (
          <div className="inline-block" key={index}>
            <button
              onClick={() => {
                setOpened(true);
                setSelectedImage(img.src);
              }}
              style={{
                backgroundColor:
                  opened && selectedImage === img.src ? img.color : "#aaaaaa",
                color: "white",
              }}
              className="pimba rounded mr-2 px-2 py-0.5"
            >
              {img.text}
            </button>
          </div>
        ))}
      </div>
      <div className="py-20 w-full">
        <div
          className="laptop cursor-pointer"
          onClick={() => setOpened((current) => !current)}
        >
          <div className={`laptop__screen ${opened ? "open" : ""}`}>
            <div className="laptop__status rounded-sm p-1 md:p-2 laptop__status--opened">
              <div className="relative h-full w-full">
                <Image src={selectedImage} fill className="rounded" />
                <div
                  className={`bg-gray-900 absolute w-full h-full transition-opacity delay-500 ${
                    opened ? "opacity-0" : "opacity-100"
                  }`}
                ></div>
              </div>
            </div>
            <div className="laptop__status laptop__status--closed"></div>
          </div>
          <div className="laptop__keyboard"></div>
        </div>
        <style jsx global>
          {`
            :root {
              --largura: 250px;
              --altura: 140px;
              --esptela: 4px;
              --espcorpo: 8px;
            }

            @media screen and (min-width: 768px) {
              :root {
                --factor: 2;
                --largura: calc(var(--factor) * 250px);
                --altura: calc(var(--factor) * 140px);
                --esptela: calc(var(--factor) * 4px);
                --espcorpo: calc(var(--factor) * 6px);
              }
            }

            .laptop {
              width: var(--largura);
              height: var(--altura);
              margin: 0 auto;
              perspective: 1000px;
              perspective-origin: bottom;
            }

            .laptop__keyboard {
              position: relative;
              margin: 0;
              width: --width;
              height: var(--espcorpo);
              background-color: gray;
              border-radius: 0 0 5px 5px;
              transform: translateZ(var(--altura));
              background: #959595; /* Old browsers */
              background: -moz-linear-gradient(
                top,
                #959595 0%,
                #0d0d0d 46%,
                #010101 50%,
                #0a0a0a 53%,
                #4e4e4e 76%,
                #383838 87%,
                #1b1b1b 100%
              ); /* FF3.6-15 */
              background: -webkit-linear-gradient(
                top,
                #959595 0%,
                #0d0d0d 46%,
                #010101 50%,
                #0a0a0a 53%,
                #4e4e4e 76%,
                #383838 87%,
                #1b1b1b 100%
              ); /* Chrome10-25,Safari5.1-6 */
              background: linear-gradient(
                to bottom,
                #959595 0%,
                #0d0d0d 46%,
                #010101 50%,
                #0a0a0a 53%,
                #4e4e4e 76%,
                #383838 87%,
                #1b1b1b 100%
              ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
              filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#959595', endColorstr='#1b1b1b',GradientType=0 );
            }

            .blank__screen {
              position: absolute;
              transform-style: preserve-3d;
              transform: translateY(-170px);
            }

            .laptop__screen {
              width: var(--largura);
              height: var(--altura);
              position: relative;
              transform-style: preserve-3d;
              transform: rotateX(-90deg);
              transition: transform 0.7s ease-in-out;
              transition:;
              transform-origin: bottom center;
            }

            .laptop__screen.open {
              transform: rotateX(0deg);
            }

            .laptop__status {
              position: absolute;
            }

            .laptop__status--opened {
              width: var(--largura);
              height: var(--altura);
              border-radius: 8px;
            }

            .laptop__status--closed {
              width: var(--largura);
              height: var(--esptela);
              top: calc(50% - var(--esptela) / 2);
              border-radius: 4px 4px 0 0;
              background: #959595; /* Old browsers */
              background: -moz-linear-gradient(
                top,
                #959595 0%,
                #0d0d0d 46%,
                #010101 50%,
                #0a0a0a 53%,
                #4e4e4e 76%,
                #383838 87%,
                #1b1b1b 100%
              ); /* FF3.6-15 */
              background: -webkit-linear-gradient(
                top,
                #959595 0%,
                #0d0d0d 46%,
                #010101 50%,
                #0a0a0a 53%,
                #4e4e4e 76%,
                #383838 87%,
                #1b1b1b 100%
              ); /* Chrome10-25,Safari5.1-6 */
              background: linear-gradient(
                to bottom,
                #959595 0%,
                #0d0d0d 46%,
                #010101 50%,
                #0a0a0a 53%,
                #4e4e4e 76%,
                #383838 87%,
                #1b1b1b 100%
              ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
              filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#959595', endColorstr='#1b1b1b',GradientType=0 );
            }

            .laptop__status--opened {
              background-color: black;
            }
            .laptop__status--closed {
              background-color: gray;
            }

            .laptop__status--closed {
              transform: translateZ(calc(-2 * var(--esptela) / 4))
                rotateX(90deg) translateZ(calc(var(--altura) / 2));
            }
          `}
        </style>
      </div>
    </div>
  );
}

export default Laptop;
