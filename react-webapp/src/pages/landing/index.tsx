import React, { FC } from "react";
import AppBar from "../../components/AppBar";
const Landing: FC = () => {
  return (
    <div>
      <AppBar />
      <section className="flex flex-col justify-center items-center w-full bg-slate-50 py-24">
        <div className="flex flex-col md:flex-row justify-center items-center w-full mx-auto mt-20">
          <div className="flex flex-col p-8 space-y-4 mb-8 h-32">
            <h1 className="text-5xl font-bold text-center md:text-left">
              Call to Action
            </h1>
            <p className="text-2xl text-center md:text-left font-semibold p-1">
              <span
                style={{
                  background: "linear-gradient(to right, #1d4ed8, #0284c7)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Cool Benefit
              </span>{" "}
              +{" "}
              <span
                style={{
                  background: "linear-gradient(to right, #047857, #10b981)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Another Benefit
              </span>{" "}
              way to do something
            </p>
          </div>
          <div className="md:ml-12 mt-24 md:mt-0">
            <div className="flex flex-col justify-center items-center w-full">
              Placeholder for image
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center w-full bg-white py-12">
        <p className="text-2xl font-semibold pb-8">60 Second Overview</p>
        <div className="h-full items-center justify-center flex w-full">
          <iframe
            className="max-w-[700px] w-10/12 rounded-lg"
            src="https://www.loom.com/embed/58d40612013145079990bb55bf55c80d"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ aspectRatio: "16/10" }}
          ></iframe>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center w-full bg-slate-50 pt-12 pb-24">
        <p className="text-2xl font-semibold p-8 text-center">
          Integrate in minutes with a single code snippet{" "}
        </p>
      </section>

      <footer className="flex justify-center items-center w-full bg-slate-50 py-8 border-t">
        <p className="text-md">daniel.longo@stanford.edu | UserSparks 2023</p>
      </footer>
    </div>
  );
};

export default Landing;
