import { useState } from "react";
import { FaCaretRight } from "react-icons/fa";

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
        className={`flex cursor-pointer flex-row items-center gap-2 border px-1 transition-colors ${isOpen ? "border-secondary-text border-b-secondary-text/50 rounded-t-md" : "border-secondary-text/50 hover:border-secondary-text rounded-md"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>{options[selectedOption]}</p>
        <FaCaretRight
          className={`transition-transform ${isOpen ? "rotate-90" : ""}`}
        />
      </div>
      {isOpen && (
        <div className="bg-background border-secondary-text absolute top-full z-10 w-full rounded-b-md border border-t-0 px-1 pb-px">
          {Object.keys(options).map((method) => {
            return (
              <p
                className={`cursor-pointer ${method == selectedOption ? "text-accent" : "hover:text-accent/80"}`}
                onClick={() => {
                  if (method != selectedOption) {
                    setIsOpen(false);
                    onSelect(method);
                  }
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
