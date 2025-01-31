declare module "*.png" {
  const value: any;
  export default value;
}
declare module "*.jpg" {
  const value: any;
  export default value;
}
declare module "*.svg" {
  const value: any;
  export default value;
}

declare module "@percy/testcafe" {
  const value: any;
  export default value;
}

declare module "*.scss" {
  interface ClassNames {
    [className: string]: string;
  }
  const classNames: ClassNames;
  export = classNames;
}