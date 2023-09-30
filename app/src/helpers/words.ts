import { clamp } from './math'

export function countWords(text: string): number {
  return text.trim().split(' ')
    .filter((n) => n != '')
    .length
}

export function trimEllipsis(text: string, wordCount: number): string {
  let words = text.trim().split(' ')
    .filter(n => n != '')

  wordCount = clamp(wordCount, 0, words.length)
  words = words.slice(0, wordCount)

  let result = words.join(' ')
  const endsWithLetterPattern = /\p{L}$/ui

  while (!endsWithLetterPattern.test(result)) {
    result = result.substring(0, result.length - 1)
  }

  return `${result}...`
}
