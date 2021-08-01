
interface StringConstructor {
  /**
   * Hàm format string
   * @param template định dạng template
   * @param args 
   */
  format(template: string, ...args: any[]): string;
}

interface String {
  trimEnd(char: string): string;

  trimStart(char: string): string;
}

String.format = function(template, ...args) {
  let result = template;
  for (const k in args) {
    result = result.replace(new RegExp("\\{" + k + "\\}", 'g'), args[k]);
  }
  return result;
}

String.prototype.trimEnd = function(char = " ") {
  const r = new RegExp(`${char}*$`);
  return this.replace(r, '');
}

String.prototype.trimStart = function(char = " ") {
  const r = new RegExp(`^${char}*`);
  return this.replace(r, ''); 
}