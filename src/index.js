export const clipboard = (input) => {
  let inputElement = input;
  if (typeof input === 'string') {
    inputElement = document.createElement('textarea');
    inputElement.style = 'position:fixed;top:0;left:0;';
    inputElement.value = input;
    document.body.appendChild(inputElement);
  }
  inputElement.select();
  document.execCommand('copy');
  if (typeof input === 'string') document.body.removeChild(inputElement);
};
