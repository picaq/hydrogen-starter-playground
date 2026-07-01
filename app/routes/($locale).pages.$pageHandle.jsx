import {json} from '@shopify/remix-oxygen';
import {useLoaderData} from '@remix-run/react';
import invariant from 'tiny-invariant';
import groq from 'groq';

import PageComponentList from '~/components/PageComponentList'

const seo = ({data}) => ({
  title: data?.sanityPage?.seo?.title || data?.page?.seo?.title,
  description: data?.sanityPage?.seo?.description || data?.page?.seo?.description,
});

export const handle = {
  seo,
};

export async function loader({request, params, context}) {
  invariant(params.pageHandle, 'Missing page handle');

  const [{page}, sanityPage] = await Promise.all([
    context.storefront.query(PAGE_QUERY, {
      variables: {
        handle: params.pageHandle,
        language: context.storefront.i18n.language,
      },
    }),
    context.sanity.fetch(SANITY_PAGE_QUERY, {handle: params.pageHandle}),
  ]);

  if (!page && !sanityPage) {
    throw new Response(null, {status: 404});
  }

  return json(
    {page, sanityPage},
    {
      headers: {
        // TODO cacheLong()
      },
    },
  );
}

export default function Page() {
  const {page, sanityPage} = useLoaderData();

  if (sanityPage) {
    return (
      <>
        <PageComponentList components={sanityPage.modules} />
      </>
    )
  }

  return (
    <>
      <div
        dangerouslySetInnerHTML={{__html: page.body}}
        className="prose dark:prose-invert"
      />
    </>
  );
}

const PAGE_QUERY = `#graphql
  query PageDetails($language: LanguageCode, $handle: String!)
  @inContext(language: $language) {
    page(handle: $handle) {
      id
      title
      body
      seo {
        description
        title
      }
    }
  }
`;

const SANITY_PAGE_QUERY = groq`
  *[_type == "page" && slug.current == $handle][0]{
    title,
    seo,
    modules[]{
      ...,
    },
  }
`;
