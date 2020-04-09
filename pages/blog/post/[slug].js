import fs from 'fs'
import path from 'path'
import dynamic from 'next/dynamic'

const BlogPostPage = ({ filename }) => {
    console.log('the filename', filename)
    const MDXContent = dynamic(() => import(`../../../${filename}`))
    const MDXMetadata = dynamic(() => import(`../../../${filename}`).then(mod => mod.metadata))
    console.log('the content', MDXMetadata)
    return (
        <div>
            <h1>Blog</h1>
            <MDXContent />
            <h2>Blog Title: {MDXMetadata.title}</h2>
            <h2>Date: {MDXMetadata.date}</h2>
        </div>
    )
}

export async function getStaticProps({ params }) {
    const filename = path.join("content/blog", params.slug + ".mdx")

    // const frontmatter = matter(mdxPost)

    return {
        props: {
            filename
        },
    }
}

export async function getStaticPaths() {
    const postsDirectory = path.join(process.cwd(), 'content/blog')
    const mdxFiles = fs.readdirSync(postsDirectory)
    console.log('the queried pages', mdxFiles)
	// Loop through all post files and create array of slugs (to create links)
	const paths = mdxFiles.map(filename => ({
        params: {
            slug: filename.replace(".mdx", "")
        }
	}));

	return {
        paths,
        fallback: false
	}
}

export default BlogPostPage