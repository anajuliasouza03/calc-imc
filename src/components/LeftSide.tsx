"use client";
import { useIMC } from "@/contexts/IMCContext";
import { calculateIMC, Level } from "@/helpers/imc";
import { useState } from "react";

export const LeftSide = () => {
  const { setToShow } = useIMC();
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);

  const handleClick = () => {
    if (heightField && weightField) {
      setToShow(calculateIMC(heightField, weightField));
    } else {
      return alert("Digite tudo, por favor.");
    }
  };

  return (
    <div className="flex-1  md:mr-10">
      <div className="text-2xl font-bold">Calcule seu IMC</div>
      <div className="mt-4 text-sm">
        IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela
        Organização Mundial da Saúde (OMS) para calcular o peso ideal de cada
        pessoa
      </div>
      <div className=" my-8 flex flex-col gap-5">
        <input
          type="number"
          placeholder="Digite sua altura em metros. Ex.: 1.5"
          className="text-sm border-b border-gray-400 outline-none px-2 w-full"
          value={heightField > 0 ? heightField : ""}
          onChange={(e) => setHeightField(parseFloat(e.target.value))}
        />
        <input
          type="number"
          placeholder="Digite seu peso em kg. Ex.: 50.5"
          className="text-sm border-b border-gray-400 outline-none px-2 w-full"
          value={weightField > 0 ? weightField : ""}
          onChange={(e) => setWeightField(parseFloat(e.target.value))}
        />
      </div>
      <div className=" flex justify-start">
        <button
          className="text-sm cursor-pointer  py-2 w-full rounded-md bg-blue-500 text-white hover:bg-blue-600"
          onClick={handleClick}
        >
          Calcular IMC
        </button>
      </div>
    </div>
  );
};
