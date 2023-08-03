const checkbox = document.querySelector('input');

// Populate the checkbox with the current value.
browser.storage.local.get('global_enable', ({ global_enable }) => {
	checkbox.checked = global_enable;
});

// Update on change.
checkbox.addEventListener('input', e => {
	browser.storage.local.set({ 'global_enable': checkbox.checked });
});
