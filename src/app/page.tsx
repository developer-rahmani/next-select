"use client";

import Dropdown from "@/Components/Dropdown";
import { MultiDropdownType } from "@/Components/Dropdown/index.types";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [dropdown1, setDropdown1] = useState<MultiDropdownType>([]);
  const [dropdown2, setDropdown2] = useState<MultiDropdownType>([]);

  return (
    <div className="flex gap-[24px]">
      <div className="w-[300px] gap-[24px]">
        <Dropdown
          options={[
            { value: "react js", label: "react js" },
            { value: "next js", label: "next js" },
            { value: "vite js", label: "vitet js" },
            { value: "vue js", label: "vuet js" },
            { value: "angular js", label: "angular js" },
          ]}
          label="single select"
          defaultValue={dropdown1}
          onChange={(data) => setDropdown1(data)}
          isSearchable={true}
        />
      </div>

      <div className="w-[300px] gap-[24px]">
        <Dropdown
          options={[
            { value: "react js", label: "react js" },
            { value: "next js", label: "next js" },
            { value: "vite js", label: "vitet js" },
            { value: "vue js", label: "vuet js" },
            { value: "angular js", label: "angular js" },
          ]}
          label="multi select"
          defaultValue={dropdown2}
          onChange={(data) => setDropdown2(data)}
          isMulti={true}
        />
      </div>
    </div>
  );
}
