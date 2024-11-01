import Urb from "@/images/urb.png";
import Commerce from "@/images/e-commerce.png";
import Pets from "@/images/pets.png";
import Hounter from "@/images/hounter.png";
import Legend from "@/images/legend.png";
import Films from "@/images/films.png";
import Modelling from "@/images/modelling.png";
import Snake from "@/images/snake.png";
import SearchImg from "@/images/search-img.png";
import Buy from "@/images/buy.png";
import Mena from "@/images/mena.png";
import Elium from "@/images/elium.png";
import { StaticImageData } from "next/image";

interface IProject {
  id: number;
  name: string;
  urlCode: string;
  urlLivePage: string;
  description: string;
  stack: string;
  image: StaticImageData;
}

export const projects: IProject[] = [
  {
    id: 1,
    name: "eCommerceProd",
    urlCode: "https://github.com/Broshnitskiy/eCommerceProd",
    urlLivePage: "https://e-commerce-prod.vercel.app/",
    description: "",
    stack: "next.js, redux, yup, formik, axios, material ui",
    image: Commerce,
  },
  {
    id: 2,
    name: "Pet breed explorer",
    urlCode: "https://github.com/Broshnitskiy/pet-breed-explorer",
    urlLivePage: "https://pet-breed-explorer-eta.vercel.app/",
    description: "",
    stack: "next.js, server components, tailwind css, ts",
    image: Pets,
  },
  {
    id: 3,
    name: "Hounter",
    urlCode: "https://github.com/Broshnitskiy/hounter",
    urlLivePage: "https://broshnitskiy.github.io/hounter/",
    description: "",
    stack: "react.js, styled-components, slick-carousel, react-icons",
    image: Hounter,
  },
  {
    id: 4,
    name: "Finance_ledger",
    urlCode: "https://github.com/Broshnitskiy/finance_ledger",
    urlLivePage: "https://finance-ledger-brz.netlify.app/",
    description: "",
    stack: "react.js, styled-components, yup, react-photoswipe-gallery, formik",
    image: Legend,
  },
  {
    id: 5,
    name: "Filmoteka",
    urlCode: "https://github.com/Broshnitskiy/goit-39-js-tp",
    urlLivePage: "https://maksymkushnirov.github.io/goit-39-js-tp/",
    description: "",
    stack: "vanilla js, sass, parcel, tui-pagination, axios",
    image: Films,
  },
  {
    id: 6,
    name: "3D Modelling",
    urlCode: "https://github.com/Broshnitskiy/command9_freedom_site",
    urlLivePage: "https://dimmac.github.io/command9_freedom_site/index.html",
    description: "",
    stack: "vanilla js, sass, parcel",
    image: Modelling,
  },
  {
    id: 7,
    name: "Snake-game-react",
    urlCode: "https://github.com/Broshnitskiy/snake-game-react",
    urlLivePage: "https://broshnitskiy.github.io/snake-game-react/",
    description: "",
    stack: "react.js, styled-components, axios",
    image: Snake,
  },
  {
    id: 8,
    name: "Search images",
    urlCode: "https://github.com/Broshnitskiy/goit-react-hw-04-hooks-images",
    urlLivePage:
      "https://broshnitskiy.github.io/goit-react-hw-04-hooks-images/",
    description: "",
    stack:
      "react.js, react-toastify, axios, react-scroll, react-loader-spinner",
    image: SearchImg,
  },
  {
    id: 9,
    name: "Buy All",
    urlCode: "",
    urlLivePage:
      "https://www.buy-all.store/?srsltid=AfmBOorhR1o-ScsOjNXqpAbxFCUrjMWfK-UwBrGz2Sgm4Ue1rz30fRzL",
    description: "NDA",
    stack: "react.js, next.js, axios, nest.js, postgresql, typeOrm, gitLab",
    image: Buy,
  },
  {
    id: 10,
    name: "URBSoft",
    urlCode: "",
    urlLivePage: "https://urbsoft.pro/",
    description: "NDA",
    stack: "next.js, zustand, scss, css animation",
    image: Urb,
  },
  {
    id: 11,
    name: "MENA FX",
    urlCode: "",
    urlLivePage: "https://www.menafx.org/",
    description: "NDA",
    stack: "react.js, strapi js, scss, graphql, appolo",
    image: Mena,
  },
  {
    id: 12,
    name: "Elium",
    urlCode: "",
    urlLivePage: "https://elium.org.ua/",
    description: "NDA",
    stack: "html css js node",
    image: Elium,
  },
];
