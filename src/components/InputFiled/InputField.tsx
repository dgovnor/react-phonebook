import React, { useState } from 'react';
import { Input } from '@material-ui/core';
import { useStyles } from './useStyles';

interface InputProps {
  value: string
  // eslint-disable-next-line no-unused-vars
  onChange: (inputValue: string) => void
  inputLabel: string
  placeholder?: string
  type?: string
  error?: string
  disabled?: boolean
  hideLabel?: boolean
  compact?: boolean
  className?: string
  style?: React.CSSProperties
}

export const InputField: React.FC<InputProps> = ({
  value,
  inputLabel,
  hideLabel,
  placeholder,
  disabled,
  onChange,
  type: inputType = 'text',
  className = '',
  style,
}) => {
  const classes = useStyles();
  const [internalValue, setInternalValue] = useState(value);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const internalOnChange = (newValue: string) => {
    setInternalValue(newValue);
    onChange(newValue);
  };

  return (
    <div className={className} style={style}>
      <div>
        <span className={classes.label}>
          {inputLabel}
        </span>
        <Input
          fullWidth
          disableUnderline
          className={classes.input}
          value={internalValue}
          onChange={(event) => internalOnChange(event.target.value)}
          placeholder={hideLabel ? placeholder ?? inputLabel : placeholder}
          type={inputType}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

InputField.displayName = 'InputField';
