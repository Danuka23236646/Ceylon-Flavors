import React from 'react'
import { StarIcon, PenIcon } from 'lucide-react'
import ReviewCard from './ReviewCard'
const reviewsData = [
  {
    id: 1,
    name: 'Cameron Wilson',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    date: '1 day ago',
    rating: 5,
    text: 'I love the products I bought from this store. Great quality and reasonable price.',
    platform: 'google',
  },
  {
    id: 2,
    name: 'Guy Hawkins',
    avatar: 'https://randomuser.me/api/portraits/men/43.jpg',
    date: '1 day ago',
    rating: 5,
    text: 'Great time with the fam!',
    platform: 'none',
  },
  {
    id: 3,
    name: 'Leslie Alexander',
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
    date: '1 day ago',
    rating: 5,
    text: 'Always love playing with Escape Games! Had a team! We played Hank and survived the crash.',
    platform: 'facebook',
  },
  {
    id: 4,
    name: 'Esther Howard',
    avatar: 'https://randomuser.me/api/portraits/women/36.jpg',
    date: '1 day ago',
    rating: 5,
    text: 'We did the Code5. Felt like I was in a horror movie. So much fun!',
    platform: 'google',
  },
  {
    id: 5,
    name: 'Jacob Jones',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
    date: '1 day ago',
    rating: 4,
    text: 'The experience is very nice and comfortable! The location is very convenient, near shops and public transport.',
    platform: 'airbnb',
  },
  {
    id: 6,
    name: 'Jenny Wilson',
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    date: '1 day ago',
    rating: 4,
    text: 'I like this shirt and the size is as expected. The quality of the fabric is nice.',
    platform: 'google',
  },
  {
    id: 7,
    name: 'Leslie Alexander',
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
    date: '1 day ago',
    rating: 5,
    text: 'Petrick is best online shopping website ever! I bought many things from them and all are good quality.',
    platform: 'amazon',
  },
  {
    id: 8,
    name: 'Bessie Cooper',
    avatar: 'https://randomuser.me/api/portraits/women/53.jpg',
    date: '1 day ago',
    rating: 4,
    text: 'We did the Code5. Felt like I was in a horror movie. So much fun!',
    platform: 'none',
  },
]
const ReviewsSection = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          <div className="text-xl font-semibold">Overall Rating</div>
          <div className="text-2xl font-bold ml-2">4.7</div>
          <div className="flex text-yellow-400">
            <StarIcon size={20} fill="currentColor" strokeWidth={0} />
            <StarIcon size={20} fill="currentColor" strokeWidth={0} />
            <StarIcon size={20} fill="currentColor" strokeWidth={0} />
            <StarIcon size={20} fill="currentColor" strokeWidth={0} />
            <StarIcon
              size={20}
              className="text-yellow-400"
              fill="currentColor"
              strokeWidth={2}
            />
          </div>
          <div className="text-gray-500 text-sm ml-2">25,873 reviews</div>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2">
          <PenIcon size={16} />
          <span>Write a Review</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviewsData.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  )
}
export default ReviewsSection
