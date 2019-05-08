import FormData from 'form-data';
import { BaseService, RequestHelper } from '../infrastructure';
import { BaseRequestOptions, BaseServiceOptions, Sudo, ProjectId } from '../../types/types';

class ProjectImportExport extends BaseService {
  constructor(options: BaseServiceOptions) {
    super(options, ['projects']);
  }

  download(projectId: ProjectId, options?: Sudo) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.get(this, `${pId}/export/download`, options);
  }

  exportStatus(projectId: ProjectId, options?: Sudo) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.get(this, `${pId}/export`, options);
  }

  import(content: string, path: string) {
    const form = new FormData();

    form.append('file', content, {
      filename: path,
      contentType: 'application/octet-stream',
    });

    return RequestHelper.postData(this, 'import', form);
  }

  importStatus(projectId: ProjectId, options?: Sudo) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.get(this, `${pId}/import`, options);
  }

  schedule(projectId: ProjectId, options?: BaseRequestOptions) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.post(this, `${pId}/export`, options);
  }
}

export default ProjectImportExport;
