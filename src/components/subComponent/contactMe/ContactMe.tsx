"use client";

import { FC, FormEvent, useEffect, useState } from "react";
import {
  GitHub,
  Instagram,
  Linkedin,
  Twitter,
} from "../../../../public/assets/svg/Svg";
import cx from "../../../utils";
import handleSubmitMail from "../../../utils/sendMail";
import style from "./contactMeStyle.module.scss";

interface ContactMeProps {
  className?: string;
}

const ContactMe: FC<ContactMeProps> = ({
  className = "contactMeContainer",
}): JSX.Element => {
  const [loading, setLoading] = useState<null | string>(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const inputControls: HTMLElement | null =
      document.querySelector(".inputControls");

    const POINTER_SYNC = ({ x, y }: { x: number; y: number }) => {
      inputControls?.style.setProperty("--x", x.toFixed());
      inputControls?.style.setProperty("--y", y.toFixed());
    };

    document.body.addEventListener("pointermove", POINTER_SYNC);

    return () => {
      document.body.removeEventListener("pointermove", POINTER_SYNC);
    };
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading("loading...");
    const data = {
      name: fullName,
      email,
      message,
    };

    setFullName("");
    setEmail("");
    setMessage("");

    const response = await handleSubmitMail(data);

    if (response === 1) {
      setLoading("Successful");
    } else if (response === 0) {
      setLoading("an error occurred pls reach out via email");
    }

    setTimeout(() => {
      setLoading(null);
    }, 5000);
  };

  return (
    <div className={cx(style.contactMeContainer, className)}>
      <div className={cx(style.contactMe, "contactMe")}>
        <p className={style.contactTitle}>
          Having experience in building complex interfaces means that I am happy
          to deliver anything from single-page apps to scalable design systems.
          <br />
          <br />
          If this sounds like something you&apos;re interested in, drop me a
          line{" "}
          <span className={style.email}>
            <a
              target="_blank"
              href="mailto:adedayoaturu@gmail.com"
              rel="noreferrer"
            >
              adedayoaturu@gmail.com
            </a>
          </span>
          <br />
          <br />
          {loading ? (
            <span
              style={{
                padding: "0 0.5rem",
                background:
                  loading === "an error occurred pls reach out via email"
                    ? "rgba(90, 1, 1, 0.305)"
                    : "rgba(1, 90, 90, 0.305)",
              }}
            >
              {loading}
            </span>
          ) : (
            <span>or</span>
          )}
        </p>
        <form
          className={cx(style.inputControls, "inputControls")}
          onSubmit={handleSubmit}
        >
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            spellCheck
            name="textarea"
            id="textarea"
            value={message}
            placeholder="Type your message here."
            required
            autoComplete="on"
          />

          <input
            type="text"
            id="name"
            name="name"
            spellCheck={false}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Name here."
            autoComplete="on"
            required
          />

          <input
            type="email"
            id="email"
            name="email"
            value={email}
            spellCheck={false}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email here."
            autoComplete="on"
            required
          />
          <div className={cx(style.action)}>
            <div className={cx(style.socials)}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/4rexdadi"
              >
                <Instagram className={cx(style.instagram, "instagram")} />
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/Forexdadi"
              >
                <Twitter className={cx(style.twitter, "twitter")} />
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/adedayoaturu"
              >
                <Linkedin className={cx(style.linkedinSvg, "linkedin")} />
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/4rexdadi"
              >
                <GitHub className={cx(style.gitHub, "gitHub")} />
              </a>
            </div>

            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
