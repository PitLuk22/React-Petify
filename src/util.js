const playAudio = (audioRef) => {
	const playPromise = audioRef.current.play();
	if (playPromise !== undefined) {
		playPromise
			.then(() => audioRef.current.play())
			.catch(e => e);
	}
}

export { playAudio };