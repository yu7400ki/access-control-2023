import type * as Types from '../../@types';

export type Methods = {
  get: {
    status: 200;
    resBody: Types.UserResponse;
  };

  post: {
    status: 200;
    resBody: Types.UserResponse;
    reqBody: Types.UserRequest;
  };

  put: {
    status: 200;
    resBody: Types.UserResponse;
    reqBody: Types.UserRequest;
  };

  delete: {
    status: 200;
    resBody: Types.UserResponse;
  };
};
