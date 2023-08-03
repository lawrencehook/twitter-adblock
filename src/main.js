setInterval(markAds, 100);

function markAds() {
	const adBadges = qsa('.css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0').filter(n => n.innerText == 'Ad');
	const posts = adBadges.map(node => node.closest('article')).filter(x => x);
	posts.forEach(node => node.setAttribute('is_ad', ''));
}

function qsa(q, node=document) {
	return Array.from(node.querySelectorAll(q));
}
