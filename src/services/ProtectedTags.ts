import { BaseService, RequestHelper } from '../infrastructure';
import {
  PaginatedRequestOptions,
  BaseRequestOptions,
  BaseServiceOptions,
  Sudo,
  ProjectId,
} from '../../types/types';

class ProtectedTags extends BaseService {
  constructor(options: BaseServiceOptions) {
    super(options, ['projects']);
  }

  all(projectId: ProjectId, options: PaginatedRequestOptions) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.get(this, `${pId}/protected_tags`, options);
  }

  protect(projectId: ProjectId, tagName: string, options: BaseRequestOptions) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.post(this, `${pId}/protected_tags`, {
      name: tagName,
      ...options,
    });
  }

  show(projectId: ProjectId, tagName: string, options: Sudo) {
    const [pId, tName] = [projectId, tagName].map(encodeURIComponent);

    return RequestHelper.get(this, `${pId}/protected_tags/${tName}`, options);
  }

  unprotect(projectId: ProjectId, tagName: string, options: Sudo) {
    const [pId, tName] = [projectId, tagName].map(encodeURIComponent);

    return RequestHelper.del(this, `${pId}/protected_tags/${tName}`, options);
  }
}

export default ProtectedTags;
