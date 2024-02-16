import { Command } from "commander";
import * as fs from "fs";
import * as readline from "readline";

interface Options {
  bytes: boolean;
  lines: boolean;
  file: string;
}

const version = process.env.APP_VERSION || "0.0.0";
const name = process.env.APP_NAME || "ccwc";

export const buildOptions = () => {
  const program = new Command();

  program.version(version);
  program.name(name);

  program.description(`Print newline, word, and byte counts for each FILE, and a total line if
more than one FILE is specified.  A word is a non-zero-length sequence of
characters delimited by white space.`);

  program.argument("<file>", "file to count");

  program.option("-c, --bytes", "print the byte counts");

  program.option("-l, --lines", "print the newline counts");

  program.parse(process.argv);

  const options: Options = program.opts();

  return { options, args: program.args };
};

export async function countLines(file: string): Promise<number> {
  let fileBin = Bun.file(file);
  const stream = await fileBin.stream();
  let lines = await Bun.readableStreamToArray(stream);

  // count the lines
  //for await () {
  //console.log(line);
  //lines++;
  //}

  console.log(lines);

  return lines.length;
}
