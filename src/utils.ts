import { layouts } from './constants/layouts';
import { alphabet } from './constants/letters';

export function getMaxRowWidth(wordArray: string[][]) {
  const getWidthSum = (chunk) =>
    chunk.reduce((acc, item) => acc + parseInt(alphabet[item]?.letterWidth), 0);
  return Math.max(...wordArray.map(getWidthSum));
}

export function getWordArray(word: string, altLayout: boolean): string[][] {
  const layoutSet = layouts[word.length] || layouts[12];
  const layout = altLayout ? layoutSet[1] : layoutSet[0];

  let splitted = word.split('');
  let res = layout.map((part) => {
    return splitted.splice(0, part);
  });

  if (splitted.length > 0) {
    const maxLength = Math.ceil(splitted.length / 3) + 1;
    const rest = Array.from({ length: maxLength }, (_) =>
      splitted.splice(0, 3)
    );
    res = [...res, ...rest];
  }

  return res.reverse();
}
