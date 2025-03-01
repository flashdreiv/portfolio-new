const Frame = () => (
  <div>
    <div className="w-[calc(100vw-2.5rem)] h-[1px] bg-gray-500 absolute top-5 left-5"></div>
    <div className="w-[calc(100vw-2.5rem)] h-[1px] bg-gray-500 absolute bottom-5 left-5"></div>
    <div className="h-[calc(100vh-2.5rem)] w-[1px] bg-gray-500 absolute top-5 left-5"></div>

    <div className="h-[calc(100vh-2.5rem)] w-[1px] bg-gray-500 absolute top-5 right-5"></div>
  </div>
);

export default Frame;
