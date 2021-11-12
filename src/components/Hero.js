import React, { useState } from "react";
import Particles from "react-tsparticles";
import Typewriter from "typewriter-effect";
import Hamburger from "hamburger-react";
const Hero = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const particlesInit = (main) => {
    // console.log(main);
  };

  const particlesLoaded = (container) => {
    // console.log(container);
  };
  const [bgColour, setBgColour] = useState("#fafafa");
  const [height, setheight] = useState("0px");
  const [istrue, setistrue] = useState("true");

  const appStyles = {
    height: `${height}`,
    background: `${bgColour}`,
  };

  const styles = {
    position: "absolute",
    fontSize: "20px",
    zIndex: 2,
    borderRadius: "40px",
    outline:"none",
    // border: "1px solid black",
    color: "black",
    duration: "1s",
    margin: "0.5em 1em",
    padding: "0.25em 1em",
    border:"none",
    background:"white"
  };
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <div style={appStyles}>
        <button
          style={styles}
        >
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </button>
      </div>
      <div className="div">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#ffffff",
              },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#000000",
              },
              links: {
                color: "#000000",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "square",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            // detectRetina: true,
          }}
        />
        <p>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Drug Detox")
                .start()
                .pauseFor(2000)
                .deleteAll()
                .typeString("Group Therapy")
                .start()
                .pauseFor(2000)
                .deleteAll()
                .typeString("Alcohol Detox")
                .start();
            }}
          />
        </p>
      </div>
    </div>
  );
};

export default Hero;
