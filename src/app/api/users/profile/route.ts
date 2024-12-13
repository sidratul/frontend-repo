/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const token = req.cookies.get('token');
  const BE_URL = process.env.BE_URL+`/fetch-user-data`;
  const res = await fetch(BE_URL, {
    headers: {
      'Content-Type': 'application/json',
      'X-Firebase-AppCheck': token?.value,
    } as any,
  })
  const data = await res.json();
  return Response.json({ data }, {status: res.status});

}