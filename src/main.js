
// Set the global enable attribute. Defaults to true.
browser.storage.local.get({ 'global_enable': true }, ({ global_enable }) => {
  HTML.setAttribute('global_enable', global_enable);
});


// Respond to changes in settings.
browser.storage.onChanged.addListener(handleStorageChange);
function handleStorageChange(changes, area) {
  if (area !== 'local') return;

  Object.entries(changes).forEach(([id, { oldValue, newValue }]) => {
    HTML.setAttribute(id, newValue);
  });
}


// Add an HTML attribute to ads. Refreshes every 100ms.
setInterval(markAds, 100);
function markAds() {
	const adBadges = qsa('.css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0').filter(n => n.innerText == 'Ad');
	const posts = adBadges.map(node => node.closest('article')).filter(x => x);
	posts.forEach(node => node.setAttribute('is_ad', ''));
}

function qsa(q, node=document) {
	return Array.from(node.querySelectorAll(q));
}
