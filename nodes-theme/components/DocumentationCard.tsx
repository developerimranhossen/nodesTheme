function DocumentationCard({ path, size }) {
  return (
    <div className="relative">
      <div
        style={{
          width: `${size}px`,
        }}
        className={`bg-gradient-4 h-[300px]  absolute`}
      ></div>

      <div
        style={{
          background: `url(${path.src})`,
          backgroundPosition: "center",
          backgroundSize: "container",
          backgroundRepeat: "no-repeat",
          width: `${size}px`,
        }}
        className={`flex flex-col justify-end items-start gap-[10px]  h-[300px] border border-background-stroke-surface rounded-[16px] p-[18px]`}
      >
        <div className="z-10">
          <h1 className="text-typography-sub-heading text-lg font-medium">
            Gorgeous out of the box
          </h1>
          <p className="text-typography-paragraph-soft text-xs">
            Opinionated when you're lazy, but infinitely flexible when you need
            it to be
          </p>
        </div>
      </div>
    </div>
  );
}

export default DocumentationCard;
