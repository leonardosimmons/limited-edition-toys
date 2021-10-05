/* eslint-disable jsx-a11y/anchor-has-content */
import * as React from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";

interface NextLinkComposedProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    Omit<NextLinkProps, "href" | "as"> {
  to: NextLinkProps["href"];
  linkAs?: NextLinkProps["as"];
  href?: NextLinkProps["href"];
}

export const NextLinkComposed = React.forwardRef<
  HTMLAnchorElement,
  NextLinkComposedProps
>(function NextLinkComposed(props, ref) {
  const {
    to,
    linkAs,
    href,
    replace,
    scroll,
    passHref,
    shallow,
    prefetch,
    locale,
    ...other
  } = props;

  return (
    <NextLink
      href={to}
      prefetch={prefetch}
      as={linkAs}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
      locale={locale}
    >
      <a ref={ref} {...other} />
    </NextLink>
  );
});
