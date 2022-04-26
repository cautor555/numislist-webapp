import { helper } from '@ember/component/helper';

function fromUser([userId, fromUserId]) {
  if(userId === fromUserId)
    return 'this-user';
  return 'other-user';

}

export default helper(fromUser);

