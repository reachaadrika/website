import { useRouter } from 'next/router';
import DocsLayout, { buildNavTree } from './DocsLayout';
import BlogLayout from './BlogLayout';
import JobsLayout from './JobsLayout';
import GenericPostLayout from './GenericPostLayout';
import BlogContext from '../../context/BlogContext';
import JobsContext from '../../context/JobsContext';
import { getPostBySlug, getAllPosts, getDocBySlug } from '../../lib/api';

export default function Layout({ children }) {
  const { pathname } = useRouter();
  const posts = getAllPosts();
  const allDocPosts = posts['docs'].filter((p) => p.slug.startsWith('/docs/'));

  if (pathname.startsWith('/docs')) {
    const post = getDocBySlug(posts['docs'], pathname);
    return (
      <div data-testid="Docs-container-main">
      <DocsLayout post={post} navItems={allDocPosts}>
        {children}
      </DocsLayout>
      </div>
    );
  } else if (pathname.startsWith('/blog/')) {
    const post = getPostBySlug(pathname, 'blog');
    return (
      <div data-testid="Blogs-main-div" >
      <BlogLayout post={post} navItems={posts['blog']}>
        {children}
      </BlogLayout>
      </div>
    );
  } else if (pathname === '/blog') {
    return (
      <div data-testid='Blogs-sub-div'>
      <BlogContext.Provider value={{ navItems: posts['blog'] }}>
        {children}
      </BlogContext.Provider>
      </div>
    );
  } else if (pathname === '/jobs') {
    return (
      <JobsContext.Provider value={{ navItems: posts['jobs'] }}>
        {children}
      </JobsContext.Provider>
    );
  } else if (pathname.startsWith('/jobs/')) {
    const post = getPostBySlug(pathname, 'jobs');
    return <div data-testid="jobs-main-div"><JobsLayout post={post}>{children}</JobsLayout></div>;
  } else {
    const post = getPostBySlug(pathname);
    if (post) {
      return <GenericPostLayout post={post}>{children}</GenericPostLayout>;
    }
  }

  return children;
}
