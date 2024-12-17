const perf = <T>(cb: () => T): [T, number] => {
  performance.mark("server");
  const x = cb();
  performance.mark("server");
  return [x, performance.measure("server").duration];
};
export default perf;
