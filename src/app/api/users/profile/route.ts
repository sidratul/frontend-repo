import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const BE_URL = process.env.BE_URL+`/fetch-user-data`;
  console.log('get called')
  const res = await fetch(BE_URL, {
    headers: getHeader(req),
    method: 'GET',
  })
  const data = await res.json();
  return Response.json({ data }, {status: res.status});
}

export async function PATCH(req: NextRequest) {
  const BE_URL = process.env.BE_URL+`/update-user-data`;
  console.log('get called UPDATE')

  const body = await req.json();
  const res = await fetch(BE_URL, {
    headers: getHeader(req),
    method: 'PATCH',
    body: JSON.stringify(body),
  })
  
  const data = await res.json();
  return Response.json({ data }, {status: res.status});
}

function getHeader(req: NextRequest){
  const token = req.cookies.get('token');
  return {
    'Content-Type': 'application/json',
    'X-Firebase-AppCheck': token?.value,
  } as HeadersInit;
}