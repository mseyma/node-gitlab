import { BaseService, RequestHelper } from '../infrastructure';
import {
  BaseRequestOptions,
  BaseServiceOptions,
  PaginatedRequestOptions,
  UserId,
} from '../../types/types';

const url = userId => (userId ? `${encodeURIComponent(userId)}/gpg_keys` : 'gpg_keys');

class UserGPGKeys extends BaseService {
  constructor(options: BaseServiceOptions) {
    super(options, ['users']);
  }

  all({ userId, ...options }: { userId?: UserId } & PaginatedRequestOptions = {}) {
    return RequestHelper.get(this, url(userId), options);
  }

  add(title, key, { userId, ...options }: { userId?: UserId } & BaseRequestOptions = {}) {
    return RequestHelper.post(this, url(userId), {
      title,
      key,
      ...options,
    });
  }

  show(keyId, { userId, ...options }: { userId?: UserId } & BaseRequestOptions = {}) {
    const kId = encodeURIComponent(keyId);

    return RequestHelper.get(this, `${url(userId)}/${kId}`, options);
  }

  remove(keyId, { userId, ...options }: { userId?: UserId } & BaseRequestOptions = {}) {
    const kId = encodeURIComponent(keyId);

    return RequestHelper.del(this, `${url(userId)}/${kId}`, options);
  }
}

export default UserGPGKeys;
