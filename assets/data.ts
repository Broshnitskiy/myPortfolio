interface IProject {
  id: number;
  name: string;
  urlCode: string;
  urlLivePage: string;
  description: string;
  stack: string;
}

export const projects: IProject[] = [
  {
    id: 1,
    name: "eCommerceProd",
    urlCode: "https://github.com/Broshnitskiy/eCommerceProd",
    urlLivePage: "https://e-commerce-prod.vercel.app/",
    description: "",
    stack: "next.js, redux, yup, formik, axios, material ui",
  },
  {
    id: 2,
    name: "Hounter",
    urlCode: "https://github.com/Broshnitskiy/hounter",
    urlLivePage: "https://broshnitskiy.github.io/hounter/",
    description: "",
    stack: "react.js, styled-components, slick-carousel, react-icons",
  },
  {
    id: 3,
    name: "Finance_ledger",
    urlCode: "https://github.com/Broshnitskiy/finance_ledger",
    urlLivePage: "https://finance-ledger-brz.netlify.app/",
    description: "",
    stack: "react.js, styled-components, yup, react-photoswipe-gallery, formik",
  },
  {
    id: 4,
    name: "Filmoteka",
    urlCode: "https://github.com/Broshnitskiy/goit-39-js-tp",
    urlLivePage: "https://maksymkushnirov.github.io/goit-39-js-tp/",
    description: "",
    stack: "vanilla js, sass, parcel, tui-pagination, axios",
  },
  {
    id: 5,
    name: "3D Modelling",
    urlCode: "https://github.com/Broshnitskiy/command9_freedom_site",
    urlLivePage: "https://dimmac.github.io/command9_freedom_site/index.html",
    description: "",
    stack: "vanilla js, sass, parcel",
  },
  {
    id: 6,
    name: "Snake-game-react",
    urlCode: "https://github.com/Broshnitskiy/snake-game-react",
    urlLivePage: "https://broshnitskiy.github.io/snake-game-react/",
    description: "",
    stack: "react.js, styled-components, axios",
  },
  {
    id: 7,
    name: "Search images",
    urlCode: "https://github.com/Broshnitskiy/goit-react-hw-04-hooks-images",
    urlLivePage:
      "https://broshnitskiy.github.io/goit-react-hw-04-hooks-images/",
    description: "",
    stack:
      "react.js, react-toastify, axios, react-scroll, react-loader-spinner",
  },
];
