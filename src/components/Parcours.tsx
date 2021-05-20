import React, { useEffect, useState } from "react";
import ParcoursSection from "./ParcoursSection";

const parcoursList = {
  Formations: [
    {
      title: "BTS SIO",
      date: "2019 - Aujourd'hui",
      description: "BTS Services informatiques aux organisations option SLAM",
      place: "Lycée Louis Pergaud, Besançon",
    },
    {
      title: "BAC Technologique",
      date: "2016 - 2019",
      description: "Bac STI2D option SIN, Mention Bien",
      place: "Lycée Victor Hugo, Besançon",
    },
  ],
  Expérience: [
    {
      title: "Sapeur-pompier volontaire",
      description:
        "Jeune sapeur-pompier durant 4 ans, début de l'activité en février 2019",
      date: "2014 - 2019",
      place: "Caserne de Besançon EST",
    },
    {
      title: "Job d'été",
      subtitle: "Différences Vacances Adaptées",
      description:
        "Encadrant de personnes handicapées et accomplissement de leurs besoins",
      date: "2019",
      place: "25370 Jougne",
    },
    {
      title: "FCSC",
      description:
        "Participation au France Cyber Security Challenge<br/>Classement : 33/294 Junior, 157/1597 Général",
      date: "Avril 2020",
    },
    {
      title: "FCSC",
      description:
        "Participation au France Cyber Security Challenge<br/>Classement : 54/413 Junior, 255/1732 Général",
      date: "Avril 2021",
    },
    {
      title: "BattleDev",
      description: "Participation à BattleDev HelloWork",
      date: "11/19 - 03/20",
    },
  ],
  Formations_en_ligne: [
    {
      title: "OpenClassrooms",
      description: "Html Css - Web - Git Github - Algorithmes - Javascript",
    },
    {
      title: "Grafikart",
      description: "Html - Css - Hebergement",
    },
  ],
};

const Parcours = () => {
  /**
   * Sorter
   */

  const layout = (columnCount: Number) => (items: any) =>
    items.reduce(
      (columns: any, item: any) => {
        const [firstColumn, ...rest] = columns;

        const [column, index] = rest.reduce(
          ([min, minIndex]: any, column: any, index: any) =>
            column.height < min.height ? [column, index + 1] : [min, minIndex],
          [firstColumn, 0]
        );

        const newColumn = {
          ...column,
          items: [...column.items, item],
          height: column.height + item.height,
        };

        const before = columns.slice(0, index);
        const after = columns.slice(index + 1);

        return [...before, newColumn, ...after];
      },
      [...Array(columnCount)].map((x) => ({ items: [], height: 0 }))
    );

  const styles = {
    flexContainer: {
      display: "flex",
    },
    flexColumn: {
      flex: 1,
    },
  };

  const Layout = (columnCount: any) => (children: any) => {
    const laidOut = layout(columnCount)(
      children.map((child: any, index: any) => ({
        component: child,
        height: hgt[index],
      }))
    );

    return (
      <div style={styles.flexContainer}>
        {laidOut.map((column: any, columnIndex: any) => (
          <div key={columnIndex} style={styles.flexColumn}>
            {column.items.map((child: any, childIndex: any) => (
              <div key={childIndex}>{child.component}</div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  const Grid = ({ columnCount, children }: any) =>
    Layout(columnCount)(children);

  /**
   * EndSorte
   */

  const [hgt, setHgt]: any = useState([]);
  const [width, setWidth]: any = useState(window.innerWidth);
  const breakpoint: Number = 1100;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <div id="parcours">
      <h1>Parcours</h1>
      <Grid columnCount={width < breakpoint ? 1 : 2}>
        {Object.entries(parcoursList).map((item, itemIndex) => {
          return (
            <ParcoursSection
              key={itemIndex}
              title={item[0]}
              content={item[1]}
              onGetHeight={(height: any) => {
                if (!hgt.includes(height)) {
                  setHgt([...hgt, height]);
                }
              }}
            />
          );
        })}
      </Grid>
    </div>
  );
};

export default Parcours;
