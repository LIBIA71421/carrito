import mover from "./sumador.js";

describe("mover_auto", () => {
  it("deberia mostrar la posicion inicial 0,0N", () => {
    expect(mover()).toEqual("0,0N");
  });
});
