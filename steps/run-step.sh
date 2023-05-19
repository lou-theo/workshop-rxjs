#!/bin/sh

usage() {
  echo "Usage: ./run-step.sh [-s] [argument]"
  echo "  argument: The name of the step to run"
  echo "  -s: Run the solution file instead of the exercise file"
}

fileToRun="exercise.ts"
# if an option called "solution" (abbreviated "s") is passed, run the solution file
while getopts "s" opt; do
  case $opt in
    s)
      fileToRun="solution.ts"
      echo "Running solution file"
      ;;
    \?)
      echo "Invalid option: -$OPTARG" >&2
      usage
      exit;;
  esac
done

# Shift the option arguments so that $1 refers to the positional argument
shift $((OPTIND - 1))

if [ $# -eq 0 ]; then
  echo "You must provide step name."
  exit 1
fi

stepPath=$1

if [ ! -d "$stepPath" ]; then
  echo "Step \"$stepPath\" does not exist."
  exit 1
fi


npm run ts-node -- "$1"/"$fileToRun"
