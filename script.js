(() => {
  const songs = Array.isArray(window.LIEDJES) ? window.LIEDJES : [];
  const listView = document.querySelector('#song-list-view');
  const detailView = document.querySelector('#song-detail-view');
  const searchInput = document.querySelector('#song-search');
  const list = document.querySelector('#song-list');
  const count = document.querySelector('#song-count');
  const emptyState = document.querySelector('#empty-state');
  const title = document.querySelector('#song-title');
  const number = document.querySelector('#detail-number');
  const lyrics = document.querySelector('#song-lyrics');

  const clean = (value) => String(value ?? '').trim();
  const getSongKey = (song) => `${clean(song.nummer)}-${clean(song.titel)}`;
  const usableSongs = songs.filter((song) => clean(song.nummer) && clean(song.titel));

  function renderList() {
    const query = clean(searchInput.value).toLocaleLowerCase('nl');
    const matchingSongs = usableSongs.filter((song) =>
      `${clean(song.nummer)} ${clean(song.titel)}`.toLocaleLowerCase('nl').includes(query)
    );

    list.replaceChildren();
    matchingSongs.forEach((song) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'song-card';
      button.setAttribute('aria-label', `Lied ${clean(song.nummer)}: ${clean(song.titel)}`);

      const songNumber = document.createElement('span');
      songNumber.className = 'song-number';
      songNumber.textContent = clean(song.nummer);
      const songTitle = document.createElement('span');
      songTitle.className = 'song-card-title';
      songTitle.textContent = clean(song.titel);
      const chevron = document.createElement('span');
      chevron.className = 'card-chevron';
      chevron.setAttribute('aria-hidden', 'true');

      button.append(songNumber, songTitle, chevron);
      button.addEventListener('click', () => { window.location.hash = encodeURIComponent(getSongKey(song)); });
      list.append(button);
    });

    count.textContent = `${matchingSongs.length} ${matchingSongs.length === 1 ? 'lied' : 'liedjes'}`;
    emptyState.hidden = matchingSongs.length > 0;
    if (!usableSongs.length) {
      emptyState.textContent = 'Er staan nog geen liedjes in de lijst. Voeg ze toe in het bestand liedjes.js.';
    } else if (!matchingSongs.length) {
      emptyState.textContent = 'Geen liedjes gevonden. Probeer een ander nummer of een andere titel.';
    }
  }

  function renderRoute() {
    const key = decodeURIComponent(window.location.hash.replace(/^#/, ''));
    const selectedSong = usableSongs.find((song) => getSongKey(song) === key);

    if (!selectedSong) {
      listView.hidden = false;
      detailView.hidden = true;
      if (key) window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
      renderList();
      return;
    }

    title.textContent = clean(selectedSong.titel);
    number.textContent = `Lied ${clean(selectedSong.nummer)}`;
    lyrics.textContent = clean(selectedSong.tekst) || 'Voor dit lied is nog geen tekst toegevoegd.';
    listView.hidden = true;
    detailView.hidden = false;
    window.scrollTo(0, 0);
  }

  searchInput.addEventListener('input', renderList);
  document.querySelector('#back-button').addEventListener('click', () => {
    if (window.location.hash) window.location.hash = '';
    else { listView.hidden = false; detailView.hidden = true; }
  });
  window.addEventListener('hashchange', renderRoute);
  document.querySelector('.brand').addEventListener('click', (event) => {
    if (!window.location.hash) return;
    event.preventDefault();
    window.location.hash = '';
  });

  renderList();
  renderRoute();
})();
