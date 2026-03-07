import type { MDXComponents } from 'mdx/types'
import React from 'react'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        wrapper: ({ children }) => <article className="container mx-auto px-4 py-12 md:px-8 max-w-3xl">{children}</article>,
        h1: ({ children }) => <h1 className="text-4xl font-extrabold tracking-tight mt-8 mb-4">{children}</h1>,
        h2: ({ children }) => <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4">{children}</h2>,
        h3: ({ children }) => <h3 className="text-2xl font-semibold tracking-tight mt-8 mb-4">{children}</h3>,
        p: ({ children }) => <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground">{children}</p>,
        ul: ({ children }) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>,
        li: ({ children }) => <li className="text-muted-foreground">{children}</li>,
        a: ({ children, href }) => <a href={href} className="font-medium text-primary underline underline-offset-4">{children}</a>,
        ...components,
    }
}
