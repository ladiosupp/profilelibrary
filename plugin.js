/* Profiles Library for Decaid v2.0.3 */
function createPlugin(host) {
  "use strict";
  const PLUGIN_ID = "profiles-library.reaplugin";
  const VERSION = "2.0.3";
  const LOCAL_API = "http://localhost:8080/api/v1";
  const SNAPSHOT_DATE = "2026-10-25";
  const SNAPSHOTS = [{"profile":{"version":"2","title":"E61 espresso machine","author":"Decent","notes":"Classic E61 9 bar profile.","beverage_type":"espresso","steps":[{"name":"preinfusion temp boost","pump":"flow","transition":"fast","temperature":"92","sensor":"coffee","seconds":"2","volume":"0","flow":"4","pressure":"1","exit":{"type":"pressure","condition":"over","value":"4"},"limiter":{"value":"0","range":"0.6"}},{"name":"forced rise without limit","pump":"pressure","transition":"fast","temperature":"92","sensor":"coffee","seconds":"3","volume":"0","pressure":"9","flow":"0","limiter":{"value":"0","range":"0.6"}},{"name":"rise and hold","pump":"pressure","transition":"fast","temperature":"92","sensor":"coffee","seconds":"32","volume":"0","pressure":"9","flow":"0","limiter":{"value":"0","range":"0.6"}}],"tank_temperature":"0","target_weight":"36","target_volume":"0","target_volume_count_start":"2"},"source":{"name":"Decenza public profile library","repository":"Kulitorum/Decenza","path":"resources/profiles/e61_espresso_machine.json","sha":"cde15180100fa2564d61b478894a196264f745af","snapshotDate":"2026-10-25","format":"json"}},{"profile":{"version":"2","title":"E61 rocketing up to 10 bar","author":"Decent","notes":"E61 high-pressure variant.","beverage_type":"espresso","steps":[{"name":"preinfusion temp boost","pump":"flow","transition":"fast","temperature":"92","sensor":"coffee","seconds":"2","volume":"0","flow":"8","pressure":"1","exit":{"type":"pressure","condition":"over","value":"4"},"limiter":{"value":"0","range":"0.6"}},{"name":"preinfusion","pump":"flow","transition":"fast","temperature":"92","sensor":"coffee","seconds":"8","volume":"0","flow":"8","pressure":"1","exit":{"type":"pressure","condition":"over","value":"4"},"limiter":{"value":"0","range":"0.6"}},{"name":"forced rise without limit","pump":"pressure","transition":"fast","temperature":"92","sensor":"coffee","seconds":"3","volume":"0","pressure":"10","flow":"0","limiter":{"value":"0","range":"0.6"}},{"name":"rise and hold","pump":"pressure","transition":"fast","temperature":"92","sensor":"coffee","seconds":"27","volume":"0","pressure":"10","flow":"0","limiter":{"value":"0","range":"0.6"}}],"tank_temperature":"0","target_weight":"36","target_volume":"36","target_volume_count_start":"3"},"source":{"name":"Decenza public profile library","repository":"Kulitorum/Decenza","path":"resources/profiles/e61_rocketing_up_to_10_bar.json","sha":"b53841c5f849b31bbfec89d1c1a917d601397254","snapshotDate":"2026-10-25","format":"json"}},{"profile":{"version":"2","title":"E61 classic gently up to 10 bar","author":"Decent","notes":"E61 pressure-rising variant.","beverage_type":"espresso","steps":[{"name":"preinfusion temp boost","pump":"flow","transition":"fast","temperature":"92","sensor":"coffee","seconds":"2","volume":"0","flow":"8","pressure":"1","exit":{"type":"pressure","condition":"over","value":"4"},"limiter":{"value":"0","range":"0.6"}},{"name":"preinfusion","pump":"flow","transition":"fast","temperature":"92","sensor":"coffee","seconds":"8","volume":"0","flow":"8","pressure":"1","exit":{"type":"pressure","condition":"over","value":"4"},"limiter":{"value":"0","range":"0.6"}},{"name":"forced rise without limit","pump":"pressure","transition":"fast","temperature":"92","sensor":"coffee","seconds":"3","volume":"0","pressure":"9","flow":"0","limiter":{"value":"0","range":"0.6"}},{"name":"rise and hold","pump":"pressure","transition":"fast","temperature":"92","sensor":"coffee","seconds":"2","volume":"0","pressure":"9","flow":"0","limiter":{"value":"0","range":"0.6"}},{"name":"forced rise without limit","pump":"pressure","transition":"fast","temperature":"92","sensor":"coffee","seconds":"3","volume":"0","pressure":"9","flow":"0","limiter":{"value":"0","range":"0.6"}},{"name":"decline","pump":"pressure","transition":"smooth","temperature":"92","sensor":"coffee","seconds":"17","volume":"0","pressure":"10","flow":"0","limiter":{"value":"0","range":"0.6"}}],"tank_temperature":"0","target_weight":"36","target_volume":"36","target_volume_count_start":"4"},"source":{"name":"Decenza public profile library","repository":"Kulitorum/Decenza","path":"resources/profiles/e61_classic_gently_up_to_10_bar.json","sha":"3b916a67d94341fce4110d84c0693da4ed7a0468","snapshotDate":"2026-10-25","format":"json"}},{"profile":{"version":"2","title":"E61 with fast preinfusion to 9 bar","author":"Decent","notes":"E61 9 bar with fast preinfusion.","beverage_type":"espresso","steps":[{"name":"preinfusion temp boost","pump":"flow","transition":"fast","temperature":"92","sensor":"coffee","seconds":"2","volume":"0","flow":"8","pressure":"1","exit":{"type":"pressure","condition":"over","value":"4"},"limiter":{"value":"0","range":"0.6"}},{"name":"preinfusion","pump":"flow","transition":"fast","temperature":"92","sensor":"coffee","seconds":"4","volume":"0","flow":"8","pressure":"1","exit":{"type":"pressure","condition":"over","value":"4"},"limiter":{"value":"0","range":"0.6"}},{"name":"forced rise without limit","pump":"pressure","transition":"fast","temperature":"92","sensor":"coffee","seconds":"3","volume":"0","pressure":"9","flow":"0","limiter":{"value":"0","range":"0.6"}},{"name":"rise and hold","pump":"pressure","transition":"fast","temperature":"92","sensor":"coffee","seconds":"27","volume":"0","pressure":"9","flow":"0","limiter":{"value":"0","range":"0.6"}}],"tank_temperature":"0","target_weight":"36","target_volume":"36","target_volume_count_start":"3"},"source":{"name":"Decenza public profile library","repository":"Kulitorum/Decenza","path":"resources/profiles/e61_with_fast_preinfusion_to_9_bar.json","sha":"2e4cd66821c1f46a0472d62070b7378763f934f1","snapshotDate":"2026-10-25","format":"json"}},{"profile":{"version":"2","title":"Adaptive v3","author":"Decent","notes":"Adaptive flow-driven extraction profile.","beverage_type":"espresso","steps":[{"name":"Prefill","pump":"flow","transition":"fast","temperature":"93","sensor":"coffee","seconds":"5","volume":"100","flow":"8","pressure":"3","limiter":{"value":"0","range":"0.6"}},{"name":"Fill","pump":"flow","transition":"fast","temperature":"93","sensor":"coffee","seconds":"12","volume":"100","flow":"8","pressure":"3","exit":{"type":"pressure","condition":"over","value":"3"},"limiter":{"value":"0","range":"0.6"}},{"name":"Compressing","pump":"pressure","transition":"fast","temperature":"88","sensor":"coffee","seconds":"12","volume":"100","pressure":"3","flow":"6.8","exit":{"type":"flow","condition":"under","value":"3"},"limiter":{"value":"0","range":"0.6"}},{"name":"Dripping","pump":"pressure","transition":"fast","temperature":"88","sensor":"coffee","seconds":"6","volume":"0","pressure":"0.1","flow":"6.8","limiter":{"value":"0","range":"0.6"}},{"name":"Pressurize","pump":"pressure","transition":"fast","temperature":"88","sensor":"coffee","seconds":"6","volume":"100","pressure":"11","flow":"0","exit":{"type":"pressure","condition":"over","value":"7.7"},"limiter":{"value":"3.5","range":"0.6"}},{"name":"Extraction start","pump":"flow","transition":"fast","temperature":"88","sensor":"coffee","seconds":"0","volume":"0","flow":"1.5","pressure":"3","exit":{"type":"pressure","condition":"over","value":"0"},"limiter":{"value":"8.6","range":"0.6"}},{"name":"Extraction","pump":"flow","transition":"fast","temperature":"88","sensor":"coffee","seconds":"60","volume":"100","flow":"3.5","pressure":"3","limiter":{"value":"8.6","range":"0.6"}}],"tank_temperature":"0","target_weight":"36","target_volume":"36","target_volume_count_start":"3"},"source":{"name":"Decenza public profile library","repository":"Kulitorum/Decenza","path":"resources/profiles/adaptive_v3.json","sha":"8f94ec3c29bbe2a7b2473eed1eaa9e0fc583f192","snapshotDate":"2026-10-25","format":"json"}},{"profile":{"version":"2","title":"Best overall pressure profile","author":"Decent","notes":"General-purpose declining pressure profile.","beverage_type":"espresso","steps":[{"name":"preinfusion temp boost","pump":"flow","transition":"fast","temperature":"88","sensor":"coffee","seconds":"2","volume":"0","flow":"8","pressure":"1","exit":{"type":"pressure","condition":"over","value":"4"},"limiter":{"value":"0","range":"0.6"}},{"name":"preinfusion","pump":"flow","transition":"fast","temperature":"88","sensor":"coffee","seconds":"18","volume":"0","flow":"8","pressure":"1","exit":{"type":"pressure","condition":"over","value":"4"},"limiter":{"value":"0","range":"0.6"}},{"name":"forced rise","pump":"pressure","transition":"fast","temperature":"88","sensor":"coffee","seconds":"3","volume":"0","pressure":"8.4","flow":"0","limiter":{"value":"3.5","range":"1"}},{"name":"rise and hold","pump":"pressure","transition":"fast","temperature":"88","sensor":"coffee","seconds":"7","volume":"0","pressure":"8.4","flow":"0","limiter":{"value":"3.5","range":"1"}},{"name":"decline","pump":"pressure","transition":"smooth","temperature":"88","sensor":"coffee","seconds":"30","volume":"0","pressure":"6","flow":"0","limiter":{"value":"3.5","range":"1"}}],"tank_temperature":"0","target_weight":"36","target_volume":"36","target_volume_count_start":"3"},"source":{"name":"Decenza public profile library","repository":"Kulitorum/Decenza","path":"resources/profiles/best_overall_pressure_profile.json","sha":"fd638ef8b9563fa8db19a2eff37b172b28bd5f2f","snapshotDate":"2026-10-25","format":"json"}},{"profile":{"version":"2","title":"D-Flow / La Pavoni","author":"Damian","notes":"D-Flow lever-style La Pavoni simulation.","beverage_type":"espresso","steps":[{"name":"Filling","pump":"pressure","transition":"fast","temperature":"84","sensor":"coffee","seconds":"25","volume":"60","pressure":"1.2","flow":"8","exit":{"type":"pressure","condition":"over","value":"1.2"},"limiter":{"value":"0","range":"0.2"}},{"name":"Infusing","pump":"pressure","transition":"fast","temperature":"94","sensor":"coffee","seconds":"60","volume":"100","pressure":"1.2","flow":"8","weight":"0.2","limiter":{"value":"0","range":"0.2"}},{"name":"Pouring","pump":"flow","transition":"fast","temperature":"94","sensor":"coffee","seconds":"127","volume":"100","flow":"2.4","pressure":"4.8","limiter":{"value":"9","range":"0.2"}}],"tank_temperature":"0","target_weight":"46","target_volume":"0","target_volume_count_start":"2"},"source":{"name":"Decenza public profile library","repository":"Kulitorum/Decenza","path":"resources/profiles/d_flow_la_pavoni.json","sha":"07c26c4b4b3783ab6c62107457063423139a6c80","snapshotDate":"2026-10-25","format":"json"}},{"profile":{"version":"2","title":"D-Flow / Q","author":"Damian","notes":"D-Flow Q everyday profile.","beverage_type":"espresso","steps":[{"name":"Filling","pump":"pressure","transition":"fast","temperature":"84","sensor":"coffee","seconds":"25","volume":"60","pressure":"6","flow":"8","exit":{"type":"pressure","condition":"over","value":"3"},"limiter":{"value":"0","range":"0.2"}},{"name":"Infusing","pump":"pressure","transition":"fast","temperature":"94","sensor":"coffee","seconds":"1","volume":"100","pressure":"6","flow":"8","limiter":{"value":"0","range":"0.2"}},{"name":"Pouring","pump":"flow","transition":"fast","temperature":"94","sensor":"coffee","seconds":"127","volume":"100","flow":"1.8","pressure":"4.8","limiter":{"value":"10","range":"0.2"}}],"tank_temperature":"0","target_weight":"36","target_volume":"0","target_volume_count_start":"2"},"source":{"name":"Decenza public profile library","repository":"Kulitorum/Decenza","path":"resources/profiles/d_flow_q.json","sha":"aed28ad4fea7d7418440fa2fcf21b47f2e841ff4","snapshotDate":"2026-10-25","format":"json"}},{"profile":{"version":"2","title":"Turbo Shot","author":"Decenza","notes":"High-flow turbo extraction.","beverage_type":"espresso","steps":[{"name":"Preinfusion","pump":"flow","transition":"fast","temperature":"90","sensor":"coffee","seconds":"5","volume":"0","flow":"8","pressure":"6","exit":{"type":"pressure","condition":"over","value":"2"},"limiter":{"value":"4","range":"0.2"}},{"name":"Turbo","pump":"flow","transition":"fast","temperature":"90","sensor":"coffee","seconds":"25","volume":"0","flow":"4.5","pressure":"6","weight":"45","limiter":{"value":"6","range":"0.2"}}],"tank_temperature":"0","target_weight":"39","target_volume":"0","target_volume_count_start":"1"},"source":{"name":"Decenza public profile library","repository":"Kulitorum/Decenza","path":"resources/profiles/turbo_shot.json","sha":"731423423624e85e18a56464043a8d6806855fbb","snapshotDate":"2026-10-25","format":"json"}},{"profile":{"version":"2","title":"Gentle flat 2.5 ml per second","author":"Decent","notes":"Low, flat flow profile for aromatic light roasts.","beverage_type":"espresso","steps":[{"name":"preinfusion boost","pump":"flow","transition":"fast","temperature":"92","sensor":"coffee","seconds":"2","volume":"0","flow":"2.5","pressure":"1","exit":{"type":"pressure","condition":"over","value":"4"},"limiter":{"value":"0","range":"0.6"}},{"name":"preinfusion","pump":"flow","transition":"fast","temperature":"92","sensor":"coffee","seconds":"8","volume":"0","flow":"2.5","pressure":"1","exit":{"type":"pressure","condition":"over","value":"4"},"limiter":{"value":"0","range":"0.6"}},{"name":"hold","pump":"flow","transition":"fast","temperature":"92","sensor":"coffee","seconds":"45","volume":"0","flow":"2.5","pressure":"0","limiter":{"value":"0","range":"0.6"}},{"name":"decline","pump":"flow","transition":"smooth","temperature":"92","sensor":"coffee","seconds":"0","volume":"0","flow":"1","pressure":"0","limiter":{"value":"0","range":"0.6"}}],"tank_temperature":"0","target_weight":"36","target_volume":"0","target_volume_count_start":"2"},"source":{"name":"Decenza public profile library","repository":"Kulitorum/Decenza","path":"resources/profiles/gentle_flat_2_5_ml_per_second.json","sha":"b9118aab2d36840bd31f4f7cc881440d34afd2e4","snapshotDate":"2026-10-25","format":"json"}},{"profile":{"version":"2","title":"Gentle preinfusion flow profile","author":"Decent","notes":"Long gentle preinfusion followed by flow control.","beverage_type":"espresso","steps":[{"name":"preinfusion boost","pump":"flow","transition":"fast","temperature":"92","sensor":"coffee","seconds":"2","volume":"0","flow":"3.5","pressure":"1","exit":{"type":"pressure","condition":"over","value":"4"},"limiter":{"value":"0","range":"0.6"}},{"name":"preinfusion","pump":"flow","transition":"fast","temperature":"92","sensor":"coffee","seconds":"28","volume":"0","flow":"3.5","pressure":"1","exit":{"type":"pressure","condition":"over","value":"4"},"limiter":{"value":"0","range":"0.6"}},{"name":"hold","pump":"flow","transition":"fast","temperature":"92","sensor":"coffee","seconds":"21","volume":"0","flow":"2.2","pressure":"0","limiter":{"value":"0","range":"0.6"}},{"name":"decline","pump":"flow","transition":"smooth","temperature":"92","sensor":"coffee","seconds":"0","volume":"0","flow":"1.8","pressure":"0","limiter":{"value":"0","range":"0.6"}}],"tank_temperature":"0","target_weight":"36","target_volume":"37","target_volume_count_start":"2"},"source":{"name":"Decenza public profile library","repository":"Kulitorum/Decenza","path":"resources/profiles/gentle_preinfusion_flow_profile.json","sha":"a79e545dc1074216d98a096a83553ea7a7f46cde","snapshotDate":"2026-10-25","format":"json"}},{"profile":{"version":"2","title":"Hybrid pour over espresso","author":"Decent","notes":"Fine-grind hybrid pour-over/espresso flow profile.","beverage_type":"espresso","steps":[{"name":"preinfusion","pump":"flow","transition":"fast","temperature":"92","sensor":"coffee","seconds":"25","volume":"0","flow":"2","pressure":"1","exit":{"type":"pressure","condition":"over","value":"1.5"},"limiter":{"value":"0","range":"0.6"}},{"name":"hold","pump":"flow","transition":"fast","temperature":"92","sensor":"coffee","seconds":"20","volume":"0","flow":"2.2","pressure":"0","limiter":{"value":"0","range":"0.6"}},{"name":"decline","pump":"flow","transition":"smooth","temperature":"92","sensor":"coffee","seconds":"0","volume":"0","flow":"1.8","pressure":"0","limiter":{"value":"0","range":"0.6"}}],"tank_temperature":"0","target_weight":"36","target_volume":"0","target_volume_count_start":"1"},"source":{"name":"Decenza public profile library","repository":"Kulitorum/Decenza","path":"resources/profiles/hybrid_pour_over_espresso.json","sha":"ef453364143986226eca78ae022cb90bbf4236ea","snapshotDate":"2026-10-25","format":"json"}},{"profile":{"version":"2","title":"Italian Australian espresso","author":"Decent","notes":"Lower-temperature traditional pressure profile.","beverage_type":"espresso","steps":[{"name":"preinfusion temp boost","pump":"flow","transition":"fast","temperature":"88","sensor":"coffee","seconds":"2","volume":"0","flow":"4.5","pressure":"1","exit":{"type":"pressure","condition":"over","value":"4"},"limiter":{"value":"0","range":"0.6"}},{"name":"preinfusion","pump":"flow","transition":"fast","temperature":"88","sensor":"coffee","seconds":"6","volume":"0","flow":"4.5","pressure":"1","exit":{"type":"pressure","condition":"over","value":"4"},"limiter":{"value":"0","range":"0.6"}},{"name":"forced rise without limit","pump":"pressure","transition":"fast","temperature":"88","sensor":"coffee","seconds":"3","volume":"0","pressure":"8.7","flow":"0","limiter":{"value":"0","range":"0.6"}},{"name":"rise and hold","pump":"pressure","transition":"fast","temperature":"88","sensor":"coffee","seconds":"32","volume":"0","pressure":"8.7","flow":"0","limiter":{"value":"0","range":"0.6"}}],"tank_temperature":"0","target_weight":"36","target_volume":"36","target_volume_count_start":"3"},"source":{"name":"Decenza public profile library","repository":"Kulitorum/Decenza","path":"resources/profiles/italian_australian_espresso.json","sha":"5f2955a8e28d62a5b185fab9ae7b8e365a47d28f","snapshotDate":"2026-10-25","format":"json"}},{"profile":{"version":"2","title":"Low pressure lever machine at 6 bar","author":"Decent","notes":"Classic low-pressure lever-style profile.","beverage_type":"espresso","steps":[{"name":"preinfusion","pump":"flow","transition":"fast","temperature":"94","sensor":"coffee","seconds":"20","volume":"0","flow":"4.5","pressure":"1","exit":{"type":"pressure","condition":"over","value":"4"},"limiter":{"value":"0","range":"0.6"}},{"name":"forced rise without limit","pump":"pressure","transition":"fast","temperature":"94","sensor":"coffee","seconds":"3","volume":"0","pressure":"6","flow":"0","limiter":{"value":"0","range":"0.6"}},{"name":"rise and hold","pump":"pressure","transition":"fast","temperature":"94","sensor":"coffee","seconds":"5","volume":"0","pressure":"6","flow":"0","limiter":{"value":"0","range":"0.6"}},{"name":"decline","pump":"pressure","transition":"smooth","temperature":"94","sensor":"coffee","seconds":"27","volume":"0","pressure":"0","flow":"0","limiter":{"value":"0","range":"0.6"}}],"tank_temperature":"0","target_weight":"36","target_volume":"36","target_volume_count_start":"2"},"source":{"name":"Decenza public profile library","repository":"Kulitorum/Decenza","path":"resources/profiles/low_pressure_lever_machine_at_6_bar.json","sha":"0232fb2ec275d78edd35fe09f61d346208b90eaa","snapshotDate":"2026-10-25","format":"json"}},{"profile":{"version":"2","title":"Gentler but still traditional 8.4 bar","author":"Decent","notes":"Traditional espresso at gentler 8.4 bar.","beverage_type":"espresso","steps":[{"name":"preinfusion temp boost","pump":"flow","transition":"fast","temperature":"89.5","sensor":"coffee","seconds":"2","volume":"0","flow":"4","pressure":"1","exit":{"type":"pressure","condition":"over","value":"4"},"limiter":{"value":"0","range":"0.6"}},{"name":"preinfusion","pump":"flow","transition":"fast","temperature":"89.5","sensor":"coffee","seconds":"8","volume":"0","flow":"4","pressure":"1","exit":{"type":"pressure","condition":"over","value":"4"},"limiter":{"value":"0","range":"0.6"}},{"name":"forced rise without limit","pump":"pressure","transition":"fast","temperature":"89.5","sensor":"coffee","seconds":"3","volume":"0","pressure":"8.4","flow":"0","limiter":{"value":"0","range":"0.6"}},{"name":"rise and hold","pump":"pressure","transition":"fast","temperature":"89.5","sensor":"coffee","seconds":"28","volume":"0","pressure":"8.4","flow":"0","limiter":{"value":"0","range":"0.6"}},{"name":"decline","pump":"pressure","transition":"smooth","temperature":"89.5","sensor":"coffee","seconds":"2","volume":"0","pressure":"6","flow":"0","limiter":{"value":"0","range":"0.6"}}],"tank_temperature":"0","target_weight":"36","target_volume":"37","target_volume_count_start":"3"},"source":{"name":"Decenza public profile library","repository":"Kulitorum/Decenza","path":"resources/profiles/gentler_but_still_traditional_8_4_bar.json","sha":"7ef656e5ee3cb2db37ca1bcb859ae9a13c0118d3","snapshotDate":"2026-10-25","format":"json"}},{"profile":{"version":"2","title":"GHC/manual flow control","author":"Decent","notes":"Manual flow control for GHC-equipped machines.","beverage_type":"manual","steps":[{"name":"hold","pump":"flow","transition":"fast","temperature":"88","sensor":"coffee","seconds":"60","volume":"0","flow":"0","pressure":"0","limiter":{"value":"9","range":"0.9"}},{"name":"decline","pump":"flow","transition":"smooth","temperature":"88","sensor":"coffee","seconds":"60","volume":"0","flow":"0","pressure":"0","limiter":{"value":"9","range":"0.9"}}],"tank_temperature":"0","target_weight":"0","target_volume":"0","target_volume_count_start":"0"},"source":{"name":"Decenza public profile library","repository":"Kulitorum/Decenza","path":"resources/profiles/ghc_manual_flow_control.json","sha":"02ea2eaf788053ae468e305450abda2abf7e954a","snapshotDate":"2026-10-25","format":"json"}},{"profile":{"version":"2","title":"GHC/manual pressure control","author":"Decent","notes":"Manual pressure control for GHC-equipped machines.","beverage_type":"manual","steps":[{"name":"forced rise without limit","pump":"pressure","transition":"fast","temperature":"88","sensor":"coffee","seconds":"3","volume":"0","pressure":"0","flow":"0","limiter":{"value":"0","range":"0.6"}},{"name":"rise and hold","pump":"pressure","transition":"fast","temperature":"88","sensor":"coffee","seconds":"57","volume":"0","pressure":"0","flow":"0","limiter":{"value":"0","range":"0.6"}},{"name":"decline","pump":"pressure","transition":"smooth","temperature":"88","sensor":"coffee","seconds":"60","volume":"0","pressure":"0","flow":"0","limiter":{"value":"0","range":"0.6"}}],"tank_temperature":"0","target_weight":"0","target_volume":"0","target_volume_count_start":"1"},"source":{"name":"Decenza public profile library","repository":"Kulitorum/Decenza","path":"resources/profiles/ghc_manual_pressure_control.json","sha":"f2e7670d69518eb6dd1c98ca4c92ed558f42017e","snapshotDate":"2026-10-25","format":"json"}}];
  const COMMUNITY = [{"id":"decent-luca-classic","title":"Luca's Classic Italian Espresso","author":"Luca Frangella","source":"Decent community collection","url":"https://decentespresso.com/f/0/Lucas_Classic_Italian_Espresso.tcl","format":"tcl"},{"id":"decent-nuskool-15","title":"Nu Skool 15g","author":"Dan Calabro","source":"Decent community collection","url":"https://decentespresso.com/f/0/Nu%20Skool%2015g.tcl","format":"tcl"},{"id":"decent-nuskool-18","title":"Nu Skool 18g","author":"Dan Calabro","source":"Decent community collection","url":"https://decentespresso.com/f/0/Nu%20Skool%2018g.tcl","format":"tcl"},{"id":"decent-nuskool-22","title":"Nu Skool 22g","author":"Dan Calabro","source":"Decent community collection","url":"https://decentespresso.com/f/0/Nu%20Skool%2022g.tcl","format":"tcl"},{"id":"decent-nuskool-v3","title":"Nu Skool Espresso v3","author":"TMC","source":"Decent community collection","url":"https://decentespresso.com/f/0/Nu%20Skool%20Espresso%20v3.tcl","format":"tcl"},{"id":"decent-strega-dark","title":"Idan's Strega Plus dark","author":"Idan","source":"Decent community collection","url":"https://decentespresso.com/f/0/Idan%27s%20Strega%20Plus%20dark.tcl","format":"tcl"},{"id":"decent-strega-medium","title":"Idan's Strega Plus medium","author":"Idan","source":"Decent community collection","url":"https://decentespresso.com/f/0/Idan%27s%20Strega%20Plus%20medium.tcl","format":"tcl"},{"id":"decent-turbo-adaptive","title":"Turbo shot adaptive","author":"TMC","source":"Decent community collection","url":"https://decentespresso.com/f/0/Turbo%20shot%20adaptive%20v1.tcl","format":"tcl"},{"id":"decent-adaptive-low-pressure","title":"Adaptive profile with low pressure infusion","author":"Trevor Rainey","source":"Decent community collection","url":"https://decentespresso.com/f/0/Adaptive%20profile%20with%20low%20pressure%20infusion.tcl","format":"tcl"},{"id":"decent-jw-spring-scale","title":"JW spring lever scale","author":"JW","source":"Decent community collection","url":"https://decentespresso.com/f/0/JW%20spring%20lever%20scale%281%29.tcl","format":"tcl"},{"id":"decent-jw-9bar-no-scale","title":"JW 9 bar no scale","author":"JW","source":"Decent community collection","url":"https://decentespresso.com/f/0/JW%209%20bar%20no%20scale.tcl","format":"tcl"},{"id":"decent-jw-9bar-scale","title":"JW 9 bar scale","author":"JW","source":"Decent community collection","url":"https://decentespresso.com/f/0/JW%209%20bar%20scale.tcl","format":"tcl"},{"id":"decent-jw-advanced-spring","title":"JW advanced spring lever","author":"JW","source":"Decent community collection","url":"https://decentespresso.com/f/0/JW%20advanced%20spring%20lever.tcl","format":"tcl"},{"id":"decent-arcturus","title":"Project Arcturus","author":"Ricco Rosini","source":"Decent community collection","url":"https://decentespresso.com/f/0/Project%20Arcturus.tcl","format":"tcl"},{"id":"decent-easy-bloom-fast-pressure","title":"Easy blooming fast pressure","author":"Ricco Rosini / Stephane Ribes","source":"Decent community collection","url":"https://decentespresso.com/f/0/Easy_blooming_fast_pressure_to_7_bar.tcl","format":"tcl"},{"id":"decent-easy-bloom-dynamic","title":"Easy blooming pressure dynamic decline","author":"Ricco Rosini / Stephane Ribes","source":"Decent community collection","url":"https://decentespresso.com/f/0/Easy_blooming_pressure_dynamic_decline.tcl","format":"tcl"},{"id":"decent-easy-bloom-flow","title":"Easy Blooming fast flow rise","author":"Ricco Rosini / Stephane Ribes","source":"Decent community collection","url":"https://decentespresso.com/f/0/Easy_blooming_fast_flow_rise.tcl","format":"tcl"},{"id":"decent-turbo","title":"T U R B O","author":"Collin Arneson","source":"Decent community collection","url":"https://decentespresso.com/f/0/T%20U%20R%20B%20O.tcl","format":"tcl"},{"id":"decent-cloudburst","title":"Cloudburst","author":"Collin Arneson","source":"Decent community collection","url":"https://decentespresso.com/f/0/Cloudburst.tcl","format":"tcl"},{"id":"decent-hendon-flow","title":"Hendon turbo flow","author":"Jan F.","source":"Decent community collection","url":"https://decentespresso.com/f/0/hendon_turbo_flow.tcl","format":"tcl"},{"id":"decent-hendon-bloom","title":"Hendon turbo bloom","author":"Jan F.","source":"Decent community collection","url":"https://decentespresso.com/f/0/hendon_turbo_bloom.tcl","format":"tcl"},{"id":"decent-damian-lrv3","title":"Damian's LRv3","author":"Damian Brakel","source":"Decent community collection","url":"https://decentespresso.com/f/0/Damian%27s%20LRv3.tcl","format":"tcl"},{"id":"decent-damian-lm-leva","title":"Damian's LM Leva","author":"Damian Brakel","source":"Decent community collection","url":"https://decentespresso.com/f/0/Damian%27s%20LM%20Leva.tcl","format":"tcl"},{"id":"decent-advanced-spring","title":"Advanced spring lever","author":"John Weiss","source":"Decent community collection","url":"https://decentespresso.com/f/0/Advanced%20spring%20lever.tcl","format":"tcl"},{"id":"gagne-adaptive-shot","title":"Adaptive Shot","author":"Jonathan Gagne","source":"Adaptive profiles archive","url":"https://raw.githubusercontent.com/qporzk/Decent-Docs/master/assets/profiles/Adaptive_Shot.tcl","format":"tcl"},{"id":"gagne-adaptive-bloom","title":"Adaptive Bloom","author":"Jonathan Gagne","source":"Adaptive profiles archive","url":"https://raw.githubusercontent.com/qporzk/Decent-Docs/master/assets/profiles/Adaptive_Bloom.tcl","format":"tcl"},{"id":"gagne-adaptive-allonge","title":"Adaptive Allonge","author":"Jonathan Gagne","source":"Adaptive profiles archive","url":"https://raw.githubusercontent.com/qporzk/Decent-Docs/master/assets/profiles/Adaptive_Allonge.tcl","format":"tcl"}];
  const ONLINE_SOURCES = [
    {id:"de1app",label:"DE1app Official Full",api:"https://api.github.com/repos/decentespresso/de1app/contents/de1plus/profiles",format:"tcl"},
    {id:"decenza",label:"Decenza Public Profiles",api:"https://api.github.com/repos/Kulitorum/Decenza/contents/resources/profiles",format:"json"},
    {id:"decaid",label:"Decaid Default Profiles",api:"https://api.github.com/repos/decentespresso/decaid/contents/assets/defaultProfiles",format:"json"},
    {id:"decent-docs",label:"Decent Docs Profiles",api:"https://api.github.com/repos/qporzk/Decent-Docs/contents/assets/profiles",format:"mixed"}
  ];
  const DEFAULT_PREVIEWS = {"repository":"decentespresso/decaid","commit":"f2248a756f80639c5f96e1fbdd4c426c956fbca4","profiles":{"7g_basket.json":{"title":"7g basket","steps":[{"pump":"flow","target":2.4,"seconds":2,"transition":"fast","limit":0},{"pump":"flow","target":2.4,"seconds":6,"transition":"fast","limit":0},{"pump":"pressure","target":7.5,"seconds":3,"transition":"fast","limit":0},{"pump":"pressure","target":7.5,"seconds":3,"transition":"fast","limit":6},{"pump":"pressure","target":4.5,"seconds":10,"transition":"smooth","limit":6}],"conditional":true,"eventDriven":false,"sourceSha":"df7b4f882d765921af7b58fd5742090de3f518e0"},"80s_Espresso.json":{"title":"80's Espresso","steps":[{"pump":"flow","target":7.5,"seconds":2,"transition":"fast","limit":0},{"pump":"flow","target":7.5,"seconds":6,"transition":"fast","limit":0},{"pump":"pressure","target":7.8,"seconds":4,"transition":"fast","limit":0},{"pump":"pressure","target":5,"seconds":50,"transition":"smooth","limit":0}],"conditional":true,"eventDriven":false,"sourceSha":"2cbfeb6d880f04f9b0cb0c4f10cf29c0131cd886"},"A-Flow____default-dark.json":{"title":"A-Flow / default-dark","steps":[{"pump":"flow","target":8,"seconds":1,"transition":"fast","limit":8},{"pump":"flow","target":8,"seconds":15,"transition":"fast","limit":8},{"pump":"pressure","target":3,"seconds":10,"transition":"fast","limit":1},{"pump":"flow","target":8,"seconds":0,"transition":"fast","limit":3},{"pump":"pressure","target":1,"seconds":15,"transition":"fast","limit":1},{"pump":"pressure","target":9,"seconds":5,"transition":"smooth","limit":0},{"pump":"pressure","target":1,"seconds":0,"transition":"smooth","limit":0},{"pump":"flow","target":2,"seconds":0,"transition":"fast","limit":0},{"pump":"flow","target":0,"seconds":60,"transition":"smooth","limit":9}],"conditional":true,"eventDriven":true,"sourceSha":"f303251a20f82d24668c85ba8d99f6618e5000f6"},"A-Flow____default-light.json":{"title":"A-Flow / default-light","steps":[{"pump":"flow","target":8,"seconds":1,"transition":"fast","limit":8},{"pump":"flow","target":8,"seconds":15,"transition":"fast","limit":8},{"pump":"pressure","target":3,"seconds":60,"transition":"fast","limit":1},{"pump":"flow","target":8,"seconds":0,"transition":"fast","limit":3},{"pump":"pressure","target":1,"seconds":15,"transition":"fast","limit":1},{"pump":"pressure","target":9.5,"seconds":10,"transition":"smooth","limit":0},{"pump":"pressure","target":1,"seconds":0,"transition":"smooth","limit":0},{"pump":"flow","target":3,"seconds":0,"transition":"fast","limit":0},{"pump":"flow","target":6,"seconds":60,"transition":"smooth","limit":9.5}],"conditional":true,"eventDriven":true,"sourceSha":"ef885576e3cc132d104ddc697061da166f3b9244"},"A-Flow____default-like-dflow.json":{"title":"A-Flow / default-like-dflow","steps":[{"pump":"flow","target":8,"seconds":1,"transition":"fast","limit":8},{"pump":"flow","target":8,"seconds":15,"transition":"fast","limit":8},{"pump":"pressure","target":3,"seconds":60,"transition":"fast","limit":1},{"pump":"flow","target":8,"seconds":0,"transition":"fast","limit":3},{"pump":"pressure","target":1,"seconds":15,"transition":"fast","limit":1},{"pump":"pressure","target":10,"seconds":0,"transition":"smooth","limit":0},{"pump":"pressure","target":1,"seconds":0,"transition":"smooth","limit":0},{"pump":"flow","target":2,"seconds":10,"transition":"fast","limit":0},{"pump":"flow","target":4,"seconds":60,"transition":"smooth","limit":10}],"conditional":true,"eventDriven":true,"sourceSha":"6da06e49cce0d218ce148e57e55b3362c93dc2c4"},"A-Flow____default-medium.json":{"title":"A-Flow / default-medium","steps":[{"pump":"flow","target":8,"seconds":1,"transition":"fast","limit":8},{"pump":"flow","target":8,"seconds":15,"transition":"fast","limit":8},{"pump":"pressure","target":3,"seconds":60,"transition":"fast","limit":1},{"pump":"flow","target":8,"seconds":0,"transition":"fast","limit":3},{"pump":"pressure","target":1,"seconds":15,"transition":"fast","limit":1},{"pump":"pressure","target":10,"seconds":10,"transition":"smooth","limit":0},{"pump":"pressure","target":1,"seconds":0,"transition":"smooth","limit":0},{"pump":"flow","target":2,"seconds":0,"transition":"fast","limit":0},{"pump":"flow","target":4,"seconds":60,"transition":"smooth","limit":10}],"conditional":true,"eventDriven":true,"sourceSha":"d35e9271d98229f57d1c58cabc5f19c98b11d620"},"A-Flow____default-very-dark.json":{"title":"A-Flow / default-very-dark","steps":[{"pump":"flow","target":8,"seconds":1,"transition":"fast","limit":8},{"pump":"flow","target":8,"seconds":15,"transition":"fast","limit":8},{"pump":"pressure","target":3,"seconds":6,"transition":"fast","limit":1},{"pump":"flow","target":8,"seconds":0,"transition":"fast","limit":3},{"pump":"pressure","target":1,"seconds":15,"transition":"fast","limit":1},{"pump":"pressure","target":10,"seconds":3,"transition":"smooth","limit":0},{"pump":"pressure","target":1,"seconds":3,"transition":"smooth","limit":0},{"pump":"flow","target":1.8,"seconds":0,"transition":"fast","limit":0},{"pump":"flow","target":3.6,"seconds":60,"transition":"smooth","limit":10}],"conditional":true,"eventDriven":true,"sourceSha":"5d72a13ae5bfd3ce10de6c9d06792051e1430238"},"Blooming_allonge.json":{"title":"Blooming Allongé","steps":[{"pump":"flow","target":4.5,"seconds":2,"transition":"fast","limit":0},{"pump":"flow","target":4.5,"seconds":3,"transition":"fast","limit":0},{"pump":"flow","target":2,"seconds":15,"transition":"smooth","limit":0},{"pump":"flow","target":0,"seconds":30,"transition":"fast","limit":0},{"pump":"flow","target":3.5,"seconds":7,"transition":"smooth","limit":0},{"pump":"flow","target":3.5,"seconds":60,"transition":"fast","limit":8.6}],"conditional":true,"eventDriven":false,"sourceSha":"f30486f930c9f4f90272bc82022df9c1c55775da"},"Blooming_espresso.json":{"title":"Blooming Espresso","steps":[{"pump":"flow","target":4,"seconds":2,"transition":"fast","limit":0},{"pump":"flow","target":4,"seconds":23,"transition":"fast","limit":0},{"pump":"flow","target":0,"seconds":30,"transition":"fast","limit":0},{"pump":"flow","target":2.2,"seconds":5,"transition":"smooth","limit":0},{"pump":"flow","target":2.2,"seconds":20,"transition":"fast","limit":8.6},{"pump":"flow","target":0,"seconds":1,"transition":"fast","limit":0}],"conditional":true,"eventDriven":false,"sourceSha":"ad6bd97685fbf9c0aa81689e0e0003729a607c06"},"Classic_Italian_espresso.json":{"title":"Classic Italian espresso","steps":[{"pump":"flow","target":8,"seconds":2,"transition":"fast","limit":0},{"pump":"flow","target":8,"seconds":6,"transition":"fast","limit":0},{"pump":"pressure","target":9,"seconds":3,"transition":"fast","limit":0},{"pump":"pressure","target":9,"seconds":32,"transition":"fast","limit":4.5}],"conditional":true,"eventDriven":false,"sourceSha":"0b846948c61019e081918202869c946870278756"},"Cleaning__Forward_Flush_x5_2.json":{"title":"Cleaning/Forward Flush x5","steps":[{"pump":"pressure","target":9.999999999999993,"seconds":20,"transition":"fast","limit":0},{"pump":"pressure","target":0,"seconds":15,"transition":"fast","limit":0},{"pump":"pressure","target":9.999999999999993,"seconds":15,"transition":"fast","limit":0},{"pump":"pressure","target":0,"seconds":15,"transition":"fast","limit":0},{"pump":"pressure","target":9.999999999999993,"seconds":15,"transition":"fast","limit":0},{"pump":"pressure","target":0,"seconds":15,"transition":"fast","limit":0},{"pump":"pressure","target":9.999999999999993,"seconds":15,"transition":"fast","limit":0},{"pump":"pressure","target":0,"seconds":15,"transition":"fast","limit":0},{"pump":"pressure","target":9.999999999999993,"seconds":15,"transition":"fast","limit":0}],"conditional":true,"eventDriven":false,"sourceSha":"633117cd56b78a3bf08991d5b38089ae14bd1cb6"},"D-Flow____default.json":{"title":"D-Flow / default","steps":[{"pump":"pressure","target":3,"seconds":25,"transition":"fast","limit":0},{"pump":"pressure","target":3,"seconds":60,"transition":"fast","limit":0},{"pump":"flow","target":1.7,"seconds":127,"transition":"fast","limit":8.5}],"conditional":true,"eventDriven":false,"sourceSha":"7983ae71dc6a19826ee2f17596a22711bb0f961b"},"Damian_s_LM_Leva.json":{"title":"Damian's LM Leva","steps":[{"pump":"pressure","target":1.8,"seconds":2,"transition":"fast","limit":0},{"pump":"pressure","target":1.8,"seconds":20,"transition":"fast","limit":0},{"pump":"pressure","target":2.2,"seconds":10,"transition":"fast","limit":0},{"pump":"pressure","target":8,"seconds":5,"transition":"fast","limit":0},{"pump":"pressure","target":8,"seconds":5,"transition":"fast","limit":0},{"pump":"pressure","target":2.2,"seconds":58,"transition":"smooth","limit":0}],"conditional":true,"eventDriven":false,"sourceSha":"4ff2c30348bedb3cf5ee565bbb5f338ec85b670c"},"Damian_s_LRv2.json":{"title":"Damian's LRv2","steps":[{"pump":"pressure","target":2,"seconds":2,"transition":"fast","limit":0},{"pump":"pressure","target":2,"seconds":25,"transition":"fast","limit":0},{"pump":"pressure","target":3,"seconds":12,"transition":"fast","limit":0},{"pump":"pressure","target":9,"seconds":8,"transition":"fast","limit":0},{"pump":"pressure","target":3,"seconds":55,"transition":"smooth","limit":0},{"pump":"pressure","target":3,"seconds":127,"transition":"fast","limit":0},{"pump":"flow","target":2.5,"seconds":127,"transition":"fast","limit":0}],"conditional":true,"eventDriven":false,"sourceSha":"e9319dbf1a8756fc28729bcd157a5b13ab97548b"},"Damian_s_LRv3.json":{"title":"Damian's LRv3","steps":[{"pump":"pressure","target":2,"seconds":2,"transition":"fast","limit":0},{"pump":"pressure","target":2,"seconds":25,"transition":"fast","limit":0},{"pump":"pressure","target":3,"seconds":12,"transition":"fast","limit":0},{"pump":"pressure","target":9,"seconds":4,"transition":"fast","limit":0},{"pump":"pressure","target":9,"seconds":30,"transition":"fast","limit":0},{"pump":"pressure","target":5.5,"seconds":35,"transition":"smooth","limit":0},{"pump":"pressure","target":5.5,"seconds":127,"transition":"fast","limit":0},{"pump":"flow","target":2.2,"seconds":127,"transition":"fast","limit":0}],"conditional":true,"eventDriven":false,"sourceSha":"744a24ba30d8246fe69e9622395b49d4f50634d5"},"Damians_Q.json":{"title":"Damian's Q","steps":[{"pump":"pressure","target":6,"seconds":25,"transition":"fast","limit":0},{"pump":"pressure","target":6,"seconds":1,"transition":"fast","limit":0},{"pump":"flow","target":1.8,"seconds":127,"transition":"fast","limit":10}],"conditional":true,"eventDriven":false,"sourceSha":"f15376dbde8e3d8c785174f3a5ccacac2757f2cc"},"Default1.json":{"title":"Default","steps":[{"pump":"flow","target":8,"seconds":2,"transition":"fast","limit":0},{"pump":"flow","target":8,"seconds":18,"transition":"fast","limit":0},{"pump":"pressure","target":8.6,"seconds":3,"transition":"fast","limit":0},{"pump":"pressure","target":8.6,"seconds":1,"transition":"fast","limit":0},{"pump":"pressure","target":8.6,"seconds":3,"transition":"fast","limit":0},{"pump":"pressure","target":6,"seconds":32,"transition":"smooth","limit":0}],"conditional":true,"eventDriven":false,"sourceSha":"f939ecc1e29055aaf79518a0a025fd57b65cccdb"},"EspressoForge_Dark.json":{"title":"Espresso Forge Dark","steps":[{"pump":"flow","target":6,"seconds":10,"transition":"fast","limit":0},{"pump":"pressure","target":7.5,"seconds":8,"transition":"fast","limit":0},{"pump":"pressure","target":3,"seconds":30,"transition":"smooth","limit":0},{"pump":"flow","target":0,"seconds":1,"transition":"smooth","limit":0}],"conditional":true,"eventDriven":false,"sourceSha":"c5d47cfae9e48afb1ba6eb02421827dafb4f4911"},"EspressoForge_Light.json":{"title":"Espresso Forge Light","steps":[{"pump":"flow","target":6,"seconds":10,"transition":"fast","limit":0},{"pump":"pressure","target":1,"seconds":25,"transition":"smooth","limit":0},{"pump":"pressure","target":10,"seconds":20,"transition":"smooth","limit":0},{"pump":"pressure","target":6,"seconds":50,"transition":"smooth","limit":0},{"pump":"flow","target":0,"seconds":1,"transition":"smooth","limit":0}],"conditional":true,"eventDriven":false,"sourceSha":"93c15b9655f03eed35ee14bb8fc53d8101973459"},"Extractamundo_Dos.json":{"title":"Extractamundo Dos!","steps":[{"pump":"pressure","target":8,"seconds":2,"transition":"fast","limit":0},{"pump":"pressure","target":8,"seconds":20,"transition":"fast","limit":0},{"pump":"flow","target":0,"seconds":40,"transition":"fast","limit":0},{"pump":"pressure","target":6.0000000000000036,"seconds":60,"transition":"fast","limit":1}],"conditional":true,"eventDriven":false,"sourceSha":"47aa85fc1fcaa5b29ed69d2514fa157b96d99db7"},"Filter_20.json":{"title":"Filter 2.0","steps":[{"pump":"flow","target":5,"seconds":6,"transition":"fast","limit":0},{"pump":"flow","target":0,"seconds":120,"transition":"fast","limit":0},{"pump":"flow","target":3,"seconds":120,"transition":"fast","limit":3},{"pump":"flow","target":0,"seconds":1,"transition":"fast","limit":0}],"conditional":true,"eventDriven":false,"sourceSha":"87a7a402bbfe16a5bf067dc1df00bd4ea6c9bee6"},"Filter_21.json":{"title":"Filter 2.1","steps":[{"pump":"flow","target":4,"seconds":4,"transition":"fast","limit":0},{"pump":"flow","target":1,"seconds":8,"transition":"smooth","limit":0},{"pump":"flow","target":1,"seconds":10,"transition":"fast","limit":0},{"pump":"flow","target":0.1,"seconds":90,"transition":"fast","limit":0},{"pump":"flow","target":3,"seconds":10,"transition":"smooth","limit":0.8},{"pump":"flow","target":3,"seconds":60,"transition":"fast","limit":0.8}],"conditional":true,"eventDriven":false,"sourceSha":"a9817a6b35458de4b93dc06a134ded6fbea5e03e"},"Flow_profile_for_milky_drinks.json":{"title":"Flow profile for milky drinks","steps":[{"pump":"flow","target":8,"seconds":2,"transition":"fast","limit":0},{"pump":"flow","target":8,"seconds":18,"transition":"fast","limit":0},{"pump":"flow","target":1.2,"seconds":30,"transition":"fast","limit":8.6},{"pump":"flow","target":1,"seconds":0,"transition":"smooth","limit":8.6}],"conditional":true,"eventDriven":true,"sourceSha":"b48eb0abec5c681a354bf6bca8379ae414d8fb3d"},"Flow_profile_for_straight_espresso.json":{"title":"Flow profile for straight espresso","steps":[{"pump":"flow","target":8,"seconds":2,"transition":"fast","limit":0},{"pump":"flow","target":8,"seconds":18,"transition":"fast","limit":0},{"pump":"flow","target":2,"seconds":30,"transition":"fast","limit":8.6},{"pump":"flow","target":1,"seconds":0,"transition":"smooth","limit":8.6}],"conditional":true,"eventDriven":true,"sourceSha":"c2081c46e64af53fd0229eb3f015923db1a225c2"},"Gentle_and_sweet1.json":{"title":"Gentle and sweet","steps":[{"pump":"flow","target":8,"seconds":2,"transition":"fast","limit":0},{"pump":"flow","target":8,"seconds":18,"transition":"fast","limit":0},{"pump":"pressure","target":6,"seconds":3,"transition":"fast","limit":0},{"pump":"pressure","target":6,"seconds":13,"transition":"fast","limit":4},{"pump":"pressure","target":4,"seconds":30,"transition":"smooth","limit":4}],"conditional":true,"eventDriven":false,"sourceSha":"db86dcad62ce6277f934e703568f2df6a2c87a96"},"I_got_your_back.json":{"title":"I got your back","steps":[{"pump":"flow","target":4,"seconds":2,"transition":"fast","limit":0},{"pump":"flow","target":4,"seconds":11,"transition":"fast","limit":0},{"pump":"flow","target":2.2,"seconds":30,"transition":"fast","limit":0},{"pump":"flow","target":0,"seconds":60,"transition":"fast","limit":0},{"pump":"flow","target":2.2,"seconds":5,"transition":"smooth","limit":0},{"pump":"flow","target":2.2,"seconds":30,"transition":"fast","limit":8.6}],"conditional":true,"eventDriven":false,"sourceSha":"d5f3742ff8961a1920c5c13cc4c058845d23ebe3"},"Londonium.json":{"title":"Londonium","steps":[{"pump":"pressure","target":2,"seconds":2,"transition":"fast","limit":0},{"pump":"pressure","target":2,"seconds":25,"transition":"fast","limit":0},{"pump":"pressure","target":3,"seconds":12,"transition":"fast","limit":0},{"pump":"pressure","target":9,"seconds":8,"transition":"fast","limit":0},{"pump":"pressure","target":3,"seconds":55,"transition":"smooth","limit":0},{"pump":"pressure","target":3,"seconds":127,"transition":"fast","limit":0},{"pump":"flow","target":2.5,"seconds":127,"transition":"fast","limit":0}],"conditional":true,"eventDriven":false,"sourceSha":"1daf983cefada0e60479a68318606c566a1b628e"},"Pour_over.json":{"title":"Pour over basket/Decent pour over","steps":[{"pump":"flow","target":6,"seconds":4,"transition":"fast","limit":0},{"pump":"flow","target":0,"seconds":40,"transition":"fast","limit":0},{"pump":"flow","target":6,"seconds":14,"transition":"fast","limit":0},{"pump":"flow","target":0,"seconds":20,"transition":"fast","limit":0},{"pump":"flow","target":5,"seconds":25,"transition":"fast","limit":0},{"pump":"flow","target":0,"seconds":20,"transition":"fast","limit":0},{"pump":"flow","target":0,"seconds":1,"transition":"fast","limit":0}],"conditional":true,"eventDriven":false,"sourceSha":"9733933440ee962e639d55f81dfc7c86e636c7b9"},"Preinfuse_then_45ml_of_water.json":{"title":"Preinfuse then 45ml of water","steps":[{"pump":"flow","target":8,"seconds":25,"transition":"fast","limit":0},{"pump":"flow","target":2,"seconds":20,"transition":"fast","limit":0},{"pump":"flow","target":1,"seconds":0,"transition":"smooth","limit":0}],"conditional":true,"eventDriven":true,"sourceSha":"c7c284788a7217c2e4cbdbf82e496ce6a7168aae"},"Tea_portafilter__Blue_Willow_Tsuyuhikari_Sencha.json":{"title":"Tea portafilter/Sencha","steps":[{"pump":"flow","target":4,"seconds":20,"transition":"fast","limit":0},{"pump":"pressure","target":0.1,"seconds":20,"transition":"fast","limit":0},{"pump":"flow","target":11,"seconds":30,"transition":"fast","limit":0},{"pump":"pressure","target":0.1,"seconds":25,"transition":"fast","limit":0},{"pump":"flow","target":11,"seconds":30,"transition":"fast","limit":0},{"pump":"pressure","target":0.1,"seconds":30,"transition":"fast","limit":0},{"pump":"flow","target":11,"seconds":30,"transition":"fast","limit":0}],"conditional":true,"eventDriven":false,"sourceSha":"98cb9ca670077d6dd4597751edc303064451ca49"},"Tea_portafilter__Blue_Willow_black_phoenix_1.json":{"title":"Tea portafilter/Oolong 1st extraction","steps":[{"pump":"flow","target":4,"seconds":20,"transition":"fast","limit":0},{"pump":"pressure","target":0.1,"seconds":20,"transition":"fast","limit":0},{"pump":"flow","target":11,"seconds":8,"transition":"fast","limit":0},{"pump":"pressure","target":0.1,"seconds":20,"transition":"fast","limit":0},{"pump":"flow","target":11,"seconds":8,"transition":"fast","limit":0},{"pump":"pressure","target":0.1,"seconds":20,"transition":"fast","limit":0},{"pump":"flow","target":11,"seconds":8,"transition":"fast","limit":0}],"conditional":true,"eventDriven":false,"sourceSha":"36dbb58c68485445aa7673905a626b163809c899"},"Tea_portafilter__Blue_Willow_black_phoenix_2.json":{"title":"Tea portafilter/Oolong 2nd extraction","steps":[{"pump":"flow","target":4,"seconds":20,"transition":"fast","limit":0},{"pump":"pressure","target":0.1,"seconds":60,"transition":"fast","limit":0},{"pump":"flow","target":11,"seconds":8,"transition":"fast","limit":0}],"conditional":true,"eventDriven":false,"sourceSha":"352779175e9e8ca6b85544b4909e960fffb42180"},"Tea_portafilter__Blue_Willow_lunar_winter.json":{"title":"Tea portafilter/Yunnan green","steps":[{"pump":"flow","target":4,"seconds":20,"transition":"fast","limit":0},{"pump":"pressure","target":0.1,"seconds":20,"transition":"fast","limit":0},{"pump":"flow","target":11,"seconds":8,"transition":"fast","limit":0},{"pump":"pressure","target":0.1,"seconds":15,"transition":"fast","limit":0},{"pump":"flow","target":11,"seconds":8,"transition":"fast","limit":0},{"pump":"pressure","target":0.1,"seconds":15,"transition":"fast","limit":0},{"pump":"flow","target":11,"seconds":8,"transition":"fast","limit":0}],"conditional":true,"eventDriven":false,"sourceSha":"7d576ebb822561b2f34cdb3a1ac7ce4ef08e7c43"},"Traditional_lever_machine.json":{"title":"Traditional lever machine","steps":[{"pump":"flow","target":8,"seconds":2,"transition":"fast","limit":0},{"pump":"flow","target":8,"seconds":18,"transition":"fast","limit":0},{"pump":"pressure","target":9,"seconds":3,"transition":"fast","limit":0},{"pump":"pressure","target":9,"seconds":5,"transition":"fast","limit":0},{"pump":"pressure","target":0,"seconds":27,"transition":"smooth","limit":0}],"conditional":true,"eventDriven":false,"sourceSha":"d762126b6f8b669bae63450a8646409af4d412d9"},"Trendy_6_bar_low_pressure_shot.json":{"title":"Trendy 6 bar low pressure shot","steps":[{"pump":"flow","target":8,"seconds":2,"transition":"fast","limit":0},{"pump":"flow","target":8,"seconds":18,"transition":"fast","limit":0},{"pump":"pressure","target":6,"seconds":3,"transition":"fast","limit":0},{"pump":"pressure","target":6,"seconds":32,"transition":"fast","limit":0}],"conditional":true,"eventDriven":false,"sourceSha":"eed6ec55a2b9a0fa578d3baf4ed4bd3ee01fd731"},"TurboBloom.json":{"title":"TurboBloom","steps":[{"pump":"flow","target":8,"seconds":2,"transition":"fast","limit":0},{"pump":"flow","target":8,"seconds":20,"transition":"fast","limit":0},{"pump":"flow","target":0,"seconds":40,"transition":"fast","limit":0},{"pump":"pressure","target":6,"seconds":4,"transition":"fast","limit":0},{"pump":"pressure","target":6,"seconds":2,"transition":"fast","limit":4.5},{"pump":"pressure","target":3,"seconds":40,"transition":"smooth","limit":4.5}],"conditional":true,"eventDriven":false,"sourceSha":"40fdd1b40d8d89ad97d89838058aaef52a09e480"},"TurboTurbo.json":{"title":"TurboTurbo","steps":[{"pump":"pressure","target":5.999999999999996,"seconds":2,"transition":"fast","limit":0},{"pump":"pressure","target":5.999999999999996,"seconds":2,"transition":"fast","limit":0},{"pump":"flow","target":5,"seconds":20,"transition":"fast","limit":0},{"pump":"pressure","target":6,"seconds":5,"transition":"fast","limit":6},{"pump":"pressure","target":4,"seconds":15,"transition":"smooth","limit":4.5},{"pump":"pressure","target":4,"seconds":60,"transition":"smooth","limit":4.5}],"conditional":true,"eventDriven":false,"sourceSha":"5bc2a7dabd351c835657e5eb9b979decc7092c61"},"Two_spring_lever_machine_to_9_bar.json":{"title":"Two spring lever machine to 9 bar","steps":[{"pump":"flow","target":8,"seconds":2,"transition":"fast","limit":0},{"pump":"flow","target":8,"seconds":18,"transition":"fast","limit":0},{"pump":"pressure","target":9,"seconds":3,"transition":"fast","limit":0},{"pump":"pressure","target":9,"seconds":5,"transition":"fast","limit":0},{"pump":"pressure","target":0,"seconds":26,"transition":"smooth","limit":0}],"conditional":true,"eventDriven":false,"sourceSha":"89aca863209c138a13750ccfb66c92b19cd47908"},"Weiss_advanced_spring_lever.json":{"title":"Weiss advanced spring lever","steps":[{"pump":"flow","target":8,"seconds":10,"transition":"fast","limit":0},{"pump":"pressure","target":9,"seconds":3,"transition":"fast","limit":0},{"pump":"pressure","target":6,"seconds":30,"transition":"smooth","limit":1.5},{"pump":"flow","target":1.5,"seconds":30,"transition":"smooth","limit":6}],"conditional":true,"eventDriven":false,"sourceSha":"f8749c2487d474812e4a0074583b8c2c090bfd07"},"adaptive_allonge.json":{"title":"Gagné/Adaptive Allongé 94C v1.0","steps":[{"pump":"flow","target":4,"seconds":15,"transition":"fast","limit":0},{"pump":"pressure","target":8.6,"seconds":4,"transition":"fast","limit":0},{"pump":"flow","target":6,"seconds":127,"transition":"fast","limit":0},{"pump":"flow","target":5.5,"seconds":127,"transition":"fast","limit":0},{"pump":"flow","target":5.2,"seconds":127,"transition":"fast","limit":0},{"pump":"flow","target":5,"seconds":127,"transition":"fast","limit":0},{"pump":"flow","target":4.9,"seconds":127,"transition":"fast","limit":0},{"pump":"flow","target":4.8,"seconds":127,"transition":"fast","limit":0},{"pump":"flow","target":4.7,"seconds":127,"transition":"fast","limit":0},{"pump":"flow","target":4.6,"seconds":127,"transition":"fast","limit":0},{"pump":"flow","target":4.5,"seconds":127,"transition":"fast","limit":0},{"pump":"flow","target":4.4,"seconds":127,"transition":"fast","limit":0},{"pump":"flow","target":4.3,"seconds":127,"transition":"fast","limit":0},{"pump":"flow","target":4.2,"seconds":127,"transition":"fast","limit":0},{"pump":"flow","target":4.1,"seconds":127,"transition":"fast","limit":0},{"pump":"flow","target":4,"seconds":127,"transition":"fast","limit":0},{"pump":"flow","target":3.8,"seconds":127,"transition":"fast","limit":0},{"pump":"flow","target":3.4,"seconds":127,"transition":"fast","limit":0},{"pump":"flow","target":3,"seconds":127,"transition":"fast","limit":0},{"pump":"flow","target":1,"seconds":127,"transition":"fast","limit":0}],"conditional":true,"eventDriven":false,"sourceSha":"89a0e1b3dae1cef5bce125dadac54e0aefd223c0"},"adaptive_espresso.json":{"title":"Gagné/Adaptive Shot 92C v1.0","steps":[{"pump":"flow","target":3.5,"seconds":15,"transition":"fast","limit":0},{"pump":"pressure","target":8.6,"seconds":4,"transition":"fast","limit":0},{"pump":"flow","target":3.5,"seconds":127,"transition":"fast","limit":0},{"pump":"flow","target":3.3,"seconds":127,"transition":"fast","limit":0},{"pump":"flow","target":3.1,"seconds":127,"transition":"fast","limit":0},{"pump":"flow","target":2.9,"seconds":127,"transition":"fast","limit":0},{"pump":"flow","target":2.7,"seconds":127,"transition":"fast","limit":0},{"pump":"flow","target":2.6,"seconds":127,"transition":"fast","limit":0},{"pump":"flow","target":2.5,"seconds":127,"transition":"fast","limit":0},{"pump":"flow","target":2.4,"seconds":127,"transition":"fast","limit":0},{"pump":"flow","target":2.3,"seconds":127,"transition":"fast","limit":0},{"pump":"flow","target":2.2,"seconds":127,"transition":"fast","limit":0},{"pump":"flow","target":2.1,"seconds":127,"transition":"fast","limit":0},{"pump":"flow","target":2,"seconds":127,"transition":"fast","limit":0},{"pump":"flow","target":1.8,"seconds":127,"transition":"fast","limit":0},{"pump":"flow","target":1.6,"seconds":127,"transition":"fast","limit":0},{"pump":"flow","target":1.4,"seconds":127,"transition":"fast","limit":0},{"pump":"flow","target":1.2,"seconds":127,"transition":"fast","limit":0},{"pump":"flow","target":1,"seconds":127,"transition":"fast","limit":0},{"pump":"flow","target":0.5,"seconds":127,"transition":"fast","limit":0}],"conditional":true,"eventDriven":false,"sourceSha":"87185eac2defc8c153d2ca2aef4eee6b837fc20c"},"advanced_spring_lever.json":{"title":"Advanced spring lever","steps":[{"pump":"flow","target":6,"seconds":20,"transition":"fast","limit":0},{"pump":"pressure","target":9,"seconds":10,"transition":"fast","limit":0},{"pump":"pressure","target":4,"seconds":20,"transition":"smooth","limit":0},{"pump":"pressure","target":4,"seconds":10,"transition":"smooth","limit":0},{"pump":"flow","target":1,"seconds":30,"transition":"smooth","limit":0}],"conditional":true,"eventDriven":false,"sourceSha":"a79f66926e13533296aeac8227eb1bd05bf444ac"},"baseline_hc.json":{"title":"Baseline • High Contact • 8 Bar","steps":[{"pump":"flow","target":12,"seconds":15,"transition":"fast","limit":0},{"pump":"flow","target":0,"seconds":6,"transition":"fast","limit":0},{"pump":"pressure","target":8,"seconds":90,"transition":"fast","limit":0.75}],"conditional":true,"eventDriven":false,"sourceSha":"1e60d4c20fa4114552390304118abded6872433e"},"baseline_lc.json":{"title":"Baseline • Low Contact • 4 Bar","steps":[{"pump":"flow","target":12,"seconds":10,"transition":"fast","limit":0},{"pump":"flow","target":0,"seconds":2,"transition":"fast","limit":0},{"pump":"pressure","target":4,"seconds":90,"transition":"fast","limit":2.5}],"conditional":true,"eventDriven":false,"sourceSha":"c65a0acfdab2e10f10d506d2bdfa908b96d1e62f"},"baseline_mc.json":{"title":"Baseline • Medium Contact • 6 Bar","steps":[{"pump":"flow","target":12,"seconds":15,"transition":"fast","limit":0},{"pump":"flow","target":0,"seconds":4,"transition":"fast","limit":0},{"pump":"pressure","target":6,"seconds":90,"transition":"fast","limit":1.5}],"conditional":true,"eventDriven":false,"sourceSha":"effc65b2c8c58a950dd84baa3804ec2941a141f6"},"baseline_ulc.json":{"title":"Baseline • Ultra Low Contact","steps":[{"pump":"flow","target":12,"seconds":30,"transition":"fast","limit":0},{"pump":"flow","target":0,"seconds":0.5,"transition":"fast","limit":0},{"pump":"flow","target":12,"seconds":90,"transition":"fast","limit":0}],"conditional":true,"eventDriven":false,"sourceSha":"4f7947328dc21fac922467ec71bd8ec29122d74a"},"best_practice.json":{"title":"Adaptive v2","steps":[{"pump":"flow","target":8,"seconds":5,"transition":"fast","limit":0},{"pump":"flow","target":8,"seconds":12,"transition":"fast","limit":0},{"pump":"pressure","target":3,"seconds":12,"transition":"fast","limit":0},{"pump":"pressure","target":0.1,"seconds":6,"transition":"fast","limit":0},{"pump":"pressure","target":11,"seconds":6,"transition":"smooth","limit":3.5},{"pump":"flow","target":1.5,"seconds":0,"transition":"fast","limit":9.5},{"pump":"flow","target":3.5,"seconds":60,"transition":"smooth","limit":9.5}],"conditional":true,"eventDriven":true,"sourceSha":"ea76773d43628f14b11012d2fc31f39e170b4e97"},"best_practice_light.json":{"title":"Best practice (light roast)","steps":[{"pump":"pressure","target":3,"seconds":12,"transition":"fast","limit":0},{"pump":"pressure","target":3,"seconds":12,"transition":"fast","limit":0},{"pump":"pressure","target":1.5,"seconds":13,"transition":"smooth","limit":0},{"pump":"pressure","target":10.5,"seconds":6,"transition":"smooth","limit":0},{"pump":"flow","target":3.4,"seconds":30,"transition":"smooth","limit":9.5}],"conditional":true,"eventDriven":false,"sourceSha":"97c9f547ff337c98f307c435d9856bba408f554b"},"best_practice_v3.json":{"title":"Adaptive v3","steps":[{"pump":"flow","target":8,"seconds":5,"transition":"fast","limit":0},{"pump":"flow","target":8,"seconds":12,"transition":"fast","limit":0},{"pump":"pressure","target":3,"seconds":12,"transition":"fast","limit":0},{"pump":"pressure","target":0.1,"seconds":6,"transition":"fast","limit":0},{"pump":"pressure","target":11,"seconds":6,"transition":"smooth","limit":3.5},{"pump":"flow","target":1.5,"seconds":0,"transition":"fast","limit":8.6},{"pump":"flow","target":3.5,"seconds":60,"transition":"smooth","limit":8.6}],"conditional":true,"eventDriven":true,"sourceSha":"5af3403c0d0f715702c3ddb3b99a663a5a1b475f"},"cold_brew.json":{"title":"Pour over basket/Cold brew 22g in, 375ml out","steps":[{"pump":"flow","target":6,"seconds":14,"transition":"fast","limit":0},{"pump":"pressure","target":0,"seconds":30,"transition":"fast","limit":0},{"pump":"flow","target":2.5,"seconds":60,"transition":"fast","limit":0},{"pump":"pressure","target":0,"seconds":30,"transition":"fast","limit":0},{"pump":"flow","target":2,"seconds":60,"transition":"fast","limit":0},{"pump":"pressure","target":0,"seconds":30,"transition":"fast","limit":0},{"pump":"flow","target":2,"seconds":52,"transition":"fast","limit":0},{"pump":"flow","target":0.1,"seconds":2,"transition":"fast","limit":0}],"conditional":true,"eventDriven":false,"sourceSha":"94bdb4fadb31a7d9a07e4476dca8cae90ab7e923"},"cremina.json":{"title":"Cremina lever machine","steps":[{"pump":"pressure","target":1.1,"seconds":2,"transition":"fast","limit":0},{"pump":"pressure","target":1.1,"seconds":3,"transition":"fast","limit":0},{"pump":"pressure","target":1.1,"seconds":10,"transition":"fast","limit":0},{"pump":"pressure","target":9,"seconds":10,"transition":"smooth","limit":0},{"pump":"pressure","target":3,"seconds":50,"transition":"smooth","limit":0}],"conditional":true,"eventDriven":false,"sourceSha":"316beb8f5aac207bd1d92e1ba5746a178fe87b90"},"easy_blooming_active_pressure_decline.json":{"title":"Easy blooming - active pressure decline","steps":[{"pump":"flow","target":6.000000000000007,"seconds":2,"transition":"fast","limit":0},{"pump":"flow","target":6.000000000000007,"seconds":20,"transition":"fast","limit":0},{"pump":"flow","target":0,"seconds":60,"transition":"fast","limit":0},{"pump":"pressure","target":6.9999999999999964,"seconds":4,"transition":"fast","limit":0},{"pump":"pressure","target":6.9999999999999964,"seconds":4,"transition":"fast","limit":0},{"pump":"pressure","target":5.699999999999997,"seconds":5,"transition":"smooth","limit":0},{"pump":"pressure","target":5.899999999999997,"seconds":40,"transition":"fast","limit":0},{"pump":"pressure","target":6.9999999999999964,"seconds":8,"transition":"fast","limit":0},{"pump":"pressure","target":5.799999999999996,"seconds":8,"transition":"smooth","limit":0},{"pump":"pressure","target":5.899999999999997,"seconds":40,"transition":"fast","limit":0},{"pump":"pressure","target":6.9999999999999964,"seconds":30,"transition":"fast","limit":0},{"pump":"pressure","target":5.899999999999997,"seconds":40,"transition":"smooth","limit":0}],"conditional":true,"eventDriven":false,"sourceSha":"5463e4039240e49dc01c8c492c799b0a2d2e0c90"},"filter3.json":{"title":"Filter3","steps":[{"pump":"flow","target":5,"seconds":15,"transition":"fast","limit":5},{"pump":"flow","target":0,"seconds":30,"transition":"fast","limit":0},{"pump":"flow","target":1.1,"seconds":30,"transition":"fast","limit":0},{"pump":"flow","target":1.1,"seconds":30,"transition":"fast","limit":0},{"pump":"flow","target":1.1,"seconds":60,"transition":"fast","limit":0},{"pump":"flow","target":1.1,"seconds":100,"transition":"fast","limit":0},{"pump":"flow","target":0,"seconds":10,"transition":"fast","limit":0}],"conditional":true,"eventDriven":false,"sourceSha":"7e317928c47d4fec978e842c1ed936b155479dfc"},"icbinf.json":{"title":"I Can't Believe It's Not Filter","steps":[{"pump":"flow","target":1,"seconds":20,"transition":"fast","limit":0},{"pump":"flow","target":0,"seconds":1,"transition":"fast","limit":0},{"pump":"flow","target":1,"seconds":127,"transition":"fast","limit":0},{"pump":"flow","target":1,"seconds":127,"transition":"fast","limit":0},{"pump":"flow","target":1,"seconds":127,"transition":"fast","limit":0},{"pump":"flow","target":1,"seconds":127,"transition":"fast","limit":0}],"conditional":true,"eventDriven":false,"sourceSha":"31947cec636fb252750914e131dea4503e2edb3f"},"kalita_20.json":{"title":"Pour over basket/Kalita 20g in, 340ml out","steps":[{"pump":"flow","target":6,"seconds":11,"transition":"fast","limit":0},{"pump":"pressure","target":0,"seconds":30,"transition":"fast","limit":0},{"pump":"flow","target":6,"seconds":20,"transition":"fast","limit":0},{"pump":"pressure","target":0,"seconds":30,"transition":"fast","limit":0},{"pump":"flow","target":6,"seconds":20,"transition":"fast","limit":0},{"pump":"pressure","target":0,"seconds":35,"transition":"fast","limit":0},{"pump":"flow","target":6,"seconds":19,"transition":"fast","limit":0},{"pump":"flow","target":0.1,"seconds":1,"transition":"fast","limit":0}],"conditional":true,"eventDriven":false,"sourceSha":"e6fad0163ed48ea4cfe374f2906da147c7a78f92"},"manual_flow.json":{"title":"GHC/manual flow control","steps":[{"pump":"flow","target":0,"seconds":60,"transition":"fast","limit":9},{"pump":"flow","target":0,"seconds":60,"transition":"smooth","limit":9}],"conditional":false,"eventDriven":false,"sourceSha":"1ffb1baa38c3f7a7fbc0a18a0f2794c2cd9668e6"},"manual_pressure.json":{"title":"GHC/manual pressure control","steps":[{"pump":"pressure","target":0,"seconds":3,"transition":"fast","limit":0},{"pump":"pressure","target":0,"seconds":57,"transition":"fast","limit":0},{"pump":"pressure","target":0,"seconds":60,"transition":"smooth","limit":0}],"conditional":false,"eventDriven":false,"sourceSha":"4c4fffe1a325d2b2c443b1c5ad2ce1497715ea99"},"psph.json":{"title":"PSPH","steps":[{"pump":"flow","target":4,"seconds":2,"transition":"fast","limit":0},{"pump":"flow","target":4,"seconds":20,"transition":"fast","limit":0},{"pump":"flow","target":7,"seconds":60,"transition":"fast","limit":2}],"conditional":true,"eventDriven":false,"sourceSha":"529998bec75347797ae41c6e20cee79991cbc5f4"},"rao_allonge.json":{"title":"Rao Allongé","steps":[{"pump":"flow","target":4.5,"seconds":2,"transition":"fast","limit":8.6},{"pump":"flow","target":4.5,"seconds":60,"transition":"fast","limit":8.6}],"conditional":true,"eventDriven":false,"sourceSha":"cc0cfa219aa6814eb599f203ec53469cb305673c"},"rohan-soup.json":{"title":"Soup 58","steps":[{"pump":"flow","target":2,"seconds":2,"transition":"fast","limit":0},{"pump":"flow","target":2,"seconds":60,"transition":"fast","limit":0},{"pump":"flow","target":3,"seconds":60,"transition":"fast","limit":2}],"conditional":true,"eventDriven":false,"sourceSha":"afd7e2189a1b658e0ef01f8365acb365eff04129"},"tea_in_a_basket.json":{"title":"Tea/in a basket","steps":[{"pump":"flow","target":4,"seconds":4,"transition":"fast","limit":0},{"pump":"flow","target":0.5,"seconds":5,"transition":"fast","limit":0},{"pump":"flow","target":0,"seconds":10,"transition":"fast","limit":0},{"pump":"flow","target":3,"seconds":12,"transition":"fast","limit":0},{"pump":"flow","target":0,"seconds":12,"transition":"fast","limit":0},{"pump":"flow","target":3,"seconds":12,"transition":"fast","limit":0},{"pump":"flow","target":0,"seconds":12,"transition":"fast","limit":0},{"pump":"flow","target":3,"seconds":12,"transition":"fast","limit":0},{"pump":"flow","target":0,"seconds":12,"transition":"fast","limit":0},{"pump":"flow","target":3,"seconds":12,"transition":"fast","limit":0},{"pump":"flow","target":0.1,"seconds":12,"transition":"fast","limit":0},{"pump":"flow","target":3,"seconds":12,"transition":"fast","limit":0},{"pump":"flow","target":0,"seconds":10,"transition":"fast","limit":0},{"pump":"flow","target":3,"seconds":10,"transition":"fast","limit":0},{"pump":"flow","target":0,"seconds":10,"transition":"fast","limit":0},{"pump":"flow","target":3,"seconds":10,"transition":"fast","limit":0}],"conditional":true,"eventDriven":false,"sourceSha":"e07bbf406e3ab72127687693491620fd149e57b3"},"tea_portafilter.json":{"title":"Tea portafilter/black tea","steps":[{"pump":"flow","target":11,"seconds":20,"transition":"fast","limit":0},{"pump":"pressure","target":0.1,"seconds":30,"transition":"fast","limit":0},{"pump":"flow","target":11,"seconds":12,"transition":"fast","limit":0},{"pump":"pressure","target":0.1,"seconds":40,"transition":"fast","limit":0},{"pump":"flow","target":11,"seconds":12,"transition":"fast","limit":0},{"pump":"pressure","target":0.1,"seconds":40,"transition":"fast","limit":0},{"pump":"flow","target":11,"seconds":11,"transition":"fast","limit":0},{"pump":"flow","target":11,"seconds":13,"transition":"fast","limit":0}],"conditional":true,"eventDriven":false,"sourceSha":"c56bf3208c3e825cbcd707c23a2701ebbb00345c"},"tea_portafilter_chinese_green.json":{"title":"Tea portafilter/Chinese green","steps":[{"pump":"flow","target":11,"seconds":20,"transition":"fast","limit":0},{"pump":"pressure","target":0.1,"seconds":30,"transition":"fast","limit":0},{"pump":"flow","target":11,"seconds":12,"transition":"fast","limit":0},{"pump":"pressure","target":0.1,"seconds":40,"transition":"fast","limit":0},{"pump":"flow","target":11,"seconds":12,"transition":"fast","limit":0},{"pump":"pressure","target":0.1,"seconds":40,"transition":"fast","limit":0},{"pump":"flow","target":11,"seconds":11,"transition":"fast","limit":0},{"pump":"flow","target":11,"seconds":13,"transition":"fast","limit":0}],"conditional":true,"eventDriven":false,"sourceSha":"1b5a8799e0116c548faab9158bcbd8f440b46cf0"},"tea_portafilter_japanese_green.json":{"title":"Tea portafilter/Japanese green","steps":[{"pump":"flow","target":11,"seconds":20,"transition":"fast","limit":0},{"pump":"pressure","target":0.1,"seconds":30,"transition":"fast","limit":0},{"pump":"flow","target":11,"seconds":12,"transition":"fast","limit":0},{"pump":"pressure","target":0.1,"seconds":40,"transition":"fast","limit":0},{"pump":"flow","target":11,"seconds":12,"transition":"fast","limit":0},{"pump":"pressure","target":0.1,"seconds":40,"transition":"fast","limit":0},{"pump":"flow","target":11,"seconds":11,"transition":"fast","limit":0},{"pump":"flow","target":11,"seconds":13,"transition":"fast","limit":0}],"conditional":true,"eventDriven":false,"sourceSha":"fc08672a8101c9159669de0fa3961808c2c2d857"},"tea_portafilter_no_pressure.json":{"title":"Tea portafilter/no pressure","steps":[{"pump":"flow","target":8,"seconds":20,"transition":"fast","limit":0},{"pump":"pressure","target":0,"seconds":5,"transition":"fast","limit":0},{"pump":"flow","target":0,"seconds":25,"transition":"fast","limit":0},{"pump":"flow","target":7,"seconds":15,"transition":"fast","limit":0},{"pump":"pressure","target":0,"seconds":5,"transition":"fast","limit":0},{"pump":"flow","target":0,"seconds":25,"transition":"fast","limit":0},{"pump":"flow","target":7,"seconds":15,"transition":"fast","limit":0},{"pump":"pressure","target":0,"seconds":5,"transition":"fast","limit":0},{"pump":"flow","target":0,"seconds":25,"transition":"fast","limit":0},{"pump":"flow","target":7,"seconds":11,"transition":"fast","limit":0},{"pump":"flow","target":6,"seconds":15,"transition":"fast","limit":0}],"conditional":true,"eventDriven":false,"sourceSha":"1f544fca04259cdd5b429f2ee209af277ddb4567"},"tea_portafilter_oolong.json":{"title":"Tea portafilter/oolong","steps":[{"pump":"flow","target":11,"seconds":20,"transition":"fast","limit":0},{"pump":"pressure","target":0.1,"seconds":30,"transition":"fast","limit":0},{"pump":"flow","target":11,"seconds":12,"transition":"fast","limit":0},{"pump":"pressure","target":0.1,"seconds":40,"transition":"fast","limit":0},{"pump":"flow","target":11,"seconds":12,"transition":"fast","limit":0},{"pump":"pressure","target":0.1,"seconds":40,"transition":"fast","limit":0},{"pump":"flow","target":11,"seconds":11,"transition":"fast","limit":0},{"pump":"flow","target":11,"seconds":13,"transition":"fast","limit":0}],"conditional":true,"eventDriven":false,"sourceSha":"9f99e7a71b672f56bdce877a3591716cc3057941"},"tea_portafilter_oolong_dark.json":{"title":"Tea portafilter/oolong dark","steps":[{"pump":"flow","target":4,"seconds":20,"transition":"fast","limit":0},{"pump":"pressure","target":0.1,"seconds":20,"transition":"fast","limit":0},{"pump":"flow","target":11,"seconds":30,"transition":"fast","limit":0},{"pump":"pressure","target":0.1,"seconds":25,"transition":"fast","limit":0},{"pump":"flow","target":11,"seconds":30,"transition":"fast","limit":0},{"pump":"pressure","target":0.1,"seconds":30,"transition":"fast","limit":0},{"pump":"flow","target":11,"seconds":30,"transition":"fast","limit":0},{"pump":"pressure","target":0.1,"seconds":40,"transition":"fast","limit":0},{"pump":"flow","target":11,"seconds":30,"transition":"fast","limit":0}],"conditional":true,"eventDriven":false,"sourceSha":"37975ed08a325daac371606cbf3a72c04e4a25d9"},"tea_portafilter_pressurized.json":{"title":"Tea portafilter/Pressurized tea","steps":[{"pump":"flow","target":10,"seconds":20,"transition":"fast","limit":0},{"pump":"pressure","target":2,"seconds":30,"transition":"fast","limit":0},{"pump":"flow","target":10,"seconds":12,"transition":"fast","limit":0},{"pump":"pressure","target":2,"seconds":40,"transition":"fast","limit":0},{"pump":"flow","target":10,"seconds":12,"transition":"fast","limit":0},{"pump":"pressure","target":2,"seconds":40,"transition":"fast","limit":0},{"pump":"flow","target":11,"seconds":22,"transition":"fast","limit":0}],"conditional":true,"eventDriven":false,"sourceSha":"a533569ff1a4c03d930cca0f7dc64c50c8208f43"},"tea_portafilter_tisane.json":{"title":"Tea portafilter/tisane","steps":[{"pump":"flow","target":11,"seconds":20,"transition":"fast","limit":0},{"pump":"pressure","target":0.1,"seconds":30,"transition":"fast","limit":0},{"pump":"flow","target":11,"seconds":12,"transition":"fast","limit":0},{"pump":"pressure","target":0.1,"seconds":40,"transition":"fast","limit":0},{"pump":"flow","target":11,"seconds":12,"transition":"fast","limit":0},{"pump":"pressure","target":0.1,"seconds":40,"transition":"fast","limit":0},{"pump":"flow","target":11,"seconds":11,"transition":"fast","limit":0},{"pump":"flow","target":11,"seconds":13,"transition":"fast","limit":0}],"conditional":true,"eventDriven":false,"sourceSha":"7626de932da75d9b06415034ac1d7f30eb70c5f0"},"v60-15g.json":{"title":"Pour over basket/V60 15g in, 250g out","steps":[{"pump":"flow","target":8,"seconds":8,"transition":"fast","limit":0},{"pump":"pressure","target":0,"seconds":30,"transition":"fast","limit":0},{"pump":"flow","target":8,"seconds":12,"transition":"fast","limit":0},{"pump":"pressure","target":0,"seconds":30,"transition":"fast","limit":0},{"pump":"flow","target":8,"seconds":12,"transition":"fast","limit":0},{"pump":"pressure","target":0,"seconds":30,"transition":"fast","limit":0},{"pump":"flow","target":8,"seconds":11,"transition":"fast","limit":0}],"conditional":true,"eventDriven":false,"sourceSha":"90b35103587a5728341dedfd7304fb7b6ce8828b"},"v60-20g.json":{"title":"Pour over basket/V60 20g in, 340g out","steps":[{"pump":"flow","target":8,"seconds":10,"transition":"fast","limit":0},{"pump":"pressure","target":0,"seconds":30,"transition":"fast","limit":0},{"pump":"flow","target":8,"seconds":15,"transition":"fast","limit":0},{"pump":"pressure","target":0,"seconds":30,"transition":"fast","limit":0},{"pump":"flow","target":8,"seconds":15,"transition":"fast","limit":0},{"pump":"pressure","target":0,"seconds":35,"transition":"fast","limit":0},{"pump":"flow","target":8,"seconds":14,"transition":"fast","limit":0},{"pump":"flow","target":0.1,"seconds":1,"transition":"fast","limit":0}],"conditional":true,"eventDriven":false,"sourceSha":"e60714ed1c4e4a9a8fb78bdaf55e9a14ba7f53ba"},"v60-22g.json":{"title":"Pour over basket/V60 22g in, 375g out","steps":[{"pump":"flow","target":8,"seconds":11,"transition":"fast","limit":0},{"pump":"pressure","target":0,"seconds":30,"transition":"fast","limit":0},{"pump":"flow","target":8,"seconds":17,"transition":"fast","limit":0},{"pump":"pressure","target":0,"seconds":30,"transition":"fast","limit":0},{"pump":"flow","target":8,"seconds":16,"transition":"fast","limit":0},{"pump":"pressure","target":0,"seconds":35,"transition":"fast","limit":0},{"pump":"flow","target":8,"seconds":16,"transition":"fast","limit":0},{"pump":"flow","target":0.1,"seconds":1,"transition":"fast","limit":0}],"conditional":true,"eventDriven":false,"sourceSha":"950bc0f52ad7ab9c49a75e9cab0a82a245ec3c4b"},"weber_spring_clean.json":{"title":"Cleaning/Weber Spring Clean","steps":[{"pump":"flow","target":11,"seconds":20,"transition":"fast","limit":0},{"pump":"flow","target":11,"seconds":60,"transition":"fast","limit":0},{"pump":"flow","target":0.3,"seconds":127,"transition":"fast","limit":0},{"pump":"flow","target":0,"seconds":10,"transition":"fast","limit":0},{"pump":"pressure","target":0,"seconds":1,"transition":"fast","limit":0},{"pump":"flow","target":0.1,"seconds":20,"transition":"fast","limit":0},{"pump":"pressure","target":0,"seconds":1,"transition":"fast","limit":0},{"pump":"flow","target":0.1,"seconds":10,"transition":"fast","limit":0},{"pump":"pressure","target":0,"seconds":10,"transition":"fast","limit":0},{"pump":"flow","target":6,"seconds":30,"transition":"fast","limit":0},{"pump":"pressure","target":0,"seconds":10,"transition":"fast","limit":0},{"pump":"flow","target":4,"seconds":30,"transition":"fast","limit":0},{"pump":"pressure","target":0,"seconds":20,"transition":"fast","limit":0},{"pump":"flow","target":6,"seconds":20,"transition":"fast","limit":0},{"pump":"pressure","target":0,"seconds":30,"transition":"fast","limit":0}],"conditional":true,"eventDriven":false,"sourceSha":"5da47c398b180fd75c6bc3ebfaf73b97c154ca86"}}};
  let onlineCache = COMMUNITY.map(x => Object.assign({kind:"online",sourceId:"community"}, x));
  let skinCache = [];
  let refreshInfo = {online:null,skins:null};

  function log(m){try{host.log("[profiles-library] "+m);}catch(_){}}
  function jsonResponse(status,v){return {status,headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(v)};}
  function textResponse(status,type,v){return {status,headers:{"Content-Type":type},body:v};}
  function bodyObject(req) {
    if (!req || req.body === undefined) return {};
    try {
      const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
      return body && typeof body === "object" && !Array.isArray(body) ? body : null;
    } catch (_) { return null; }
  }
  // Decaid supplies timers and a fetch bridge, but does not forward AbortSignal.
  // Bound the whole response, including body reads. Never automatically retry writes.
  async function fetchText(url, init, timeoutMs) {
    const options = init || {};
    const write = options.method && options.method !== "GET";
    const limit = timeoutMs || (url.startsWith(LOCAL_API + "/") ? 5000 : 8000);
    let timer;
    const timeout = new Promise((_, reject) => {
      timer = setTimeout(() => reject(new Error(write
        ? "Import response timed out; the import may have completed. Check Decaid before retrying."
        : "Request timed out: " + url)), limit);
    });
    try {
      return await Promise.race([timeout, (async () => {
        const r = await fetch(url, options);
        const text = await r.text();
        if (!r.ok) {
          const error = new Error("HTTP " + r.status + " from " + url + ": " + text.slice(0, 160));
          error.status = r.status;
          throw error;
        }
        return text;
      })()]);
    } finally {
      clearTimeout(timer);
    }
  }
  async function fetchJson(url,init){const t=await fetchText(url,init);try{return JSON.parse(t);}catch(_){throw new Error("Invalid JSON from "+url);}}
  function nonEmpty(v,d){return v===undefined||v===null||String(v).trim()===""?d:String(v).trim();}
  function n(v, d, epsilon) {
    const value = v === undefined || v === null ? d : v;
    if ((typeof value !== "number" && typeof value !== "string") ||
        !/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i.test(String(value).trim()) ||
        !Number.isFinite(Number(value)) || Number(value) < -(epsilon || 0)) {
      throw new Error("Invalid numeric value: " + String(value).slice(0, 80));
    }
    return String(Number(value));
  }
  function maintenance(text){return /(^|[ _/.-])(test|testing|calibration|cleaning|clean|leak|steam)([ _/.-]|$)/i.test(text||"")||/weber[_ -]?spring[_ -]?clean/i.test(text||"");}
  function niceName(name){return String(name||"").replace(/\.(json|tcl)$/i,"").replace(/[_]+/g," ").replace(/\s+/g," ").trim();}
  function readBraced(text,start){let depth=0,escaped=false;for(let i=start;i<text.length;i++){const c=text[i];if(escaped){escaped=false;continue;}if(c==="\\"){escaped=true;continue;}if(c==="{")depth++;if(c==="}"){depth--;if(depth===0)return {value:text.slice(start+1,i),next:i+1};}}throw new Error("Malformed Tcl: unclosed brace");}
  function tclEscape(text, start) {
    const c = text[start + 1];
    if (c === undefined) throw new Error("Malformed Tcl: trailing backslash");
    if (c === "\n" || (c === "\r" && text[start + 2] === "\n")) {
      let next = start + (c === "\r" ? 3 : 2);
      while (text[next] === " " || text[next] === "\t") next++;
      return {value: " ", next};
    }
    const simple = {a: "\x07", b: "\b", f: "\f", n: "\n", r: "\r", t: "\t", v: "\x0b"};
    if (Object.prototype.hasOwnProperty.call(simple, c)) return {value: simple[c], next: start + 2};
    const digits = c === "x" ? 2 : c === "u" ? 4 : c === "U" ? 8 : 0;
    if (digits) {
      const match = text.slice(start + 2).match(new RegExp("^[0-9a-fA-F]{1," + digits + "}"));
      if (match) {
        const code = parseInt(match[0], 16);
        if (code > 0x10ffff) throw new Error("Malformed Tcl: invalid Unicode escape");
        return {value: String.fromCodePoint(code), next: start + 2 + match[0].length};
      }
    }
    const octal = text.slice(start + 1).match(/^[0-7]{1,3}/);
    if (octal) {
      const digits = parseInt(octal[0], 8) > 255 ? octal[0].slice(0, 2) : octal[0];
      return {value: String.fromCharCode(parseInt(digits, 8)), next: start + 1 + digits.length};
    }
    return {value: c, next: start + 2};
  }
  function readTclWord(text, start) {
    if (text[start] === "{") {
      const word = readBraced(text, start);
      word.value = word.value.replace(/\\\r?\n[ \t]*/g, " ");
      if (word.next < text.length && !/\s/.test(text[word.next])) throw new Error("Malformed Tcl: text after brace");
      return word;
    }
    const quoted = text[start] === '"';
    let i = start + (quoted ? 1 : 0), value = "";
    while (i < text.length) {
      if (quoted && text[i] === '"') {
        i++;
        if (i < text.length && !/\s/.test(text[i])) throw new Error("Malformed Tcl: text after quote");
        return {value, next: i};
      }
      if (!quoted && /\s/.test(text[i])) break;
      if (text[i] === "\\") {
        const escaped = tclEscape(text, i);
        value += escaped.value;
        i = escaped.next;
      } else value += text[i++];
    }
    if (quoted) throw new Error("Malformed Tcl: unclosed quote");
    return {value, next: i};
  }
  // Profile files contain data, not Tcl programs. Never evaluate substitutions.
  function parseTopLevelTcl(text) {
    const out = Object.create(null);
    let i = 0;
    while (i < text.length) {
      while (i < text.length && /\s/.test(text[i])) i++;
      if (i >= text.length) break;
      if (text[i] === "#") { while (i < text.length && text[i] !== "\n") i++; continue; }
      const key = readTclWord(text, i);
      i = key.next;
      while (text[i] === " " || text[i] === "\t") i++;
      if (i >= text.length || /[\r\n]/.test(text[i])) throw new Error("Malformed Tcl: missing value for " + key.value);
      let value;
      if (text[i] === "{" || text[i] === '"') {
        const word = readTclWord(text, i);
        value = word.value;
        i = word.next;
        while (text[i] === " " || text[i] === "\t") i++;
        if (i < text.length && !/[\r\n#]/.test(text[i])) throw new Error("Malformed Tcl: trailing data for " + key.value);
        while (i < text.length && !/[\r\n]/.test(text[i])) i++;
      } else {
        value = "";
        while (i < text.length && !/[\r\n]/.test(text[i])) {
          if (text[i] === "\\") { const escaped = tclEscape(text, i); value += escaped.value; i = escaped.next; }
          else value += text[i++];
        }
        value = value.trim();
      }
      out[key.value] = value;
    }
    return out;
  }
  function splitTclList(input) {
    const words = [];
    let i = 0;
    while (i < input.length) {
      while (i < input.length && /\s/.test(input[i])) i++;
      if (i >= input.length) break;
      const word = readTclWord(input, i);
      words.push(word.value);
      i = word.next;
    }
    return words;
  }
  function frameMap(t){const z=splitTclList(t.trim());if(z.length<2||z.length%2)throw new Error("Malformed advanced_shot frame");const o=Object.create(null);for(let i=0;i<z.length;i+=2)o[z[i]]=z[i+1];return o;}
  function limiter(v,r){return {value:n(v,"0"),range:n(r,"0.6")};}
  function advancedStep(raw){const pump=nonEmpty(raw.pump,"pressure");const st={name:nonEmpty(raw.name,""),pump,transition:nonEmpty(raw.transition,"fast"),temperature:n(raw.temperature,"0"),sensor:nonEmpty(raw.sensor,"coffee"),seconds:n(raw.seconds,"0"),volume:n(raw.volume,"0"),weight:n(raw.weight,"0")};st.flow=n(raw.flow,"0");st.pressure=n(raw.pressure,"0");const exits={pressure_over:["pressure","over","exit_pressure_over"],pressure_under:["pressure","under","exit_pressure_under"],flow_over:["flow","over","exit_flow_over"],flow_under:["flow","under","exit_flow_under"]};if(Number(n(raw.exit_if,"0"))!==0){if(!Object.prototype.hasOwnProperty.call(exits,raw.exit_type))throw new Error("Unsupported exit condition: "+raw.exit_type);const e=exits[raw.exit_type];st.exit={type:e[0],condition:e[1],value:n(raw[e[2]],undefined)};}if(raw.max_flow_or_pressure!==undefined||raw.max_flow_or_pressure_range!==undefined)st.limiter=limiter(raw.max_flow_or_pressure,raw.max_flow_or_pressure_range);for(const k of ["pump_mode","power","mode_max_pressure","lever_spring","lever_give","reserved"])if(raw[k]!==undefined)st[k]=raw[k];return st;}
  function commonProfile(map,steps,count){const ba={filter:"pourover",tea:"pourover",tea_portafilter:"pourover",descale:"cleaning"};const rb=nonEmpty(map.beverage_type,"espresso").toLowerCase();return {version:"2",title:nonEmpty(map.profile_title,""),author:nonEmpty(map.author,""),notes:nonEmpty(map.profile_notes,""),beverage_type:ba[rb]||rb,steps,tank_temperature:n(map.tank_desired_water_temperature,"0"),target_weight:n(map.final_desired_shot_weight_advanced!==undefined?map.final_desired_shot_weight_advanced:map.final_desired_shot_weight,"0"),target_volume:n(map.final_desired_shot_volume_advanced!==undefined?map.final_desired_shot_volume_advanced:map.final_desired_shot_volume,"0"),target_volume_count_start:String(count)};}
  function addPreinfusion(map,steps,state){const enabled=Number(n(map.espresso_temperature_steps_enabled,"0"))===1;const bump=enabled?Number(n(map.temp_bump_time_seconds,"2")):0;const total=Number(n(map.preinfusion_time,"0"));const f= n(map.preinfusion_flow_rate,"4");const stop=n(map.preinfusion_stop_pressure,"4");const temps=enabled?[n(map.espresso_temperature_0,map.espresso_temperature||0),n(map.espresso_temperature_1,map.espresso_temperature||0)]:[n(map.espresso_temperature,map.espresso_temperature||0),n(map.espresso_temperature,map.espresso_temperature||0)];const lens=enabled?[bump,Math.max(0,total-bump)]:[0,total];if(lens[0]>0){steps.push({name:"preinfusion temp boost",pump:"flow",transition:"fast",temperature:temps[0],sensor:"coffee",pressure:"1",flow:f,seconds:String(lens[0]),volume:"0",weight:"0",exit:{type:"pressure",condition:"over",value:stop}});state.count++;}if(lens[1]>0){steps.push({name:"preinfusion",pump:"flow",transition:"fast",temperature:temps[1],sensor:"coffee",pressure:"1",flow:f,seconds:String(lens[1]),volume:"0",weight:"0",exit:{type:"pressure",condition:"over",value:stop}});state.count++;}}
  function parseLegacyTclProfile(text){const map=parseTopLevelTcl(text);const aliases={settings_profile_advanced:"settings_2c",settings_2c2:"settings_2c",settings_2:"settings_2a",settings_profile_pressure:"settings_2a",settings_profile_flow:"settings_2b"};const raw=nonEmpty(map.settings_profile_type,"");const typ=aliases[raw]||raw;let steps=[],state={count:0};
    if(typ==="settings_2c"){const fs=splitTclList(nonEmpty(map.advanced_shot,""));if(!fs.length)throw new Error("Profile has no advanced_shot frames");steps=fs.map(x=>advancedStep(frameMap(x)));state.count=Number(n(map.final_desired_shot_volume_advanced_count_start,"0"));}
    else if(typ==="settings_2a"){addPreinfusion(map,steps,state);let hold=Number(n(map.espresso_hold_time,"0")),decl=Number(n(map.espresso_decline_time,"0"));const press=n(map.espresso_pressure,"9"),pend=n(map.pressure_end,"0"),temp2=n(map.espresso_temperature_2,map.espresso_temperature||0),temp3=n(map.espresso_temperature_3,map.espresso_temperature||0),mf=Number(n(map.maximum_flow,"0")),mr=n(map.maximum_flow_range_default,"1");const lim=mf?limiter(mf,mr):null;if(hold>0){if(hold>3){const x={name:"forced rise",pump:"pressure",transition:"fast",temperature:temp2,sensor:"coffee",pressure:press,flow:"0",seconds:"3",volume:"0",weight:"0"};if(lim)x.limiter=lim;steps.push(x);state.count++;hold-=3;}const h={name:"rise and hold",pump:"pressure",transition:"fast",temperature:temp2,sensor:"coffee",pressure:press,flow:"0",seconds:String(hold),volume:"0",weight:"0"};if(lim)h.limiter=lim;steps.push(h);}if(decl>0){if(hold<3&&decl>3){const x={name:"forced rise",pump:"pressure",transition:"fast",temperature:temp3,sensor:"coffee",pressure:press,flow:"0",seconds:"3",volume:"0",weight:"0"};if(lim)x.limiter=lim;steps.push(x);state.count++;decl-=3;}const d={name:"decline",pump:"pressure",transition:"smooth",temperature:temp3,sensor:"coffee",pressure:pend,flow:"0",seconds:String(decl),volume:"0",weight:"0"};if(lim)d.limiter=lim;steps.push(d);}}
    else if(typ==="settings_2b"){addPreinfusion(map,steps,state);const hold=Number(n(map.espresso_hold_time,"0")),decl=Number(n(map.espresso_decline_time,"0")),temp2=n(map.espresso_temperature_2,map.espresso_temperature||0),temp3=n(map.espresso_temperature_3,map.espresso_temperature||0),mp=Number(n(map.maximum_pressure,"0")),mr=n(map.maximum_pressure_range_default,".9"),lim=mp?limiter(mp,mr):null;if(hold>0){const h={name:"hold",pump:"flow",transition:"fast",temperature:temp2,sensor:"coffee",pressure:"0",flow:n(map.flow_profile_hold,"0"),seconds:String(hold),volume:"0",weight:"0"};if(lim)h.limiter=lim;steps.push(h);}if(decl>0){const d={name:"decline",pump:"flow",transition:"smooth",temperature:temp3,sensor:"coffee",pressure:"0",flow:n(map.flow_profile_decline,"0"),seconds:String(decl),volume:"0",weight:"0"};if(lim)d.limiter=lim;steps.push(d);}}
    else throw new Error("Unsupported legacy profile type: "+(typ||"unknown"));
    if(!steps.length)throw new Error("Profile has no usable steps");const profile=commonProfile(map,steps,state.count);if(!profile.title)throw new Error("Profile has no title");return profile;}
  function normalizeJsonProfile(raw){const p0=raw&&raw.profile&&raw.profile.steps?raw.profile:raw;if(!p0||typeof p0!=="object")throw new Error("JSON does not contain a profile");const p=Object.assign({},p0);p.version=nonEmpty(p.version,"2");p.title=nonEmpty(p.title,p.reference_file||"");p.author=nonEmpty(p.author,"");p.notes=nonEmpty(p.notes,"");p.beverage_type=nonEmpty(p.beverage_type,"espresso");p.tank_temperature=n(p.tank_temperature!==undefined?p.tank_temperature:p.tank_desired_water_temperature,"0");p.target_weight=n(p.target_weight!==undefined?p.target_weight:p.final_desired_shot_weight_advanced,"0");p.target_volume=n(p.target_volume!==undefined?p.target_volume:p.final_desired_shot_volume_advanced,"0");p.target_volume_count_start=n(p.target_volume_count_start!==undefined?p.target_volume_count_start:p.final_desired_shot_volume_advanced_count_start,"0");if(!Array.isArray(p.steps)||!p.steps.length)throw new Error("Profile has no steps");if(!p.title)throw new Error("Profile has no title");return validateProfile(p);}
  function validateProfile(profile) {
    if (profile.version !== "2") throw new Error("Unsupported profile version: " + profile.version);
    if (!["espresso", "calibrate", "cleaning", "manual", "pourover"].includes(profile.beverage_type)) {
      throw new Error("Unsupported beverage type: " + profile.beverage_type);
    }
    if (!Number.isInteger(Number(profile.target_volume_count_start))) throw new Error("Volume count start must be an integer");
    profile.steps.forEach((step, i) => {
      const label = "Step " + (i + 1) + ": ";
      if (!step || typeof step !== "object" || Array.isArray(step)) throw new Error(label + "expected a step object");
      if (!["pressure", "flow"].includes(step.pump)) throw new Error(label + "unsupported pump");
      if (!["fast", "smooth"].includes(step.transition)) throw new Error(label + "unsupported transition");
      if (!["coffee", "water"].includes(step.sensor)) throw new Error(label + "unsupported sensor");
      if (typeof step.name !== "string") throw new Error(label + "missing name");
      for (const key of ["seconds", "temperature", "volume", step.pump]) {
        try { n(step[key], undefined, key === "pressure" || key === "flow" ? 1e-9 : 0); } catch (_) { throw new Error(label + "invalid or missing " + key); }
      }
      for (const key of ["weight", "flow", "pressure"]) {
        if (step[key] !== undefined && step[key] !== null) n(step[key], undefined, key === "pressure" || key === "flow" ? 1e-9 : 0);
      }
      if (step.exit !== undefined && step.exit !== null) {
        const exit = step.exit;
        if (!exit || !["pressure", "flow"].includes(exit.type) || !["over", "under"].includes(exit.condition)) {
          throw new Error(label + "unsupported exit condition");
        }
        n(exit.value, undefined);
      }
      if (step.limiter !== undefined && step.limiter !== null) {
        n(step.limiter.value, undefined);
        n(step.limiter.range, undefined);
      }
    });
    return profile;
  }
  async function createProfile(profile, meta) {
    profile = normalizeJsonProfile(profile);
    const text = await fetchText(LOCAL_API + "/profiles", {
      method: "POST", headers: {"Content-Type": "application/json"},
      body: JSON.stringify({profile, metadata: meta || {}})
    });
    let record;
    try { record = JSON.parse(text); } catch (_) {
      throw new Error("Invalid import response; the import may have completed. Check Decaid before retrying.");
    }
    if (!record || typeof record !== "object" || Array.isArray(record)) {
      throw new Error("Invalid import response; check Decaid before retrying.");
    }
    return {success: true, title: profile.title, id: record.id || null};
  }
  async function getDefaults(){try{const a=await fetchJson(LOCAL_API+"/profiles/defaults");if(!Array.isArray(a))return [];return a.map(x=>({kind:"default",id:"default:"+x.filename,filename:x.filename,title:x.title||niceName(x.filename),author:x.author||"",source:"Decaid bundled",format:"json",maintenance:maintenance((x.title||"")+" "+x.filename)}));}catch(e){log("defaults: "+e.message);return [];}}
  async function getInstalled() {
    try {
      const data = await fetchJson(LOCAL_API + "/profiles");
      const records = Array.isArray(data) ? data : (data && Array.isArray(data.profiles) ? data.profiles : []);
      return records.filter(record => record && typeof record === "object").map(record => {
        const profile = record.profile || record;
        let preview = null;
        try { if (Array.isArray(profile.steps)) preview = profilePreview(profile); } catch (_) {}
        return {id: record.id || null, title: profile.title || record.title || "", author: profile.author || "",
          filename: record.metadata && record.metadata.filename || null, preview};
      }).filter(item => item.title);
    } catch (_) { return []; }
  }
  function profilePreview(raw) {
    const profile = normalizeJsonProfile(raw);
    const steps = profile.steps.map(step => ({
      pump: step.pump, target: Math.max(0, Number(step[step.pump])), seconds: Number(step.seconds),
      transition: step.transition, limit: step.limiter ? Number(step.limiter.value) : 0
    }));
    return {
      title: profile.title, steps,
      conditional: profile.steps.some(step => !!step.exit || Number(step.weight) > 0 || Number(step.volume) > 0) ||
        Number(profile.target_weight) > 0 || Number(profile.target_volume) > 0,
      eventDriven: steps.some(step => step.seconds === 0)
    };
  }
  function snapshotCatalog(){return SNAPSHOTS.map((x,i)=>({kind:"snapshot",id:"snapshot:"+i,title:x.profile.title,author:x.profile.author||"",source:"Offline snapshot · "+x.source.repository,format:"json",sourcePath:x.source.path,sha:x.source.sha,maintenance:maintenance(x.profile.title),preview:profilePreview(x.profile)}));}
  function onlineItem(source,item){const name=item.name||"";const ext=(name.split(".").pop()||"").toLowerCase();if(!["json","tcl"].includes(ext))return null;if(name.toLowerCase()==="manifest.json")return null;return {kind:"online",id:"online:"+source.id+":"+(item.sha||item.path||name),title:niceName(name),author:"",source:source.label,sourceId:source.id,format:ext,url:item.download_url||item.url,path:item.path||name,sha:item.sha||"",maintenance:maintenance(name)};}
  let onlineRefreshJob = null;
  function refreshOnline() {
    if (onlineRefreshJob) return onlineRefreshJob;
    onlineRefreshJob = (async () => {
      const errors = [];
      const groups = await Promise.all(ONLINE_SOURCES.map(async source => {
        try {
          const list = await fetchJson(source.api);
          if (!Array.isArray(list)) throw new Error("directory response is not an array");
          const items = [];
          for (const entry of list) {
            try {
              if (!entry || typeof entry !== "object" || typeof entry.name !== "string") throw new Error("invalid directory entry");
              const item = onlineItem(source, entry);
              if (item) items.push(item);
            } catch (error) { errors.push(source.label + ": " + error.message); }
          }
          return items;
        } catch (error) {
          errors.push(source.label + ": " + error.message + " (previous entries retained)");
          return onlineCache.filter(item => item.sourceId === source.id);
        }
      }));
      const merged = COMMUNITY.map(item => Object.assign({
        kind: "online", sourceId: "community", maintenance: maintenance(item.title)
      }, item)).concat(...groups);
      const seen = new Set();
      onlineCache = merged.filter(item => {
        const key = (item.sourceId || item.source) + "|" + (item.path || item.url || item.title);
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
      refreshInfo.online = {at: new Date().toISOString(), count: onlineCache.length, errors};
      return refreshInfo.online;
    })().finally(() => { onlineRefreshJob = null; });
    return onlineRefreshJob;
  }
  function skinAssetUrl(id,path){return LOCAL_API+"/webui/skin-assets/"+encodeURIComponent(id)+"/"+path.split("/").map(encodeURIComponent).join("/");}
  let skinRefreshJob = null;
  function refreshSkins() {
    if (skinRefreshJob) return skinRefreshJob;
    skinRefreshJob = (async () => {
      const errors = [];
      let raw;
      try {
        raw = await fetchJson(LOCAL_API + "/webui/skins");
        if (!Array.isArray(raw) && !(raw && Array.isArray(raw.skins))) throw new Error("invalid skin list");
      } catch (error) {
        refreshInfo.skins = {at: new Date().toISOString(), count: skinCache.length, errors: [error.message + " (previous entries retained)"]};
        return refreshInfo.skins;
      }
      const skins = Array.isArray(raw) ? raw : raw.skins;
      const candidates = ["profiles/manifest.json", "profiles/index.json", "assets/defaultProfiles/manifest.json", "profiles.json"];
      const groups = await Promise.all(skins.map(async skin => {
        if (!skin || typeof skin !== "object") { errors.push("Invalid skin entry"); return []; }
        const id = skin.id || skin.skinId || skin.name;
        if (typeof id !== "string" || !id) return [];
        const label = skin.name || skin.title || id;
        for (const path of candidates) {
          try {
            const text = await fetchText(skinAssetUrl(id, path), undefined, 1500);
            const data = JSON.parse(text);
            const list = Array.isArray(data) ? data : (data && Array.isArray(data.profiles) ? data.profiles : null);
            if (!list) throw new Error("invalid skin manifest");
            const directory = path.includes("/") ? path.slice(0, path.lastIndexOf("/") + 1) : "";
            const items = [];
            for (const entry of list) {
              if (typeof entry !== "string" && (!entry || typeof entry !== "object")) { errors.push(label + ": invalid profile entry"); continue; }
              const filename = typeof entry === "string" ? entry : (entry.filename || entry.path || "");
              if (typeof filename !== "string" || !/\.(json|tcl)$/i.test(filename)) continue;
              const full = filename.includes("/") ? filename : directory + filename;
              if (full.startsWith("/") || full.includes("\\") || full.split("/").some(part => part === ".." || part === "." || !part)) {
                errors.push(label + ": invalid profile path"); continue;
              }
              items.push({kind: "skin", id: "skin:" + id + ":" + full,
                title: entry.title || niceName(filename), author: entry.author || "",
                source: "Installed skin · " + label, skinId: id, path: full,
                format: filename.toLowerCase().endsWith(".tcl") ? "tcl" : "json", maintenance: maintenance(filename)});
            }
            return items;
          } catch (_) { /* Try the next supported manifest convention. */ }
        }
        const previous = skinCache.filter(item => item.skinId === id);
        if (previous.length) errors.push(label + ": no readable manifest (previous entries retained)");
        return previous;
      }));
      skinCache = [].concat(...groups);
      refreshInfo.skins = {at: new Date().toISOString(), count: skinCache.length, errors};
      return refreshInfo.skins;
    })().finally(() => { skinRefreshJob = null; });
    return skinRefreshJob;
  }
  async function catalog() {
    const [defaults, installed] = await Promise.all([getDefaults(), getInstalled()]);
    defaults.forEach(item => {
      const actual = installed.find(record => record.filename === item.filename && record.preview);
      const reference = DEFAULT_PREVIEWS.profiles[item.filename];
      item.preview = actual ? actual.preview : reference ? Object.assign({reference: true}, reference) : null;
    });
    return {pluginVersion: VERSION, snapshotDate: SNAPSHOT_DATE, snapshot: snapshotCatalog(), defaults,
      online: onlineCache.map(item => ({kind: item.kind, id: item.id, title: item.title, author: item.author || "",
        source: item.source, format: item.format || "tcl", maintenance: !!item.maintenance, path: item.path || ""})),
      skins: skinCache, installed, refreshInfo,
      counts: {snapshot: SNAPSHOTS.length, defaults: defaults.length, online: onlineCache.length, skins: skinCache.length, installed: installed.length}};
  }
  function findSnapshot(id) {
    if (typeof id !== "string" || id.trim() !== id || !/^snapshot:(0|[1-9]\d*)$/.test(id)) return null;
    const index = Number(id.slice(9));
    return Number.isSafeInteger(index) && SNAPSHOTS[index] ? SNAPSHOTS[index] : null;
  }
  function findOnline(id){return onlineCache.find(x=>x.id===id)||null;}
  function findSkin(id){return skinCache.find(x=>x.id===id)||null;}
  function decodeProfile(text, format) {
    return normalizeJsonProfile(format === "json" ? JSON.parse(text) : parseLegacyTclProfile(text));
  }
  const previewCache = new Map();
  const previewJobs = new Map();
  async function loadPreview(body) {
    if (body.kind === "snapshot") {
      const item = findSnapshot(body.id);
      if (!item) throw new Error("Unknown snapshot profile");
      return profilePreview(item.profile);
    }
    if (body.kind === "default") {
      const installed = await getInstalled();
      const actual = installed.find(item => item.filename === body.filename && item.preview);
      if (actual) return actual.preview;
      const reference = typeof body.filename === "string" && Object.prototype.hasOwnProperty.call(DEFAULT_PREVIEWS.profiles, body.filename) ? DEFAULT_PREVIEWS.profiles[body.filename] : null;
      if (!reference) throw new Error("No preview available for this bundled profile");
      return Object.assign({reference: true}, reference);
    }
    const item = body.kind === "online" ? findOnline(body.id) : body.kind === "skin" ? findSkin(body.id) : null;
    if (!item) throw new Error("Unknown profile. Refresh sources first.");
    const url = item.kind === "skin" ? skinAssetUrl(item.skinId, item.path) : item.url;
    if (!url) throw new Error("Profile has no readable URL");
    const key = url + "|" + (item.sha || "");
    const cached = previewCache.get(key);
    if (cached && Date.now() - cached.at < 300000) return cached.preview;
    if (previewJobs.has(key)) return previewJobs.get(key);
    const job = (async () => {
      const preview = profilePreview(decodeProfile(await fetchText(url), item.format || "tcl"));
      if (previewCache.size >= 240) previewCache.delete(previewCache.keys().next().value);
      previewCache.set(key, {at: Date.now(), preview});
      return preview;
    })().finally(() => { previewJobs.delete(key); });
    previewJobs.set(key, job);
    return job;
  }
  async function importDefault(filename){if(typeof filename!=="string"||!filename||filename.includes("/")||filename.includes("\\")||filename.includes(".."))throw new Error("Invalid default filename");const r=await fetchJson(LOCAL_API+"/profiles/restore/"+encodeURIComponent(filename),{method:"POST"});return {success:true,title:r.profile&&r.profile.title?r.profile.title:filename,id:r.id||null};}
  async function importText(text,format,meta){const profile=decodeProfile(text,format);const result=await createProfile(profile,meta);result.source=meta.source||"";return result;}
  async function importSnapshot(id){const x=findSnapshot(id);if(!x)throw new Error("Unknown snapshot profile");const r=await createProfile(x.profile,{comment:"Imported by Profiles Library 2.0.2 offline snapshot",source:x.source.name,sourceRepository:x.source.repository,sourcePath:x.source.path,sourceSha:x.source.sha,snapshotDate:x.source.snapshotDate});r.source="Offline snapshot";return r;}
  async function importOnline(id){const x=findOnline(id);if(!x)throw new Error("Unknown online profile. Refresh sources first.");if(!x.url)throw new Error("Online source has no downloadable URL");const text=await fetchText(x.url);return importText(text,x.format||(/\.json$/i.test(x.url)?"json":"tcl"),{comment:"Imported by Profiles Library 2.0.2",source:x.source,sourceUrl:x.url,sourceSha:x.sha||""});}
  async function importSkin(id){const x=findSkin(id);if(!x)throw new Error("Unknown installed-skin profile. Refresh installed skins first.");const text=await fetchText(skinAssetUrl(x.skinId,x.path));return importText(text,x.format,{comment:"Imported by Profiles Library 2.0.2",source:x.source,skinId:x.skinId,skinPath:x.path});}

  function renderHtml(){return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><meta name="color-scheme" content="light dark"><script>(function(){var p=new URLSearchParams(location.search),e=p.get('embed')==='1',t=p.get('theme'),d=document.documentElement;d.style.colorScheme=e?(t==='dark'?'dark':'light'):'light dark';if(!e)return;d.classList.add('embedded');var s=document.createElement('style');s.textContent=t==='dark'?'html:root{--bg:#111315;--card:#1a1d20;--text:#f4f5f6;--muted:#a6abb2;--line:#30343a;--accent:#66a6ff;--ok:#55c57a;--warn:#ffb65c;--bad:#ff7b72}':'html:root{--bg:#f5f6f7;--card:#fff;--text:#17191c;--muted:#6a6f76;--line:#dfe2e6;--accent:#1677ff;--ok:#147a3d;--warn:#a05a00;--bad:#b42318}';s.textContent+='html.embedded main{padding-right:64px}';document.head.appendChild(s);try{parent.postMessage({type:'streamline:ready'},'*');}catch(_){}})();<\/script><title>Profiles Library</title><style>
:root{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;color-scheme:light dark;--bg:#f5f6f7;--card:#fff;--text:#17191c;--muted:#6a6f76;--line:#dfe2e6;--accent:#1677ff;--ok:#147a3d;--warn:#a05a00;--bad:#b42318}@media(prefers-color-scheme:dark){:root{--bg:#111315;--card:#1a1d20;--text:#f4f5f6;--muted:#a6abb2;--line:#30343a;--accent:#66a6ff;--ok:#55c57a;--warn:#ffb65c;--bad:#ff7b72}}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text)}main{max-width:1040px;margin:auto;padding:18px 14px 60px}h1{margin:4px 0;font-size:27px}.sub{color:var(--muted);font-size:13px;margin:0 0 12px}.toolbar{position:sticky;top:0;z-index:4;background:var(--bg);padding:8px 0}input{width:100%;padding:13px;border:1px solid var(--line);border-radius:12px;background:var(--card);color:var(--text);font-size:16px}.row{display:flex;gap:8px;flex-wrap:wrap;margin:9px 0}.chip,.refresh{border:1px solid var(--line);background:var(--card);color:var(--text);border-radius:999px;padding:8px 11px;font-size:12px;cursor:pointer}.chip.active{background:var(--text);color:var(--bg)}.refresh{border-radius:10px;font-weight:650}.meta{color:var(--muted);font-size:12px;margin:8px 2px 12px}.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(270px,1fr));gap:10px}.card{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:13px;display:flex;flex-direction:column;gap:7px}.title{font-weight:700;line-height:1.25}.small{font-size:11px;color:var(--muted)}.badges{display:flex;gap:5px;flex-wrap:wrap}.badge{border:1px solid var(--line);border-radius:999px;padding:3px 6px;font-size:10px;color:var(--muted)}button.import{border:0;border-radius:10px;padding:10px 12px;background:var(--accent);color:white;font-weight:700;margin-top:auto}button.import.installed{background:var(--ok)}button:disabled{opacity:.58}.empty{padding:24px 4px;color:var(--muted)}.toast{position:fixed;left:50%;bottom:18px;transform:translateX(-50%);max-width:90vw;background:#17191c;color:#fff;padding:11px 14px;border-radius:11px;display:none;z-index:9;font-size:13px}.toast.ok{background:var(--ok)}.toast.bad{background:var(--bad)}label{font-size:12px;color:var(--muted);display:flex;align-items:center;gap:5px}
.thumbnail{min-height:134px;border-radius:10px;background:var(--bg);padding:7px 5px 6px}.thumbnail svg{display:block;width:100%;height:106px;overflow:visible}.thumbnail-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:9px;color:var(--muted);font-size:12px}.plot-grid{stroke:var(--line);stroke-width:1}.plot-pressure{color:#d57929;fill:#d57929;stroke:#d57929}.plot-flow{color:#268bd2;fill:#268bd2;stroke:#268bd2}.plot-path{fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.plot-label{stroke:none;font-size:10px;font-weight:600}.plot-axis{fill:var(--muted);font-size:9px}.plot-limit{stroke-dasharray:4 4;stroke-width:1.4;opacity:.8}.plot-caption{font-size:9px;line-height:1.4;color:var(--muted);padding:2px 9px}.preview-retry{border:1px solid var(--line);border-radius:7px;padding:5px 9px;background:var(--card);color:var(--text);font-size:11px;cursor:pointer}
::-webkit-scrollbar{width:8px;height:8px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:var(--line);border-radius:4px}::-webkit-scrollbar-thumb:hover{background:var(--muted)}html.embedded body{overflow:hidden}html.embedded main{height:100vh;height:100dvh;overflow-y:auto}.back{display:none;border:1px solid var(--line);background:var(--card);color:var(--text);border-radius:999px;padding:8px 14px;font-size:13px;cursor:pointer;margin:0 0 8px}.back.show{display:inline-block}.toast{box-shadow:0 6px 24px rgba(0,0,0,.35)}
</style></head><body><main><button class="back" id="back" type="button">&#8592; Back</button><h1>Profiles Library <span class="small">2.0.3</span></h1><p class="sub">Offline snapshot + Decaid defaults + online sources + installed skins. Import only; profiles are not auto-activated.</p><div class="toolbar"><input id="q" type="search" placeholder="Search E61, lever, turbo, blooming…"><div class="row" id="chips"></div><div class="row"><button class="refresh" id="refreshOnline">Refresh online sources</button><button class="refresh" id="refreshSkins">Scan installed skins</button><label><input id="maint" type="checkbox" style="width:auto"> Show maintenance/test</label></div></div><div class="meta" id="meta">Loading…</div><div class="grid" id="grid"></div></main><div class="toast" id="toast"></div><script>
(function () {
  var cat = {snapshot: [], defaults: [], online: [], skins: [], installed: []};
  var filter = 'all';
  var importing = new Set();
  var previewCache = new Map(), previewJobs = new Map(), previewQueue = [];
  var previewActive = 0, previewObserver = null;
  var q = document.getElementById('q'), grid = document.getElementById('grid');
  var meta = document.getElementById('meta'), toast = document.getElementById('toast');
  var maint = document.getElementById('maint');
  var groups = [['all', 'All'], ['snapshot', 'Offline snapshot'], ['default', 'Decaid'], ['online', 'Online'], ['skin', 'Installed skins']];
  function say(text, kind) {
    toast.textContent = text;
    toast.className = 'toast ' + (kind || '');
    toast.style.display = 'block';
    clearTimeout(say.timer);
    say.timer = setTimeout(function () { toast.style.display = 'none'; }, 7000);
  }
  function titleKey(value) {
    return String(value || '').normalize('NFC').trim().toLowerCase();
  }
  function sameTitle(item) {
    var title = titleKey(item.title);
    return title && cat.installed.some(function (installed) { return titleKey(installed.title) === title; });
  }
  function all() { return [].concat(cat.snapshot || [], cat.defaults || [], cat.online || [], cat.skins || []); }
  function request(endpoint, body) {
    var timer;
    var write = body !== undefined;
    var options = write ? {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(body)} : {};
    var timeout = new Promise(function (_, reject) {
      timer = setTimeout(function () {
        reject(new Error(endpoint === 'import'
          ? 'Import response timed out; check Decaid before retrying.'
          : 'Request timed out. Please try again.'));
      }, 20000);
    });
    return Promise.race([timeout, fetch('/api/v1/plugins/profiles-library.reaplugin/' + endpoint, options).then(function (response) {
      return response.text().then(function (text) {
        var data;
        try { data = JSON.parse(text); } catch (_) { throw new Error('Invalid server response'); }
        if (!response.ok) throw new Error(data.error || ('HTTP ' + response.status));
        return data;
      });
    })]).finally(function () { clearTimeout(timer); });
  }
  function previewPlot(model) {
    if (!model || !Array.isArray(model.steps) || !model.steps.length) throw new Error('No curve data');
    var pressureMax = 12, flowMax = 8;
    var stageLayout = model.steps.some(function (step) { return Number(step.seconds) === 0; });
    var total = model.steps.reduce(function (sum, step) { return sum + Number(step.seconds); }, 0);
    var extent = stageLayout ? model.steps.length : total;
    if (!Number.isFinite(total)) throw new Error('Invalid curve duration');
    var segments = [], elapsed = 0;
    model.steps.forEach(function (step) {
      if (['pressure', 'flow'].indexOf(step.pump) < 0 || ![step.target, step.seconds, step.limit || 0].every(function (v) { return Number.isFinite(Number(v)) && Number(v) >= 0; })) throw new Error('Invalid curve data');
      if (step.pump === 'pressure') { pressureMax = Math.max(pressureMax, Number(step.target)); flowMax = Math.max(flowMax, Number(step.limit || 0)); }
      else { flowMax = Math.max(flowMax, Number(step.target)); pressureMax = Math.max(pressureMax, Number(step.limit || 0)); }
    });
    function y(value, pump) { return 87 - Number(value) / (pump === 'pressure' ? pressureMax : flowMax) * 64; }
    model.steps.forEach(function (step, index) {
      var start = 16 + elapsed / extent * 288;
      elapsed += stageLayout ? 1 : Number(step.seconds);
      var end = 16 + elapsed / extent * 288;
      var previous = model.steps[index - 1];
      var from = previous && previous.pump === step.pump ? y(previous.target, step.pump) : y(step.target, step.pump);
      var target = y(step.target, step.pump);
      var path = 'M' + start + ' ' + from + (step.transition === 'smooth' ? ' L' + end + ' ' + target : ' L' + start + ' ' + target + ' L' + end + ' ' + target);
      segments.push({pump: step.pump, path: path, limited: false});
      if (Number(step.limit) > 0) {
        var other = step.pump === 'pressure' ? 'flow' : 'pressure';
        var limitY = y(step.limit, other);
        segments.push({pump: other, path: 'M' + start + ' ' + limitY + ' L' + end + ' ' + limitY, limited: true});
      }
    });
    return {segments: segments, pressureMax: pressureMax, flowMax: flowMax, stageLayout: stageLayout, total: total};
  }
  function paintPreview(box, model) {
    var plot = previewPlot(model);
    box.textContent = ''; box.className = 'thumbnail';
    var ns = 'http://www.w3.org/2000/svg';
    function element(tag, attributes, text) {
      var node = document.createElementNS(ns, tag);
      Object.keys(attributes || {}).forEach(function (key) { node.setAttribute(key, attributes[key]); });
      if (text !== undefined) node.textContent = text;
      return node;
    }
    var svg = element('svg', {viewBox: '0 0 320 106', role: 'img', 'aria-label': 'Pressure and flow target settings for ' + model.title});
    svg.appendChild(element('title', {}, 'Target settings only. Dotted lines are limiters, not measured pressure or flow. Exit conditions may shorten steps.'));
    [23, 55, 87].forEach(function (y) { svg.appendChild(element('line', {x1: 16, x2: 304, y1: y, y2: y, class: 'plot-grid'})); });
    svg.appendChild(element('text', {x: 16, y: 13, class: 'plot-pressure plot-label'}, 'P ' + plot.pressureMax + ' bar'));
    svg.appendChild(element('text', {x: 304, y: 13, 'text-anchor': 'end', class: 'plot-flow plot-label'}, 'F ' + plot.flowMax + ' ml/s'));
    plot.segments.forEach(function (segment) {
      svg.appendChild(element('path', {d: segment.path, class: 'plot-path plot-' + segment.pump + (segment.limited ? ' plot-limit' : ''), 'vector-effect': 'non-scaling-stroke'}));
    });
    svg.appendChild(element('text', {x: 16, y: 102, class: 'plot-axis'}, '0'));
    svg.appendChild(element('text', {x: 304, y: 102, 'text-anchor': 'end', class: 'plot-axis'}, plot.stageLayout ? model.steps.length + ' stages' : Number(plot.total.toFixed(1)) + ' s' + (model.conditional ? ' max' : '')));
    box.appendChild(svg);
    var caption = document.createElement('div'); caption.className = 'plot-caption';
    caption.textContent = plot.stageLayout ? 'Targets · stage layout; timing varies' : (model.conditional ? 'Targets · exits may shorten steps' : 'Targets · duration shown');
    if (plot.segments.some(function (segment) { return segment.limited; })) caption.textContent += ' · dotted: limiter';
    if (model.reference) caption.textContent += ' · bundled reference';
    box.appendChild(caption);
  }
  function previewFailure(item, box, message) {
    if (!box.isConnected) return;
    box.textContent = ''; box.className = 'thumbnail thumbnail-empty'; box.title = message;
    var label = document.createElement('span'); label.textContent = 'Preview unavailable'; box.appendChild(label);
    var retry = document.createElement('button'); retry.className = 'preview-retry'; retry.textContent = 'Retry preview';
    retry.onclick = function () { previewCache.delete(item.id); enqueuePreview(item, box); };
    box.appendChild(retry);
  }
  function watchPreview(item, box, job) {
    job.then(function (model) { if (box.isConnected) paintPreview(box, model); }, function (error) { previewFailure(item, box, error.message); });
  }
  function pumpPreviews() {
    while (previewActive < 3 && previewQueue.length) {
      var queued = previewQueue.shift();
      if (!queued.box.isConnected) continue;
      if (previewJobs.has(queued.item.id)) { watchPreview(queued.item, queued.box, previewJobs.get(queued.item.id)); continue; }
      (function (entry) {
        previewActive++;
        var job = request('preview', {kind: entry.item.kind, id: entry.item.id, filename: entry.item.filename}).then(function (result) {
          previewPlot(result.preview);
          if (previewCache.size >= 240) previewCache.delete(previewCache.keys().next().value);
          previewCache.set(entry.item.id, {model: result.preview, at: Date.now()});
          return result.preview;
        }).catch(function (error) {
          previewCache.set(entry.item.id, {error: error.message, at: Date.now()});
          throw error;
        }).finally(function () { previewJobs.delete(entry.item.id); previewActive--; pumpPreviews(); });
        previewJobs.set(entry.item.id, job); watchPreview(entry.item, entry.box, job);
      })(queued);
    }
  }
  function enqueuePreview(item, box) {
    if (!box.isConnected) return;
    var cached = previewCache.get(item.id);
    if (cached && Date.now() - cached.at < (cached.error ? 30000 : 300000)) {
      if (cached.error) previewFailure(item, box, cached.error); else paintPreview(box, cached.model);
      return;
    }
    box.className = 'thumbnail thumbnail-empty'; box.textContent = 'Loading target curve…';
    if (previewJobs.has(item.id)) { watchPreview(item, box, previewJobs.get(item.id)); return; }
    previewQueue.push({item: item, box: box}); pumpPreviews();
  }
  function render() {
    if (previewObserver) previewObserver.disconnect();
    previewQueue = [];
    previewObserver = typeof IntersectionObserver === 'function' ? new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { previewObserver.unobserve(entry.target); enqueuePreview(entry.target.previewItem, entry.target); }
      });
    }, {rootMargin: '120px'}) : null;
    var term = q.value.trim().toLowerCase(), showMaintenance = maint.checked;
    var list = all().filter(function (item) {
      if (filter !== 'all' && item.kind !== filter) return false;
      if (!showMaintenance && item.maintenance) return false;
      var text = [item.title, item.author, item.source, item.path, item.filename].filter(Boolean).join(' ').toLowerCase();
      return !term || text.indexOf(term) >= 0;
    });
    grid.textContent = '';
    list.forEach(function (item) {
      var card = document.createElement('div'); card.className = 'card';
      var title = document.createElement('div'); title.className = 'title';
      title.textContent = item.title || item.filename || item.id; card.appendChild(title);
      var thumbnail = document.createElement('div'); thumbnail.className = 'thumbnail thumbnail-empty';
      thumbnail.textContent = 'Target curve preview'; card.appendChild(thumbnail);
      if (item.preview) {
        try { paintPreview(thumbnail, item.preview); } catch (_) { thumbnail.textContent = 'Preview unavailable'; }
      } else {
        thumbnail.previewItem = item;
        if (previewObserver) previewObserver.observe(thumbnail);
      }
      var badges = document.createElement('div'); badges.className = 'badges';
      [item.source, item.format, item.maintenance ? 'maintenance' : null, sameTitle(item) ? 'Same title in Decaid' : null].filter(Boolean).forEach(function (label) {
        var badge = document.createElement('span'); badge.className = 'badge'; badge.textContent = label; badges.appendChild(badge);
      });
      card.appendChild(badges);
      if (item.author) {
        var author = document.createElement('div'); author.className = 'small'; author.textContent = 'by ' + item.author; card.appendChild(author);
      }
      var button = document.createElement('button'); button.className = 'import';
      button.disabled = importing.has(item.id);
      button.textContent = button.disabled ? 'Importing…' : 'Import';
      button.onclick = function () {
        if (importing.has(item.id)) return;
        importing.add(item.id); render();
        request('import', {kind: item.kind, id: item.id, filename: item.filename}).then(function (result) {
          say('Imported: ' + (result.title || item.title), 'ok');
          return load();
        }).catch(function (error) { say(error.message, 'bad'); }).finally(function () {
          importing.delete(item.id); render();
        });
      };
      card.appendChild(button); grid.appendChild(card);
      if (!item.preview && !previewObserver) enqueuePreview(item, thumbnail);
    });
    if (!list.length) {
      var empty = document.createElement('div'); empty.className = 'empty'; empty.textContent = 'No matching profiles.'; grid.appendChild(empty);
    }
    var counts = cat.counts || {};
    meta.textContent = list.length + ' shown · ' + (counts.defaults || 0) + ' Decaid defaults · ' + (counts.snapshot || 0) + ' extra offline snapshots · ' + (counts.online || 0) + ' online index · ' + (counts.skins || 0) + ' skin profiles';
    var errors = [];
    if (cat.refreshInfo) ['online', 'skins'].forEach(function (scope) {
      var info = cat.refreshInfo[scope];
      if (info && info.errors) errors = errors.concat(info.errors);
    });
    if (errors.length) meta.textContent += ' · ' + errors.length + ' source warning(s)';
    meta.title = errors.join('\\n');
  }
  function chips() {
    var row = document.getElementById('chips');
    groups.forEach(function (group) {
      var button = document.createElement('button'); button.className = 'chip' + (group[0] === filter ? ' active' : ''); button.textContent = group[1];
      button.onclick = function () {
        filter = group[0]; Array.from(row.children).forEach(function (child) { child.classList.remove('active'); }); button.classList.add('active'); render();
      };
      row.appendChild(button);
    });
  }
  function load() {
    return request('catalog').then(function (result) {
      if (!result || !Array.isArray(result.snapshot) || !Array.isArray(result.installed)) throw new Error('Invalid catalog response');
      cat = result; render();
    });
  }
  function refresh(scope, button) {
    button.disabled = true;
    var old = button.textContent; button.textContent = 'Refreshing…';
    request('refresh', {scope: scope}).then(function (result) {
      var info = result.refreshInfo && result.refreshInfo[scope];
      var errors = info && info.errors ? info.errors : [];
      say(errors.length ? 'Refresh finished with ' + errors.length + ' warning(s): ' + errors[0] : 'Refresh complete', errors.length ? 'bad' : 'ok');
      return load();
    }).catch(function (error) { say(error.message, 'bad'); }).finally(function () { button.disabled = false; button.textContent = old; });
  }
  chips(); q.addEventListener('input', render); maint.addEventListener('change', render);
  document.getElementById('refreshOnline').onclick = function () { refresh('online', this); };
  document.getElementById('refreshSkins').onclick = function () { refresh('skins', this); };
  load().catch(function (error) { meta.textContent = 'Catalog unavailable. Reload to try again.'; say(error.message, 'bad'); });
(function(){if(document.documentElement.classList.contains('embedded'))return;var b=document.getElementById('back'),rt=new URLSearchParams(location.search).get('returnTo');if(rt){try{var u=new URL(rt);if(u.protocol!=='http:'&&u.protocol!=='https:')rt=null}catch(_){rt=null}}if(!rt&&history.length<2)return;b.classList.add('show');b.onclick=function(){if(rt)location.href=rt;else history.back()}})();
})();
</script></body></html>`;}

  return {id:PLUGIN_ID,version:VERSION,onLoad:function(){log("loaded v"+VERSION)},onUnload:function(){log("unloaded")},onEvent:function(){},__httpRequestHandler:function(req){
    if(req.endpoint==="ui")return textResponse(200,"text/html; charset=utf-8",renderHtml());
    if(req.endpoint==="skin")return jsonResponse(200,{version:1,surfaces:[],settingsOpen:{type:"open",presentation:"overlay",closeOnShot:true}});
    if (req.endpoint === "preview") {
      if (req.method !== "POST") return jsonResponse(405, {error: "Method not allowed"});
      const body = bodyObject(req);
      if (!body) return jsonResponse(400, {error: "Invalid JSON object"});
      return loadPreview(body).then(preview => jsonResponse(200, {preview})).catch(error => jsonResponse(400, {error: error.message}));
    }
    if(req.endpoint==="catalog")return catalog().then(x=>jsonResponse(200,x)).catch(e=>jsonResponse(500,{error:e.message}));
    if(req.endpoint==="refresh"){if(req.method!=="POST")return jsonResponse(405,{error:"Method not allowed"});const b=bodyObject(req);if(!b)return jsonResponse(400,{error:"Invalid JSON object"});const scope=b.scope||"all";if(!["all","online","skins"].includes(scope))return jsonResponse(400,{error:"Invalid refresh scope"});let job;if(scope==="online")job=refreshOnline();else if(scope==="skins")job=refreshSkins();else job=Promise.all([refreshOnline(),refreshSkins()]);return job.then(x=>jsonResponse(200,{success:true,result:x,refreshInfo})).catch(e=>jsonResponse(500,{error:e.message}));}
    if(req.endpoint==="import"){if(req.method!=="POST")return jsonResponse(405,{error:"Method not allowed"});const b=bodyObject(req);if(!b)return jsonResponse(400,{error:"Invalid JSON object"});let job;if(b.kind==="default")job=importDefault(b.filename);else if(b.kind==="snapshot")job=importSnapshot(b.id);else if(b.kind==="online")job=importOnline(b.id);else if(b.kind==="skin")job=importSkin(b.id);else return jsonResponse(400,{error:"Invalid import request"});return job.then(x=>{log("imported "+x.title);return jsonResponse(200,x)}).catch(e=>{log("import failed: "+e.message);return jsonResponse(400,{error:e.message})});}
    return jsonResponse(404,{error:"Not found"});
  }};
}
