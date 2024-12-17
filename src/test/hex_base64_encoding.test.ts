import { assertEquals } from "@std/assert";
import { type Transformation, transformData } from "../hex_base64_encoding.ts";

Deno.test(function addTest() {
  const data = new Uint8Array([1, 32, 67, 120, 19]);
  const transformations: Transformation[] = [
    "encodeBase64",
    "decodeBase64",
    "encodeHex",
    "decodeHex",
  ];
  const results = transformData(data, transformations);
  assertEquals(results, [
    "AQoXGxk=", // encodeBase64
    new Uint8Array([1, 32, 67, 120, 19]), // decodeBase64
    "0120437813", // encodeHex
    new Uint8Array([1, 32, 67, 120, 19]), // decodeHex
  ]);
});
