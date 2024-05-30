// /app/api/whmcs-domain-search/route.js

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { api_call, response_type, domain } = await req.json();

  const identifier: any = process.env.WHMCS_IDENTIFIER;
  const secret: any = process.env.WHMCS_SECRET;
  const apiUrl: any = process.env.WHMCS_API_URL;

  const postfields: any = {
    identifier: identifier,
    secret: secret,
    action: api_call,
    responsetype: response_type,
    domain: domain,
  };

  const formBody = Object.keys(postfields)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(postfields[key]))
    .join('&');

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody,
    });

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}
