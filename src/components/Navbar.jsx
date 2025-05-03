import { BrainCircuit, Sun } from "lucide-react";

const Navbar = () => {
  return (
    <div
      className="nav flex items-center justify-between h-[90px] bg-zinc-900"
      style={{ padding: "0px 150px" }}
    >
      <div className="logo flex items-center gap-[10px]">
        <BrainCircuit size={30} color="#9333ea" />
        <span className="text-2xl font-bold text-white">Codalyze</span>
      </div>
      <div className="icons flex items-center">
      </div>
    </div>
  );
};

export default Navbar;
