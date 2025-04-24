        const songsByMood = {
          happy: [
            { title: "Sunshine Beats", cover: "./assets/card2img.jpeg" },
            { title: "Feel Good Vibes", cover: "./assets/card1img.jpeg" }
          ],
          sad: [
            { title: "Alone Nights", cover: "./assets/card3img.jpeg" },
            { title: "Slow Rain", cover: "./assets/card4img.jpeg" }
          ],
          energetic: [
            { title: "Workout Hype", cover: "./assets/card5img.jpeg" },
            { title: "Boost Mode", cover: "./assets/card6img.jpeg" }
          ],
          chill: [
            { title: "Lo-Fi Lounge", cover: "./assets/card1img.jpeg" },
            { title: "Evening Vibes", cover: "./assets/card2img.jpeg" }
          ]
        };
      
        function showMood(mood) {
          const playlistContainer = document.getElementById('playlist-container');
          playlistContainer.innerHTML = ""; // Clear previous cards
      
          songsByMood[mood].forEach(song => {
            playlistContainer.innerHTML += `
              <div class="card">
                <img src="${song.cover}" class="card-img">
                <p class="card-title">${song.title}</p>
                <p class="card-info">${mood.charAt(0).toUpperCase() + mood.slice(1)} mood</p>
              </div>
            `;
          });
        }

      
   