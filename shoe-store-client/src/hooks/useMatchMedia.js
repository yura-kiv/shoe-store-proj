import { useState, useLayoutEffect } from "react";

const queries = [
  "(max-width: 600px)",
  "(min-width: 600px)",
  "(min-width: 770px)",
];

export const useMatchMedia = () => {
  const mediaQueryLists = queries.map((query) => matchMedia(query));
  const getValues = () => mediaQueryLists.map((list) => list.matches);
  const [values, setValues] = useState(getValues);

  useLayoutEffect(() => {
    const handler = () => setValues(getValues);
    mediaQueryLists.forEach((list) => list.addEventListener("change", handler));
    return () =>
      mediaQueryLists.forEach((list) =>
        list.removeEventListener("change", handler)
      );
  }, []);

  return ["screen0_600", "screen600_plus", "screen770_plus"].reduce(
    (acc, screen, index) => ({
      ...acc,
      [screen]: values[index],
    }),
    {}
  );
};
