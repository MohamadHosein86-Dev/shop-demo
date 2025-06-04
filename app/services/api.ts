
export async function getProducts() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
        cache: "no-store"
    });
   return await res.json() ;
}
export async function getProduct(id:string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${id}`, {
        cache: "no-store"
    });
   return await res.json() ;
}