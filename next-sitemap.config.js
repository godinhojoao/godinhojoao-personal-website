/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://godinhojoao.com/',
  generateRobotsTxt: true,
  additionalPaths: async (config) => [
    await config.transform(config, '/en'),
    await config.transform(config, '/pt'),
  ],
}