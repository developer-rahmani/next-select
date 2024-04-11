"use client";

// !! Types
import { SearchInputType } from "./index.types";

// !! Hooks
import React, { useState } from "react";

// !! Components

const SearchInput = ({ search, onChange }: SearchInputType) => {
  return (
    <div className="p-[12px]" onClick={(e) => e.stopPropagation()}>
      <div className="bg-gray-600 rounded-[4px] flex items-center gap-[24px] px-[24px]">
        <input
          type="text"
          placeholder="Search"
          className="w-full h-[42px] text-gray-200 bg-transparent text-sm"
          value={search}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchInput;
