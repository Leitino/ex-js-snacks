var Browser = {
  tab: ['Facebook', 'gitHub', 'Gmail', 'google', 'twitter'],
  active_tab:0,
}

var socials=['Facebook', 'twitter'];

for (var i = 0; i < Browser.tab.length; i++) {
  if (socials.includes(Browser.tab[i])) {
    Browser.tab.splice(i,1)
  }
  else {
    Browser.active_tab = +3
  }
}
    console.log(Browser.tab)
    console.log(Browser.active_tab)
