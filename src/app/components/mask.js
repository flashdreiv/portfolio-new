const Mask = () => (
  <div className="fixed inset-0 opacity-80 z-[50] pointer-events-none">
    <div className="w-[calc(100vw-2.5rem)] h-[20px] bg-[#0a0a0a] absolute top-0 left-10"></div>
    <div className="w-[calc(100vw-2.5rem)] h-[20px] bg-[#0a0a0a] absolute bottom-0 left-10"></div>
    <div className="h-full w-[20px] bg-[#0a0a0a] absolute top-0 right-0"></div>
    <div className="h-full w-[20px] bg-[#0a0a0a] absolute top-0 left-0"></div>
  </div>
);

export default Mask;
