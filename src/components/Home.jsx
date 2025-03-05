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
          <h1 className="text-2xl font-bold md:text-4xl">Projects</h1>

          <div className="space-y-10">
            <div className="text-baseline space-y-3">
              <h3 className="text-sm font-semibold md:text-lg">
                <a
                  href="https://natours-ecru-nu.vercel.app/"
                  target="_blank"
                  className="hover:underline"
                >
                  The Natours App &rarr;
                </a>
              </h3>
              <p className="flex flex-col gap-1 text-sm text-gray-600 dark:text-gray-400 md:text-base">
                <span className="text-justify">
                  Server side rendered Tours booking website with credit card
                  payments support using Stripe. Fully protected with JWT for
                  the authentication & authorization with multiple roles. Comes
                  with email support for billing confirmation and basic
                  activities such as password reset link and much more!
                </span>
                <span className="font-semibold">
                  Technologies Used: NodeJs, ExpressJs, Stripe, MongoDB,
                  MailTrap
                </span>
              </p>
            </div>

            <div className="text-baseline space-y-3">
              <h3 className="text-sm font-semibold md:text-lg">
                <a
                  href="https://the-wild-oasis-ruby-alpha.vercel.app/"
                  target="_blank"
                  className="hover:underline"
                >
                  The Wild Oasis &rarr;
                </a>
              </h3>
              <p className="flex flex-col gap-1 text-sm text-gray-600 dark:text-gray-400 md:text-base">
                <span className="text-justify">
                  Realtime hotel management website built using ReactJs,
                  Tanstack React Query & Supabase. It is used to manage check
                  in, check out, manage cabins and manage payment information of
                  the hotel. Protected using JWT for Authentication &
                  Authorization.
                </span>
                <span className="font-semibold">
                  Technologies Used: ReactJs, ContextAPI, Compound Component
                  Pattern, Tanstack React Query, Supabase, React Icons
                </span>
              </p>
            </div>

            <div className="text-baseline space-y-3">
              <h3 className="text-sm font-semibold md:text-lg">
                <a
                  href="https://nikhilhaspe.github.io/SpendWise/"
                  target="_blank"
                  className="hover:underline"
                >
                  SpendWise &rarr;
                </a>
              </h3>
              <p className="flex flex-col gap-1 text-sm text-gray-600 dark:text-gray-400 md:text-base">
                <span className="text-justify">
                  Entirely browser&apos;s indexed db storage based web
                  application to store and manage the spendings of the user.
                  Protected with basic email and password authentication. Users
                  can manage and track thier spendings even without internet
                  connectivity! once they save the site in offline mode. Comes
                  with handy filter and sort features.
                </span>
                <span className="font-semibold">
                  Technologies Used: ReactJs, Context API, React Icons
                </span>
              </p>
            </div>

            <div className="text-baseline space-y-3">
              <h3 className="text-sm font-semibold md:text-lg">
                <a
                  href="https://github.com/Nikhilhaspe?tab=repositories"
                  target="_blank"
                  className="hover:underline"
                >
                  For more projects, click here &rarr;
                </a>
              </h3>
            </div>
          </div>
        </div>

        <div className="max-w-3xl space-y-8">
          <h1 className="text-2xl font-bold md:text-4xl">Accomplishments</h1>

          <div className="text-baseline space-y-3">
            <h3 className="text-sm font-semibold md:text-lg">
              <a
                className="hover:underline"
                href="https://leetcode.com/u/NikhilHaspe/"
                target="_blank"
              >
                Achieved 200+ days streak badge on Leetcode &rarr;
              </a>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
              Solved various DSA problems of all difficulty level thereby
              achieved 11 badges from the Leetcode.
            </p>
          </div>

          <div className="space-y-10">
            <div className="text-baseline space-y-3">
              <h3 className="text-sm font-semibold md:text-lg">
                <a
                  className="hover:underline"
                  href="https://drive.google.com/file/d/19PfEbDapBuqu-gOjgBP_VnvgoBeJ4K6J/view?usp=drive_link"
                  target="_blank"
                >
                  Achieved 3rd rank in Roarathon Hackthon &rarr;
                </a>
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
                Developed a website for tracking of the tickets and email
                automation for creating the dashboard of the user which will be
                responsible for showing his/her pending/assigned tasks via mail.
              </p>
            </div>

            <div className="text-baseline space-y-3">
              <h3 className="text-sm font-semibold md:text-lg">
                <a
                  className="hover:underline"
                  href="https://drive.google.com/file/d/16QUONgwPg1rd4KjueenYOFfU8dqkEa3H/view?usp=sharing"
                  target="_blank"
                >
                  Letter Of Recommendation From Codefeast &rarr;
                </a>
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
                Letter of recommendation from manager for working as a MERN/DSA
                Mentor & Mock interviewer during my internship.
              </p>
            </div>

            <div className="text-baseline space-y-3">
              <h3 className="text-sm font-semibold md:text-lg">
                <a
                  className="hover:underline"
                  href="https://drive.google.com/file/d/1HP_RrpbZ0mkKC9FT6QWn-JYgArgSRD8G/view?usp=sharing"
                  target="_blank"
                >
                  Internship Certificate (MERN/DSA Mentor & Mock interviewer)
                  from Codefeast &rarr;
                </a>
              </h3>
            </div>

            <div className="text-baseline space-y-3">
              <h3 className="text-sm font-semibold md:text-lg">
                <a
                  className="hover:underline"
                  href="https://drive.google.com/file/d/1vcCKC8o7yxs_WVQdSpuRWVTKwS84XmhE/view?usp=sharing"
                  target="_blank"
                >
                  Internship Certificate (Full Stack Developer) from iComply
                  Lifescience Solutions &rarr;
                </a>
              </h3>
            </div>

            <div className="text-baseline space-y-3">
              <h3 className="text-sm font-semibold md:text-lg">
                <a
                  className="hover:underline"
                  href="https://www.sololearn.com/Certificate/CT-2QRC8Y7M/png"
                  target="_blank"
                >
                  SQL Certification From SoloLearn &rarr;
                </a>
              </h3>
            </div>

            <div className="text-baseline space-y-3">
              <h3 className="text-sm font-semibold md:text-lg">
                <a
                  className="hover:underline"
                  href="https://www.sololearn.com/Certificate/CT-T55T8DOA/jpg"
                  target="_blank"
                >
                  React & Redux Certification From SoloLearn &rarr;
                </a>
              </h3>
            </div>

            <div className="text-baseline space-y-3">
              <h3 className="text-sm font-semibold md:text-lg">
                <a
                  className="hover:underline"
                  href="https://www.sololearn.com/Certificate/CT-CY82IRQG/png"
                  target="_blank"
                >
                  Javascript Certification From SoloLearn &rarr;
                </a>
              </h3>
            </div>

            <div className="text-baseline space-y-3">
              <h3 className="text-sm font-semibold md:text-lg">
                <a
                  className="hover:underline"
                  href="https://www.hackerrank.com/certificates/60d34fa506ae"
                  target="_blank"
                >
                  Java Certification From HackerRank &rarr;
                </a>
              </h3>
            </div>

            <div className="text-baseline space-y-3">
              <h3 className="text-sm font-semibold md:text-lg">
                <a
                  className="hover:underline"
                  href="https://www.hackerrank.com/certificates/2a93f1990f40"
                  target="_blank"
                >
                  Python Certification From HackerRank &rarr;
                </a>
              </h3>
            </div>

            <div className="text-baseline space-y-3">
              <h3 className="text-sm font-semibold md:text-lg">
                <a
                  className="hover:underline"
                  href="https://www.linkedin.com/learning/certificates/9a7970ac256e6608a155e8abdc03035ee1c6d68a18bae0092c193856431c5e5f"
                  target="_blank"
                >
                  HTML Certification From LinkedIn &rarr;
                </a>
              </h3>
            </div>

            <div className="text-baseline space-y-3">
              <h3 className="text-sm font-semibold md:text-lg">
                <a
                  className="hover:underline"
                  href="https://www.linkedin.com/learning/certificates/c2b0b023cdb297788b8f1465f38ff42eed2b97eaead73206e3f4f140c9d16089"
                  target="_blank"
                >
                  CSS Certification From LinkedIn &rarr;
                </a>
              </h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
