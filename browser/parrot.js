/* Firefox settings for Parrot OS */
/* We also use policies.json to handle the default browser configuration */

// Disable updater
lockPref("app.update.enabled", false);
// make absolutely sure it is really off
lockPref("app.update.auto", false);
lockPref("app.update.mode", 0);
lockPref("app.update.service.enabled", false);
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
lockPref("browser.shell.checkDefaultBrowser", false);
pref("browser.startup.firstrunSkipsHomepage", false);
pref("browser.startup.homepage", "https://start.parrot.sh");
pref("startup.homepage_welcome_url", "https://docs.parrotsec.org/donate");
pref("browser.newtabpage.activity-stream.default.sites", "https://www.parrotsec.org/,https://crypt.parrot.sh,https://community.parrotsec.org,https://www.hackthebox.eu/,https://riot.im/app/,https://librem.one/,https://nextcloud.com/signup/,https://www.linode.com/?r=2b6d749d3cb301e41bdbec5fc40e50c4316f7c66");
pref("browser.newtabpage.pinned", "[{\"url\":\"https://crypt.parrot.sh\",\"label\":\"CryptPad\",\"searchTopSite\":true}]");
pref("browser.search.hiddenOneOffs", "Bing,Amazon.com,eBay,Twitter");
pref("browser.search.suggest.enabled", false);
pref("browser.urlbar.placeholderName", "DuckDuckGo");
pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts.havePinned", "google");
pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts.searchEngines", "google");
pref("privacy.trackingprotection.socialtracking.enabled", true);
pref("privacy.trackingprotection.origin_telemetry.enabled", true);
pref("privacy.trackingprotection.enabled", true);
pref("privacy.resistFingerprinting", true);
pref("privacy.donottrackheader.enabled", true);
// Don't show 'know your rights' on first run
pref("browser.rights.3.shown", true);
// Don't show WhatsNew on first run after every update
pref("browser.startup.homepage_override.mstone","ignore");
// Don't ask to install the Flash plugin
pref("plugins.notifyMissingFlash", false);
// Disable health reporter
lockPref("datareporting.healthreport.service.enabled", false);
lockPref("datareporting.healthreport.uploadEnabled", false);
// Disable all data upload (Telemetry and FHR)
lockPref("datareporting.policy.dataSubmissionEnabled", false);
// allow onion domains
pref("network.dns.blockDotOnion", false);
// set proxy settings
pref("network.proxy.autoconfig_url", "file:///etc/anonsurf/onion.pac");
pref("network.proxy.socks", "127.0.0.1");
pref("network.proxy.socks_port", 9050);
pref("network.proxy.type", 2);
// set default search engine
pref("browser.search.defaultenginename", "DuckDuckGo");

