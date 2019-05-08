import { BaseService, RequestHelper } from '../infrastructure';
import {
  BaseRequestOptions,
  BaseServiceOptions,
  PaginatedRequestOptions,
  ProjectId,
  Sudo,
} from '../../types/types';

class Wikis extends BaseService {
  constructor(options: BaseServiceOptions) {
    super(options, ['projects']);
  }

  all(projectId: ProjectId, options?: PaginatedRequestOptions) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.get(this, `${pId}/wikis`, options);
  }

  create(projectId: ProjectId, options?: BaseRequestOptions) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.post(this, `${pId}/wikis`, options);
  }

  edit(projectId: ProjectId, slug: string, options?: BaseRequestOptions) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.put(this, `${pId}/wikis/${slug}`, options);
  }

  show(projectId: ProjectId, slug: string, options?: Sudo) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.get(this, `${pId}/wikis/${slug}`, options);
  }

  remove(projectId: ProjectId, slug: string, options?: Sudo) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.del(this, `${pId}/wikis/${slug}`, options);
  }
}

export default Wikis;
