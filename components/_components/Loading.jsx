const Loading = () => {
    // Define the progress percentage (arbitrary value for example)
    const progress = 0.5;
  
    return (
      <div className="flex items-center justify-center p-4">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-500 rounded-full h-2"
            style={{ width: `${progress * 100}%` }}
          ></div>
        </div>
        <p className="text-lg font-bold ml-2">Loading...</p>
      </div>
    );
  };
  
  export default Loading;
  