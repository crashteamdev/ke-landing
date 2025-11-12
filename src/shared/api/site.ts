import { axiosApi } from "./axios";
import { SITE_SLUG } from "../config";

let cachedSiteDocumentId: string | null = null;

export const getSiteDocumentId = async (): Promise<string | null> => {
  if (cachedSiteDocumentId) return cachedSiteDocumentId;
  try {
    const url = `/sites?filters[slug][$eq]=${SITE_SLUG}&fields[0]=documentId`;
    const response = await axiosApi.get<{ data: Array<{ documentId?: string; id?: string }> }>(url);
    const raw = Array.isArray(response.data?.data) ? response.data.data[0] : null;
    const docId = (raw && (raw.documentId || (raw as any).id)) ?? null;
    cachedSiteDocumentId = docId || null;
    return cachedSiteDocumentId;
  } catch {
    return null;
  }
};


