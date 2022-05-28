import { CustomTemplate } from "./customTemplate";
import { Custom1Template } from "./custom1Template";
import styled from "@emotion/styled";

export const templates = [
  {
    id: "custom",
    label: "Custom",
    template: CustomTemplate
  },
  {
    id: "custom-blue",
    label: "Blue Custom Template",
    template: styled(CustomTemplate)`
      color: blue;
    `
  },
  {
    id: "custom1",
    label: "Custom1",
    template: Custom1Template
  },
];

