import { useState } from "react";
import { GoChevronRight } from "react-icons/go";

function Dropdown({
  selectedOption,
  options,
  onSelect,
}: {
  selectedOption: string;
  options: Record<string, string>;
  onSelect: (value: string) => void;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="relative flex flex-col">
      <div
        className="flex flex-row items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="cursor-pointer">{options[selectedOption]}</p>
        <GoChevronRight
          className={`transition-transform ${isOpen ? "rotate-90" : ""}`}
        />
      </div>
      {isOpen && (
        <div className="absolute top-full z-10">
          {Object.keys(options).map((method) => {
            return (
              <p
                className="cursor-pointer"
                onClick={() => {
                  setIsOpen(false);
                  onSelect(method);
                }}
              >
                {options[method]}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
