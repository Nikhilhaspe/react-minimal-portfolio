import {
  BiCurrentLocation,
  BiEnvelope,
  BiFile,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiMoon,
  BiPhone,
  BiSun,
} from "react-icons/bi";

import image from "/my-photo-2.png";

function HeaderLeft({ darkMode, toggleDarkMode }) {
  return (
    <div className="min-h-screen flex-1 relative p-10 transition-all duration-500 dark:bg-black dark:text-white sm:border-r dark:border-gray-700">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center justify-center gap-5">
          <img src={image} alt="my-photo" className="w-32 rounded-full" />

          <div className="text-center space-y-1">
            <h1 className="text-4xl font-light">
              Nikhil <span className="font-semibold">Haspe</span>
            </h1>
            <h3 className="text-xl font-light">Web Developer</h3>
          </div>

          <button className="absolute right-10 top-10" onClick={toggleDarkMode}>
            {darkMode ? (
              <BiSun className="text-2xl" />
            ) : (
              <BiMoon className="text-2xl" />
            )}
          </button>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <BiFile className="text-xl" />
              <span>
                <a
                  href="https://drive.google.com/file/d/1kYrBjVEbBIaDm-HFhXorxBj85e2C3atb/view?usp=sharing"
                  target="_blank"
                >
                  Get CV
                </a>
              </span>
            </li>

            <li className="flex items-center gap-2">
              <BiCurrentLocation className="text-xl" />
              <span>Pune, Maharashtra, India</span>
            </li>

            <li className="flex items-center gap-2">
              <BiEnvelope className="text-xl" />
              <span>
                <a href="mailto:nikhilhaspe5220@gmail.com">
                  nikhilhaspe5220@gmail.com
                </a>
              </span>
            </li>

            <li className="flex items-center gap-2">
              <BiPhone className="text-xl" />
              <span>
                <a href="tel:+91-8550901787">+91-8550901787</a>
              </span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">SOCIAL</h1>

          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <BiLogoGithub className="text-xl" />
              <a href="https://github.com/Nikhilhaspe" target="_blank">
                <span>@Nikhilhaspe</span>
              </a>
            </li>

            <li className="flex items-center gap-2">
              <BiLogoLinkedin className="text-xl" />
              <a href="https://linkedin.com/in/nikhilhaspe" target="_blank">
                <span>@nikhilhaspe</span>
              </a>
            </li>

            <li className="flex items-center gap-2">
              <BiLogoInstagram className="text-xl" />
              <a href="https://www.instagram.com/nikhil_haspe" target="_blank">
                <span>@nikhil_haspe</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5 border-b p-5 items-start justify-start dark:border-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">EDUCATION</h1>

          <ul>
            <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
              <span className="font-semibold md:text-lg">
                Computer Science & Engineering
              </span>
              <span className="font-light">
                Maharashtra Institue Of Technology
              </span>
              <span className="text-sm text-gray-400">2019-2023</span>
            </li>

            <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
              <span className="font-semibold md:text-lg">HSC Board</span>
              <span className="font-light">M.S.M.P, Yashwantnagar</span>
              <span className="text-sm text-gray-400">2018-2019</span>
            </li>

            <li className="relative flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:-translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
              <span className="font-semibold md:text-lg">SSC Board</span>
              <span className="font-light">M.S.M.P, Yashwantnagar</span>
              <span className="text-sm text-gray-400">2016-2017</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">SKILLS</h1>

          <div className="flex flex-wrap gap-3">
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="flex justify-center items-center rounded-xl bg-black text-white p-2 dark:bg-white dark:text-black">
                ReactJs
              </span>
              <span className="flex justify-center items-center rounded-xl bg-black text-white p-2 dark:bg-white dark:text-black">
                Redux
              </span>
              <span className="flex justify-center items-center rounded-xl bg-black text-white p-2 dark:bg-white dark:text-black">
                React Query
              </span>
              <span className="flex justify-center items-center rounded-xl bg-black text-white p-2 dark:bg-white dark:text-black">
                NodeJs
              </span>
              <span className="flex justify-center items-center rounded-xl bg-black text-white p-2 dark:bg-white dark:text-black">
                ExpressJs
              </span>
              <span className="flex justify-center items-center rounded-xl bg-black text-white p-2 dark:bg-white dark:text-black">
                MongoDB
              </span>
              <span className="flex justify-center items-center rounded-xl bg-black text-white p-2 dark:bg-white dark:text-black">
                MS SQL Server
              </span>
              <span className="flex justify-center items-center rounded-xl bg-black text-white p-2 dark:bg-white dark:text-black">
                .NET Core
              </span>
              <span className="flex justify-center items-center rounded-xl bg-black text-white p-2 dark:bg-white dark:text-black">
                Git & Github
              </span>
              <span className="flex justify-center items-center rounded-xl bg-black text-white p-2 dark:bg-white dark:text-black">
                Docker
              </span>
              <span className="flex justify-center items-center rounded-xl bg-black text-white p-2 dark:bg-white dark:text-black">
                Kafka
              </span>
              <span className="flex justify-center items-center rounded-xl bg-black text-white p-2 dark:bg-white dark:text-black">
                Supabase
              </span>
              <span className="flex justify-center items-center rounded-xl bg-black text-white p-2 dark:bg-white dark:text-black">
                C#
              </span>
              <span className="flex justify-center items-center rounded-xl bg-black text-white p-2 dark:bg-white dark:text-black">
                Javascript
              </span>
              <span className="flex justify-center items-center rounded-xl bg-black text-white p-2 dark:bg-white dark:text-black">
                Python
              </span>
              <span className="flex justify-center items-center rounded-xl bg-black text-white p-2 dark:bg-white dark:text-black">
                Java
              </span>
              <span className="flex justify-center items-center rounded-xl bg-black text-white p-2 dark:bg-white dark:text-black">
                Socket Dev.
              </span>
              <span className="flex justify-center items-center rounded-xl bg-black text-white p-2 dark:bg-white dark:text-black">
                Algorithms
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">HOBBIES</h1>

          <div className="flex flex-wrap gap-16 p-3">
            <ul className="flex list-disc flex-col gap-3">
              <li>Watching SciFi TV Shows</li>
              <li>Travelling</li>
              <li>Coding</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">LANGUAGES</h1>

          <ul className="flex list-disc flex-wrap gap-12 md:text-lg">
            <li>English</li>
            <li>Hindi</li>
            <li>Marathi</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeaderLeft;
