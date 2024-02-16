# Coding Challenges

## 01 Write Your Own wc Tool

This challenge is to build your own version of the Unix command line tool wc! based on [Jhon Cricket coding challenges](https://codingchallenges.fyi/challenges/challenge-wc)

## use

To install dependencies:

```bash
bun install
```

To know the options:

```bash
> bun run ccwv.ts -h

Usage: ccwc [options] <file>

Print newline, word, and byte counts for each FILE, and a total line if
more than one FILE is specified.  A word is a non-zero-length sequence of
characters delimited by white space.

Arguments:
  file           file to count

Options:
  -V, --version  output the version number
  -c, --bytes    print the byte counts
  -l, --lines    print the newline counts
  -h, --help     display help for command
```

---

This project was created using `bun init` in bun v1.0.22. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
