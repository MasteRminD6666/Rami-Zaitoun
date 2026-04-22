import { useRef, useState } from "react";
import { toast } from "sonner";

const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
  "a9d40d69-c747-442c-819c-eb10bfffa0a2";

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const validateForm = () => {
    // form fields
    const { name, email, message } = form;

    interface Current {
      name: boolean;
      email: boolean;
      message: boolean;
    }

    // Error message
    const nameError = document.querySelector("#name-error")!;
    const emailError = document.querySelector("#email-error")!;
    const messageError = document.querySelector("#message-error")!;
    const current: Current = { name: false, email: false, message: false };

    // validate name
    if (name.trim().length < 3) {
      nameError.classList.remove("hidden");
      current.name = false;
    } else {
      nameError.classList.add("hidden");
      current.name = true;
    }

    // prettier-ignore
    const email_regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // valiate email
    if (!email_regex.exec(email.trim().toLowerCase())) {
      emailError.classList.remove("hidden");
      current.email = false;
    } else {
      emailError.classList.add("hidden");
      current.email = true;
    }

    // validate message
    if (message.trim().length < 5) {
      messageError.classList.remove("hidden");
      current.message = false;
    } else {
      messageError.classList.add("hidden");
      current.message = true;
    }

    // True if all fields are validated
    return Object.keys(current).every(
      (k) => current[k as keyof typeof current]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: "New portfolio contact request",
          from_name: "Portfolio Contact Form",
        }),
      });

      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
      };
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to send message");
      }

      setForm({
        name: "",
        email: "",
        message: "",
      });

      toast.success("Your message has been sent!");
    } catch (error) {
      console.error(error);

      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      <div className="relative flex min-h-screen flex-col items-center justify-center">
        <img
          src="/assets/terminal.png"
          alt="Terminal"
          className="absolute inset-0 h-full min-h-screen"
        />

        <div className="contact-container">
          <div className="rounded-2xl border border-white/10 bg-black-200/70 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_45px_rgba(0,0,0,0.5)] backdrop-blur-md sm:p-7">
            <h3 className="head-text">Let&apos;s talk</h3>

            <p className="mt-3 max-w-xl text-lg leading-relaxed text-white-600">
              Whether you&apos;re looking to build a new website, improve your
              existing platform, or bring a unique project to life, I&apos;m here
              to help.
            </p>
          </div>

          <form
            ref={formRef}
            onSubmit={(e) => void handleSubmit(e)}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full name</span>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="field-input disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-75"
                placeholder="Rami Zaitoun"
                autoCapitalize="on"
                disabled={isLoading}
              />

              <span className="hidden text-red-400" id="name-error">
                Invalid Name!
              </span>
            </label>

            <label className="space-y-3">
              <span className="field-label">Email</span>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="field-input disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-75"
                placeholder="john.doe@email.com"
                autoCapitalize="off"
                disabled={isLoading}
              />

              <span className="hidden text-red-400" id="email-error">
                Invalid Email!
              </span>
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="field-input disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-75"
                placeholder="Hi, I'm interested in..."
                autoCapitalize="on"
                disabled={isLoading}
              />

              <span className="hidden text-red-400" id="message-error">
                Invalid Message!
              </span>
            </label>

            <button
              type="submit"
              className="field-btn disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-75"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}

              {!isLoading && (
                <img
                  src="/assets/arrow-up.png"
                  alt="Arrow"
                  className="field-btn_arrow"
                />
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
