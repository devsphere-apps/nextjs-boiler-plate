import { NextResponse } from 'next/server';

export async function GET() {
  // Mock API response
  return NextResponse.json({ value: Math.floor(Math.random() * 100) });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { value } = body;
    
    if (typeof value !== 'number') {
      return NextResponse.json(
        { error: 'Value must be a number' },
        { status: 400 }
      );
    }
    
    // In a real application, you might store this value in a database
    // This is just a mock API that returns the submitted value
    return NextResponse.json({ value, success: true });
    
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
} 