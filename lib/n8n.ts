export type ApplicationWebhookPayload = {
  name: string;
  email: string;
  whatsapp: string;
  company: string;
  website: string;
  revenue: string;
  challenge: string;
  submittedAt: string;
  pageUrl: string;
  referrer: string;
  userAgent: string;
};

export function getApplicationSubmitUrl() {
  const url = import.meta.env.VITE_FORM_SUBMIT_URL as string | undefined;
  return url?.trim() ? url.trim() : '/api/hmx-lead';
}

export async function submitApplicationToN8n(payload: ApplicationWebhookPayload) {
  const submitUrl = getApplicationSubmitUrl();

  const response = await fetch(submitUrl, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const contentType = response.headers.get('content-type') ?? '';
    if (contentType.includes('application/json')) {
      const json = (await response.json().catch(() => null)) as
        | { error?: string; message?: string; details?: string }
        | null;
      const details = json?.details || json?.message || json?.error;
      throw new Error(
        `application submit failed (${response.status}): ${details || response.statusText}`,
      );
    }

    const responseText = await response.text().catch(() => '');
    throw new Error(`application submit failed (${response.status}): ${responseText || response.statusText}`);
  }
}
