export interface LinkTree {
  description: string;
  link: string;
  linktype: string;
  removaldate: Date;
  removaltime: string;
  logoURL: string;
}
export interface BoxI {
  bgColor: string;
  fontColor: string;
  fontColorHover: string;
  fontFamily: string;
  fontSize: string;
}
export interface FooterI {
  text: string;
  fontColor: string;
  fontSize: string;
  icons: any;
}

export interface HeadingI {
  text: string;
  color: string;
  fontSize: string;
}

export interface MainBodyI {
  backgroundImage: string;
  logoImage: string;
}

export interface SettingDataI {
  box: BoxI;
  footer: FooterI;
  heading: HeadingI;
  mainBody: MainBodyI;
  numberOfLinksToDisplay: string;
  tabTitle: string;
}
const mockLinkData: LinkTree[] = [
  {
    description: "Checkout our Online Courses",
    link: "https://online.ceoitbox.com/courses",
    linktype: "Normal Link",
    removaldate: new Date("15-Jan-2030"),
    removaltime: "12:00:00",
    logoURL:
      "https://drive.google.com/uc?export=view&id=1FM65KGIbNKF0rnsaIIg4ML5s-Z64HLw4",
  },
  {
    description: "Download Free Business Toolkits",
    link: "https://drive.google.com/uc?export=view&id=17MnwSg93wa4np9zd7e6j2ooWdHT1PgDN",
    linktype: "Drive Video",
    removaldate: new Date("15-Jan-2030"),
    removaltime: "13:00:00",
    logoURL:
      "https://drive.google.com/uc?export=view&id=1pHXw3ysinK1w6ez26ihKnQl4DWjZufrk",
  },
  {
    description: "Contact us on Whatsapp",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeDcnj39f_gde9qNSxlSEmSmHNEWYlqCRf17cpTNzsVoGm9Kg/viewform",
    linktype: "Normal Link",
    removaldate: new Date("15-Jan-2030"),
    removaltime: "14:00:00",
    logoURL:
      "https://drive.google.com/uc?export=view&id=1d04-gTqHirj2pL3F4pAjgnMkzTOly_5j",
  },
  {
    description: "Contact us on Email",
    link: "https://www.youtube.com/embed/YaqVAXDEIao",
    linktype: "Youtube Video",
    removaldate: new Date("15-Jan-2030"),
    removaltime: "15:00:00",
    logoURL:
      "https://drive.google.com/uc?export=view&id=1pHXw3ysinK1w6ez26ihKnQl4DWjZufrk",
  },
  {
    description: "Download Free Business Toolkits",
    link: "https://api.whatsapp.com/send?phone=918766362949&text=Hey%20Siddharth%20please%20connect%20with%20me%20for%20your%20Workshops%20and%20Services",
    linktype: "Normal Link",
    removaldate: new Date("15-Jan-2030"),
    removaltime: "16:00:00",
    logoURL:
      "https://drive.google.com/uc?export=view&id=1S4e6QWWJO9pCY5Ut5sShFZ1WotJcGlLn",
  },
  {
    description: "Contact us on Whatsapp",
    link: "https://drive.google.com/uc?export=view&id=1Lay66Rysy-66S90S5Jro-WcuQrc5TJ8n",
    linktype: "Drive Image Link",
    removaldate: new Date("15-Jan-2030"),
    removaltime: "16:00:00",
    logoURL:
      "https://drive.google.com/uc?export=view&id=1S4e6QWWJO9pCY5Ut5sShFZ1WotJcGlLn",
  },
  {
    description: "Contact us on Whatsapp",
    link: "https://drive.google.com/uc?export=view&id=1Lay66Rysy-66S90S5Jro-WcuQrc5TJ8n",
    linktype: "Normal Image Link",
    removaldate: new Date("15-Jan-2030"),
    removaltime: "16:00:00",
    logoURL:
      "https://drive.google.com/uc?export=view&id=1S4e6QWWJO9pCY5Ut5sShFZ1WotJcGlLn",
  },
];

export { mockLinkData };
