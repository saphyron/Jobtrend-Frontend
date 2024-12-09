import React, { useCallback, useState } from "react";
import Select, { components } from "react-select";
import { region } from "../data/options.js";

export default function RegionFilter(props) {
  const [value, setValue] = useState();

  const onChange = useCallback((newValue) => setValue(newValue), []);

  const removeValue = useCallback(
    (removed) => setValue(value.filter((v) => v.value !== removed.value)),
    [value]
  );

  return (
    <Select
      isMulti
      value={value}
      onChange={onChange}
      removeValue={removeValue}
      options={region}
      components={{ SelectContainer }}
      controlShouldRenderValue={false}
      placeholder={"Vælg fra liste"}
    />
  );
}

const SelectedValuesContainer = ({ getValue, ...props }) => {
  const { getOptionValue, formatOptionLabel, removeValue } = props.selectProps;

  const getValueLabel = (opt) => formatOptionLabel?.(opt, "value") || opt.label;
  const getKey = (opt, index) => `${getOptionValue(opt)}-${index}`;

  const toMultiValue = (opt, index) => (
    <components.MultiValue
      getValue={getValue}
      {...props}
      components={{
        Container: components.MultiValueContainer,
        Label: components.MultiValueLabel,
        Remove: components.MultiValueRemove,
      }}
      key={getKey(opt, index)}
      index={index}
      removeProps={{
        onClick: () => removeValue(opt),
      }}
      data={opt}
    >
      {getValueLabel(opt)}
    </components.MultiValue>
  );

  return <div className="inputvalue">{getValue().map(toMultiValue)}</div>;
};

const SelectContainer = ({ children, className, innerProps, isFocused, ...commonProps }) => {
  const selectContainerProps = {
    ...commonProps,
  };

  return (
    <components.SelectContainer
      className={className}
      innerProps={innerProps}
      isFocused={isFocused}
      {...selectContainerProps}
    >
      <SelectedValuesContainer {...commonProps} />
      {children}
    </components.SelectContainer>
  );
};
