import { BaseService, RequestHelper } from '../infrastructure';
import { BaseServiceOptions, Sudo } from '../../types/types';

class Version extends BaseService {
	constructor(options: BaseServiceOptions) {
		super(options, ['version']);
	}

	show(options?: Sudo) {
		return RequestHelper.get(this, '', options);
	}
}

export default Version;
