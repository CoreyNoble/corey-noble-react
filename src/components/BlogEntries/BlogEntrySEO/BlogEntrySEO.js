import React from 'react';

import { Row, Column } from 'react-foundation-components/lib/grid-flex';

import Section from '../../../containers/Section/Section';

import SEOPDF from '../../../assets/pdf/Moz-The-Beginners-Guide-To-SEO.pdf';

const blogEntrySEO = props => {
  return (
    <React.Fragment>
      <Section background="blue">
            <Row>
              <Column small={12}>
                <h1 class="header-no-parallax">Search Engine Optimisation (SEO)</h1>
              </Column>
            </Row>
          </Section>

          <Section background="white">
          <Row>
            <Column small={12}>
              {/* Back CTA */}
              <p><small><a href="/blog" title="Return to the blog landing page">Back to Blog</a></small></p>

              {/* SEO Overview */}
              <h2 data-aos="fade-up" data-aos-delay="100">Overview</h2>
              <p data-aos="fade-up" data-aos-delay="100">SEO is a broad topic with a lot of information to cover. The following content will outline the most important SEO topics with short descriptions of each topic. I have added resources at the bottom of each section that will delve deeper into the individual subjects. Some of the content below will use quotes from these resources (marked with "quotations").</p>
              <hr data-aos="fade-up" data-aos-delay="100" />

              <h3 data-aos="fade-up" data-aos-delay="100">How do Search Engines&nbsp;Operate?</h3>
              <p data-aos="fade-up" data-aos-delay="100">Popular search engines like
                <a href="https://google.com/" title="Google" target="_blank" rel="noopener noreferrer">Google</a> and
                <a href="https://bing.com/" title="Bing" target="_blank" rel="noopener noreferrer">Bing</a> rank websites by comparing the relevance of the content on a website, with the context of a users query. The more relevant and your website is to the query determines how high up on the list a search engine will display your&nbsp;website.</p>
              <p data-aos="fade-up" data-aos-delay="100">Search engines have two major&nbsp;functions:</p>
              <ol>
                <li data-aos="fade-up" data-aos-delay="100">Crawling everything on the web, including: websites, pages, files and documents. Then building a ranked index of the web content, based on topic relevance, quality and accessibility of the&nbsp;content.</li>
                <li data-aos="fade-up" data-aos-delay="100">Providing users with a list of the websites they've determined are the most relevant to the users&nbsp;query.</li>
              </ol>
              <p data-aos="fade-up" data-aos-delay="100">
                <a href="https://moz.com/beginners-guide-to-seo/how-search-engines-operate" target="_blank" rel="noopener noreferrer" title="How Search Engines Operate | Mozilla">How Search Engines Operate | Mozilla</a>
              </p>

              <hr data-aos="fade-up" data-aos-delay="100" />

              <h3 data-aos="fade-up" data-aos-delay="100">What is Search Engine Ranking and Why is it&nbsp;Important?</h3>
              <p data-aos="fade-up" data-aos-delay="100">The rank of a webpage determines how high up on the search list the page is displayed. Page rank is based on a number of different&nbsp;factors.</p>
              <p data-aos="fade-up" data-aos-delay="100">One of the most important factors is the quantity, quality and popularity of external websites that contain links pointing to your webpage. The more external websites that point to your website, the easier it is for search engines to validate the importance of your website. This also attracts more users to your website which in-turn shows the search engine that your content&nbsp;matters. If your brand or website does not have a lot of recognition, this may be discerning. Not to worry, there are many other ways to increase page rank.</p>
              <p data-aos="fade-up" data-aos-delay="100">It is important to research your toughest competition. If you know how they cater their content towards the public, you can adjust yours to have more contextual meaning and relevance than theirs. Just as importantly, you can better cater to the demographic of person viewing your content, more so than your competition&nbsp;does.</p>
              <p data-aos="fade-up" data-aos-delay="100">The following document is a great beginners guide to what SEO is, why a website needs it and how search engines come into play. The document was created by industry experts and is a great starting point for anyone who wants to know&nbsp;SEO.</p>
              <p data-aos="fade-up" data-aos-delay="100">
                <a href={SEOPDF} target="_blank" rel="noopener noreferrer" title="The Beginners Guide to SEO (By Mozilla)">The Beginners Guide to SEO |&nbsp;Mozilla</a>
              </p>

              <p data-aos="fade-up" data-aos-delay="100">&nbsp;</p>

              {/* SEO Basic */}
              <h2 data-aos="fade-up" data-aos-delay="100">Basic Knowledge and&nbsp;Techniques</h2>

              <hr data-aos="fade-up" data-aos-delay="100" />

              <h3 data-aos="fade-up" data-aos-delay="100">The Basics of Search Engine Friendly Design &&nbsp;Development
                <br />
                <br />
              </h3>
              <h4 data-aos="fade-up" data-aos-delay="100">Indexable Content</h4>
              <p data-aos="fade-up" data-aos-delay="100">"To perform better in search engine listings, your most important content should be in HTML text format. Images, Flash files, Java applets, and other non-text content are often ignored or devalued by search engine crawlers, despite advances in crawling technology. The easiest way to ensure that the words and phrases you display to your visitors are visible to search engines is to place them in the HTML text on the page. However, more advanced methods are available for those who demand greater formatting or visual display&nbsp;styles:"</p>
              <ul data-aos="fade-up" data-aos-delay="100">
                <li>"Provide alt text for images. Assign images in gif, jpg, or png format 'alt attributes' in HTML to give search engines a text description of the visual&nbsp;content."</li>
                <li>"Supplement search boxes with navigation and crawlable&nbsp;links."</li>
                <li>"Supplement Flash or Java plug-ins with text on the&nbsp;page."</li>
                <li>"Provide a transcript for video and audio content if the words and phrases used are meant to be indexed by the&nbsp;engines."
                  <br />
                  <br />
                </li>
              </ul>
              <h4 data-aos="fade-up" data-aos-delay="100">Crawlable Link Structures</h4>
              <p data-aos="fade-up" data-aos-delay="100">"Just as search engines need to see content in order to list pages in their massive keyword-based indexes, they also need to see links in order to find the content in the first place. A crawlable link structure—one that lets the crawlers browse the pathways of a website—is vital to them finding all of the pages on a website. Hundreds of thousands of sites make the critical mistake of structuring their navigation in ways that search engines cannot access, hindering their ability to get pages listed in the search engines'&nbsp;indexes."
                <br />
                <br />
              </p>
              <h4 data-aos="fade-up" data-aos-delay="100">Title Tags</h4>
              <p data-aos="fade-up" data-aos-delay="100">Ensure every webpage has a title tag element. These titles need to accurately describe the content on the page. The title should be concise (65-75 characters), and any keywords you are targeting should be as close to the beginning of the title as possible. The title tag should include the branding of your website, typically at the end of the title. Ensure the title is readable as it is the first point of interaction a user will have with the&nbsp;page.
                <br />
                <br />
              </p>
              <h4 data-aos="fade-up" data-aos-delay="100">Meta Description</h4>
              <p data-aos="fade-up" data-aos-delay="100">"The meta description tag exists as a short description of a page's content. Search engines do not use the keywords or phrases in this tag for rankings, but meta descriptions are the primary source for the snippet of text displayed beneath a listing in the&nbsp;results."</p>
              <p data-aos="fade-up" data-aos-delay="100">"The meta description tag serves the function of advertising copy, drawing readers to your site from the results. It is an extremely important part of search marketing. Crafting a readable, compelling description using important keywords (notice how Google bolds the searched keywords in the description) can draw a much higher click-through rate of searchers to your&nbsp;page."</p>
              <p data-aos="fade-up" data-aos-delay="100">"Meta descriptions can be any length, but search engines generally will cut snippets longer than 160 characters, so it's generally wise to stay within in these&nbsp;limits."</p>
              <p data-aos="fade-up" data-aos-delay="100">"In the absence of meta descriptions, search engines will create the search snippet from other elements of the page. For pages that target multiple keywords and topics, this is a perfectly valid&nbsp;tactic."</p>
              <p data-aos="fade-up" data-aos-delay="100">
                <a href="https://moz.com/beginners-guide-to-seo/basics-of-search-engine-friendly-design-and-development" target="_blank" rel="noopener noreferrer"
                  title="The Basics of Search Engine Friendly Design and Development | Mozilla">The Basics of Search Engine Friendly Design and Development |&nbsp;Mozilla</a>
              </p>

              <hr data-aos="fade-up" data-aos-delay="100" />

              <h3 data-aos="fade-up" data-aos-delay="100">Keyword Research</h3>
              <p data-aos="fade-up" data-aos-delay="100">"Keyword research is one of the most important, valuable, and high return activities in the search marketing field. Ranking for the right keywords can make or break your website. By researching your market's keyword demand, you can not only learn which terms and phrases to target with SEO, but also learn more about your customers as a&nbsp;whole."</p>
              <p data-aos="fade-up" data-aos-delay="100">"It's not always about getting visitors to your site, but about getting the right kind of visitors. The usefulness of this intelligence cannot be overstated; with keyword research you can predict shifts in demand, respond to changing market conditions, and produce the products, services, and content that web searchers are actively&nbsp;seeking."</p>
              <p data-aos="fade-up" data-aos-delay="100">
                <a href="https://moz.com/beginners-guide-to-seo/keyword-research" target="_blank" rel="noopener noreferrer" title="Keyword Research | Mozilla">Keyword Research |&nbsp;Mozilla</a>
              </p>

              <hr data-aos="fade-up" data-aos-delay="100" />

              <h3 data-aos="fade-up" data-aos-delay="100">How Usability Experience and Content Affect Search Engine&nbsp;Rankings</h3>
              <p data-aos="fade-up" data-aos-delay="100">Search engines have a very good idea of the kinds of pages and sites that satisfy their searchers. Generally, these sites have several traits in&nbsp;common:</p>
              <ul data-aos="fade-up" data-aos-delay="100">
                <li>"Easy to use, navigate, and understand"</li>
                <li>"Provide direct, actionable information relevant to the&nbsp;query"</li>
                <li>"Professionally designed and accessible to modern&nbsp;browsers"</li>
                <li>"Deliver high quality, legitimate, credible&nbsp;content"</li>
              </ul>
              <p data-aos="fade-up" data-aos-delay="100">"Search engines can't yet understand text, view images, or watch video the same way a human can. In order to decipher and rank content they rely on meta information (not necessarily meta tags) about how people interact with sites and pages, and this gives them insight into the quality of the pages&nbsp;themselves."</p>

              <p data-aos="fade-up" data-aos-delay="100">
                <a href="https://moz.com/beginners-guide-to-seo/how-usability-experience-and-content-affect-search-engine-rankings"
                  target="_blank" rel="noopener noreferrer" title="How Usability Experience and Content Affect Search Engine Rankings | Mozilla">How Usability Experience and Content Affect Search Engine Rankings |&nbsp;Mozilla</a>
              </p>

              <hr data-aos="fade-up" data-aos-delay="100" />

              <h3 data-aos="fade-up" data-aos-delay="100">Growing Popularity and&nbsp;Links</h3>
              <p data-aos="fade-up" data-aos-delay="100">"Links aren't everything in SEO, but search professionals attribute a large portion of the engines' algorithms to link-related factors. Through links, engines can not only analyze the popularity websites and pages based on the number and popularity of pages linking to them, but also metrics like trust, spam, and authority. Trustworthy sites tend to link to other trusted sites, while spammy sites receive very few links from trusted sources. Authority models suggest that links are a very good way of identifying expert documents on a given&nbsp;subject."</p>
              <p data-aos="fade-up" data-aos-delay="100">
                <a href="https://moz.com/beginners-guide-to-seo/growing-popularity-and-links" target="_blank" rel="noopener noreferrer" title="Growing Popularity and Links | Mozilla">Growing Popularity and Links |&nbsp;Mozilla</a>
              </p>

              <hr data-aos="fade-up" data-aos-delay="100" />

              <h3 data-aos="fade-up" data-aos-delay="100">Search Engine Tools and&nbsp;Services</h3>
              <p data-aos="fade-up" data-aos-delay="100">Webmasters tend to use a lot of SEO tools. "Some of the most useful are provided by the search engines themselves. Search engines want webmasters to create sites and content in accessible ways, so they provide a variety of tools, analytics and guidance. These free resources provide data points and unique opportunities for exchanging information with the&nbsp;engines."</p>
              <p data-aos="fade-up" data-aos-delay="100">
                <a href="https://moz.com/beginners-guide-to-seo/search-engine-tools-and-services" target="_blank" rel="noopener noreferrer" title="Search Engine Tools and Services | Mozilla">Search Engine Tools and Services |&nbsp;Mozilla</a>
              </p>

              <hr data-aos="fade-up" data-aos-delay="100" />

              <h3 data-aos="fade-up" data-aos-delay="100">Myths and Misconceptions About Search&nbsp;Engines</h3>
              <p data-aos="fade-up" data-aos-delay="100">"Over the past several years, a number of misconceptions have emerged about how the search engines operate. For the beginner SEO, this causes confusion about what's required to perform effectively." The link below will explain the real story behind the&nbsp;myths.</p>
              <p data-aos="fade-up" data-aos-delay="100">
                <a href="https://moz.com/beginners-guide-to-seo/myths-and-misconceptions-about-search-engines" target="_blank" rel="noopener noreferrer" title="Myths and Misconceptions about Search Engines | Mozilla">Myths and Misconceptions about Search Engines |&nbsp;Mozilla</a>
              </p>

              <hr data-aos="fade-up" data-aos-delay="100" />

              <h3 data-aos="fade-up" data-aos-delay="100">404 Page Best Practices</h3>
              <p data-aos="fade-up" data-aos-delay="100">Having a 404 page is essential for any site. This resource outlines why they are important, the tools we can use to check for them, and tips for creating&nbsp;them.</p>
              <p data-aos="fade-up" data-aos-delay="100">
                <a href="https://searchenginewatch.com/sew/how-to/2293339/404-page-best-practices" target="_blank" rel="noopener noreferrer" title="404 Page Best Practices | Search Engine Watch">404 Page Best Practices | Search Engine&nbsp;Watch</a>
              </p>

              <p data-aos="fade-up" data-aos-delay="100">&nbsp;</p>

              {/* SEO Advanced */}
              <h2 data-aos="fade-up" data-aos-delay="100">Advanced Knowledge and&nbsp;Techniques</h2>

              <hr data-aos="fade-up" data-aos-delay="100" />

              <h3 data-aos="fade-up" data-aos-delay="100">Redirection (301, 302, Meta Refresh,&nbsp;etc.)</h3>
              <p data-aos="fade-up" data-aos-delay="100">Redirection is the process of forwarding one URL to a different URL. When done properly, it is possible to pass along the rank of a page to the newly redirected URL. This can be crucial to maintaining the credit of your web content when porting it to a different page. The following resource outlines the different types of redirects, and the best practices for passing along page rank during the redirect&nbsp;process.</p>
              <p data-aos="fade-up" data-aos-delay="100">
                <a href="https://moz.com/learn/seo/redirection" target="_blank" rel="noopener noreferrer" title="Redirection | Mozilla">Redirection |&nbsp;Mozilla</a>
              </p>

              <hr data-aos="fade-up" data-aos-delay="100" />

              <h3 data-aos="fade-up" data-aos-delay="100">Canonicalization</h3>
              <p data-aos="fade-up" data-aos-delay="100">Search engines avoid displaying duplicate content. If there are multiple websites, or multiple pages within a website that have duplicate content; a search engine will be forced to split the page rank between them, which reduces the rank of all pages with the same&nbsp;content.</p>
              <p data-aos="fade-up" data-aos-delay="100">Canonicalization is the practice of telling search engines which page contains duplicate content, then passing the rank of the duplicate content to the page that should maintain a higher standing. For&nbsp;example:</p>
              <p data-aos="fade-up" data-aos-delay="100"><strong>&lt;link href="https://www.example.com/canonical-version-of-page/" rel="canonical" /&gt;</strong> <br /> "This tag tells search engines that the given page should be treated as though it were a copy of the URL www.example.com/canonical-version-of-page/ and that all of the links and content metrics the engines apply should actually be credited toward the provided&nbsp;URL."
              </p>
              <p data-aos="fade-up" data-aos-delay="100">
                <a href="https://moz.com/learn/seo/canonicalization" target="_blank" rel="noopener noreferrer" title="Canonicalization | Mozilla">Canonicalization |&nbsp;Mozilla</a>
              </p>

              <hr data-aos="fade-up" data-aos-delay="100" />

              <h3 data-aos="fade-up" data-aos-delay="100">Mobile Friendly Websites</h3>
              <p data-aos="fade-up" data-aos-delay="100">The majority of users now browse the web on their mobile devices. Due to this, search engines have adjusted their algorithms to increase the rank of mobile friendly websites. If your website adapts to various screen sizes and devices without modifying much of the content on the page, this will greatly improve your site’s search&nbsp;ranking.</p>
              <p data-aos="fade-up" data-aos-delay="100">In the following resource, Google discusses how important they consider mobile websites, and shares insight into the best practices in mobile website development to ensure a higher ranking within their&nbsp;engine.</p>
              <p data-aos="fade-up" data-aos-delay="100">
                <a href="https://developers.google.com/webmasters/mobile-sites/" target="_blank" rel="noopener noreferrer" title="Choose your Mobile Friendly Websites | Google">Mobile Friendly Websites |&nbsp;Google</a>
              </p>

              <hr data-aos="fade-up" data-aos-delay="100" />

              <h3 data-aos="fade-up" data-aos-delay="100">Website Navigation</h3>
              <p data-aos="fade-up" data-aos-delay="100">Some of the best practices for navigation on a website&nbsp;are:</p>
              <ul data-aos="fade-up" data-aos-delay="100">
                <li>One main navigation file containing the links to the main directories of your website, used on all web pages within the site, displayed before the webpage&nbsp;content.</li>
                <li>Creating a sitemap page, preferably using XML, which contains the links to all of the webpages in your website that are relevant to&nbsp;SEO.</li>
                <li>Link to internal webpages within the content of your webpage when&nbsp;appropriate.</li>
                <li>Using breadcrumbs to ensure easier navigation to and from nested&nbsp;pages.</li>
              </ul>
              <p data-aos="fade-up" data-aos-delay="100">The following resource outlines more navigation best practices and goes into detail about the dos and don'ts of various navigation development&nbsp;techniques.</p>
              <p data-aos="fade-up" data-aos-delay="100">
                <a href="https://www.distilled.net/blog/seo/site-navigation-for-seo/" target="_blank" rel="noopener noreferrer" title="Site Navigation for SEO | Distilled">Site Navigation for SEO |&nbsp;Distilled</a>
              </p>

              <hr data-aos="fade-up" data-aos-delay="100" />

              <h3 data-aos="fade-up" data-aos-delay="100">Using HTTPS on Your&nbsp;Website</h3>
              <p data-aos="fade-up" data-aos-delay="100">"It's rare that Google reveals any of its actual ranking factors, so it came as a big surprise when representatives announced they would reward sites using HTTPS encryption with a boost in search results."</p>

              <p data-aos="fade-up" data-aos-delay="100">"HTTPS isn't like other ranking factors. Implementing it requires complexity, risks, and costs. Webmasters balance this out with benefits that include increased security, better referral data, and a possible boost in rankings."</p>
              <p data-aos="fade-up" data-aos-delay="100">
                <a href="https://moz.com/blog/seo-tips-https-ssl" target="_blank" rel="noopener noreferrer" title="SEO Tips HTTPS, SSL | Mozilla">SEO Tips HTTPS, SSL |&nbsp;Mozilla</a>
              </p>

              <hr data-aos="fade-up" data-aos-delay="100" />

              <h3 data-aos="fade-up" data-aos-delay="100">Structured Data&nbsp;Markup</h3>
              <p data-aos="fade-up" data-aos-delay="100">"Structured data refers to kinds of data with a high level of organization, such as information in a relational database. When information is highly structured and predictable, search engines can more easily organize and display it in creative ways. Structured data markup is a text-based organization of data that is included in a file and served from the web."</p>
              <p data-aos="fade-up" data-aos-delay="100">
                <a href="https://developers.google.com/structured-data/" target="_blank" rel="noopener noreferrer" title="Structured Data | Google">Structured Data |&nbsp;Google</a>
              </p>

              <hr data-aos="fade-up" data-aos-delay="100" />

              <p data-aos="fade-up" data-aos-delay="100"><small><a href="/blog" title="Return to the blog landing page">Back to Blog</a></small></p>
            </Column>
          </Row>
        </Section>
    </React.Fragment>
  );
};

export default blogEntrySEO;