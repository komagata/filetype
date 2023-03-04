#!/usr/bin/env node

import fs from "fs";
import { detect } from "../src/index.js";

let [path] = process.argv.slice(2);
const bytes = fs.readFileSync(path);
console.log(detect(bytes));
