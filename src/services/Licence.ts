import { BaseService, RequestHelper } from '../infrastructure';
import { BaseServiceOptions, Sudo } from '../../types/types';

class Licence extends BaseService {
	constructor(options: BaseServiceOptions) {
    super(options, ['licence']);
  }

  all(options?: Sudo) {
    return RequestHelper.get(this, '', options);
  }

  create(options?: Sudo) {
    return RequestHelper.post(this, '', options);
  }
}

export default Licence;
