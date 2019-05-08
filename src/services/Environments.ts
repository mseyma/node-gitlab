import { BaseService, RequestHelper } from '../infrastructure';
import {
  BaseServiceOptions,
  BaseRequestOptions,
  PaginatedRequestOptions,
  Sudo,
  ProjectId,
  EnvironmentId,
} from '../../types/types';

class Environments extends BaseService {
    constructor(options: BaseServiceOptions) {
    super(options, ['projects']);
  }
  
  all(projectId: ProjectId, options?: PaginatedRequestOptions) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.get(this, `${pId}/environments`, options);
  }

  create(projectId: ProjectId, options?: BaseRequestOptions) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.post(this, `${pId}/environments`, options);
  }

  edit(projectId: ProjectId, environmentId: EnvironmentId, options?: BaseRequestOptions) {
    const [pId, eId] = [projectId, environmentId].map(encodeURIComponent);

    return RequestHelper.put(this, `${pId}/environments/${eId}`, options);
  }

  remove(projectId: ProjectId, environmentId: EnvironmentId, options?: Sudo) {
    const [pId, eId] = [projectId, environmentId].map(encodeURIComponent);

    return RequestHelper.del(this, `${pId}/environments/${eId}`, options);
  }

  stop(projectId: ProjectId, environmentId: EnvironmentId, options?: Sudo) {
    const [pId, eId] = [projectId, environmentId].map(encodeURIComponent);

    return RequestHelper.post(this, `${pId}/environments/${eId}/stop`, options);
  }
}

export default Environments;
