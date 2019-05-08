import { BaseService, RequestHelper } from '../infrastructure';
import {
  BaseRequestOptions,
  BaseServiceOptions,
  Sudo,
  ProjectId,
  SupportedService,
} from '../../types/types';

class Services extends BaseService {
  constructor(options: BaseServiceOptions) {
    super(options, ['projects']);
  }

  edit(projectId: ProjectId, serviceName: SupportedService, options?: BaseRequestOptions) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.put(this, `${pId}/services/${serviceName}`, options);
  }

  remove(projectId: ProjectId, serviceName: SupportedService, options?: Sudo) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.del(this, `${pId}/services/${serviceName}`, options);
  }

  show(projectId: ProjectId, serviceName: SupportedService, options?: Sudo) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.get(this, `${pId}/services/${serviceName}`, options);
  }
}

export default Services;
