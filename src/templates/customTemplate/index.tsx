import styled from "@emotion/styled";
import { CustomTemplate } from "./customTemplate";

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
  }
];

