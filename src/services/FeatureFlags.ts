import { BaseService, RequestHelper } from '../infrastructure';
import { BaseServiceOptions, PaginatedRequestOptions, BaseRequestOptions } from '../../types/types';

class FeatureFlags extends BaseService {
	constructor(options: BaseServiceOptions) {
		super(options, ['features']);
	}

	all(options?: PaginatedRequestOptions) {
		return RequestHelper.get(this, '', options);
	}

	set(name: string, options?: BaseRequestOptions) {
		const encodedName = encodeURIComponent(name);

		return RequestHelper.post(this, `${encodedName}`, options);
	}
}

export default FeatureFlags;
