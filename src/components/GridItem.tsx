import { Level } from "@/helpers/imc";
import { ArrowBigDown, ArrowBigUp } from "lucide-react";

type Props = {
  item: Level;
};

export const GridItem = ({ item }: Props) => {
  const bgColor =
    item.title === "Magreza"
      ? "bg-blue-500"
      : item.title === "Normal"
      ? "bg-green-500"
      : item.title === "Sobrepeso"
      ? "bg-yellow-500"
      : item.title === "Obesidade"
      ? "bg-red-500"
      : "bg-gray-300";

  return (
    <div
      className={`p-3 rounded-md ${bgColor} w-full h-full flex flex-col items-center justify-center`}
    >
      <div className="p-3 rounded-md border-2 text-white">
        {item.icon === "up" && <img src="/assets/up.png" alt="" width={30} />}
        {item.icon === "down" && (
          <img src="assets/down.png" alt="" width={30} />
        )}
      </div>
      <div className="text-white font-bold pt-2">{item.title}</div>

      {item.yourIMC && (
        <div className="text-white">
          Seu IMC é de <strong>{item.yourIMC}</strong>
        </div>
      )}

      <div className="text-center text-sm text-white pt-2">
        <>
          O IMC está entre <strong>{item.imc[0]}</strong> e{" "}
          <strong>{item.imc[1]}</strong>
        </>
      </div>
    </div>
  );
};
