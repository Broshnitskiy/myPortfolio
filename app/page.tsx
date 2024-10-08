import { projects } from "@/assets/data";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 pt-24 sm:pb-24 sm:pt-24 sm:pl-14 sm:pr-14">
      <div className="sm:mb-10 z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="text-white fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 animate-fade-down">
          View my GitHub &nbsp;
          <a
            className="font-mono font-bold"
            href="https://github.com/Broshnitskiy"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Broshnitskiy
          </a>
        </p>

        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <div className="flex flex-col  p-8 lg:p-0 space-y-4 animate-fade-down">
            <p className="text-black sm:text-white">CONTACTS:</p>
            <a
              href="https://t.me/Broshnitskiy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black-100 sm:text-gray-100 dark:text-gray-300 hover:text-blue-500 transition-colors"
            >
              Telegram
            </a>

            <a
              href="https://www.linkedin.com/in/broshnitskiy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black-100 sm:text-gray-100 dark:text-gray-300 hover:text-blue-500 transition-colors"
            >
              LinkedIn
            </a>

            <a
              href="mailto:romario777v8@gmail.com"
              className="text-black-100 sm:text-gray-100 dark:text-gray-300 hover:text-blue-500 transition-colors"
            >
              Email: romario777v8@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="relative text-center flex place-items-center mb-8 sm:mb-10 before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:hidden sm:after:block after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1] animate-pulse">
        <div className="text-center relative">
          <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            PORTFOLIO
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            ROMAN BROSHNITSKIY
          </p>
        </div>
      </div>

      <div className="mb-40 grid text-center lg:max-w-7xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left animate-fade-up">
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className="group flex flex-col rounded-lg border border-transparent px-5 py-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
              <a
                href={project.urlLivePage}
                className="block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                  width={600}
                  height={600}
                />
                <h2 className={`mb-3 text-2xl font-semibold`}>
                  {project.name}{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>

                <p className={`m-0 xl:max-w-[30ch] text-sm`}>
                  STACK: {project.stack}.
                </p>
              </a>
              {project.urlCode ? (
                <a
                  className="text-orange-500 mt-auto group rounded-lg border border-transparent px-0 py-0 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                  href={project.urlCode}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source code on GitHub
                </a>
              ) : (
                <p className="text-orange-500">Source code is closed by NDA</p>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}
