import React from "react";

const MetricCard = () => {
  const metrics = [
    { value: "20+", label: "Projects Completed" },
    { value: "10+", label: "Tech Stack" },
    { value: "500+", label: "Commits Pushed" },
    { value: "900+", label: "Coffee Consumed" },
  ];

  return (
    <div className="flex justify-center px-4 py-8 rounded-xl bg-base-content/10 shadow-lg backdrop-blur-xs mt-15">

      {metrics.map((metric, index) => (
        <React.Fragment key={index}>
          <div className="md:flex gap-4 px-2">
            <div className="text-primary text-xl md:text-4xl font-bold">{metric.value}</div>
            <div className="text-xs md:text-base font-semibold">{metric.label}</div>
          </div>

          {index < metrics.length - 1 && (
            <>
              <div className="border-l border-dashed border-base-content h-auto mx-2 md:mx-4"></div>
            </>
          )}

        </React.Fragment>
      ))}

    </div>
  );
};
export default MetricCard;