# Author: jcalcaben@magento.com
#
# This custom plugin dynamically sets and injects the page.baseurl variable
# based on the page's destination.
#
#
module Jekyll
  # The class generates page.baseurl as "{site.baseurl}/guides/v#{version}".
  # The {version} is taken from the 'guide_version' front matter parameter on the page;
  # if it is not set, then the generator takes it from the path of the page (for example, "2.2" in the "guides/v2.2");
  # if the path doesn't contain "guides/vx.x", then the version is unset (returns nil object, same as null)
  class PageBaseUrlGenerator < Generator
    def generate(site)
      pattern = %r{guides\/v(\d\.\d)}
      pages = site.pages
      baseurl = site.baseurl
      pages.each do |page|
        matcher = pattern.match(page.path)
        versionPath = page.data['versionPath']
        version = if matcher
                    matcher[1]
                  else
                    config_version
                  end
        page.data['baseurl'] = "#{baseurl}/guides/v#{version}"
        page.data['versionurl'] = "#{baseurl}#{versionPath}"

        page.data['guide_version'] = page.data['version']
      end
    end
  end
end
