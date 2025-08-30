import Link from 'next/link'
export default function Home() {
  return (
    <main className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">FoodTech Delivery</h1>
      <p className="text-sm opacity-80">Browse restaurants, add items to cart, and checkout.</p>
      <div className="flex gap-4">
        <Link className="underline" href="/restaurant/demo">Open demo restaurant</Link>
        <Link className="underline" href="/cart">Cart</Link>
      </div>
    </main>
  )
}
