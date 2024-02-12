import React, { ReactNode } from "react";
import { IconContext } from "react-icons";
import { GiHumanTarget } from "react-icons/gi";

type PropTypes = {
  placeholder: string;
  inputClassName?: string;
  className?: string;
  children?: ReactNode;
  name: string;
};

const FormInput = ({
  placeholder,
  className,
  children,
  inputClassName,
  name,
}: PropTypes) => {
  return (
    <div className={`${className} relative`}>
      <input
        type="text"
        name={name}
        className={`pl-3 h-full pr-10 py-2 border rounded ${inputClassName}`}
        placeholder={placeholder}
      />
      <IconContext.Provider
        value={{
          className:
            "absolute right-3 top-1/2 transform -translate-y-1/2 text-lg",
        }}
      >
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          {children}
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default FormInput;
