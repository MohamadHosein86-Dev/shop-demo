export async function getProducts(search = "") {
    const params = new URLSearchParams();
    if (search) params.append("title", search);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}?${params.toString()}`, {
        cache: "no-store"
    });
    if (!res.ok) throw new Error('Failed to Featching products');
    const products = await res.json();
    return products;
}

export async function getProduct(id: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${id}`, {
        cache: "no-store"
    });
    if (!res.ok) throw new Error('Failed to Featching product');
    return await res.json();
}