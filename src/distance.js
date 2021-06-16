import { colors } from "./colors";

export const nearest_three = (color) => {
  colors.forEach(function (c) {
    c['distance'] = chroma.distance(color, c.name);
  })
  colors.sort((a, b) => a.distance - b.distance);
  return colors.slice(0, 3);
};
