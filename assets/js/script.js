const DefaultOptionsKP = {
	target: null,
	playlist: null
};

class kPlayer {
  constructor(options) {
		this.settings = this.deepObjectMerge(DefaultOptionsKP, options);
		this.uiElements = {};
		console.log('work');

		this.checkError();
		this.buildUI();

		console.log(this);
  }

	checkError() {
		const { target, playlist } = this.settings;

		if(!target) {
			throw new Error('Target is not defined');
		} else {
			const targetElement = document.getElementById(target);

			if(!targetElement) {
				throw new Error('Target element is not defined');
			} else {
				this.uiElements.wrapper = targetElement;
			}
		}

		if(!playlist) {
			throw new Error('Playlist is not defined');
		}
	}

	// Build UI
	buildUI() {
		const { wrapper } = this.uiElements;

		this.addClass(wrapper, 'kp-wrapper');
		this.buildLyricsPanel();
		this.buildPlayerPanel();
		this.buildPlaylistPanel();
	}


	buildLyricsPanel() {
		const { wrapper } = this.uiElements;

		const lyricsWrapper = document.createElement('div');
		this.addClass(lyricsWrapper, 'kp-lyrics-wrapper');
		wrapper.appendChild(lyricsWrapper);

		this.uiElements.lyricsContainer = document.createElement('div');
		this.addClass(this.uiElements.lyricsContainer, 'kp-lyrics-container');
		lyricsWrapper.appendChild(this.uiElements.lyricsContainer);

		const songInformation = document.createElement('div');
		this.addClass(songInformation, 'kp-song-information');
		lyricsWrapper.appendChild(songInformation);

		this.uiElements.artist = document.createElement('div');
		this.addClass(this.uiElements.artist, 'kp-artist');
		songInformation.appendChild(this.uiElements.artist);

		this.uiElements.title = document.createElement('div');
		this.addClass(this.uiElements.title, 'kp-title');
		songInformation.appendChild(this.uiElements.title);
	}

	buildPlayerPanel() {
		const { wrapper } = this.uiElements;

		const playerWrapper = document.createElement('div');
		this.addClass(playerWrapper, 'kp-player-wrapper');
		wrapper.appendChild(playerWrapper);

	}

	buildPlaylistPanel() {
		const { wrapper } = this.uiElements;

		const playlistWrapper = document.createElement('div');
		this.addClass(playlistWrapper, 'kp-playlist-wrapper');
		wrapper.appendChild(playlistWrapper);

		this.uiElements.playlistContainer = document.createElement('div');
		this.addClass(this.uiElements.playlistContainer, 'kp-playlist');
		playlistWrapper.appendChild(this.uiElements.playlistContainer);

		this.settings.playlist.forEach(song => {
			const playlistItem = document.createElement('div');
			this.addClass(playlistItem, 'kp-playlist-item');

			const indicator = document.createElement('div');
			this.addClass(indicator, 'kp-playlist-indicator');
			playlistItem.appendChild(indicator);

			for(var i = 0; i < 3; i++) {
				const bar = document.createElement('span');
				this.addClass(bar, 'kp-playlist-bar');
				indicator.appendChild(bar);
			}

			const songItem = document.createElement('div');
			this.addClass(songItem, 'kp-playlist-song');
			if(song.artist) {
				songItem.innerHTML = `<b>${song.artist}</b> - title`;
			} else {
				songItem.innerHTML = song.title;
			}
			playlistItem.appendChild(songItem);

			this.uiElements.playlistContainer.appendChild(playlistItem);
		});

	}

	/* UTILS */
	// Deep Object Merge
	deepObjectMerge(source, destination) {
		return Object.entries(source).reduce((response, [key, value]) => {
			if (!(key in destination)) {
				response[key] = value;
			} else if (typeof value === "object" && value !== null) {
				response[key] = this.deepObjectMerge(value, destination[key]);
			} else {
				response[key] = destination[key];
			}
	
			return response;
		}, {})
	}
	// Detect Mobile
	isMobileDevice() {
		const toMatch = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];
		return toMatch.some(function(toMatchItem) {
			return navigator.userAgent.match(toMatchItem);
		});
	}
	// Add Class
	addClass(elements, classes) {
		const elementList = (typeof elements === "string") ? document.querySelectorAll(elements) : (elements instanceof Element) ? [elements] : elements;
	
		if(!elementList) return;
	
		const classList = Array.isArray(classes) ? classes : [classes];
		elementList.forEach(element => {
			classList.forEach(cls => {
				if (cls) element.classList.add(cls);
			});
		});
	}
	// Remove Class
	removeClass(elements, classes) {
		const elementList = (typeof elements === "string") ? document.querySelectorAll(elements) : (elements instanceof Element) ? [elements] : elements;
	
		if(!elementList) return;
	
		const classList = Array.isArray(classes) ? classes : [classes];
		elementList.forEach(element => {
			classList.forEach(cls => {
				if (cls) element.classList.remove(cls);
			});
		});
	}
	// Toggle Class
	toggleClass(elements, classes) {
		const elementList = (typeof elements === "string") ? document.querySelectorAll(elements) : (elements instanceof Element) ? [elements] : elements;
	
		if(!elementList) return;
	
		const classList = Array.isArray(classes) ? classes : [classes];
		elementList.forEach(element => {
			classList.forEach(cls => {
				if (cls) element.classList.toggle(cls);
			});
		});
	}
}

const lyrics_bad_kingdom = [
	{
		time: 1,
		text: 'Here it ends'
	}, {
		time: 1,
		text: 'No one\'s gonna shed a tear'
	}, {
		time: 1,
		text: 'No need to shout'
	}, {
		time: 1,
		text: 'Just to stand the silence'
	}, {
		time: 1,
		text: 'well spent time'
	}, {
		time: 1,
		text: 'In the early morning\'s haze'
	}, {
		time: 1,
		text: 'You sit and wait'
	}, {
		time: 1,
		text: 'Watching full glasses through blank eyes'
	}, {
		time: 1,
		text: 'This is not'
	}, {
		time: 1,
		text: 'What you wanted'
	}, {
		time: 1,
		text: 'What you had in mind'
	}, {
		time: 1,
		text: 'Vacuous winter stare'
	}, {
		time: 1,
		text: 'Worn out version of yourself'
	}, {
		time: 1,
		text: 'Too tough to fall'
	}, {
		time: 1,
		text: 'But not strong enough to turn'
	}, {
		time: 1,
		text: 'This is not'
	}, {
		time: 1,
		text: 'What you wanted'
	}, {
		time: 1,
		text: 'What you had in mind'
	}, {
		time: 1,
		text: 'Here'
	}, {
		time: 1,
		text: 'Here'
	}
];



const playlist = [
	{
		title: 'Bad Kingdom',
		artist: 'Moderat',
		cover: 'asstes/img/artworks-m7GjbQaLBBSE-0-t500x500.jpg',
		lyrics: lyrics_bad_kingdom,
		src: 'assets/mp3/Moderat - Bad Kingdom.mp3'
	}, {
		title: 'Eating Hooks',
		artist: 'Moderat',
		cover: 'asstes/img/MTR067DNL_Cover_300dpi_3000x3000.jpg',
		lyrics: lyrics_bad_kingdom,
		src: 'assets/mp3/Moderat - Eating Hooks.mp3'
	}, {
		title: 'Late Night',
		artist: 'Foals',
		cover: 'asstes/img/ab67616d0000b2738b04dacf186124a62bc667a7.jfif',
		lyrics: lyrics_bad_kingdom,
		src: 'assets/mp3/Foals - Late Night.mp3'
	},
];

const player = new kPlayer({
	target: 'test',
	playlist: playlist
});


/* 
var lyricsContainer = document.querySelector('.kp-lyrics-container');
var kpLyricsLine = document.querySelectorAll('.kp-lyrics-line');

var step = kpLyricsLine[0].clientHeight;
var count = 0;

kpLyricsLine[0].classList.add('kp-current-lyrics-line');

setInterval(() => {
	if( count >= 3) {
		lyricsContainer.style.top = (count - 3) * -step + 'px';
	}
	
	kpLyricsLine.forEach((item) => {
		item.classList.remove('kp-current-lyrics-line');
	});
	kpLyricsLine[count].classList.add('kp-current-lyrics-line');
	count++;
}, 1000);

*/
