const DefaultOptionsKP = {
	target: null,
	playlist: null,
	options: {
		rounded: false,
		volume: 1
	}
};
const iconsLib = {
	default: {
		prev: 'M0,0 2.4,0 2.4,16 0,16Z M16,0 16,16 0,8Z',
		playback: {
			play: 'M0,16 16,8 0,0 0,16z',
			pause: 'M0,0 2.4,0 2.4,16 0,16Z M13.6,0 16,0 16,16 13.6,16Z'
		},
		next: 'M0,0 16,8 0,16z M13.6,0 16,0 16,16 13.6,16z',
		playlist: {
			closed: 'M0,1.2 16,1.2 16,3.6 0,3.6z M0,6.8 16,6.8 16,9.2 0,9.2z M0,12.4 16,12.4 16,14.8 0,14.8z',
			opened: 'M16 1.794 14.206 0 8 6.206 1.794 0 0 1.794 6.206 8 0 14.206 1.794 16 8 9.794 14.206 16 16 14.206 9.794 8 16 1.794Z'
		},
		volume: 'M8,0v16l-4.8-4H0V4h3.2L8,0Z M11.8,12.2l-1.1-1.2c.9-.8,1.3-1.9,1.3-3s-.5-2.2-1.3-3l1.1-1.2c1.2,1.1,1.9,2.6,1.9,4.2s-.7,3.1-1.9,4.2Z M11.6,13.4c1.8-1.2,2.8-3.2,2.8-5.3s-1.1-4.2-2.8-5.3l.9-1.3c2.2,1.5,3.6,4,3.6,6.7s-1.4,5.2-3.6,6.7l-.9-1.5Z'
	},
	rounded: {
		prev: 'M15.607.117c-.263-.162-.591-.176-.866-.038L2.4,6.249V1c0-.552-.448-1-1-1h-.4C.448,0,0,.448,0,1v14c0,.552.448,1,1,1h.4c.552,0,1-.448,1-1v-5.249l12.342,6.171c.126.063.262.094.398.094.162,0,.325-.045.468-.133.262-.162.422-.449.422-.758V.875c0-.309-.16-.595-.423-.758Z',
		playback: {
			play: 'M15.523,7.204L1.273.079C.998-.059.67-.045.407.117.144.28-.016.566-.016.875v14.25c0,.309.16.596.422.758.143.088.306.133.468.133.136,0,.272-.031.398-.094l14.25-7.125c.302-.151.492-.46.492-.797s-.19-.646-.492-.796Z',
			pause: 'M1.25,16c-.69,0-1.25-.56-1.25-1.25V1.25C0,.56.56,0,1.25,0s1.25.56,1.25,1.25v13.5c0,.69-.56,1.25-1.25,1.25Z M14.75,16c-.69,0-1.25-.56-1.25-1.25V1.25c0-.69.56-1.25,1.25-1.25s1.25.56,1.25,1.25v13.5c0,.69-.56,1.25-1.25,1.25Z'
		},
		next: 'M.423.117c.263-.162.591-.176.866-.038l12.341,6.17V1C13.63.448,14.078,0,14.63,0h.4c.552,0,1,.448,1,1v14c0,.552-.448,1-1,1h-.4c-.552,0-1-.448-1-1v-5.249S1.288,15.922,1.288,15.922c-.126.063-.262.094-.398.094-.162,0-.325-.045-.468-.133C.16,15.721,0,15.434,0,15.125V.875C0,.566.16.28.423.117Z',
		playlist: {
			closed: 'M14.75,3.65H1.25c-.69,0-1.25-.56-1.25-1.25s.56-1.25,1.25-1.25h13.5c.69,0,1.25.56,1.25,1.25s-.56,1.25-1.25,1.25Z M14.75,14.85H1.25c-.69,0-1.25-.56-1.25-1.25s.56-1.25,1.25-1.25h13.5c.69,0,1.25.56,1.25,1.25s-.56,1.25-1.25,1.25Z M14.75,9.25H1.25c-.69,0-1.25-.56-1.25-1.25s.56-1.25,1.25-1.25h13.5c.69,0,1.25.56,1.25,1.25s-.56,1.25-1.25,1.25Z',
			opened: 'M9.77,8l5.864-5.864c.489-.489.489-1.281,0-1.77s-1.281-.489-1.77,0l-5.864,5.864L2.136.367C1.648-.122.856-.122.367.367S-.122,1.648.367,2.136l5.864,5.864L.367,13.864c-.489.489-.489,1.281,0,1.77.244.244.565.367.885.367s.64-.122.885-.367l5.864-5.864,5.864,5.864c.244.244.565.367.885.367s.64-.122.885-.367c.489-.489.489-1.281,0-1.77l-5.864-5.864Z'
		},
		volume: 'M8,16c-.212,0-.423-.067-.6-.2l-3.733-3.8H1c-.552,0-1-.447-1-1v-6c0-.552.448-1,1-1h2.667L7.4.2c.303-.227.708-.265,1.047-.095.339.169.553.516.553.895v14c0,.379-.214.725-.553.895-.142.07-.295.105-.447.105Z M11.203,11.549h0c-.265-.289-.286-.729-.043-1.037.577-.731.84-1.622.84-2.512s-.325-1.774-.871-2.504c-.231-.309-.207-.739.054-1.023l.02-.022c.336-.366.927-.354,1.238.033.804,1.002,1.259,2.227,1.259,3.516s-.455,2.514-1.259,3.516c-.311.387-.902.399-1.238.033Z M11.997,14.062c-.211-.352-.155-.815.159-1.079,1.449-1.217,2.244-3.01,2.244-4.883s-.867-3.73-2.252-4.894c-.301-.253-.343-.702-.119-1.026h0c.267-.386.81-.452,1.168-.149,1.794,1.522,2.903,3.766,2.903,6.169,0,2.352-1.063,4.553-2.791,6.073-.404.355-1.035.25-1.312-.211h0Z'
	}
}

class kPlayer {
  constructor(options) {
		this.target = options.target;
		this.playlist = options.playlist;
		this.settings = options.options ? this.deepObjectMerge(DefaultOptionsKP.options, options.options) : DefaultOptionsKP.options;
		this.isPlaylist = this.playlist.length > 1;
		this.uiElements = {};
		this.audio = new Audio();
		this.currentSong = 0;
		console.log('work');
		
		// Player State
		this.playerState = {
			_allowSeeking: false,
			_audioEvent: null,
			_autoplay: false,
			_log: null,
			_volumeToggle: false,
			_isLoading: false,
			_isMobile: this.isMobileDevice(),
			_isPlaylist: null,
			_isPlaylistDisplayed: false,
			_isUserAdjustingVolume: false,
			_isUserSeekingAudio: false,
		
			get allowSeeking() { return this._allowSeeking;	},
			get audioEvent() { return this._audioEvent;	},
			get autoplay() { return this._autoplay;	},
			get log() { return this._log;	},
			get volumeToggle() { return this._volumeToggle;	},
			get isLoading() { return this._isLoading; },
			get isMobile() { return this._isMobile; },
			get isPlaylist() { return this._isPlaylist; },
			get isPlaylistDisplayed() { return this._isPlaylistDisplayed; },
			get isUserAdjustingVolume() { return this._isUserAdjustingVolume; },
			get isUserSeekingAudio() { return this._isUserSeekingAudio; },
		
			set allowSeeking(value) {
				if(this._allowSeeking !== value) {
					this._allowSeeking = value;
					this.handleAllowSeekingChange(value);
				}
			},
			set audioEvent(value) {
				if(this._audioEvent !== value) {
					this._audioEvent = value;
					this._log = `Audio Event: ${this._audioEvent}`;
					this.handlePlayerLog(this._log)
				}
			},
			set autoplay(value) { this._autoplay = value;	},
			set log(value) {
				if(this._log !== value) {
					this._log = value;
					this.handlePlayerLog(value);
				}
			},
			set volumeToggle(value) { this._volumeToggle = value; },
			set isLoading(value) {
				if(this._isLoading !== value) {
					this._isLoading = value;
					this.handleIsLoadingChange(value);
				}
			},
			set isMobile(value) { this._isMobile = value; },
			set isPlaylist(value) { this._isPlaylist = value; },
			set isPlaylistDisplayed(value) { this._isPlaylistDisplayed = value; },
			set isUserAdjustingVolume(value) { this._isUserAdjustingVolume = value; },
			set isUserSeekingAudio(value) { this._isUserSeekingAudio = value; },
		
			handlePlayerLog: (log) => {
				const enable = true;
				if(enable) {
					console.log(log);
				}
			},
			handleAllowSeekingChange: (state) => {
				this.uiElements.seek.style.pointerEvents = state && this.audio.duration !== Infinity ? "all" : "none";
			},
			handleIsLoadingChange: (state) => {
				const { addClass, removeClass } = this;
				if(state) {
					// Add the loading class to the player UI
					addClass(this.uiElements.wrapper, 'tp-loading');
				} else {
					// Remove the loading class from the player UI
					removeClass(this.uiElements.wrapper, 'tp-loading');
				}
			},
		};

		this.validatePlayerConfig();
		this.buildUI();
		this.addEventListeners();
		this.loadSong();

		console.log(this);
  }

	validatePlayerConfig() {
		const { target, playlist } = this;

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
		if(this.settings.rounded) {
			this.addClass(wrapper, 'kp-rounded');
		}
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
		this.addClass(this.uiElements.artist, 'kp-song-artist');
		songInformation.appendChild(this.uiElements.artist);

		this.uiElements.title = document.createElement('div');
		this.addClass(this.uiElements.title, 'kp-song-title');
		songInformation.appendChild(this.uiElements.title);
	}

	buildPlayerPanel() {
		const { wrapper } = this.uiElements;
		const { isPlaylist, settings } = this;
		const isMobileDevice = this.isMobileDevice();
		const icons = settings.rounded ? iconsLib.rounded : iconsLib.default;

		const playerWrapper = document.createElement('div');
		this.addClass(playerWrapper, 'kp-player-wrapper');
		wrapper.appendChild(playerWrapper);

    const coverWaper = document.createElement('div');
    this.addClass(coverWaper, 'kp-cover');
    playerWrapper.appendChild(coverWaper);
    
    const playerControls = document.createElement('div');
    this.addClass(playerControls, 'kp-player-controls');
    playerWrapper.appendChild(playerControls);
    
		if(isPlaylist) {
			this.uiElements.prevButton = this.createButton('kp-prev', icons.prev);
			playerControls.appendChild(this.uiElements.prevButton);
		}

    this.uiElements.playbackButton = this.createButton('kp-playback', icons.playback.play);
    playerControls.appendChild(this.uiElements.playbackButton);
    
		if(isPlaylist) {
			this.uiElements.nextButton = this.createButton('kp-next', icons.next);
			playerControls.appendChild(this.uiElements.nextButton);
		}

		this.uiElements.seek = document.createElement('div');
		this.addClass(this.uiElements.seek, 'kp-seek');
		playerControls.appendChild(this.uiElements.seek);

		this.uiElements.buffered = document.createElement('div');
		this.addClass(this.uiElements.buffered, 'kp-buffered');
		this.uiElements.seek.appendChild(this.uiElements.buffered);

		this.uiElements.progress = document.createElement('div');
		this.addClass(this.uiElements.progress, 'kp-progress');
		this.uiElements.seek.appendChild(this.uiElements.progress);

		const timeWrapper = document.createElement('div');
		this.addClass(timeWrapper, 'kp-time-wrapper');
		this.uiElements.seek.appendChild(timeWrapper);

		this.uiElements.currentTime = document.createElement('div');
		this.addClass(this.uiElements.currentTime, 'kp-current-time');
		this.uiElements.currentTime.innerHTML = '00:00';
		timeWrapper.appendChild(this.uiElements.currentTime);
		this.uiElements.duration = document.createElement('div');
		this.addClass(this.uiElements.duration, 'kp-duration');
		this.uiElements.duration.innerHTML = '00:00';
		timeWrapper.appendChild(this.uiElements.duration);

		if(!isMobileDevice) {
			const volumeWrapper = document.createElement('div');
			this.addClass(volumeWrapper, 'kp-volume-wrapper');
			playerControls.appendChild(volumeWrapper);
	
			this.uiElements.volumeButton = this.createButton('kp-volume-button', icons.volume);
			volumeWrapper.appendChild(this.uiElements.volumeButton);
	
			this.uiElements.volumeSeek = document.createElement('div');
			this.addClass(this.uiElements.volumeSeek, 'kp-volume-seek');
			this.uiElements.volumeValue = document.createElement('div');
			this.addClass(this.uiElements.volumeValue, 'kp-volume-value');
			this.uiElements.volumeSeek.appendChild(this.uiElements.volumeValue);
			volumeWrapper.appendChild(this.uiElements.volumeSeek);
		}

		if(isPlaylist) {
			this.uiElements.playlistButton = this.createButton('kp-playlist-button', icons.playlist.closed);
			playerControls.appendChild(this.uiElements.playlistButton);
		}
	}

	buildPlaylistPanel() {
		const { wrapper } = this.uiElements;
		const { playlist, isPlaylist } = this;
		
		if(!isPlaylist) return;

		const playlistWrapper = document.createElement('div');
		this.addClass(playlistWrapper, 'kp-playlist-wrapper');
		wrapper.appendChild(playlistWrapper);

		this.uiElements.playlistContainer = document.createElement('div');
		this.addClass(this.uiElements.playlistContainer, 'kp-playlist');
		playlistWrapper.appendChild(this.uiElements.playlistContainer);

		playlist.forEach(song => {
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
		this.uiElements.playlistItems = this.uiElements.playlistContainer.querySelectorAll('.kp-playlist-item');
	}
	
	createButton(className, iconPath) {
	  const button = document.createElement('button');
		button.setAttribute('type', 'button');
	  this.addClass(button, ['kp-button', className]);

		const icon = this.createIcon(iconPath);
		button.appendChild(icon);

	  return button;
	}

	createIcon(iconPath) {
		const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
		const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
		icon.setAttribute('viewBox', '0 0 16 16');
		path.setAttribute('d', iconPath);
		icon.appendChild(path);
		return icon;
	}

	addEventListeners() {
		const { isPlaylist } = this;

		this.uiElements.playbackButton.addEventListener('click', () => {
			if (this.audio.paused) {
				// Play the audio and set autoplay to true
				this.audio.play();
				this.playerState.autoplay = true;
			} else {
				// Pause the audio and set autoplay to false
				this.audio.pause();
				this.playerState.autoplay = false;
			}
		});

		if(isPlaylist) {
			this.uiElements.prevButton.addEventListener('click', () => {
				console.log("prev");
			});

			this.uiElements.nextButton.addEventListener('click', () => {
				console.log("next");
			});

			this.uiElements.playlistButton.addEventListener('click', () => {
				console.log("Playlist Toggle");
			});
		}

		this.uiElements.volumeButton.addEventListener('click', () => {
			if(this.uiElements.volumeButton.parentNode.classList.contains('kp-volume-open')) {
				this.removeClass(this.uiElements.volumeButton.parentNode, 'kp-volume-open');
			} else {
				this.addClass(this.uiElements.volumeButton.parentNode, 'kp-volume-open');
			}
			console.log("Volume Toggle");
		});

		// Add listeners for all audio events
		this.setupAudioEventListeners();
	}

	setupAudioEventListeners() {
		const audioEvents = [
			'abort', 'canplay', 'canplaythrough', 'durationchange', 'emptied', 'ended', 'error',
			'loadeddata', 'loadedmetadata', 'loadstart', 'pause', 'play', 'playing', 'progress',
			'ratechange', 'seeked', 'seeking', 'stalled', 'suspend', 'timeupdate', 'volumechange', 'waiting'
		];

		audioEvents.forEach(event => {
			if (typeof this[event] === 'function') {
				this.audio.addEventListener(event, this[event].bind(this));
			} else {
				console.log(`No handler found for event: ${event}`);
			}
		});
	}

	
	/* AUDIO EVENTS */ 
	abort() {
		// Forbid Seeking
		this.playerState.allowSeeking = false;
		// Set Audio Event
		this.playerState.audioEvent = 'abort';
	}
	
	canplay() {
		// Set loading status to false
		this.playerState.isLoading = false;
		// Allow Seeking
		this.playerState.allowSeeking = true;
		this.playerState.audioEvent = 'canplay';
	}
	
	canplaythrough() {
		// Set loading status to false
		this.playerState.isLoading = false;
		// Allow Seeking
		this.playerState.allowSeeking = true;
		// Start playback if autoplay is enabled
		if (this.playerState.autoplay) this.audio.play();
		// Set Audio Event
		this.playerState.audioEvent = 'canplaythrough';
	}
	
	durationchange() {
		const { duration } = this.uiElements;
		const { secondsToTimecode } = this;
		// Update the duration display in the UI
		duration.textContent = secondsToTimecode(this.audio.duration);
		// Allow Seeking
		this.playerState.allowSeeking = true;
		// Set Audio Event
		this.playerState.audioEvent = 'durationchange';
	}
	
	emptied() {
		// Forbid Seeking
		this.playerState.allowSeeking = false;
		// Set Audio Event
		this.playerState.audioEvent = 'emptied';
	}
	
	// Ended
	ended() {
		// Play Next
		this.handleNextSong();
		// Set Audio Event
		this.playerState.audioEvent = 'ended';
	}
	
	error() {
		const { addClass } = this;
		// Forbid Seeking
		this.playerState.allowSeeking = false;
		// Set loading status to false
		this.playerState.isLoading = false;
	
		// Define error messages for different error codes
		const errorCodes = {
			1: 'The user canceled the audio.',
			2: 'A network error occurred while fetching the audio.',
			3: 'An error occurred while decoding the audio.',
			4: 'The audio is missing or is in a format not supported by your browser.',
			default: 'An unknown error occurred.'
		};
	
		// Get the error message based on the error code
		const errorCode = errorCodes[this.audio.error.code] || errorCodes['default'];
		// Add the 'error' class to the player UI
		addClass(this.uiElements.wrapper, 'kp-error');
		// Show the error message
		console.error("tPlayer Error: " + errorCode);
		// Pause the audio
		this.pause();
		// Disable autoplay
		this.playerState.autoplay = false;
		// Set Audio Event
		this.playerState.audioEvent = 'error';
		return false;
	}
	
	loadstart() {
		// Set loading status to true
		this.playerState.isLoading = true;
		// Set Audio Event
		this.playerState.audioEvent = 'loadstart';
	}
	
	loadeddata() {
		// Allow Seeking
		this.playerState.allowSeeking = true;
		// Set loading status to false
		this.playerState.isLoading = false;
		// Set Audio Event
		this.playerState.audioEvent = 'loadeddata';
	}
	
	loadedmetadata() {
		const { secondsToTimecode } = this;
		const { duration } = this.uiElements;
		// Update the duration display in the UI
		duration.textContent = secondsToTimecode(this.audio.duration);
		// Allow Seeking
		this.playerState.allowSeeking = true;
		// Set loading status to false
		this.playerState.isLoading = false;
		// Set Audio Event
		this.playerState.audioEvent = 'loadedmetadata';
	}
	
	pause() {
		const { playlistItems, playbackButton } = this.uiElements;
		const { removeClass, settings } = this;
		const icons = settings.rounded ? iconsLib.rounded : iconsLib.default;
		// Remove the 'playing' class from playlist items
		removeClass(playlistItems, 'kp-playing');
		// Remove the 'active' class from the playback button
		removeClass(playbackButton, 'kp-active');
		// Update the playback button icon to 'play'
		playbackButton.querySelector('path').setAttribute('d', icons.playback.play);
		// Set Audio Event
		this.playerState.audioEvent = 'pause';
	}
	
	play() {
		const { playlistItems, playbackButton } = this.uiElements;
		const { addClass, settings } = this;
		const icons = settings.rounded ? iconsLib.rounded : iconsLib.default;
		// Add the 'playing' class to the current playlist item, if it's Playlist
		if(this.isPlaylist) addClass(playlistItems[this.currentSong], 'kp-playing');
		// Add the 'active' class to the playback button
		addClass(playbackButton, 'kp-active');
		// Update the playback button icon to 'pause'
		console.log(icons)
		playbackButton.querySelector('path').setAttribute('d', icons.playback.pause);
		// Allow Seeking
		this.playerState.allowSeeking = true;
		// Set Audio Event
		this.playerState.audioEvent = 'play';
	}
	
	playing() {
		// Set loading status to false
		this.playerState.isLoading = false;
		// Allow Seeking
		this.playerState.allowSeeking = true;
		// Set Audio Event
		this.playerState.audioEvent = 'playing';
	}
	
	progress() {
		// Check if there are buffered data
		if (this.audio.buffered.length) {
			const duration = this.audio.duration;
			const buffered = this.audio.buffered.end(this.audio.buffered.length - 1);
			const progress = buffered / duration;
			// Update the width of the buffered progress bar
			this.uiElements.buffered.style.width = `${progress * 100}%`;
			// Set the opacity of the buffered progress bar
			this.uiElements.buffered.style.opacity = progress === 1 ? 0 : 1;
		}
		// Set Audio Event
		this.playerState.audioEvent = 'progress';
	}
	
	ratechange() {
		// Set Audio Event
		this.playerState.audioEvent = 'ratechange';
	}
	
	seeked() {
		// Set loading status to false
		this.playerState.isLoading = false;
		// Allow Seeking
		this.playerState.allowSeeking = true;
		// Set Audio Event
		this.playerState.audioEvent = 'seeked';
	}
	
	seeking() {
		// Set loading status to true
		this.playerState.isLoading = true;
		// Forbid Seeking
		this.playerState.allowSeeking = false;
		// Set Audio Event
		this.playerState.audioEvent = 'seeking';
	}
	
	stalled() {
		// Forbid Seeking
		this.playerState.allowSeeking = false;
		// Set loading status to true
		this.playerState.isLoading = true;
		// Log the stalled event
		console.log('Playback stalled at', this.audio.currentTime);
		// Set Audio Event
		this.playerState.audioEvent = 'stalled';
	}
	
	suspend() {
		// Set Audio Event
		this.playerState.audioEvent = 'suspend';
	}
	
	timeupdate() {
		const { secondsToTimecode } = this;
		if (!this.playerState.isUserSeekingAudio) {
			// Calculate the percentage of the song that has been played
			const percent = (this.audio.currentTime / this.audio.duration) * 100;
			// Update the width of the playback progress bar
			this.uiElements.progress.style.width = percent + '%';
			// Update the displayed current time in the player
			this.uiElements.currentTime.textContent = secondsToTimecode(this.audio.currentTime);
		}
		// Set Audio Event
		this.playerState.audioEvent = 'timeupdate';
	}
	
	volumechange() {
		const { volumeValue } = this.uiElements;
		const { isMobile } = this.playerState;
		this.settings.volume = this.audio.volume !== 0 ? this.audio.volume : this.settings.volume;
	
		if(!isMobile) {
			volumeValue.style.width = `${this.audio.volume * 100}%`;
		}
	
		// Set Audio Event
		this.playerState.audioEvent = 'volumechange';
	}
	
	waiting() {
		// Set loading status to true
		this.playerState.isLoading = true;
		// Forbid Seeking
		this.playerState.allowSeeking = false;
		// Set Audio Event
		this.playerState.audioEvent = 'waiting';
	}

	loadSong() {
		this.audio.src = this.playlist[this.currentSong].src;
		this.audio.load();
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
	// Format Time
	secondsToTimecode(totalSeconds) {
		if(totalSeconds == Infinity) {
			return "00:00";
		}
		totalSeconds = parseInt(totalSeconds, 10);
		const h = Math.floor(totalSeconds / 3600);
		const m = Math.floor(totalSeconds / 60) % 60;
		const s = totalSeconds % 60;
	
		const timeArr = [h, m, s];
		const formattedArr = timeArr.map(function(value) {
			return value < 10 ? "0" + value : value;
		});
		const filteredArr = formattedArr.filter(function(value, index) {
			return value !== "00" || index > 0;
		});
		return filteredArr.join(":");
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
