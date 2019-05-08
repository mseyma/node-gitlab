import { BaseService, RequestHelper } from '../infrastructure';
import {
  BaseServiceOptions,
  PaginatedRequestOptions,
  Sudo,
  ProjectId,
  KeyId,
} from '../../types/types';

class DeployKeys extends BaseService {
  constructor(options: BaseServiceOptions) {
    super(options, ['projects']);
  }

  add(projectId: ProjectId, options?: Sudo) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.post(this, `${pId}/deploy_keys`, options);
  }

  all(projectId: ProjectId, options?: PaginatedRequestOptions) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.get(this, `${pId}/deploy_keys`, options);
  }

  show(projectId: ProjectId, keyId: KeyId, options?: Sudo) {
    const [pId, kId] = [projectId, keyId].map(encodeURIComponent);

    return RequestHelper.get(this, `${pId}/deploy_keys/${kId}`, options);
  }

  enable(projectId: ProjectId, keyId: KeyId, options?: Sudo) {
    const [pId, kId] = [projectId, keyId].map(encodeURIComponent);

    return RequestHelper.post(this, `${pId}/deploy_keys/${kId}/enable`, options);
  }
}

export default DeployKeys;
