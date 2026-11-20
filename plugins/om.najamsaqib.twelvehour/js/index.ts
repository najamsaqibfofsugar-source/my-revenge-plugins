const LONG_DATE_FORMAT = {
	LT: "h:mm A",
	LTS: "h:mm:ss A",
	L: "DD/MM/YYYY",
	LL: "D MMMM YYYY",
	LLL: "D MMMM YYYY h:mm A",
	LLLL: "dddd, D MMMM YYYY h:mm A",
};

function applyTwelveHour() {
	const m = (globalThis as any).bunny?.metro?.findByProps?.("updateLocale", "defineLocale");
	if (!m) return;

	[m.locale(), "en-gb", "en"].forEach((l) => {
		if (l) m.updateLocale(l, { longDateFormat: LONG_DATE_FORMAT });
	});
	m.locale(m.locale());
}

export default plugin({
	start() {
		applyTwelveHour();
		setTimeout(applyTwelveHour, 1500);
	},
	stop() {
		console.log("[12h-en-gb] stopped");
	},
});
