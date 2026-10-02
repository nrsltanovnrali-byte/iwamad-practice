const likeBtn = document.querySelector('#likeBtn');
const likeIcon = document.querySelector('#likeIcon');
const likeText = document.querySelector('#likeText');

likeBtn.addEventListener('click', () => {
  const isLiked = likeBtn.classList.toggle('is-liked');
  likeBtn.setAttribute('aria-pressed', String(isLiked));
  likeIcon.textContent = isLiked ? '❤️' : '🤍';
  likeText.textContent = isLiked ? 'Liked' : 'Like this profile';
});