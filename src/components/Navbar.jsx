import { BrainCircuit } from "lucide-react";

const Navbar = () => {
  return (
    <div
      className="flex items-center justify-between h-[90px] bg-zinc-900"
      style={{ padding: "0px 150px" }}
    >
      <div className="logo">
        <BrainCircuit size={30} color="#7e22ce" />
      </div>
    </div>
  );
};

export default Navbar;
