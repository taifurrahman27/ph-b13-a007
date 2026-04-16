import Image from "next/image";
import Link from "next/link";

export default function FriendCard({ friend }) {

    return (
        <Link href={`/friends/${friend.id}`}
            className="text-center rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-5">

            <div className="flex-col items-center justify-center mb-4">
                <Image
                    src={friend.picture}
                    width={200}
                    height={200}
                    alt={friend.name}
                    className="w-14 h-14 rounded-full flex justify-center mx-auto object-cover border"
                />
                <h2 className="text-2xl my-5 font-semibold text-[#1F2937]">
                    {friend.name}
                </h2>
                <p className="text-sm font-medium text-[#64748B] mt-2">
                    {friend.days_since_contact} days ago
                </p>
            </div>

            <div className="flex justify-center items-center flex-wrap gap-2 mb-4">
                {friend.tags.map((tag, i) => (
                    <span
                        key={i}
                        className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
                    >
                        #{tag}
                    </span>
                ))}
            </div>

            <div className=" items-center mt-auto">
                <span
                    className={`px-3 py-1 rounded-full font-bold inline-block mt-2 ${friend.status === 'overdue'
                        ? 'bg-red-100 text-red-600'
                        : friend.status === 'almost due'
                            ? 'bg-yellow-100 text-yellow-600'
                            : 'bg-green-100 text-green-600'}`}
                >
                    {friend.status}
                </span>

            </div>
        </Link>
    );
}