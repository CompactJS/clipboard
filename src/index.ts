/**
 * Copy text to clipboard.
 * @param input Either text to copy or HTMLElement to copy from
 */
export function clipboard(
  input: string | HTMLTextAreaElement | HTMLInputElement
): void {
  let inputElement: HTMLTextAreaElement | HTMLInputElement;
  if (typeof input === 'string') {
    inputElement = document.createElement('textarea');
    inputElement.setAttribute('style', 'position:fixed;top:0;left:0;');
    inputElement.value = input;
    document.body.appendChild(inputElement);
  } else {
    inputElement = input;
  }
  inputElement.select();
  document.execCommand('copy');
  if (typeof input === 'string') document.body.removeChild(inputElement);
}
