import React from "react";
import styled from "styled-components/native";
import {AnyStyledComponent, CSSObject} from "styled-components";

interface IStyledComponentProps {
  extendsNode: React.ComponentType<any>;
  displayName: string;
  options?: CSSObject | ((props?: any) => CSSObject);
  attributes?: CSSObject | ((props?: any) => CSSObject);
  source?: any;
}

const generateStyledComponent = ({attributes = {}, options = {} as CSSObject, ...props}: IStyledComponentProps) => {
  const component = styled(componentProps => React.createElement(props.extendsNode, componentProps)).attrs(attributes)(
    options,
  ) as AnyStyledComponent;

  component.displayName = props.displayName;

  return component;
};

export default generateStyledComponent;
