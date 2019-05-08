import { BaseService, RequestHelper } from '../infrastructure';
import {
  PaginatedRequestOptions,
  BaseRequestOptions,
  BaseServiceOptions,
  Sudo,
  ProjectId,
} from '../../types/types';

class ProtectedBranches extends BaseService {
  constructor(options: BaseServiceOptions) {
    super(options, ['projects']);
  }

  all(projectId: ProjectId, options?: PaginatedRequestOptions) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.get(this, `${pId}/protected_branches`, options);
  }

  protect(projectId: ProjectId, branchName: string, options?: BaseRequestOptions) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.post(this, `${pId}/protected_branches`, {
      name: branchName,
      ...options,
    });
  }

  show(projectId: ProjectId, branchName: string, options?: Sudo) {
    const [pId, bName] = [projectId, branchName].map(encodeURIComponent);

    return RequestHelper.get(this, `${pId}/protected_branches/${bName}`, options);
  }

  unprotect(projectId: ProjectId, branchName: string, options?: Sudo) {
    const [pId, bName] = [projectId, branchName].map(encodeURIComponent);

    return RequestHelper.del(this, `${pId}/protected_branches/${bName}`, options);
  }
}

export default ProtectedBranches;
