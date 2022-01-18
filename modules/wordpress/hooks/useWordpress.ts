import { useMutation, useQueryClient } from 'react-query';
import { KeyValuePair } from '../../../utils/types';
import { WordpressUser } from '../types';

import { useWordpressUser } from '../queries';
import { Wordpress } from '../wordpress.model';
import { Queries } from '../../../utils/keys';

function useWordpress() {
  const model = new Wordpress();
  const queryClient = useQueryClient();
  const {
    status: userStatus,
    data: user,
    error: userError,
  } = useWordpressUser();

  const updateUserInformation = useMutation(
    (newValue: KeyValuePair<keyof WordpressUser, string>) =>
      model.updateUser(newValue),
    {
      onSuccess: (user) => {
        queryClient.setQueryData(Queries.WORDPRESS_USER, user);
      },
    },
  );

  return {
    user: {
      current: user,
      status: userStatus,
      error: userError,
      update: {
        info: updateUserInformation,
      },
    },
  };
}

export { useWordpress };
