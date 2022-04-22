import { helper } from '@ember/component/helper';

function isLiked([likes, userId]) {
  let liked = false;
  likes.forEach(element => {
    if (element.userId === userId) {
      liked = true;
    }
  });

  return liked
}

export default helper(isLiked);