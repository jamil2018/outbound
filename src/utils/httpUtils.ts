export function apiResponse(
  body: any[] | unknown,
  status: number,
  headers?: Headers
) {
  return new Response(JSON.stringify(body), { status, headers });
}
