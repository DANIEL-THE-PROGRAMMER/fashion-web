export const PayDayResponsiveone = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <div
        style={{ width: "calc(100% - 932.94px)" }}
        className="hidden md:flex pt-[140px] md:pr-[200px] md:pl-[90px] pb-[155px] flex-col items-start justify-center"
      >
        {children}
      </div>
      <div className="flex md:hidden pt-[140px] md:pr-[200px] md:pl-[90px] pb-[155px] flex-col items-center text-center md:text-start">
        {children}
      </div>
    </>
  );
};
