function Contact() {
  return (
    <div className="flex h-screen justify-center items-center dark:bg-gray-800">
      <div className="text-center max-w-6xl mx-10">
        <p className="my-3 text-sm tracking-widest text-indigo-500 uppercase">
          Fast &amp; SEO friendly
        </p>
        <h1 className="my-3 text-3xl font-bold tracking-tight  md:text-5xl ">
          Best Service Offered Here
        </h1>
        <div>
          <p className="max-w-2xl mx-auto my-2 text-base md:leading-relaxed md:text-xl text-muted">
            Introducing our latest service offering. Get started quickly and
            efficiently with our range of solutions. Designed to meet your needs
            using the latest technologies.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 mt-6 md:flex-row">
          <a
            className="inline-block w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all rounded-md shadow-md sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:bg-gradient-to-b dark:shadow-blue-900 shadow-blue-200 hover:shadow-2xl hover:shadow-blue-400 hover:-tranneutral-y-px "
            href=""
          >
            Browse All Examples
          </a>
          <a
            className="inline-block w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all bg-gray-700 dark:bg-white dark:text-gray-800 rounded-md shadow-md sm:w-auto hover:bg-gray-900 hover:text-white shadow-neutral-300 dark:shadow-neutral-700 hover:shadow-2xl hover:shadow-neutral-400 hover:-tranneutral-y-px"
            href=""
          >
            Seach Examples
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
