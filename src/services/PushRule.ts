import { BaseService, RequestHelper } from '../infrastructure';
import { BaseRequestOptions,BaseServiceOptions, Sudo, ProjectId } from '../../types/types';

class PushRule extends BaseService {
  constructor(options: BaseServiceOptions) {
    super(options, ['projects']);
  }

  create(projectId: ProjectId, options?: BaseRequestOptions) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.post(this, `${pId}/push_rule`, options);
  }

  edit(
    projectId: ProjectId,
    { upsert = false, ...options }: { upsert: boolean } & BaseRequestOptions,
  ) {
    const pId = encodeURIComponent(projectId);

    try {
      return RequestHelper.put(this, `${pId}/push_rule`, options);
    } catch (e) {
      if (e.message.includes('exist')) return this.create(projectId, options);

      throw e;
    }
  }

  remove(projectId: ProjectId, options?: Sudo) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.del(this, `${pId}/push_rule`, options);
  }

  show(projectId: ProjectId, options?: Sudo) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.get(this, `${pId}/push_rule`, options);
  }
}

export default PushRule;
