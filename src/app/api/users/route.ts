import { NextResponse } from 'next/server';

const GET = async () => {
  try {
    const users = await import('./sample.json').then((module) => module.default);

    return NextResponse.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json([], { status: 500 });
  }
};

export const dynamic = 'force-static';

export { GET };
