export type Level = {
  title: string;
  color: string;
  icon: "down" | "up";
  imc: number[];
  yourIMC?: number;
};

export const levels: Level[] = [
  { title: "Magreza", color: "bg-blue-500", icon: "down", imc: [0, 18.5] },
  { title: "Normal", color: "bg-green-500", icon: "up", imc: [18.6, 24.9] },
  { title: "Sobrepeso", color: "bg-yellow-500", icon: "down", imc: [25, 30] },
  { title: "Obesidade", color: "bg-red-500", icon: "down", imc: [30.1, 99] },
];

export const calculateIMC = (height: number, weight: number) => {
  const imc = weight / (height * height);

  for (let i in levels) {
    if (imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
      let newLevelCopy = { ...levels[i] };
      newLevelCopy.yourIMC = parseFloat(imc.toFixed(2));
      return levels[i];
    }
  }

  return null;
};
