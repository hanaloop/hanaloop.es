import { withBasePath } from '@/lib/locales';

export default function useBaseUrl(href = '') {
  return withBasePath(href);
}
