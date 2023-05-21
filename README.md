# RxJS Presentation & Exercises

## Slides

Slides are available [here](https://lou-theo.github.io/workshop-rxjs/).

To run docs locally, go in directory `docs` and run `npx serve` of if you don't have node, you can use docker `docker-compose up`, and open slides on http://localhost:3000/.

## Workshop

### Prerequisites

To run the workshop, you need to have [Node.js](https://nodejs.org/en/) installed on your machine (version 16 or higher).

### Installation

To install the workshop, go in the `steps` directory and run `npm install`.

### Start a lab

To start a lab, you must be in `steps` directory. You will have access to a npm command to start a lab.

Usage :
```bash
npm start -- [-s] [argument]
#   argument: The name of the step to run (which is the name of the directory - you can write only the beginning of the name, eg: 01)
#  -s: Run the solution file instead of the exercise file
```

Each lab is structured the same way:
- `exercise.ts`: The file where the work needs to be done. It contains the instructions and is divided in challenges
- `api.ts`: The file with the "API" to use (functions you need to call but not to edit)
- `hints.md`: A markdown file with hints to help you _(if needed)_
- `solution.ts`: The file with the solution

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

