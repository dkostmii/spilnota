import { marked } from 'marked'
import PlaintextRenderer from './PlaintextRenderer'

export default function markdownToPlaintext(markdownText: string): string {
  const renderer = new PlaintextRenderer()
  return marked(markdownText, { renderer })
}
