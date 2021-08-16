import HttpClient from '@/core/http/httpClient';
import { Configuration } from '@/lema';

export class BaseService {
  protected httpClient = HttpClient;
  
  private baseUrl = "";

  constructor() {
    this.getBaseUrl()
  }

  private getBaseUrl() {
    const baseUrl = Configuration.getConfig<string>('apiUrl') ?? '';
    this.baseUrl = baseUrl;
  }

  buildApiUrl(path: string): string {
    let url = ''
    const baseUrl = this.baseUrl.trimEnd('/');
    path = path.trimStart('/');
    url = `${baseUrl}/${path}`;
    return url;
  }
}