export type MultiDropdownType = { value: string; label: string }[] | [];

export type PropsType = {
  options?: MultiDropdownType;
  defaultValue: MultiDropdownType;
  onChange: (data: MultiDropdownType) => void;
  label: string;
  isMulti?: boolean;
  isSearchable ?: boolean
};

export type ListType = {
  options?: MultiDropdownType;
  defaultValue: MultiDropdownType;
  onChange: (data: MultiDropdownType) => void;
  isMulti?: boolean;
};

export type SearchInputType = {
  search : string;
  onChange: (value : string)=>void
};

export type LabelType = {
  options?: MultiDropdownType;
  defaultValue: MultiDropdownType;
  isShow: boolean;
  label: string;
};

export type SelectedContainerType = {
  defaultValue: MultiDropdownType;
  onChange: (data: MultiDropdownType) => void;
  isMulti?: boolean;
};
