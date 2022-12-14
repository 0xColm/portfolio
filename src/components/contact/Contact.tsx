import React from "react";
import { Button } from "@chakra-ui/react";
import { GrLocation } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";
import { AiFillGithub, AiFillTwitterCircle, AiOutlineArrowRight } from "react-icons/ai";
import { BsTelegram, BsGlobe2 } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import "./Contact.css";

export type Contact = {
  name: string,
  info: string,
  icon: React.ReactElement,
  url: string,
}

export const contacts: Contact[] = [
  {
    name: "EMAIL:",
    info: "contactme@colm.dev",
    icon: <MdOutlineEmail className="contact-icon" />,
    url: "mailto:contactme@colm.dev",
  },
  {
    name: "TWITTER:",
    info: "@0xColm",
    icon: <AiFillTwitterCircle className="contact-icon" />,
    url: "https://twitter.com/0xColm",
  },
  {
    name: "TELEGRAM:",
    info: "@ColmWeb3",
    icon: <BsTelegram className="contact-icon" />,
    url: "https://t.me/ColmWeb3",
  },
  {
    name: "DISCORD:",
    info: "Colm#6804",
    icon: <FaDiscord className="contact-icon" />,
    url: "https://discord.com/users/775249998379614238",
  },
  {
    name: "GitHub:",
    info: "@0xColm",
    icon: <AiFillGithub className="contact-icon" />,
    url: "https://github.com/0xColm",
  },
  {
    name: "LOCATION & ZONE:",
    info: "USA, UTC+5",
    icon: <IoLocationOutline className="contact-icon" />,
    url: "https://www.timeanddate.com/time/zone/us",
  },
];

const Contact = () => {
  return(
    <div className="bg-contact">
      <div className="contact-header">
        <p className="heading">Contacte Me</p>
        <p className="text">If you have any questions or want to hire me, please contact me:</p>
      </div>

      <div className="contact-grid">
        {contacts.map((contact: Contact) => {
          return(
            <a key={uuidv4()} href={contact.url} target="_blank">
              <div className="contact-section">
                  {contact.icon}
                  <div className="contact-text-div">
                    <p className="contact-title">{contact.name}</p>
                    <p className="contact-details">{contact.info}</p>
                  </div>
              </div>
            </a>
          )
        })}
      </div>

      <div className="button-container">
        <a href="mailto:contactme@colm.dev">
          <Button size='lg' rightIcon={<AiOutlineArrowRight />} colorScheme="blue" variant='solid' className="contact-btn">
            Contact Me
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Contact;