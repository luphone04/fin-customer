export default async function CustomerDetailPage({ params }) {
  const API_BASE = process.env.NEXT_PUBLIC_API_URL;
  const data = await fetch(`${API_BASE}/customer/${params.id}`, { cache: "no-store" });
  const customer = await data.json();

  return (
    <div className="m-4">
      <h1 className="text-2xl font-bold mb-4">Customer Details</h1>
      <div className="border border-gray-300 p-4 rounded-lg bg-white">
        <p className="font-bold text-xl text-blue-800 mb-2">{customer.name}</p>
        <p><span className="font-semibold">Date of Birth:</span> {new Date(customer.dateOfBirth).toLocaleDateString()}</p>
        <p><span className="font-semibold">Member Number:</span> {customer.memberNumber}</p>
        <p><span className="font-semibold">Interests:</span> {customer.interests}</p>
      </div>
    </div>
  );
}
