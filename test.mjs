import assert from "assert";
import { test, it, describe } from "node:test";
import detect from "./src/index.js";
import fs from "fs";

test("detect", (t) => {
	const heic = detect(fs.readFileSync("./files/a.heic"))
	const jpeg = detect(fs.readFileSync("./files/a.jpg"))
	const png = detect(fs.readFileSync("./files/a.png"))
	const mp4 = detect(fs.readFileSync("./files/a.mp4"))
	const pdf = detect(fs.readFileSync("./files/a.pdf"))
	const webm = detect(fs.readFileSync("./files/a.webm"));

	assert.strictEqual(heic, "heic");
	assert.strictEqual(jpeg, "jpeg");
  assert.strictEqual(png, "png");
	assert.strictEqual(mp4, "mp4");
	assert.strictEqual(pdf, "pdf");
	assert.strictEqual(webm, "webm");
});
