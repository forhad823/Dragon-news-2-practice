import React from "react";
import { FaEye, FaBookmark, FaShareAlt, FaStar, FaFire } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    tags,
    others,
  } = news;
  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );

  const shortDetails =
    details.length > 180 ? details.slice(0, 180) + "..." : details;

  return (
    <div className="card bg-base-100 shadow-xl w-[560px] rounded-2xl overflow-hidden border border-base-200">
      {/* Author Row */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-11 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <p className="font-semibold text-sm text-base-content leading-tight">
              {author.name}
            </p>
            <p className="text-xs text-base-content/50">{formattedDate}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {others.is_trending && (
            <div className="badge badge-error gap-1 text-white text-xs font-semibold py-2.5 px-3">
              <FaFire className="text-[10px]" />
              Trending
            </div>
          )}
          {others.is_today_pick && (
            <div className="badge badge-success gap-1 text-white text-xs font-semibold py-2.5 px-3">
              Today's Pick
            </div>
          )}
          <button className="btn btn-ghost btn-sm btn-circle text-base-content/50 hover:text-primary">
            <FaBookmark size={15} />
          </button>
          <button className="btn btn-ghost btn-sm btn-circle text-base-content/50 hover:text-primary">
            <FaShareAlt size={15} />
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="px-5 pb-3">
        <h2 className="text-lg font-bold text-base-content leading-snug">
          {title}
        </h2>
      </div>

      {/* Thumbnail */}
      <figure className="px-5">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-xl w-full h-52 object-cover"
          onError={(e) => {
            e.target.src =
              "https://placehold.co/560x208/e2e8f0/94a3b8?text=News+Image";
          }}
        />
      </figure>

      {/* Tags */}
      <div className="px-5 pt-3 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="badge badge-outline badge-sm text-primary border-primary/40 font-medium"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Details */}
      <div className="px-5 pt-2">
        <p className="text-sm text-base-content/60 leading-relaxed">
          {shortDetails}
        </p>
        <button className="text-sm font-semibold text-primary mt-1 hover:underline">
          Read More
        </button>
      </div>

      {/* Footer: Rating + Views */}
      <div className="card-body pt-3 pb-5 px-5">
        <div className="divider my-0"></div>
        <div className="flex items-center justify-between mt-1">
          {/* Star Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  size={16}
                  className={
                    star <= rating.number
                      ? "text-warning"
                      : "text-base-content/20"
                  }
                />
              ))}
            </div>
            <span className="text-sm font-bold text-base-content">
              {rating.number}.0
            </span>
          </div>

          {/* View Count */}
          <div className="flex items-center gap-1.5 text-base-content/50">
            <FaEye size={15} />
            <span className="text-sm font-medium">
              {total_view.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
