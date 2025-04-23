import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const contacts = [
  {
    title: "Email",
    Icon: MdEmail,
    value: "andresreis.2018@gmail.com",
    link: "mailto:andresreis.2018@gmail.com"
  },
  {
    title: "Telefone",
    Icon: FaPhone,
    value: "(+55) 11 94948-9591",
    link: "https://wa.me/5511949489591"
  },
  {
    title: "LinkedIn",
    Icon: FaLinkedin,
    value: "/andrereis29",
    link: "https://www.linkedin.com/in/andrereis29"
  },
  {
    title: "Github",
    Icon: FaGithub,
    value: "@andre2905-code",
    link: "https://github.com/andre2905-code"
  }
]

function ContactsList() {
  return (
    <div className="flex flex-col gap-14 md:flex-row md:justify-center">
      {contacts.map((contact) => (
        <a href={ contact.link } key={contact.title} target="_blank" className="flex flex-col items-center gap-2">
          <contact.Icon size={ 28 } color="#1EB720" />
          <strong>{contact.title}</strong>
          <span>{ contact.value }</span>
        </a>
      ))}
    </div>
  );
};

export default ContactsList;