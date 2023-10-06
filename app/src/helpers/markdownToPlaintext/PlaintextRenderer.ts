import type { MarkedOptions } from 'marked';
import { Renderer } from 'marked';

// Source: https://github.com/etler/marked-plaintext/blob/master/index.js

interface PlaintextOptions extends MarkedOptions {
  spaces?: boolean;
}

class PlaintextRenderer extends Renderer {
  private whitespaceDelimiter: string;
  public options: PlaintextOptions;

  constructor(options?: MarkedOptions) {
    super(options);
    this.options = options || {};
    this.whitespaceDelimiter = this.options.spaces ? ' ' : '\n';
  }

  code(code: string) {
    return (
      this.whitespaceDelimiter + this.whitespaceDelimiter + code + this.whitespaceDelimiter + this.whitespaceDelimiter
    );
  }

  blockquote(quote: string) {
    return '\t' + quote + this.whitespaceDelimiter;
  }

  html(html: string) {
    return html;
  }

  heading(text: string) {
    return text;
  }

  hr() {
    return this.whitespaceDelimiter + this.whitespaceDelimiter;
  }

  list(body: string) {
    return body;
  }

  listitem(text: string) {
    return '\t' + text + this.whitespaceDelimiter;
  }

  paragraph(text: string) {
    return this.whitespaceDelimiter + text + this.whitespaceDelimiter;
  }

  table(header: string, body: string) {
    return this.whitespaceDelimiter + header + this.whitespaceDelimiter + body + this.whitespaceDelimiter;
  }

  tablerow(content: string) {
    return content + this.whitespaceDelimiter;
  }

  tablecell(content: string) {
    return content + '\t';
  }

  strong(text: string) {
    return text;
  }

  em(text: string) {
    return text;
  }

  codespan(text: string) {
    return text;
  }

  br() {
    return this.whitespaceDelimiter + this.whitespaceDelimiter;
  }

  del(text: string) {
    return text;
  }

  link(_: unknown, __: unknown, text: string) {
    return text;
  }

  image(_: unknown, __: unknown, text: string) {
    return text;
  }

  text(text: string) {
    return text;
  }
}

export default PlaintextRenderer;
