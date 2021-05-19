import React from "react";
// import useResults from "../hooks/useResults";

interface item {
  name: string;
  url: string;
  image: string;
  description: string;
}

const Portfolio: React.FC = () => {
  //   const [results, errorMessage] = useResults();
  let items: Array<item> = [
    {
      name: "Battle Dev",
      url: "https://github.com/theo-coder/BattleDev",
      description: "Concours Battle Dev - Exercices d'entrainements",
      image: "bdev.png",
    },
    {
      name: "Portfolio",
      url: "https://github.com/theo-coder/Portfolio",
      description: "Site CV et Portfolio - Théo Posty",
      image: "logo200.jpg",
    },
    {
      name: "[SIO] Muscu - Api",
      url: "https://github.com/theo-coder/SalleDeSport-Mission2-API",
      description: "Projet BTS SIO 2ème année - Api",
      image: "dumbbell.png",
    },
    {
      name: "[SIO] Muscu - React",
      url: "https://github.com/theo-coder/SalleDeSport-Mission2-API",
      description: "Projet BTS SIO 2ème année - React",
      image: "dumbbell.png",
    },
    {
      name: "[SIO] Muscu - Symfony, Twig",
      url: "https://github.com/theo-coder/SIO2-SalleDeSport",
      description: "Projet BTS SIO 2ème année - Symfony + Twig",
      image: "dumbbell.png",
    },
    {
      name: "FCSC 2020",
      url: "https://github.com/TeissierYannis/FCSC-2020",
      description:
        "CTF - Qualification pour l'équipe de france de Cyber Sécurité de l'ANSSI - 2020",
      image: "2020-fcsc-logo.jpg",
    },
    {
      name: "FCSC 2021",
      url: "https://github.com/TeissierYannis/FCSC-2021",
      description:
        "CTF - Qualification pour l'équipe de france de Cyber Sécurité de l'ANSSI - 2021",
      image: "2020-fcsc-logo.jpg",
    },
    {
      name: "React Chess",
      url: "https://github.com/theo-coder/chess-react",
      description:
        "Développement d'un jeu d'échec avec le framework React, et le language typescript",
      image: "queen.png",
    },
  ];

  //   for (let i = 0; i < results.length; i++) {
  //     let result: any = results[i];
  //     let item: item = {
  //       name: result.name,
  //       url: result.html_url,
  //     };
  //     items.push(item);
  //   }
  return (
    <div id="portfolio">
      <h1>Portfolio</h1>
      <div>
        {/* {errorMessage
          ? "Failed to parse github" : */}
        {items.map((item, index) => {
          return (
            <a
              target="_blank"
              rel="noreferrer"
              href={item.url}
              key={index}
              className="portfolioItem"
            >
              <img
                src={process.env.PUBLIC_URL + "/images/" + item.image}
                alt={item.name}
              />
              <span>{item.name}</span>
              <p>{item.description}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
