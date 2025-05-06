import { NextRequest, NextResponse } from 'next/server';

import { fetchSuggestions } from './action';

const GET = async (req: NextRequest) => {
  const q = req.nextUrl.searchParams.get('q');
  const locale = req.nextUrl.searchParams.get('locale') ?? 'ru';
  const count = Number.parseInt(req.nextUrl.searchParams.get('count') ?? '5');

  // If no query or q is empty string, return empty array
  if (!q) {
    return NextResponse.json([]);
  }

  try {
    const suggestions = await fetchSuggestions({ query: q, count, locale });

    return NextResponse.json(suggestions);
  } catch (error) {
    console.error('Error fetching suggestions', error);
    return NextResponse.json([], { status: 500 });
  }
};

export { GET };
