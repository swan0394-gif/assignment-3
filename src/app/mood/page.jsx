// src/app/mood/page.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import MenuDropdown from "../menu/page";

const API_URL =
  "https://streaming-availability.p.rapidapi.com/shows/search/title";
const API_KEY = "e2cc210ab0mshbb043f09697405ep1a2fa2jsn17073dce9cb5";

const MOODS = [
  { id: "happy", label: "Happy", emoji: "😄", hint: "Light, comedy, feel-good" },
  { id: "sad", label: "Sad", emoji: "😢", hint: "Drama, emotional, slow" },
  { id: "stressed", label: "Stressed", emoji: "😤", hint: "Action, thriller, loud" },
  { id: "chill", label: "Chill", emoji: "😴", hint: "Calm, slice of life, cozy" },
  { id: "romantic", label: "Romantic", emoji: "💕", hint: "Love, romance, warm" },
  { id: "mindblown", label: "Mind-blown", emoji: "🤯", hint: "Sci-fi, mystery" },
];

const MOOD_QUERIES = {
  happy: "comedy",
  sad: "drama",
  stressed: "action",
  chill: "slice of life",
  romantic: "romantic",
  mindblown: "sci-fi",
};

function getMoodBg(mood) {
  switch (mood) {
    case "happy":
      return "from-amber-400 via-orange-400 to-rose-400";
    case "sad":
      return "from-sky-500 via-sky-600 to-indigo-500";
    case "stressed":
      return "from-orange-500 via-red-500 to-red-600";
    case "chill":
      return "from-emerald-500 via-teal-500 to-cyan-500";
    case "romantic":
      return "from-pink-500 via-rose-500 to-orange-400";
    case "mindblown":
      return "from-violet-500 via-purple-500 to-fuchsia-500";
    default:
      return "from-[#d4621f] via-[#f28b54] to-[#fbd3b0]";
  }
}

function MovieCard({ movie }) {
  const poster =
    movie?.imageSet?.horizontalPoster?.w720 ||
    movie?.imageSet?.horizontalPoster?.w480 ||
    movie?.imageSet?.verticalPoster?.w360 ||
    "";

  return (
    <article className="group rounded-3xl bg-[#fff7ef]/95 overflow-hidden shadow-md flex flex-col h-[270px] transition hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]">
      <div className="h-36 bg-amber-50 overflow-hidden">
        {poster ? (
          <img
            src={poster}
            alt={movie.title || "movie"}
            className="w-full h-full object-cover transition duration-300 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-amber-200 text-sm">
            no poster
          </div>
        )}
      </div>
      <div className="p-4 flex-1 flex flex-col gap-2">
        <h3 className="text-base font-semibold text-[#381c0f] line-clamp-2">
          {movie.title || movie.originalTitle || "Untitled movie / show"}
        </h3>
        <p className="text-xs text-[#381c0f]/60 line-clamp-2">
          {movie.overview || "No description."}
        </p>
        <div className="mt-auto text-[11px] text-[#381c0f]/40 flex gap-3">
          {movie.releaseYear && <span>{movie.releaseYear}</span>}
          {movie.runtime && <span>{movie.runtime} min</span>}
        </div>
      </div>
    </article>
  );
}

export default function MoodPage() {
  const router = useRouter();
  const [activeMood, setActiveMood] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [searchText, setSearchText] = useState("");

function sortMovies(list = []) {
  const withDesc = [];
  const noDesc = [];

  list.forEach((item) => {
    const hasDesc = item?.overview && item.overview.trim() !== "";
    if (hasDesc) withDesc.push(item);
    else noDesc.push(item);
  });

  return [...withDesc, ...noDesc];
}
  async function fetchMovies(term) {
    if (!term) return;
    setLoading(true);
    setErrorMsg("");
    setMovies([]);

    try {
      const url = `${API_URL}?country=AU&title=${encodeURIComponent(
        term
      )}&series_granularity=show&show_type=movie&output_language=en`;

      const res = await fetch(url, {
        method: "GET",
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
        },
      });

      if (!res.ok) throw new Error("API response failed");
      const data = await res.json();
      const arr = Array.isArray(data) ? data : data?.result || [];
      setMovies(sortMovies(arr));
    } catch (err) {
      setErrorMsg(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  function handleMoodClick(mood) {
    setActiveMood(mood);
    const q = MOOD_QUERIES[mood] || mood;
    setSearchText(q);
    fetchMovies(q);
  }

  function handleSearch() {
    fetchMovies(searchText);
  }

  function handleMenuSelect(id) {
    if (id === "tonight") {
      router.push("/");
      return;
    }
    if (id === "random") {
      router.push("/");
      return;
    }
    if (id === "mood") {
      return;
    }
  }

  const currentMood = MOODS.find((m) => m.id === activeMood);

  return (
    <main className="relative min-h-screen">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${getMoodBg(
          activeMood
        )} transition-all duration-500`}
      />
      <div className="pointer-events-none absolute -top-16 -left-10 w-56 h-56 bg-white/25 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-72 h-72 bg-white/15 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto px-4 md:px-6 pt-10 pb-16">
        {/* top bar */}
        <header className="flex items-center justify-between mb-10">
          <Link
            href="/"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-black/10 hover:bg-black/20 text-2xl shadow-sm transition"
            title="Back to Food / Movie"
          >
            🎬
          </Link>

          <MenuDropdown active="mood" onSelect={handleMenuSelect} />
        </header>

        {/* hero */}
        <section className="pb-8 text-white">
          <h1 className="text-[clamp(2.5rem,5vw,3.6rem)] font-bold leading-tight tracking-tight">
            What’s your mood tonight?
          </h1>
          <p className="mt-3 text-base md:text-lg text-white/80 max-w-2xl">
            Pick how you feel right now. we’ll show you movies that match the vibe.
          </p>

          {/* search */}
          <div className="mt-8 flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full rounded-full bg-white/90 px-6 py-3 text-sm text-gray-400 outline-none border border-transparent focus:border-amber-300"
                placeholder="Type a vibe… e.g. comedy, drama, sci-fi"
              />
            </div>
            <button
              onClick={handleSearch}
              className="rounded-full bg-gradient-to-r from-[#ffb347] via-[#ff8c42] to-[#ff5e3a] px-8 py-3 text-sm font-semibold text-black shadow-sm hover:scale-[1.02] transition"
            >
              Search
            </button>
          </div>
        </section>

        {/* mood icons */}
        <section className="mt-4 flex flex-wrap gap-5 md:gap-6">
          {MOODS.map((mood) => (
            <button
              key={mood.id}
              onClick={() => handleMoodClick(mood.id)}
              className={`group flex flex-col items-center justify-center w-[115px] h-[115px] md:w-[130px] md:h-[130px] rounded-full transition-all duration-200 ${
                activeMood === mood.id
                  ? "bg-white/95 shadow-[0_0_55px_rgba(255,255,255,0.75)] scale-[1.03]"
                  : "bg-white/70 hover:bg-white/90 hover:shadow-[0_0_30px_rgba(255,255,255,0.35)]"
              }`}
            >
              <div className="text-3xl md:text-4xl group-hover:scale-110 transition">
                {mood.emoji}
              </div>
              <div className="mt-2 text-sm font-medium text-[#3b2414]">
                {mood.label}
              </div>
            </button>
          ))}
        </section>

        {/* result */}
        <section className="mt-10">
          {loading && (
            <p className="text-white/80 text-sm">Fetching movies for you…</p>
          )}
          {errorMsg && <p className="text-red-200 text-sm mt-2">{errorMsg}</p>}

          {!loading && !errorMsg && activeMood && (
            <div className="mb-6 flex items-center gap-3">
              <span className="text-2xl">{currentMood?.emoji}</span>
              <div>
                <p className="text-white/90 text-xs uppercase tracking-[0.25em]">
                  Because you’re feeling {currentMood?.label}
                </p>
                <p className="text-white/60 text-xs">
                  {currentMood?.hint || "We picked movies to match this vibe."}
                </p>
              </div>
            </div>
          )}

          {!loading && !errorMsg && movies.length === 0 && !activeMood && (
            <p className="text-white/75 text-sm">
              Select a mood to get matching movie suggestions.
            </p>
          )}

          {!loading && !errorMsg && movies.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {movies.map((mv) => (
                <MovieCard key={mv.id || mv.imdbId} movie={mv} />
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
