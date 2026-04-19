export default function AboutMe() {
  return (
    <section className="flex flex-col mt-8">
      <p className="text-base md:text-lg text-neutral-900 dark:text-neutral-50">
        Hi, I’m Enis. I build interfaces for the web, mostly with TypeScript and
        React, and I’ve spent the last few years drifting toward the parts of
        frontend work that don’t always get attention — performance,
        accessibility, and the small interaction details that decide whether an
        app feels good.
      </p>
      <p className="text-base md:text-lg md:mt-8 mt-4 text-neutral-900 dark:text-neutral-50">
        Before this I studied computer engineering and spent a while writing
        backend code, which still quietly shapes how I think about state and
        data on the client.
      </p>
      <p className="text-base md:text-lg md:mt-8 mt-4 text-neutral-900 dark:text-neutral-50">
        Outside work I read a lot, watch more films than I probably should, and
        keep a running list of everything I finish. I write here partly to
        explain things to myself, and partly because the internet I grew up on
        was made of small personal sites and I still like that idea.
      </p>
    </section>
  );
}
