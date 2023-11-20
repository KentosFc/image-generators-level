const fs = require("fs");
const draw = require(".");

draw({
  limitMax: 0,
  limitCurrent: 0,
  point: 0,
  color: "#00000077",
  backgroundSource: "https://images.unsplash.com/photo-1621498341895-f04d7f4ac195?auto=format&fit=crop&w=350&q=80&h=132"
}).then((buf) => {
  fs.writeFileSync("canvas.png", buf);
})

