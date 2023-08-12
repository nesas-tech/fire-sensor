const Loading = () => {
  return (
    <div className="absolute h-screen z-50 right-[40%] sm:right-[47%] top-0 transform translate-x-[50%] translate-y-[50%]">
      <svg
        className="w-14 h-14 text-yellow animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="#008FFB"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="#008FFB"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  );
};

export default Loading;
