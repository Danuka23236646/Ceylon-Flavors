import React from 'react'
import { StarIcon } from 'lucide-react'

interface ReviewProps {
  review: {
    id: number
    name: string
    avatar: string
    date: string
    rating: number
    text: string
    platform: string
  }
}
const ReviewCard = ({ review }: ReviewProps) => {
  const renderPlatformIcon = () => {
    switch (review.platform) {
      case 'google':
        return (
          <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-sm">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
          </div>
        )
      case 'facebook':
        return (
          <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
            <span className="text-white text-xs font-bold">f</span>
          </div>
        )
      case 'amazon':
        return (
          <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-sm">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.42 14.58c-.51-.38-1.05-.78-1.05-1.58v-2.64c0-1.12.16-2.15-.75-2.92-.72-.6-1.84-.82-2.72-.82-1.72 0-3.65.64-4.04 2.76-.04.21.12.33.25.36l1.77.19c.17-.01.29-.17.32-.34.15-.74.55-1.1 1.05-1.1.27 0 .57.1.73.34.2.29.18.7.18 1.04v.19c-1.06.12-2.45.2-3.44.63-.99.44-1.7 1.32-1.7 2.63 0 1.68 1.06 2.52 2.42 2.52.92 0 1.42-.22 2.13-.94.23.35.31.52.74.89.1.05.22.05.31-.03l.01-.01c.26-.23.75-.65 1.01-.87.11-.09.09-.23.02-.35zm-2.34-1.35c-.21.37-.53.6-.89.6-.49 0-.78-.37-.78-.93 0-1.08.97-1.27 1.88-1.27v.26c0 .47.01.94-.21 1.34zm6.11 3.02c.18-.16.2-.45.02-.62-1.44-1.35-1.24-3.15-1.24-4.74 0-1.79.06-3.99-1.48-5.41-1.05-.97-2.56-1.26-3.76-1.26-2.4 0-5.08.89-5.65 3.84-.06.3.16.46.35.5l1.75.19c.17-.01.3-.17.33-.34.25-1.23 1.25-1.81 2.38-1.81.61 0 1.29.22 1.65.75.41.59.36 1.39.36 2.07v.37c-1.59.18-3.66.29-5.14 1.05-1.52.79-2.58 2.4-2.58 4.77 0 3.04 1.9 4.57 4.34 4.57 1.38 0 2.12-.33 3.17-1.4.35.53.46.79 1.09 1.35.14.08.32.06.45-.04.38-.31 1.05-.95 1.43-1.27.15-.13.16-.31.03-.46-.3-.32-.62-.59-.62-1.2v-3.74c0-1.24.08-2.39-.83-3.25-.71-.68-1.88-.92-2.79-.92-.96 0-2.01.18-2.84.69-.19.11-.32.34-.34.59-.04.48.29.92.75.92.16 0 .31-.06.42-.15.64-.45 1.23-.66 1.96-.66.76 0 1.75.3 1.75 1.47v.28c-2.18.25-5.01.63-5.01 3.57 0 2.28 1.45 3.42 3.32 3.42.95 0 1.74-.23 2.62-.8.22.34.5.63.8.9.11.1.27.14.42.09.41-.14.93-.45 1.27-.64zm-8.73 4.72c-.19.16-.19.45-.01.62.74.69 1.95 1.04 3.02 1.04 2.07 0 3.23-1.3 3.7-3.27.06-.27-.1-.52-.36-.57l-.68-.17c-.18-.05-.38.05-.44.23-.22.62-.59 1.76-2.21 1.76-.72 0-1.35-.26-1.36-1.11 0-.06.01-.11.01-.17.05-.17-.02-.34-.16-.45l-1.51-.94zm-.31-12.38c.15-.12.2-.35.12-.53-.25-.53-.78-.86-1.31-.86-.54 0-1.07.33-1.31.86-.08.19-.03.41.12.53l.44.37c.09.07.2.11.31.11.12 0 .23-.04.31-.11l.44-.37z"
                fill="#FF9900"
              />
            </svg>
          </div>
        )
      case 'airbnb':
        return (
          <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-sm">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm2.782 4.263c-.391-.541-.893-.763-1.462-.763-.646 0-1.307.345-1.841.982-.534-.637-1.195-.982-1.841-.982-.569 0-1.071.222-1.462.763-.577.796-.686 2.178-.231 3.582.622 1.924 2.027 4.2 3.534 5.808 1.507-1.608 2.912-3.884 3.534-5.808.454-1.404.346-2.786-.231-3.582zm-.7 3.202c-.494 1.528-1.643 3.395-2.782 4.735-1.139-1.34-2.288-3.207-2.782-4.735-.325-1.005-.254-1.926.071-2.354.167-.23.381-.311.629-.311.52 0 1.136.515 1.483 1.112.164.281.471.455.8.455.329 0 .636-.174.8-.455.347-.597.963-1.112 1.483-1.112.249 0 .462.081.629.311.325.428.396 1.349.071 2.354z"
                fill="#FF5A5F"
              />
            </svg>
          </div>
        )
      default:
        return null
    }
  }
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <div className="flex items-center gap-3 mb-2">
        <div className="relative">
          <img
            src={review.avatar}
            alt={`${review.name} profile`}
            className="w-10 h-10 rounded-full object-cover"
          />
          {review.platform !== 'none' && (
            <div className="absolute -right-1 -bottom-1">
              {renderPlatformIcon()}
            </div>
          )}
        </div>
        <div className="flex-1">
          <div className="font-medium">{review.name}</div>
          <div className="text-gray-500 text-xs">{review.date}</div>
        </div>
      </div>
      <div className="flex text-yellow-400 mb-2">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            size={16}
            fill={i < review.rating ? 'currentColor' : 'none'}
            strokeWidth={i < review.rating ? 0 : 2}
          />
        ))}
      </div>
      <p className="text-sm text-gray-700">{review.text}</p>
    </div>
  )
}
export default ReviewCard
