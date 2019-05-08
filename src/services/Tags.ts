import { BaseService, RequestHelper } from '../infrastructure';
import {
  PaginatedRequestOptions,
  BaseRequestOptions,
  BaseServiceOptions,
  Sudo,
  ProjectId,
} from '../../types/types';

class Tags extends BaseService {
  constructor(options: BaseServiceOptions) {
    super(options, ['projects']);
  }

  all(projectId: ProjectId, options?: PaginatedRequestOptions) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.get(this, `${pId}/repository/tags`, options);
  }

  create(projectId: ProjectId, options?: BaseRequestOptions) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.post(this, `${pId}/repository/tags`, options);
  }

  remove(projectId: ProjectId, tagName: string, options?: Sudo) {
    const [pId, tId] = [projectId, tagName].map(encodeURIComponent);

    return RequestHelper.del(this, `${pId}/repository/tags/${tId}`, options);
  }

  show(projectId: ProjectId, tagName: string, options?: Sudo) {
    const [pId, tId] = [projectId, tagName].map(encodeURIComponent);

    return RequestHelper.get(this, `${pId}/repository/tags/${tId}`, options);
  }
}

export default Tags;
