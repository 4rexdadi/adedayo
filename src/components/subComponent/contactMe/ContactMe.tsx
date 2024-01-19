"use client";

import Link from "next/link";
import { FC, FormEvent, useEffect, useState } from "react";
import {
  Email,
  GitHub,
  Instagram,
  Linkedin,
  Twitter,
} from "../../../../public/assets/svg/Svg";
import cx from "../../../utils";
import style from "./contactMeStyle.module.scss";

interface ContactMeProps {}

const ContactMe: FC<ContactMeProps> = (): JSX.Element => {
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
    <div className={cx(style.contactMeContainer, "contactMeContainer")}>
      <div className={cx(style.contactMe, "contactMe")}>
        <p className={style.contactTitle}>Lets hear about your project</p>

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
          />

          <input
            type="text"
            id="name"
            name="name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="name here..."
          />

          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email here..."
          />
          <div className={cx(style.action)}>
            <div className={cx(style.socials)}>
              <Link href="goo">
                <Instagram className={cx(style.instagram, "instagram")} />
              </Link>

              <Link href="goo">
                <Email className={cx(style.email, "email")} />
              </Link>

              <Link href="goo">
                <Twitter className={cx(style.twitter, "twitter")} />
              </Link>

              <Link href="goo">
                <Linkedin className={cx(style.linkedin, "linkedin")} />
              </Link>

              <Link href="goo">
                <GitHub className={cx(style.gitHub, "gitHub")} />
              </Link>
            </div>

            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
