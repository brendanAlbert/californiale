import { Directions } from "../enums/directions";

export const calculateDirectionService = (
  glat: number,
  glon: number,
  alat: number,
  alon: number,
  d: number
) => {
  // smaller long means further west
  // larger long means more east

  // smaller lat = futher south

  if (d == 0) {
    return Directions.correct;
  }

  // glon = Math.abs(glon);
  // alon = Math.abs(alon);

  // console.log({
  //   glat,
  //   glon,
  //   alat,
  //   alon,

  //   diff: glat - alat,
  //   longDif: glon - alon,
  // });

  if (glon < alon) {
    // answer is to the right

    // if difference between lat1 - lat2 is small, then use right arrow without up down component

    if (Math.abs(glat - alat) < 0.2) {
      return Directions.right;
    }

    if (glat > alat) {
      // if lon1 - lon2 diff is small, use pure down arrow
      if (Math.abs(glon - alon) < 0.2) {
        return Directions.down;
      }

      // answer is below
      return Directions.downRight;
    }

    if (glat < alat) {
      // if lon1 - lon2 diff is small, use pure up arrow
      if (Math.abs(glon - alon) < 0.2) {
        return Directions.up;
      }

      // answer is above
      return Directions.upRight;
    }
  }

  if (glon > alon) {
    // answer is to the left

    // if difference between lat1 - lat2 is small, then use left arrow without up down component
    if (Math.abs(glat - alat) < 0.2) {
      return Directions.left;
    }

    if (glat > alat) {
      // if lon1 - lon2 diff is small, use pure down arrow
      if (Math.abs(glon - alon) < 0.2) {
        return Directions.down;
      }

      // answer is below
      return Directions.downLeft;
    }

    if (glat < alat) {
      // if lon1 - lon2 diff is small, use pure up arrow
      if (Math.abs(glon - alon) < 0.2) {
        return Directions.up;
      }

      // answer is above
      return Directions.upLeft;
    }
  }

  return Directions.up;
};
