import { BaseService, RequestHelper } from '../infrastructure';
import { BaseServiceOptions, Sudo, ProjectId } from '../../types/types';

class Markdown extends BaseService {
  constructor(options: BaseServiceOptions) {
    super(options, ['markdown']);
  }

  render(text: string, options: { gfm?: string, project?: ProjectId } & Sudo) {
    return RequestHelper.post(this, '', { text, ...options });
  }
}

export default Markdown;
