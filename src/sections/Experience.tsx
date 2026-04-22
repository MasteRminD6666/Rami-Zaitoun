import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";

import { CanvasLoader } from "../components/CanvasLoader";
import { workExperiences } from "../constants";
import { Developer } from "../components/Developer";

export const Experience = () => {
  const [animationName, setAnimationName] = useState<
    "idle" | "salute" | "clapping" | "victory"
  >("idle");

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <h3 className="head-text">My work experience</h3>

        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={3.2} color="#f8d6cc" />
              <spotLight
                position={[8, 12, 8]}
                angle={0.32}
                penumbra={0.85}
                intensity={45}
                color="#ffb59a"
              />
              <directionalLight position={[4, 8, 6]} intensity={2.2} color="#ffd7c8" />
              <directionalLight position={[-6, 4, -6]} intensity={0.8} color="#7eb8ff" />

              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              <Suspense fallback={<CanvasLoader />}>
                <Developer
                  position-y={-3}
                  scale={3}
                  animationName={animationName}
                />
              </Suspense>
            </Canvas>
          </div>

          <div className="work-content">
            <div className="px-2.5 py-5 sm:px-5 sm:py-10">
              {workExperiences.map(
                ({
                  animation,
                  companyUrl,
                  duration,
                  icon,
                  id,
                  location,
                  media,
                  name,
                  pos,
                  skills,
                  title,
                }) => (
                  <div
                    key={id}
                    className="work-content_container group"
                    onClick={() => setAnimationName(animation)}
                    onPointerOver={() => setAnimationName(animation)}
                    onPointerOut={() => setAnimationName("idle")}
                  >
                    <div className="flex h-full flex-col items-center justify-start py-2">
                      <a
                        href={companyUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="work-content_logo"
                        aria-label={`${name} LinkedIn page`}
                      >
                        <img src={icon} alt={name} className="size-full rounded-2xl" />
                      </a>

                      <div className="work-content_bar" />
                    </div>

                    <div className="px-2.5 py-5 sm:p-5">
                      <div className="mb-4 flex flex-col gap-1">
                        <p className="text-lg font-bold text-white-800">{name}</p>
                        <p className="font-semibold text-cyan-300">{pos}</p>
                      </div>

                      <p className="text-sm text-white-700">{duration}</p>
                      {location ? <p className="mb-4 text-sm text-white-700">{location}</p> : null}

                      <div className="mb-4 transition duration-500 ease-in-out group-hover:text-white">
                        {title}
                      </div>

                      {skills?.length ? (
                        <div className="mb-4 flex flex-wrap gap-2">
                          {skills.map((skill) => (
                            <span key={`${id}-${skill}`} className="work-skill-chip">
                              {skill}
                            </span>
                          ))}
                        </div>
                      ) : null}

                      {media?.length ? (
                        <div className="work-media-grid">
                          {media.map((src, index) => (
                            <img
                              key={`${id}-media-${index}`}
                              src={src}
                              alt={`${name} experience media ${index + 1}`}
                              className="work-media-thumb"
                              loading="lazy"
                            />
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
