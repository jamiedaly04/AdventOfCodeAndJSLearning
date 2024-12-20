import { importedPuzzleInput } from './inputs.ts';

//let puzzleInput = [...importedPuzzleInput];

// Test Data Example
let puzzleInput: string[] = [
  '....#.....',
  '.........#',
  '..........',
  '..#.......',
  '.......#..',
  '..........',
  '.#..^.....',
  '........#.',
  '#.........',
  '......#...',
];

//---------------------------------
// PART 1

let positionInFront: { x: number | null; y: number | null };
let guardPosition: { x: number | null; y: number | null };
let guardDirection: string;

// Calculate maximum 'x' value
const maximumXValue = Math.max(...puzzleInput.map((row) => row.length - 1));

// Calculate maximum 'y' value
const maximumYValue = puzzleInput.length - 1;

// Get first guard position & guardDirection
[guardPosition, guardDirection] = getGuardPositionAndDirection(puzzleInput);

function getGuardPositionAndDirection(map: string[]): [{ x: number | null; y: number | null }, string] {
  let guardPosition: { x: number | null; y: number | null } = { x: null, y: null };
  let guardDirection: string = '';

  // Find Guard Position
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      const rowElement = map[y][x];
      if (rowElement === '^') {
        guardPosition = { x: x, y: y };
        guardDirection = '^';
      } else if (rowElement === '>') {
        guardPosition = { x: x, y: y };
        guardDirection = '>';
      } else if (rowElement === '<') {
        guardPosition = { x: x, y: y };
        guardDirection = '<';
      } else if (rowElement === 'v') {
        guardPosition = { x: x, y: y };
        guardDirection = 'v';
      }
    }
  }

  return [guardPosition, guardDirection];
}

function getPositionInFrontOfGuard(
  guardDirection: string,
  guardPosition: { x: number | null; y: number | null }
): { x: number | null; y: number | null } {
  let positionInFront: { x: number | null; y: number | null } = { x: null, y: null };

  switch (guardDirection) {
    case '^':
      positionInFront = { x: guardPosition.x ?? 0, y: (guardPosition.y ?? 0) - 1 };
      break;
    case '>':
      positionInFront = { x: (guardPosition.x ?? 0) + 1, y: guardPosition.y ?? 0 };
      break;
    case 'v':
      positionInFront = { x: guardPosition.x ?? 0, y: (guardPosition.y ?? 0) + 1 };
      break;
    case '<':
      positionInFront = { x: (guardPosition.x ?? 0) - 1, y: guardPosition.y ?? 0 };
      break;

    default:
      console.log('Position in front of guard not found');
      break;
  }

  return positionInFront;
}

function changeGuardDirection(guardDirection: string) {
  let newGuardDirection: string = '';

  switch (guardDirection) {
    case '^':
      newGuardDirection = '>';
      break;
    case '>':
      newGuardDirection = 'v';
      break;
    case 'v':
      newGuardDirection = '<';
      break;
    case '<':
      newGuardDirection = '^';
      break;
    default:
      console.log('Guard Direction Change Error');
      break;
  }

  puzzleInput = puzzleInput.map((row) => {
    return row
      .split('')
      .map((char) => {
        if (char === guardDirection) {
          return newGuardDirection;
        } else {
          return char;
        }
      })
      .join('');
  });
}

function moveGuard(
  guardPosition: { x: number | null; y: number | null },
  positionInFront: { x: number | null; y: number | null },
  guardDirection: string
) {
  // Update space left behind to be an 'X'
  puzzleInput = puzzleInput.map((row, y) => {
    return row
      .split('')
      .map((char, x) => {
        if (x === guardPosition.x && y === guardPosition.y) {
          return 'X';
        } else if (x === positionInFront.x && y === positionInFront.y) {
          return guardDirection;
        } else {
          return char;
        }
      })
      .join('');
  });

  // Move guard forward one space
  guardPosition = positionInFront;
}

console.log(`Maximum X Value: ${maximumXValue}`);
console.log(`Maximum Y Value: ${maximumYValue}`);
// Get current guard position
[guardPosition, guardDirection] = getGuardPositionAndDirection(puzzleInput);

// Get position in front of guard
positionInFront = getPositionInFrontOfGuard(guardDirection, guardPosition);

console.log(`Guard Position: ${JSON.stringify(guardPosition)}`);
console.log(`Position In Front: ${JSON.stringify(positionInFront)}`);
console.log(`Guard Direction: ${guardDirection}`);
console.log(`Starting Puzzle Input: `);

// Uncomment this to see grid at start
for (let x = 0; x < puzzleInput.length; x++) {
  const element = puzzleInput[x];
  console.log(element);
}

console.log('\n-------------------------\n');

while (guardPosition.x !== 0 && guardPosition.y !== 0 && guardPosition.x !== maximumXValue && guardPosition.y !== maximumYValue) {
  if (puzzleInput[positionInFront.y ?? 0][positionInFront.x ?? 0] === '#') {
    console.log('DIRECTION CHANGED!');
    changeGuardDirection(guardDirection);
  } else if (
    puzzleInput[positionInFront.y ?? 0][positionInFront.x ?? 0] === '.' ||
    puzzleInput[positionInFront.y ?? 0][positionInFront.x ?? 0] === 'X'
  ) {
    console.log('GUARD MOVED!');
    moveGuard(guardPosition, positionInFront, guardDirection);
  }

  // Get current guard position
  [guardPosition, guardDirection] = getGuardPositionAndDirection(puzzleInput);

  // Get position in front of guard
  positionInFront = getPositionInFrontOfGuard(guardDirection, guardPosition);

  console.log(`Guard Position: ${JSON.stringify(guardPosition)}`);
  console.log(`Position In Front: ${JSON.stringify(positionInFront)}`);
  console.log(`Guard Direction: ${guardDirection}\n`);

  // Uncomment this to see grid at each step
  for (let x = 0; x < puzzleInput.length; x++) {
    const element = puzzleInput[x];
    console.log(element);
  }

  console.log('\n-------------------------\n');
}

// One last guard movement, to show him leaving grid
moveGuard(guardPosition, positionInFront, guardDirection);

// PART 1 Answer Calculation
let answer = 0;

// Final Grid
console.log('Final Grid:\n');

for (let x = 0; x < puzzleInput.length; x++) {
  const element = puzzleInput[x];

  console.log(element);
}

console.log('\n-------------------------\n');

for (let i = 0; i < puzzleInput.length; i++) {
  for (let x = 0; x < puzzleInput[i].length; x++) {
    const element = puzzleInput[i][x];

    if (element === 'X') {
      answer += 1;
    }
  }
}

console.log(`Final Answer: ${answer}`);

// PART 2 - CHECK ALL X LOCATIONS FROM PART 1
//  AND ADD OBSTRUCTION, THEN LOOP THROUGH THAT MAP TO AND SEE IF YOU GET STUCK IN A LOOP
// STUCK IN A LOOP = LOCATION ALREADY VISITED (X, Y, DIRECTION) SAME AS BEFORE
// JUST STORE VISITED LOCATIONS
