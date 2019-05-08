import { BaseService, RequestHelper } from '../infrastructure';
import {
  PaginatedRequestOptions,
  BaseRequestOptions,
  BaseServiceOptions,
  Sudo,
  ProjectId,
  HookId,
} from '../../types/types';

class ProjectHooks extends BaseService {
  constructor(options: BaseServiceOptions) {
    super(options, ['projects']);
  }

  all(projectId: ProjectId, options?: PaginatedRequestOptions) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.get(this, `${pId}/hooks`, options);
  }

  show(projectId: ProjectId, hookId: HookId, options?: Sudo) {
    const [pId, hId] = [projectId, hookId].map(encodeURIComponent);

    return RequestHelper.get(this, `${pId}/hooks/${hId}`, options);
  }

  add(projectId: ProjectId, url: string, options?: BaseRequestOptions) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.post(this, `${pId}/hooks`, { url, ...options });
  }

  edit(projectId: ProjectId, hookId: HookId, url: string, options?: BaseRequestOptions) {
    const [pId, hId] = [projectId, hookId].map(encodeURIComponent);

    return RequestHelper.put(this, `${pId}/hooks/${hId}`, { url, ...options });
  }

  remove(projectId: ProjectId, hookId: HookId, options?: Sudo) {
    const [pId, hId] = [projectId, hookId].map(encodeURIComponent);

    return RequestHelper.del(this, `${pId}/hooks/${hId}`, options);
  }
}

export default ProjectHooks;
