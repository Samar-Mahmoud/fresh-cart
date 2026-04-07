import React from "react";

export interface SearchInputProps {
  placeholder: string;
  rounded?: string;
}

export interface IconProps {
  size?: string;
  className?: string;
}

export interface StoreBenefitProps {
  iconClasses: string;
  wrapperClasses?: string;
  benefits: {
    title: string;
    description: string;
    icon: { node: React.ReactNode; style?: string };
  }[];
}
