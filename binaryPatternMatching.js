function binaryPatternMatching(pattern, s) {
  // s = 010
  // p = amazing

  // simple error check - length of s should exceed pattern
  if (s.length < pattern.length) return false;
  const patternArray = buildPatternArray(pattern, s);
  const totalPatternMatches = buildPatternMatch(patternArray, s);
  console.log(totalPatternMatches);
  return totalPatternMatches;
}

function buildPatternArray(pattern, s) {
  let patternPad = [];
  let tmpString = pattern;
  let postAstriks = "";
  for (let i = pattern.length; i <= s.length; i++) {
    if (tmpString.length <= s.length) {
      const postAstriksAmount = s.length - tmpString.length;
      postAstriks = "";
      for (count = 0; count < postAstriksAmount; count++) {
        postAstriks = `${postAstriks}*`;
      }
    }
    tmpString = tmpString;
    patternPad[i] = tmpString + postAstriks;
    tmpString = "*" + tmpString;
  }
  const patternFiltered = patternPad.filter((el) => {
    return el != null && el != "";
  });
  return patternFiltered;
}

function buildPatternMatch(patternArray, s) {
  let fullMatch = 0;
  for (let i = 0; i < patternArray.length; i++) {
    fullMatch = isPatternMatch(patternArray[i], s);
    fullMatch = fullMatch + fullMatch;
  }
  return fullMatch;
}

function isPatternMatch(pattern, s) {
  const patArray = ("" + pattern).split("");
  const sArray = ("" + s).split("");
  for (let i = 0; i < patArray.length; i++) {
    const letter = sArray[i];
    const character = patArray[i];
    const vowels = "aeiouy"; // = 0
    let result = 1;
    if (character !== "*") {
      const isVowel = vowels.indexOf(letter) >= 0 ? true : false;
      if (isVowel && character == 0) {
        result = 1;
        // console.log(`pass with vowel: ${character} ... ${letter} ... ${isVowel}`);
      } else if (isVowel && character === 1) {
        result = 0;
        // console.log(`error: ${character} ... ${letter}`);
      } else {
        result = 1;
        // console.log(`pass with consonant: ${character} ... ${letter}`);
      }
    }
    return result;
  }
}

binaryPatternMatching("010", "amazing"); // answer should be 2
