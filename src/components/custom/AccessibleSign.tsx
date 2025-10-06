import WheelchairSvg from '@/assets/wheelchairSvg.tsx';

const AccessibleSign = () => {
  return (
    <div className="cursor-pointer fixed top-6 md:top-40 left-6 md:left-14 z-50 flex items-center justify-center size-8 bg-chart-3 rounded-sm border-white border-1">
      <WheelchairSvg className={'text-white size-6'} />
    </div>
  );
};

export default AccessibleSign;
