import { FaStar } from "react-icons/fa";

export const guides = [
  {
    id: 1,
    name: "Abdur Rahman",
    role: "Mountain Guide",
    experience: "5 Years",
    rating: 4.9,
    photo: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=500",
    description:
      "A passionate adventurer who has guided over 200 travelers through the scenic hills of Bandarban and Sajek.",
  },
  {
    id: 2,
    name: "Fatema Noor",
    role: "Cultural Tour Expert",
    experience: "4 Years",
    rating: 4.8,
    photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=500",
    description:
      "Specialized in cultural and historical tours around Dhaka and Old Bengal heritage sites.",
  },
  {
    id: 3,
    name: "Hasan Mahmud",
    role: "Wildlife Guide",
    experience: "6 Years",
    rating: 5.0,
    photo: "https://t4.ftcdn.net/jpg/06/27/02/53/360_F_627025341_sCRwuwTlXS2RT42vUoBvWo2RUmAcpmBG.jpg",
    description:
      "Hasan’s deep knowledge of the Sundarbans ecosystem makes every wildlife trip an educational adventure.",
  },
  {
    id: 4,
    name: "Sadia Akter",
    role: "Adventure Tour Planner",
    experience: "3 Years",
    rating: 4.7,
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500",
    description:
      "Focused on adventure trips and kayaking experiences, ensuring fun and safety for all travelers.",
  },
];

export default function Guide() {
  return (
    <section className="w-11/12 mx-auto py-20 font-sans text-gray-800 dark:text-gray-200">
      {/* Header */}
      <div
       
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Meet Our Expert Guides
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Passionate professionals who make your journey unforgettable.
        </p>
      </div>

      {/* Guides Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {guides.map((guide, index) => (
          <div
            key={guide.id}
            
            className="bg-gray-100 dark:bg-[#1e1e28] rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-200/20 dark:border-gray-700/30"
          >
            <div className="relative w-full h-56 overflow-hidden rounded-xl">
              <img
                src={guide.photo}
                alt={guide.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            <div className="mt-5 space-y-1">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {guide.name}
              </h3>
              <p className="text-yellow-500 text-sm font-medium">
                {guide.role}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Experience: {guide.experience}
              </p>
              <div className="flex items-center gap-1 mt-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    size={16}
                    className={
                      i < Math.floor(guide.rating)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-400"
                    }
                  />
                ))}
                <span className="text-sm text-gray-400 ml-1">
                  ({guide.rating})
                </span>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              {guide.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
