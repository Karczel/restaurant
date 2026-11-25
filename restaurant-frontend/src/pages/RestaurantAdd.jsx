import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

export default function RestaurantAdd() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [location, setLocation] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleRestaurantAdd(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await api.post("/api/restaurants", {
        name,
        rating,
        location,
      });

      // After successful signup → redirect to login page
      navigate("/restaurant");
    } catch (err) {
      console.error(err);
      setError("Adding a restaurant failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ padding: "2rem", maxWidth: 400, margin: "0 auto" }}>
      <h1>Add Restaurant</h1>

      <form
        onSubmit={handleRestaurantAdd}
        style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
      >
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Adding Restaurant…" : "Add Restaurant"}
        </button>

        {error && <div style={{ color: "red" }}>{error}</div>}
      </form>
    </div>
  );
}
