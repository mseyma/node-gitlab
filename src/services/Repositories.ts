import { BaseService, RequestHelper } from '../infrastructure';
import { BaseRequestOptions, BaseServiceOptions, Sudo, ProjectId } from '../../types/types';

class Repositories extends BaseService {
  constructor(options: BaseServiceOptions) {
    super(options, ['projects']);
  }

  compare(projectId: ProjectId, from: string, to: string, options?: Sudo) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.get(this, `${pId}/repository/compare`, {
      from,
      to,
      ...options,
    });
  }

  contributors(projectId: ProjectId, options?: Sudo) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.get(this, `${pId}/repository/contributors`, options);
  }

  showArchive(projectId: ProjectId, options?: { sha: string } & Sudo) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.get(this, `${pId}/repository/archive`, options);
  }

  showBlob(projectId: ProjectId, sha: string, options?: Sudo) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.get(this, `${pId}/repository/blobs/${sha}`, options);
  }

  showBlobRaw(projectId: ProjectId, sha: string, options?: Sudo) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.get(this, `${pId}/repository/blobs/${sha}/raw`, options);
  }

  tree(projectId: ProjectId, options?: BaseRequestOptions) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.get(this, `${pId}/repository/tree`, options);
  }
}

export default Repositories;
