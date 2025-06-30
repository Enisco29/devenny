import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {[{ title: "title 1", description: "Description 1", id: 1 }].map(
          (item) => (
            <BentoGridItem
              id={item.id}
              key={item.id}
              title={item.title}
              description={item.description}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
