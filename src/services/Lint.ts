import { BaseService, RequestHelper } from '../infrastructure';
import { BaseServiceOptions, Sudo } from '../../types/types';

class Lint extends BaseService {
  constructor(options: BaseServiceOptions) {
    super(options, ['ci', 'lint']);
  }

  lint(content: string, options?: Sudo) {
    return RequestHelper.post(this, '', { content, ...options});
  }
}

export default Lint;
