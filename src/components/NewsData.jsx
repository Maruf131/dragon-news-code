import { useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { FaStar, FaEye } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";

export default function NewsData({ news }) {
  const { title, rating, total_view, author, thumbnail_url, details } = news;
  const [expanded, setExpanded] = useState(false);

  // Format date
  const date = new Date(author.published_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-white rounded-xl shadow-md p-4 space-y-4 my-5">
      {/* Author Info */}
      <div className="flex items-center justify-between bg-base-200 p-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="text-sm font-semibold">{author.name}</h2>
            <p className="text-xs text-gray-500">{date}</p>
          </div>

        </div>
        <div className="flex gap-2 text-gray-600 text-lg">
            <CiBookmark />
            <FaShare></FaShare>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-lg font-bold">{title}</h1>

      {/* Thumbnail */}
      <img
        src={thumbnail_url}
        alt={title}
        className="w-full rounded-lg object-cover max-h-80"
      />

      {/* Details */}
      <div className="text-gray-600 text-sm">
        {expanded ? details : details.slice(0, 150) + "..."}
        <button
          className="text-red-500 font-semibold text-sm ml-1"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show Less" : "Read More"}
        </button>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-sm text-gray-600">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-500">
          {Array.from({ length: rating.number }, (_, i) => (
            <FaStar key={i} className="w-4 h-4" />
          ))}
          <span className="ml-1">{rating.number}.0</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1">
          <FaEye className="w-4 h-4" />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
}
