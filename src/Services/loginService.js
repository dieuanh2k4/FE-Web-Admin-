import * as httpRequest from '~/utils/httpRequest';

export const login = async (username, password) => {
  try {
    const response = await httpRequest.post('user/login', {
      username: username,
      password: password,
    });
    return response;
  } catch (error) {
    return error;
  }
};
