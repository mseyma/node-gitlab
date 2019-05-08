import { BaseService, RequestHelper } from '../infrastructure';
import {
  PaginatedRequestOptions,
  BaseRequestOptions,
  BaseServiceOptions,
  Sudo,
  ProjectId,
  PipelineId,
  JobScope,
} from '../../types/types';

class Pipelines extends BaseService {
  constructor(options: BaseServiceOptions) {
    super(options, ['projects']);
  }

  all(projectId: ProjectId, options?: PaginatedRequestOptions) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.get(this, `${pId}/pipelines`, options);
  }

  create(projectId: ProjectId, ref: string, options?: BaseRequestOptions) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.post(this, `${pId}/pipeline`, { ref, ...options });
  }

  show(projectId: ProjectId, pipelineId: PipelineId, options?: Sudo) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.get(this, `${pId}/pipelines/${pipelineId}`, options);
  }

  retry(projectId: ProjectId, pipelineId: PipelineId, options?: Sudo) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.post(this, `${pId}/pipelines/${pipelineId}/retry`, options);
  }

  cancel(projectId: ProjectId, pipelineId: PipelineId, options?: Sudo) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.post(this, `${pId}/pipelines/${pipelineId}/cancel`, options);
  }

  showJobs(projectId: ProjectId, pipelineId: PipelineId, options: { scope: JobScope } & Sudo) {
    const pId = encodeURIComponent(projectId);

    return RequestHelper.get(this, `${pId}/pipelines/${pipelineId}/jobs`, options);
  }
}

export default Pipelines;
