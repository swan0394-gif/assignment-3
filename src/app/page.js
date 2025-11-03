// src/app/page.js
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import MenuDropdown from "./menu/page";

const API_URL =
  "https://streaming-availability.p.rapidapi.com/shows/search/title";
const API_KEY = "e2cc210ab0mshbb043f09697405ep1a2fa2jsn17073dce9cb5";

const FOOD_OPTIONS = [
  { id: "pizza", label: "Pizza", emoji: "🍕", query: "pizza" },
  { id: "burger", label: "Burger", emoji: "🍔", query: "burger" },
  { id: "sushi", label: "Sushi", emoji: "🍣", query: "sushi" },
  { id: "fried", label: "Fried Chicken", emoji: "🍗", query: "fried chicken" },
  { id: "noodles", label: "Noodles", emoji: "🍜", query: "noodles" },
  { id: "dessert", label: "Dessert", emoji: "🧁", query: "dessert" },
];

function MovieCard({ movie }) {
  const poster =
    movie?.imageSet?.horizontalPoster?.w720 ||
    movie?.imageSet?.horizontalPoster?.w480 ||
    movie?.imageSet?.verticalPoster?.w360 ||
    "";

  return (
    <article
      className="group rounded-3xl bg-[#fff7ef]/95 overflow-hidden shadow-md flex flex-col h-[280px] transition hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.12)]"
    >
      <div className="h-40 bg-amber-50 overflow-hidden">
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
        <div className="mt-auto text-[11px] text-[#381c0f]/40 flex gap-4">
          {movie.releaseYear && <span>{movie.releaseYear}</span>}
          {movie.runtime && <span>{movie.runtime} min</span>}
        </div>
      </div>
    </article>
  );
}

function getFoodBg(foodId) {
  switch (foodId) {
    case "pizza":
      return "bg-[#d4621f]";
    case "burger":
      return "bg-[#c24b2a]";
    case "sushi":
      return "bg-[#d14863]";
    case "fried":
      return "bg-[#c96722]";
    case "noodles":
      return "bg-[#b24f3b]";
    case "dessert":
      return "bg-[#d15590]";
    default:
      return "bg-[#d4621f]";
  }
}

function renderEmojiOverlay(activeFood) {
  if (!activeFood) return null;

  const emojiMap = {
    pizza: "🍕",
    burger: "🍔",
    sushi: "🍣",
    fried: "🍗",
    noodles: "🍜",
    dessert: "🧁",
  };

  const e = emojiMap[activeFood] || "🍕";

  return (
    <div className="pointer-events-none absolute inset-0 opacity-[0.5] select-none">
      <div className="absolute top-20 left-8 text-5xl rotate-8">{e}</div>
      <div className="absolute top-2/3 left-8 text-5xl rotate-8">{e}</div>
      <div className="absolute top-1/3 right-16 text-5xl">{e}</div>
      <div className="absolute bottom-10 right-6 text-5xl rotate-6">{e}</div>
    </div>
  );
}

export default function FoodMoviePage() {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const [activeFood, setActiveFood] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [activeTab, setActiveTab] = useState("tonight");

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

  function handleFoodClick(food) {
    setActiveFood(food.id);
    setSearchText(food.label);
    fetchMovies(food.query);
  }

  function handleSearch() {
    setActiveFood("");
    fetchMovies(searchText);
  }

  function handleReset() {
    setSearchText("");
    setActiveFood("");
    setMovies([]);
    setErrorMsg("");
    setActiveTab("tonight");
  }

  // menu
  function handleMenuSelect(key) {
    setActiveTab(key);
    if (key === "tonight") return;
    if (key === "random") {
      const rnd =
        FOOD_OPTIONS[Math.floor(Math.random() * FOOD_OPTIONS.length)];
      handleFoodClick(rnd);
      return;
    }
    if (key === "mood") {
      router.push("/mood");
      return;
    }
  }

  const activeFoodObj = FOOD_OPTIONS.find((f) => f.id === activeFood);
  const becauseLabel = activeFoodObj
    ? activeFoodObj.label
    : searchText.trim() || "";
  const becauseEmoji = activeFoodObj ? activeFoodObj.emoji : null;

  return (
    <main className={`relative min-h-screen ${getFoodBg(activeFood)}`}>
      {renderEmojiOverlay(activeFood)}

      <div className="relative max-w-6xl mx-auto px-4 md:px-6 pt-10 pb-16">
        {/* top bar */}
        <header className="flex items-center justify-between mb-10">
          <button
            onClick={handleReset}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-black/10 hover:bg-black/20 text-2xl shadow-sm transition"
            title="Back to start"
          >
            🎬
          </button>

          <MenuDropdown active={activeTab} onSelect={handleMenuSelect} />
        </header>

        {/* hero */}
        <section className="pb-8">
          <h1 className="text-[clamp(2.5rem,5vw,3.85rem)] font-bold leading-tight tracking-tight text-white">
            What to Watch Tonight?
          </h1>
          <p className="mt-3 text-base md:text-lg text-white/80 max-w-2xl">
            Pick what you’re eating tonight, we’ll suggest movies to match it.
          </p>

          {/* search */}
          <div className="mt-8 flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full rounded-full bg-[#fff7ef] px-6 py-3 text-sm text-gray-400 outline-none border border-transparent focus:border-amber-300"
                placeholder="Type your dish… e.g. pizza, sushi, fried chicken"
              />
            </div>
            <button
              onClick={handleSearch}
              className="rounded-full bg-gradient-to-r from-[#ffb347] via-[#ff8c42] to-[#ff5e3a] px-8 py-3 text-sm font-semibold text-black shadow-sm hover:scale-[1.02] transition"
            >
              Search
            </button>
          </div>

          {/* icons */}
          <div className="mt-8 flex flex-wrap gap-5 md:gap-6">
            {FOOD_OPTIONS.map((food) => (
              <button
                key={food.id}
                onClick={() => handleFoodClick(food)}
                className={`group relative flex flex-col items-center justify-center w-[115px] h-[115px] md:w-[130px] md:h-[130px] rounded-full transition-all duration-200 ${
                  activeFood === food.id
                    ? "bg-white shadow-[0_12px_40px_rgba(255,255,255,0.35)] scale-[1.03]"
                    : "bg-white/70 hover:bg-white/90 hover:shadow-[0_0_30px_rgba(255,255,255,0.35)]"
                }`}
              >
                <div className="text-3xl md:text-4xl group-hover:scale-110 transition">
                  {food.emoji}
                </div>
                <div className="mt-2 text-sm font-medium text-[#402010]">
                  {food.label}
                </div>
                {activeFood === food.id && (
                  <span className="pointer-events-none absolute inset-0 rounded-full bg-white/60 blur-2xl opacity-90" />
                )}
              </button>
            ))}
          </div>
        </section>

        {becauseLabel && (
          <div className="mt-4 flex items-center gap-3">
            {becauseEmoji && (
              <span className="text-2xl drop-shadow-sm">{becauseEmoji}</span>
            )}
            <div>
              <p className="text-white/80 text-xs uppercase tracking-[0.25em]">
                Because you’re eating {becauseLabel}
              </p>
              <p className="text-white/50 text-xs">
                {movies.length > 0
                  ? `We found ${movies.length} movies to match this.`
                  : "Try a search or pick another dish."}
              </p>
            </div>
          </div>
        )}

        {/* result */}
        <section>
          {loading && (
            <p className="text-white/80 mt-4">Fetching movies for you…</p>
          )}
          {errorMsg && <p className="text-red-100 mt-4">{errorMsg}</p>}

          {!loading && !errorMsg && movies.length === 0 && !becauseLabel && (
            <p className="mt-6 text-white/50 text-sm">
              Pick a food icon or type a dish to see movie suggestions.
            </p>
          )}

          {!loading && !errorMsg && movies.length > 0 && (
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {movies.map((m) => (
                <MovieCard key={m.id || m.imdbId} movie={m} />
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
