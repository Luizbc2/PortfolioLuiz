export const RatingStars = ({ value }) => {
  const filled = Math.round(value);
  return (
    <div className="rating-stars" aria-label={`${value} estrelas`}>
      {[1, 2, 3, 4, 5].map((star) => <span key={star} className={star <= filled ? 'is-filled' : ''}>★</span>)}
    </div>
  );
};
