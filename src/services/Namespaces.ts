import { BaseService, RequestHelper } from '../infrastructure';
import { BaseServiceOptions, PaginatedRequestOptions, Sudo, NamespaceId } from '../../types/types';

class Namespaces extends BaseService {
	constructor(options: BaseServiceOptions) {
    super(options, ['namespaces']);
  }

  all(options?: PaginatedRequestOptions) {
    return RequestHelper.get(this, '', options);
  }

  show(namespaceId: NamespaceId, options: { search?: string } & Sudo) {
    const nId = encodeURIComponent(namespaceId);

    return RequestHelper.get(this, `${nId}`, options);
  }
}

export default Namespaces;
