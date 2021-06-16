import { colors } from "./colors";

export const nearestThree = (color) => {
  let
    nt = document.getElementById('nearest-three'),
    patchStyle = 'height:3rem; border:dashed black 1px; text-align:center; line-height:2.8rem'
  ;
  nt.innerHTML = null
  colors.forEach(function (c) {
    c['distance'] = chroma.distance(color, c.name);
  })
  colors.sort((a, b) => a.distance - b.distance);
  colors.slice(0, 3).forEach(function (c) {
    if (chroma(c.hex).luminance() > 0.5) {
      nt.innerHTML += `\
        <div className="grid-x grid-margin-x">\
          <div className="cell small-12 patch" style="background-color: ${c.name}; ${patchStyle}">\
            <span style="color:black;">${c.name}</span>\
          </div>\
        </div>`
    } else {
      nt.innerHTML += `\
        <div className="grid-x grid-margin-x">\
          <div className="cell small-12 patch" style="background-color: ${c.name}; ${patchStyle}">\
            <span style="color:white;">${c.name}</span>\
          </div>\
        </div>`
    }
  })
};
