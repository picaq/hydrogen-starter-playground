import BlockContent from '@sanity/block-content-to-react';

const Hero = ({heading, subheading, body}) => {
  return (
    <section className="p-8 text-center">
      {heading && <h1 className="text-4xl font-bold">{heading}</h1>}
      {subheading && <p className="text-xl mt-2">{subheading}</p>}
      {body && (
        <div className="prose mx-auto mt-4">
          <BlockContent blocks={body} />
        </div>
      )}
    </section>
  );
};

export default Hero;
