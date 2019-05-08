import { BaseService, RequestHelper } from '../infrastructure';
import { BaseServiceOptions, Sudo, KeyId } from '../../types/types';

class Keys extends BaseService {
	constructor(options: BaseServiceOptions) {
    super(options, ['keys']);
  }

  show(keyId: KeyId, options?: Sudo) {
    const kId = encodeURIComponent(keyId);

    return RequestHelper.get(this, `${kId}`, options);
  }
}

export default Keys;
