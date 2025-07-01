"use client";
import { levels } from "@/helpers/imc";
import { GridItem } from "./GridItem";
import { useIMC } from "@/contexts/IMCContext";

export const RightSide = () => {
  const { toShow, setToShow } = useIMC();

  return (
    <div className="flex-1 md:ml-10">
      {!toShow && (
        <div className=" flex-1 grid grid-cols-2 gap-5 ">
          {levels.map((item, key) => (
            <GridItem key={key} item={item} />
          ))}
        </div>
      )}
      {toShow && (
        <>
          <div className="flex h-full">
            <GridItem item={toShow} />
          </div>
          <div className="text-sm text-red-400 py-2 text-center">
            Recarregue a página para fazer novamente
          </div>
        </>
      )}
    </div>
  );
};
