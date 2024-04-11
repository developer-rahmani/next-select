// !! Types
import { LabelType } from "./index.types";

const Label = ({ options, defaultValue, isShow, label }: LabelType) => {
  return (
    <label
      className={`absolute start-0 -translate-y-[50%] ease-in duration-200 transition-[top,right] text-sm ${
        defaultValue?.length || isShow
          ? "top-0 "
          : "top-[50%]"
      }`}
    >
      {label}
    </label>
  );
};

export default Label;
