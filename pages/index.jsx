import Link from 'next/link'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { Box, Button, Heading, Flex } from '@chakra-ui/core'

const easing = [0.6, -0.05, 0.01, 0.99]

const fadeInUp = {
  hidden: {
    y: 50,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: easing,
    },
  },
}

const staggerCards = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const Home = () => (
  <motion.div
    exit={{ opacity: 0, transition: { duration: 2 } }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="container"
  >
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="title">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <Link href="/about">
        <Button as="a" variantColor="green">
          Chakra Test
        </Button>
      </Link>

      <p className="description">
        Get started by editing <code>pages/index.js</code>
      </p>

      <motion.div variants={staggerCards}>
        <Flex flexWrap="wrap" width={1 / 2} margin="auto">
          <Box as="a" href="https://nextjs.org/docs" width={1 / 2} p={3}>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Box p={6} border="1px solid #eaeaea" borderRadius="10px">
                <Heading as="h3" size="md" mb={2}>
                  Documentation &rarr;
                </Heading>
                <p>Find in-depth information about Next.js features and API.</p>
              </Box>
            </motion.div>
          </Box>

          <Box as="a" href="https://nextjs.org/learn" width={1 / 2} p={3}>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Box border="1px solid #eaeaea" borderRadius="10px" p={6}>
                <Heading as="h3" size="md" mb={2}>
                  Learn &rarr;
                </Heading>
                <p>
                  Learn about Next.js in an interactive course with quizzes!
                </p>
              </Box>
            </motion.div>
          </Box>

          <Box
            as="a"
            href="https://github.com/zeit/next.js/tree/master/examples"
            width={1 / 2}
            p={3}
          >
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Box border="1px solid #eaeaea" borderRadius="10px" p={6}>
                <Heading as="h3" size="md" mb={2}>
                  Examples &rarr;
                </Heading>
                <p>Discover and deploy boilerplate example Next.js projects.</p>
              </Box>
            </motion.div>
          </Box>

          <Box
            as="a"
            href="https://zeit.co/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            width={1 / 2}
            p={3}
          >
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Box border="1px solid #eaeaea" borderRadius="10px" p={6}>
                <Heading as="h3" size="md" mb={2}>
                  Deploy &rarr;
                </Heading>
                <p>
                  Instantly deploy your Next.js site to a public URL with ZEIT
                  Now.
                </p>
              </Box>
            </motion.div>
          </Box>
        </Flex>
      </motion.div>
    </main>

    <footer>
      <a
        href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <img src="/zeit.svg" alt="ZEIT Logo" />
      </a>
    </footer>

    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }

      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 800px;
        margin-top: 3rem;
      }

      .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #0070f3;
        border-color: #0070f3;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </motion.div>
)

export default Home
