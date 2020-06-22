# binaryPatternMatching
Binary Pattern Matching

I was recently contacted by a recruiter that was interested in getting to know my JavaScript skills a little better.

I was requested to submit a code test and there was one question that required a little more time for me to develop than what was requested.

I took the opportunity to re-work the code on my own time and post it here.

The challenge was to match all sequences of 0's in a pattern of the corresponding letter in the substring to a vowel... and match 1's in the pattern of the corresponding letter to a consonant.

for each 0 in pattern the corresponding letter in the substring is a vowel.
for each 1 in pattern the corresponding letter is a consonant.

Example:

I was given a pattern (pattern) and a string (s).
s = 010
pattern = amazing

The goal was to count the possibilities of "matches" of the pattern within the string, regardless of the position of the pattern with the string.

```
010
amazing

  010
amazing
```

matches = 2

I would love any feedback, I am sure there are other ways to a solution.
