export const createLoadingGif = () => {
  const gif = document.createElement('span');
  gif.classList.add('material-symbols-rounded', 'rotate-gif');
  gif.innerHTML = 'sync';
  return gif;
};