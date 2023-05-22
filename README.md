# RxJS Presentation & Exercises

## Slides

Slides are available [here](https://lou-theo.github.io/workshop-rxjs/).

To run docs locally, go in directory `docs` and run `npx serve` of if you don't have node, you can use docker `docker-compose up`, and open slides on http://localhost:3000/.

## Workshop

### Prerequisites

To run the workshop, you need to have [Node.js](https://nodejs.org/en/) installed on your machine (version 16 or higher).

### Installation

To install the workshop, go in the `steps` directory and run `npm install`.

### Test installation

There is a special "exercise" to test if you have installed the tools correctly.

Follow the instructions in [Start a lab](#start-a-lab) with exercise name `00`.

Check the [hints](steps/00-test-installation/hints.md) to see if you have the correct output (if you don't have any error, you should have the correct output).

If you are on Windows and have an error "`sh` is not recognized as an internal or external command, operable program or batch file.", you can either try with a unix compatible shell (like Git Bash) or retry with the following command (you can see options details in [Start a lab](#start-a-lab)) :

```bash
npm run start:bash -- [-s] [-t] [-c N] [argument]
```

If you have an error with the shell script, check if the file `steps/run-step.sh` is correctly encoded in LF (and not CRLF).

To manually convert a file from CRLF (Carriage Return + Line Feed) line endings to LF (Line Feed) line endings, you can follow these steps:
1. Open the file in a text editor that supports line ending conversions. Many code editors, such as Visual Studio Code, Sublime Text, or Notepad++, provide this functionality.
2. In the text editor, look for an option to change or view the line endings. In Visual Studio Code, for example, you can find it in the bottom right corner of the editor, where it displays the current line ending format. Click on it and select "LF" as the line ending format.
3. Save the file to apply the line ending conversion. The text editor should now save the file with LF line endings instead of CRLF.

### Start a lab

To start a lab, you must be in `steps` directory. You will have access to a npm command to start a lab.

Usage :
```bash
npm start -- [-s] [-t] [-c N] [argument]
#  argument: The name of the step to run (which is the name of the directory - you can write only the beginning of the name, eg: 01)
#  -s  : Run the solution file instead of the exercise file
#  -t  : Run tests on exercise or solution file (if '-s' is passed, it will run the tests on the solution file)
#  -c N: (ignored if not with '-t') Run the tests for the challenge 'N' ('N' must be one of the challenge's number indicated in the exercise file)
```

Each lab is structured the same way:
- `exercise.ts`: The file where the work needs to be done. It contains the instructions and is divided in challenges
- `api.ts`: The file with the "API" to use (functions you need to call but not to edit)
- `hints.md`: A markdown file with hints to help you _(if needed)_
- `solution.ts`: The file with the solution
- `tests.ts`: The file with tests to help you know if you are on the right track _(for steps 00 to 03)_

### Test your progress

As you may have noticed, there are tests in most of the exercises. 
You can run them with the challenge number to see if you are in line with expectations.

/!\ Disclaimer: These tests are quite simple and are not exhaustive, so you can have a false positive (or negative) result. There are so many ways to solve a problem !

## Resources used

### Diagrams

Diagrams are generated with [marblegen](https://bitbucket.org/achary/rx-marbles/src/master/) which need Python 3.

For me, the command to run to generate diagrams is
```bash
py -m rxmarbles [marble-representation.txt]
# [marble-representation.txt] is the file with the marble representation, you can read more about it on the marblegen documentation
```
But it will depend on your Python installation.

### Slides

Slides are generated with Reveal.js, Markdown and a Sfeir theme.

Moreover, this workshop is inspired by [Sfeir School's RxJS](https://github.com/sfeir-open-source/sfeir-school-rxjs).

