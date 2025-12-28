import { FaChevronRight } from "react-icons/fa";

const Footer = ({ totalSelected }) => {
  return (
    <footer className="sticky bottom-0 bg-[#0B132B] px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left text */}
        <p className="text-white text-lg font-semibold">
          Total Dish Selected <span className="text-orange-400">{totalSelected}</span>
        </p>

        {/* Continue Button */}
        <button
          className="
            flex items-center gap-2
            bg-[#1C2541]
            text-white
            px-8 py-3
            rounded-lg
            border border-white/10
            shadow-md
            hover:bg-[#24304f]
            transition-all
          "
        >
          Continue
          <FaChevronRight className="text-sm" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
