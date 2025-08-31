import Image from 'next/image';

const WorkingProcess = ({
  title = "We Complete Our Work to Follow Some Easy Ways",
  steps = [],
  background = "linear-gradient(to bottom, #382933, #372935, #372831)",
}) => {
  return (
    <section
      className="py-12 lg:py-18 "
      style={{ background }}
    >
      <div className="container mx-auto min-h-screen">
        <div className="section-title text-center mb-12">
          <h2 className="wow fadeInUp text-2xl md:text-3xl font-semibold text-white">
            {title.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </h2>
        </div>

        <div className="space-y-10">
          {steps.map((step, index) => {
            const isEven = index % 2 === 1;
            const arrowDown = '/assets/images/arrow-down (1).png';
            const arrowRevers = '/assets/images/arrow-revers (1).png';

            return (
              <div
                key={index}
                className="wow fadeInUp flex flex-col lg:flex-row items-center justify-center gap-6"
              >
                {/* Arrow for even steps (reverse) */}
                {isEven && (
                  <div className="hidden lg:flex lg:w-3/12 justify-center">
                    <div className="arrow-image text-center">
                      <Image
                        src={arrowRevers}
                        alt="arrow"
                        width={70}
                        height={200}
                      />
                    </div>
                  </div>
                )}

                {/* Card */}
                <div className="lg:w-5/12 w-full px-4 mx-auto">
                  <div className="bg-gradient-to-r from-[#5F69A8] via-[#6E8EEE] to-[#8DCBFD] text-white flex items-center justify-between px-6 py-5 rounded-xl">
                    <div className="icon">
                      <Image
                        src={step.icon}
                        alt="step icon"
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="content flex-1 text-left ml-6">
                      <span
                        className="sub-title inline-block shadow-md text-white font-medium text-sm px-5 py-2 mb-4 rounded-full"
                        style={{ background }}
                      >
                        Step {`0${index + 1}`}
                      </span>
                      <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                      <p className="text-gray-100">{step.description}</p>
                    </div>
                  </div>
                </div>

                {/* Arrow for odd steps (down) */}
                {!isEven && (
                  <div className="hidden lg:flex lg:w-3/12 justify-start">
                    <div className="arrow-image mt-10">
                      <Image
                        src={arrowDown}
                        alt="arrow"
                        width={100}
                        height={200}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
