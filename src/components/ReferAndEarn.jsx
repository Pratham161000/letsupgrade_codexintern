import React from 'react';

function ReferAndEarn() {
  const rewards = [
    {
      image: "/placeholder.svg?height=100&width=100",
      alt: "Smart Watch"
    },
    {
      image: "/placeholder.svg?height=100&width=100",
      alt: "Wireless Earbuds"
    },
    {
      image: "/placeholder.svg?height=100&width=100",
      alt: "Amazon Gift Card"
    },
    {
      image: "/placeholder.svg?height=100&width=100",
      alt: "Black T-Shirt"
    }
  ];

  return (
    <section className="refer-earn">
      <div className="container">
        <div className="refer-earn-header">
          <span className="section-tag">REFER & EARN</span>
          <h2 className="refer-earn-title">Refer & Earn</h2>
          <p className="refer-earn-subtitle">
            Refer your friends to LetsUpgrade programs and earn T-shirts, gadgets, vouchers, help tech aspirants, and more
          </p>
        </div>

        <div className="rewards-showcase">
          {rewards.map((reward, index) => (
            <div key={index} className="reward-item">
              <img src={reward.image} alt={reward.alt} />
            </div>
          ))}
        </div>

        <div className="steps-container">
          <div className="step-card step-1">
            <div className="step-content">
              <h3 className="step-title">Step 1</h3>
              <p className="step-description">Generate your Referral link - Share it</p>
              <p className="step-detail">
                Once generated, share it with all your friends, and if they join, 
                we'll let you unlock free goodies as your reward points.
              </p>
              <button className="btn-black">Get My Link</button>
            </div>
            <div className="step-image">
              <img src="/placeholder.svg?height=200&width=200" alt="Share with friends" />
            </div>
          </div>

          <div className="step-card step-2">
            <div className="step-image">
              <img src="/placeholder.svg?height=200&width=200" alt="Leaderboard" />
            </div>
            <div className="step-content">
              <h3 className="step-title">Step 2</h3>
              <p className="step-description">See yourself top the leader board</p>
              <p className="step-detail">
                For every friend who joins, not only will you get rewards, 
                you will be the highest on giving your greatest chance to win range GOOOD luck!!
              </p>
              <button className="btn-black">Get My Link</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReferAndEarn;

