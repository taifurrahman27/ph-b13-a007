import Image from "next/image";
import QuickCheckIn from "./QuickCheckIn";
const FriendDetailsPage = async ({ params }) => {
  const res = await fetch(`https://ph-b13-a007.vercel.app//friends.json`);
  const friends = await res.json();
  console.log(friends, "friens");

  const { id } = await params;
  console.log(id, "id");
  const friend = friends.find((f) => f.id == id);
  console.log(friend, "friend");


  const getStatusStyle = (status) => {
    switch (status) {
      case 'overdue':
        return 'bg-red-100 text-red-600';
      case 'almost due':
        return 'bg-yellow-100 text-yellow-600';
      case 'on-track':
        return 'bg-green-100 text-green-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 grid lg:grid-cols-3 gap-6">

      <div className="lg:col-span-1 space-y-6">
        <div className="bg-white rounded-2xl shadow p-6 text-center">
          <Image
            src={friend.picture}
            width={100}
            height={100}
            alt={friend.name}
            className="rounded-full mx-auto mb-4"
          />

          <h2 className="text-xl font-bold">{friend.name}</h2>

          <span className={`px-3 py-1 text-xs rounded-full inline-block mt-2 ${getStatusStyle(friend.status)}`}>
            {friend.status}
          </span>

          <div className="flex flex-wrap justify-center gap-2 mt-3">
            {friend.tags.map((tag, i) => (
              <span key={i} className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                #{tag}
              </span>
            ))}
          </div>

          <p className="text-sm text-gray-600 mt-4">{friend.bio}</p>
          <p className="text-sm text-gray-500 mt-2">{friend.email}</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-4 space-y-3">
          <button className="w-full py-2 rounded-lg bg-yellow-100 text-yellow-700">⏰ Snooze 2 Weeks</button>
          <button className="w-full py-2 rounded-lg bg-gray-100 text-gray-700">📦 Archive</button>
          <button className="w-full py-2 rounded-lg bg-red-100 text-red-600">🗑️ Delete</button>
        </div>
      </div>

      <div className="lg:col-span-2 space-y-6">

        <div className="grid sm:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="text-gray-500 text-sm">Days Since Contact</p>
            <h3 className="text-2xl font-bold">{friend.days_since_contact}</h3>
          </div>

          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="text-gray-500 text-sm">Goal</p>
            <h3 className="text-2xl font-bold">{friend.goal} days</h3>
          </div>

          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="text-gray-500 text-sm">Next Due</p>
            <h3 className="text-2xl font-bold">{friend.next_due_date}</h3>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">Relationship Goal</p>
            <h3 className="text-lg font-semibold">
              Contact every {friend.goal} days
            </h3>
          </div>
          <button className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg">
            Edit
          </button>
        </div>

        <QuickCheckIn friendName={friend.name} />

      </div>
    </div>
  );
}

export default FriendDetailsPage;