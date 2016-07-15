Plugboard = function(wires='') {
  if (!wires.match(/^([A-Z][A-Z]){0,10}$/))
    throw Error();

  if (wires.match(/(.).*\1/))
    throw Error();

  this.process = wire => {
    const i = wires.indexOf(wire);
    return i == -1 ? wire : wires[i + 1 - 2 * (i % 2)];
  }
}
