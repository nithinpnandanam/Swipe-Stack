import { NavigateFunction } from "react-router";

let navigator: NavigateFunction;
export const setNavigator = (navigateFunction: NavigateFunction) => {
  navigator = navigateFunction;
};

export const navigateTo = (path:string) => {
  if (navigator) {
    navigator(path)
  } else {
    console.warn("Navigator is not initialized");
  }
};
