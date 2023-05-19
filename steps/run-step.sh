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
      echo "====> Running solution file"
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

# find the first directory that starts with the step name
if [ ! -d "$stepPath" ]; then
  stepPath=$(find . -type d -name "$1*" | head -n 1)
fi

if [ ! -d "$stepPath" ]; then
  echo "====> Step \"$1\" does not exist."
  exit 1
fi

echo "====> Running step \"$stepPath\""

npm run ts-node -- "$stepPath"/"$fileToRun"
