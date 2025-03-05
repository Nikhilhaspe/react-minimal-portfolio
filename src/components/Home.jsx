function Home() {
  return (
    <div className="min-h-screen flex-[3] transition-all duration-500 dark:bg-black dark:text-white">
      <main className="flex max-w-[1000px] flex-col gap-10 p-5 md:mx-10 md:py-14">
        <div className="space-y-5">
          <h1 className="text-2xl font-bold md:text-4xl">About</h1>

          <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base text-justify">
            A Computer Science graduate student with expertise in web
            development, specializing in React.js, Node.js, Kafka, and .NET
            Core. Skilled in building secure, scalable applications with a focus
            on clean, readable code. Experienced with MongoDB, SQL Server, and
            developing automated report generation applications. Strong
            understanding of data structures, algorithms, and best practices for
            creating maintainable, elegant codebases.
          </p>
        </div>

        <div className="space-y-10">
          <h1 className="text-2xl font-bold md:text-4xl">Experience</h1>

          <div className="flex flex-col lg:flex-row lg:gap-20">
            <ul>
              <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
                <span className="text-lg font-semibold">
                  Associate Software Developer
                </span>
                <span className="font-light">Mirae Asset Sharekhan</span>
                <span className="text-sm text-gray-400 italic">
                  June 2023 - Present
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quisquam officiis sunt porro odio, explicabo mollitia libero
                  maxime praesentium dolor, doloremque totam aut! Voluptate
                  voluptatum eos deleniti accusantium ab, non quod. Quaerat
                  veritatis, dolorum consectetur vel pariatur distinctio iure,
                  quae, unde modi a explicabo ipsam rerum. Saepe blanditiis amet
                  consequuntur soluta ea molestiae minima recusandae
                  exercitationem consequatur esse. Ut consequatur tempora illo
                  culpa dicta nihil, maiores iste consectetur eaque numquam iure
                  quisquam ipsum deserunt eligendi pariatur.
                </p>
              </li>

              <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
                <span className="text-lg font-semibold">
                  MERN/DSA Mentor & Mock interviewer
                </span>
                <span className="font-light">Codefeast</span>
                <span className="text-sm text-gray-400 italic">
                  Nov 2022 - May 2023
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-justify">
                  Conducted MERN stack web development and DSA in Java training
                  sessions for students, ensuring hands-on learning and
                  conceptual clarity. Led mock interviews, providing
                  constructive feedback to help students refine their
                  problem-solving, coding, and communication skills for
                  real-world technical interviews.
                </p>
              </li>
            </ul>

            <ul>
              <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
                <span className="text-lg font-semibold">
                  Full Stack Developer
                </span>
                <span className="font-light">
                  iComply Lifescience Solutions
                </span>
                <span className="text-sm text-gray-400 italic">
                  Aug 2022 - May 2023
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-justify">
                  Developed Node.js APIs with SQL Server integration, ensuring
                  efficient database interactions and optimized queries.
                  Integrated APIs with a React frontend, enabling seamless data
                  flow and a responsive user experience.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-3xl space-y-8">
          <h1 className="text-2xl font-bold md:text-4xl">Certificates</h1>

          <div className="space-y-10">
            <div className="text-baseline space-y-3">
              <h3 className="text-sm font-semibold md:text-lg">
                Certificate of attendace in web dev bootcamp
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eum
                aliquam sunt perferendis tenetur, sit minus nulla illum quidem
                repellendus molestiae adipisci ullam dolorum ex ducimus fugiat
                perspiciatis, quas voluptatibus explicabo! Distinctio, nisi
                iure, nihil beatae, quae debitis officia ut at vero voluptatibus
                obcaecati adipisci deserunt aut optio enim quibusdam.
              </p>
            </div>

            <div className="text-baseline space-y-3">
              <h3 className="text-sm font-semibold md:text-lg">
                Certificate of attendace in web dev bootcamp
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eum
                aliquam sunt perferendis tenetur, sit minus nulla illum quidem
                repellendus molestiae adipisci ullam dolorum ex ducimus fugiat
                perspiciatis, quas voluptatibus explicabo! Distinctio, nisi
                iure, nihil beatae, quae debitis officia ut at vero voluptatibus
                obcaecati adipisci deserunt aut optio enim quibusdam.
              </p>
            </div>

            <div className="text-baseline space-y-3">
              <h3 className="text-sm font-semibold md:text-lg">
                Certificate of attendace in web dev bootcamp
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eum
                aliquam sunt perferendis tenetur, sit minus nulla illum quidem
                repellendus molestiae adipisci ullam dolorum ex ducimus fugiat
                perspiciatis, quas voluptatibus explicabo! Distinctio, nisi
                iure, nihil beatae, quae debitis officia ut at vero voluptatibus
                obcaecati adipisci deserunt aut optio enim quibusdam.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <h1 className="text-2xl font-bold md:text-4xl">References</h1>
          <div className="flex flex-wrap gap-10">
            <div className="text-baseline space-y-1">
              <h3 className="text-lg font-light">Mobile Developer</h3>
              <h2 className="text-base font-semi-bold md:text-2xl">
                Mr. Davis Jackson
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Phone: 123-456-789
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                email: user@gmail.com
              </p>
            </div>

            <div className="text-baseline space-y-1">
              <h3 className="text-lg font-light">Mobile Developer</h3>
              <h2 className="text-base font-semi-bold md:text-2xl">
                Mr. Imran Memon
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Phone: 123-456-789
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                email: chutiya@gmail.com
              </p>
            </div>

            <div className="text-baseline space-y-1">
              <h3 className="text-lg font-light">Mobile Developer</h3>
              <h2 className="text-base font-semi-bold md:text-2xl">
                Mr. Davis Jackson
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Phone: 123-456-789
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                email: user@gmail.com
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
