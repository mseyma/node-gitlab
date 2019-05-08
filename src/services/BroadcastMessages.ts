import { BaseService, RequestHelper } from '../infrastructure';
import {
  BaseServiceOptions,
  BaseRequestOptions,
  PaginatedRequestOptions,
  BroadcastMessageId,
} from '../../types/types';

class BroadcastMessages extends BaseService {
  constructor(options: BaseServiceOptions) {
    super(options, ['broadcast_messages']);
  }

  all(options?: PaginatedRequestOptions) {
    return RequestHelper.get(this, '', options);
  }

  create(options?: BaseRequestOptions) {
    return RequestHelper.post(this, '', options);
  }

  edit(broadcastMessageId: BroadcastMessageId, options?: BaseRequestOptions) {
    const bId = encodeURIComponent(broadcastMessageId);

    return RequestHelper.put(this, `${bId}`, options);
  }

  remove(broadcastMessageId: BroadcastMessageId) {
    const bId = encodeURIComponent(broadcastMessageId);

    return RequestHelper.del(this, `${bId}`);
  }

  show(broadcastMessageId: BroadcastMessageId, options?: BaseRequestOptions) {
    const bId = encodeURIComponent(broadcastMessageId);

    return RequestHelper.get(this, `${bId}`, options);
  }
}

export default BroadcastMessages;
