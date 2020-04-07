declare module 'clipboard';
/**
 * Copy text to clipboard.
 * @param input Either text to copy or HTMLElement to copy from
 */
export function clipboard(
  input: string | HTMLTextAreaElement | HTMLInputElement
): void;
