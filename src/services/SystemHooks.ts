import { BaseService, RequestHelper } from '../infrastructure';
import {
  PaginatedRequestOptions,
  BaseRequestOptions,
  BaseServiceOptions,
  Sudo,
  HookId,
} from '../../types/types';

class SystemHooks extends BaseService {
  constructor(options: BaseServiceOptions) {
    super(options, ['hooks']);
  }

  add(url: string, options?: BaseRequestOptions) {
    return RequestHelper.post(this, '', { url, ...options });
  }

  all(options?: PaginatedRequestOptions) {
    return RequestHelper.get(this, '', options);
  }

  edit(hookId: HookId, url: string, options?: BaseRequestOptions) {
    const hId = encodeURIComponent(hookId);

    return RequestHelper.put(this, `${hId}`, { url, ...options });
  }

  remove(hookId: HookId, options?: Sudo) {
    const hId = encodeURIComponent(hookId);

    return RequestHelper.del(this, `${hId}`, options);
  }
}

export default SystemHooks;
