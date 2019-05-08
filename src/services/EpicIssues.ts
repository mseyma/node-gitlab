import { BaseService, RequestHelper } from '../infrastructure';
import {
  BaseServiceOptions,
  BaseRequestOptions,
  PaginatedRequestOptions,
  Sudo,
  GroupId,
  EpicId,
  IssueId,
} from '../../types/types';

class EpicIssues extends BaseService {
  constructor(options: BaseServiceOptions) {
    super(options, ['groups']);
  }

  all(groupId: GroupId, epicId: EpicId, options?: PaginatedRequestOptions) {
    const [gId, eId] = [groupId, epicId].map(encodeURIComponent);

    return RequestHelper.get(this, `${gId}/epics/${eId}/issues`, options);
  }

  assign(groupId: GroupId, epicId: EpicId, issueId: IssueId, options?: Sudo) {
    const [gId, eId, iId] = [groupId, epicId, issueId].map(encodeURIComponent);

    return RequestHelper.put(this, `${gId}/epics/${eId}/issues/${iId}`, options);
  }

  edit(groupId: GroupId, epicId: EpicId, issueId: IssueId, options?: BaseRequestOptions) {
    const [gId, eId, iId] = [groupId, epicId, issueId].map(encodeURIComponent);

    return RequestHelper.del(this, `${gId}/epics/${eId}/issues/${iId}`, options);
  }

  remove(groupId: GroupId, epicId: EpicId, issueId: IssueId, options?: Sudo) {
    const [gId, eId, iId] = [groupId, epicId, issueId].map(encodeURIComponent);

    return RequestHelper.del(this, `${gId}/epics/${eId}/issues/${iId}`, options);
  }
}

export default EpicIssues;
