import { BaseService, RequestHelper } from '../infrastructure';
import { BaseServiceOptions, BaseRequestOptions, Sudo } from '../../types/types';

class ApplicationSettings extends BaseService {
  constructor(options: BaseServiceOptions) {
  	super(options, ['application', 'settings']);
  }

  all(options?: Sudo) {
    return RequestHelper.get(this, '', options);
  }

  edit(options?: BaseRequestOptions) {
    return RequestHelper.put(this, '', options);
  }
}

export default ApplicationSettings;
