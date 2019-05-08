import { BaseService, RequestHelper } from '../infrastructure';
import {
  BaseServiceOptions,
  ImpersonationTokenId,
  ImpersonationTokenScope,
  PaginatedRequestOptions,
  Sudo,
  UserId,
} from '../../types/types';

class UserImpersonationTokens extends BaseService {
  constructor(options: BaseServiceOptions) {
    super(options, ['users']);
  }

  all(userId: UserId, options?: PaginatedRequestOptions) {
    const uId = encodeURIComponent(userId);

    return RequestHelper.get(this, `${uId}/impersonation_tokens`, options);
  }

  add(
    userId: UserId,
    name: string,
    scopes: ImpersonationTokenScope,
    expiresAt: string,
    options?: Sudo,
  ) {
    const uId = encodeURIComponent(userId);

    return RequestHelper.post(this, `${uId}/impersonation_tokens`, {
      name,
      expiresAt,
      scopes,
      ...options,
    });
  }

  show(userId: UserId, tokenId: ImpersonationTokenId, options?: Sudo) {
    const [uId, tId] = [userId, tokenId].map(encodeURIComponent);

    return RequestHelper.get(this, `${uId}/impersonation_tokens/${tId}`, options);
  }

  revoke(userId: UserId, tokenId: ImpersonationTokenId, options?: Sudo) {
    const [uId, tId] = [userId, tokenId].map(encodeURIComponent);

    return RequestHelper.del(this, `${uId}/impersonation_tokens/${tId}`, options);
  }
}

export default UserImpersonationTokens;
