export type LetterType = Record<number, number[]>;

const letterA = {
  0: [0, 1],
  1: [1],
  2: [0, 2],
  3: [1],
  4: [0, 1],
};

const letterB = {
  0: [0, 1, 2],
  2: [0, 1, 2],
  3: [0, 1],
};

const letterC = {
  1: [0, 1],
  2: [0, 2],
  4: [0, 2],
};

const letterD = {
  0: [0, 1, 2],
  2: [0, 2],
  3: [0, 1],
};

const letterE = {
  1: [0, 1],
  2: [0, 1, 2],
  4: [0, 2],
};

const letterF = {
  0: [0, 1, 2],
  2: [1, 2],
  4: [2],
};

const letterG = {
  1: [0, 1],
  2: [0, 2],
  4: [0, 1, 2],
  5: [0],
};

const letterH = {
  0: [0, 1, 2],
  2: [1],
  4: [0, 1, 2],
};

const letterI = {
  0: [0, 1, 2],
};

const letterJ = {
  1: [0],
  2: [0, 2],
  4: [0, 1, 2],
};

const letterK = {
  0: [0, 1, 2],
  2: [1],
  3: [0, 1],
  4: [0, 2],
};

const letterL = {
  0: [0, 1, 2],
  2: [0],
  3: [0],
};

const letterM = {
  0: [0, 1, 2],
  1: [1],
  2: [1],
  3: [1],
  4: [0, 1, 2],
};

const letterN = {
  0: [0, 1, 2],
  1: [1],
  2: [1],
  3: [0],
  4: [0, 1, 2],
};

const letterO = {
  1: [0, 1],
  2: [0, 2],
  4: [0, 2],
  5: [0, 1],
};

const letterP = {
  0: [0, 1, 2],
  2: [1, 2],
  3: [1, 2],
};

const letterQ = {
  0: [1],
  1: [0, 1],
  2: [0, 2],
  3: [0, 1, 2],
  4: [0, 1],
};

const letterR = {
  0: [0, 1, 2],
  2: [1, 2],
  3: [0, 1, 2],
  4: [0],
};

const letterS = {
  1: [1],
  2: [0, 1, 2],
  4: [0, 1, 2],
  5: [0],
};

const letterT = {
  0: [2],
  2: [0, 1, 2],
  4: [2],
};

const letterU = {
  0: [1, 2],
  1: [0],
  2: [0],
  4: [0, 1, 2],
};

const letterV = {
  0: [1, 2],
  1: [0],
  2: [0],
  3: [0],
  4: [1, 2],
};

const letterW = {
  0: [0, 1, 2],
  2: [0, 1],
  4: [0, 1, 2],
};

const letterX = {
  0: [0, 2],
  1: [0, 1],
  2: [1],
  3: [0, 1],
  4: [0, 2],
};

const letterY = {
  0: [2],
  1: [1],
  2: [0, 1],
  3: [1],
  4: [2],
};

const letterZ = {
  0: [0, 2],
  1: [0],
  2: [0, 1, 2],
  3: [1],
  4: [0, 2],
};

const letterBua = {
  0: [0, 1, 2],
  2: [0, 1, 2],
  3: [0],
};

const letterGua = {
  0: [0, 1, 2],
  2: [2],
};

const letterG2ua = {
  0: [0, 1],
  2: [1, 2],
};

const letterEua = {
  0: [1],
  1: [0, 1],
  2: [0, 2],
  4: [0, 1, 2],
};

const letterZHua = {
  1: [0, 1],
  2: [1],
  4: [0, 1, 2],
  6: [1],
  7: [0, 1],
};

const letterZua = {
  0: [0, 2],
  2: [0, 1, 2],
  3: [0, 1],
};

const letterYUua = {
  0: [0, 1, 2],
  1: [0],
  2: [1],
  3: [1],
  4: [0, 1, 2],
};

const letterIUA = {
  0: [2],
  2: [0, 1],
  4: [2],
};

const letterYIUA = {
  0: [0, 1, 2],
  1: [0],
  2: [1, 2],
  3: [1],
  4: [0, 1, 2],
};

const letterLUA = {
  0: [0, 1],
  1: [1],
  2: [2],
  3: [1],
  4: [0, 1],
};

const letterPUA = {
  0: [0, 1, 2],
  2: [2],
  4: [0, 1, 2],
};

const letterFUA = {
  1: [1],
  2: [1, 2],
  4: [0, 1, 2],
  6: [1, 2],
  7: [1],
};
const letterCUA = {
  0: [0, 1, 2],
  2: [0],
  4: [0, 1, 2],
  6: [0],
};

const letterCHUA = {
  0: [1, 2],
  2: [1],
  4: [0, 1, 2],
};

const letterSCHUA = {
  0: [0, 1, 2],
  2: [0, 1],
  4: [0, 1, 2],
  6: [0],
};

const letterSOFTUA = {
  0: [0, 1, 2],
  2: [0, 1],
  3: [0],
};

const letterUUA = {
  0: [0, 1, 2],
  2: [1],
  3: [0, 1],
  4: [0, 2],
  5: [0, 1],
  6: [1],
};

const letterYAUA = {
  0: [0],
  1: [0, 1],
  2: [1, 2],
  4: [0, 1, 2],
};

const digit1 = {
  0: [2],
  2: [0, 1, 2],
};

const digit2 = {
  0: [0, 2],
  1: [0],
  2: [0, 1, 2],
  3: [1],
  4: [0],
};

const digit6 = {
  1: [0, 1],
  2: [0, 1, 2],
  4: [0, 1],
  5: [0],
};

const digit7 = {
  0: [2],
  1: [0],
  2: [0, 1, 2],
  3: [1],
  4: [2],
};

const digit8 = {
  1: [0, 1],
  2: [0, 1, 2],
  4: [0, 1, 2],
  5: [0, 1],
};

const digit9 = {
  1: [1],
  2: [1, 2],
  4: [0, 1, 2],
  5: [0, 1],
};

export const alphabet = {
  a: { letter: letterA, letterWidth: 3 },
  b: { letter: letterB, letterWidth: 2 },
  c: { letter: letterC, letterWidth: 2 },
  d: { letter: letterD, letterWidth: 2 },
  e: { letter: letterE, letterWidth: 2 },
  f: { letter: letterF, letterWidth: 3 },
  g: { letter: letterG, letterWidth: 2 },
  h: { letter: letterH, letterWidth: 3 },
  i: { letter: letterI, letterWidth: 1 },
  j: { letter: letterJ, letterWidth: 2 },
  k: { letter: letterK, letterWidth: 3 },
  l: { letter: letterL, letterWidth: 2 },
  m: { letter: letterM, letterWidth: 3 },
  n: { letter: letterN, letterWidth: 3 },
  o: { letter: letterO, letterWidth: 2 },
  p: { letter: letterP, letterWidth: 2 },
  q: { letter: letterQ, letterWidth: 2 },
  r: { letter: letterR, letterWidth: 3 },
  s: { letter: letterS, letterWidth: 2 },
  t: { letter: letterT, letterWidth: 3 },
  u: { letter: letterU, letterWidth: 3 },
  v: { letter: letterV, letterWidth: 3 },
  w: { letter: letterW, letterWidth: 3 },
  x: { letter: letterX, letterWidth: 3 },
  y: { letter: letterY, letterWidth: 3 },
  z: { letter: letterZ, letterWidth: 3 },
  а: { letter: letterA, letterWidth: 3 },
  б: { letter: letterBua, letterWidth: 2 },
  в: { letter: letterB, letterWidth: 2 },
  г: { letter: letterGua, letterWidth: 2 },
  ґ: { letter: letterG2ua, letterWidth: 2 },
  д: { letter: letterD, letterWidth: 2 },
  е: { letter: letterE, letterWidth: 2 },
  є: { letter: letterEua, letterWidth: 3 },
  ж: { letter: letterZHua, letterWidth: 3 },
  з: { letter: letterZua, letterWidth: 2 },
  и: { letter: letterYUua, letterWidth: 3 },
  і: { letter: letterI, letterWidth: 1 },
  ї: { letter: letterIUA, letterWidth: 3 },
  й: { letter: letterYIUA, letterWidth: 3 },
  к: { letter: letterK, letterWidth: 3 },
  л: { letter: letterLUA, letterWidth: 3 },
  м: { letter: letterM, letterWidth: 3 },
  н: { letter: letterH, letterWidth: 3 },
  о: { letter: letterO, letterWidth: 2 },
  п: { letter: letterPUA, letterWidth: 3 },
  р: { letter: letterP, letterWidth: 2 },
  с: { letter: letterC, letterWidth: 2 },
  т: { letter: letterT, letterWidth: 3 },
  у: { letter: letterY, letterWidth: 3 },
  ф: { letter: letterFUA, letterWidth: 3 },
  х: { letter: letterX, letterWidth: 3 },
  ц: { letter: letterCUA, letterWidth: 4 },
  ч: { letter: letterCHUA, letterWidth: 3 },
  ш: { letter: letterW, letterWidth: 3 },
  щ: { letter: letterSCHUA, letterWidth: 4 },
  ь: { letter: letterSOFTUA, letterWidth: 2 },
  ю: { letter: letterUUA, letterWidth: 4 },
  я: { letter: letterYAUA, letterWidth: 3 },
  0: { letter: letterO, letterWidth: 2 },
  1: { letter: digit1, letterWidth: 2 },
  2: { letter: digit2, letterWidth: 3 },
  3: { letter: letterZua, letterWidth: 2 },
  4: { letter: letterCHUA, letterWidth: 3 },
  5: { letter: letterS, letterWidth: 2 },
  6: { letter: digit6, letterWidth: 2 },
  7: { letter: digit7, letterWidth: 3 },
  8: { letter: digit8, letterWidth: 2 },
  9: { letter: digit9, letterWidth: 2 },
};
