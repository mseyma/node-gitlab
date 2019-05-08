import { BaseService, RequestHelper } from '../infrastructure';
import {
  BaseServiceOptions,
  BaseRequestOptions,
  PaginatedRequestOptions,
  Sudo,
  CommitAction,
  ProjectId,
} from '../../types/types';

class Commits extends BaseService {
  constructor(options: BaseServiceOptions) {
    super(options, ['projects']);
  }
  
  all(projectId: ProjectId, options?: PaginatedRequestOptions) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.get(this, `${pId}/repository/commits`, options);
  }

  cherryPick(projectId: ProjectId, sha: string, branch: string, options?: Sudo) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.post(this, `${pId}/repository/commits/${sha}/cherry_pick`, {
      branch,
      ...options,
    });
  }

  comments(projectId: ProjectId, sha: string, options?: Sudo) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.get(this, `${pId}/repository/commits/${sha}/comments`, options);
  }

  create(
    projectId: ProjectId,
    branch: string,
    message: string,
    actions: CommitAction[] = [],
    options?: BaseRequestOptions,
  ) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.post(this, `${pId}/repository/commits`, {
      branch,
      commitMessage: message,
      actions,
      ...options,
    });
  }

  createComment(projectId: ProjectId, sha: string, note: string, options?: BaseRequestOptions) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.post(this, `${pId}/repository/commits/${sha}/comments`, {
      note,
      ...options,
    });
  }

  diff(projectId: ProjectId, sha: string, options?: Sudo) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.get(this, `${pId}/repository/commits/${sha}/diff`, options);
  }

  editStatus(projectId: ProjectId, sha: string, options?: BaseRequestOptions) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.post(this, `${pId}/statuses/${sha}`, options);
  }

  references(projectId: ProjectId, sha: string, options?: Sudo) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.get(this, `${pId}/repository/commits/${sha}/refs`, options);
  }

  show(projectId: ProjectId, sha: string, options?: BaseRequestOptions) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.get(this, `${pId}/repository/commits/${sha}`, options);
  }

  status(projectId: ProjectId, sha: string, options?: BaseRequestOptions) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.get(this, `${pId}/repository/commits/${sha}/statuses`, options);
  }

  mergeRequests(projectId: ProjectId, sha: string) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.get(this, `${pId}/repository/commits/${sha}/merge_requests`);
  }
}

export default Commits;
