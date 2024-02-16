import { buildOptions, countLines } from "./utils/options";

const { options, args } = buildOptions();

const [filename] = args;

// console.log(options);
// console.log(args);

let bytes;

if (options.bytes) {
  const foo = Bun.file(filename); // relative to cwd
  bytes = foo.size;
  console.log(bytes, " ", filename);
}

let lines;
if (options.lines) {
  lines = await countLines(filename);
  console.log(lines, " ", filename);
}
