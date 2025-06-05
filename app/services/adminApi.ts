import { productsType } from "../types/Types";

export async function getAdminProducts() {
  const res = await fetch('/api/admin/products', {
    cache: 'no-store'
  });
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export async function createProduct(product: Omit<productsType, 'id'>) {
  const res = await fetch('/api/admin/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product)
  });
  if (!res.ok) throw new Error('Failed to create product');
  return res.json();
}

export async function updateProduct(product: productsType) {
  const res = await fetch('/api/admin/products', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product)
  });
  if (!res.ok) throw new Error('Failed to update product');
  return res.json();
}

export async function deleteProduct(id: string) {
  const res = await fetch(`/api/admin/products?id=${id}`, {
    method: 'DELETE'
  });
  if (!res.ok) throw new Error('Failed to delete product');
  return res.json();
} 