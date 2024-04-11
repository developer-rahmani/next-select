"use client";

// !! Types
import { MultiDropdownType, PropsType } from "./index.types";

// !! Hooks
import React, { useEffect, useState } from "react";

// !! Components
import List from "./List";
import SearchInput from "./SearchInput";
import Label from "./Label";
import SelectedContainer from "./SelectedContainer";

const Dropdown = ({
  options,
  defaultValue,
  onChange,
  label,
  isMulti,
  isSearchable,
}: PropsType) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [list, setList] = useState<MultiDropdownType>([]);

  useEffect(() => {
    if (options?.length) {
      setList(options);
    }
  }, [options]);

  return (
    <div
      className={`relative w-full border-b border-gray-500 h-[42px] ${
        isShow
          ? "before:fixed before:top-0 before:left-0 before:right-0 before:bottom-0 before:w-full before:h-screen before:z-[999]"
          : ""
      }`}
      onClick={() => setIsShow(false)}
    >
      <div className="flex flex-col relative z-[1000] h-full flex items-center w-full">
        <div
          className="text-gray-200 h-full flex items-center w-full"
          onClick={(e) => {
            e.stopPropagation();
            setIsShow((prevState) => !prevState);
          }}
        >
          <Label
            options={list}
            defaultValue={defaultValue}
            isShow={isShow}
            label={label}
          />
          <SelectedContainer
            defaultValue={defaultValue}
            onChange={onChange}
            isMulti={isMulti}
          />
        </div>
        {isShow && (
          <div className="max-h-[250px] overflow-hidden flex flex-col absolute left-0 top-[100%] right-0 bg-gray-700">
            {isSearchable && (
              <SearchInput
                search={search}
                onChange={(value) => {
                  if (options?.length) {
                    setList(
                      options.filter((item) => item.label.includes(value))
                    );
                  }
                  setSearch(value);
                }}
              />
            )}
            <List
              defaultValue={defaultValue}
              options={list}
              onChange={onChange}
              isMulti={isMulti}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
