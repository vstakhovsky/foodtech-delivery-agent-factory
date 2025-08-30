type Props = { params: { id: string } }
export default function RestaurantPage({ params }: Props) {
  return (
    <main className="p-6">
      <h2 className="text-xl font-medium">Restaurant: {params.id}</h2>
      <ul className="mt-4 list-disc pl-6">
        <li>Demo dish A — $12.90</li>
        <li>Demo dish B — $9.40</li>
      </ul>
    </main>
  )
}
