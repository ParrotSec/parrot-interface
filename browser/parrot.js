/* Firefox settings for Parrot OS */
/* We also use policies.json to handle the default browser configuration */

// Disable updater
lockPref("app.update.enabled", false);
// make absolutely sure it is really off
lockPref("app.update.auto", false);
lockPref("app.update.mode", 0);
lockPref("app.update.service.enabled", false);
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
