const YEAR = new Date().getFullYear()

export default {
  repository: 'https://github.com/himanshurajora/portfolio', // project repo
  docsRepository: 'https://himy.in', // docs repo
  branch: 'master', // branch of docs
  path: '/', // path of docs
  nextLinks: true,
  prevLinks: true,
  search: true,
  darkMode: true,
  footerEditOnGitHubLink: true,
  titleSuffix: ' - Himanshu Jangid',
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <br />
      <time>{YEAR}</time> © Himanshu Jangid.
      <a href="/feed.xml">RSS</a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  ),
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Himanshu</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Himanshu Jangid's Personal Portfolio
      </span>
    </>
  ),
  search: true,
  unstable_stork: true
}
