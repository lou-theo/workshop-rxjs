#!/bin/sh

usage() {
  echo "Usage: npm start -- [-s] [-t] [-c N] [argument]"
  echo "  argument: The name of the step to run (which is the name of the directory - you can write only the beginning of the name, eg: 01)"
  echo "  -s  : Run the solution file instead of the exercise file"
  echo "  -t  : Run tests on exercise or solution file (if '-s' is passed, it will run the tests on the solution file)"
  echo "  -c N: (ignored if not with '-t') Run the tests for the challenge 'N' ('N' must be a number indicated in the exercise file)"
}

separator() {
  echo ""
  echo "###############################################"
  echo "###############################################"
  echo ""
}

isSolution=false # default to running the exercise file
isTest=false # default to running the exercise file
challenge=0

separator

# if an option called "solution" (abbreviated "s") is passed, run the solution file
while getopts "stc:" opt; do
  case $opt in
    t)
      isTest=true
      ;;
    s)
      isSolution=true
      echo "====> Running solution file"
      ;;
    c)
      challenge=$OPTARG
      ;;
    \?)
      echo "Invalid option: -$OPTARG" >&2
      usage
      exit;;
  esac
done

# if test is true and challenge different than 0, run the test for the challenge
if [ "$isTest" = true ] && [ "$challenge" -ne 0 ]; then
  echo "====> Running tests with challenge $challenge"
fi
if [ "$isTest" = true ] && [ "$challenge" -eq 0 ]; then
  echo "====> Running tests without specifying the challenge, it will run the last challenge"
fi

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

# if the solution flag is passed, run the solution file
if [ "$isSolution" = true ]; then
  fileToRun="solution"
else
  fileToRun="exercise"
fi

separator

if [ "$isTest" = true ]; then
  npm run cross-env -- FILE_TYPE="$fileToRun" CHALLENGE="$challenge" jest "$stepPath"
else
  npm run ts-node -- "$stepPath"/"$fileToRun".ts
fi
