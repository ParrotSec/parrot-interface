/* Firefox settings for Parrot OS */
/* We also use policies.json to handle the default browser configuration */

/*
  Disable sending telemetry data to Mozilla's server
*/
// Disable check for update
lockPref("app.update.enabled", false);
lockPref("app.update.auto", false);
lockPref("app.update.mode", 0);
lockPref("app.update.service.enabled", false);
// Disable telemetry
lockPref("browser.newtabpage.activity-stream.feeds.telemetry", false);
lockPref("browser.newtabpage.activity-stream.telemetry", false);
lockPref("browser.newtabpage.activity-stream.telemetry.structuredIngestion", false);
lockPref("browser.newtabpage.activity-stream.telemetry.structuredIngestion.endpoint", "");
lockPref("browser.ping-centre.telemetry", false);
lockPref("browser.urlbar.eventTelemetry.enabled", false);
lockPref("security.app_menu.recordEventTelemetry", false);
lockPref("security.identitypopup.recordEventTelemetry", false);
lockPref("security.protectionspopup.recordEventTelemetry", false);
lockPref("toolkit.telemetry.archive.enabled", false);
lockPref("toolkit.telemetry.bhrPing.enabled", false);
lockPref("toolkit.telemetry.ecosystemtelemetry.enabled", false);
lockPref("toolkit.telemetry.firstShutdownPing.enabled", false);
lockPref("toolkit.telemetry.newProfilePing.enabled", false);
lockPref("toolkit.telemetry.server", "");
lockPref("toolkit.telemetry.shutdownPingSender.enabled", false);
lockPref("toolkit.telemetry.unified", false);
lockPref("toolkit.telemetry.updatePing.enabled", false);
// TODO there are some telemetry settings like last check main search. try to disable them
// Disable firefox checking default browser
lockPref("browser.shell.checkDefaultBrowser", false);
lockPref("app.normandy.enabled", false);
// Disable firefox captive portal detection. License MIT @pyllyukko
pref("network.captive-portal-service.enabled", false);
// Disable health reporter
lockPref("datareporting.policy.firstRunURL", "");
lockPref("datareporting.healthreport.service.enabled", false);
lockPref("datareporting.healthreport.uploadEnabled", false);
// Disable network connectivity test
lockPref("network.captive-portal-service.enabled", false);
// Disable all data upload (Telemetry and FHR)
lockPref("datareporting.policy.dataSubmissionEnabled", false);
// Disable firefox monitors online / offline status
lockPref("network.manage-offline-status", false);

/*
  Privacy and tracking protection settings
*/
// FIXME: browser.contentblocking.category isn't used by firefox
// Set privacy protection to maximum
pref("browser.contentblocking.category", "strict");
// Force enable all other tracking protection features
pref("privacy.trackingprotection.socialtracking.enabled", true);
pref("privacy.trackingprotection.pbmode.enabled", true);
pref("privacy.trackingprotection.origin_telemetry.enabled", true);
pref("privacy.trackingprotection.enabled", true);
pref("privacy.trackingprotection.cryptomining.enabled", true);
pref("privacy.resistFingerprinting", true);
pref("privacy.donottrackheader.enabled", true);
// Enable first-party isolation. License: MIT @pyllyukko
// NOTICE: First-party isolation breaks Microsoft Teams
// NOTICE: First-party isolation causes HTTP basic auth to ask for credentials for every new tab
pref("privacy.firstparty.isolate", true);
// Disable Geo info by default. License MIT @pyllyukko
pref("geo.enabled", false);
// Disable netinfo via DOM. Possibly protect user from Javascript websites. License MIT @pyllyukko
pref("dom.netinfo.enabled", false);
// Disable gamepad api to prevent USB enumeration. License MIT @pyllyukko. https://trac.torproject.org/projects/tor/ticket/13023
pref("dom.gamepad.enabled", false);
// Disable GeoIP lookup to set search engine region. License MIT @pyllyukko. https://trac.torproject.org/projects/tor/ticket/16254
// pref("browser.search.countryCode", "US"); It isn't in latest firefox-esr anymore
pref("browser.search.region", "US");
// pref("browser.search.geoip.url", ""); It isn't in latest firefox-esr anymore
// Enable contextual identity Containers. License MIT @pyllyukko
pref("privacy.userContext.enabled", true);
// Disable remote debugging (Disabled by default). License MIT @pyllyukko
// pref("devtools.debugger.remote-enabled", false);
// pref("devtools.debugger.force-local", true);
/*
  Some interesting settings that might break UX
  License MIT @pyllyukko
// Disable video stats to reduce fingerprinting
pref("media.video_stats.enabled", false);
// Don't use document specified fonts to prevent installed font enumeration
pref("browser.display.use_document_fonts", 0);
*/

// Don't ask to install the Flash plugin
pref("plugins.notifyMissingFlash", false);

// Allow onion domains
// Send DNS requuest through SOCKS when SOCKS proxy is in use. This might fix the complains about DNS leak when test with firefox
// License MIT @pyllyukko https://trac.torproject.org/projects/tor/wiki/doc/TorifyHOWTO/WebBrowsers
pref("network.proxy.socks_remote_dns", true);
pref("network.dns.blockDotOnion", false);
// Disable DNS prefectching. License MIT @pyllyukko
pref("network.dns.disablePrefetch", true);
pref("network.dns.disablePrefetchFromHTTPS", true);
// Disable the predictive service (Necko)
pref("network.predictor.enabled", false);
// Set proxy settings
pref("network.proxy.autoconfig_url", "file:///etc/anonsurf/onion.pac");
pref("network.proxy.socks", "127.0.0.1");
pref("network.proxy.socks_port", 9050);
pref("network.proxy.type", 2);
// Set default search engine and privacy settings for it
pref("browser.search.hiddenOneOffs", "Google,Amazon.com,Bing");
pref("browser.search.defaultenginename", "DuckDuckGo");
pref("browser.urlbar.placeholderName", "DuckDuckGo"); // FIXME: this option doesnt work anymore. default search is google
pref("browser.search.hiddenOneOffs", "Bing,Amazon.com,eBay,Twitter");
pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts.havePinned", "DuckDuckGo");
pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts.searchEngines", "DuckDuckGo");
// Improve search's privacy
lockPref("browser.search.isUS", false);
pref("browser.search.official", false);
pref("browser.search.update", false);
pref("browser.search.suggest.enabled", false);
// Do not suggest when type in URL bar, which sends data to search engine in first place. License: MIT @pyllyukko
pref("browser.urlbar.suggest.searches", false);
// When using the location bar, don't suggest URLs from browsing history. License: MIT @pyllyukko
pref("browser.urlbar.suggest.history", false);

/*
  Customize layout
*/
// Disable URL trim so protocol is forced to show
lockPref("browser.urlbar.trimURLs", false);
// Hide title bar to save some space
pref("browser.tabs.drawInTitlebar", true);
// Don't show WhatsNew on first run after every update
pref("browser.startup.homepage_override.mstone", "ignore");
// Don't show 'know your rights' on first run
pref("browser.rights.3.shown", true);
// Set startup page
pref("browser.startup.firstrunSkipsHomepage", true);
pref("browser.startup.homepage", "https://start.parrot.sh");
pref("startup.homepage_welcome_url", "https://www.parrotsec.org/donate");
pref("browser.newtabpage.activity-stream.default.sites", "https://www.parrotsec.org/,https://crypt.parrot.sh,https://community.parrotsec.org,https://www.hackthebox.eu/,https://riot.im/app/");
pref("browser.newtabpage.pinned", "[{\"url\":\"https://crypt.parrot.sh\",\"label\":\"CryptPad\",\"searchTopSite\":true}]");
pref("browser.startup.blankWindow", true);
pref("browser.startup.firstrunSkipsHomepage", false);
// TODO research from here https://github.com/pyllyukko/user.js/blob/master/user.js#L918