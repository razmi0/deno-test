export async function importFile<T>(path: string, type?: string & "json") {
  const module = await import(path, { with: { type: type || "json" } });
  return module as T;
}

// export const version = await import("../version.json", {
//   with: { type: "json" },
// });

// console.log(version.default.version);
