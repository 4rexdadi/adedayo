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
import { useAppSelector } from "../../../hooks/storeHook";
import cx from "../../../utils";
import style from "./contactPopUpStyle.module.scss";

interface ContactPopUpProps {}

const ContactPopUp: FC<ContactPopUpProps> = (): JSX.Element | null => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const showContactPopup = useAppSelector(
    (state) => state.contactSlice.showContactPopup
  );

  useEffect(() => {
    if (!showContactPopup) return undefined;
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
  }, [showContactPopup]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return showContactPopup ? (
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
  ) : null;
};

export default ContactPopUp;
