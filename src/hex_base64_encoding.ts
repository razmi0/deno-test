import { decodeBase64, encodeBase64 } from "jsr:@std/encoding/base64";
import { decodeHex, encodeHex } from "jsr:@std/encoding/hex";

export type Transformation =
  | "encodeBase64"
  | "decodeBase64"
  | "encodeHex"
  | "decodeHex";

declare global {
  interface Window {
    transformData: typeof transformData;
  }
}

export const transformData = (
  data: ArrayBuffer | Uint8Array | string,
  transformations: Transformation[],
): (string | ArrayBuffer)[] => {
  const result: (string | ArrayBuffer)[] = [];
  let currentData: ArrayBuffer | Uint8Array | string = data;

  transformations.forEach((transformation) => {
    switch (transformation) {
      case "encodeBase64":
        currentData = encodeBase64(currentData);
        result.push(currentData);
        break;
      case "decodeBase64":
        currentData = decodeBase64(currentData as string);
        result.push(currentData);
        break;
      case "encodeHex":
        currentData = encodeHex(currentData);
        result.push(currentData);
        break;
      case "decodeHex":
        currentData = decodeHex(currentData as string);
        result.push(currentData);
        break;
    }
  });

  return result;
};
