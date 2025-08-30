type Props = { params: { id: string } }
export default function OrderPage({ params }: Props) {
  return (
    <main className="p-6">
      <h2 className="text-xl font-medium">Order #{params.id}</h2>
      <p className="opacity-80">Live tracking will appear here.</p>
    </main>
  )
}
