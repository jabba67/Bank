import React from "react";
import Skeleton from "react-loading-skeleton";
const SkeletonCard = () => {
    return (
      <section>
        <ul className="list">
          {Array(1)
            .fill()
            .map((item, index) => (
              <li className="card" key={index}>
                <Skeleton height={180} />
                <h4 className="card-title">
                  <Skeleton height={36} width={`80%`} />
            </h4>
                <p className="card-channel">
                  <Skeleton width={`60%`} />
                </p>
                <div className="card-metrics">
                  <Skeleton width={`90%`} />
                </div>
              </li>
            ))}
        </ul>
      </section>
    );
  };
  export default SkeletonCard;