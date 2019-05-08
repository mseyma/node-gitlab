import { BaseService, RequestHelper } from '../infrastructure';
import { BaseServiceOptions, PaginatedRequestOptions, EventOptions } from '../../types/types';

class Events extends BaseService {
	constructor(options: BaseServiceOptions) {
		super(options, ['events']);
	}

	all(options?: PaginatedRequestOptions & EventOptions) {
		return RequestHelper.get(this, '', options);
	}
}

export default Events;
