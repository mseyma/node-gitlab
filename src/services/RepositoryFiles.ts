import { BaseService, RequestHelper } from '../infrastructure';
import { BaseRequestOptions,BaseServiceOptions, Sudo, ProjectId } from '../../types/types';

class RepositoryFiles extends BaseService {
  constructor(options: BaseServiceOptions) {
    super(options, ['projects']);
  }

  create(
    projectId: ProjectId,
    filePath: string,
    branch: string,
    content: string,
    options?: BaseRequestOptions,
  ) {
    const [pId, path] = [projectId, filePath].map(encodeURIComponent);

    return RequestHelper.post(this, `${pId}/repository/files/${path}`, {
      branch,
      content,
      ...options,
    });
  }

  edit(
    projectId: ProjectId,
    filePath: string,
    branch: string,
    content: string,
    options?: BaseRequestOptions,
  ) {
    const [pId, path] = [projectId, filePath].map(encodeURIComponent);

    return RequestHelper.put(this, `${pId}/repository/files/${path}`, {
      branch,
      content,
      ...options,
    });
  }

  remove(projectId: ProjectId, filePath: string, branch: string, options?: BaseRequestOptions) {
    const [pId, path] = [projectId, filePath].map(encodeURIComponent);

    return RequestHelper.del(this, `${pId}/repository/files/${path}`, {
      branch,
      ...options,
    });
  }

  show(projectId: ProjectId, filePath: string, ref: string, options?: Sudo) {
    const [pId, path] = [projectId, filePath].map(encodeURIComponent);

    return RequestHelper.get(this, `${pId}/repository/files/${path}`, {
      ref,
      ...options,
    });
  }

  showRaw(projectId: ProjectId, filePath: string, ref: string, options?: Sudo) {
    const [pId, path] = [projectId, filePath].map(encodeURIComponent);

    return RequestHelper.get(this, `${pId}/repository/files/${path}/raw`, {
      ref,
      ...options,
    });
  }
}

export default RepositoryFiles;
