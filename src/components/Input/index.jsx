import { InputDefault } from "./style";
import { InputDisable } from "./style";
import { InputLogin } from "./style";
import { forwardRef } from "react";
import { ErrorMessage, InputHidden, InputCreateTech } from "./style";

export function Input(
  {
    placeholder,
    id,
    type,
    click,
    error,
    styled,
    inputValue,
    disabled,
    register,
    ...rest
  },
  ref
) {
  switch (styled) {
    case "inputDisable":
      return (
        <>
          <InputDisable
            placeholder={placeholder}
            id={id}
            type={type}
            value={inputValue}
            disabled={disabled}
            {...rest}
            ref={ref}
          />
          {error ? <ErrorMessage>{error}</ErrorMessage> : null}
        </>
      );

    case "inputPassword":
      return (
        <>
          <div>
            <InputDisable
              placeholder={placeholder}
              id={id}
              type={type}
              value={inputValue}
              disabled={disabled}
              {...rest}
              ref={ref}
            />
            {error ? <ErrorMessage>{error}</ErrorMessage> : null}
          </div>
        </>
      );

    case "inputHidden":
      return (
        <>
          <div>
            <InputHidden
              placeholder={placeholder}
              id={id}
              type={type}
              value={inputValue}
              disabled={disabled}
              {...rest}
              ref={ref}
            />
            {error ? <ErrorMessage>{error}</ErrorMessage> : null}
          </div>
        </>
      );

    case "inputCreateTech":
      return (
        <>
          <InputCreateTech
            placeholder={placeholder}
            id={id}
            type={type}
            value={inputValue}
            disabled={disabled}
            {...rest}
            ref={ref}
          />
          {error ? <ErrorMessage>{error}</ErrorMessage> : null}
        </>
      );

    default:
      return (
        <>
          <InputDefault
            placeholder={placeholder}
            id={id}
            type={type}
            value={inputValue}
            disabled={disabled}
            {...rest}
            ref={ref}
          />
          {error ? <ErrorMessage>{error}</ErrorMessage> : null}
        </>
      );
  }
}

export default forwardRef(Input);
