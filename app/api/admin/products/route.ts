import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`);
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
    const data = await res.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error createing products:", error);
    return NextResponse.json(
      { error: "Failed to createing Product" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json()
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${body.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
    const data = await res.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error Editing products:", error);
    return NextResponse.json(
      { error: "Failed to Editing Product" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    if (!id) {
      return NextResponse.json({ error: 'Product ID is required' }, { status: 400 })
    }
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${id}`, {
      method: 'DELETE'
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error Deleting products:", error);
    return NextResponse.json(
      { error: "Failed to Deleting Product" },
      { status: 500 }
    );
  }
} 