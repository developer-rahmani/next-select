// !! Types
import { ListType } from "./index.types";

// !! Hooks
import React, { useEffect, useRef } from "react";

// !! Packages
import SimpleBar from "simplebar-react";

const List = ({ options, defaultValue, onChange, isMulti }: ListType) => {
  return (
    <SimpleBar className="max-h-[200px] flex flex-col">
      {options?.map((item) => (
        <React.Fragment key={item.value}>
          <div
            className={`relative text-sm text-gray-200 w-full py-[12px] px-[24px] cursor-pointer ${
              defaultValue?.some((_item) => _item.value === item.value)
                ? "before:bg-gray-500 before:h-[32px] before:w-[4px] before:absolute before:start-0 before:top-[50%] before:-translate-y-[50%]"
                : ""
            }`}
            onClick={() =>
              isMulti
                ? defaultValue.some((_item) => _item.value === item.value)
                  ? onChange(
                      defaultValue.filter((_item) => _item.value !== item.value)
                    )
                  : onChange([...defaultValue, item])
                : onChange([item])
            }
          >
            {item.label}
          </div>
        </React.Fragment>
      ))}
    </SimpleBar>
  );
};

export default List;
