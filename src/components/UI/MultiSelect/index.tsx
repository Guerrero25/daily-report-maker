import React from "react";
import { useRef } from "react";
import MultipleSelect from "react-native-sectioned-multi-select";
/* Native Base */
import { Spinner, Badge } from "native-base";
/* Constants */
import { colors } from "../../../constants";

type SelectItem = {
  id: number;
  name: string;
  children?: SelectItem[];
};

type MultiSelectProps = {
  value: any[] | string;
  onChange: (newValues: any) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  items: SelectItem[];
  single?: boolean;
};

function MultiSelect({
  value,
  onChange,
  searchPlaceholder,
  placeholder,
  items,
  single
}: MultiSelectProps) {
  const multiSelectRef = useRef(null);

  return (
    <MultipleSelect
      uniqueKey="id"
      single={single}
      styleMainWrapper={{ width: "100%" }}
      ref={multiSelectRef}
      fixedHeight
      items={items}
      selectedItems={value}
      onSelectedItemsChange={(newValues: any[]) => {
        onChange && onChange(newValues);
      }}
      searchPlaceholderText={searchPlaceholder}
      selectText={placeholder}
      colors={{
        primary: colors.primaryColor,
        cancel: colors.dangerColor
      }}
      styles={{
        selectToggle: { width: "100%", marginVertical: 10, paddingLeft: 10 }
      }}
      loadingComponent={<Spinner />}
      selectedIconComponent={<Badge primary />}
    />
  );
}

export default MultiSelect;
