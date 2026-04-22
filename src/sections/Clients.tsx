import { clientReviews } from "../constants";

export const Clients = () => {
  return (
    <section className="c-space my-20">
      <h3 className="head-text">Recommendations</h3>

      <div className="client-container">
        {clientReviews.map(({ id, name, review, img, position }) => (
          <div key={id} className="client-review">
            <div>
              <p className="font-light text-white">{review}</p>

              <div className="client-content">
                <div className="flex gap-3">
                  <img src={img} alt={name} className="size-12 rounded-full" />

                  <div className="flex flex-col">
                    <p className="font-semibold text-white-800">{name}</p>
                    <p className="text-sm text-white-700 md:text-base">
                      {position}
                    </p>
                  </div>
                </div>

                <div className="self-end">
                  <a
                    href="https://www.linkedin.com/in/rami-zaitoun-7a127198/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center whitespace-nowrap rounded-lg border border-blue-400/40 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500/20 hover:text-blue-200 hover:shadow-[0_0_20px_rgba(59,130,246,0.35)] animate-pulse"
                  >
                    View on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
