import { BaseService, RequestHelper } from '../infrastructure';
import {
  BaseServiceOptions,
  BaseRequestOptions,
  PaginatedRequestOptions,
  Sudo,
  GroupId,
  EpicId,
} from '../../types/types';

class Epics extends BaseService {
  constructor(options: BaseServiceOptions) {
    super(options, ['groups']);
  }

  all(groupId: GroupId, options?: PaginatedRequestOptions) {
    const gId = encodeURIComponent(groupId);

    return RequestHelper.get(this, `${gId}/epics`, options);
  }

  create(groupId: GroupId, title: string, options?: BaseRequestOptions) {
    const gId = encodeURIComponent(groupId);

    return RequestHelper.post(this, `${gId}/epics`, { title, ...options });
  }

  edit(groupId: GroupId, epicId: EpicId, options?: BaseRequestOptions) {
    const [gId, eId] = [groupId, epicId].map(encodeURIComponent);

    return RequestHelper.put(this, `${gId}/epics/${eId}`, options);
  }

  remove(groupId: GroupId, epicId: EpicId, options?: Sudo) {
    const [gId, eId] = [groupId, epicId].map(encodeURIComponent);

    return RequestHelper.del(this, `${gId}/epics/${eId}`, options);
  }

  show(groupId: GroupId, epicId: EpicId, options?: Sudo) {
    const [gId, eId] = [groupId, epicId].map(encodeURIComponent);

    return RequestHelper.get(this, `${gId}/epics/${eId}`, options);
  }
}

export default Epics;
