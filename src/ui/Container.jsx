function Container({ children }) {
  return (
    <div className="xs:mx-auto xs:max-w-[440px] mx-4 sm:max-w-[500px] md:max-w-[630px] lg:max-w-[1000px]">
      {children}
    </div>
  );
}

export default Container;
