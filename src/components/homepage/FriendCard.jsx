import Image from "next/image";

export default function FriendCard({ friend }) {

    const getStatusStyle = (status) => {
        switch (status) {
            case 'overdue':
                return 'bg-red-100 text-red-600 border-red-200';
            case 'almost due':
                return 'bg-yellow-100 text-yellow-600 border-yellow-200';
            case 'on-track':
                return 'bg-green-100 text-green-600 border-green-200';
            default:
                return 'bg-gray-100 text-gray-600';
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-5 flex flex-col justify-between">

            <div className="flex items-center gap-4 mb-4">
                <Image
                    src={friend.picture}
                    width={200}
                    height={200}
                    alt={friend.name}
                    className="w-14 h-14 rounded-full object-cover border"
                />

                <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                        {friend.name}
                    </h2>
                    <p className="text-sm text-gray-500">{friend.email}</p>
                </div>
            </div>

            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {friend.bio}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
                {friend.tags.map((tag, i) => (
                    <span
                        key={i}
                        className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
                    >
                        #{tag}
                    </span>
                ))}
            </div>

            <div className="flex items-center justify-between mt-auto">
                <span
                    className={`text-xs px-3 py-1 rounded-full border ${getStatusStyle(friend.status)}`}
                >
                    {friend.status}
                </span>

                <div className="text-right">
                    <p className="text-xs text-gray-400">Last Contact</p>
                    <p className="text-sm font-medium text-gray-700">
                        {friend.days_since_contact} days ago
                    </p>
                </div>
            </div>

            <div className="mt-4 pt-4 border-t text-xs text-gray-500 flex justify-between">
                <span>Goal: {friend.goal} days</span>
                <span>Next: {friend.next_due_date}</span>
            </div>
        </div>
    );
}