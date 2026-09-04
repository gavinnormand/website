function Rating({ rating }: { rating: number }) {
  return (
    <div className="flex flex-row items-center">
      {[1, 2, 3, 4, 5].map((star) => {
        const fillFull = star <= rating;
        const fillHalf = star == rating + 0.5;

        return (
          <div key={star} className="relative">
            <p className="text-secondary-text/50">★</p>
            <p
              className="text-star absolute inset-0 overflow-hidden"
              style={{ width: `${fillFull ? "100" : fillHalf ? "50" : "0"}%` }}
            >
              ★
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Rating;
