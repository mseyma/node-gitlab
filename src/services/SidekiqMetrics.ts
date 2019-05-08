import { BaseService, RequestHelper } from '../infrastructure';
import { BaseServiceOptions } from '../../types/types';

class SidekiqMetrics extends BaseService {
  constructor(options: BaseServiceOptions) {
    super(options, ['sidekiq']);
  }

  queueMetrics() {
    return RequestHelper.get(this, 'queue_metrics');
  }

  processMetrics() {
    return RequestHelper.get(this, 'process_metrics');
  }

  jobStats() {
    return RequestHelper.get(this, 'job_stats');
  }

  compoundMetrics() {
    return RequestHelper.get(this, 'compound_metrics');
  }
}

export default SidekiqMetrics;
