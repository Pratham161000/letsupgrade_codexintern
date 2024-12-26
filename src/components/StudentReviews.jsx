import React from 'react';

function StudentReviews() {
  const reviews = [
    {
      text: "I had a great experience with the HTML & CSS Bootcamp program. The mentors were experienced and helped me understand from the basic level which made it easier to understand all my subjects.",
      author: "Michael Raja",
      rating: 5
    },
    {
      text: "It was so helpful to study from the professionals of LetsUpgrade. They were very supportive to all students who were attending their lectures. I feel very happy to complete the course of JavaScript.",
      author: "Priya Singh",
      rating: 5
    },
    {
      text: "I was really glad learning with LetsUpgrade as online learning platform. I learned python from beginner to expert program and a lot of many things from it. The mentors were really good and their communication & help was indeed useful.",
      author: "Rahul Kumar",
      rating: 5
    },
    {
      text: "It's been a beautiful Program experience. Learnings were interactive and got an opportunity to learn so many new things. I loved the live games which it unfortunately, I am not a bit.",
      author: "Sneha Patel",
      rating: 5
    },
    // Add more reviews as needed
  ];

  return (
    <section className="student-reviews">
      <div className="container">
        <div className="reviews-header">
          <span className="section-tag">REVIEWS</span>
          <h2 className="reviews-title">What Our Students Have To Say</h2>
          <p className="reviews-subtitle">Our student feedback helps us evolve something to give to itself, better</p>
          
          <div className="rating-badges">
            <div className="google-rating">
              <img src="/placeholder.svg?height=30&width=100" alt="Google Reviews" />
              <div className="rating">
                <span className="rating-score">4.9/5.0</span>
                <div className="stars">★★★★★</div>
              </div>
            </div>
            <div className="google-rating">
              <img src="/placeholder.svg?height=30&width=100" alt="Microsoft Learn" />
              <div className="rating">
                <span className="rating-score">4.9/5.0</span>
                <div className="stars">★★★★★</div>
              </div>
            </div>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-content">
                <p>{review.text}</p>
              </div>
              <div className="review-author">
                <div className="stars">{'★'.repeat(review.rating)}</div>
                <div className="author-name">{review.author}</div>
              </div>
              <button className="review-button">Read More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StudentReviews;

