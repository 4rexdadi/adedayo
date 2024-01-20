"use client";

import { FC, FormEvent, useEffect, useState } from "react";
import {
  GitHub,
  Instagram,
  Linkedin,
  Twitter,
} from "../../../../public/assets/svg/Svg";
import cx from "../../../utils";
import style from "./contactMeStyle.module.scss";

interface ContactMeProps {
  className?: string;
}

const ContactMe: FC<ContactMeProps> = ({
  className = "contactMeContainer",
}): JSX.Element => {
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className={cx(style.contactMeContainer, className)}>
      <div className={cx(style.contactMe, "contactMe")}>
        <p className={style.contactTitle}>
          With experience building complex interfaces means that I&apos;m happy
          to deliver anything from single-page apps to scalable design systems.
          <br />
          <br />
          If this sounds like something you&apos;re interested in, drop me a
          mail{" "}
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
          <span>or</span>
        </p>
        <form
          className={cx(style.inputControls, "inputControls")}
          onSubmit={handleSubmit}
        >
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            spellCheck="false"
            name="textarea"
            id="textarea"
            value={message}
            placeholder="Type your message..."
            required
          />

          <input
            type="text"
            id="name"
            name="name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="name here..."
            required
          />

          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email here..."
            required
          />
          <div className={cx(style.action)}>
            <div className={cx(style.socials)}>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/4rexdadi">
                <Instagram className={cx(style.instagram, "instagram")} />
              </a>

              <a target="_blank" rel="noreferrer" href="https://twitter.com/Forexdadi">
                <Twitter className={cx(style.twitter, "twitter")} />
              </a>

              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/adedayoaturu">
                <Linkedin className={cx(style.linkedinSvg, "linkedin")} />
              </a>

              <a target="_blank" rel="noreferrer" href="https://github.com/4rexdadi">
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