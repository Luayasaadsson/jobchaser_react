import React from "react";
import { useTheme } from "./../../context/useTheme";
import styles from "./ProfileCards.module.css";

interface Review {
  name: string;
  text: string;
  description: string;
  avatar: string;
  rating: number;
}

interface ProfileCardsProps {
  reviews: Review[];
}

interface StarDisplayProps {
  rating: number;
}

const StarDisplay: React.FC<StarDisplayProps> = ({ rating }) => {
  return (
    <div className={styles.starRating}>
      {[...Array(5)].map((_, index) => (
        <span key={index} className={`${styles.star} ${index < rating ? '' : styles.inactive}`}>★</span>
      ))}
    </div>
  );
};

const ProfileCards: React.FC<ProfileCardsProps> = ({ reviews }) => {
  const { theme } = useTheme();

  return (
    <div className={styles.container}>
      {reviews.map((review, index) => (
        <div
          key={index}
          className={`${styles.card} ${theme === "dark" ? styles.dark : ""}`}
        >
          <img
            src={review.avatar}
            alt={review.name}
            className={styles.avatar}
          />
          <div className={styles.details}>
            <h4
              className={`${styles.name} ${
                theme === "dark" ? styles.dark : ""
              }`}
            >
              {review.name}
            </h4>
            <p
              className={`${styles.text} ${
                theme === "dark" ? styles.dark : ""
              }`}
            >
              {review.text}
            </p>
            <StarDisplay rating={review.rating} />
            <p
              className={`${styles.description} ${
                theme === "dark" ? styles.dark : ""
              }`}
            >
              {review.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileCards;