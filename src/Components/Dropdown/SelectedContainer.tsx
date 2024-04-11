// !! Types
import { SelectedContainerType } from "./index.types";

// !! Components
import { ArrowDownIcon, CloseIcon } from "./Icons";

const SelectedContainer = ({ defaultValue, onChange , isMulti}: SelectedContainerType) => {
  return (
    <div className="flex items-center justify-between w-full">
      <span className="text-sm flex items-center gap-[8px] truncate">
        {defaultValue?.map((item) => (
          <span key={item.value} className={`${isMulti ? "bg-gray-700 rounded-[4px] px-[4px]" : ""} flex items-center`}>{item.label}</span>
        ))}
      </span>

      <div className="flex items-center gap-[8px]">
        <button type="button" onClick={() => onChange([])}>
          <CloseIcon />
        </button>

        <button type="button">
          <ArrowDownIcon />
        </button>
      </div>
    </div>
  );
};

export default SelectedContainer;
