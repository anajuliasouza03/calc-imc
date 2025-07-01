import { Github } from "lucide-react";

export const Header = () => {
  return (
    <div className="flex  justify-between my-4">
      <div className="my-auto">CALC-IMC</div>
      <a href="" className="border rounded-md p-2">
        <Github className="w-4 h-4" />
      </a>
    </div>
  );
};
