import { BaseService, RequestHelper } from '../infrastructure';
import {
  PaginatedRequestOptions,
  BaseServiceOptions,
  BaseRequestOptions,
  Sudo,
  ProjectId,
  LabelId,
} from '../../types/types';

class Labels extends BaseService {
  constructor(options: BaseServiceOptions) {
    super(options, ['projects']);
  }

  all(projectId: ProjectId, options?: PaginatedRequestOptions) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.get(this, `${pId}/labels`, options);
  }

  create(projectId: ProjectId, options?: BaseRequestOptions) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.post(this, `${pId}/labels`, options);
  }

  edit(projectId: ProjectId, labelName: string, options?: BaseRequestOptions) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.put(this, `${pId}/labels`, { name: labelName, ...options });
  }

  remove(projectId: ProjectId, labelName: string, options?: Sudo) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.del(this, `${pId}/labels`, { name: labelName, ...options });
  }

  subscribe(projectId: ProjectId, labelId: LabelId, options?: Sudo) {
    const [pId, lId] = [projectId, labelId].map(encodeURIComponent);

    return RequestHelper.post(this, `${pId}/issues/${lId}/subscribe`, options);
  }

  unsubscribe(projectId: ProjectId, labelId: LabelId, options?: Sudo) {
    const [pId, lId] = [projectId, labelId].map(encodeURIComponent);

    return RequestHelper.del(this, `${pId}/issues/${lId}/unsubscribe`, options);
  }
}

export default Labels;
