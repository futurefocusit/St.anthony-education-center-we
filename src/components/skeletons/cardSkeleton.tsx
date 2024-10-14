export const SkeletonPortfolio = () => {
  const items = Array(3).fill(null);
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {items.map((_, index) => (
        <div key={index} className="w-full md:w-72 animate-pulse">
          <div className="h-48 bg-gray-300 dark:bg-gray-700 rounded-lg mb-4" />
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2" />
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full mb-2" />
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-2/3" />
        </div>
      ))}
    </div>
  );
};
export const SkeletonTestimony = () => (
  <div className="animate-pulse">
    <div className="h-[395px] bg-gray-300 dark:bg-gray-700 rounded-lg mb-4" />
    <div className="h-20 bg-gray-300 dark:bg-gray-700 rounded-lg mb-4" />
    <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mb-2" />
    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4" />
  </div>
);

export const SkeletonTeam = () => {
  const items = Array(3).fill(null);
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {items.map((_, index) => (
        <div key={index} className="w-full md:w-60 animate-pulse">
          <div className="h-32 bg-gray-300 dark:bg-gray-700 rounded-lg mb-4" />
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mx-auto mb-2" />
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mx-auto" />
        </div>
      ))}
    </div>
  );
};

export const SkeletonBlog = () => {
  const items = Array(3).fill(null);
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {items.map((_, index) => (
        <div key={index} className="w-full md:w-60 animate-pulse">
          <div className="h-48 bg-gray-300 dark:bg-gray-700 rounded-lg mb-4" />
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2" />
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full mb-2" />
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-2/3" />
        </div>
      ))}
    </div>
  );
};