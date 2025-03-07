"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "@/styles/nearmeyelp.module.css";

export default function NearbyRestaurants() {
  const [location, setLocation] = useState(null);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async (latitude, longitude) => {
      const res = await fetch(
        `/api/yelp?latitude=${latitude}&longitude=${longitude}`
      );
      const data = await res.json();

      if (res.ok) {
        setRestaurants(data.businesses || []);
      }
    };

    const getUserLocation = () => {
      return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition((position) =>
          resolve(position.coords)
        );
      });
    };

    const fetchData = async () => {
      const { latitude, longitude } = await getUserLocation();
      setLocation({ latitude, longitude });
      await fetchRestaurants(latitude, longitude);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <Link href="/NearMeMap" className={styles.linkButton}>
          See the map
        </Link>
        <h2 className={styles.heading}>Nearby Restaurants</h2>
        {location ? (
          <p>
            <strong>Your Location is </strong>: {location.latitude},{" "}
            {location.longitude}
          </p>
        ) : (
          <p>Fetching location...</p>
        )}
        <Link href="/" className={styles.linkButton}>
          ← Back
        </Link>
      </div>

      <div className={styles.gridContainer}>
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className={styles.restaurantCard}>
            <div>
              <img
                className={styles.restaurantImage}
                src={
                  restaurant.image_url ||
                  "https://as1.ftcdn.net/v2/jpg/04/62/93/66/1000_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg"
                }
                alt={restaurant.name}
              />
            </div>

            <div>
              <p className={styles.textBlack}>{restaurant.name}</p>
              <p className={styles.textGray}>⭐ {restaurant.rating}</p>
              <p className={styles.textGray}>{restaurant.location?.address1}</p>
              <p className={styles.textGray}>
                {restaurant.categories
                  ?.map((category) => category.title)
                  .join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
