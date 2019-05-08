import { BaseService, RequestHelper } from '../infrastructure';
import {
  BaseServiceOptions,
  PaginatedRequestOptions,
  BaseRequestOptions,
  Sudo,
  GeonodeId,
} from '../../types/types';

class GeoNodes extends BaseService {
  constructor(options: BaseServiceOptions) {
    super(options, ['geo_nodes']);
  }

  all(options?: PaginatedRequestOptions) {
    return RequestHelper.get(this, '', options);
  }

  create(geonodeId: GeonodeId, options?: BaseRequestOptions) {
    const gId = encodeURIComponent(geonodeId);

    return RequestHelper.post(this, `${gId}`, options);
  }

  edit(geonodeId: GeonodeId, options?: BaseRequestOptions) {
    const gId = encodeURIComponent(geonodeId);

    return RequestHelper.put(this, `${gId}`, options);
  }

  failures(options?: BaseRequestOptions) {
    return RequestHelper.post(this, 'current/failures', options);
  }

  repair(geonodeId: GeonodeId, options?: Sudo) {
    const gId = encodeURIComponent(geonodeId);

    return RequestHelper.del(this, `${gId}`, options);
  }

  show(geonodeId: GeonodeId, options?: Sudo) {
    const gId = encodeURIComponent(geonodeId);

    return RequestHelper.get(this, `${gId}`, options);
  }

  status(geonodeId: GeonodeId, options?: Sudo) {
    const gId = encodeURIComponent(geonodeId);

    return RequestHelper.get(this, `${gId}/status`, options);
  }

  statuses(options?: PaginatedRequestOptions) {
    return RequestHelper.get(this, 'statuses', options);
  }
}

export default GeoNodes;
