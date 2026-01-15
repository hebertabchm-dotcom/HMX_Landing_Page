const ALLOWED_ORIGINS = new Set(['https://hmx-landing-page.vercel.app']);

function setCors(res, origin) {
  if (!origin) return;
  if (ALLOWED_ORIGINS.has(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
  }
}

export default async function handler(req, res) {
  const origin = req.headers?.origin;
  setCors(res, origin);

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const webhookUrl = process.env.N8N_WEBHOOK_URL || process.env.VITE_N8N_WEBHOOK_URL;
  if (!webhookUrl) {
    return res.status(500).json({ ok: false, error: 'Missing N8N_WEBHOOK_URL' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ ok: false, error: 'Invalid JSON body' });
    }
  }

  try {
    const upstream = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body ?? {}),
    });

    if (!upstream.ok) {
      const text = await upstream.text().catch(() => '');
      return res.status(502).json({
        ok: false,
        error: `n8n webhook failed (${upstream.status})`,
        details: text || upstream.statusText,
      });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(502).json({
      ok: false,
      error: 'Upstream request failed',
      details: error instanceof Error ? error.message : String(error),
    });
  }
}

