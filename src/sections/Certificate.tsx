export const Certificate = () => {
  const certificates = [
    {
      title: "Code Fellows Certificate Program",
      issuer: "Code Fellows Jordan at ASAC",
      year: "Jun 2021 - Jan 2022 · 8 mos",
      logo: "https://images.ctfassets.net/qjy3jg1udcmq/1MN5F84EVi0SaAieSkqY6S/46d632aa1811432f9c0a92600a1a5ee6/cf-logo-horizontal-2-color-white.png",
      location: "Amman, Jordan",
      description:
        "Intensive software development tracks delivered in Jordan through ASAC, focused on practical project delivery, teamwork, and job-ready engineering skills.",
    },
    {
      title: "ASAC (Abdul Aziz Al Ghurair School of Advanced Computing)",
      issuer: "LTUC - Luminus Technical University College",
      year: "Jun 2021 - Jan 2022 · 8 mos",
      logo: "https://ltuc.edu.jo/wp-content/uploads/2025/01/LTUC-Logo.png",
      location: "Amman, Jordan",
      description:
        "ASAC is a specialized computing school within LTUC, offering career-focused software education and LMS-supported programs aligned with market needs in Jordan.",
    },
  ] as const;

  return (
    <section className="c-space my-20" id="certificate">
      <h3 className="head-text">Certificate</h3>

      <p className="mt-3 max-w-3xl text-lg text-white-600">
        Certification journey through Code Fellows Jordan and ASAC programs,
        combining hands-on software engineering practice with structured LMS
        learning under LTUC.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
        {certificates.map((item) => (
          <article
            key={`${item.title}-${item.year}`}
            className="rounded-2xl border border-white/10 bg-black-200/80 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_45px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/45 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.2),0_24px_50px_rgba(0,0,0,0.55),0_0_26px_rgba(34,211,238,0.12)]"
          >
            <div className="mb-4 flex h-12 items-center">
              <img
                src={item.logo}
                alt={`${item.issuer} logo`}
                className="h-full w-auto object-contain"
              />
            </div>

            <div className="mb-4 flex items-center justify-between gap-3">
              <h4 className="text-lg font-semibold text-white-800">
                {item.title}
              </h4>
              <span className="whitespace-nowrap rounded-full border border-cyan-300/35 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-200">
                {item.year}
              </span>
            </div>

            <p className="mb-3 text-sm font-medium text-cyan-300">
              {item.issuer}
            </p>
            <p className="mb-3 text-xs text-white-500">{item.location}</p>
            <p className="text-sm leading-relaxed text-white-600">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};
